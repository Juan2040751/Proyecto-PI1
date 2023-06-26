import { Html } from "@react-three/drei";
import Slider from "react-slick";
import "./events/events.css";
import { ArquiOne } from "./objects/arqui_one";
import { ArquiTwo } from "./objects/arqui_Two";
import {
  ArquiGeneral,
  SampleNextArrow,
  SamplePrevArrow,
} from "./objects/arqui_general";
import { ArquiUruk } from "./objects/arqui_uruk";

/**
 * Componente Arquitectura
 *
 * Este archivo representa el componente de la aruqitectura
 * que muestra objetos en tercera dimensión de la cultura sumeria.
 * Cumple con los requisitos de la Historia de Usuario PI1-25,
 * donde se espera que se presenten arquitecturas de la cultura sumeria en tercera dimensión
 * para que el usuario pueda admirar el objeto en diferentes ángulos.
 * @param {object} reference - Referencia al elemento HTML.
 * @returns {JSX.Element} - Elemento JSX que representa el componente del museo.
 */

function Arqitectura({ reference, lastCard, setSession, session }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    initialSlide: lastCard ? lastCard : 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (index) => {
      setSession({
        ...session,
        Arquitectura: index,
        lastPage: "Arquitectura",
      });
    },
  };

  return (
    <>
      <Html fullscreen style={{ top: "200vh" }}>
        <div className="titulo_arqui" ref={reference} id="Arqitectura">
          <h1>ARQUITECTURA</h1>
        </div>

        <div
          style={{
            position: "relative",
            padding: "0 3% 0 2%",
          }}
        >
          <Slider {...settings}>
            <ArquiGeneral />
            <ArquiOne />
            <ArquiTwo />
            <ArquiUruk />
          </Slider>
        </div>
      </Html>
    </>
  );
}

export default Arqitectura;
