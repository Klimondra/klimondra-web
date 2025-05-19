"use client";
import MainBg from "@/components/backgrounds/mainBg";
import Link from "next/link";
import DynamicIcon from "@/components/utils/DynamicIcon";

const LinktreeUi = ({data}) => {
    return (
        <main className={`w-full min-h-dvh h-auto overflow-hidden flex flex-col items-center justify-center relative pt-22`}>
            <MainBg className={"absolute top-0 left-0 w-full h-full"}/>
            <section className={`w-9/10 sm:w-4/5 md:w-3/5 lg:w-192  mx-auto flex flex-col items-center justify-center p-2 lg:p-3 mb-12
                                bg-gradient-to-b from-white/10 to-white/15 rounded-md backdrop-blur-lg border-1 border-white/10 shadow-lg`}>
                <div className="w-full flex flex-col space-y-2">
                    {data.map((link, index) => (
                        <Link key={index} href={link.link}
                              className={`w-full h-12 lg:h-14 flex flex-row items-center justify-between rounded-md px-2 bg-gradient-to-b from-white/10 to-white/15 border-1 border-white/10
                                            hover:scale-101 hover:from-white/12 active:scale-95 transition-all duration-200`}
                        >
                            <DynamicIcon lib={link.icon_lib} name={link.icon_component} className={`text-4xl lg:text-5xl text-white`} />
                            <h5 className={`font-readex text-white text-xl lg:text-2xls`}>{link.label}</h5>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default LinktreeUi;