import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { Html } from "@react-three/drei";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./components.css";
import { SampleNextArrow, SamplePrevArrow } from "./objects/arqui_general";
/**
 * Componente Gastronomy
 *
 * Este componente esta dedicado a la gastronomia sumeria,
 * incluyendo su importancia en la cocina actual y su influencia en la historia de la cocina,
 * junto con algunos de sus platos tipicos. Forma parte de la historia de usuario PI1-12.
 */

function Gastronomy({ reference, lastCard, setSession, session }) {
  var settings = {
    dots: true,
    arrows: true, // Habilitar las flechas
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: lastCard ? lastCard : 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (index) => {
      setSession({
        ...session,
        Gastronomía: index,
        lastPage: "Gastronomía",
      });
    },
    responsive: [
      {
        breakpoint: 1000,
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
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Html
      fullscreen
      style={{ top: "400vh", height: "100vh", overflowY: "auto" }}
    >
      <div className="titulo" ref={reference} id="Gastronomía">
        <h1>GASTRONOMIA SUMERÍA</h1>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="gastronomy_text">
          <p>
            Los sumerios, una antigua civilización que habitó en Mesopotamia,
            desarrollaron una cultura culinaria rica y diversa. Su gastronomía
            no solo se centraba en la alimentación, sino que también tenía un
            significado social y religioso en su sociedad.
          </p>

          <h2>Importancia en la historia de la alimentación</h2>
          <p style={{ marginTop: "-40px" }}>
            La gastronomía sumeria fue fundamental en la historia de la
            alimentación. Los sumerios fueron pioneros en la agricultura y la
            domesticación de animales, cultivando cereales y criando animales
            para obtener carne y lácteos. Además, desarrollaron técnicas
            avanzadas de cocina, como la fermentación y la cocción en hornos de
            barro. Estos avances sentaron las bases de la alimentación y la
            gastronomía en las civilizaciones posteriores.
          </p>

          <h2>Influencia en la cocina actual</h2>
          <p style={{ marginTop: "-40px" }}>
            La cocina sumeria ha dejado un legado en la gastronomía actual.
            Muchos platos sumerios han evolucionado y conservan elementos
            distintivos. Ingredientes como cebada, legumbres, especias y hierbas
            siguen siendo fundamentales en la cocina de Mesopotamia y en otras
            culturas influenciadas por los sumerios. Además, técnicas como
            fermentación y cocción en horno persisten y se utilizan en diversas
            preparaciones culinarias.
          </p>
        </div>

        <div className="gastronomy_cards">
          <h2 style={{ textAlign: "center" }}>Platos Sumerios Tradicionales</h2>

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
                  image="https://www.cardamomo.news/__export/1648576815999/sites/debate/img/2022/03/29/pan_de_cebada.png_242310155.png"
                  loading="lazy"
                  height="200"
                  alt="Pan de cebada"
                />
                <CardContent
                  sx={{
                    height: "352px",
                    overflow: "auto",
                  }}
                >
                  <h2>Pan de cebada</h2>
                  <p>
                    Se elaboraba con harina de cebada, agua y sal. Era un pan
                    denso y nutritivo que se horneaba en hornos de barro. Este
                    pan sigue siendo apreciado en la cocina actual, ademas de
                    que la cebada ocupa el cuarto lugar en importancia entre los
                    cereales, después del trigo, el maíz y el arroz.
                  </p>
                </CardContent>
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
                  image="https://hips.hearstapps.com/hmg-prod/images/190326-lamb-stew-325-1553801000.jpg?crop=0.668xw:1.00xh;0.148xw,0.00255xh&resize=1200:*"
                  loading="lazy"
                  height="200"
                  alt="Lamb Stew"
                />
                <CardContent
                  sx={{
                    height: "352px",
                    overflow: "auto",
                  }}
                >
                  <h2>Estofado de Cordero</h2>
                  <p>
                    Se preparaba con trozos de carne de cordero, acompañados de
                    vegetales, especias y hierbas, que se cocinaban a fuego
                    lento para lograr una carne tierna y sabrosa. Este plato ha
                    perdurado en diferentes culturas y se considera un clásico
                    de la cocina actual.
                  </p>
                </CardContent>
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
                  image="https://cdn.colombia.com/gastronomia/2018/11/20/sopa-de-cebada-perlada-3128.jpg"
                  loading="lazy"
                  height="200"
                  alt="Sopita do macaco"
                />
                <CardContent
                  sx={{
                    height: "352px",
                    overflow: "auto",
                  }}
                >
                  <h2>Sopa de cebada</h2>
                  <p>
                    Se elaboraba con cebada perlada, vegetales, especias y
                    caldo. Era un plato reconfortante y nutritivo. En la
                    actualidad, la sopa de cebada sigue siendo apreciada en
                    muchas culturas y se considera una opción saludable y
                    reconfortante
                  </p>
                </CardContent>
              </Card>
            </Grid>
          </Slider>
        </div>
      </div>
    </Html>
  );
}

export default Gastronomy;
