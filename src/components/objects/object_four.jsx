import { Html,useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import "../events/events.css";


export function ObjectFour(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("../static/my_sumarian_soldier.glb");
    const { actions } = useAnimations(animations, group);
    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="Root">
              <group
                name="skeleton_human_male"
                position={[-0.44, -0.16, -0.1]}
                rotation={[0, 0, 0.24]}
              >
                <primitive object={nodes.skeleton_human_male_rootJoint} />
                <group name="1494816538320438" position={[0, 0.02, 0]} />
                <skinnedMesh
                  name="1494816538320438_1"
                  geometry={nodes["1494816538320438_1"].geometry}
                  material={materials["matB.001"]}
                  skeleton={nodes["1494816538320438_1"].skeleton}
                />
                <skinnedMesh
                  name="1494816538320438_3"
                  geometry={nodes["1494816538320438_3"].geometry}
                  material={materials["human_eyes1494816538.320438"]}
                  skeleton={nodes["1494816538320438_3"].skeleton}
                />
                <skinnedMesh
                  name="1494816538320438_5"
                  geometry={nodes["1494816538320438_5"].geometry}
                  material={materials["Teeth.001"]}
                  skeleton={nodes["1494816538320438_5"].skeleton}
                />
                <skinnedMesh
                  name="1494816538320438_0"
                  geometry={nodes["1494816538320438_0"].geometry}
                  material={materials["human_skin1494816538.320438"]}
                  skeleton={nodes["1494816538320438_0"].skeleton}
                />
                <skinnedMesh
                  name="1494816538320438_2"
                  geometry={nodes["1494816538320438_2"].geometry}
                  material={materials["cornea.001"]}
                  skeleton={nodes["1494816538320438_2"].skeleton}
                />
                <skinnedMesh
                  name="1494816538320438_4"
                  geometry={nodes["1494816538320438_4"].geometry}
                  material={materials["Fur.001"]}
                  skeleton={nodes["1494816538320438_4"].skeleton}
                />
              </group>
              <group
                name="Lamp"
                position={[4.08, 1.01, 5.9]}
                rotation={[-0.27, 0.6, 1.93]}
              >
                <group name="Lamp_1" />
              </group>
              <group
                name="Lamp_back"
                position={[-1.05, 0.76, 0.21]}
                rotation={[-2.34, -0.62, -1.22]}
                scale={0.1}
              >
                <group name="Lamp_back_1" />
              </group>
              <group
                name="Lamp_top"
                position={[0.22, -1.4, 3]}
                rotation={[0.74, 0.06, 2.53]}
                scale={0.1}
              >
                <group name="Lamp_top_1" />
              </group>
              <group
                name="Lamp_right"
                position={[-1.12, -0.04, 1.81]}
                rotation={[-0.08, -1.24, 1.11]}
                scale={0.1}
              >
                <group name="Lamp_right_1" />
              </group>
              <group
                name="Lamp_left"
                position={[0.86, -0.69, 1.81]}
                rotation={[1.06, 0.85, -3.12]}
                scale={0.1}
              >
                <group name="Lamp_left_1" />
              </group>
              <group
                name="Mesh001"
                position={[-0.12, 0.08, -0.1]}
                rotation={[0, 0, 0.24]}
              >
                <mesh
                  name="Mesh001_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh001_0.geometry}
                  material={materials["Material.008"]}
                />
                <mesh
                  name="Mesh001_0_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh001_0_1.geometry}
                  material={materials["Material.008"]}
                />
                <mesh
                  name="Mesh001_0_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh001_0_2.geometry}
                  material={materials["Material.008"]}
                />
              </group>
              <group
                name="Cylinder"
                position={[-0.18, -0.16, 1.37]}
                rotation={[2.89, -0.7, -0.39]}
                scale={[-0.07, 0.07, 0.07]}
              >
                <mesh
                  name="Cylinder_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder_0.geometry}
                  material={materials["Material.010"]}
                />
              </group>
              <group
                name="Cylinder001"
                position={[-0.65, -0.26, 1.35]}
                rotation={[-2.94, 0.63, -0.14]}
                scale={[-0.07, 0.07, 0.07]}
              >
                <mesh
                  name="Cylinder001_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder001_0.geometry}
                  material={materials["Material.010"]}
                />
              </group>
              <group
                name="Sphere033"
                position={[-0.38, -0.33, 1.5]}
                rotation={[0.01, 0.01, 0.29]}
                scale={0.11}
              >
                <mesh
                  name="Sphere033_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere033_0.geometry}
                  material={materials["Material.011"]}
                />
                <mesh
                  name="Sphere033_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere033_1.geometry}
                  material={materials["Material.012"]}
                />
                <mesh
                  name="Sphere033_1_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere033_1_1.geometry}
                  material={materials["Material.012"]}
                />
              </group>
              <group
                name="Cylinder003"
                position={[-0.41, -0.16, 0.76]}
                rotation={[0.07, 0.02, 0.24]}
                scale={0.16}
              >
                <mesh
                  name="Cylinder003_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder003_0.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Cylinder003_0_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder003_0_1.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Cylinder003_0_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder003_0_2.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Sun"
                position={[-0.04, -3.5, 5.52]}
                rotation={[0.59, 0.01, 0.02]}
              >
                <group name="Sun_1" />
              </group>
              <group
                name="Cylinder005"
                position={[-0.51, -0.4, 1.24]}
                rotation={[-1.69, -0.08, 0.19]}
                scale={[-0.09, 0.09, 0.09]}
              >
                <mesh
                  name="Cylinder005_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder005_1.geometry}
                  material={materials["Material.003"]}
                />
                <mesh
                  name="Cylinder005_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder005_2.geometry}
                  material={materials["Material.004"]}
                />
                <mesh
                  name="Cylinder005_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder005_0.geometry}
                  material={materials["Material.010"]}
                />
              </group>
              <group
                name="Plane"
                position={[-0.72, -0.57, 1.61]}
                rotation={[1.56, 0.24, 0.21]}
                scale={0.07}
              >
                <mesh
                  name="Plane_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane_0.geometry}
                  material={materials["Material.013"]}
                />
                <mesh
                  name="Plane_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane_1.geometry}
                  material={materials["Material.014"]}
                />
              </group>
              <group
                name="Cylinder002"
                position={[-0.17, -0.24, 0.81]}
                rotation={[2.88, 0.02, -3.12]}
                scale={0.05}
              >
                <mesh
                  name="Cylinder002_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder002_1.geometry}
                  material={materials["Material.016"]}
                />
                <mesh
                  name="Cylinder002_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder002_0.geometry}
                  material={materials["Material.015"]}
                />
                <mesh
                  name="Cylinder002_0_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder002_0_1.geometry}
                  material={materials["Material.015"]}
                />
              </group>
              <group name="Point002" position={[-0.73, 0.42, 1.45]}>
                <group name="Point002_1" />
              </group>
              <group
                name="Sun001"
                position={[0.6, 1.37, 0.59]}
                rotation={[-0.51, 0, 1.56]}
                scale={0.1}
              >
                <group name="Sun001_1" />
              </group>
              <group
                name="Sun002"
                position={[-0.52, -1.15, 0.13]}
                rotation={[0.38, -0.17, 1.37]}
                scale={0.06}
              >
                <group name="Sun002_1" />
              </group>
            </group>
          </group>
        </group>
      </group>
    );
  }
  
  useGLTF.preload("../static/my_sumarian_soldier.glb");
  export default ObjectFour;