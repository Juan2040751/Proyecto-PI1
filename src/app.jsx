import { Canvas } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import NavbarApp from "./components/navbar";
import Home from "./home";

function App() {
  const LandingRef = useRef();
  const FeaturedRef = useRef();
  const MuseumRef = useRef();
  const references = [FeaturedRef, MuseumRef]
  return (
    <>
      <NavbarApp references={references} LandingRef={LandingRef}/>
      <div style={{ width: "100vw", height: "calc(100vh - 60px)", top: "60px", position: "fixed" }}>
        <Canvas
          flat
          color="CB4154"
          shadows
          camera={{
            position: [2, 0, 6],
          }}
        >
          <Home references={references} LandingRef={LandingRef}/>
        </Canvas>
      </div>
    </>
  );
}

export default App;
