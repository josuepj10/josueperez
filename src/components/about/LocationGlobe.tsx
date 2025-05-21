// components/globe/LocationGlobe.tsx
"use client";

import createGlobe from "cobe";
import { MapPinIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { useSpring } from "@react-spring/web";

const LocationGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: { mass: 1, tension: 280, friction: 40, precision: 0.001 },
  }));

  useEffect(() => {
    let width = 400;
    let rotation = 0;

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.91, 1, 0],
      glowColor: [0.5, 0.5, 0.5],
      markers: [{ location: [9.984, -84.829], size: 0.1 }],
      scale: 1.0,
      onRender: (state) => {
        state.phi = rotation + r.get();
        rotation += 0.002; // velocidad más lenta
      },
    });

    return () => globe.destroy();
  }, [r]);

  return (
    <div className="flex flex-col items-center justify-center ">
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 200 });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 100 });
          }
        }}
        style={{
          width: 400,
          height: 400,
          maxWidth: "100%",
          aspectRatio: 1,
          cursor: "grab",
        }}
      />
    </div>
  );
};

export default LocationGlobe;
