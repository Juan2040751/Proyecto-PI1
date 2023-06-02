import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { Html } from "@react-three/drei";
import { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import EventFour from "./events/event_four";
import EventOne from "./events/event_one";
import EventThree from "./events/event_three";
import EventTwo from "./events/event_two";
import ObjectOne from "./objects/object_one"
import ObjectTwo from "./objects/object_two"
import ObjectThree from "./objects/object_three"
import ObjectFour from "./objects/object_four"
import "./events/events.css";
import { Height } from "@mui/icons-material";

function Featured() {
  const [events, setEvents] = useState({
    uno: false,
    dos: false,
    tres: false,
    cuatro: false,
  });

  const [obj3d, setObj3d] = useState({
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
    <Html fullscreen style={{ top: "100vh", padding: "2%" }}>
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
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Early_Dynastic-es.svg/220px-Early_Dynastic-es.svg.png"
                height="200"
                alt="Card Image"
              />
              <CardContent
              sx={{
                maxHeight: "200px",
                overflow: "hidden",
              }}
              >
                <h2>Nombre del objeto</h2>
                <p>breve descripcion</p>
              </CardContent>
              <div class="d-grid gap-2">
                <button
                  class="btn btn-outline-primary mx-2 mb-3"
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
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Clay_cone_Telloh_Louvre_AO13239.jpg/399px-Clay_cone_Telloh_Louvre_AO13239.jpg"
                height="200"
                alt="Escritura"
              />
              <CardContent
              sx={{
                maxHeight: "200px",
                overflow: "hidden",
              }}
              >
                <h2>Object 2</h2>
                <p>
                  desc object 2
                </p>
              </CardContent>

              <div class="d-grid gap-2">
                <button
                  class="btn btn-outline-primary mx-2 mb-3"
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
                image="https://consolaytablero.com/wp-content/uploads/2016/04/juego-real-de-ur.jpg"
                height="200"
                alt="Juego Real de Ur"
              />
              <CardContent
              sx={{
                maxHeight: "200px",
                overflow: "hidden",
              }}
              >
                <h2>object 3</h2>
                <p>
                  desc object 3
                </p>
              </CardContent>

              <div class="d-grid gap-2">
                <button
                  class="btn btn-outline-primary mx-2 mb-3"
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
                image="https://ulum.es/wp-content/uploads/2014/10/sumerios.png"
                height="200"
                alt="Numeros Sumerios"
              />
              <CardContent
              sx={{
                maxHeight: "200px",
                overflow: "hidden",
              }}
              >
                <h2>object 4</h2>
                <p>
                  desct pbject 4
                </p>
              </CardContent>

              <div class="d-grid gap-2">
                <button
                  class="btn btn-outline-primary mx-2 mb-3"
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
        <Modal.Body>{<ObjectOne />}</Modal.Body>
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
        <Modal.Header closeButton />
        <Modal.Body>{<ObjectTwo />}</Modal.Body>
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
        <Modal.Header closeButton />
        <Modal.Body>{<ObjectThree />}</Modal.Body>
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
        <Modal.Header closeButton />
        <Modal.Body>{<ObjectFour />}</Modal.Body>
      </Modal>



      <div className="titulo">
        <h1>EVENTOS HISTORICOS</h1>
      </div>

      <div
        style={{
          position: "relative",
          padding: "2%",
        }}
      >
        <Slider {...settings}>
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
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Early_Dynastic-es.svg/220px-Early_Dynastic-es.svg.png"
                height="200"
                alt="Card Image"
              />
              <CardContent
                sx=
                {{
                  maxHeight: "350px",
                  overflow: "hidden",
                }}
                >
                <h2>Ciudades Sumerias</h2>
                <p>
                  Sobre el cuarto milenio a.C. se produjo en la Antigua
                  Mesopotamia el tránsito de los asentamientos neolíticos a la
                  aparición de las primeras ciudades de la Historia. Las
                  ciudades comenzaron a ser el centro de actividad principal y
                  sus habitantes comenzaron una intensa especialización en el
                  trabajo, de forma que cada persona únicamente sabía realizar
                  una actividad.
                </p>
              </CardContent>
              <div class="d-grid gap-2">
                <button
                  class="btn btn-outline-primary mx-2 mb-3"
                  type="button"
                  onClick={() => setEvents({ ...events, uno: true })}
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
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Clay_cone_Telloh_Louvre_AO13239.jpg/399px-Clay_cone_Telloh_Louvre_AO13239.jpg"
                height="200"
                alt="Escritura"
              />
              <CardContent
              sx=
              {{
                maxHeight: "350px",
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

              <div class="d-grid gap-2">
                <button
                  class="btn btn-outline-primary mx-2 mb-3"
                  type="button"
                  onClick={() => setEvents({ ...events, dos: true })}
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
                image="https://consolaytablero.com/wp-content/uploads/2016/04/juego-real-de-ur.jpg"
                height="200"
                alt="Juego Real de Ur"
              />
              <CardContent
              sx={{
                maxHeight: "350px",
                overflow: "hidden",
              }}
              >
                <h2>Juego Real de Ur</h2>
                <p>
                  En la década de 1920, el arqueólogo británico Leonard Woolley
                  descubrió una serie de tumbas en las ruinas de la antigua
                  ciudad sumeria de Ur, en el actual Irak. Las sepulturas más
                  ornamentadas del hallazgo, que pasarían a conocerse como las
                  Tumbas Reales de Ur, contenían toda clase de joyas,
                  vestimenta, armas, cuerpos de sirvientes… y hasta un juego de
                  mesa.
                </p>
              </CardContent>

              <div class="d-grid gap-2">
                <button
                  class="btn btn-outline-primary mx-2 mb-3"
                  type="button"
                  onClick={() => setEvents({ ...events, tres: true })}
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
                image="https://ulum.es/wp-content/uploads/2014/10/sumerios.png"
                height="200"
                alt="Numeros Sumerios"
              />
              <CardContent
              sx={{
                maxHeight: "350px",
                overflow: "hidden",
              }}
              >
                <h2>Sistema Numerico</h2>
                <p>
                  Uruk fue una antigua ciudad sumeria. Se encontraba en la
                  orilla del río Éufrates y vivió su máximo esplendor en el
                  tercer milenio antes de Cristo. Una de sus características más
                  llamativas era su muralla, que rodeaba una zona de unos siete
                  kilómetros cuadrados donde vivían ochenta mil personas. Es
                  decir, era la mayor ciudad que el mundo había conocido hasta
                  entonces.
                </p>
              </CardContent>

              <div class="d-grid gap-2">
                <button
                  class="btn btn-outline-primary mx-2 mb-3"
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
        <Modal.Header closeButton />
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
        <Modal.Header closeButton />
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
        <Modal.Header closeButton />
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
        <Modal.Header closeButton />
        <Modal.Body>{<EventFour />}</Modal.Body>
      </Modal>
    </Html>
  );
}

export default Featured;
