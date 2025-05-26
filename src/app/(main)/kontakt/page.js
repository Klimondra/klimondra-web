import React from 'react';
import MainBg from "@/components/backgrounds/mainBg";
import Link from "next/link";
import {IoLogoInstagram, IoMailOutline} from "react-icons/io5";
import {BsDiscord} from "react-icons/bs";

const Kontakt = () => {
    return (
        <main className={`w-full min-h-svh flex flex-col items-center justify-center`}>
            <MainBg/>
            <article className={`w-9/10 max-w-xl p-4 
                        bg-gradient-to-b from-white/10 to-white/15 rounded-md backdrop-blur-lg border-1 border-white/10 shadow-lg`}>
                <h2 className={`text-white text-3xl text-center font-readex font-semibold`}>Kontakt</h2>
                <div className={`w-full flex flex-col gap-2 mt-4`}>
                    <Link href={"https://www.instagram.com/klimondra/"}
                        className={`w-full flex flex-row items-center justify-between p-2 bg-gradient-to-br from-rose-500/5 to-rose-500/10 rounded-md backdrop-blur-lg border-1 border-rose-500/10 shadow-lg hover:scale-101 hover:from-rose-500/12 active:scale-95 transition-all duration-200`}
                    >
                        <IoLogoInstagram className={`text-white text-3xl`} />
                        <h4 className={`text-white font-readex text-lg`}>Instagram</h4>
                    </Link>
                    <Link href={"mailto:klimondra@imbus.org"}
                          className={`w-full flex flex-row items-center justify-between p-2 bg-gradient-to-br from-amber-500/5 to-amber-500/10 rounded-md backdrop-blur-lg border-1 border-amber-500/10 shadow-lg hover:scale-101 hover:from-amber-500/12 active:scale-95 transition-all duration-200`}
                    >
                        <IoMailOutline className={`text-white text-3xl`}/>
                        <h4 className={`text-white font-readex text-lg`}>E-mail</h4>
                    </Link>
                    <Link href={"https://discordapp.com/users/821336004643520512"}
                          className={`w-full flex flex-row items-center justify-between p-2 bg-gradient-to-br from-indigo-500/5 to-indigo-500/10 rounded-md backdrop-blur-lg border-1 border-indigo-500/10 shadow-lg hover:scale-101 hover:from-indigo-500/12 active:scale-95 transition-all duration-200`}
                    >
                        <BsDiscord className={`text-white text-3xl`}/>
                        <h4 className={`text-white font-readex text-lg`}>Discord</h4>
                    </Link>
                </div>
            </article>
        </main>
    );
};

export default Kontakt;