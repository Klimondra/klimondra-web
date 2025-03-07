import React from 'react';
import "./Kontakt.css";
import AnimatedDotBg from "../components/homePage/animatedDotBg";
import { IoMail, IoLogoInstagram, IoLogoDiscord} from "react-icons/io5";
import KontaktBtn from "../components/contact/KontaktBtn";

const Kontakt = () => {
    return (
        <section id="Kontakt">
            <div id='bg'>
                <AnimatedDotBg id="animBg"/>
            </div>
            <section id="texts">
                <h2>Kontakt</h2>
            </section>
            <section id="content">
                <div id="box">
                    <p>Zde najdete odkazy, kde mě můžete kontaktovat. </p>
                    <KontaktBtn link="mailto:klimondra@seznam.cz?subject=Zpr%C3%A1va%20ze%20str%C3%A1nky%20kontakt%20na%20webu" icon={IoMail} label="E-mail: klimondra@seznam.cz"/>
                    <KontaktBtn link="https://www.instagram.com/klimondra/" icon={IoLogoInstagram} label="Instagram: klimondra" color="rgba(225, 48, 108, 0.5)"/>
                    <KontaktBtn link="https://discordapp.com/users/821336004643520512" icon={IoLogoDiscord} label="Discord: klimondra" color="rgba(114, 137, 218, 0.5)"/>
                </div>
            </section>
        </section>
    );
};

export default Kontakt;