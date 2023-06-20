import React from "react";
import "../events/events.css";

/**
 * Componente arqui_two
 *
 * Este componente representa elE-DUB-LAL-MAH que hace parte de la arquitectura sumeria
 *
 * Forma parte de la historia de usuario PI1-25:Como usuario, deseo explorar la arquitectura de la civilización sumeria para comprender su estilo, técnicas constructivas y simbolismo.
 */

export function ArquiTwo(props) {
  return (
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
            title="E-DUB-LAL-MAH"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/965dbc85a8f246e59aae19c5ca860cec/embed?autostart=1"
            style={{
              width: "100%", // Ocupa el 100% del contenedor
              height: "100%", // Ocupa el 100% del contenedor
            }}
          >
            {" "}
          </iframe>
        </div>
        <div
          style={{
            width: "100%",
            height: "10%", // El 30% del contenedor
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            <a
              href="https://sketchfab.com/3d-models/ziggurat-53b8b7260b5f49538a9b87f3e62323c9?utm_medium=embed&utm_campaign=share-popup&utm_content=53b8b7260b5f49538a9b87f3e62323c9"
              target="_blank"
               rel="noreferrer"s
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              E-DUB-LAL-MAH
            </a>{" "}
            by{" "}
            <a
              href="https://sketchfab.com/BOCgame?utm_medium=embed&utm_campaign=share-popup&utm_content=53b8b7260b5f49538a9b87f3e62323c9"
              target="_blank"
              rel="noreferrer"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              BOCgame
            </a>{" "}
            on{" "}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=53b8b7260b5f49538a9b87f3e62323c9"
              target="_blank"
              rel="noreferrer"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Sketchfab
            </a>
          </p>
        </div>
      </div>

      <div
        style={{
          padding: "2%",
          width: "40%", // El 40% del ancho de la ventana
          height: "80vh", // El 100% de la altura de la ventana
          flex: 2,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Los Templos</h1>
        <p style={{ paddingTop: "0" }}>
          E-Dub-Lal-Mah es un templo ubicado en la ciudad de Ur en Mesopotamia.
          El templo fue construido originalmente con ladrillos de barro y se
          cree que fue construido durante el reinado de Amar-Sin, el tercer
          gobernante de la Tercera Dinastía. El templo se llama “La Casa de las
          Tablillas” en sumerio y se cree que fue utilizado para almacenar
          tablillas cuneiformes
        </p>
      </div>
    </div>
  );
}
