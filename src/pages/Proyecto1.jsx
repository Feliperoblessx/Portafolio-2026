
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Brain,
  ArrowRight,
  Sparkles
} from "lucide-react";


import Navbar from "../components/Navbar";
import "./proyecto1.css";

const galleryImages = [
  {
    src: "proceso-01.webp",
    alt: "imagen epica 1",
  },
  {
    src: "proceso-02.webp",
    alt: "Imagen epica 2",
  },
  {
    src: "proceso-03.webp",
    alt: "imagen epica 3",
  },
  {
    src: "proceso-04.webp",
    alt: "imagen epica 4",
  },
];

function Proyecto1() {

  // CONTROL DEL CARRUSEL
  const [currentImage, setCurrentImage] = useState(0);

  // IMAGEN ANTERIOR
  const previousImage = () => {
    setCurrentImage((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1
    );
  };

  // IMAGEN SIGUIENTE
  const nextImage = () => {
    setCurrentImage((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1
    );
  };

  return (
    <>
      <Navbar />

      <main className="ashes-page">

        <section className="ashes-hero">

          {/* INFORMACIÓN DEL PROYECTO */}
          <motion.div
            className="ashes-intro"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="ashes-logo">
              <img
                src={`${import.meta.env.BASE_URL}images/Logo-ashes.png`}
                alt="Ashes of Mind"
              />
            </div>

            <p>
              Ashes of Mind es un proyecto audiovisual de terror
              psicológico que presenta la historia de un protagonista
              atrapado dentro de un espacio mental fragmentado,
              representado como un hospital psiquiátrico abandonado.
              En este entorno, la realidad se distorsiona
              constantemente, reflejando recuerdos incompletos,
              emociones reprimidas y conflictos internos, mientras
              una entidad desconocida acecha en la oscuridad.
            </p>

          </motion.div>

          {/* PORTÁTIL */}
          <motion.div
            className="ashes-laptop"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            {/* IMAGEN DEL COMPUTADOR */}
            <img
              className="ashes-laptop-image"
              src={`${import.meta.env.BASE_URL}images/laptop.png`}
              alt="Portátil ASUS TUF Gaming"
            />

            {/* PANTALLA INTERACTIVA */}
            <div className="ashes-screen">

              {/* BARRA DEL NAVEGADOR */}
              <div className="ashes-browser-header">

                <div className="ashes-browser-tab">
                  <span>Feliperoblessx</span>
                </div>

                <div className="ashes-browser-address">
                  feliperoblessx.dev
                </div>

              </div>

              {/* GALERÍA */}
              <div className="ashes-gallery">

                <h2>Galería</h2>

                <div className="carousel">

                  {/* BOTÓN ANTERIOR */}
                  <button
                    className="carousel-arrow previous"
                    onClick={previousImage}
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft />
                  </button>

                  {/* IMAGEN ACTUAL */}
                  <div className="carousel-image-container">

                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImage}
                        src={
                          `${import.meta.env.BASE_URL}images/projects/ashes-of-mind/gallery/` +
                          galleryImages[currentImage].src
                        }
                        alt={galleryImages[currentImage].alt}
                        className="carousel-image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>

                  </div>

                  {/* BOTÓN SIGUIENTE */}
                  <button
                    className="carousel-arrow next"
                    onClick={nextImage}
                    aria-label="Imagen siguiente"
                  >
                    <ChevronRight />
                  </button>

                </div>

                {/* INDICADORES */}
                <div className="carousel-indicators">

                  {galleryImages.map((image, index) => (
                    <button
                      key={image.src}
                      className={
                        `carousel-dot ${
                          currentImage === index ? "selected" : ""
                        }`
                      }
                      onClick={() => setCurrentImage(index)}
                      aria-label={`Ver imagen ${index + 1}`}
                    />
                  ))}

                </div>

              </div>

            </div>

          </motion.div>

        </section>

        
{/* =================================
    DOCUMENTACIÓN DE LA MECÁNICA
================================= */}

<section className="ashes-details">

  {/* TARJETA PRINCIPAL: SISTEMA DE CORDURA */}
  <motion.article
    className="sanity-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >

    <div className="sanity-info">

      <div className="sanity-heading">
        <Brain size={30} />
        <h2>Sistema de cordura</h2>
      </div>

      <div className="sanity-divider"></div>

      <p>
        Ashes of Mind es un proyecto audiovisual de terror
        psicológico que presenta la historia de un protagonista
        atrapado dentro de un espacio mental fragmentado,
        representado como un hospital psiquiátrico abandonado.
        En este entorno, la realidad se distorsiona
        constantemente, reflejando recuerdos incompletos,
        emociones reprimidas y conflictos internos, mientras
        una entidad desconocida acecha en la oscuridad.
      </p>

    </div>

    <div className="sanity-image-container">
      <img
        src={`${import.meta.env.BASE_URL}images/ashes-of-mind.png`}
        alt="Sistema de cordura de Ashes of Mind"
      />
    </div>

  </motion.article>


  {/* TARJETAS INFERIORES */}
  <div className="sanity-columns">

    {/* OBJETIVO DE DISEÑO */}
    <motion.article
      className="sanity-text-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >

      <h2>Objetivo de diseño</h2>

      <div className="sanity-divider"></div>

      <p>
        La cordura se diseñó como un recurso central de
        supervivencia que representa la estabilidad mental
        del protagonista. Su propósito es conectar el deterioro
        psicológico con las condiciones de juego, haciendo que
        el estado mental del personaje tenga consecuencias
        directas sobre la partida.
      </p>

    </motion.article>


    {/* DISEÑO DE LA MECÁNICA */}
    <motion.article
      className="sanity-text-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
    >

      <h2>Diseño de la mecánica</h2>

      <div className="sanity-divider"></div>

      <p>
        El sistema utiliza un valor de cordura que disminuye
        durante el avance del juego y que el jugador debe
        procurar conservar. A diferencia de un recurso
        recuperable, la cordura no puede restaurarse, por lo
        que su pérdida representa un deterioro progresivo que
        condiciona la supervivencia del protagonista. Si la
        cordura llega a 0, el jugador tendrá que empezar de nuevo.
      </p>

    </motion.article>

  </div>


  {/* BOTÓN A BEHANCE */}
  <div className="sanity-behance">

    <a
      href="https://www.behance.net/rubielrobles/"
      target="_blank"
      rel="noopener noreferrer"
      className="behance-button"
    >
      Ver desarrollo completo en Behance
      <ArrowRight size={16} />
    </a>

  </div>

</section>


{/* =================================
    EFECTOS DE CORDURA
================================= */}

<section className="effects-details">

  {/* TARJETA PRINCIPAL */}
  <motion.article
    className="effects-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >

    <div className="effects-info">

      <div className="effects-heading">
        <Sparkles size={30} />
        <h2>Efectos de cordura</h2>
      </div>

      <div className="effects-divider"></div>

      <p>
        Al momento de que la cordura baja hasta el 25%, el
        jugador experimenta efectos visuales que afectan su
        campo de visión y su percepción de los colores.
        Si la cordura llega a 0, el jugador experimenta
        parpadeos momentáneos hasta desmayarse debido
        al deterioro de su estabilidad mental.
      </p>

    </div>

    {/* IMAGEN DE LOS EFECTOS */}
    <div className="effects-image-container">
      <img
        src={`${import.meta.env.BASE_URL}images/effects-ashes.png`}
        alt="Efectos visuales del sistema de cordura"
      />
    </div>

  </motion.article>


  {/* TARJETAS INFERIORES */}
  <div className="effects-columns">

    {/* OBJETIVO DE DISEÑO */}
    <motion.article
      className="effects-text-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >

      <h2>Objetivo de diseño</h2>

      <div className="effects-divider"></div>

      <p>
        Los efectos de cordura se diseñaron para representar
        visualmente el deterioro mental del protagonista a
        medida que disminuye su estabilidad. Su implementación
        se integra al componente BPC_Sanity, que selecciona
        los efectos según el valor actual de cordura mediante
        las tablas de datos DT_HighSanity, DT_MediumSanity
        y DT_LowSanity.
      </p>

    </motion.article>


    {/* DISEÑO DE LA MECÁNICA */}
    <motion.article
      className="effects-text-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
    >

      <h2>Diseño de la mecánica</h2>

      <div className="effects-divider"></div>

      <p>
        A través de la función TriggerSanityEffect(), el
        sistema consulta el nivel de cordura, selecciona un
        efecto aleatorio de la tabla correspondiente y utiliza
        la clase definida en EffectComponent para añadir el
        efecto al personaje. De esta manera, la mecánica
        permite organizar los efectos mediante datos y
        componentes independientes.
      </p>

    </motion.article>

  </div>


  
  <div className="effects-behance">

    <a
      href="https://www.behance.net/rubielrobles"
      target="_blank"
      rel="noopener noreferrer"
      className="behance-button"
    >
      Ver desarrollo completo en Behance
      <ArrowRight size={16} />
    </a>

  </div>

</section>



      </main>
    </>
  );
}

export default Proyecto1;
