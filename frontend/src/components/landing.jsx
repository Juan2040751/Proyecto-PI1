import { Html, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import "./events/events.css";

function Landing() {
  const lamussu = useGLTF("/static/lamussu.glb");
  const polRef = useRef();
  return (
    <>
      <directionalLight
        castShadow
        shadow-normalBias={0.04}
        position={[1, 2, 3]}
        intensity={1.5}
      />
      <color attach="background" args={["#DC7633"]} />
      <primitive
        ref={polRef}
        object={lamussu.scene}
        scale={0.3}
        rotation-y={-0.2}
        position={[3, -2, -2.5]}
      />

      <Html position={[-4, 0, 3]}>
        <h1
          style={{
            fontSize: 90,
            margin: 0,
            color: "black",
            fontFamily: "Tenor Sans, sans-serif",
          }}
        >
          La primera
        </h1>
        <h1
          style={{
            fontSize: 130,
            margin: 0,
            color: "black",
            fontFamily: "Tenor Sans, sans-serif",
          }}
        >
          Civilización
        </h1>
      </Html>
    </>
  );
}
useGLTF.preload("/static/lamussu.glb");
export default Landing;
