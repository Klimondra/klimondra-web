import React, {useState} from 'react';
import Image from "next/image";
import PrimaryButton from "@/components/general/buttons/primaryButton";
import SecondaryButton from "@/components/general/buttons/secondaryButton";
import DynamicIcon from "@/components/utils/DynamicIcon";
import {techstackList} from "@/db/techstack";
import {MdOutlineMoreHoriz} from "react-icons/md";
import Link from "next/link";
import {IoMdClose} from "react-icons/io";
import {AnimatePresence, motion} from "motion/react";

const ProjectCard = ({data}) => {
    const [openTechPopup, setOpenTechPopup] = useState(false);

    return (
        <article
            className={`w-full h-84 p-4 flex flex-col justify-between gap-1
                        rounded-lg bg-gradient-to-br from-white/10 to-white/18 backdrop-blur-lg border-1 border-white/10 shadow-lg relative
                        hover:scale-102 transition-all duration-200`}
        >
            <div className={`absolute right-5 flex flex-col gap-2`}>
                <span className={`px-1.5 py-1 text-center bg-gradient-to-br rounded-lg from-primaryBlue-300 to-primaryBlue-400 text-sm font-readex font-light text-white`}>{data.category}</span>
                <div className={`flex flex-row gap-1.5 justify-end items-center`}>
                    {data.techStack
                        .filter((tech, index) => index < 3)
                        .map((techName, index) => {
                            const tech = techstackList.find(techObj => techObj.name === techName)

                            return <DynamicIcon key={index} lib={tech.icon_lib} name={tech.icon_component} style={{color: tech.color}}
                                         className={`text-2xl text-white`}/>
                        })
                    }
                    <MdOutlineMoreHoriz className={`text-white hover:scale-120 transition-all duration-200`}
                        onClick={() => setOpenTechPopup(!openTechPopup)}/>
                </div>
            </div>
            <div className={"flex flex-col gap-0.75"}>
                <Image src={data.image} alt={"Logo projektu " + data.name} width={144} height={144} className={"h-18 w-18 ml-2 mb-1"}/>
                <h3 className={"font-readex text-4xl text-white"}>{data.visible_name}</h3>
                <p className={`font-readex font-light text-neutral-300/90 text-lg`}>{ (data.startedDate.getMonth() + 1 ) + "/" + data.startedDate.getFullYear()} - {data.endedDate === null ? "Aktivní" : (data.endedDate.getMonth() + 1 ) + "/" + data.endedDate.getFullYear()}</p>
                <p className={`text-neutral-200/90 font-readex font-light`}>{data.description.substring(0, 120)}...</p>
            </div>
            <div className={"flex flex-row w-full items-center gap-2"}>
                <Link href={`/projekty/${data.slug}`} className={`flex-1`}>
                    <PrimaryButton className={`w-full bg-primaryBlue-500 text-[clamp(0.75rem,1rem,1rem)]`} label={"Zjistit více"}/>
                </Link>
                {(data.secondBtn) && <Link href={data.secondBtn.link} target={"_blank"}  className={`flex-1`}>
                    <SecondaryButton className={`w-full text-[clamp(0.75rem,1rem,1rem)] px-0!`} label={data.secondBtn.label}/>
                </Link>}
            </div>
            <AnimatePresence>
            {openTechPopup && (

                <motion.div className={`absolute top-0 left-0 w-full h-full bg-black/50 rounded-lg flex items-center justify-center`}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}
                >
                    <div className={`w-9/10 max-w-4xl bg-bgDark-700 p-4 rounded-lg flex flex-col gap-2 relative`}>
                        <IoMdClose className={`absolute top-2 right-2 text-white hover:scale-120 transition-all duration-200`} onClick={() => setOpenTechPopup(false)}/>
                        <h3 className={`font-readex text-white text-xl`}>Použité technologie</h3>
                        <div className={`flex flex-row gap-x-3 flex-wrap gap-y-1`}>
                            {data.techStack.map((tech, index) => {
                                const techObj = techstackList.find(techObj => techObj.name === tech)
                                return (
                                    <span key={index} className={`flex flex-row gap-1 items-center`}>
                                        <DynamicIcon  lib={techObj.icon_lib} name={techObj.icon_component} style={{color: techObj.color}}
                                                 className={`text-xl text-white`}/>
                                        <span className={`text-white font-readex `}>{techObj.name}</span>
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </motion.div>

            )}
            </AnimatePresence>
        </article>
    );
};

export default ProjectCard;