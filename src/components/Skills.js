import React, { useContext, useRef } from "react";
import { InfoContext } from "../services/info.services";

import useObserve from "../hooks/useObserve";

function Skills(props) {
  const { info } = useContext(InfoContext),
    { skillsRef, section } = props,
    headingRef = useRef(),
    cardRef = useRef();

  useObserve([headingRef, cardRef]);

  let skills = info.skills.map((skill, i) => {
    return (
      <div className="col-lg-3 col-sm-4 col-6 skill-holder" key={i}>
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
        <div className="section-heading hidden" ref={headingRef}>
          <h1>Skills</h1>
          <h2 className={`${section === "skills" ? "animate" : ""}`}>
            tech stack i use to get the job done
          </h2>
        </div>

        <div className="container">
          <div className="row skill-row hidden" ref={cardRef}>
            {skills}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
