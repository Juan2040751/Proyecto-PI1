import { Html, useGLTF } from "@react-three/drei";
import React from "react";
import "../events/events.css";

export function ObjectTwo(props) {
    const { nodes, materials } = useGLTF("../static/arcilla_tablemit.glb");
    return (
      <group {...props} dispose={null}>
        <directionalLight
        castShadow
        shadow-normalBias={0.04}
        position={[1, 2, 3]}
        intensity={1.5}
      />
        <group position={[0, -0.16, 2.38]} rotation={[-1.61, 0, 0]}>
          <mesh
           scale={0.02}
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials["Default_OBJ.001"]}
          />
        </group>
        <Html position={[-4.5, 1, 3]}>

        <p
          style={{
            fontSize: 90,
            margin: 0,
            color: "black",
            fontFamily: "Tenor Sans, sans-serif",
          }}
        >
          La primera
        </p>
        <p
          style={{
            fontSize: 130,
            margin: 0,
            color: "black",
            fontFamily: "Tenor Sans, sans-serif",
          }}
        >
          Civilización
        </p>
      </Html>
      </group>
    );
  }
  
  useGLTF.preload("../static/arcilla_tablemit.glb");

  export default ObjectTwo;
  