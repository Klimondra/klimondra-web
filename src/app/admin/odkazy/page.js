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

const AdminLinkManager = () => {
    //#region use Statements
    const router = useRouter();
    const [linktreeLinks, setLinktreeLinks] = useState([]);
    const { data: session, status } = useSession();
    const [formData, setFormData] = useState({
        label: "",
        link: "",
        icon: { lib: "Md", name: "MdLink" } // Výchozí hodnota pro ikonu
    })
    const [formShown, setFormShown] = useState(false);
    const [isEditModeForm, setIsEditModeForm] = useState(false);
    const formRef = useRef(null);
    //#endregion

    //#region Component Methods
    const openCreateForm = () => {
        if (isEditModeForm) setIsEditModeForm(false);

        if (formShown && (formData.link || formData.label) ){
            setFormData({label: "", link: "", icon: { lib: "Md", name: "MdLink" }})
            setFormShown(true);
        } else if (formShown && (!formData.link && !formData.label)) {
            setFormShown(false);
        } else if (!formShown) {
            setFormData({label: "", link: "", icon: { lib: "Md", name: "MdLink" }})
            setFormShown(true);
        }

        setTimeout(() => {
            if (window.innerWidth < 1136) {
                formRef.current?.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);

    }

    const openUpdateForm = (id) => {
        const actualLinkData = linktreeLinks.find((link) => link._id === id);

        setFormData({
            id: actualLinkData._id,
            label: actualLinkData.label,
            link: actualLinkData.link,
            // Použijeme existující ikonu nebo výchozí hodnotu, pokud není definována
            icon: actualLinkData.icon || { lib: "Md", name: "MdLink" }
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
                setLinktreeLinks(await getLinks());
            } catch (error) {
                console.error("Chyba při načítání odkazů:", error);
            }
        })();
    }, []); // Získá data

    const submitDelete = async (id) => {
        const linkLabelToDelete = linktreeLinks.find(link => link._id === id).label;
        const confirmed = confirm(`Opravdu chceš odkaz na ${linkLabelToDelete} smazat?`);

        if (confirmed) {
            await deleteLink(id);
            setLinktreeLinks(linktreeLinks.filter((link) => link._id !== id));
        }
    }

    const submitCreate = async () => {
        if (!formData.label || !formData.link) {
            alert("Některá pole nejsou vyplněná! Nelze odeslat!")
            return;
        }
        await createLink(formData);
        setLinktreeLinks(await getLinks());
        setFormData({label: "", link: "", icon: { lib: "Md", name: "MdLink" }});
        setFormShown(false);
    }

    const submitEdit = async (id) => {
        if (!formData.label || !formData.link) {
            alert("Některá pole nejsou vyplněná! Nelze odeslat úpravu!")
            return;
        }
        await editLink(id, formData)
        setLinktreeLinks(await getLinks());
        setFormData({label: "", link: "", icon: { lib: "Md", name: "MdLink" }});
        setFormShown(false);
    }
    //#endregion

    if (status === "loading") return <Loading />;
    if (!session) return <Unauthorized/>;
    return (
        <main>
            <section>
                <header>
                    <h2>Správa odkazů</h2>
                    <button onClick={() => router.push("/admin")}>Zpět na Dahsboard</button>
                </header>
                <div className="adminLinksWorkspace">
                    <article className="linkList">
                        <div className={"linkListHeader"}>
                            <h3>Odkazy v databázi</h3>
                            <button className={"addLinkAdminButton"} onClick={() => {openCreateForm()}}><IoMdAdd className={"addLinkAdminButtonIcon"}/>Přidat nový</button>
                        </div>
                        {linktreeLinks.map((link) => (
                            <div key={link._id} className="linkInList">
                                <div className="linkInfo">
                                    {/* Kontrolujeme, zda link.icon existuje, než se pokusíme přistoupit k jeho vlastnostem */}
                                    {link.icon ? (
                                        <DynamicIcon lib={link.icon.lib} name={link.icon.name} />
                                    ) : (
                                        <DynamicIcon lib="Md" name="MdLink" />
                                    )}
                                    <h4>{link.label}</h4>
                                    <p>{`${link.link.substring(0,42)}${link.link.length > 42 ? "..." : ""}`}</p>
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
                            <label htmlFor="labelInput">Název odkazu</label><br/>
                            <input id={"labelInput"}
                                   placeholder="Zde zadej label"
                                   value={formData.label}
                                   onChange={(e) => setFormData(prev => ({ ...prev, label: e.target.value }))}
                            /><br/>
                            <label htmlFor="linkInput">Odkaz</label><br/>
                            <input id={"linkInput"}
                                   placeholder="Zde vlož odkaz"
                                   value={formData.link}
                                   onChange={(e) => setFormData(prev => ({ ...prev, link: e.target.value }))}
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