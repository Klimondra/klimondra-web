import React, {useEffect, useState} from 'react';
import "./Projekty.css"
import Select from "react-select";
import homepageTechnologiesList from "../contentData/homepageTechnologiesList";
import ProjectCard from "../components/project/ProjectCard";
import ProjectList from "../contentData/projects";
import {useSearchParams} from "react-router-dom";


const Projekty = () => {
    const [searchParams] = useSearchParams()
    const predefinedTech = searchParams.get("techName");

    const [searchText, setSearchText] = useState("");
    const [selectedTech, setSelectedTech] = useState([]);

    const technologiesToSelect = homepageTechnologiesList.map(tech => ({
        value: tech.name,
        label: tech.name,
        iconComponent: tech.iconComponent,
        color: tech.color
    }))

    useEffect(() => {
        if (predefinedTech) {
            const foundTech = technologiesToSelect.find(tech => predefinedTech === tech.label);
            if (foundTech) {
                setSelectedTech([foundTech]);
            }
        }
        // eslint-disable-next-line
    }, [predefinedTech]);

    return (
        <>
            <section id="projekty">
                <div className="texts">
                    <h2>Projekty</h2>
                    <p>Zde jsou některé mé práce, které jsou jakžtakž publikovatelné :D</p>
                </div>
                <div className="filters">
                    <input id="searchInput" type={"text"} placeholder="Vyhledat text..." onChange={(e) => setSearchText(e.target.value)} value={searchText} />
                    <Select
                        isMulti
                        name="technologies"
                        id="techSelectInput"
                        classNamePrefix="techSelect"
                        options={technologiesToSelect}
                        placeholder="Vyberte technologie"
                        value={selectedTech}
                        onChange={setSelectedTech}
                        getOptionLabel={(e) => {
                            const Icon = e.iconComponent;
                            return (
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Icon style={{ color: e.color, fontSize: 20, marginRight: 8 }} />
                                    {e.label}
                                </div>
                            );
                        }}
                    />
                </div>
                <div className="filteredContent">
                    {
                        searchText === "" && selectedTech.length === 0
                            ? ProjectList.map((project) => {
                                return <ProjectCard title={project.title} key={project.id} img={project.img} technologies={project.techStack} startedDate={project.startedDate} endedDate={project.endedDate} description={project.description} secondBtn={project.secondBtn} />
                            })
                            : ProjectList.filter((project) => {
                                return selectedTech.every(selection => project.techStack.includes(selection.value)); // Porovnáváme s polem project.techStack
                            }).filter((project) => {
                                return project.title.toLowerCase().includes(searchText.toLowerCase());
                            }).map((filteredProject) => {
                                return <ProjectCard title={filteredProject.title} key={filteredProject.id} img={filteredProject.img} technologies={filteredProject.techStack} startedDate={filteredProject.startedDate} endedDate={filteredProject.endedDate} description={filteredProject.description} secondBtn={filteredProject.secondBtn} />;
                            })
                    }
                </div>
            </section>
        </>
    );
};

export default Projekty;