import { Html, useGLTF } from "@react-three/drei";
import "../events/events.css";
import { Suspense } from "react";
import Animation from "../animation";

/**
 * Componente Object_one
 *
 * Este componente representa el objeto número uno de nuestro museo de objeto.
 * Este objeto 3d muestra un soldado sumerio.
 *
 * Forma parte de la historia de usuario PI1-14: Como usuario, espero que se
 * presenten algunos objetos de la cultura sumeria en tercera dimensión, para
 * poder admirar el objeto en diferentes ángulos.
 */
export function DescriptionOne() {
  <main className="app">
    <section className="hero">
      <h1>Soldado Sumerio</h1>
      <p>
        La Lista Real Sumeria es una lista de reyes de la antigua Mesopotamia
        escrita en lengua sumeria grabada en escritura cuneiforme, sobreviviente
        en varios documentos y artefactos arqueológicos de los cuales el mejor
        conservado es un prisma de barro cocido encontrado en la ciudad sumeria
        de Larsa en 1922 (Prisma de Weld-Blundell). Su datación corresponde a
        finales de la dinastía de Isin (c. 1817 a. C.). Su ejemplar más tardío
        es la transcripción de la lista en la "Historia Babilónica" de Beroso
        (s. III a. C.) <br />
        <br />
        La lista divide a los reyes en antediluvianos (con reinados de
        inverosímil longevidad) considerados míticos por los historiadores, y
        pos-diluvianos. El primer rey mencionado cuya existencia es reflejada en
        documentos fuera de la lista es Mebaragesi de Kish, contemporáneo de
        Gilgamesh. El primer gobernante de la lista que es claramente histórico
        es Lugalzagesi de Umma del siglo XXIV a. C., quien conquistara Lagash,
        que a su vez fue conquistada por Sargón de Acadia.
      </p>
    </section>
  </main>;
}

export function ObjectOne() {
  const guerrero = useGLTF("../static/my_sumarian_soldier.glb");

  return (
    <>
      <Html position={[0, 0, 3]}></Html>

      <group position={[1, -1.5, -2]}>
        <directionalLight
          castShadow
          shadow-normalBias={0.04}
          position={[0, 2, 3]}
          intensity={1.5}
        />

        <directionalLight
          castShadow
          shadow-normalBias={0.04}
          position={[1, 0, -3]}
          intensity={1.5}
        />
        <color attach="background" args={["#DC7633"]} />
        <Suspense fallback={<Animation />}>
          <primitive
            object={guerrero.scene}
            scale={2}
            rotation-y={-0.2}
            position={[0, 0, 0]}
          />
        </Suspense>
      </group>
    </>
  );
}
useGLTF.preload("../static/my_sumarian_soldier.glb");
