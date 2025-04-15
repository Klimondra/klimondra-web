import React from 'react';
import "./LoadAndAuth.css"
import {useRouter} from "next/navigation";

const Unauthorized = () => {
    const router = useRouter();

    return (
        <main>
        <div className="loading">
            <p>Nepovolen přístup!</p>
            <button onClick={() => {router.push("/login")}} className={"unauthorizedBtn"}>Přihlásit se</button>
        </div>
        </main>
    );
};

export default Unauthorized;