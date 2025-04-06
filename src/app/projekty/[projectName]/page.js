"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import "./ProjectPage.css";
import ProjectList from "../../../contentData/projects";
import homepageTechnologiesList from "../../../contentData/homepageTechnologiesList";

const ProjectPage = () => {
    const router = useRouter();
    const params = useParams();
    const projectName = params?.projectName;
    const [currentDate, setCurrentDate] = useState({ month: 1, year: 2025 });

    const project = ProjectList.find((project) => project.slug === projectName);

    useEffect(() => {
        // Nastavíme aktuální datum až na klientovi
        setCurrentDate({
            month: new Date().getMonth() + 1,
            year: new Date().getFullYear()
        });

        if (project === undefined) {
            router.push("/404");
        }
    }, [project, router]);

    if (!project) {
        return null; // nebo nějaký loading stav
    }

    return (
        <section id="projectPage">
            <div className="container">
                <div className="Icon box">
                    <img src={project.img} alt="Ikona projektu" />
                </div>
                <div className="Description box">
                    <p style={{ whiteSpace: "pre-line" }}>{project.description}</p>
                </div>
                <div className="Title box">
                    <h2>{project.title}</h2>
                </div>
                <div className="Activity box">
                    <h4>
                        {project.startedDate.month + "/" + project.startedDate.year} -{" "}
                        {project.endedDate.month === currentDate.month &&
                        project.endedDate.year === currentDate.year
                            ? "Aktivní"
                            : project.endedDate.month + "/" + project.endedDate.year}
                    </h4>
                </div>
                <div className="Tech-stack box">
                    <h4>Použité technologie:</h4>
                    <span className="techStackIcons">
                        {project.techStack.map((tech, index) => {
                            const techInfo = homepageTechnologiesList.find(
                                (t) => t.name === tech
                            );

                            return (
                                <React.Fragment key={tech}>
                                    {index > 0 && <span style={{ color: "white", marginRight: "5px" }}>, </span>}
                                    <Link
                                        href={`/projekty?techName=${techInfo?.name || ''}`}
                                        style={{ color: techInfo?.color || "inherit" }}
                                    >
                                        {techInfo?.iconComponent &&
                                            React.createElement(techInfo.iconComponent, {
                                                style: { marginRight: 4 },
                                            })}
                                        {tech}
                                    </Link>
                                </React.Fragment>
                            );
                        })}
                    </span>
                </div>
                <div className="Links box">
                    <h4>Odkazy:</h4>
                    {project.links.map((link, index) => (
                        <a
                            href={link.link}
                            key={index}
                            className="projectLink"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Link href="/projekty" className="projectLink">
                        Zpět na projekty
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectPage;