import React from "react"
import data from "../yourdata"
import Fade from "react-reveal/Fade"
import { withPrefix } from "gatsby";

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Tech Stack</h1>
          <div className="skills-grid">
            {data.skills.map(skill => (
                // <img src={skill.img} style={{maxHeight: 200, maxWidth: 200}} alt="css"></img>
                <div className="skill">
                <skill.img className="skill-icon"/>
                <p style={{textAlign: "center"}}>{skill.description}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
