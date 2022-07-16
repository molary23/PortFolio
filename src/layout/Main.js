import React, { useRef, useContext, useState } from "react";
import Nav from "./Nav";
import Home from "../components/Home";
import Footer from "./Footer";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";
import SplashScreen from "./SplashScreen";

import { InfoContext } from "../services/info.services";

function Main() {
  const homeRef = useRef(),
    aboutRef = useRef(),
    skillsRef = useRef(),
    projectsRef = useRef(),
    servicesRef = useRef(),
    contactRef = useRef(),
    { isLoading, error } = useContext(InfoContext),
    [section, setSection] = useState("null");

  const changeSection = (value) => {
    setSection(value);
  };

  return (
    <div>
      {isLoading & (error === null) ? <SplashScreen error={error} /> : null}
      {!isLoading & (error !== null) ? <SplashScreen error={error} /> : null}
      {!isLoading & (error === null) ? (
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
            onScroll={changeSection}
          />
          <Home homeRef={homeRef} contactRef={contactRef} />
          <About {...{ aboutRef, section }} />
          <Skills {...{ skillsRef, section }} />
          <Projects {...{ projectsRef, section }} />
          <Services {...{ servicesRef, section }} />
          <Contact {...{ contactRef, section }} />
          <Footer />
        </section>
      ) : null}
    </div>
  );
}

export default Main;
