import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Fab } from "@mui/material";
import { Html, ScrollControls } from "@react-three/drei";
import axios from "axios";
import { useEffect, useState } from "react";
import Arqitectura from "./components/Arqitectura";
import Gastronomy from "./components/Gastronomy";
import Featured from "./components/featured_event";
import Landing from "./components/landing";
import Museum from "./components/museum";

/**
 * Componente Home
 *
 * Este archivo representa la pantalla principal de la aplicación, donde se muestran las diferentes secciones.
 * Incluye los componentes de la página de inicio, los eventos destacado, el museo y la gastronomia.
 *
 * @param {object} references - Referencias a los elementos HTML de cada sección.
 * @param {object} LandingRef - Referencia al elemento HTML de la página de inicio.
 * @returns {JSX.Element} - Elemento JSX que representa la pantalla principal de la aplicación.
 */
function Home({ references, LandingRef, setScroll }) {
  const [session, setSession] = useState(null);

  const lastPageTrack = () => {
    const { lastPage } = JSON.parse(localStorage.getItem("session"));
    const page = {
      Landing: LandingRef.current,
      Destacado: references[0].current,
      Arquitectura: references[1].current,
      Museo: references[2].current,
      Gastronomia: references[3].current,
    }[lastPage];
    page?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    setSession(JSON.parse(localStorage.getItem("session")));
  }, []);

  useEffect(() => {
    if (
      session !== null &&
      JSON.stringify(session) !== localStorage.getItem("session")
    ) {
      const updateSession = async () => {
        await axios
          .put("http://localhost:8000/usuarios/sesion", session)
          .then(({ data }) => {
            const { session } = data;
            localStorage.setItem("session", JSON.stringify(session));
          })
          .catch((error) => console.log(error));
      };
      updateSession();
    }
  }, [session]);
  return (
    <>
      <ScrollControls pages={1} damping={0.1}>
        <Landing
          reference={LandingRef}
          setScroll={setScroll}
          setSession={setSession}
          session={session}
        />
        <Featured
          reference={references[0]}
          lastCard={session?.Destacado}
          setSession={setSession}
          session={session}
        />
        <Arqitectura
          reference={references[1]}
          lastCard={session?.Arquitectura}
          setSession={setSession}
          session={session}
        />
        <Museum
          reference={references[2]}
          lastCard={session?.Museo}
          setSession={setSession}
          session={session}
        />
        <Gastronomy reference={references[3]} />
        <Html
          fullscreen
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          {session?.lastPage === "Landing" ? (
            <></>
          ) : (
            <Fab
              variant="extended"
              onClick={lastPageTrack}
              style={{ position: "relative", top: -20 }}
            >
              <ArrowDownwardIcon sx={{ mr: 1 }} />
              Volver a {session?.lastPage}
            </Fab>
          )}
        </Html>
      </ScrollControls>
    </>
  );
}

export default Home;
