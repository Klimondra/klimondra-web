"use client";
import React from 'react';
import {TypeAnimation} from "react-type-animation";

const TyperEffect = () => {
    return (
        <p
            className={"font-readex text-2xl sm:text-3xl text-white font-light"}
        ><TypeAnimation sequence={[
            "Dělám weby", 3000,
            "Dělám software", 3000,
            "Dělám grafiku", 750,
            "Dělám grafiku (občas)", 2250 ]} wrapper="span" speed={32}  repeat={Infinity}/></p>
    );
};

export default TyperEffect;