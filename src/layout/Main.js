import React, { useRef, useContext } from "react";
import Nav from "./Nav";
import Home from "../components/Home";
import Footer from "./Footer";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Loader from "./Loader";

import { InfoContext } from "../services/info.services";

function Main() {
  const homeRef = useRef(),
    aboutRef = useRef(),
    skillsRef = useRef(),
    projectsRef = useRef(),
    servicesRef = useRef(),
    contactRef = useRef(),
    { isLoading } = useContext(InfoContext);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <Nav
            {...{
              homeRef,
              aboutRef,
              skillsRef,
              projectsRef,
              servicesRef,
              contactRef,
            }}
          />
          <Home homeRef={homeRef} contactRef={contactRef} />
          <About aboutRef={aboutRef} />
          <Skills skillsRef={skillsRef} />
          <Projects projectsRef={projectsRef} />
          <Services servicesRef={servicesRef} />
          <Contact contactRef={contactRef} />
          <Footer />
        </section>
      )}
    </div>
  );
}

export default Main;
