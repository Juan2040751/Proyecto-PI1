import { Html, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import "../events/events.css";

export function ObjectTwo(props) {
    const { nodes, materials } = useGLTF("../static/clay_tablet.glb");
    return (
      <group {...props} dispose={null}>
        <group position={[0, -0.16, 2.38]} rotation={[-1.61, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials["Default_OBJ.001"]}
          />
        </group>
      </group>
    );
  }
  
  useGLTF.preload("../static/clay_tablet.glb");

  export default ObjectTwo;
  