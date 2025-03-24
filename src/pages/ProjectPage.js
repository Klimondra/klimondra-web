import React, { useEffect } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import "./ProjectPage.css";
import ProjectList from "../contentData/projects";
import homepageTechnologiesList from "../contentData/homepageTechnologiesList";

const ProjectPage = () => {
    const navigate = useNavigate();
    const { projectName } = useParams();
    const project = ProjectList.find((project) => project.title === projectName);

    useEffect(() => {
        if (project === undefined) {
            navigate("/404");
        }
    }, [project, navigate]);

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
                        {project.endedDate.month === new Date().getMonth() + 1 &&
                        project.endedDate.year === new Date().getFullYear()
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
                        {index > 0 && <span style={{ color: "white" }}>, </span>}
                        <span style={{ color: techInfo?.color || "inherit" }}>
                    {techInfo?.iconComponent &&
                        React.createElement(techInfo.iconComponent, {
                            style: { marginRight: 4 },
                        })}
                            {tech}
                  </span>
                    </React.Fragment>
                );
            })}
          </span>
                </div>
                <div className="Links box">
                    <h4>Odkazy:</h4>
                    {project.links.map((link, index) => {
                        return <a href={link.link} key={index} className="projectLink">{link.label}</a>;
                    })}
                    <Link to="/projekty" className="projectLink">Zpět na projekty</Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectPage;
