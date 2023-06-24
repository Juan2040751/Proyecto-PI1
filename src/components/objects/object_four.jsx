import { useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";
import Animation from "../animation";
import "../events/events.css";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

/**
 * Componente Object_four
 *
 * Este componente representa el objeto número cuatro de nuestro museo de objetos.
 * Este objeto 3d muestra una lista sumeria real.
 *
 * Forma parte de la historia de usuario PI1-14: Como usuario, espero que se
 * presenten algunos objetos de la cultura sumeria en tercera dimensión, para
 * poder admirar el objeto en diferentes ángulos.
 */

export function DescriptionFour() {
  <main className="app">
    <section className="hero">
      <h1>Lista Real Sumeria</h1>
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

export function ObjectFour(props) {
  const king_list = useLoader(
    GLTFLoader,
    "../static/the_sumerian_king_list.glb"
  );
  return (
    <group>
      <directionalLight
        castShadow
        shadow-normalBias={0.04}
        position={[1, 2, 3]}
        intensity={4}
      />
      <directionalLight
        castShadow
        shadow-normalBias={0.04}
        position={[1, 2, -3]}
        intensity={4}
      />
      <color attach="background" args={["#DC7633"]} />
      <Suspense fallback={<Animation />}>
        <primitive
          object={king_list.scene}
          scale={2}
          rotation-y={-10}
          position={[13, 8, -15]}
        />
      </Suspense>
    </group>
  );
}
