"use client"
import React, { useEffect, useState, Suspense } from 'react';
import "./Projekty.css"
import Select from "react-select";
import homepageTechnologiesList from "../../contentData/homepageTechnologiesList";
import ProjectCard from "@/components/project/ProjectCard";
import ProjectList from "../../contentData/projects";
import { useSearchParams } from "next/navigation";

const ProjektyContent = () => {
    const searchParams = useSearchParams();
    const predefinedTech = searchParams.get('techName');

    const [searchText, setSearchText] = useState("");
    const [selectedTech, setSelectedTech] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    const technologiesToSelect = homepageTechnologiesList.map(tech => ({
        value: tech.name,
        label: tech.name,
        iconComponent: tech.iconComponent,
        color: tech.color
    }));

    useEffect(() => {
        setIsMounted(true);
        if (predefinedTech) {
            const foundTech = technologiesToSelect.find(tech => predefinedTech === tech.label);
            if (foundTech) {
                setSelectedTech([foundTech]);
            }
        }
    }, [predefinedTech]);

    // Počkáme s renderováním, dokud není komponenta namountována na klientovi
    if (!isMounted) {
        return null;
    }

    return (
        <section id="projekty">
            <div className="texts">
                <h2>Projekty</h2>
                <p>Zde jsou některé mé práce, které jsou jakžtakž publikovatelné :D</p>
            </div>
            <div className="filters">
                <input
                    id="searchInput"
                    type="text"
                    placeholder="Vyhledat text..."
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                />
                <Select
                    isMulti
                    name="technologies"
                    id="techSelectInput"
                    classNamePrefix="techSelect"
                    options={technologiesToSelect}
                    placeholder="Vyberte technologie"
                    value={selectedTech}
                    onChange={setSelectedTech}
                    getOptionLabel={(e) => (
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <e.iconComponent style={{ color: e.color, fontSize: 20, marginRight: 8 }} />
                            {e.label}
                        </div>
                    )}
                />
            </div>
            <div className="filteredContent">
                {searchText === "" && selectedTech.length === 0
                    ? ProjectList.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            img={project.img}
                            technologies={project.techStack}
                            startedDate={project.startedDate}
                            endedDate={project.endedDate}
                            description={project.description}
                            secondBtn={project.secondBtn}
                            slug={project.slug}
                        />
                    ))
                    : ProjectList.filter((project) => (
                        selectedTech.every(selection => project.techStack.includes(selection.value))
                    ))
                        .filter((project) => (
                            project.title.toLowerCase().includes(searchText.toLowerCase())
                        ))
                        .map((filteredProject) => (
                            <ProjectCard
                                key={filteredProject.id}
                                title={filteredProject.title}
                                img={filteredProject.img}
                                technologies={filteredProject.techStack}
                                startedDate={filteredProject.startedDate}
                                endedDate={filteredProject.endedDate}
                                description={filteredProject.description}
                                secondBtn={filteredProject.secondBtn}
                                slug={filteredProject.slug}
                            />
                        ))
                }
            </div>
        </section>
    );
};

const Projekty = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProjektyContent />
        </Suspense>
    );
};

export default Projekty;
