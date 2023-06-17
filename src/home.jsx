import { ScrollControls } from "@react-three/drei";
import Featured from "./components/featured_event";
import Landing from "./components/landing";
import Museum from "./components/museum";
import Gastronomy from "./components/Gastronomy";

/**
 * Componente Home
 *
 * Este archivo representa la pantalla principal de la aplicación, donde se muestran las diferentes secciones.
 * Incluye los componentes de la página de inicio, el evento destacado y el museo.
 *
 * @param {object} references - Referencias a los elementos HTML de cada sección.
 * @param {object} LandingRef - Referencia al elemento HTML de la página de inicio.
 * @returns {JSX.Element} - Elemento JSX que representa la pantalla principal de la aplicación.
 */
function Home({ references, LandingRef, setScroll}) {
  return (
    <ScrollControls pages={1} damping={0.1}>
      <Landing reference={LandingRef} setScroll={setScroll}/>
      <Featured reference={references[0]} />
      <Museum reference={references[1]} />
      <Gastronomy reference={references[2]}/>
    </ScrollControls>
  );
}

export default Home;