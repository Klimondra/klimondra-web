import React from 'react';
import "./Kontakt.css";
import AnimatedDotBg from "../../components/homePage/animatedDotBg";
import KontaktBtn from "@/components/contact/KontaktBtn";
import ContactPageLinks from "../../contentData/contactPageLinks";

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

                    {
                        ContactPageLinks.map((oneLink) => {
                            return <KontaktBtn label={oneLink.label} icon={oneLink.icon} link={oneLink.link} id={oneLink.id} key={oneLink.id} color={oneLink.color && oneLink.color} />
                        })
                    }
                </div>
            </section>
        </section>
    );
};

export default Kontakt;