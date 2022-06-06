import React from "react";
import "./styles/style.css";
import Nav from "./layout/Nav";
import Home from "./components/Home";

import { InfoContextProvider } from "./services/info.services";
import SubFooter from "./layout/SubFooter";
import Footer from "./layout/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
function App() {
  return (
    <InfoContextProvider>
      <div className="App">
        <section>
          <Nav />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
          <SubFooter />
          <Footer />
        </section>
      </div>
    </InfoContextProvider>
  );
}

export default App;
