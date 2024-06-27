import React from "react";
import './SkillsInfoCard.css';

const SkillsInfoCard = ({ heading, skills }) => {
    return (
        <div className="skills-info-card">

            <h3>{heading}</h3>

            <div className="skills-info-content">
                {skills.map((item, index) => (
                    <React.Fragment key = {`skills_${index}`}>
                        <div className="skill-info">
                            <p>{item.skill}</p>
                            <p className="percentage">{item.percentage}</p>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress" style={{ width: item.percentage }} />
                        </div>
                    </React.Fragment>
                ))}
            </div>
    </div>
    )   
}

export default SkillsInfoCard;