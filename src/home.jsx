import { ScrollControls } from "@react-three/drei";
import { useEffect } from "react";
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
function Home({ references, LandingRef, setScroll, setSession }) {
  const session = JSON.parse(localStorage.getItem("session"));
  useEffect(() => {
    setSession(session);
  }, [setSession]);
  return (
    <ScrollControls pages={1} damping={0.1}>
      <Landing reference={LandingRef} setScroll={setScroll} />
      <Featured reference={references[0]} lastCard={session.Destacado} />
      <Arqitectura reference={references[1]} lastCard={session.Arquitectura} />
      <Museum reference={references[2]} lastCard={session.Museo} />
      <Gastronomy reference={references[3]} />
    </ScrollControls>
  );
}

export default Home;
