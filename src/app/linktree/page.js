import React from 'react';
import "./Linktree.css"
import AnimatedDotBg from "../../components/homePage/animatedDotBg";
import linktreeLinks from "../../contentData/linktreeLinks"

const Linktree = () => {
    return (
        <section id="linktreePage">
            <div className="animBg">
                <AnimatedDotBg/>
            </div>
            <div className="linkBoard">
                <h2>Linktree</h2>
                <p>Tady jsou nějaké odkazy, co by se mohly hodit...</p>
                <div>
                    {
                        linktreeLinks.map((link) => {
                            const IconComponent = link.iconComponent;
                            return <a href={link.link} key={link.link}>
                            <IconComponent className="linkIcon"/> <p>{link.label}</p>
                        </a>})
                    }
                </div>
            </div>
        </section>
    );
};

export default Linktree;