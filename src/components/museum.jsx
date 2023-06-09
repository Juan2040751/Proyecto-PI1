import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { Html, OrbitControls, ScrollControls } from "@react-three/drei";
import React, { useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Slider from "react-slick";
import { ObjectOne, DescriptionOne } from "./objects/object_one";
import { ObjectTwo, DescriptionTwo } from "./objects/object_two";
import { ObjectThree, DescriptionThree } from "./objects/object_three";
import { ObjectFour, DescriptionFour } from "./objects/object_four";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./events/events.css";

/**
 * Componente Museum
 *
 * Este componente representa un museo para mostrar los objetos 3d con la ayuda de modals.
 *
 * Forma parte de la historia de usuario PI1-14: Como usuario, espero que se 
 * presenten algunos objetos de la cultura sumeria en tercera dimensión, para 
 * poder admirar el objeto en diferentes ángulos.
 */

function Museum() {
  const [obj3d, setObj3d] = useState({
    uno: false,
    dos: false,
    tres: false,
    cuatro: false,
  });

  const canvasRef = useRef();

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      canvasRef.current.requestFullscreen();
    }
  };

  var settings3d = {
    dots: true,
    arrows: true, // Habilitar las flechas
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Html fullscreen style={{ top: "200vh", padding: "2%" }}>
      <div className="titulo">
        <h1>MUSEO</h1>
      </div>
      <div
        style={{
          position: "relative",
          padding: "2%",
        }}
      >
        <Slider {...settings3d}>
          <Grid
            item
            xs={10}
            sm={4}
            md={2}
            sx={{ margin: "10px", maxWidth: "450px" }}
          >
            <Card
              sx={{
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                image="./static/sumerian_soldier.png"
                height="200"
                alt="Card Image"
              />
              <CardContent
                sx={{
                  maxHeight: "200px",
                  overflow: "hidden",
                }}
              >
                <h2>Soldado Sumerio</h2>
                <p>
                  los soldados sumerios eran parte de un ejército profesional y
                  desempeñaban un papel crucial en la protección y expansión de
                  la civilización sumeria. Su entrenamiento, armamento y
                  organización contribuyeron a la defensa y dominio militar en
                  la antigua Mesopotamia.
                </p>
              </CardContent>
              <div className="d-grid gap-2">
                <button
                  className="btn btn-outline-primary mx-2 mb-3"
                  type="button"
                  onClick={() => setObj3d({ ...obj3d, uno: true })}
                >
                  Conocer más
                </button>
              </div>
            </Card>
          </Grid>

          <Grid
            item
            xs={10}
            sm={4}
            md={2}
            sx={{ margin: "10px", maxWidth: "450px" }}
          >
            <Card
              sx={{
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                image="./static/arcilla_tablemit.png"
                height="200"
                alt="Escritura"
              />
              <CardContent
                sx={{
                  maxHeight: "200px",
                  overflow: "hidden",
                }}
              >
                <h2>Tabla de Arcilla</h2>
                <p>
                  La tabla de arcilla en cuestión es un objeto único que
                  contiene líneas de texto escritas en escritura cuneiforme. Es
                  considerado el ejemplo más antiguo de escritura encontrado en
                  la Biblioteca.
                </p>
              </CardContent>

              <div className="d-grid gap-2">
                <button
                  className="btn btn-outline-primary mx-2 mb-3"
                  type="button"
                  onClick={() => setObj3d({ ...obj3d, dos: true })}
                >
                  Conocer más
                </button>
              </div>
            </Card>
          </Grid>

          <Grid
            item
            xs={10}
            sm={4}
            md={2}
            sx={{ margin: "10px", maxWidth: "450px" }}
          >
            <Card
              sx={{
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                image="./static/standard_of_ur.PNG"
                alt="Juego Real de Ur"
              />
              <CardContent
                sx={{
                  maxHeight: "200px",
                  overflow: "hidden",
                }}
              >
                <h2>Estandarte de Ur</h2>
                <p>
                  El Estandarte de Ur es un artefacto antiguo con escenas
                  decorativas de mosaicos que representan una escena de guerra,
                  banquetes, entretenimiento y la presentación de tributos.
                </p>
              </CardContent>

              <div className="d-grid gap-2">
                <button
                  className="btn btn-outline-primary mx-2 mb-3"
                  type="button"
                  onClick={() => setObj3d({ ...obj3d, tres: true })}
                >
                  Conocer más
                </button>
              </div>
            </Card>
          </Grid>

          <Grid
            item
            xs={10}
            sm={4}
            md={2}
            sx={{ margin: "10px", maxWidth: "450px" }}
          >
            <Card
              sx={{
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                image="./static/king_list.PNG"
                height="200"
                alt="Numeros Sumerios"
              />
              <CardContent
                sx={{
                  maxHeight: "200px",
                  overflow: "hidden",
                }}
              >
                <h2>Lista Real Sumeria</h2>
                <p>
                  la Lista Real Sumeria es un importante documento que enumera a
                  los reyes de la antigua Mesopotamia y proporciona información
                  sobre la sucesión de poder y las conquistas en la región
                </p>
              </CardContent>

              <div className="d-grid gap-2">
                <button
                  className="btn btn-outline-primary mx-2 mb-3"
                  type="button"
                  onClick={() => setObj3d({ ...obj3d, cuatro: true })}
                >
                  Conocer más
                </button>
              </div>
            </Card>
          </Grid>
        </Slider>
      </div>

      <Modal
        show={obj3d.uno}
        size="xl"
        animation
        dialogClassName="modal-fullscreen"
        onHide={() =>
          setObj3d({
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
          })
        }
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <>
            <main className="app">
              <section className="hero">
                <h1>Soldado Sumerio</h1>
                <p>
                  Los soldados sumerios eran miembros del ejército en la antigua
                  civilización de Sumer, que se desarrolló en la región de
                  Mesopotamia (en lo que ahora es Irak) alrededor del cuarto
                  milenio a.C. Estos soldados jugaban un papel importante en la
                  protección y expansión del territorio sumerio. Los soldados
                  sumerios estaban organizados en unidades militares y formaban
                  parte de un ejército profesional. En general, se cree que los
                  soldados sumerios provenían de diferentes estratos sociales y
                  que el servicio militar era obligatorio para los hombres
                  capaces de luchar. Se espera que los soldados sumerios
                  tuvieran habilidades de combate y fueran entrenados en el uso
                  de diversas armas y tácticas militares. Las armas utilizadas
                  por los soldados sumerios incluían lanzas, arcos y flechas,
                  mazas y espadas. También se utilizaban escudos para protegerse
                  de los ataques enemigos.
                </p>
              </section>
            </main>
            ;
            <Canvas
              ref={canvasRef}
              className="canvas"
              shadows={true}
              camera={{ position: [0, 0, 30], fov: 15 }}
            >
              <OrbitControls />
              <ObjectOne />
            </Canvas>
            {/* 
    <button onClick={toggleFullscreen}>
        Alternar pantalla completa
      </button>
      */}
          </>

          {/* 
    <button onClick={toggleFullscreen}>
        Alternar pantalla completa
      </button>
      */}
        </Modal.Body>
      </Modal>

      <Modal
        show={obj3d.dos}
        size="xl"
        animation
        dialogClassName="modal-fullscreen"
        onHide={() =>
          setObj3d({
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
          })
        }
      >
        <Modal.Header closeButton />
        <Modal.Body>
          {
            <>
              <main className="app">
                <section className="hero">
                  <h1>Tabla de Arcilla Sumeria</h1>
                  <p>
                    Esta única tabla de arcilla está marcada con líneas de texto
                    en escritura cuneiforme y es el ejemplo más antiguo de
                    escritura en la Biblioteca. Escrita en sumerio, registra una
                    transacción que involucra jarras de grasa de cerdo por dos
                    hombres, uno llamado Balli, una persona que también aparece
                    en otras tablillas contemporáneas y que habría estado
                    involucrado en una organización administrativa hacia el
                    final de la Dinastía de Acadia. La tabla habría formado
                    parte de una colección más grande de un tipo similar en
                    Zabala y fue excavada ilegalmente a principios del siglo XX.
                    Posteriormente, estas tablillas aparecieron en el mercado de
                    antigüedades y llegaron a manos del académico y bibliógrafo
                    de Cambridge, Sir Stephen Gaselee. Es posible que adquiriera
                    la tabla durante su tiempo en el Ministerio de Relaciones
                    Exteriores de 1916 a 1919 y la donara a la Biblioteca en
                    1921. Fue traducida al año siguiente por Thomas Fish, un
                    estudiante de investigación en el Instituto de Lenguas
                    Orientales de Cambridge, quien tenía la intención de
                    incluirla en su tesis de doctorado. Sin embargo, al decidir
                    concentrarse en tablillas de una colección diferente, la
                    tabla fue olvidada, se perdió de vista y nunca fue
                    publicada. Fue redescubierta en una caja de medallas durante
                    la investigación para esta exposición. No está claro para
                    qué se habría utilizado la grasa de cerdo.
                  </p>
                </section>
              </main>
              ;
              <Canvas
                ref={canvasRef}
                className="canvas"
                shadows={true}
                camera={{ position: [-10, 15, 35], fov: 10 }}
              >
                <OrbitControls />
                <ObjectTwo />
              </Canvas>
            </>
          }
        </Modal.Body>
      </Modal>
      <Modal
        show={obj3d.tres}
        size="xl"
        animation
        dialogClassName="modal-fullscreen"
        onHide={() =>
          setObj3d({
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
          })
        }
      >
        <Modal.Header closeButton />
        <Modal.Body>
          {
            <>
              <main className="app">
                <section className="hero">
                  <h1>El Estandarte de Ur</h1>
                  <p>
                    "El Estandarte de Ur", decorado en sus cuatro lados con
                    escenas de mosaicos incrustados hechos de concha, piedra
                    caliza roja y lapislázuli, fijados con betún. Un lado
                    muestra una escena de guerra; un ejército sumerio con carros
                    de ruedas e infantería carga contra el enemigo; se presentan
                    prisioneros ante un individuo más grande, acompañado por
                    guardias y con su propio carro esperando detrás de él. El
                    reverso muestra escenas en las que hombres llevan animales,
                    peces, etc., posiblemente como botín o tributo; en la parte
                    superior, el mismo individuo grande se banquetea con otros
                    hombres; a su derecha, son entretenidos por un cantante y un
                    hombre que toca una lira. Los paneles triangulares de los
                    extremos muestran otras escenas; el objeto fue encontrado
                    aplastado, pero desde entonces ha sido restaurado y se han
                    conservado muestras.
                  </p>
                </section>
              </main>
              ;
              <Canvas
                ref={canvasRef}
                className="canvas"
                shadows={true}
                camera={{ position: [0, -5, 46], fov: 15 }}
              >
                <OrbitControls />
                <ObjectThree />
              </Canvas>
            </>
          }
        </Modal.Body>
      </Modal>
      <Modal
        show={obj3d.cuatro}
        size="xl"
        animation
        dialogClassName="modal-fullscreen"
        onHide={() =>
          setObj3d({
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
          })
        }
      >
        <Modal.Header closeButton />
        <Modal.Body>
          {
            <>
              <main className="app">
                <section className="hero">
                  <h1>Lista Real Sumeria</h1>
                  <p>
                    La Lista Real Sumeria es una lista de reyes de la antigua
                    Mesopotamia escrita en lengua sumeria grabada en escritura
                    cuneiforme, sobreviviente en varios documentos y artefactos
                    arqueológicos de los cuales el mejor conservado es un prisma
                    de barro cocido encontrado en la ciudad sumeria de Larsa en
                    1922 (Prisma de Weld-Blundell). Su datación corresponde a
                    finales de la dinastía de Isin (c. 1817 a. C.). Su ejemplar
                    más tardío es la transcripción de la lista en la "Historia
                    Babilónica" de Beroso (s. III a. C.) <br />
                    <br />
                    La lista divide a los reyes en antediluvianos (con reinados
                    de inverosímil longevidad) considerados míticos por los
                    historiadores, y pos-diluvianos. El primer rey mencionado
                    cuya existencia es reflejada en documentos fuera de la lista
                    es Mebaragesi de Kish, contemporáneo de Gilgamesh. El primer
                    gobernante de la lista que es claramente histórico es
                    Lugalzagesi de Umma del siglo XXIV a. C., quien conquistara
                    Lagash, que a su vez fue conquistada por Sargón de Acadia.
                  </p>
                </section>
              </main>
              ;
              <Canvas
                ref={canvasRef}
                className="canvas"
                shadows={true}
                camera={{ position: [0, 0, 40], fov: 30 }}
              >
                <OrbitControls
                  minPolarAngle={Math.PI / 4} // Establece el ángulo polar mínimo (altura mínima)
                  maxPolarAngle={Math.PI / 2}
                />
                <ObjectFour />
              </Canvas>
            </>
          }
        </Modal.Body>
      </Modal>
    </Html>
  );
}

export default Museum;
