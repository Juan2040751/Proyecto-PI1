import { Html, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import "./events/events.css";

/**
 * Componente Landing
 *
 * Este componente representa la página de inicio de la aplicación y muestra un objeto 3D destacando la cultura de la civilización sumeria.
 * Forma parte de la historia de usuario PI1-16.
 *
 * El objeto 3D se renderiza utilizando la biblioteca Three.js y permite al usuario rotarlo para verlo desde diferentes ángulos.
 */
function Landing() {
  const lamussu = useGLTF("/static/lamussu.glb");
  const polRef = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(
      polRef.current.position,
      {
        duration: 2,
        x: -1,
      },
      -3
    );
    tl.current.to(
      polRef.current.scale,
      {
        duration: 2,
        x: 0,
        y: 0,
        z: 0,
      },
      -3
    );
    tl.current.to(
      polRef.current.rotation,
      {
        duration: 2,
        _y: 0.2,
      },
      -3
    );
  }, []);

  return (
    <>
      <group position={0}>
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

        <Html position={[-4.5, 1, 3]}>
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
      </group>
    </>
  );
}
useGLTF.preload("/static/lamussu.glb");
export default Landing;
