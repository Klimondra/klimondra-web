import React, {useEffect, useRef} from 'react';
import "./Home.css";
import "./techIcoColors.css"
import AnimatedDotBg from "../components/homePage/animatedDotBg";
import { TypeAnimation } from 'react-type-animation';
import CountUp from "react-countup";
import {Link, useLocation} from "react-router-dom";
import { Graph } from "react-github-activity-calendar";

import {
    SiAdobephotoshop,
    SiBlender,
    SiCss3,
    SiDavinciresolve, SiHtml5, SiInstagram, SiUnity,
    SiWordpress
} from "react-icons/si";
import {BsDiscord, BsGit, BsGithub} from "react-icons/bs";
import {IoChatboxEllipses, IoLogoNodejs, IoLogoReact, IoLogoSass, IoMailOutline} from "react-icons/io5";
import {DiJsBadge} from "react-icons/di";
import {TbBrandCSharp} from "react-icons/tb";
import {useInView} from "framer-motion";


const Home = () => {
    // Counter
    const ref = useRef(null)
    const countInView = useInView(ref, { once: true })
    const randomNum = Math.floor(Math.random()*999)

    // About scroll
    const learnMoreSect = useRef(null);
    const learnMoreScroll = () => {
        learnMoreSect.current.scrollIntoView({ behavior: "smooth" });
    }

    // Location
    const location = useLocation();

    // Github contributions
    const githubApiKey = process.env.REACT_APP_GITHUB_API_KEY; // <your-github-api-key>
    const githubUserName = "klimondra"; // <github-username>

    useEffect(() => {
        if (location.hash) {
            // Přidáme malé zpoždění, aby se zajistilo, že DOM je plně načtený
            setTimeout(() => {
                const element = document.getElementById(location.hash.slice(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);


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
                        <button onClick={learnMoreScroll}>Zjistit více</button>
                        <button>Kontakt</button>
                    </div>
                </div>
                <div className="heroIcons">
                    <a href="mailto:klimondra@seznam.cz" target="_blank" rel="noreferrer"><IoMailOutline className="contactMail"/></a>
                    <a href="https://github.com/Klimondra" target="_blank" rel="noreferrer"><BsGithub className="contactGithub"/></a>
                    <a href="https://discordapp.com/users/821336004643520512" target="_blank" rel="noreferrer"><BsDiscord className="contactDiscord"/></a>
                    <a href="https://www.instagram.com/klimondra/" target="_blank" rel="noreferrer"><SiInstagram className={"contactInstagram"}/></a>
                </div>
            </section>
            <section id="about" ref={learnMoreSect}>
                <div className="aboutContent">
                    <div className="infoBlock aboutBlock">
                        <h2>Kdo jsem?</h2>
                        <p>Jsem student, který studuje programování a IT. Tenhle obor mě začal zajímat, když mi bylo asi 10 let. Tento web vznikl vlastně jenom proto, že jsem se nudil. Možná tu do budoucna přibyde více funkcí a zajímavostí. Kromě programování a technologií mě zajímá také politika, jak v ČR, tak v zahraničí. Proto také dávám na Instagram poměrně často různé politické memes a zprávy.</p>
                    </div>
                    <div className="numBlock aboutBlock">
                        <h4 ref={ref}>
                            {countInView && <CountUp start={0} end={randomNum} duration={2} />}
                        </h4>
                        <h3>je náhodné číslo</h3>
                        <p>a nic neznamená</p>
                    </div>
                    <div className="technologiesBlock aboutBlock">
                        <div className="techBlockText">
                            <h2>Technologie</h2>
                            <h3>které používám</h3>
                        </div>
                        <div className="techIcons">
                            <SiHtml5 id="htmlIco" className="Ico"/>
                            <SiCss3 id="cssIco" className="Ico"/>
                            <IoLogoSass id="sassIco" className="Ico"/>
                            <DiJsBadge id="jsIco" className="Ico"/>
                            <IoLogoReact id="reactIco" className="Ico"/>
                            <IoLogoNodejs id="nodejsIco" className="Ico"/>
                            <SiWordpress id="wordpressIco" className="Ico"/>
                            <TbBrandCSharp id="csharpIco" className="Ico"/>
                            <SiUnity id="unityIco" className="Ico" />
                            <BsGit id="gitIco" className="Ico"/>
                            <BsGithub id="githubIco" className="Ico"/>
                            <SiBlender id="blenderIco" className="Ico"/>
                            <SiAdobephotoshop id="psIco" className="Ico"/>
                            <SiDavinciresolve id="drIco" className="Ico"/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="githubActivityGraph">
                <Graph
                    className="githubGraph "
                    userName={githubUserName}
                    githubApiKey={githubApiKey}
                    enableAnimations={false} // optional prop to disable animations
                />
            </section>
            <section id="contact">
                <div className="contactContent">
                    <div className="contactIcons">
                        <a href="mailto:klimondra@seznam.cz" target="_blank" rel="noreferrer"><IoMailOutline className="contactMail"/></a>
                        <a href="https://github.com/Klimondra" target="_blank" rel="noreferrer"><BsGithub className="contactGithub"/></a>
                        <a href="https://discordapp.com/users/821336004643520512" target="_blank" rel="noreferrer"><BsDiscord className="contactDiscord"/></a>
                        <a href="https://www.instagram.com/klimondra/" target="_blank" rel="noreferrer"><SiInstagram className={"contactInstagram"}/></a>
                    </div>
                    <Link to="/kontakt" className="contactBtn"><IoChatboxEllipses/><p>Více kontaktů</p></Link>
                </div>
            </section>
        </>
    );
};

export default Home;
