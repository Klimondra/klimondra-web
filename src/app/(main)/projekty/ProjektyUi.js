"use client";
import React, {useEffect, useState} from 'react';
import {IoOptions} from "react-icons/io5";
import {AnimatePresence, motion} from "motion/react";
import {IoIosArrowDown} from "react-icons/io";
import ProjektySelect from "@/components/projectPage/techSelect";
import ProjectCard from "@/components/projectPage/projectCard";
import {useSearchParams} from "next/navigation";

const ProjektyUi = ({projectsData = [], techstackData, technologieProjektu}) => {
    const [filterVisible, setFilterVisible] = useState(false);
    const [filter, setFilter] = useState({search: "", tech: []});
    const [filterData, setFilterData] = useState(projectsData);
    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams.get("tech") !== null) {
            const techToFind = techstackData.find((tech) => tech.label === searchParams.get("tech"));
            setFilter({...filter, tech: [...filter.tech , techToFind.id]});
            setFilterVisible(true);
        }
    }, []);


    useEffect(() => {
        if (filter.search === "" && filter.tech.length === 0) setFilterData(projectsData)
        else {
            const techFilter = filter.tech.length === 0 ?
                projectsData :
                projectsData.filter(
                    (project) => {
                        const projectTechIds = technologieProjektu
                            .filter((tech) => tech.projekty_id === project.id)
                            .map((tech) => tech.technologie_id);
                        return filter.tech.every((techId) => projectTechIds.includes(techId));
                    });
            const result = filter.search === "" ?
                techFilter :
                techFilter.filter(
                    (project) => (
                        project.label
                            .toLowerCase().includes(filter.search.toLowerCase())
                        || project.description.toLowerCase().includes(filter.search.toLowerCase())
                        || project.category.toLowerCase().includes(filter.search.toLowerCase())
                    ))
            setFilterData(result);
        }
    }, [filter, projectsData]);

    return (
        <main className={`w-full min-h-svh bg-bgDark-800 pt-22`}>
            <h2 className={`font-readex text-white text-5xl font-semibold text-center mt-6`}>Projekty</h2>
            <p className={`font-readex text-white text-xl md:text-2xl text-center mt-4 px-2`}>Zde jsou některé mé práce, které jsou jakžtakž publikovatelné :D</p>

            <section className={`w-9/10 mx-auto mt-10`}>
                <div
                    onClick={() => setFilterVisible(!filterVisible)}
                    className={`flex items-center justify-between w-full max-w-4xl mx-auto bg-bgDark-700 p-4 rounded-lg cursor-pointer hover:bg-bgDark-600 transition-colors duration-300`}
                >
                    <div className="flex items-center gap-3">
                        <IoOptions className="text-white text-xl" />
                        <h3 className="font-readex text-white text-xl">Filtrovat projekty</h3>
                    </div>
                    <motion.div
                        animate={{ rotate: filterVisible ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <IoIosArrowDown className="text-white text-2xl" />
                    </motion.div>
                </div>
                <AnimatePresence>
                    {filterVisible && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="bg-bgDark-700 p-6 mt-2 rounded-lg max-w-4xl mx-auto">
                                <div className={`flex flex-col gap-1`}>
                                    <label className={`font-readex text-white text-lg`} htmlFor={"projectFilterSearch"}>Vyhledávejte: </label>
                                    <input type="text" id={"projectFilterSearch"} placeholder={"Hledat projekty..."}
                                        value={filter.search} onChange={(e) => setFilter({...filter, search: e.target.value})}
                                       className={`font-readex w-full p-2 rounded-md bg-gradient-to-b from-bgDark-600 to-bgDark-600/90 text-white text-lg outline-none border-bgDark-500 border-2`} />
                                </div>
                                <div className={`flex flex-col gap-1 mt-2`}>
                                    <label className="font-readex text-white text-lg" htmlFor="techstackInput">
                                        Vyberte tech stack:
                                    </label>
                                    <ProjektySelect filter={filter} setFilter={setFilter} techstackData={techstackData} />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
            <section className={`w-9/10 mx-auto mt-6 py-6 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4`}>
                {filterData.map((project, index) => (
                    <ProjectCard key={index} data={project} technologieProjektu={technologieProjektu.filter((tech)=> tech.projekty_id === project.id)}/>
                ))}
            </section>
        </main>
    );
};

export default ProjektyUi;