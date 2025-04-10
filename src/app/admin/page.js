import React from 'react';
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";
import "./Admin.css"

const Admin = async() => {
    const session = await getServerSession(authOptions);

    if (!session) redirect("/login");

    return (
        <main>
            <header>
                <h1>Admin</h1>
                <p>Nazdar, {session.user.name}</p>
            </header>
        </main>
    );
};

export default Admin;