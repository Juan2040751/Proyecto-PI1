import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { Html } from "@react-three/drei";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Slider from "react-slick";
import EventFour from "./events/event_four";
import EventOne from "./events/event_one";
import EventThree from "./events/event_three";
import EventTwo from "./events/event_two";
import "./events/events.css";

/**
 * Componente Featured
 *
 * Este componente muestra los eventos destacados de la civilización sumeria, incluyendo descubrimientos,
 * impactos y legados culturales relevantes. Forma parte de la historia de usuario PI1-11.
 */
function Featured({ reference }) {
  const [events, setEvents] = useState({
    uno: false,
    dos: false,
    tres: false,
    cuatro: false,
  });

  var settings = {
    dots: true,
    arrows: true, // Habilitar las flechas
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
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
          infinite: false,
          dots: true,
          arrows: true,
        },
      }
    ],
  };

  return (
    <Html fullscreen style={{ top: "100vh", padding: "2%" }}>
      <div className="titulo" ref={reference} id="Destacado">
        <h1>EVENTOS HISTORICOS</h1>
      </div>

      <div
        style={{
          position: "relative",
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
                loading="lazy"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Early_Dynastic-es.svg/220px-Early_Dynastic-es.svg.png"
                height="200"
                alt="Card Image"
              />
              <CardContent
                sx={{
                  height: "370px",
                  overflow: "hidden",
                }}
              >
                <h2>Ciudades Sumerias</h2>
                <p>
                  Sobre el cuarto milenio a.C. se produjo la aparición de las
                  primeras ciudades de la Historia. Las ciudades comenzaron a
                  ser el centro de actividad principal y sus habitantes
                  comenzaron una intensa especialización en el trabajo, de forma
                  que cada persona únicamente sabía realizar una actividad.
                </p>
              </CardContent>
              <div className="d-grid gap-2" style={{ marginTop: "10px" }}>
                <button
                  className="btn btn-outline-primary mx-2 mb-3"
                  type="button"
                  onClick={() => setEvents({ ...events, uno: true })}
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
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Clay_cone_Telloh_Louvre_AO13239.jpg/399px-Clay_cone_Telloh_Louvre_AO13239.jpg"
                height="200"
                alt="Escritura"
              />
              <CardContent
                sx={{
                  height: "370px",
                  overflow: "hidden",
                }}
              >
                <h2>La Escritura Cuneiforme</h2>
                <p>
                  Sobre el año 3300 a.C. Los Sumerios inventaron un sistema de
                  escritura que consistía en la utilización de unas cuñas que
                  permitían grabar signos sobre unas tablillas de arcilla blanda
                  las cuales después se endurecen en un horno.
                </p>
              </CardContent>

              <div className="d-grid gap-2" style={{ marginTop: "10px" }}>
                <button
                  className="btn btn-outline-primary mx-2 mb-3"
                  type="button"
                  onClick={() => setEvents({ ...events, dos: true })}
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
                image="https://consolaytablero.com/wp-content/uploads/2016/04/juego-real-de-ur.jpg"
                height="200"
                alt="Juego Real de Ur"
              />
              <CardContent
                sx={{
                  height: "370px",
                  overflow: "hidden",
                }}
              >
                <h2>Juego Real de Ur</h2>
                <p>
                  En la década de 1920, se descubrió una serie de tumbas en las
                  ruinas de la antigua ciudad sumeria de Ur, en el actual Irak.
                  Las sepulturas más ornamentadas del hallazgo, que pasarían a
                  conocerse como las Tumbas Reales de Ur, contenían toda clase
                  de joyas, vestimenta, armas, cuerpos de sirvientes… y hasta un
                  juego de mesa.
                </p>
              </CardContent>

              <div className="d-grid gap-2" style={{ marginTop: "10px" }}>
                <button
                  className="btn btn-outline-primary mx-2 mb-3"
                  type="button"
                  onClick={() => setEvents({ ...events, tres: true })}
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
                image="https://ulum.es/wp-content/uploads/2014/10/sumerios.png"
                height="200"
                alt="Numeros Sumerios"
              />
              <CardContent
                sx={{
                  height: "370px",
                  overflow: "hidden",
                }}
              >
                <h2>Sistema Numerico</h2>
                <p>
                  Uruk fue una antigua ciudad sumeria. Se encontraba en la
                  orilla del río Éufrates. Una de sus características más
                  llamativas era su muralla, que rodeaba una zona de unos siete
                  kilómetros cuadrados donde vivían ochenta mil personas. Es
                  decir, era la mayor ciudad que el mundo había conocido hasta
                  entonces.
                </p>
              </CardContent>

              <div className="d-grid gap-2" style={{ marginTop: "10px" }}>
                <button
                  className="btn btn-outline-primary mx-2 mb-3"
                  type="button"
                  onClick={() => setEvents({ ...events, cuatro: true })}
                >
                  Conocer más
                </button>
              </div>
            </Card>
          </Grid>
        </Slider>
      </div>

      <Modal
        show={events.uno}
        size="xl"
        animation
        onHide={() =>
          setEvents({
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
          })
        }
      >
        <Modal.Header closeButton>
          <h6 style={{ marginRight: "10px" }}>Destacado /</h6>
          <h1>Ciudades Sumerias</h1>
        </Modal.Header>
        <Modal.Body>{<EventOne />}</Modal.Body>
      </Modal>
      <Modal
        show={events.dos}
        size="xl"
        animation
        onHide={() =>
          setEvents({
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
          })
        }
      >
        <Modal.Header closeButton>
          <h6 style={{ marginRight: "10px" }}>Destacado /</h6>
          <h1>La Escritura Cuneiforme</h1>
        </Modal.Header>
        <Modal.Body>{<EventTwo />}</Modal.Body>
      </Modal>
      <Modal
        show={events.tres}
        size="xl"
        animation
        onHide={() =>
          setEvents({
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
          })
        }
      >
        <Modal.Header closeButton>
          <h6 style={{ marginRight: "10px" }}>Destacado /</h6>
          <h1>Juego Real de Ur</h1>
        </Modal.Header>
        <Modal.Body>{<EventThree />}</Modal.Body>
      </Modal>
      <Modal
        show={events.cuatro}
        size="xl"
        animation
        onHide={() =>
          setEvents({
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
          })
        }
      >
        <Modal.Header closeButton>
          <h6 style={{ marginRight: "10px" }}>Destacado /</h6>
          <h1>Sistema Númerico</h1>
        </Modal.Header>
        <Modal.Body>{<EventFour />}</Modal.Body>
      </Modal>
    </Html>
  );
}

export default Featured;
