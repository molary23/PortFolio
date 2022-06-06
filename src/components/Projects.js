import React, { useContext } from "react";
import { InfoContext } from "../services/info.services";
import Loader from "../layout/Loader";

function Projects() {
  const { info, isLoading } = useContext(InfoContext);

  let projects;
  if (isLoading) {
    projects = <Loader />;
  } else {
    projects = info.projects.map((project, i) => {
      return (
        <div className="col-lg-4 col-12" key={i}>
          <div className="project-card my-card">
            <div className="project-name">
              <h3>{project.name}</h3>
            </div>
            <div className="project-type">
              <h5>{project.type}</h5>
            </div>
            <div className="project-details">
              <div className="project-title">
                <label htmlFor="#projectStacks">Stack:</label>
              </div>
              <div className="project-stack">
                <p id="projectStacks">
                  {project.stack.map((stack, i) => {
                    if (project.stack.length > i + 1) {
                      return `${stack}, `;
                    } else {
                      return stack;
                    }
                  })}
                </p>
              </div>
            </div>
            <div className="project-image">
              <img src={project.image} alt={project.name} />
              <p>{project.website}</p>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="projects">
      <div className="my-projects">
        <div className="section-heading">
          <h1>My Projects</h1>
          <h2>Jobs I've done</h2>
        </div>
        <div className="container">
          <div className="row">{projects}</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
