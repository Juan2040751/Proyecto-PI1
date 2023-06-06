import { Html, useGLTF, useScroll, OrbitControls } from "@react-three/drei";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState } from "react";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useSpring, a, config } from "@react-spring/three";
import "./objects.css";

// extend({ OrbitControls });

// const sizes = {
//   width: window.innerWidth,
//   height: window.innerHeight,
// };

// const Controls = () => {
//   const orbitRef = useRef();
//   const { camera, gl } = useThree();
//   useFrame(() => {
//     orbitRef.current.update();
//   });

//   return (
//     <OrbitControls
//       autoRotate
//       maxPolarAngle={Math.PI / 3}
//       minPolarAngle={Math.PI / 3}
//       args={[camera, gl.domElement]}
//       ref={orbitRef}
//     />
//   );
// };

export function texto() {
  return (
    <Html>
      <div>
        <h1>Objeto Uno</h1>
      </div>
    </Html>
  );
}

export function ObjectOne(props) {
  const { nodes, materials } = useGLTF("../static/the_sumerian_king_list.glb");
  return (
    <Canvas
      flat
      color="CB4154"
      shadows
      camera={{
        position: [6, 0, 0],
      }}
    >
      <group {...props}>
        <group position={(0, 1, 1)}>
          <directionalLight
            castShadow
            shadow-normalBias={0.04}
            position={[0, -3, 3]}
            intensity={1.5}
          />
          <OrbitControls enablePan enableRotate enableZoom reverseOrbit />
          
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials["The_Sumerian_King_List_250k_faces.1001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials["The_Sumerian_King_List_250k_faces.1001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["The_Sumerian_King_List_250k_faces.1001"]}
          />
        </group>
      </group>
    </Canvas>
  );
}

useGLTF.preload("../static/the_sumerian_king_list.glb");

export default ObjectOne;
