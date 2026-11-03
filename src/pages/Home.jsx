import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  UserRound,
  Gamepad2,
  Mail,
  Search,
  ArrowRight,
  Plus
} from "lucide-react";

import Navbar from "../components/Navbar";
import "./home.css";

function Home() {
  return (
    <>
      <Navbar />

      <main className="home-hero">

        
        <motion.section
          className="home-intro"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>
            ¡Hola!
            <br />
            Soy <span className="name-highlight">Felipe</span>
          </h1>

          <h2>Ingeniero en multimedia</h2>

          <p>
            Desarrollador de videojuegos,
            <br />
            experiencias interactivas y
            <br />
            edición audiovisual.
          </p>

          <Link to="/proyectos" className="explore-button">
            Explorar Portafolio
            <ArrowRight size={17} />
          </Link>
        </motion.section>

        {/* PORTÁTIL */}
        <motion.section
          className="laptop-container"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >

          {/* IMAGEN PNG DEL COMPUTADOR */}
          <img
            className="laptop-image"
            src={`${import.meta.env.BASE_URL}images/laptop.png`}
            alt="Portátil ASUS TUF Gaming"
          />

          {/* CONTENIDO INTERACTIVO DE LA PANTALLA */}
          <div className="laptop-screen">

            {/* BARRA DEL NAVEGADOR */}
            <div className="browser-header">

              <div className="browser-tab">
                <span>Feliperoblessx</span>
                <Plus size={12} />
              </div>

              <div className="browser-address">
                <span>feliperoblessx.dev</span>
              </div>

            </div>

            {/* CONTENIDO DEL NAVEGADOR */}
            <div className="browser-content">

              <div className="browser-search">
                <Search size={13} />
                <span>Explora mi portafolio</span>
              </div>

              {/* TARJETAS INTERACTIVAS */}
              <div className="browser-cards">

                <Link to="/sobre-mi" className="browser-card">
                  <UserRound size={34} strokeWidth={1.5} />
                  <span>Sobre mí</span>
                </Link>

                <Link to="/proyectos" className="browser-card">
                  <Gamepad2 size={37} strokeWidth={1.5} />
                  <span>Proyectos</span>
                </Link>

                <Link to="/contacto" className="browser-card">
                  <Mail size={34} strokeWidth={1.5} />
                  <span>Contáctame</span>
                </Link>

              </div>

            </div>
          </div>

        </motion.section>

      </main>
    </>
  );
}

export default Home;
