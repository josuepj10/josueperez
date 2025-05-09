"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Preload,
  Decal,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "./Loader";

type BallProps = { imgUrl: string };

const Ball: React.FC<BallProps> = React.memo(({ imgUrl }) => {
  // Carga y cachea la textura de la imagen
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[Math.PI * 2, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
});

type BallCanvasProps = { icon: string };

const BallCanvas: React.FC<BallCanvasProps> = React.memo(({ icon }) => (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        // Permite inclinar de 0° (mirar arriba) a 180° (mirar abajo)
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
      />
      <Ball imgUrl={icon} />
    </Suspense>
    <Preload all />
  </Canvas>
));

export const StacksBalls: React.FC = () => {
  const icons: string[] = [
    "/assets/icons/nextdotjs.svg",
    "/assets/icons/nestjs.svg",
    "/assets/icons/php.svg",
    "/assets/icons/react.svg",
    "/assets/icons/vuedotjs.svg",
    "/assets/icons/tailwindcss.svg",
    "/assets/icons/typescript.svg",
    "/assets/icons/dotnet.svg",
    "/assets/icons/bootstrap.svg",
    "/assets/icons/mysql.svg",
    "/assets/icons/postgresql.svg",
    "/assets/icons/amazonwebservices.svg",
    "/assets/icons/github.svg",
    "/assets/icons/moodle.svg",
    "/assets/icons/firebase.svg",
    // "/assets/icons/linux.svg",
    // Agrega más iconos si lo deseas
  ];

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10" id="stacks">
      {icons.map((icon, index) => (
        <div key={index} className="w-25 h-25">
          <BallCanvas icon={icon} />
        </div>
      ))}
    </div>
  );
};
