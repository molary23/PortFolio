import React, { useContext } from "react";
import { InfoContext } from "../services/info.services";

function Projects(props) {
  const { info } = useContext(InfoContext),
    { projectsRef } = props;

  let max = 9,
    more = false,
    all = info.projects;
  if (all.length > max) {
    more = true;
    all = info.projects.slice(0, max);
  }

  let projects = all.map((project, i) => {
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
          <div className="project-details">
            <div className="project-title">
              <label htmlFor="#projectCategory">Category:</label>
            </div>
            <div className="project-category">
              <p id="projectCategory">{project.category}</p>
            </div>
          </div>

          <div className="project-image-container">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <div className="overlay">
              <div className="text">
                {project.category.toLowerCase() === "web" && (
                  <a href={project.website} target="_blank" rel="noreferrer">
                    View in Browser
                  </a>
                )}
                {project.category.toLowerCase() === "mobile" &&
                  project.store.map((store, i) => {
                    return (
                      <div className="project-store-link" key={i}>
                        <a
                          href={Object.values(store)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View on{" "}
                          <span className="store-name">
                            {Object.keys(store)}
                          </span>{" "}
                          store
                        </a>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="projects" ref={projectsRef}>
      <div className="my-projects">
        <div className="section-heading">
          <h1>My Projects</h1>
          <h2>Jobs I've done</h2>
        </div>
        <div className="container">
          <div className="row">{projects}</div>
        </div>
        {more && (
          <div className="view-more">
            <a
              href="//www.github.com/molary23"
              type="button"
              className="outline-btn btn"
            >
              View More on GitHub <i className="fa-solid fa-chevron-right" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
