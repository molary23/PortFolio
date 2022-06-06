import React, { useContext, useState } from "react";
import { InfoContext } from "../services/info.services";
import Loader from "../layout/Loader";

function Skills() {
  const { info, isLoading } = useContext(InfoContext);

  let skill;
  if (isLoading) {
    skill = <Loader />;
  } else {
    skill = info.skills.map((skill, i) => {
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
  }

  return (
    <div className="skills">
      <div className="my-skills">
        <div className="section-heading">
          <h1>Skills</h1>
        </div>

        <div className="container">
          <div className="row">{skill}</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
