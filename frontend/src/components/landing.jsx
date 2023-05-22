import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
function Landing() {
  const lamussu = useGLTF("/static/lamussu.glb");
  const polRef = useRef();
  return (
    <>
      
    </>
  );
}
useGLTF.preload("/static/lamussu.glb");
export default Landing;
