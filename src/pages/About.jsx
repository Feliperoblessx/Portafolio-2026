
import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import "./about.css";
const getImage = (filename) => {
  return `${import.meta.env.BASE_URL}images/${filename}`;
};

function About() {
  return (
    <>
      <Navbar />

      <main className="about-page">

        <section className="about-hero">

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Sobre mí</h1>

            <p>
              Soy ingeniero en multimedia de la Universidad de
              Boyacá. Me interesa el desarrollo de videojuegos,
              la creación de experiencias interactivas y la
              producción audiovisual. Disfruto experimentar
              con herramientas y convertir ideas creativas
              en proyectos.
            </p>
          </motion.div>

          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={getImage("profile.png")}
              className="about-image"
              alt="Fotografía de Felipe"
            />
          </motion.div>

        </section>

        {/* SEGUNDA SECCIÓN: INFORMACIÓN PERSONAL */}
        <section className="about-info">

          {/* MI ENFOQUE */}
          <motion.article
            className="about-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Mi enfoque</h2>
            <div className="about-divider"></div>

            <p>
              Desarrollar videojuegos, crear experiencias
              interactivas y producir contenido multimedia
              que conecte con las personas a través de la
              interactividad y la narrativa.
            </p>
          </motion.article>

          {/* LO QUE ME GUSTA HACER */}
          <motion.article
            className="about-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2>Lo que me gusta hacer</h2>
            <div className="about-divider"></div>

            <div className="about-interest">
              <span className="about-icon">
                <img
                  src={getImage("videojuegos.png")}
                  alt="Videojuegos"
                />
              </span>
              <p>Desarrollo de videojuegos</p>
            </div>

            <div className="about-interest">
              <span className="about-icon">
                <img
                  src={getImage("interactividad.png")}
                  alt="Experiencias interactivas"
                />
              </span>
              <p>Diseño de experiencias interactivas</p>
            </div>

            <div className="about-interest">
              <span className="about-icon">
                <img
                  src={getImage("edicion.png")}
                  alt="Edición audiovisual"
                />
              </span>
              <p>Edición de audio y video</p>
            </div>
          </motion.article>

          {/* MIS PILARES */}
          <motion.article
            className="about-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Mis pilares</h2>
            <div className="about-divider"></div>

            <div className="about-pillars">

              <div className="pillar-item">
                <img
                  src={getImage("creativo.png")}
                  alt="Creativo"
                />
                <span>Creativo</span>
              </div>

              <div className="pillar-item">
                <img
                  src={getImage("curioso.png")}
                  alt="Curioso"
                />
                <span>Curioso</span>
              </div>

              <div className="pillar-item">
                <img
                  src={getImage("experimental.png")}
                  alt="Experimental"
                />
                <span>Experimental</span>
              </div>

              <div className="pillar-item">
                <img
                  src={getImage("perseverante.png")}
                  alt="Perseverante"
                />
                <span>Perseverante</span>
              </div>

            </div>
          </motion.article>

          {/* PROGRAMAS */}
          <motion.article
            className="about-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2>Programas</h2>
            <div className="about-divider"></div>

            <div className="about-programs">

              <div className="program-item">
                <div className="program-logo">
                  <img
                    src={getImage("unreal.png")}
                    alt="Unreal Engine"
                  />
                </div>
                <p>Unreal<br />Engine</p>
              </div>

              <div className="program-item">
                <div className="program-logo">
                  <img
                    src={getImage("unity.png")}
                    alt="Unity"
                  />
                </div>
                <p>Unity</p>
              </div>

              <div className="program-item">
                <div className="program-logo">
                  <img
                    src={getImage("illustrator.png")}
                    alt="Adobe Illustrator"
                  />
                </div>
                <p>Adobe<br />Illustrator</p>
              </div>

              <div className="program-item">
                <div className="program-logo">
                  <img
                    src={getImage("photoshop.png")}
                    alt="Adobe Photoshop"
                  />
                </div>
                <p>Adobe<br />Photoshop</p>
              </div>

              <div className="program-item">
                <div className="program-logo">
                  <img
                    src={getImage("aftereffects.png")}
                    alt="Adobe After Effects"
                  />
                </div>
                <p>Adobe<br />After Effects</p>
              </div>

            </div>
          </motion.article>

          {/* FUERA DEL CÓDIGO */}
          <motion.article
            className="about-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Fuera del código</h2>
            <div className="about-divider"></div>

            <p>
              En mis tiempos libres me gusta escuchar música,
              jugar videojuegos y pasar tiempo con mi familia
              y mi pareja.
            </p>
          </motion.article>

        </section>

      </main>
    </>
  );
}

export default About;

