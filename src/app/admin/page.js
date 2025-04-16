"use client";
import React, {useEffect, useState} from 'react';
import { useSession, signOut } from "next-auth/react";
import "./Admin.css";
import Link from "next/link";
import Unauthorized from "@/components/admin/Unauthorized";
import Loading from "@/components/admin/Loading";

const Admin = () => {
    const { data: session, status } = useSession();

    if (status === "loading") return <Loading />;
    if (!session) return <Unauthorized/>;
    return (
        <main>
            <section>
                <header>
                    <h2>Nazdar, {session.user.name}</h2>
                    <button onClick={() => signOut({ callbackUrl: "/login" })}>Odhlásit se</button>
                </header>
                <div className="bodyRow1">
                    <section className="webManageBox">
                        <p>Spravovat obsah</p>
                        <div className="webManageLinks">
                            <Link href="/admin/projekty">Spravovat projekty [WIP]</Link>
                            <Link href="/admin/technologie">Spravovat tech-stack [WIP]</Link>
                            <Link href="/admin/odkazy">Spravovat linktree</Link>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
};

export default Admin;
