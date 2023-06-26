import React from "react";
import "./events.css";

/**
 * Componente EventFive
 *
 * Este componente muestra información detallada sobre el legado sumerio tecnologico, 
 * uno de los logros más destacados de la cultura sumeria. la rueda, Incluye una descripción,
 * imágenes, videos y ejemplos de sus logros tecnologicos.
 * Pertenece a la historia de usuario PI1-26.
 */
function EventFive() {
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
              src="https://cdn0.unprofesor.com/es/posts/0/8/5/historia_de_la_invencion_de_la_rueda_resumen_corto_2580_600.jpg"
              alt="Escritura"
            />
          </div>
          <h4>
          La rueda, uno de los mayores logros de la civilización Sumeria, 
          cambiando para siempre el transporte.
          </h4>
          <p>
          La civilización sumeria dejó un valioso legado tecnológico que ha influido en el desarrollo de la humanidad. 
          Uno de sus mayores logros fue la invención de la rueda, revolucionando el transporte y la construcción de carros. 
          Además, desarrollaron técnicas avanzadas de irrigación para la agricultura, 
          permitiendo el cultivo eficiente de tierras y aumentando la producción de alimentos. 
          Los sumerios también fueron expertos en la metalurgia, 
          dominando la fundición y el trabajo del cobre y el bronce.
          Su arquitectura destacó por el uso de arcos y bóvedas, 
          innovaciones que aún se utilizan en la construcción hoy en día. 
          </p>
          <p>
          Los sumerios también fueron pioneros en la implementación de la irrigación controlada para la agricultura. 
          Construyeron canales y sistemas de riego que permitieron el cultivo eficiente de tierras agrícolas, 
          aumentando la producción de alimentos y el desarrollo de asentamientos urbanos. 
          </p>
          <img style = {{display: "flex", margin: "auto"}}
          src="https://asambleadigital.es/wp-content/uploads/2020/05/escena-1.jpg"
          loading="lazy"
          alt="ejemplo"
          />
          <p>
          En el campo de las ciencias, los sumerios desarrollaron un calendario lunar basado en la observación astronómica.
          Realizaron estudios detallados del cielo y establecieron patrones y ciclos celestiales que influyeron en el desarrollo posterior de la astronomía.
          Además, los sumerios fueron expertos en la producción y utilización de metales, 
          particularmente el cobre y el bronce. Dominaron técnicas de fundición y forja, lo que les permitió crear herramientas, 
          armas y objetos de valor.
          Su legado tecnológico también se puede apreciar en la arquitectura sumeria, 
          donde construyeron estructuras masivas como los zigurats y los palacios. Utilizaron técnicas de construcción avanzadas, como el uso de ladrillos de arcilla y la utilización de arcos y bóvedas.
          En resumen, el legado tecnológico de la civilización sumeria abarca desde la escritura y la irrigación hasta la astronomía y la metalurgia. Sus innovaciones sentaron las bases para futuros avances en diversas áreas y su influencia perdura en la humanidad hasta el día de hoy. 
          </p>
          <img style={{width: "600px",
                margin: "auto", display: "flex"}}
          src="https://cdn.discordapp.com/attachments/1090122205691658352/1121669436768780319/caracteristicas-de-los-sumerios.png"
          loading="lazy"
          alt="ejemplo"
          />
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/0k6l27bXvJQ" 
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventFive;
