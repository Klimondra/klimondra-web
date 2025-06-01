"use client"
import React, {useEffect, useState} from 'react';
import {useParams} from "next/navigation";
import Link from "next/link";
import {collections} from "@/db/collections";
import {
    createDbData, createDbDataAndReturn,
    deleteDbDataById, deleteDbDataEq,
    getColumnInfo, getDbDataEq,
    getDbDataList,
    updateDbDataById
} from "@/db/db-actions";
import DynamicIcon from "@/components/utils/DynamicIcon";
import PrimaryButton from "@/components/general/buttons/primaryButton";
import {MdEdit} from "react-icons/md";
import Image from "next/image";
import {motion, AnimatePresence} from "motion/react";
import {reorderAfterDelete, reorderItems} from "@/app/(admin)/admin/kolekce/[collectionName]/editorScripts";
import {toast, Toaster} from "react-hot-toast";
import RelationSelector from "@/components/adminEditor/relationSelector";

const EditorKolekce = () => {
    // Načítání dat
    const {collectionName} = useParams();
    const [loading, setLoading] = useState(true);
    const collectionInfo = collections.find(collection => collection.name === collectionName);
    const [collectionColumns, setCollectionColumns] = useState([]);
    const [collectionData, setCollectionData] = useState([]);
    const [relationData, setrelationData] = useState({});
    const [relations, setRelations] = useState({});

    // Editor
    const [editorOpen, setEditorOpen] = useState(false);
    const [editorMetadata, setEditorMetadata] = useState({action: "closed", id: null});
    const [editorData, setEditorData] = useState({});

    const createButton = () => {
        if (editorMetadata.action === "closed") {
            setEditorMetadata({action: "create", id: null});
            setEditorData({order: collectionData.length});
            setEditorOpen(true);
        } else if (editorMetadata.action === "create") {
            setEditorMetadata({action: "closed", id: null});
            setEditorData({order: collectionData.length});
            setEditorOpen(false);
        } else if (editorMetadata.action === "edit") {
            setEditorMetadata({action: "create", id: null});
            setEditorData({order: collectionData.length});
        }
    }

    const editButton = (id) => {
        if (editorMetadata.action === "closed") {
            setEditorMetadata({ action: "edit", id: id });
            const dataOfElement = collectionData.find(data => data.id === id);
            let relationsOfElement = {};
            Object.keys(relations).forEach((relationType) => {
                let relationsForType = relations[relationType].filter(relation => relation[`${collectionName}_id`] === id);
                relationsForType = relationsForType.map(relation => {
                    const relatedItem = relationData[relationType]?.find(d => d.id === relation[`${relationType}_id`]);
                    return {
                        value: relation[`${relationType}_id`],
                        label: relatedItem?.label || relation[`${relationType}_id`]
                    };
                });
                relationsOfElement = { ...relationsOfElement, [relationType]: relationsForType };
            });
            setEditorData({ ...dataOfElement, relations: relationsOfElement });
            setEditorOpen(true);
        } else if (editorMetadata.action === "edit" && editorMetadata.id === id) {
            setEditorMetadata({ action: "closed", id: null });
            setEditorData({});
            setEditorOpen(false);
        } else if (editorMetadata.action === "edit" || editorMetadata.action === "create") {
            setEditorMetadata({ action: "edit", id: id });
            const dataOfElement = collectionData.find(data => data.id === id);
            let relationsOfElement = {};
            Object.keys(relations).forEach((relationType) => {
                let relationsForType = relations[relationType].filter(relation => relation[`${collectionName}_id`] === id);
                relationsForType = relationsForType.map(relation => {
                    const relatedItem = relationData[relationType]?.find(d => d.id === relation[`${relationType}_id`]);
                    return {
                        value: relation[`${relationType}_id`],
                        label: relatedItem?.label || relation[`${relationType}_id`]
                    };
                });
                relationsOfElement = { ...relationsOfElement, [relationType]: relationsForType };
            });
            setEditorData({ ...dataOfElement, relations: relationsOfElement });
        }
    }

    const submitEditor = async () => {
        if (editorMetadata.action === "create") {
            const { relations: relationsOfEditor, ...withoutRelations } = editorData;
            const createdData = await createDbDataAndReturn(collectionName, withoutRelations)

            const newId = createdData[0].id

            if (Object.keys(relationsOfEditor).length > 0) {
                for (const relationName of Object.keys(relationsOfEditor)) {
                    const relationsToPush = [];
                    relationsOfEditor[relationName].forEach((relationData) => {
                        relationsToPush.push({
                            [`${collectionName}_id`]: newId,
                            [`${relationName}_id`]: relationData.value
                        });
                    })
                    await createDbData(`relations_${collectionName}_${relationName}`, relationsToPush)
                }
            }
        }

        if (editorMetadata.action === "edit") {
            const originalData = collectionData.find(d => d.id === editorMetadata.id);
            const originalOrder = originalData.order;
            const newOrder = parseInt(editorData.order);
            if (originalOrder !== newOrder) {
                await reorderItems(originalOrder, newOrder, editorMetadata.id, collectionName, collectionData);
            }

            const { relations: relationsOfEditor, ...withoutRelations } = editorData;
            await updateDbDataById(collectionName, editorMetadata.id, withoutRelations);

            if (Object.keys(relationsOfEditor).length > 0) {
                for (const relationName of Object.keys(relationsOfEditor)) {
                    const relationsToPush = [];
                    relationsOfEditor[relationName].forEach((relationData) => {
                        relationsToPush.push({
                            [`${collectionName}_id`]: editorMetadata.id,
                            [`${relationName}_id`]: relationData.value
                        });
                    })
                    await deleteDbDataEq(`relations_${collectionName}_${relationName}`, {[`${collectionName}_id`]: editorMetadata.id});
                    await createDbData(`relations_${collectionName}_${relationName}`, relationsToPush)
                }
            }
        }


        setEditorMetadata({action: "closed", id: null});
        setEditorOpen(false);
        fetchInfo();
        toast.success("Data byla úspěšně vložena do databáze." )
    }

    const deleteButton = async (id) => {
        await deleteDbDataById(collectionName, id);
        setCollectionData(collectionData.filter(data => data.id !== id));
        setEditorMetadata({action: "closed", id: null});
        setEditorOpen(false);
        await reorderAfterDelete(collectionName, collectionData);
        fetchInfo();
        toast.success("Data byla úspěšně smazána" )
    }

    // Získávání dat z kolekce
    useEffect(() => {
        const loadData = async () => {
            await fetchInfo();
        };
        loadData();
    }, [collectionName]);

    const fetchInfo = async () => {

        // 1. Sloupce
        const columnInfo = await getColumnInfo(collectionName);
        setCollectionColumns(columnInfo);

        // 2. Kolekční data
        const data = await getDbDataList(collectionName, true);
        setCollectionData(data);

        // 3. Relace: načíst relace kolekcí a jejich data
        const relationDataTemp = {};
        const relationsTemp = {};

        if (collectionInfo.relations?.length > 0) {
            for (const relation of collectionInfo.relations) {
                const relatedItems = await getDbDataList(relation.related_collection, true);
                relationDataTemp[relation.related_collection] = relatedItems;

                const relationItems = await getDbDataList(`relations_${collectionName}_${relation.related_collection}`, true);
                relationsTemp[relation.related_collection] = relationItems;
            }
        }

        setrelationData(relationDataTemp);
        setRelations(relationsTemp);

        setLoading(false);
    }

    return (
        <>
            <h1 className={`font-readex text-black/80 font-light text-2xl`}><Link href={"/admin/kolekce"}>Kolekce &gt; </Link> <span className={`text-black text-4xl font-bold`}>{collectionInfo.visible_name}</span></h1>

            {loading && <section className={`w-full h-full mt-16 flex items-center justify-center md:mt-0`}>
                <h2 className={`font-readex font-semibold text-3xl text-black`}>Načítám...</h2>
            </section>}

            {!loading && <section className={`w-full min-h-full mt-10 flex flex-col gap-6 lg:flex-row`}>
                <div
                    className={`w-full p-2 flex flex-col gap-2 lg:flex-1 xl:flex-5
                                bg-gradient-to-br from-primaryBlue-50/10 to-primaryBlue-50/20 rounded-lg border-1 border-neutral-200 shadow-md`}
                >
                    <PrimaryButton label={`Nový záznam ${collectionName}`} className={`w-64 self-end`} onClick={() => createButton()}/>
                    {collectionData.map((data) => (
                        <article key={data.id}
                            className={`w-full h-16 px-2.5 py-1.5 flex flex-row justify-between items-center
                                        bg-gradient-to-br from-primaryBlue-50/20 to-primaryBlue-50/30 rounded-lg border-1 border-neutral-200 shadow-md
                                        sm:h-18 md:h-20`}
                        >
                            <div className={`h-full flex flex-col justify-between`}>
                                {(data.icon_lib && data.icon_component) && <DynamicIcon lib={data.icon_lib} name={data.icon_component} className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8`} />}
                                {data.image && <Image src={data.image} alt={data.label} width={128} height={128} className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8`} />}
                                <h3 className={`font-readex text-base text-black sm:text-lg md:text-xl`}>{data.label}</h3>
                            </div>
                            <PrimaryButton
                                label={"Upravit"}
                                className={`text-sm flex flex-row gap-1.25 items-center max-md:!py-1.75 max-md:!px-2.25 md:text-base`}
                                onClick={() => editButton(data.id)}
                            >
                                <MdEdit className={`text-white inline text-lg`}/>
                            </PrimaryButton>
                        </article>
                    ))}
                </div>
                <AnimatePresence>
                {editorOpen &&
                    <motion.div className={`w-full p-2 flex flex-col gap-2 lg:flex-1 xl:flex-3
                                    bg-gradient-to-br from-primaryBlue-50/10 to-primaryBlue-50/20 rounded-lg border-1 border-neutral-200 shadow-md`}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.3, ease: "easeInOut"}}
                    >
                    <h2 className={`font-readex text-black font-semibold text-2xl`}>Editor</h2>
                    <form className={`w-full h-full flex flex-col gap-4`} onSubmit={(e) => {e.preventDefault(); submitEditor()}}>
                        {collectionColumns.map((columnInfo) => {
                            const skipColumnNames = ["id", "created_at"];
                            if (editorMetadata.action === "create") {skipColumnNames.push("order")}
                            const numTypes = ["smallint", "integer", "bigint", "real", "double precision", "numeric"];
                            const textTypes = ["text", "character varying"];
                            const datetimeTypes = ["timestamp without time zone", "timestamp with time zone", "date", "time without time zone", "time with time zone"];

                            if (skipColumnNames.includes(columnInfo.column_name)) {
                                return null
                            }

                            const matchingCustomField = collectionInfo.custom_fields?.find(
                                (customField) => customField.columnName === columnInfo.column_name
                            );

                            if (matchingCustomField) {
                                const Component = matchingCustomField.component;
                                return <div key={columnInfo.column_name} className={`w-full flex flex-col gap-1`}>
                                    <label htmlFor={`labelFor${columnInfo.column_name}`}>{columnInfo.column_name}</label>
                                    <Component key={columnInfo.column_name}
                                               id={`labelFor${columnInfo.column_name}`}
                                               value={editorData[columnInfo.column_name] ?? ""}
                                               onChange={(e) => setEditorData({...editorData, [columnInfo.column_name]: e.target.value})} />
                                </div>

                            }

                            if (textTypes.includes(columnInfo.data_type)) {
                                return <div key={columnInfo.column_name} className={`w-full flex flex-col gap-1`}>
                                    <label htmlFor={`labelFor${columnInfo.column_name}`}>{columnInfo.column_name}</label>
                                    <input id={`labelFor${columnInfo.column_name}`}
                                           type={"text"}
                                           required={columnInfo.is_nullable === "NO"}
                                           value={editorData[columnInfo.column_name] ?? ""}
                                           onChange={(e) => setEditorData({...editorData, [columnInfo.column_name]: e.target.value})}
                                           className={`w-full h-10 px-2.5 py-1.5 rounded-lg border-1 bg-white/70 border-neutral-200 shadow-md outline-0`} />
                                </div>
                            } else if (numTypes.includes(columnInfo.data_type)) {
                                return <div key={columnInfo.column_name} className={`w-full flex flex-col gap-1`}>
                                    <label htmlFor={`labelFor${columnInfo.column_name}`}>{columnInfo.column_name}</label>
                                    <input id={`labelFor${columnInfo.column_name}`}
                                           type={"number"}
                                           required={columnInfo.is_nullable === "NO"}
                                           value={editorData[columnInfo.column_name] ?? ""}
                                           onChange={(e) => setEditorData({...editorData, [columnInfo.column_name]: e.target.value})}
                                           className={`w-full h-10 px-2.5 py-1.5 rounded-lg border-1 bg-white/70 border-neutral-200 shadow-md outline-0`} />
                                </div>
                            } else if (datetimeTypes.includes(columnInfo.data_type)) {
                                return <div key={columnInfo.column_name} className={`w-full flex flex-col gap-1`}>
                                    <label htmlFor={`labelFor${columnInfo.column_name}`}>{columnInfo.column_name}</label>
                                    <input id={`labelFor${columnInfo.column_name}`}
                                           type={"date"}
                                           required={columnInfo.is_nullable === "NO"}
                                           value={editorData[columnInfo.column_name] ?? ""}
                                           onChange={(e) => setEditorData({...editorData, [columnInfo.column_name]: e.target.value})}
                                           className={`w-full h-10 px-2.5 py-1.5 rounded-lg border-1 bg-white/70 border-neutral-200 shadow-md outline-0`} />
                                </div>
                            } else {
                                return <div key={columnInfo.column_name} className={`w-full flex flex-col gap-1`}>
                                    <label htmlFor={`labelFor${columnInfo.column_name}`}>{columnInfo.column_name}</label>
                                    <input id={`labelFor${columnInfo.column_name}`}
                                           type={"text"}
                                           required={columnInfo.is_nullable === "NO"}
                                           value={editorData[columnInfo.column_name] ?? ""}
                                           onChange={(e) => setEditorData({...editorData, [columnInfo.column_name]: e.target.value})}
                                           className={`w-full h-10 px-2.5 py-1.5 rounded-lg border-1 bg-white/70 border-neutral-200 shadow-md outline-0`}
                                           placeholder={`Vlože data formátu: ${columnInfo.data_type}`}/>
                                </div>
                            }
                            return null
                            // TODO: Dodělat:
                            // - Kontrola zda sloupec nemá vlastní pole/editor = DONE
                            // - Podmínky pro různé typy sloupců (text, číslo, datum, atd.) a jejich inputy  = DONE
                            // - Přidat validace pro inputy = DONE
                            // - Přidat logiku odesílání formuláře a uložení dat do databáze = ČÁSTEČNĚ
                            // - Přidat logiku pořadí (order) = DONE
                            // - Přidat logiku relací kolekcí: https://chatgpt.com/share/6838b7c6-139c-8002-a915-df7d42df9e47 = DONE
                            // - Přidat fetchování na samotných stránkách
                            // - Test, deploy, doména
                        })}

                        {collectionInfo.relations?.map((relation) => {
                            return <div key={relation.related_collection} className={`w-full flex flex-col gap-1`}>
                                <label htmlFor={`labelFor${relation.related_collection}`}>{relation.related_collection}</label>
                                <RelationSelector id={`labelFor${relation.related_collection}`}
                                                  relatedData={relationData[relation.related_collection]}
                                                  relationName={relation.related_collection}
                                                  editorData={editorData}
                                                  setEditorData={setEditorData}
                                />
                            </div>

                        })}

                        <div className={`w-full flex flex-row justify-end gap-2`}>
                            {editorMetadata.action === "edit" &&
                            <PrimaryButton type={"button"} label={"Smazat"} className={`from-red-400 to-red-500 border-red-600 flex-1`} onClick={() => toast.custom((t) => (
                                <div className={`bg-white p-4 rounded shadow-md border flex flex-col gap-2 w-64 ${ t.visible ? 'animate-enter' : 'animate-leave'}`}>
                                    <p className="text-sm text-gray-800 font-medium">Opravdu chceš smazat záznam?</p>
                                    <div className="flex justify-end gap-2 mt-2">
                                        <button className="text-sm px-3 py-1 rounded bg-gray-200 hover:bg-gray-300" onClick={() => toast.dismiss(t.id)}>Ne</button>
                                        <button className="text-sm px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                                            onClick={() => { deleteButton(editorMetadata.id); toast.dismiss(t.id); }}>Ano</button>
                                    </div>
                                </div>
                            ))}/>}
                            <PrimaryButton label={editorMetadata.action === "create" ? "Vytvořit" : "Upravit"} type={"submit"} className={`flex-2`} />
                        </div>
                    </form>
                </motion.div> }
                </AnimatePresence>
            </section>}
            <Toaster position={"bottom-right"} />
        </>
    );
};

export default EditorKolekce;
