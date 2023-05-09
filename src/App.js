import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from "./components/NavBar";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Teams from "./components/Teams";
import Contact from "./components/Contact";

function App() {
  return (
    //<BrowserRouter>
    <div className="App">
      <h7>[React Routing]</h7>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/about/:name/:comment" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:city" element={<Teams />} />
        <Route path="/teams/:city/:color" element={<Teams />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </div>
    //</BrowserRouter>
  );
}

export default App;
