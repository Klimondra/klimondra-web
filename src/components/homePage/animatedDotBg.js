"use client"
import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import "./animatedDotBg.css"

const AnimatedDotBg = () => {
    // Inicializace s výchozími hodnotami
    const [dotPos1, setDotPos1] = useState({ x: 0, y: 0 });
    const [dotPos2, setDotPos2] = useState({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Nastavení počáteční pozice po načtení klienta
        setMounted(true);
        setDotPos1({
            x: Math.random() * (window.innerWidth - 50),
            y: Math.random() * (window.innerHeight - 50)
        });
        setDotPos2({
            x: Math.random() * (window.innerWidth - 50),
            y: Math.random() * (window.innerHeight - 50)
        });

        const updatePos1 = () => {
            setDotPos1({
                x: Math.random() * (window.innerWidth - 50),
                y: Math.random() * (window.innerHeight - 50)
            });
        };

        const updatePos2 = () => {
            setDotPos2({
                x: Math.random() * (window.innerWidth - 50),
                y: Math.random() * (window.innerHeight - 50)
            });
        };

        const interval1 = setInterval(updatePos1, 3000); // Změna každé 3 sekundy
        const interval2 = setInterval(updatePos2, 3500); // Jiný interval pro nezávislý pohyb

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
        };
    }, []);

    // Vrátit prázdný div dokud komponenta není namountována na klientovi
    if (!mounted) {
        return <div className="heroBg"></div>;
    }

    return (
        <div className="heroBg"> {/*** Background dots ***/}
            <motion.div className="colorDot" id="colorDot1" animate={{ x: dotPos1.x, y: dotPos1.y }} transition={{ duration: 2.8 , ease: "easeInOut" }}/>
            <motion.div className="colorDot" id="colorDot2" animate={{ x: dotPos2.x, y: dotPos2.y }} transition={{ duration: 3.3, ease: "easeInOut" }}/>
        </div>
    );
};

export default AnimatedDotBg;