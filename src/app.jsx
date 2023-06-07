import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Toolbar } from "@mui/material";
import NavbarApp from "./components/navbar"

function App({ children }) {
  return (
    <>
      <NavbarApp />
      <div style={{ width: "100vw", height: "100vh", top: "70px" }}>
        <Canvas
          flat
          color="CB4154"
          shadows
          camera={{
            position: [2, 0, 6],
          }}
        >

          <Content>{children}</Content>
        </Canvas>
      </div>
    </>

  );
}

const SceneContent = () => {
  // Lógica adicional de la escena 3D, como el uso de hooks de R3F o la configuración de objetos y luces

  return (
    <group>
      {/* Contenido adicional de la escena 3D */}
    </group>
  );
};

const Content = ({ children }) => {
  // Lógica adicional relacionada con el contenido de la escena 3D, como el uso de hooks de React

  return (
    <group>
      {/* Contenido adicional de la escena 3D */}
      {children}
    </group>
  );
};

export default App;

