import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from "@mui/material";
import { Html } from "@react-three/drei";
import * as React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Slider from "react-slick";
import "./events/events.css";
import { auto } from "@popperjs/core";

function Featured() {
  const navigate = useNavigate();
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
        <h1>EVENTOS HISTORICOS</h1>
      </div>

      <div
        style={{
          position: "relative",
          padding: "2%",
        }}
      >
        <Slider {...settings}>
          <Grid item xs={10} sm={4} md={2} sx={{ margin: "10px" }}>
            <Card
              sx={{
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Early_Dynastic-es.svg/220px-Early_Dynastic-es.svg.png"
                  height="200"
                  alt="Card Image"
                />
                <CardContent>
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
              </CardActionArea>

              <CardActions>
                <Button
                  variant="contained"
                  onClick={() => navigate("/event_one")}
                >
                  Conocer más
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={10} sm={4} md={2}  sx={{ margin: "10px" }}>
            <Card
              sx={{
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Clay_cone_Telloh_Louvre_AO13239.jpg/399px-Clay_cone_Telloh_Louvre_AO13239.jpg"
                  height="200"
                  alt="Escritura"
                />
                <CardContent>
                  <h2>La Escritura Cuneiforme</h2>
                  <p>
                    Sobre el año 3300 a.C. Los Sumerios inventaron un sistema de
                    escritura que consistía en la utilización de unas cuñas que
                    permitían grabar signos sobre unas tablillas de arcilla
                    blanda las cuales después se endurecen en un horno.
                  </p>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button
                  variant="contained"
                  onClick={() => navigate("/event_two")}
                >
                  Conocer mas
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={10} sm={4} md={2} >
            <Card
              sx={{
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://consolaytablero.com/wp-content/uploads/2016/04/juego-real-de-ur.jpg"
                  height="200"
                  alt="Juego Real de Ur"
                />
                <CardContent>
                  <h2>Juego Real de Ur</h2>
                  <p>
                    En la década de 1920, el arqueólogo británico Leonard
                    Woolley descubrió una serie de tumbas en las ruinas de la
                    antigua ciudad sumeria de Ur, en el actual Irak. Las
                    sepulturas más ornamentadas del hallazgo, que pasarían a
                    conocerse como las Tumbas Reales de Ur, contenían toda clase
                    de joyas, vestimenta, armas, cuerpos de sirvientes… y hasta
                    un juego de mesa.
                  </p>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button
                  variant="contained"
                  onClick={() => navigate("/event_three")}
                >
                  Conocer mas
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={10} sm={4} md={2} >
            <Card
              sx={{
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://ulum.es/wp-content/uploads/2014/10/sumerios.png"
                  height="200"
                  alt="Numeros Sumerios"
                />
                <CardContent>
                  <h2>Sistema Numerico</h2>
                  <p>
                    Uruk fue una antigua ciudad sumeria. Se encontraba en la
                    orilla del río Éufrates y vivió su máximo esplendor en el
                    tercer milenio antes de Cristo. Una de sus características
                    más llamativas era su muralla, que rodeaba una zona de unos
                    siete kilómetros cuadrados donde vivían ochenta mil
                    personas. Es decir, era la mayor ciudad que el mundo había
                    conocido hasta entonces.
                  </p>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button
                  variant="contained"
                  onClick={() => navigate("/event_four")}
                >
                  Conocer mas
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Slider>
      </div>
    </Html>
  );
}

export default Featured;
