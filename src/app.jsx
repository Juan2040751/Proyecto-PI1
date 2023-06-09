import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import Animation from "./components/animation";
import NavbarApp from "./components/navbar";
import Home from "./home";
/**
 * Componente App
 *
 * Este archivo representa el componente principal de la aplicación una vez que se ha realizado el inicio de sesión.
 * Incluye la barra de navegación y la pantalla principal donde se mostraran las diferentes secciones de la aplicacion.
 *
 * @returns {JSX.Element} - Elemento JSX que representa el componente principal de la aplicación.
 */

function App() {
  const LandingRef = useRef();
  const FeaturedRef = useRef(null);
  const MuseumRef = useRef(null);
  const GastronomyRef = useRef(null);
  const ArqitecturaRef = useRef(null);
  const TestRef = useRef(null);
  const references = [FeaturedRef, ArqitecturaRef, MuseumRef, GastronomyRef, TestRef];
  const [scroll, setScroll] = useState(0);

  return (
    <>
      <NavbarApp
        references={references}
        LandingRef={LandingRef}
        scroll={scroll}
      />
      <div
        style={{
          width: "100vw",
          height: "calc(100vh - 60px)",
          top: "60px",
          position: "fixed",
        }}
      >
        <Suspense fallback={<Animation />}>
          <Canvas
            flat
            id="canvaaas"
            color="CB4154"
            shadows
            camera={{
              position: [2, 0, 6],
            }}
          >
            <Home
              references={references}
              LandingRef={LandingRef}
              setScroll={setScroll}
              scroll={scroll}
            />
          </Canvas>
        </Suspense>
      </div>
    </>
  );
}

export default App;
