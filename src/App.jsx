import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Proyecto1 from "./pages/Proyecto1";
import Proyecto2 from "./pages/Proyecto2";
import Proyecto3 from "./pages/Proyecto3";
import Proyecto4 from "./pages/Proyecto4";
import Proyecto5 from "./pages/Proyecto5";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<About />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/proyecto1" element={<Proyecto1 />} />
        <Route path="/proyecto2" element={<Proyecto2 />} />
        <Route path="/proyecto3" element={<Proyecto3 />} />
        <Route path="/proyecto4" element={<Proyecto4 />} />
        <Route path="/proyecto5" element={<Proyecto5 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;