import React from "react";
import "./events.css";

/**
 * Componente EventTwo
 * 
 * Este componente muestra información detallada sobre la escritura cuneiforme,
 * uno de los logros más destacados de la cultura sumeria. Incluye una descripción,
 * imágenes, videos y ejemplos de escritura cuneiforme.
 * Pertenece a la historia de usuario PI1-13.
 */
function EventTwo() {
  return (
    <div className="container_events">
      <div className="lateral">
        <img
          className="img_lateral"
        />
      </div>

      <div className="contenido">

      <div className="titulo">
        <h1 className="titulo_events">La Escritura Cuneiforme</h1>
      </div>
      <div className="descripcion">
      <div className="Imagen_desc">
        <img
          className="imagenes"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Clay_cone_Telloh_Louvre_AO13239.jpg/399px-Clay_cone_Telloh_Louvre_AO13239.jpg"
          alt="Escritura"
        />
        </div>
        <h4>El cuneiforme es uno de los sistemas de escritura más longevos en la historia de la humanidad</h4>
        <p>
          Sobre el año 3300 a.C. Los Sumerios inventaron un sistema de escritura
          que consistía en la utilización de unas cuñas que permitían grabar
          signos sobre unas tablillas de arcilla blanda las cuales después se
          endurecían en un horno. El código evolucionó desde unos signos
          pictográficos que representaban objetos y palabras hacia la escritura
          cuneiforme propiamente dicha. El invento de esta escritura marca el
          comienzo de la Historia. Los Acadios o los Hititas también utilizaron
          escritura cuneiforme, adaptándola a sus idiomas. El término cuneiforme
          se debe a Thomas Hyde que era profesor en la Universidad de Oxford. En
          1700 publicó un trabajo que terminó dando nombre a esta especial
          escritura: Dactuli pyramidales seu cuneiformes que trataba sobre el
          trabajo unos 80 años anterior de Della Valle sobre esta misma
          escritura. No está del todo claro si este tipo de escritura es la mas
          antigua o lo es la jeroglífica egipcia.
        </p>
        <div className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QFZtKNXouw8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        </div>
      </div>
      </div>
    </div>

  );
}

export default EventTwo;
