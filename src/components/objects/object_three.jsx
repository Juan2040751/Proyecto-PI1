import { Html, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import "../events/events.css";

export function ObjectThree(props) {
    const { nodes, materials } = useGLTF("../static/standard_of_ur.glb");
    return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.StUr_01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.StUr_01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.StUr_01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.StUr_01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.StUr_01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.StUr_01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.StUr_01}
          />
        </group>
      </group>
    );
  }
  
  useGLTF.preload("../static/standard_of_ur.glb");
  export default ObjectThree;