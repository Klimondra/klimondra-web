import React from 'react';
import "./NotFound.css"
import AnimatedDotBg from "../components/homePage/animatedDotBg";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <AnimatedDotBg id="animBg"/>
            <div className="notFoundContent">
                <h2>404</h2>
                <p>Stránka nebyla nalezena :(</p>
                <p className="description">Ale když počkáte, možná začne fungovat...</p>
                <Link to="/" id="backBtn">Zpět na hlavní stránku</Link>
            </div>
        </>
    );
};

export default NotFound;