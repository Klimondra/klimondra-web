"use client"
import React, {useEffect, useRef, useState} from 'react';
import "./Odkazy.css"
import {useRouter} from "next/navigation";
import {createLink, deleteLink, editLink, getLinks} from "@/services/linkService";
import {MdDelete, MdModeEdit, MdOpenInNew} from "react-icons/md";
import {useSession} from "next-auth/react";
import Loading from "@/components/admin/Loading";
import Unauthorized from "@/components/admin/Unauthorized";
import {IoMdAdd} from "react-icons/io";
import {motion} from "motion/react";
import DynamicIcon from "@/components/global/DynamicIcon";
import {createTech, deleteTech, editTech, getTechs} from "@/services/techService";

const AdminLinkManager = () => {
    //#region use Statements
    const router = useRouter();
    const [techstack, setTechstack] = useState([]);
    const { data: session, status } = useSession();
    const [formData, setFormData] = useState({
        label: "",
        color: "",
        icon: { lib: "Md", name: "MdLink" }
    })
    const [formShown, setFormShown] = useState(false);
    const [isEditModeForm, setIsEditModeForm] = useState(false);
    const formRef = useRef(null);
    //#endregion

    //#region Component Methods
    const openCreateForm = () => {
        if (isEditModeForm) setIsEditModeForm(false);

        if (formShown && (formData.color || formData.label) ){
            setFormData({label: "", color: "", icon: { lib: "Md", name: "MdLink" }})
            setFormShown(true);
        } else if (formShown && (!formData.color && !formData.label)) {
            setFormShown(false);
        } else if (!formShown) {
            setFormData({label: "", color: "", icon: { lib: "Md", name: "MdLink" }})
            setFormShown(true);
        }

        setTimeout(() => {
            if (window.innerWidth < 1136) {
                formRef.current?.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);

    }

    const openUpdateForm = (id) => {
        const actualTechData = techstack.find((technology) => technology._id === id);

        setFormData({
            id: actualTechData._id,
            label: actualTechData.label,
            link: actualTechData.color,
            icon: actualTechData.icon || { lib: "Md", name: "MdLink" }
        });
        setIsEditModeForm(true);
        setFormShown(true);
        setTimeout(() => {
            if (window.innerWidth < 1136) {
                formRef.current?.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    }

    //#endregion

    //#region Database Actions
    useEffect(() => {
        (async () => {
            try {
                setTechstack(await getTechs());
            } catch (error) {
                console.error("Chyba při načítání technologií:", error);
            }
        })();
    }, []); // Získá data

    const submitDelete = async (id) => {
        const techLabelToDelete = techstack.find(technology => technology._id === id).label;
        const confirmed = confirm(`Opravdu chceš technologii ${techLabelToDelete} smazat?`);

        if (confirmed) {
            await deleteTech(id);
            setTechstack(techstack.filter((tech) => tech._id !== id));
        }
    }

    const submitCreate = async () => {
        if (!formData.label || !formData.color) {
            alert("Některá pole nejsou vyplněná! Nelze odeslat!")
            return;
        }
        await createTech(formData);
        setTechstack(await getTechs());
        setFormData({label: "", color: "", icon: { lib: "Md", name: "MdLink" }});
        setFormShown(false);
    }

    const submitEdit = async (id) => {
        if (!formData.label || !formData.color) {
            alert("Některá pole nejsou vyplněná! Nelze odeslat úpravu!")
            return;
        }
        await editTech(id, formData)
        setTechstack(await getTechs());
        setFormData({label: "", color: "", icon: { lib: "Md", name: "MdLink" }});
        setFormShown(false);
    }
    //#endregion

    if (status === "loading") return <Loading />;
    if (!session) return <Unauthorized/>;
    return (
        <main>
            <section>
                <header>
                    <h2>Správa techstacku</h2>
                    <button onClick={() => router.push("/admin")}>Zpět na Dahsboard</button>
                </header>
                <div className="adminLinksWorkspace">
                    <article className="linkList">
                        <div className={"linkListHeader"}>
                            <h3>Techstack v databázi</h3>
                            <button className={"addLinkAdminButton"} onClick={() => {openCreateForm()}}><IoMdAdd className={"addLinkAdminButtonIcon"}/>Přidat nový</button>
                        </div>
                        {techstack.map((link) => (
                            <div key={link._id} className="linkInList">
                                <div className="linkInfo">
                                    {/* Kontrolujeme, zda link.icon existuje, než se pokusíme přistoupit k jeho vlastnostem */}
                                    {link.icon ? (
                                        <DynamicIcon lib={link.icon.lib} name={link.icon.name} style={{ color: link.color }}/>
                                    ) : (
                                        <DynamicIcon lib="Md" name="MdLink"  style={{ color: link.color }} />
                                    )}
                                    <h4>{link.label}</h4>
                                </div>
                                <div className="linkActions">
                                    <button className="manageLinkOpen" onClick={() => router.push(link.link)}>
                                        <MdOpenInNew className="linkIcon"/>Otevřít</button>
                                    <button className="manageLinkEdit" onClick={() => openUpdateForm(link._id)}>
                                        <MdModeEdit className="linkIcon" />Upravit</button>
                                    <button className="manageLinkDelete" onClick={() => submitDelete(link._id)}>
                                        <MdDelete className="linkIcon"/>Smazat</button>
                                </div>
                            </div>
                        ))}
                    </article>

                    <motion.article className="adminLinksWorkspaceForm"
                                    ref={formRef}
                                    initial={{
                                        opacity: 0,
                                        x: "100%"
                                    }}
                                    animate={{
                                        opacity: formShown ? 1 : 0,
                                        x: formShown ? 0 : "100%",
                                    }}
                                    transition={{duration: 0.3, ease: "circInOut"}}
                    >
                        <h3>Formulář pro odkazy</h3>
                        <form onSubmit={(e) => e.preventDefault()} >
                            <label htmlFor="labelInput">Název technologie</label><br/>
                            <input id={"labelInput"}
                                   placeholder="Zde zadej label"
                                   value={formData.label}
                                   onChange={(e) => setFormData(prev => ({ ...prev, label: e.target.value }))}
                            /><br/>
                            <label htmlFor="linkInput">Barva</label><br/>
                            <input id={"linkInput"}
                                   placeholder="Zde vlož barvu"
                                   value={formData.color || ""}
                                   onChange={(e) => setFormData(prev => ({ ...prev, color: e.target.value }))}
                            /><br/>
                            {/* Přidáme pole pro výběr ikony */}
                            <span className={"adminLinkIconInputCont"}>
                                <span className="adminLinkIconOneInput">
                            <label htmlFor="iconLibInput">Knihovna ikony</label>
                            <input id={"iconLibInput"}
                                   className={"adminLinkIconInput"}
                                   placeholder="Např. Md, Fa, Io"
                                   value={formData.icon?.lib || ""}
                                   onChange={(e) => setFormData(prev => ({
                                       ...prev,
                                       icon: { ...prev.icon, lib: e.target.value }
                                   }))}
                            /> </span>
                                <span className="adminLinkIconOneInput">
                            <label htmlFor="iconNameInput">Název ikony</label>
                            <input id={"iconNameInput"}
                                   className={"adminLinkIconInput"}
                                   placeholder="Např. MdLink, FaLink"
                                   value={formData.icon?.name || ""}
                                   onChange={(e) => setFormData(prev => ({
                                       ...prev,
                                       icon: { ...prev.icon, name: e.target.value }
                                   }))}
                            />
                                    </span>
                            </span>
                            <input type="submit" className="adminLinkSubmitForm" value={`${isEditModeForm ? "Aktualizovat" : "Přidat"} ${formData.label}`} onClick={() => {isEditModeForm ? submitEdit(formData.id) : submitCreate()}}/>
                        </form>
                    </motion.article>
                </div>
            </section>
        </main>
    );
};

export default AdminLinkManager;