// import * as THREE from "three";
// import React, { useEffect, useState } from "react";
// import { Canvas } from "react-three-fiber";
// import { useSprings, a } from "react-spring/three";

// const number = 50;
// const colors = [
//   "#a33035",
//   "#1c6274",
//   "#0d404d",
//   "#5fa55f",
//   "#ce5e13",
//   "#c0b518",
//   "#8b1e55",
//   "#cc0e0e",
// ];
// const random = (i) => {
//   const r = Math.random();
//   return {
//     position: [200 - Math.random() * 300, 100 - Math.random() * 300, i * 1.5],
//     color: colors[Math.round(Math.random() * (colors.length - 1))],
//     scale: [1 + r * 2, 1 + r * 5, 1],
//     rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)],
//   };
// };

// const data = new Array(number).fill().map(() => {
//   return {
//     color: colors[Math.round(Math.random() * (colors.length - 1))],
//     args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],
//   };
// });

// function Content() {
//   const [hovered, setHover] = useState(false);
//   const [springs, set] = useSprings(number, (i) => ({
//     from: random(i),
//     ...random(i),
//     config: { mass: 30, tension: 100, friction: 35 },
//   }));
//   useEffect(
//     () =>
//       void setInterval(
//         () => set((i) => ({ ...random(i), delay: i * 40 })),
//         9000
//       ),
//     []
//   );
//   return data.map((d, index) => (
//     <a.mesh
//       key={index}
//       {...springs[index]}
//       castShadow
//       receiveShadow
//       onPointerOver={(e) => setHover(true)}
//       onPointerOut={(e) => setHover(false)}
//     >
//       <boxBufferGeometry attach="geometry" args={d.args} />
//       <a.meshStandardMaterial
//         attach="material"
//         roughness={0.75}
//         metalness={0.5}
//         color={hovered ? "hotpink" : springs[index].color}
//       />
//     </a.mesh>
//   ));
// }

// function Lights() {
//   return (
//     <group>
//       <pointLight intensity={0.3} />
//       <ambientLight intensity={2} />
//       <spotLight
//         castShadow
//         intensity={0.2}
//         angle={Math.PI / 7}
//         position={[150, 150, 250]}
//         penumbra={1}
//         shadow-mapSize-width={2048}
//         shadow-mapSize-height={2048}
//       />
//     </group>
//   );
// }

// export default function Animations() {
//   return (
//     <div className="cubesContainer">
//       <Canvas shadowMap camera={{ position: [0, 0, 100], fov: 210 }}>
//         <Lights />
//         <Content />
//       </Canvas>
//     </div>
//   );
// }

import ReactDOM from "react-dom";
import * as THREE from "three";
import React, { useState, useRef } from "react";
import { extend, Canvas, useFrame } from "react-three-fiber";
import * as meshline from "three.meshline";
// import "./styles.css";

extend(meshline);

const numLines = 20;
const lines = new Array(numLines).fill();
const colors = ["#7d0633", "#31112c", "#f2a07b", "#fbdcc4"];

function Fatline() {
  const material = useRef();
  const [color] = useState(
    () => colors[parseInt(colors.length * Math.random())]
  );
  const [ratio] = useState(() => 0.5 + 0.5 * Math.random());
  const [width] = useState(() => Math.max(0.1, 0.3 * Math.random()));
  // Calculate wiggly curve
  const [curve] = useState(() => {
    let pos = new THREE.Vector3(
      30 - 60 * Math.random(),
      -5,
      10 - 20 * Math.random()
    );
    return new Array(30)
      .fill()
      .map(() =>
        pos
          .add(
            new THREE.Vector3(
              2 - Math.random() * 4,
              4 - Math.random() * 2,
              5 - Math.random() * 10
            )
          )
          .clone()
      );
  });
  useFrame(() => (material.current.uniforms.dashOffset.value -= 0.0005));
  return (
    <mesh>
      <meshLine onUpdate={(self) => (self.parent.geometry = self.geometry)}>
        <geometry onUpdate={(self) => self.parent.setGeometry(self)}>
          <catmullRomCurve3
            args={[curve]}
            onUpdate={(self) => (self.parent.vertices = self.getPoints(500))}
          />
        </geometry>
      </meshLine>
      <meshLineMaterial
        attach="material"
        ref={material}
        transparent
        depthTest={false}
        lineWidth={width}
        color={color}
        dashArray={0.1}
        dashRatio={ratio}
      />
    </mesh>
  );
}

function Scene() {
  let group = useRef();
  let theta = 0;
  useFrame(() =>
    group.current.rotation.set(
      0,
      5 * Math.sin(THREE.Math.degToRad((theta += 0.02))),
      0
    )
  );
  return (
    <group ref={group}>
      {lines.map((_, index) => (
        <Fatline key={index} />
      ))}
    </group>
  );
}

export default function Animations() {
  return (
    <Canvas
      style={{ background: "black" }}
      camera={{ position: [0, 50, 10], fov: 75 }}
    >
      <Scene />
    </Canvas>
  );
}
