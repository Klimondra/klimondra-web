import React from 'react';
import {NavLink} from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <h2>Klimondra</h2>
            <div>
                <NavLink to="/" className="navLink">O mně</NavLink>
                <NavLink to="/projekty" className="navLink">Projekty</NavLink>
                <NavLink to="/nikam" className="navLink">Kontakt</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;