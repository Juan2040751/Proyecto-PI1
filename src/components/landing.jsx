import { Html, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import gsap from "gsap";
import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import Animation from "./animation";
import "./events/events.css";
/**
 * Componente Landing
 *
 * Este archivo representa la página principal de la aplicación,
 * que recibe a los usuarios después de iniciar sesión. Cumple con los requisitos de la Historia de Usuario PI1-16,
 * donde se solicita la presencia de un objeto 3D destacando la cultura de la civilización sumeria en la página de inicio.
 */
function Landing({ reference, setScroll, session, setSession }) {
  //const { width, height } = useThree((state) => state.viewport);
  const lamussu = useGLTF("/static/lamussu.glb");
  const polRef = useRef();
  const scroll = useScroll();
  const tl = useRef();
  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
    setScroll(scroll.scroll.current);
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(
      polRef.current.position,
      {
        duration: 1,
        x: -1,
      },
      -3
    );
    tl.current.to(
      polRef.current.scale,
      {
        duration: 1,
        x: 0,
        y: 0,
        z: 0,
      },
      -3
    );
    tl.current.to(
      polRef.current.rotation,
      {
        duration: 1,
        _y: 0.2,
      },
      -3
    );
  }, []);
  useEffect(() => {
    if (
      session !== null &&
      scroll.scroll.current === 0 &&
      session?.lastPage !== "Landing"
    ) {
      console.log(session);
      setSession({ ...session, lastPage: "Landing" });
    }
  }, [scroll.scroll.current]);
  return (
    <>
      <group>
        <Html position={[0, 5, 0]} ref={reference} scale={0} />
        <directionalLight
          castShadow
          shadow-normalBias={0.04}
          position={[1, 2, 3]}
          intensity={1.5}
        />

        <color attach="background" args={["#DC7633"]} />
        <Suspense fallback={<Animation />}>
          <primitive
            ref={polRef}
            object={lamussu.scene}
            scale={0.3}
            rotation-y={-0.2}
            position={[4, -2.5, -2.5]}
          />
        </Suspense>
        <Html
          fullscreen
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1 className="Landing-title-1">La Primera</h1>
          <h1 className="Landing-title-2">Civilización</h1>
        </Html>
      </group>
    </>
  );
}
useGLTF.preload("/static/lamussu.glb");
export default Landing;
