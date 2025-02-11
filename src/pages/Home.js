import React from 'react';
import "./Home.css";
import AnimatedDotBg from "../components/homePage/animatedDotBg";

const Home = () => {


    return (
        <>
            <section id="hero">
                <AnimatedDotBg id="animBg"/>
                <div className="heroContent">
                    <h3>Ahoj, já jsem</h3>
                    <h1>Klimondra</h1>
                    <p>Dělám weby a software...</p>
                    <div className="heroCtaBtns">
                        <a href="#">Zjistit více</a>
                        <a href="#">Kontakt</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
