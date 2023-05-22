import { Canvas } from "@react-three/fiber";
import React from 'react';
import Landing from './components/landing';
function App() {
    return (
        <Canvas
            flat
            color="CB4154"
            shadows
            camera={{
                position: [2, 0, 6],
            }}
        >
            <Landing />
        </Canvas>
    )
}

export default App
