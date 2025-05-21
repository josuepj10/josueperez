"use client";
import React, { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Html } from "@react-three/drei";
import {
  SiNextdotjs,
  SiNestjs,
  SiPhp,
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiTypescript,
  SiDotnet,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiAmazonwebservices,
  SiGithub,
  SiMoodle,
  SiFirebase,
  SiLinux,
} from "@icons-pack/react-simple-icons";
import { ZapIcon } from "lucide-react";

// Categorías de tecnologías con sus ítems
type IconType = React.ComponentType<{ size?: number; color?: string }>;
interface Category {
  name: string;
  items: IconType[];
}

const categories: Category[] = [
  { name: "Frameworks", items: [SiNextdotjs, SiNestjs, SiVuedotjs] },
  {
    name: "Libraries",
    items: [SiReact, SiTailwindcss, SiTypescript, SiBootstrap],
  },
  { name: "Backends & DB", items: [SiPhp, SiDotnet, SiMysql, SiPostgresql] },
  {
    name: "Cloud & DevOps",
    items: [SiAmazonwebservices, SiGithub, SiFirebase],
  },
  { name: "Platform & OS", items: [SiMoodle, SiLinux] },
];

export const Stacks: FC = () => (
  <div className="w-full h-[700px] relative flex flex-col items-center justify-center">
    <div className="w-full  flex items-center gap-2 px-4 lg:px-0">
      <ZapIcon className="w-4 h-4" />
      <h2 className="text-sm font-medium uppercase text-foreground dark:text-foreground">
        Stacks
      </h2>
    </div>
    {/* Hereda color de texto según tema */}
    <Canvas
      className="text-foreground dark:text-foreground"
      camera={{ position: [0, 0, 18], fov: 60 }}
    >
      {/* Iluminación suave */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={0.8} />

      {categories.map((category, rowIndex) => {
        const count = category.items.length;
        const spacing = 4.5;
        const rowY = 7 - rowIndex * 3;

        // Título de la categoría en la escena
        const titleHtml = (
          <Html
            key={`title-${category.name}`}
            position={[0, rowY + 1.3, 0]}
            transform
            center
          >
            <div className="text-foreground dark:text-foreground text-xl font-bold uppercase">
              {category.name}
            </div>
          </Html>
        );

        // Íconos usando currentColor para heredar del texto
        const iconsHtml = category.items.map((Icon, colIndex) => {
          const x = (colIndex - (count - 1) / 2) * spacing;
          return (
            <Float
              key={`${category.name}-${colIndex}`}
              speed={12}
              rotationIntensity={0}   // sin rotación para que solo flote
              floatIntensity={0.3}    // ligera flotación vertical
            >
              <Html
                position={[x, rowY, 0]}
                transform
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon size={56} color="currentColor" />
              </Html>
            </Float>
          );
        });

        return [titleHtml, ...iconsHtml];
      })}

      {/* Controles de cámara */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}      // permitir rotación manual
        autoRotate={false}       // desactivar auto-rotación
        minAzimuthAngle={-Math.PI / 4} // limitar a ±45°
        maxAzimuthAngle={Math.PI / 4}
      />
    </Canvas>
  </div>
);
