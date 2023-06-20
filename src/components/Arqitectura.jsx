import { Html } from "@react-three/drei";
import Slider from "react-slick";
import "./events/events.css";
import { ArquiOne } from "./objects/arqui_one";
import { ArquiTwo } from "./objects/arqui_Two";
import { ArquiGeneral } from "./objects/arqui_general";
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

function Arqitectura({ reference }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
            //padding: "2%",
          }}
        >
          <Slider {...settings}>
            <div>
              <ArquiGeneral />
            </div>
            <div>
              <ArquiOne />
            </div>
            <div>
              <ArquiTwo />
            </div>
            <div>
              <ArquiUruk />
            </div>
          </Slider>
        </div>
      </Html>
    </>
  );
}

export default Arqitectura;
