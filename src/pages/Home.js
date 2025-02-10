import React from 'react';
import "./Home.css";
import AnimatedDotBg from "../components/homePage/animatedDotBg";

const Home = () => {


    return (
        <>
            <section id="hero">
                <AnimatedDotBg id="animBg"/>
                <div className="heroContent">
                    <h1>Klimondra</h1>
                    <p>Tohle je test jestli to funguje tak jak chci</p>
                </div>
            </section>
        </>
    );
};

export default Home;
