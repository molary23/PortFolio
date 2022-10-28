import React, { useContext, useRef } from "react";
import { InfoContext } from "../services/info.services";
import useObserve from "../hooks/useObserve";

function About(props) {
  const { info } = useContext(InfoContext),
    { aboutRef, section } = props,
    headingRef = useRef(),
    imageRef = useRef(),
    contentRef = useRef();

  useObserve([headingRef, imageRef, contentRef]);

  return (
    <div className="about" ref={aboutRef}>
      <div className="about-me">
        <div className="section-heading hidden" ref={headingRef}>
          <h1>About Me</h1>
          <h2 className={`${section === "about" ? "animate" : ""}`}>
            a short story about me
          </h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12">
              <div className="about-image hidden" ref={imageRef}>
                <img
                  src={info.about.photo}
                  alt="Hassan Azeez Adeola"
                  className="my-image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="about-content hidden" ref={contentRef}>
                {info.about.content.map((item, i) => {
                  return (
                    <p className="about-info" key={i}>
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
