import { Button } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "../events/events.css";

/**
 * Componente arqui_general
 *
 * Este componente representa la y dirige a conocer URUK en google maps
 *
 * Forma parte de la historia de usuario PI1-25:Como usuario, deseo explorar la arquitectura de la civilización sumeria para comprender su estilo, técnicas constructivas y simbolismo.
 */

export function ArquiUruk(props) {
  const imageLinks = [
    "https://mysteriesrunsolved.com/wp-content/uploads/2021/06/1280px-Uruk_Archaealogical_site_at_Warka-01_compress68.jpg",
    "https://lh5.googleusercontent.com/p/AF1QipPVO2FFZPFZn-irtAygeM7VMj5sP3Fy0LMpsWnK=w408-h544-k-no",
    "https://i1.wp.com/mysteriesrunsolved.com/wp-content/uploads/2021/06/1280px-Uruk_Archaealogical_site_at_Warka-01_compress68.jpg?fit=1280%2C850&ssl=1",
    "https://4.bp.blogspot.com/-htR7FWH34rE/Tq5HIiYueUI/AAAAAAAADTA/tN00othEzZE/s1600/DSC01340.JPG",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  const handleButtonClick = () => {
    window.open("https://goo.gl/maps/r9H9sHE2ffVJJ49s7", "_blank");
  };
  return (
    <div
      style={{
        //padding: "2%",
        display: "flex",
        width: "95vw",
        height: "80vh",
      }}
    >
      <div
        style={{
          padding: "2%",
          width: "40%", 
          height: "40vh",
          flex: 2,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Mira las ruinas de Uruk</h1>
        <Slider {...settings}>
          {imageLinks.map((link, index) => (
            <div key={index}>
              <img
                src={link}
                loading="lazy"
                alt={`Imagen ${index + 1}`}
                style={{ width: "100%", height: "60vh" }}
              />
            </div>
          ))}
        </Slider>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            target="blank"
            onClick={handleButtonClick}
          >
            Conoce más
          </Button>
        </div>
      </div>
      <div
        style={{
          width: "60%", // El 60% del ancho de la ventana
          height: "80vh", // El 100% de la altura de la ventana
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "90%", // El 90% del contenedor
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4220.377353898418!2d45.63661441744386!3d31.324350300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fe0f661d036c591%3A0xa38fa43ef51c0511!2sUruk!5e1!3m2!1ses!2sco!4v1687230922966!5m2!1ses!2sco"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
            style={{
              width: "100%", // Ocupa el 100% del contenedor
              height: "100%", // Ocupa el 100% del contenedor
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
