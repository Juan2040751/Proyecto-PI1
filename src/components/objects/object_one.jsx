import { useGLTF } from "@react-three/drei";
import React from "react";
import "../events/events.css";

export function ObjectOne(props) {
  const { nodes, materials } = useGLTF("../static/the_sumerian_king_list.glb");
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

useGLTF.preload("../static/the_sumerian_king_list.glb");

export default ObjectOne;
