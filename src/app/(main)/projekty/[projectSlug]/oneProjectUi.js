"use client";
import React from 'react';
import {useParams} from "next/navigation";
import Image from "next/image";
import DynamicIcon from "@/components/utils/DynamicIcon";
import Link from "next/link";


const SingleProjectPage = ({projektyList, technologieProjektu}) => {
    const {projectSlug} = useParams();
    const projectData = projektyList.find((project) => project.slug === projectSlug);
    const techstackList = technologieProjektu.filter((tech) => tech.projekty_id === projectData.id);

    const startedDate = new Date(projectData.startedDate);
    const endedDate = projectData.endedDate ? new Date(projectData.endedDate) : null;

    return (
        <main className="w-full min-h-svh bg-bgDark-800 flex flex-col relative pt-22">

            <header className="w-9/10 h-auto mx-auto rounded-lg border-1 border-white/12 bg-gradient-to-br from-primaryBlue-50/10 to-primaryBlue-50/15 backdrop-blur-lg border-b shadow-lg">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between py-6 md:py-8 gap-2 md:gap-8">

                        <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-3 md:gap-6">
                            <Image
                                src={projectData.image}
                                alt={"Logo projektu " + projectData.label}
                                width={512}
                                height={512}
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg object-cover flex-shrink-0"
                            />
                            <div className="flex flex-col">
                                <h1 className="font-readex text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
                                    {projectData.label}
                                </h1>
                            </div>
                        </div>

                        <div className="flex-shrink-0 mt-4 md:mt-0">
                            <p className={`font-readex text-sm sm:text-base text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md
                                ${projectData.endedDate === null
                                ? "bg-gradient-to-br from-green-500/90 to-green-600 border border-green-500/60 shadow-sm"
                                : "bg-gradient-to-br from-white/17 to-white/22 border border-white/10 shadow-sm"
                            }`}
                            >
                                {(startedDate.getMonth() + 1).toString().padStart(2, '0')}/{startedDate.getFullYear()}
                                <span className="mx-1.5">-</span>
                                {endedDate === null ? "Aktivní" : `${(endedDate.getMonth() + 1).toString().padStart(2, '0')}/${endedDate.getFullYear()}`}
                            </p>
                        </div>

                    </div>
                </div>
            </header>
            <section className="w-9/10 mx-auto mt-6 sm:mt-10 ">
                <div className={`w-full flex flex-col gap-2.5 sm:gap-3`}>
                    <h3 className={`font-readex text-white font-semibold text-2xl sm:text-3xl`}>Použité technologie</h3>
                    <div className={`flex flex-row flex-wrap gap-2`}>
                        {
                            techstackList.map((tech, index) => {
                                return (<Link key={index} href={`/projekty?tech=${tech.technologie.label}`} className={`flex flex-row gap-2 items-center bg-gradient-to-br from-white/10 to-white/15 backdrop-blur-lg border-1 border-white/10 rounded-lg px-2 py-1 shadow-sm hover:scale-102 active:scale-97 transition-all duration-200`}>
                                    <DynamicIcon lib={tech.technologie.icon_lib} name={tech.technologie.icon_component} className={`text-2xl lg:text-3xl`} style={{ color: tech.technologie.color }} />
                                    <h5 className={`font-readex text-white font-light lg:text-lg`}>{tech.technologie.label}</h5>
                                </Link>)
                            })
                        }
                    </div>
                </div>
            </section>
            <section
                className={`w-9/10 mx-auto mt-8 mb-10 flex flex-col gap-4 sm:gap-6 lg:flex-row`}
            >
                <article className={`w-full flex flex-col gap-2.5 sm:gap-3 p-4 sm:p-6 lg:flex-2 xl:flex-3
                        rounded-lg border-1 border-white/12 bg-gradient-to-br from-primaryBlue-50/10 to-primaryBlue-50/15 backdrop-blur-lg border-b shadow-lg`}>
                    <h3 className={`font-readex text-white font-semibold text-2xl sm:text-3xl`}>O projektu</h3>
                    <span className={`font-readex text-white font-light text-base sm:text-lg`}
                        dangerouslySetInnerHTML={{ __html: projectData.wysiwyg_description }}
                    />
                </article>
                <article className={`w-full flex flex-col gap-2.5 sm:gap-3 p-4 sm:p-6 lg:flex-1 xl:flex-1
                            rounded-lg border-1 border-white/9 bg-gradient-to-br from-primaryBlue-50/7 to-primaryBlue-50/12 backdrop-blur-lg border-b shadow-lg`}>
                    <h3 className={`font-readex text-white font-semibold text-2xl sm:text-3xl`}>Odkazy</h3>
                    <div className={`flex flex-col gap-2`}>
                        {(projectData.secondBtn_label && projectData.secondBtn_link) && <Link href={projectData.secondBtn_link} target={"_blank"}
                            className={`bg-gradient-to-br from-white/10 to-white/15 border-1 border-white/5 text-white font-readex text-base py-2 px-4 rounded-lg
                                    hover:scale-101 active:scale-97 transition-all duration-200`}
                        >
                            {projectData.secondBtn_label}
                        </Link>}
                        { projectData.links?.map((link, index) => (
                            <Link key={index} href={link.link} target={"_blank"}
                                className={`bg-gradient-to-br from-white/10 to-white/15 border-1 border-white/5 text-white font-readex text-base py-2 px-4 rounded-lg
                                    hover:scale-101 active:scale-97 transition-all duration-200`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href={"/projekty"}
                              className={`bg-gradient-to-br from-white/10 to-white/15 border-1 border-white/5 text-white font-readex text-base py-2 px-4 rounded-lg
                                    hover:scale-101 active:scale-97 transition-all duration-200`}
                        >
                            Zpět na seznam projektů
                        </Link>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default SingleProjectPage;