import { Html, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import "../events/events.css";

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
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
  );
}
useGLTF.preload("../static/my_sumarian_soldier.glb");
export default Landing;
