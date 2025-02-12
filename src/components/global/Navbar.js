import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import "./Navbar.css"
import {Link} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <nav className={openMenu ? "freeHeight" : "fixHeight"}>
            <div id="logoAndIco">
                <Link to="/" id="backToMain">Klimondra</Link>
                <GiHamburgerMenu className="menuBtn" onClick={() => {setOpenMenu(!openMenu)}}/>
            </div>
            <div className={openMenu ? "menu open" : "menu close"}>
                <NavLink to="/" className="navLink" onClick={() => {setOpenMenu(!openMenu)}}>O mně</NavLink>
                <NavLink to="/projekty" className="navLink" onClick={() => {setOpenMenu(!openMenu)}}>Projekty</NavLink>
                <NavLink to="/nikam" className="navLink" onClick={() => {setOpenMenu(!openMenu)}}>Kontakt</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;