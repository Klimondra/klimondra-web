"use client"
import {signIn} from "next-auth/react";
import React from 'react';
import "./Login.css"
import Link from "next/link";

const LoginPage = () => {
    return (
        <main>
            <h4>Přihlášení</h4>
            <h2>Jseš si fakt jistej, že chceš být tady?</h2>
            <h3>Raději omrkni <Link href={"/"}>hlavní stránku</Link>, tady spíš nemáš co dělat</h3>
            <button onClick={() => signIn("discord",  { callbackUrl: "/admin" })}>Přihlásit se!</button>
        </main>
    );
};

export default LoginPage;