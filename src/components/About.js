import React, { useContext } from "react";
import { InfoContext } from "../services/info.services";

function About(props) {
  const { info } = useContext(InfoContext),
    { aboutRef } = props;
  return (
    <div className="about" ref={aboutRef}>
      <div className="about-me">
        <div className="section-heading">
          <h1>About Me</h1>
          <h2>a short story about me</h2>
        </div>
        <p className="about-info">{info.about.content}</p>
      </div>
    </div>
  );
}

export default About;
