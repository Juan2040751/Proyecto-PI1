import { Html, useGLTF, useScroll } from "@react-three/drei";


function Landing() {
  const guerrero = useGLTF("../static/my_sumarian_soldier.glb");

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
        object={guerrero.scene}
        scale={2}
        rotation-y={-0.2}
        position={[3, -2, -2.5]}
      />

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
      
    </>
  );
}
useGLTF.preload("../static/my_sumarian_soldier.glb");
export default Landing;
