'use client';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine, Container, ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "next-themes";

const ParticlesContainer = () => {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log("Particles loaded", container);
  };

  // Definimos los colores dependiendo del tema
  const particleColor = resolvedTheme === "dark" ? "#ffffff" : "#000000";
  const linkColor = resolvedTheme === "dark" ? "#ffffff" : "#000000";

  const options: ISourceOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: {
      color: {
        value: "",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        push: {
          quantity: 90,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: particleColor,
      },
      links: {
        color: linkColor,
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 0.5,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          width: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  }), [particleColor, linkColor]);

  if (!init) return null;

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      options={options}
      particlesLoaded={particlesLoaded}
    />
  );
};

export default ParticlesContainer;
