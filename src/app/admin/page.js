"use client";
import React, {useEffect, useState} from 'react';
import { useSession, signOut } from "next-auth/react";
import "./Admin.css";
import getLinks from "@/services/linkService";
import Link from "next/link";

const Admin = () => {
    const { data: session, status } = useSession();
    const [linktreeLinks, setLinktreeLinks] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                setLinktreeLinks(await getLinks());
            } catch (error) {
                console.error("Chyba při načítání odkazů:", error);
            }
        })();
    }, []); // Získá data

    if (status === "loading") {
        return <div>Loading...</div>; // Můžeš přidat indikátor načítání
    }
    if (!session) {
        return <div>Access Denied</div>; // Pokud uživatel není přihlášen
    }
    return (
        <main>
            <header>
                <h1>Admin</h1>
                <p>Nazdar, {session.user.name}</p>
                <button onClick={() => signOut({ callbackUrl: "/login" })}>Odhlásit se</button>
                <br/>
                <h2>Odkazy:</h2>
                {linktreeLinks.map((link) => (
                    <div key={link.id}>
                        <h4>{link.label}</h4>
                        <Link href={link.link}>Odkaz zde</Link>
                    </div>
                ))}
            </header>
        </main>
    );
};

export default Admin;
