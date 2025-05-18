"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react"
import MenuBtn from "@/components/navigation/menuBtn";

import { navbarLinks, sidebarLinks } from "./navLinkList";
import DynamicIcon from "@/components/utils/DynamicIcon";

const NavHeader = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {setOpenMenu(!openMenu);};

    return (
        <div className="overflow-x-hidden" >
            <header className="w-9/10 h-14 z-30 flex justify-between items-center bg-white/10 rounded-xl shadow-md backdrop-blur-sm py-4 px-6 fixed top-4 left-1/2 transform -translate-x-1/2">
                <Link
                    href="/"
                    className="font-readex text-2xl text-gray-200 font-bold hover:text-primaryBlue-400 transition-all duration-300"
                >
                    Klimondra
                </Link>

                <nav className="flex flex-row gap-5 items-center max-md:hidden">
                    {navbarLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.link}
                            className="font-readex text-lg text-gray-200 hover:scale-105 hover:-rotate-1 transition-all duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <MenuBtn 
                    className="md:hidden max-md:inline p-2"
                    onClick={toggleMenu} 
                    open={openMenu}
                />
            </header>
            <AnimatePresence>
                {openMenu &&
                <motion.section
                    className={"hidden max-md:block fixed w-screen h-screen bg-bgDark/30 z-20 top-0 left-0 backdrop-blur-lg px-16 pt-26 pb-20"}
                    initial={{
                        opacity: 0,
                        backdropFilter: "blur(0px)",
                        y: "-100%",
                    }}
                    animate={{
                        opacity: 1,
                        backdropFilter: "blur(16px)",
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: "-100%",
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <nav className="flex flex-col items-start justify-center h-full">
                        {navbarLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.link}
                                    className="font-readex text-5xl text-gray-200 hover:scale-105 active:scale-95 transition-all duration-200 py-3"
                                    onClick={toggleMenu}
                                >
                                    <motion.span
                                     initial={{
                                         opacity: 0,
                                         x: 50,
                                     }}
                                     whileInView={{
                                         opacity: 1,
                                         x: 0,
                                     }}
                                     transition={{
                                         duration: 0.3,
                                         delay: index === 0 ? 0.25 : index * 0.2 + 0.25,
                                                 }}
                                    >
                                        {link.label}
                                    </motion.span>
                                </Link>
                        ))}
                    </nav>
                    <div className={"w-full h-16 py-8 flex flex-row justify-center items-center gap-x-3"} >
                        {sidebarLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.link}
                                className="font-readex text-5xl text-gray-200 hover:scale-105 active:scale-95 transition-all duration-200 py-4"
                                onClick={toggleMenu}
                            >
                                <DynamicIcon lib={link.icon_lib} name={link.icon_component} className={"text-4xl text-white"}/>
                            </Link>
                        ))}
                    </div>
                </motion.section>}
            </AnimatePresence>
        </div>
    );
};

export default NavHeader;
