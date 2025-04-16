"use client"
import React, {useState} from 'react';
import "./Navbar.css"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi";
import {usePathname} from "next/navigation";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const pathname = usePathname()
    const isAdmin = pathname.startsWith('/admin')

    return (
        <nav className={`${openMenu ? "freeHeight" : "fixHeight"} ${isAdmin ? "isAdmin" : ""}`}>
            <div id="logoAndIco">
                {!isAdmin && <Link href="/" id="backToMain">Klimondra</Link> }
                {isAdmin && <Link href="/admin" id="backToMain">Klimondra Admin</Link> }
                <GiHamburgerMenu className="menuBtn" onClick={() => {setOpenMenu(!openMenu)}}/>
            </div>
            { !isAdmin && <div className={openMenu ? "menu open" : "menu close"}>
                <Link href={{ pathname: '/', hash: 'about' }} className="navLink" onClick={() => {setOpenMenu(!openMenu)}}>O mně</Link>
                <Link href="/projekty" className="navLink" onClick={() => {setOpenMenu(!openMenu)}}>Projekty</Link>
                <Link href="/odkazy" className="navLink" onClick={() => {setOpenMenu(!openMenu)}}>Odkazy</Link>
                <Link href="/kontakt" className="navLink" onClick={() => {setOpenMenu(!openMenu)}}>Kontakt</Link>
            </div> }
            { isAdmin && <div className={openMenu ? "menu menuAdmin open" : "menu menuAdmin close"}>
                <Link href="/admin/projekty" className="navLink" onClick={() => {setOpenMenu(!openMenu)}}>Projekty</Link>
                <Link href="/admin/techstack" className="navLink" onClick={() => {setOpenMenu(!openMenu)}}>Technologie</Link>
                <Link href="/admin/odkazy" className="navLink" onClick={() => {setOpenMenu(!openMenu)}}>Odkazy</Link>
            </div> }
        </nav>
    );
};

export default Navbar;