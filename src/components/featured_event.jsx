import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { Html } from "@react-three/drei";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Slider from "react-slick";
import EventFour from "./events/event_four";
import EventOne from "./events/event_one";
import EventThree from "./events/event_three";
import EventTwo from "./events/event_two";
import EventFive from "./events/event_five";
import EventSix from "./events/event_six";
import Characters from "./events/characters";
import "./events/events.css";
import { SampleNextArrow, SamplePrevArrow } from "./objects/arqui_general";
/**
 * Componente Featured
 *
 * Este componente muestra los eventos destacados de la civilización sumeria, incluyendo descubrimientos,
 * impactos y legados culturales relevantes. Forma parte de la historia de usuario PI1-11 y PI1-26.
 */
function Featured({ reference, lastCard, setSession, session }) {
  const [events, setEvents] = useState({
    uno: false,
    dos: false,
    tres: false,
    cuatro: false,
    cinco: false,
    seis: false,
    siete: false,
  });
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
          arrows: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
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
                  onClick={() => {
                    setEvents({ ...events, uno: true });
                    setSession({
                      ...session,
                      Destacado: 0,
                      lastPage: "Destacado",
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
                  onClick={() => {
                    setEvents({ ...events, dos: true });
                    setSession({
                      ...session,
                      Destacado: 1,
                      lastPage: "Destacado",
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
                  onClick={() => {
                    setEvents({ ...events, tres: true });
                    setSession({
                      ...session,
                      Destacado: 2,
                      lastPage: "Destacado",
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
                image="https://numerentur.org/wp-content/uploads/2017/06/Sumerio.tablamultiplicar.png"
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
                  onClick={() => {
                    setEvents({ ...events, cuatro: true });
                    setSession({
                      ...session,
                      Destacado: 3,
                      lastPage: "Destacado",
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
                image="https://cdn0.unprofesor.com/es/posts/0/8/5/historia_de_la_invencion_de_la_rueda_resumen_corto_2580_600.jpg"
                height="200"
                alt="Legado Tecnologico"
              />
              <CardContent
                sx={{
                  height: "370px",
                  overflow: "hidden",
                }}
              >
                <h2>El Legado Tecnologico</h2>
                <p>
                  El legado tecnológico de la civilización sumeria es
                  impresionante considerando la época en la que vivieron un
                  valioso legado tecnológico que ha influido en el desarrollo de
                  la humanidad. Uno de sus mayores logros fue la invención de la
                  rueda, revolucionando el transporte y la construcción de
                  carros
                </p>
              </CardContent>

              <div className="d-grid gap-2" style={{ marginTop: "10px" }}>
                <button
                  className="btn btn-outline-primary mx-2 mb-3"
                  type="button"
                  onClick={() => {
                    setEvents({ ...events, cinco: true });
                    setSession({
                      ...session,
                      Destacado: 4,
                      lastPage: "Destacado",
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
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Obverse._Gilgamesh_and_Aga._Old_Babylonian_period%2C_from_southern_Iraq._Sulaymaniyah_Museum%2C_Iraqi_Kurdistan.jpg/1200px-Obverse._Gilgamesh_and_Aga._Old_Babylonian_period%2C_from_southern_Iraq._Sulaymaniyah_Museum%2C_Iraqi_Kurdistan.jpg"
                height="200"
                alt="Legado Tecnologico"
              />
              <CardContent
                sx={{
                  height: "370px",
                  overflow: "hidden",
                }}
              >
                <h2>La Literatura Sumeria </h2>
                <p>
                  La literatura sumeria es uno de los aspectos más destacados de
                  su legado cultural. Sus escritos, grabados en tablillas de
                  arcilla, abarcan una variedad de géneros y temas. Entre las
                  obras más conocidas se encuentran los himnos y poemas épicos,
                  como el famoso "Enuma Elish", que relata el origen del
                  universo y la creación del mundo según la mitología sumeria.
                </p>
              </CardContent>

              <div className="d-grid gap-2" style={{ marginTop: "10px" }}>
                <button
                  className="btn btn-outline-primary mx-2 mb-3"
                  type="button"
                  onClick={() => {
                    setEvents({ ...events, seis: true });
                    setSession({
                      ...session,
                      Destacado: 5,
                      lastPage: "Destacado",
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
                image="https://www.ancient-origins.es/sites/default/files/field/image/Portada-dioses-sumerios.jpg"
                height="200"
                alt="Card Image"
              />
              <CardContent
                sx={{
                  height: "370px",
                  overflow: "hidden",
                }}
              >
                <h2>Personajes Importantes</h2>
                <p>
                  Sumérgete en las legendarias historias de Gilgamesh, el
                  valiente rey de Uruk, y su búsqueda de la inmortalidad.
                  Descubre la astucia de Enmerkar, el audaz rey de Uruk, en su
                  duelo con el señor de Aratta. Acompaña a Enheduanna, la
                  poderosa sacerdotisa, en su conexión divina con la diosa
                  Inanna. Explora el ascenso de Sargón de Acad y su imperio que
                  cambió la historia. Adéntrate en el fascinante mundo de la
                  antigua Sumeria, donde héroes y dioses forjaron un legado
                  eterno.
                </p>
              </CardContent>
              <div className="d-grid gap-2" style={{ marginTop: "10px" }}>
                <button
                  className="btn btn-outline-primary mx-2 mb-3"
                  type="button"
                  onClick={() => {setEvents({ ...events, siete: true })
                  setSession({
                    ...session,
                    Destacado: 6,
                    lastPage: "Destacado",
                  });}}
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
            cinco: false,
            seis: false,
            siete: false,
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
            cinco: false,
            seis: false,
            siete: false,
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
            cinco: false,
            seis: false,
            siete: false,
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
            cinco: false,
            seis: false,
            siete: false,
          })
        }
      >
        <Modal.Header closeButton>
          <h6 style={{ marginRight: "10px" }}>Destacado /</h6>
          <h1>Sistema Numerico</h1>
        </Modal.Header>
        <Modal.Body>{<EventFour />}</Modal.Body>
      </Modal>
      <Modal
        show={events.cinco}
        size="xl"
        animation
        onHide={() =>
          setEvents({
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
            cinco: false,
            seis: false,
            siete: false,
          })
        }
      >
        <Modal.Header closeButton>
          <h6 style={{ marginRight: "10px" }}>Destacado /</h6>
          <h1>Legado Tecnologico Sumerio</h1>
        </Modal.Header>
        <Modal.Body>{<EventFive />}</Modal.Body>
      </Modal>
      <Modal
        show={events.seis}
        size="xl"
        animation
        onHide={() =>
          setEvents({
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
            cinco: false,
            seis: false,
            siete: false,
          })
        }
      >
        <Modal.Header closeButton>
          <h6 style={{ marginRight: "10px" }}>Destacado /</h6>
          <h1>La literatura sumeria</h1>
        </Modal.Header>
        <Modal.Body>{<EventSix />}</Modal.Body>
      </Modal>

      <Modal
        show={events.siete}
        size="xl"
        animation
        onHide={() =>
          setEvents({
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
            cinco: false,
            seis: false,
            siete: false,
          })
        }
      >
        <Modal.Header closeButton>
          <h6 style={{ marginRight: "10px" }}>Destacado /</h6>
          <h1>Personajes Importantes</h1>
        </Modal.Header>
        <Modal.Body >{<Characters />}</Modal.Body>
      </Modal>
    </Html>
  );
}

export default Featured;
