import React, { useContext, useState } from "react";
import { InfoContext } from "../services/info.services";
import { FiLoader } from "react-icons/fi";

function Skills() {
  const { info, isLoading } = useContext(InfoContext);
  let skill;
  if (isLoading) {
    skill = (
      <div className="loader">
        <FiLoader className="icon-spin" />
      </div>
    );
  } else {
    skill = info.skills.map((skill, i) => {
      return (
        <div className="col-lg-3 col-sm-4 col-6" key={i}>
          <div className="skill-card">
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
  }

  return (
    <div className="skills">
      <div className="my-skills">
        <h1 className="section-heading">Skills</h1>
        <div className="container">
          <div className="row">{skill}</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
