"use client";
import React, { useState } from 'react';
import { AnimatePresence, motion } from "motion/react";
import MenuBtn from "@/components/navigation/menuBtn";
import { adminNavLinks } from "@/components/navigation/navLinkList";
import Link from "next/link";
import DynamicIcon from "@/components/utils/DynamicIcon";
import { UserButton, useUser } from "@clerk/nextjs";

const AdminSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, isLoaded } = useUser();

    const sidebarOpenWidth = "300px";
    const sidebarClosedWidth = "60px";

    return (
        <>
            {/* PC Verze (Od breakpointu MD nahoru) */}
            <motion.aside
                className="hidden md:flex h-screen bg-bgDark-950 flex-col shrink-0 border-r border-bgDark-800"
                animate={{
                    width: isOpen ? sidebarOpenWidth : sidebarClosedWidth,
                }}
                transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                }}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <div className="flex items-center justify-start w-full px-4 py-4 border-b border-bgDark-800 min-h-[60px]">
                    <h2 className="text-white font-readex text-2xl font-bold flex items-center">
                        <span>K</span>
                        <motion.span
                            initial={false}
                            animate={{
                                opacity: isOpen ? 1 : 0,
                                width: isOpen ? 'auto' : 0,
                                display: isOpen ? 'inline-block' : 'none',
                                marginLeft: isOpen ? '2px' : '0',
                            }}
                            transition={{
                                duration: 0.3,
                                ease: [0.4, 0, 0.2, 1],
                                delay: isOpen ? 0.1 : 0,
                            }}
                            className="inline-block whitespace-nowrap overflow-hidden"
                        >
                            -Press
                        </motion.span>
                    </h2>
                </div>

                {/* Navigační Odkazy */}
                <motion.div
                    key="pc-nav-links"
                    className={`flex flex-col w-full gap-4 mt-6 mx-auto ml-3`}
                    layout
                    transition={{
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                >
                    {adminNavLinks.map((link) => (
                        <Link
                            href={link.link}
                            key={`PcSidebar-${link.name}`}
                            className="flex flex-row gap-2 items-center"
                        >
                            <motion.div
                                className="text-3xl text-white"
                                layout
                            >
                                <DynamicIcon
                                    lib={link.icon_lib}
                                    name={link.icon_component}
                                />
                            </motion.div>
                            {isOpen && (
                                <motion.span
                                    className="text-white font-readex text-lg hover:translate-x-1.5 transition-all duration-200"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isOpen ? 1 : 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                        delay: 0.1,
                                    }}
                                >
                                    {link.name}
                                </motion.span>
                            )}
                        </Link>
                    ))}
                </motion.div>

                {/* Uživatelská Sekce */}
                <motion.div
                    className="mt-auto border-t border-bgDark-800"
                    layout
                    animate={{
                        alignItems: isOpen ? "flex-start" : "center",
                    }}
                    transition={{
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                >
                    <div className="flex items-center gap-3 min-h-[60px] px-4 py-4">
                        <motion.div
                            className="flex-shrink-0"
                            layout
                            animate={
                                !isOpen
                                    ? { scale: [1, 1.2, 0.8, 1], rotate: [0, 15, -15, 0] }
                                    : {}
                            }
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                        >
                            <UserButton afterSignOutUrl="/" />
                        </motion.div>
                        {isOpen && (
                            <motion.div
                                className="flex flex-col overflow-hidden min-w-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isOpen ? 1 : 0 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.3,
                                    ease: [0.4, 0, 0.2, 1],
                                    delay: 0.2,
                                }}
                            >
                                <span className="text-white text-sm font-readex font-medium truncate">
                                    {isLoaded && user ? user.fullName : "Uživatel"}
                                </span>
                                <span className="text-gray-400 text-xs font-readex truncate">
                                    Admin
                                </span>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </motion.aside>

            {/* Mobilní verze (Pod MD) - Zůstává vaše původní, s drobnými vylepšeními */}
            <nav className={`md:hidden w-9/10 h-12 mx-auto mt-4 px-3 sticky top-4 flex flex-row items-center justify-between z-30
                    bg-gradient-to-br from-bgDark-900 to-bgDark-950 backdrop-blur-lg rounded-lg border border-bgDark-700 shadow-md`}>
                <h2 className={`font-readex text-white font-bold text-2xl`}>K-Press</h2>
                <MenuBtn open={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.section
                        key="mobile-menu"
                        className={`md:hidden w-full h-dvh flex flex-col items-center justify-start pt-24 gap-8 fixed top-0 left-0 z-20
                                    bg-bgDark-900/90 backdrop-blur-lg`}
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "-100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className={`w-8/10 mx-auto flex flex-col items-start justify-center gap-4`}>
                            {adminNavLinks.map((link) => (
                                <Link
                                    href={link.link}
                                    key={`MobileSidebar-${link.name}`}
                                    onClick={() => setIsOpen(false)} // Zavře menu po kliknutí
                                    className={`flex flex-row items-center justify-start gap-3 p-3 rounded-lg hover:bg-bgDark-800 w-full transition-colors duration-200`}
                                >
                                    <DynamicIcon lib={link.icon_lib} name={link.icon_component} className={`text-3xl text-white`} />
                                    <span className={`font-readex text-white text-xl`}>{link.name}</span>
                                </Link>
                            ))}
                        </div>
                        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-row gap-3 items-center justify-center p-3 rounded-lg bg-bgDark-950 border border-bgDark-700`}>
                            <UserButton afterSignOutUrl="/" />
                            {isLoaded && user && (
                                <p className={`text-white text-lg font-readex font-light`}>{user.fullName}</p>
                            )}
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
};

export default AdminSidebar;
