import { Html } from "@react-three/drei";
import * as React from "react";
import { BrowserRouter, Link } from "react-router-dom";
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

import "./events/events.css";

function Featured() {
  return (

    <Html fullscreen style={{ overflow: "auto", maxHeight: "100vh", top:"100vh"}}>
      <div className="titulo">
        <h1>EVENTOS HISTORICOS</h1>
      </div>

      <div
        style={{
          position: "relative",
          top: "20px",
          left: "20px",
        }}
      >
        <BrowserRouter>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
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
                        Mesopotamia el tránsito de los asentamientos
                        neolíticos a la aparición de las primeras ciudades de
                        la Historia. Las ciudades comenzaron a ser el centro
                        de actividad principal y sus habitantes comenzaron una
                        intensa especialización en el trabajo, de forma que
                        cada persona únicamente sabía realizar una actividad.
                      </p>
                    </CardContent>
                  </CardActionArea>

                  <CardActions>
                    <Button variant="contained">Conocer más</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
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
                        Sobre el año 3300 a.C. Los Sumerios inventaron un
                        sistema de escritura que consistía en la utilización
                        de unas cuñas que permitían grabar signos sobre unas
                        tablillas de arcilla blanda las cuales después se
                        endurecen en un horno.
                      </p>
                    </CardContent>
                  </CardActionArea>

                  <CardActions>
                    <Button variant="contained">Conocer mas</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
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
                        Woolley descubrió una serie de tumbas en las ruinas de
                        la antigua ciudad sumeria de Ur, en el actual Irak.
                        Las sepulturas más ornamentadas del hallazgo, que
                        pasarían a conocerse como las Tumbas Reales de Ur,
                        contenían toda clase de joyas, vestimenta, armas,
                        cuerpos de sirvientes… y hasta un juego de mesa.
                      </p>
                    </CardContent>
                  </CardActionArea>

                  <CardActions>
                    <Button variant="contained">Conocer mas</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
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
                        Uruk fue una antigua ciudad sumeria. Se encontraba en
                        la orilla del río Éufrates y vivió su máximo esplendor
                        en el tercer milenio antes de Cristo. Una de sus
                        características más llamativas era su muralla, que
                        rodeaba una zona de unos siete kilómetros cuadrados
                        donde vivían ochenta mil personas. Es decir, era la
                        mayor ciudad que el mundo había conocido hasta
                        entonces.
                      </p>
                    </CardContent>
                  </CardActionArea>

                  <CardActions>
                    <Link to="/event_one">
                      <Button variant="contained">Conocer mas</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </BrowserRouter>
      </div>
    </Html>
  );
}

export default Featured;
