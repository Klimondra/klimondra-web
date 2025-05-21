"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const SIZE_OFFSET = 384;

const getRandomPosition = (max) => {
    if (max <= SIZE_OFFSET) return max / 2;
    return Math.random() * (max - SIZE_OFFSET);
};

const MainBg = ({ className }) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const controlsRed = useAnimation();
    const controlsAmber = useAnimation();

    // načti a aktualizuj rozměry okna
    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    // funkce, která spustí animaci pro jednu bublinu a po dokončení ji znovu spustí s novou pozicí
    const animateBubble = async (controls) => {
        if (dimensions.width === 0 || dimensions.height === 0) return;

        const newX = getRandomPosition(dimensions.width);
        const newY = getRandomPosition(dimensions.height);

        // spustí animaci na novou náhodnou pozici
        await controls.start({
            x: newX,
            y: newY,
            transition: { duration: 1 + Math.random() * 2.5, ease: "easeInOut" },
        });

        // po dokončení animace spustí další pohyb
        animateBubble(controls);
    };

    // po načtení rozměrů spusť animace obou bublin
    useEffect(() => {
        if (dimensions.width > 0 && dimensions.height > 0) {
            animateBubble(controlsRed);
            animateBubble(controlsAmber);
        }
    }, [dimensions]);

    return (
        <motion.div
            className={`-z-20 absolute w-full h-full bg-gradient-to-br from-bgDark via-primaryBlue-900 to-bgDark backdrop-blur-lg overflow-hidden ${
                className || ""
            }`}
        >
            <motion.span
                className="absolute w-96 h-96 max-md:w-64 max-md:h-64 rounded-full blur-2xl bg-radial from-red-500/20 to-transparent"
                animate={controlsRed}
                initial={{ x: dimensions.width / 2, y: dimensions.height / 2 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.span
                className="absolute w-96 h-96 max-md:w-64 max-md:h-64 rounded-full blur-2xl bg-radial from-amber-500/20 to-transparent"
                animate={controlsAmber}
                initial={{ x: dimensions.width / 2, y: dimensions.height / 2 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
        </motion.div>
    );
};

export default MainBg;
