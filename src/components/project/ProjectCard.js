"use client"
import React from 'react';
import Link from "next/link";
import "./ProjectCard.css"

const ProjectCard = (props) => {
    return (
        <article>
            <img src={props.img} alt="Obrázek z projektu"/>
            <div className="info">
                <h3>{props.title}</h3>
                <p>{props.startedDate.month + "/" + props.startedDate.year} - {
                    props.endedDate.month === new Date().getMonth() + 1 && props.endedDate.year === new Date().getFullYear() ? "Aktivní" : props.endedDate.month + "/" + props.endedDate.year
                }</p>
                <p className="techStack">Tech stack: {props.technologies.map((t, i) => i !== 0 ? ", " + t : t).join("")}</p>
                <p className="description">{props.description.substring(0, 100) + "..."}</p>
            </div>
            <div className="action">
                <Link href={"/projekty/" + props.slug}>Více informací &gt;</Link>
                {(props.secondBtn.label && props.secondBtn.link) && <a className="secondaryLink" href={props.secondBtn.link}>{props.secondBtn.label}</a>}
            </div>
        </article>
    );
};

export default ProjectCard;