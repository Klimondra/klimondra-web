import React from 'react';
import "./footer.css"
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <p>Vytvořil Klimondra v roce 2025 | <Link href={"/login"} className={"footerLoginLink"}>Admin</Link></p>
        </footer>
    );
};

export default Footer;