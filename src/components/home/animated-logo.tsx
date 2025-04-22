import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

export const AnimatedLogo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 👇 Inversión del logo: dark theme → light logo | light theme → dark logo
  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/darkenergy-light.svg"
      : "/darkenergy-dark.svg";

  return (
    <div className="relative w-full max-w-[300px] xl:max-w-[506px] aspect-square mx-auto -mt-30 ">
      {/* Círculo animado */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        fill="transparent"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="gradient-stroke"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#121416" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
        </defs>

        <motion.circle
          cx="200"
          cy="200"
          r="110"
          stroke="url(#gradient-stroke)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 60],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>

      {/* Logo centrado encima del SVG */}
      <div className="absolute top-1/2 left-1/2 w-[35%] aspect-square transform -translate-x-1/2 -translate-y-1/2 z-10">
        {mounted && <img src={logoSrc} alt="Logo" className="object-contain" />}
      </div>
    </div>
  );
};
