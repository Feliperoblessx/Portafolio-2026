
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  PackageSearch,
  ArrowRight
} from "lucide-react";

import Navbar from "../components/Navbar";
import "./proyecto1.css";
import "./proyecto2.css";

// =================================
// IMÁGENES DEL CARRUSEL
// =================================

// Cuando tengas las imágenes, agrega sus nombres aquí.
// Se buscarán en: public/images/projects/tidy-up/gallery/

const galleryImages = [
  // {
  //   src: "tidy-01.webp",
  //   alt: "Vista del primer nivel de Tidy Up"
  // },
  // {
  //   src: "tidy-02.webp",
  //   alt: "Exploración de la habitación"
  // },
  // {
  //   src: "tidy-03.webp",
  //   alt: "Interacción con los juguetes"
  // },
  // {
  //   src: "tidy-04.webp",
  //   alt: "Sistema de búsqueda de juguetes"
  // },
];

function Proyecto2() {

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

      <main className="ashes-page tidy-project-page">

        {/* =================================
            PRESENTACIÓN DEL PROYECTO
        ================================= */}

        <section className="ashes-hero">

          {/* INFORMACIÓN DEL PROYECTO */}
          <motion.div
            className="ashes-intro tidy-intro"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* LOGO TIDY UP */}
            <div className="tidy-project-logo">
              <img
                src={`${import.meta.env.BASE_URL}images/tidy-up.png`}
                alt="Logo de Tidy Up!"
              />
            </div>

            <p>
              Tidy Up! es un juego de realidad virtual para
              celulares Android, utilizando un visor Google
              Cardboard. El jugador aparece en el pasillo de
              una casa donde conoce al pequeño Timy, un
              pingüino que necesita ayuda para ordenar su
              cuarto. Para ayudarlo debe explorar su cuarto,
              encontrar los juguetes desordenados y guardarlos
              en el cajón de juguetes.
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
                    disabled={galleryImages.length === 0}
                  >
                    <ChevronLeft />
                  </button>


                  {/* IMAGEN ACTUAL */}
                  <div className="carousel-image-container">

                    {galleryImages.length > 0 ? (

                      <AnimatePresence mode="wait">

                        <motion.img
                          key={currentImage}
                          src={
                            `${import.meta.env.BASE_URL}images/projects/tidy-up/gallery/` +
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

                    ) : (

                      <p className="tidy-gallery-placeholder">
      
                      </p>

                    )}

                  </div>


                  {/* BOTÓN SIGUIENTE */}
                  <button
                    className="carousel-arrow next"
                    onClick={nextImage}
                    aria-label="Imagen siguiente"
                    disabled={galleryImages.length === 0}
                  >
                    <ChevronRight />
                  </button>

                </div>


                {/* INDICADORES */}
                {galleryImages.length > 0 && (

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

                )}

              </div>

            </div>

          </motion.div>

        </section>


        {/* =================================
            DOCUMENTACIÓN DE LA MECÁNICA
        ================================= */}

        <section className="sanity-details tidy-details">

          {/* TARJETA PRINCIPAL: SISTEMA DE BÚSQUEDA */}
          <motion.article
            className="sanity-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >

            <div className="sanity-info">

              <div className="sanity-heading">
                <PackageSearch size={30} />
                <h2>Sistema de búsqueda</h2>
              </div>

              <div className="sanity-divider"></div>

              <p>
                La mecánica principal del juego es buscar y
                encontrar los juguetes desordenados en la
                habitación. El jugador se mueve por el espacio,
                agarra los juguetes y los guarda en el cajón
                de juguetes de Timy. Al guardarlos todos,
                completa la misión.
              </p>

            </div>


            {/* IMAGEN DE LA MECÁNICA */}
            <div className="sanity-image-container">

              {/* 
                Agrega aquí la imagen de la mecánica.
                Ejemplo:
                <img
                  src={`${import.meta.env.BASE_URL}images/tidy-search.png`}
                  alt="Sistema de búsqueda de Tidy Up"
                />
              */}

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
                La búsqueda de juguetes es la mecánica central
                del juego: un objetivo simple y claro que motiva
                al jugador a explorar la habitación. Convierte
                el acto de ordenar en una misión con progreso
                visible, pensada para quienes juegan por primera
                vez en realidad virtual.
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
                Cada nivel pide una cantidad de juguetes:
                3 en el tutorial y 6 en el nivel 1. El jugador
                los encuentra dispersos por la habitación,
                los agarra con el mando y los lleva al cajón.
                Solo puede cargar un juguete a la vez: si agarra
                otro, el anterior vuelve a su lugar original.
                Un contador "Juguetes X/Y" muestra cuántos faltan,
                y al completarlos debe hablar de nuevo con Timy
                para terminar el nivel.
              </p>

            </motion.article>

          </div>


          {/* BOTÓN A BEHANCE */}
          <div className="sanity-behance">

            <a
              href="https://www.behance.net/gallery/258298391/Tidy-Up-Juego-en-Realidad-Aumentada-2026"
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

export default Proyecto2;
