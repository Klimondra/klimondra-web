import React, {useEffect, useRef} from 'react';
import "./Home.css";
import AnimatedDotBg from "../components/homePage/animatedDotBg";
import { TypeAnimation } from 'react-type-animation';
import CountUp from "react-countup";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { Graph } from "react-github-activity-calendar";
import HomepageTechnologiesList from "../contentData/homepageTechnologiesList";
import {BsDiscord, BsGithub} from "react-icons/bs";
import {IoChatboxEllipses, IoMailOutline} from "react-icons/io5";
import { motion } from "framer-motion";
import {useInView} from "framer-motion";
import {SiInstagram} from "react-icons/si";


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

    const navigate = useNavigate();


    return (
        <>
            <section id="hero">
                <AnimatedDotBg id="animBg"/>
                <motion.div className="heroContent"
                    initial={{
                        opacity: 0,
                        translateX: -20,
                    }}
                    whileInView={{
                        opacity: 1,
                        translateX: 0,
                        transition: {
                            duration: 1.5,
                        }
                    }}
                >
                    <h3>Ahoj, já jsem</h3>
                    <h1>Klimondra</h1>
                    <p><TypeAnimation sequence={[
                        "Dělám weby", 3000,
                        "Dělám software", 3000,
                        "Dělám grafiku", 750,
                        "Dělám grafiku (občas)", 2250 ]} wrapper="span" speed={32}  repeat={Infinity}/></p>
                    <motion.div className="heroCtaBtns"
                        initial={{
                            opacity: 0,
                            translateY: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            translateY: 0,
                            transition: {
                                duration: 0.5,
                                delay: 1,
                            }
                        }}
                    >
                        <button onClick={learnMoreScroll}>Zjistit více</button>
                        <button onClick={() => navigate("/kontakt")}>Kontakt</button>
                    </motion.div>
                </motion.div>
                <div className="heroIcons">
                    <a href="mailto:klimondra@seznam.cz" target="_blank" rel="noreferrer"><IoMailOutline className="contactMail"/></a>
                    <a href="https://github.com/Klimondra" target="_blank" rel="noreferrer"><BsGithub className="contactGithub"/></a>
                    <a href="https://discordapp.com/users/821336004643520512" target="_blank" rel="noreferrer"><BsDiscord className="contactDiscord"/></a>
                    <a href="https://www.instagram.com/klimondra/" target="_blank" rel="noreferrer"><SiInstagram className={"contactInstagram"}/></a>
                </div>
            </section>
            <section id="about" ref={learnMoreSect}>
                <div className="aboutContent">
                    <motion.div className="infoBlock aboutBlock"
                        initial={{
                            scale: 0.8,
                            opacity: 0,
                        }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                            transition: {
                                duration: 0.7,
                            }
                        }}>
                        <h2>Kdo jsem?</h2>
                        <p>Jsem student, který studuje programování a IT. Tenhle obor mě začal zajímat, když mi bylo asi 10 let. Tento web vznikl vlastně jenom proto, že jsem se nudil. Možná tu do budoucna přibyde více funkcí a zajímavostí. Kromě programování a technologií mě zajímá také politika, jak v ČR, tak v zahraničí. Proto také dávám na Instagram poměrně často různé politické memes a zprávy.</p>
                    </motion.div>
                    <motion.div className="numBlock aboutBlock"
                        initial={{
                            scale: 0.8,
                            opacity: 0,
                        }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                            transition: {
                                duration: 0.7,
                                delay: 0.3,
                            }
                        }}>
                        <h4 ref={ref}>
                            {countInView && <CountUp start={0} end={randomNum} duration={2} />}
                        </h4>
                        <h3>je náhodné číslo</h3>
                        <p>a nic neznamená</p>
                    </motion.div>
                    <motion.div className="technologiesBlock aboutBlock"
                        initial={{
                            scale: 0.8,
                            opacity: 0,
                        }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                            transition: {
                                duration: 0.7,
                                delay: 0.6,
                            }
                        }}>
                        <div className="techBlockText">
                            <h2>Technologie</h2>
                            <h3>které používám</h3>
                        </div>
                        <div className="techIcons">
                            {
                                HomepageTechnologiesList.map((technology, i) => {
                                    return <motion.span key={technology.id}
                                        initial={{
                                            opacity: 0.25,
                                            scale: 0.8,
                                        }} whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                            transition: {
                                                duration: 0.7,
                                                delay: 0.1 * i,
                                            }
                                        }}>
                                        <technology.iconComponent className="Ico" style={{color: technology.color && technology.color}} />
                                    </motion.span>
                                })
                            }
                        </div>
                    </motion.div>
                </div>
            </section>
            <section id="githubActivityGraph">
                <motion.span
                initial={{
                    scale: 0.65,
                    opacity: 0,
                }}
                whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                        duration: 0.7,
                        ease: [0.000, 1.245, 0.505, 1.005],
                    }
                }}>
                    <Graph
                        className="githubGraph "
                        userName={githubUserName}
                        githubApiKey={githubApiKey}
                        enableAnimations={false} // optional prop to disable animations
                    />
                </motion.span>
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
