'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Html } from '@react-three/drei';
import Image from 'next/image';

const icons = [
  { src: '/nextdotjs.svg', alt: 'Next.js' },
  { src: '/icons/tailwind.svg', alt: 'Tailwind CSS' },
  { src: '/icons/aws.svg', alt: 'AWS' },
  { src: '/icons/nodejs.svg', alt: 'Node.js' },
];

const IconTag = ({ src, alt, position }: any) => (
  <Float speed={2} rotationIntensity={1} floatIntensity={3} position={position}>
    <Html center>
      <Image src={src} alt={alt} width={40} height={40} />
    </Html>
  </Float>
);

export const TechIcons3D = () => {
  return (
    <div className="w-full h-96 md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />

        {/* Posicionamiento alrededor de un círculo imaginario */}
        {icons.map((icon, i) => {
          const angle = (i / icons.length) * Math.PI * 2;
          const x = Math.cos(angle) * 1.5;
          const y = Math.sin(angle) * 1.5;
          return <IconTag key={i} src={icon.src} alt={icon.alt} position={[x, y, 0]} />;
        })}
      </Canvas>
    </div>
  );
};
