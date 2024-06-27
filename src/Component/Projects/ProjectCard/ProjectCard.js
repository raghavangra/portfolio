import React from "react";
import './ProjectCard.css';

const ProjectCard = ({ details }) => {
    return (
        <div className="project-card">
            <h5>{details.title}</h5>
            <div className="project-duration">{details.date}</div>

            <ul>
                {details.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectCard;