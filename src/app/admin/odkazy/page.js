"use client"
import React, {useEffect, useState} from 'react';
import "./Odkazy.css"
import {useRouter} from "next/navigation";
import {createLink, deleteLink, getLinks} from "@/services/linkService";
import {MdDelete, MdModeEdit, MdOpenInNew} from "react-icons/md";
import {useSession} from "next-auth/react";
import Loading from "@/components/admin/Loading";
import Unauthorized from "@/components/admin/Unauthorized";
import {IoMdAdd} from "react-icons/io";
import {motion} from "motion/react";

const AdminLinkManager = () => {
    const router = useRouter();
    const [linktreeLinks, setLinktreeLinks] = useState([]);
    const { data: session, status } = useSession();
    const [formData, setFormData] = useState({label: "", link: ""})
    const [formShown, setFormShown] = useState(false);

    const openCreateForm = () => {

    }

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

    const submitCreate = async (e) => {
        e.preventDefault();
        if (!formData.label || !formData.link) {
            alert("Některá pole nejsou vyplněná! Nelze odeslat!")
            return;
        }
        await createLink(formData);
        setLinktreeLinks(await getLinks());
        setFormData({label: "", link: ""});
        setFormShown(false);
    }

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
                            <button className={"addLinkAdminButton"} onClick={() => {setFormShown(!formShown)}}><IoMdAdd className={"addLinkAdminButtonIcon"}/>Přidat nový</button>
                        </div>
                        {linktreeLinks.map((link) => (
                            <div key={link._id} className="linkInList">
                                <div className="linkInfo">
                                    <h4>{link.label}</h4>
                                    <p>{`${link.link.substring(0,42)}${link.link.length > 42 ? "..." : ""}`}</p>
                                </div>
                                <div className="linkActions">
                                    <button className="manageLinkOpen" onClick={() => router.push(link.link)}>
                                        <MdOpenInNew className="linkIcon"/>Otevřít</button>
                                    <button className="manageLinkEdit" >
                                        <MdModeEdit className="linkIcon"/>Upravit</button>
                                    <button className="manageLinkDelete" onClick={() => submitDelete(link._id)}>
                                        <MdDelete className="linkIcon"/>Smazat</button>
                                </div>
                            </div>
                        ))}
                    </article>
                    <motion.article className="adminLinksWorkspaceForm"
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
                        <form onSubmit={submitCreate}>
                            <label htmlFor="labelInput">Název odkazu</label><br/>
                            <input id={"labelInput"}
                                   placeholder="Zde zadej label"
                                   onChange={(e) => setFormData(prev => ({ ...prev, label: e.target.value }))}
                            /><br/>
                            <label htmlFor="linkInput">Odkaz</label><br/>
                            <input id={"linkInput"}
                                   placeholder="Zde vlož odkaz"
                                   onChange={(e) => setFormData(prev => ({ ...prev, link: e.target.value }))}
                            />
                            <input type="submit" className="adminLinkSubmitForm"/>
                        </form>
                    </motion.article>
                </div>
            </section>

        </main>
    );
};

export default AdminLinkManager;