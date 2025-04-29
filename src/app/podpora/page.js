import React from 'react';
import AnimatedDotBg from "@/components/homePage/animatedDotBg";
import "./Podpora.css"

const Podpora = () => {
    return (
        <section id="podporaPage">
            <div className="animBg">
                <AnimatedDotBg />
            </div>
            <div className="qrPayContent">
                <img src={"qr-pay.png"}/>
            </div>
        </section>
    );
};

export default Podpora;