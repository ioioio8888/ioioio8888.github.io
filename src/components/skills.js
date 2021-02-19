import React from "react"
import data from "../yourdata"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Tech Stack</h1>
          <div className="skills-grid">
            {data.skills.map(skill => (
                <img src={skill.img} style={{maxHeight: 200, maxWidth: 200}} alt="css"></img>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
