import React, { useRef } from "react";
import "./styles/style.css";
import Nav from "./layout/Nav";
import Home from "./components/Home";

import { InfoContextProvider } from "./services/info.services";
import Footer from "./layout/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
function App() {
  const homeRef = useRef(),
    aboutRef = useRef(),
    skillsRef = useRef(),
    projectsRef = useRef(),
    servicesRef = useRef(),
    contactRef = useRef();

  return (
    <InfoContextProvider>
      <div className="App">
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
          <Home homeRef={homeRef} />
          <About aboutRef={aboutRef} />
          <Skills skillsRef={skillsRef} />
          <Projects projectsRef={projectsRef} />
          <Services servicesRef={servicesRef} />
          <Contact contactRef={contactRef} />
          <Footer />
        </section>
      </div>
    </InfoContextProvider>
  );
}

export default App;
