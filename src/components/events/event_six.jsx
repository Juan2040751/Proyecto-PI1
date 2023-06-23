import React from "react";
import "./events.css";

/**
 * Componente EventFive
 *
 * Este componente muestra información detallada sobre la literatura sumeria,
 * uno de sus aspectos más importantes en su legado cultural. Incluye una descripción,
 * imágenes, videos y ejemplos de la literatura sumeria.
 * Pertenece a la historia de usuario PI1-26.
 */
function EventSix() {
  return (
    <div className="container_events">
      <div className="lateral">
        <img className="img_lateral" alt="" loading="lazy"/>
      </div>

      <div className="contenido">
        <div className="descripcion">
          <div className="Imagen_desc">
            <img
              className="imagenes"
              loading="lazy"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Obverse._Gilgamesh_and_Aga._Old_Babylonian_period%2C_from_southern_Iraq._Sulaymaniyah_Museum%2C_Iraqi_Kurdistan.jpg/1200px-Obverse._Gilgamesh_and_Aga._Old_Babylonian_period%2C_from_southern_Iraq._Sulaymaniyah_Museum%2C_Iraqi_Kurdistan.jpg"
              alt="Escritura"
            />
          </div>
          <h4>
          La literara sumeria, la más antigua del mundo.
          </h4>
          <p>
          La literatura sumeria es uno de los aspectos más destacados de su legado cultural. 
          Sus escritos, grabados en tablillas de arcilla, abarcan una variedad de géneros y temas. 
          Entre las obras más conocidas se encuentran los himnos y poemas épicos, como el famoso "Enuma Elish", 
          que relata el origen del universo y la creación del mundo según la mitología sumeria.
          </p>
          <p>
          También se han encontrado cuentos y leyendas sumerias, como el "Poema de Gilgamesh", 
          considerado uno de los primeros relatos épicos de la humanidad. 
          Esta epopeya narra las aventuras del rey Gilgamesh y su búsqueda de la inmortalidad.
          La literatura sumeria reflejaba la mentalidad y la cosmovisión de la época, abordando temas como el amor, 
          la guerra, la justicia y la relación entre los dioses y los humanos. Sus escritos revelan una sociedad compleja y sofisticada, 
          con personajes heroicos y moralidades ambiguas.
          </p>
          <img style = {{display: "flex", margin: "auto"}}
              className="imagenes"
              loading="lazy"
              src="https://arqueologiadesdelsofa.files.wordpress.com/2017/05/600px_numeros_y_medidas_-_01_tablilla_protosumeria.jpg?w=652"
              alt="Escritura"
            />
            <p>
            Además, los sumerios desarrollaron un sistema de escritura sofisticado que permitía registrar y preservar sus obras literarias. 
            Estos textos han sido una fuente invaluable de conocimiento sobre la vida y la cultura sumeria, 
            así como una influencia en futuras tradiciones literarias de la región mesopotámica.
            En resumen, la literatura sumeria es una joya cultural que nos brinda una visión fascinante de la antigua civilización. 
            Sus himnos, poemas épicos y relatos ofrecen una ventana a la cosmovisión y los valores de la sociedad sumeria, 
            dejando un legado literario duradero que ha influido en la tradición literaria mundial.   
            </p>
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DONiq9pyLg4"
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

export default EventSix;