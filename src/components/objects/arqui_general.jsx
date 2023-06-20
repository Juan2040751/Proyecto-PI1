import React from "react";
import "../events/events.css";
import Slider from "react-slick";
import { Card, CardContent } from "@mui/material";



/**
 * Componente arqui_general
 *
 * Este componente representa la conformacion de las ciudades sumerias
 *
 * Forma parte de la historia de usuario PI1-25:Como usuario, deseo explorar la arquitectura de la civilización sumeria para comprender su estilo, técnicas constructivas y simbolismo.
 */

function SampleNextArrow(props) {
  const { className, style , onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, borderRadius:"100%", backgroundColor:"black"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,borderRadius:"100%", backgroundColor:"black" }}
      onClick={onClick}
    />
  );
}

export function ArquiGeneral(props) {
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <>
      <div
        style={{
          //margin: '2%',
          marginLeft: "2%",
          display: "flex",
          width: "95vw",
          height: "80vh",
        }}
      >
        <div
          style={{
            width: "70%", 
            height: "80vh", 
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "90%", 
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://img1.cgtrader.com/items/2805177/77fba11f74/iraq-sumerian-city-ziggurat-temple-3d-model-low-poly-max-obj-3ds-fbx.jpg"
              alt="Ciudad sumeria"
              loading="lazy"
            />
          </div>
        </div>

        <div
          style={{
            padding: "2%",
            width: "30%", // El 40% del ancho de la ventana
            height: "40vh", // El 100% de la altura de la ventana
            flex: 2,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Conformacion de las ciudades</h1>
          <p style={{ paddingTop: "0" }}>
            Aunque las ciudades sumerias pueden haber variado en algunos
            aspectos, aquí hay una descripción general de su estructura y
            características:
          </p>

          <div
            style={{
              //width: "40%", // El 40% del ancho de la ventana
              height: "40vh", // El 100% de la altura de la ventana
              flex: 2,
              flexDirection: "column",
            }}
          >
            <Slider {...settings}>

            <Card>
                <CardContent
                  sx={{
                    height: "90%",
                    overflow: "hidden",
                  }}
                >
                  <h2>Murallas defensivas</h2>
                  <p>
                    Las ciudades sumerias solían estar rodeadas por murallas
                    defensivas hechas de ladrillos de adobe. Estas murallas
                    tenían varias puertas de entrada para controlar el acceso a
                    la ciudad.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent
                  sx={{
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <h2>Zigurats y templos</h2>
                  <p>
                    En el centro de la ciudad, se encontraba el zigurat, una
                    estructura religiosa en forma de pirámide escalonada. Junto
                    al zigurat, había templos dedicados a los dioses sumerios.
                    Estos templos eran importantes centros religiosos y
                    administrativos de la ciudad.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent
                  sx={{
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <h2>Palacios y residencias</h2>
                  <p>
                    Cerca de los templos, se encontraban los palacios, que
                    servían como residencias de los gobernantes y como centros
                    administrativos. Los palacios eran complejos arquitectónicos
                    con patios, salas de audiencias y áreas de almacenamiento.
                    También había viviendas para la élite y las familias
                    adineradas.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent
                  sx={{
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <h2>Calles y canales</h2>
                  <p>
                    Las calles de las ciudades sumerias eran estrechas y
                    dispuestas en un patrón de cuadrícula. Estas calles
                    conectaban los diferentes sectores de la ciudad y estaban
                    hechas de ladrillos de adobe o simplemente de tierra
                    compactada.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent
                  sx={{
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <h2>Mercados y talleres</h2>
                  <p>
                    Las ciudades sumerias tenían mercados activos donde se
                    realizaban intercambios comerciales. En estos mercados, se
                    vendían productos agrícolas, artesanías, textiles y otros
                    bienes. También había talleres donde se fabricaban diversos
                    productos, como cerámica, tejidos y herramientas.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent
                  sx={{
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <h2>Zonas residenciales</h2>
                  <p>
                    Fuera de la zona central de la ciudad, se encontraban las
                    áreas residenciales. Estas áreas contenían viviendas más
                    simples, generalmente construidas con ladrillos de adobe.
                    Las casas estaban agrupadas en vecindarios y estaban
                    dispuestas alrededor de patios interiores.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent
                  sx={{
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <h2>Sistemas de irrigación</h2>
                  <p>
                    Las ciudades sumerias dependían de sistemas de irrigación
                    para la agricultura. Estos sistemas consistían en canales y
                    diques para controlar el flujo de agua de los ríos Tigris y
                    Éufrates hacia los campos de cultivo.
                  </p>
                </CardContent>
              </Card>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
