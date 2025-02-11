import React from 'react';
import {NavLink} from "react-router-dom";
import "./Navbar.css"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/" id="backToMain">Klimondra</Link>
            <div>
                <NavLink to="/" className="navLink">O mně</NavLink>
                <NavLink to="/projekty" className="navLink">Projekty</NavLink>
                <NavLink to="/nikam" className="navLink">Kontakt</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;