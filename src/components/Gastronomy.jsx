import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { Html } from "@react-three/drei";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

/**
 * Componente Gastronomy
 *
 * Este componente esta dedicado a la gastronomia sumeria,
 * incluyendo su importancia en la cocina actual y su influencia en la historia de la cocina,
 * junto con algunos de sus platos tipicos. Forma parte de la historia de usuario PI1-12.
 */

function Gastronomy({ reference }) {
  var settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <Html fullscreen style={{ top: "300vh" }}>
      <div className="titulo" ref={reference}>
        <h1>GASTRONOMIA SUMERÍA</h1>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ width: "60%", padding: "20px" }}>
          <p>
            La gastronomía sumeria se destaca como una de las más antiguas de la
            historia de la humanidad. Los sumerios, una antigua civilización que
            habitó en Mesopotamia, desarrollaron una cultura culinaria rica y
            diversa. Su gastronomía no solo se centraba en la alimentación, sino
            que también tenía un significado social y religioso en su sociedad.
          </p>

          <h2 style={{ marginTop: "-2px" }}>
            Importancia en la historia de la alimentación
          </h2>
          <p style={{ marginTop: "-40px" }}>
            La gastronomía sumeria fue fundamental en la historia de la
            alimentación. Los sumerios fueron pioneros en la agricultura y la
            domesticación de animales, lo que les permitió cultivar diversos
            cereales, como la cebada y el trigo, y criar animales para obtener
            carne y lácteos. Además, desarrollaron técnicas avanzadas de cocina,
            como la fermentación y la cocción en hornos de barro. Estos avances
            sentaron las bases de la alimentación y la gastronomía en las
            civilizaciones posteriores.
          </p>

          <h2 style={{ marginTop: "-2px" }}>Influencia en la cocina actual</h2>
          <p style={{ marginTop: "-40px" }}>
            La cocina sumeria ha dejado un legado duradero en la gastronomía
            actual. Muchos platos sumerios han evolucionado y se han adaptado a
            lo largo del tiempo, pero aún conservan elementos distintivos de la
            cocina sumeria. Ingredientes como la cebada, las legumbres, las
            especias y las hierbas siguen siendo fundamentales en la cocina de
            la región de Mesopotamia y en otras culturas influenciadas por los
            sumerios. Además, técnicas como la fermentación y la cocción en
            horno han perdurado y continúan siendo utilizadas en diversas
            preparaciones culinarias.
          </p>
        </div>

        <div
          style={{
            position: "relative",
            padding: "3%",
            width: "40%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2 style={{ textAlign: "center", marginTop: "16px" }}>
            Platos Sumerios Tradicionales
          </h2>

          <Slider {...settings}>
            <Grid
              item
              xs={10}
              sm={4}
              md={2}
              sx={{ margin: "20px", maxWidth: "450px" }}
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
                  image="https://www.cardamomo.news/__export/1648576815999/sites/debate/img/2022/03/29/pan_de_cebada.png_242310155.png"
                  height="200"
                  alt="Pan de cebada"
                />
                <CardContent
                  sx={{
                    maxHeight: "434px",
                    overflow: "hidden",
                  }}
                >
                  <h2>Pan de cebada</h2>
                  <p>
                    El pan de cebada era un alimento básico en la dieta sumeria.
                    Se elaboraba con harina de cebada, agua y sal. Era un pan
                    denso y nutritivo que se horneaba en hornos de barro. Este
                    pan sigue siendo apreciado en la cocina actual, ademas de
                    que la cebada ocupa el cuarto lugar en importancia entre los
                    cereales, después del trigo, el maíz y el arroz.
                  </p>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              item
              xs={10}
              sm={4}
              md={2}
              sx={{ margin: "20px", maxWidth: "450px" }}
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
                  image="https://hips.hearstapps.com/hmg-prod/images/190326-lamb-stew-325-1553801000.jpg?crop=0.668xw:1.00xh;0.148xw,0.00255xh&resize=1200:*"
                  height="200"
                  alt="Lamb Stew"
                />
                <CardContent
                  sx={{
                    maxHeight: "450px",
                    overflow: "hidden",
                  }}
                >
                  <h2>Estofado de Cordero</h2>
                  <p>
                    El estofado de cordero era un plato popular en la
                    gastronomía sumeria. Se preparaba con trozos de carne de
                    cordero, acompañados de vegetales, especias y hierbas, que
                    se cocinaban a fuego lento para lograr una carne tierna y
                    sabrosa. Este plato ha perdurado en diferentes culturas y se
                    considera un clásico de la cocina actual.
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={10}
              sm={4}
              md={2}
              sx={{ margin: "20px", maxWidth: "450px" }}
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
                  image="https://cdn.colombia.com/gastronomia/2018/11/20/sopa-de-cebada-perlada-3128.jpg"
                  height="200"
                  alt="Sopita do macaco"
                />
                <CardContent
                  sx={{
                    maxHeight: "600px",
                    overflow: "hidden",
                  }}
                >
                  <h2>Sopa de cebada</h2>
                  <p>
                    La sopa de cebada era una preparación común en la
                    gastronomía sumeria. Se elaboraba con cebada perlada,
                    vegetales, especias y caldo. Era un plato reconfortante y
                    nutritivo. En la actualidad, la sopa de cebada sigue siendo
                    apreciada en muchas culturas y se considera una opción
                    saludable y reconfortante
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
