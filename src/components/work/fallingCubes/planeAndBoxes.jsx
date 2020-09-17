import * as THREE from "three";
import * as CANNON from "cannon";

import React, { useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import { useCannon, Provider } from "./useCannon";

function Plane({ position }) {
  // Register plane as a physics body with zero mass
  const ref = useCannon({ mass: 0 }, (body) => {
    body.addShape(new CANNON.Plane());
    body.position.set(...position);
  });
  return (
    <mesh ref={ref} receiveShadow>
      {/* <planeBufferGeometry attach="mat" args={[1000, 1000]} />
      <meshStandardMaterial attach="mat" color="#171717" /> */}
    </mesh>
  );
}

function Box({ position }) {
  // Register box as a physics body with mass
  const ref = useCannon({ mass: 100000 }, (body) => {
    body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)));
    body.position.set(...position);
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" roughness={0.5} color="#c2363d" />
    </mesh>
  );
}

export default function Animations() {
  const [showPlane, set] = useState(true);
  // When React removes (unmounts) the upper plane after 5 sec, objects should drop ...
  // This may seem like magic, but as the plane unmounts it removes itself from cannon and that's that
  useEffect(() => void setTimeout(() => set(false), 1000), []);
  return (
    <div className="cubesContainer">
      <Canvas
        shadowMap
        camera={{ position: [0, 0, 15] }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputEncoding = THREE.sRGBEncoding;
        }}
      >
        <pointLight position={[-10, -10, 30]} intensity={0.2} />
        <spotLight
          intensity={1}
          position={[100, 100, 80]}
          angle={0.1}
          penumbra={0.1}
          castShadow
        />
        <Provider>
          <Plane position={[-20, 10, -20]} />
          {showPlane && <Plane position={[0, 0, 0]} />}
          <Box position={[1, 0, 42]} />
          <Box position={[2, 1, 22]} />
          <Box position={[-20, -10, 10]} />
          <Box position={[-25, 12, 50]} />
          <Box position={[-26, 11.9, 10]} />
          <Box position={[-8, 6, 40]} />
          <Box position={[3, 4, 30]} />
          <Box position={[-20, -9, 20]} />
        </Provider>
      </Canvas>
    </div>
  );
}
