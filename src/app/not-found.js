import React from 'react';
import MainBg from "@/components/backgrounds/mainBg";
import PrimaryButton from "@/components/general/buttons/primaryButton";
import Link from "next/link";

const NotFound = () => {
    return (
        <main className={"w-full min-h-dvh flex flex-col items-center justify-center"}>
            <MainBg/>
            <h2 className={"font-readex font-bold text-8xl text-white"}>404</h2>
            <p className={"font-readex text-center text-white text-2xl mt-4"}>Další stránky webu jsou bohužel ohořelé...</p>
            <Link href={"/"}>
                <PrimaryButton label={"Zpět na domovskou stránku"} className={"mt-8"} />
            </Link>
        </main>
    );
};

export default NotFound;