import React from 'react';
import "./Home.css";
import AnimatedDotBg from "../components/homePage/animatedDotBg";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

    return (
        <>
            <section id="hero">
                <AnimatedDotBg id="animBg"/>
                <div className="heroContent">
                    <h3>Ahoj, já jsem</h3>
                    <h1>Klimondra</h1>
                    <p><TypeAnimation sequence={[
                        "Dělám weby", 3000,
                        "Dělám software", 3000,
                        "Dělám grafiku", 750,
                        "Dělám grafiku (občas)", 2250 ]} wrapper="span" speed={32}  repeat={Infinity}/></p>
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
