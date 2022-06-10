import React, { useContext, useState } from "react";
import { InfoContext } from "../services/info.services";

function Skills(props) {
  const { info } = useContext(InfoContext),
    { skillsRef } = props;

  let skills = info.skills.map((skill, i) => {
    return (
      <div className="col-lg-3 col-sm-4 col-6" key={i}>
        <div className="skill-card my-card">
          <div className="skill-image">
            <img src={skill.image} alt={skill.name} />
          </div>
          <div className="skill-name">
            <h3>{skill.name}</h3>
          </div>
          <div className="skill-text"></div>
        </div>
      </div>
    );
  });

  return (
    <div className="skills" ref={skillsRef}>
      <div className="my-skills">
        <div className="section-heading">
          <h1>Skills</h1>
          <h2>tech stack i use to get the job done</h2>
        </div>

        <div className="container">
          <div className="row skill-row">{skills}</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
