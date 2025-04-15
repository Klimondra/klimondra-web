"use client"
import {signIn} from "next-auth/react";
import React from 'react';
import "./Login.css"
import Link from "next/link";
import {BsDiscord} from "react-icons/bs";

const LoginPage = () => {
    return (
        <main>
            <h2>Přihlášení</h2>
            <h3>Jseš si fakt jistej, že chceš být tady?</h3>
            <p>Raději omrkni <Link href={"/"}>hlavní stránku</Link>, tady spíš nemáš co dělat</p>
            <button onClick={() => signIn("discord",  { callbackUrl: "/admin" })}><BsDiscord className={"loginIcon"}/> Přihlásit se před Discord !</button>
        </main>
    );
};

export default LoginPage;