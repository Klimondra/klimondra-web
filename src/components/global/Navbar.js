"use client"
import React, {useState} from 'react';
import "./Navbar.css"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <nav className={openMenu ? "freeHeight" : "fixHeight"}>
            <div id="logoAndIco">
                <Link href="/" id="backToMain">Klimondra</Link>
                <GiHamburgerMenu className="menuBtn" onClick={() => {setOpenMenu(!openMenu)}}/>
            </div>
            <div className={openMenu ? "menu open" : "menu close"}>
                <Link href={{ pathname: '/', hash: 'about' }} className="navLink" onClick={() => {setOpenMenu(!openMenu)}}>O mně</Link>
                <Link href="/projekty" className="navLink" onClick={() => {setOpenMenu(!openMenu)}}>Projekty</Link>
                <Link href="/odkazy" className="navLink" onClick={() => {setOpenMenu(!openMenu)}}>Odkazy</Link>
                <Link href="/kontakt" className="navLink" onClick={() => {setOpenMenu(!openMenu)}}>Kontakt</Link>
            </div>
        </nav>
    );
};

export default Navbar;