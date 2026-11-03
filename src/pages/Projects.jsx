
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import Navbar from "../components/Navbar";
import "./projects.css";

function Projects() {
  return (
    <>
      <Navbar />

      <main className="projects-page">

        {/* PRIMERA SECCIÓN */}
        <section className="projects-hero">

          <motion.div
            className="projects-intro"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1>Mis proyectos</h1>

            <p>
              ¡Conoce los proyectos que he
              <br />
              desarrollado o participado!
            </p>
          </motion.div>

          <div className="projects-shape"></div>

        </section>

        
        <section className="projects-gallery">

          <h2 className="gallery-title">Proyectos 2026</h2>

          {/* TARJETA ASHES OF MIND */}
          <motion.article
            className="project-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >

            {/* INFORMACIÓN */}
            <div className="project-info">

              <h3>Mecánicas Ashes of Mind</h3>

              <div className="project-divider"></div>

              <p>
                Ashes of Mind es un proyecto de terror psicológico
                que presenta la historia de un protagonista atrapado
                dentro de un espacio fragmentado, representado como
                un hospital psiquiátrico abandonado. En este entorno,
                la realidad se distorsiona constantemente, reflejando
                recuerdos incompletos, emociones reprimidas y
                conflictos internos, mientras una entidad desconocida
                acecha en la oscuridad.
              </p>

              <Link to="/Proyecto1" className="project-button">
                Explorar Proyecto
                <ArrowRight size={16} />
              </Link>

            </div>

            {/* IMAGEN */}
            <div className="project-image-container">

              <img
                src={`${import.meta.env.BASE_URL}images/ashes-of-mind.png`}
                alt="Ashes of Mind - Mecánica de cordura"
                className="project-image"
              />

            </div>

          </motion.article>

        </section>

      </main>
    </>
  );
}

export default Projects;
