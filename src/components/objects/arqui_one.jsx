import React from "react";
import "../events/events.css";

/**
 * Componente arqui_one
 *
 * Este componente representa el zigurat que hace parte de la arquitectura sumeria
 *
 * Forma parte de la historia de usuario PI1-25:Como usuario, deseo explorar la arquitectura de la civilización sumeria para comprender su estilo, técnicas constructivas y simbolismo.
 */

export function ArquiOne(props) {
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
            title="Ziggurat"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking="true"
            execution-while-out-of-viewport="true"
            loading="lazy"
            src="https://sketchfab.com/models/01a917691d344f3d801f67151de6b2f0/embed?autostart=1"
            style={{
              width: "100%", // Ocupa el 100% del contenedor
              height: "100%",
            }}
          />
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
              href="https://sketchfab.com/3d-models/ziggurat-of-ur-01a917691d344f3d801f67151de6b2f0?utm_medium=embed&utm_campaign=share-popup&utm_content=01a917691d344f3d801f67151de6b2f0"
              target="_blank"
              rel="noreferrer"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Ziggurat of Ur{" "}
            </a>{" "}
            by{" "}
            <a
              href="https://sketchfab.com/lugal_pcz?utm_medium=embed&utm_campaign=share-popup&utm_content=01a917691d344f3d801f67151de6b2f0"
              target="_blank"
              rel="noreferrer"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Paul Zimmerman{" "}
            </a>
            on
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=01a917691d344f3d801f67151de6b2f0"
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
          height: "40vh", // El 100% de la altura de la ventana
          flex: 2,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Los Zigurat</h1>
        <p style={{ paddingTop: "0" }}>
          Los zigurats eran templos monumentales construidos en forma de
          terrazas escalonadas. Eran los centros religiosos más importantes de
          las ciudades sumerias. El zigurat más famoso es el Zigurat de Ur,
          construido alrededor del siglo XXI a.C. por el rey sumerio Ur-Nammu.
          Tenía una base rectangular y varias terrazas superpuestas, con un
          santuario en la cima donde se realizaban rituales religiosos.
        </p>
        <div
          style={{
            //width: "40%", // El 40% del ancho de la ventana
            height: "40vh", // El 100% de la altura de la ventana
            flex: 2,
            flexDirection: "column",
          }}
        >
          <iframe
            src=" https://www.youtube.com/embed/SAoilh2laaQ?t=87 "
            title="Los zigurat"
            loading="lazy"
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
