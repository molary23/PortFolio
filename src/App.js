import React from "react";
import "./styles/style.css";
import { InfoContextProvider } from "./services/info.services";
import Main from "./layout/Main";
function App() {
  return (
    <InfoContextProvider>
      <div className="App">
        <Main />
      </div>
    </InfoContextProvider>
  );
}

export default App;
