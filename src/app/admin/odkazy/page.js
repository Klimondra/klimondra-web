"use client"
import React, {useEffect, useState} from 'react';
import "./Odkazy.css"
import {useRouter} from "next/navigation";
import getLinks from "@/services/linkService";
import {MdDelete, MdModeEdit, MdOpenInNew} from "react-icons/md";
import {useSession} from "next-auth/react";
import Loading from "@/components/admin/Loading";
import Unauthorized from "@/components/admin/Unauthorized";

const AdminLinkManager = () => {
    const router = useRouter();
    const [linktreeLinks, setLinktreeLinks] = useState([]);
    const { data: session, status } = useSession();

    useEffect(() => {
        (async () => {
            try {
                setLinktreeLinks(await getLinks());
            } catch (error) {
                console.error("Chyba při načítání odkazů:", error);
            }
        })();
    }, []); // Získá data

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
                        <h3>Odkazy v databázi</h3>
                        {linktreeLinks.map((link) => (
                            <div key={link._id} className="linkInList">
                                <div className="linkInfo">
                                    <h4>{link.label}</h4>
                                    <p>{`${link.link.substring(0,42)}${link.link.length > 42 ? "..." : ""}`}</p>
                                </div>
                                <div className="linkActions">
                                    <button className="manageLinkOpen" onClick={() => router.push(link.link)}>
                                        <MdOpenInNew className="linkIcon"/>Otevřít</button>
                                    <button className="manageLinkEdit">
                                        <MdModeEdit className="linkIcon"/>Upravit</button> // TODO: Dodělat funkčnost mazání, úpravy a přidat možnost přidání odkazu
                                    <button className="manageLinkDelete">
                                        <MdDelete className="linkIcon"/>Smazat</button>
                                </div>
                            </div>
                        ))}
                    </article>
                </div>
            </section>

        </main>
    );
};

export default AdminLinkManager;