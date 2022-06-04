import logo from "./logo.svg";
import "./styles/style.css";
import Nav from "./layout/Nav";
import Home from "./components/Home";

import { InfoContext, InfoContextProvider } from "./services/info.services";
function App() {
  return (
    <InfoContextProvider>
      <div className="App">
        <Nav />
        <Home />
      </div>
    </InfoContextProvider>
  );
}

export default App;
