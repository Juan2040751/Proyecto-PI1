import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Slider from "react-slick";
import Animation from "./animation";
import "./events/events.css";
import { SampleNextArrow, SamplePrevArrow } from "./objects/arqui_general";
import { ObjectFour } from "./objects/object_four";
import { ObjectOne } from "./objects/object_one";
import { ObjectThree } from "./objects/object_three";
import { ObjectTwo } from "./objects/object_two";

/**
 * Componente Museum
 *
 * Este archivo representa el componente del museo que muestra objetos en tercera dimensión de la cultura sumeria.
 * Cumple con los requisitos de la Historia de Usuario PI1-14,
 * donde se espera que se presenten algunos objetos de la cultura sumeria en tercera dimensión
 * para que el usuario pueda admirar el objeto en diferentes ángulos.
 * @param {object} reference - Referencia al elemento HTML.
 * @returns {JSX.Element} - Elemento JSX que representa el componente del museo.
 */

function Museum({ reference, lastCard, setSession, session }) {
  const [obj3d, setObj3d] = useState({
    uno: false,
    dos: false,
    tres: false,
    cuatro: false,
  });

  const canvasRef = useRef();
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: lastCard ? lastCard : 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
          arrows: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };

  return (
    <Html fullscreen style={{ top: "300vh", padding: "2%", height: "100vh", overflowY: "auto" }}>
      <div className="titulo" ref={reference} id="Museo">
        <h1>MUSEO</h1>
      </div>
      <div
        style={{
          position: "relative",
          padding: "0 3% 0 2%",
        }}
      >
        <Slider {...settings}>
          <Grid item xs={10} sm={4} md={2}>
            <Card
              sx={{
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                margin: "5px",
              }}
            >
              <CardMedia
                component="img"
                image="./static/sumerian_soldier.png"
                height="200"
                alt="Card Image"
                loading="lazy"
              />
              <CardContent
                sx={{
                  height: "350px",
                  overflow: "auto",
                }}
              >
                <h2>Soldado Sumerio</h2>
                <p>
                  Los soldados sumerios eran parte de un ejército profesional y
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
                  onClick={() => {
                    setObj3d({ ...obj3d, uno: true });
                    setSession({
                      ...session,
                      Museo: 0,
                      lastPage: "Museo",
                    });
                  }}
                >
                  Conocer más
                </button>
              </div>
            </Card>
          </Grid>

          <Grid item xs={10} sm={4} md={2}>
            <Card
              sx={{
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                margin: "5px",
              }}
            >
              <CardMedia
                component="img"
                image="./static/arcilla_tablemit.PNG"
                height="200"
                alt="Escritura"
                loading="lazy"
              />
              <CardContent
                sx={{
                  height: "350px",
                  overflow: "auto",
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
                  onClick={() => {
                    setObj3d({ ...obj3d, dos: true });
                    setSession({
                      ...session,
                      Museo: 1,
                      lastPage: "Museo",
                    });
                  }}
                >
                  Conocer más
                </button>
              </div>
            </Card>
          </Grid>

          <Grid item xs={10} sm={4} md={2}>
            <Card
              sx={{
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                margin: "5px",
              }}
            >
              <CardMedia
                component="img"
                loading="lazy"
                image="./static/standard_of_ur.PNG"
                height="200"
                alt="Juego Real de Ur"
              />
              <CardContent
                sx={{
                  height: "350px",
                  overflow: "auto",
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
                  onClick={() => {
                    setObj3d({ ...obj3d, tres: true });
                    setSession({
                      ...session,
                      Museo: 2,
                      lastPage: "Museo",
                    });
                  }}
                >
                  Conocer más
                </button>
              </div>
            </Card>
          </Grid>

          <Grid item xs={10} sm={4} md={2}>
            <Card
              sx={{
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                margin: "5px",
              }}
            >
              <CardMedia
                component="img"
                image="./static/king_list.PNG"
                height="200"
                alt="Numeros Sumerios"
                loading="lazy"
              />
              <CardContent
                sx={{
                  height: "350px",
                  overflow: "auto",
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
                  onClick={() => {
                    setObj3d({ ...obj3d, cuatro: true });
                    setSession({
                      ...session,
                      Museo: 3,
                      lastPage: "Museo",
                    });
                  }}
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
        onHide={() =>
          setObj3d({
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
          })
        }
      >
        <Modal.Header closeButton>
          <h6 style={{ marginRight: "10px" }}>Museo /</h6>
          <h1> Soldado Sumerio</h1>
        </Modal.Header>
        <Modal.Body>
          <div className="objetos">
            <main className="objetos-main">
              <section className="hero">
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

            <div className="objetos-main">
              <Suspense fallback={<Animation />}>
                <Canvas
                  ref={canvasRef}
                  shadows={true}
                  camera={{ position: [0, 0, 20], fov: 15 }}
                >
                  <OrbitControls />
                  <ObjectOne />
                </Canvas>
              </Suspense>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={obj3d.dos}
        size="xl"
        animation
        onHide={() =>
          setObj3d({
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
          })
        }
      >
        <Modal.Header closeButton>
          <h6 style={{ marginRight: "10px" }}>Museo /</h6>
          <h1>Tabla de Arcilla Sumeria</h1>
        </Modal.Header>
        <Modal.Body>
          <div className="objetos">
            <main className="objetos-main">
              <section className="hero">
                <p>
                  Esta única tabla de arcilla está marcada con líneas de texto
                  en escritura cuneiforme y es el ejemplo más antiguo de
                  escritura en la Biblioteca. Escrita en sumerio, registra una
                  transacción que involucra jarras de grasa de cerdo por dos
                  hombres, uno llamado Balli, una persona que también aparece en
                  otras tablillas contemporáneas y que habría estado involucrado
                  en una organización administrativa hacia el final de la
                  Dinastía de Acadia. La tabla habría formado parte de una
                  colección más grande de un tipo similar en Zabala y fue
                  excavada ilegalmente a principios del siglo XX.
                  Posteriormente, estas tablillas aparecieron en el mercado de
                  antigüedades y llegaron a manos del académico y bibliógrafo de
                  Cambridge, Sir Stephen Gaselee. Es posible que adquiriera la
                  tabla durante su tiempo en el Ministerio de Relaciones
                  Exteriores de 1916 a 1919 y la donara a la Biblioteca en 1921.
                  Fue traducida al año siguiente por Thomas Fish, un estudiante
                  de investigación en el Instituto de Lenguas Orientales de
                  Cambridge, quien tenía la intención de incluirla en su tesis
                  de doctorado. Sin embargo, al decidir concentrarse en
                  tablillas de una colección diferente, la tabla fue olvidada,
                  se perdió de vista y nunca fue publicada. Fue redescubierta en
                  una caja de medallas durante la investigación para esta
                  exposición. No está claro para qué se habría utilizado la
                  grasa de cerdo.
                </p>
              </section>
            </main>
            ;
            <div className="objetos-main">
              <Suspense fallback={<Animation />}>
                <Canvas
                  ref={canvasRef}
                  shadows={true}
                  camera={{ position: [0, 0, 20], fov: 15 }}
                >
                  <OrbitControls />
                  <ObjectTwo />
                </Canvas>
              </Suspense>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={obj3d.tres}
        size="xl"
        animation
        onHide={() =>
          setObj3d({
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
          })
        }
      >
        <Modal.Header closeButton>
          <h6 style={{ marginRight: "10px" }}>Museo /</h6>
          <h1>El Estandarte de Ur</h1>
        </Modal.Header>
        <Modal.Body>
          <div className="objetos">
            <main className="objetos-main">
              <section className="hero">
                <p>
                  "El Estandarte de Ur", decorado en sus cuatro lados con
                  escenas de mosaicos incrustados hechos de concha, piedra
                  caliza roja y lapislázuli, fijados con betún. Un lado muestra
                  una escena de guerra; un ejército sumerio con carros de ruedas
                  e infantería carga contra el enemigo; se presentan prisioneros
                  ante un individuo más grande, acompañado por guardias y con su
                  propio carro esperando detrás de él. El reverso muestra
                  escenas en las que hombres llevan animales, peces, etc.,
                  posiblemente como botín o tributo; en la parte superior, el
                  mismo individuo grande se banquetea con otros hombres; a su
                  derecha, son entretenidos por un cantante y un hombre que toca
                  una lira. Los paneles triangulares de los extremos muestran
                  otras escenas; el objeto fue encontrado aplastado, pero desde
                  entonces ha sido restaurado y se han conservado muestras.
                </p>
              </section>
            </main>
            ;
            <div className="objetos-main">
              <Suspense fallback={<Animation />}>
                <Canvas
                  ref={canvasRef}
                  shadows={true}
                  camera={{ position: [0, 0, 20], fov: 15 }}
                >
                  <OrbitControls />
                  <ObjectThree />
                </Canvas>
              </Suspense>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={obj3d.cuatro}
        size="xl"
        animation
        onHide={() =>
          setObj3d({
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
          })
        }
      >
        <Modal.Header closeButton>
          <h6 style={{ marginRight: "10px" }}>Museo /</h6>
          <h1>Lista Real Sumeria</h1>
        </Modal.Header>
        <Modal.Body>
          <div className="objetos">
            <main className="objetos-main">
              <section className="hero">
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
                  La lista divide a los reyes en antediluvianos (con reinados de
                  inverosímil longevidad) considerados míticos por los
                  historiadores, y pos-diluvianos. El primer rey mencionado cuya
                  existencia es reflejada en documentos fuera de la lista es
                  Mebaragesi de Kish, contemporáneo de Gilgamesh. El primer
                  gobernante de la lista que es claramente histórico es
                  Lugalzagesi de Umma del siglo XXIV a. C., quien conquistara
                  Lagash, que a su vez fue conquistada por Sargón de Acadia.
                </p>
              </section>
            </main>
            ;
            <div className="objetos-main">
              <Suspense fallback={<Animation />}>
                <Canvas
                  ref={canvasRef}
                  shadows={true}
                  camera={{ position: [0, 0, 20], fov: 15 }}
                >
                  <OrbitControls />
                  <ObjectFour />
                </Canvas>
              </Suspense>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Html>
  );
}

export default Museum;
