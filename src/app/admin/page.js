"use client";
import React from 'react';
import { useSession, signOut } from "next-auth/react";
import "./Admin.css";

const Admin = () => {
    const { data: session, status } = useSession();

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
            </header>
        </main>
    );
};

export default Admin;
