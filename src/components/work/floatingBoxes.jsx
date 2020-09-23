import * as THREE from "three";
import React, { useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import { useSprings, a } from "react-spring/three";

const number = 50;
const colors = [
  "#a33035",
  "#1c6274",
  "#0d404d",
  "#5fa55f",
  "#ce5e13",
  "#c0b518",
  "#8b1e55",
  "#cc0e0e",
];
const random = (i) => {
  const r = Math.random();
  return {
    position: [200 - Math.random() * 300, 100 - Math.random() * 300, i * 1.5],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 2, 1 + r * 5, 1],
    rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)],
  };
};

const data = new Array(number).fill().map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],
  };
});

function Content() {
  const [hovered, setHover] = useState(false);
  const [springs, set] = useSprings(number, (i) => ({
    from: random(i),
    ...random(i),
    config: { mass: 30, tension: 100, friction: 35 },
  }));
  useEffect(
    () =>
      void setInterval(
        () => set((i) => ({ ...random(i), delay: i * 40 })),
        9000
      ),
    []
  );
  return data.map((d, index) => (
    <a.mesh
      key={index}
      {...springs[index]}
      castShadow
      receiveShadow
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={d.args} />
      <a.meshStandardMaterial
        attach="material"
        roughness={0.75}
        metalness={0.5}
        color={hovered ? "hotpink" : springs[index].color}
      />
    </a.mesh>
  ));
}

function Lights() {
  return (
    <group>
      <pointLight intensity={0.3} />
      <ambientLight intensity={2} />
      <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 7}
        position={[150, 150, 250]}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </group>
  );
}

export default function Animations() {
  return (
    <div className="cubesContainer">
      <Canvas shadowMap camera={{ position: [0, 0, 100], fov: 210 }}>
        <Lights />
        <Content />
      </Canvas>
    </div>
  );
}
