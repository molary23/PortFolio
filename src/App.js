import logo from "./logo.svg";
import "./styles/style.css";
import Nav from "./layout/Nav";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
