import logo from "./logo.svg";
import "./styles/style.css";
import Nav from "./layout/Nav";
import Home from "./components/Home";

import { InfoContext, InfoContextProvider } from "./services/info.services";
import SubFooter from "./layout/SubFooter";
import Footer from "./layout/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
function App() {
  return (
    <InfoContextProvider>
      <div className="App">
        <section>
          <Nav />
          <Home />
          <About />
          <Skills />
          <SubFooter />
          <Footer />
        </section>
      </div>
    </InfoContextProvider>
  );
}

export default App;
