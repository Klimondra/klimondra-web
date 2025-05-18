"use client";
import React, {useRef} from 'react';
import { motion, useInView } from "motion/react";
import MainBg from "@/components/backgrounds/mainBg";
import TyperEffect from "@/components/landingPage/typerEffect";
import PrimaryButton from "@/components/general/buttons/primaryButton";
import SecondaryButton from "@/components/general/buttons/secondaryButton";
import CountUp from "react-countup";
import {techstackList} from "@/db/techstack";
import DynamicIcon from "@/components/utils/DynamicIcon";
import GitHubCalendar from "react-github-calendar";
import Link from "next/link";
import {sidebarLinks} from "@/components/navigation/navLinkList";

const Home = () => {
    const ref = useRef(null)
    const countInView = useInView(ref, { once: true })
    const randomNum = Math.floor(Math.random()*999)

    return (
        <main className={"w-full min-h-dvh"}>
            <section className={"w-full h-dvh flex flex-col items-start justify-center"}>
                <MainBg/>
                <motion.div className={"w-9/10 sm:w-4/5 lg:w-8/12 h-auto mx-auto"}
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1.2, ease: "easeInOut"}}
                >
                    <h3 className={"text-3xl sm:text-4xl md:text-5xl font-readex text-white"}>Ahoj, já jsem</h3>
                    <h1 className={"text-6xl sm:text-7xl md:text-8xl font-readex text-white font-bold"}>Klimondra</h1>
                    <TyperEffect/>
                    <motion.div className={"mt-6 flex flex-row gap-4"}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.4, delay: 0.8}}
                    >
                        <PrimaryButton label={"Zjistit více"}/>
                        <SecondaryButton label={"Kontakt"}/>
                    </motion.div>
                </motion.div>
            </section>
            <section className="w-full py-16 bg-bgDark-800 flex flex-col items-center justify-center">
                <div className="grid w-4/5 gap-4 grid-cols-1 lg:grid-cols-3 lg:grid-rows-[auto,1fr]">
                    <motion.div
                        className="w-full lg:col-span-2 bg-darkCombo-700 rounded-3xl p-8 shadow-lg flex flex-col items-start justify-between"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.5 },
                        }}
                    >
                        <h2 className="text-white text-4xl 2xl:text-5xl font-bold font-readex">Kdo jsem?</h2>
                        <p className="text-white text-xl font-light font-readex mt-4">
                            Jsem student, který studuje programování a IT. Tenhle obor mě začal zajímat, když mi bylo asi 10 let. Tento web vznikl vlastně jenom proto, že jsem se nudil. Možná tu do budoucna přibyde více funkcí a zajímavostí. Kromě programování a technologií mě zajímá také politika, jak v ČR, tak v zahraničí. Proto také dávám na Instagram poměrně často různé politické memes a zprávy.
                        </p>
                    </motion.div>

                    <motion.div
                        className="w-full lg:row-span-2 bg-darkCombo-700 rounded-3xl p-4 shadow-lg flex flex-col items-center justify-center max-lg:py-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.5, delay: 0.25 },
                        }}
                    >
                        <h4 ref={ref} className="font-readex text-white text-5xl font-bold mb-4">
                            {countInView && <CountUp start={0} end={randomNum} duration={2} />}
                        </h4>
                        <h3 className="font-readex text-white text-3xl">je náhodné číslo</h3>
                        <p className="font-readex text-white text-xl font-light">a nic neznamená</p>
                    </motion.div>

                    <motion.div
                        className="w-full lg:col-span-2 bg-darkCombo-700 rounded-3xl p-8 shadow-lg flex flex-col items-start justify-between"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.5, delay: 0.5 },
                        }}
                    >
                        <div>
                            <h2 className="text-white text-4xl font-bold font-readex">Technologie</h2>
                            <h3 className="text-white text-2xl font-readex">které používám</h3>
                        </div>
                        <div className="flex flex-row gap-4 flex-wrap justify-center items-center mt-8 w-full">
                            {techstackList.map((tech, index) => (
                                <DynamicIcon
                                    lib={tech.icon_lib}
                                    name={tech.icon_component}
                                    className="text-4xl hover:scale-110 active:scale-95 transition-all duration-200"
                                    style={{ color: tech.color }}
                                    key={index}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
            <section className="w-full py-16 px-4 bg-darkCombo-700 flex flex-col items-center justify-center text-center">
                <GitHubCalendar username={"klimondra"} style={{color: "white", fontFamily: "Readex Pro, Verdana, sans-serif"}}/>
            </section>
            <section className="w-full py-16 bg-bgDark-800 flex flex-row gap-x-12 gap-y-6 items-center justify-center flex-wrap">
                <div className={`flex flex-row gap-4`}>
                    {
                        sidebarLinks.map((link, index) => (
                            <Link href={link.link} key={index} className={"w-16 h-16 p-2 flex justify-center items-center rounded-lg bg-darkCombo-700 hover:scale-110 active:scale-95 transition-all duration-200"}>
                                <DynamicIcon lib={link.icon_lib} name={link.icon_component} className={"text-4xl text-white"}/>
                            </Link>
                        ))
                    }
                </div>
                <PrimaryButton label={"Kontakt"} className={"h-16 text-xl font-readex px-6"}/>
            </section>
        </main>
    );
};

export default Home;