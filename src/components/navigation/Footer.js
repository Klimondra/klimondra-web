import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full h-16 bg-bgDark flex items-center justify-center">
            <p className={"font-readex text-md text-gray-200 text-center"}>
                Vytvořil Klimondra v roce 2025 | Web nevyužívá sledovací cookies | <Link href={"/admin"} className={`text-neutral-500`}>Admin</Link>
            </p>
        </footer>
    );
};

export default Footer;