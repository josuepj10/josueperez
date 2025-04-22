"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ParticlesContainer from "./particles-container";

import { motion } from "framer-motion";
import { AnimatedLogo } from "./animated-logo";
import { Button } from "../ui/button";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export const Hero = () => {
  const t = useTranslations();

  return (
    <section className="relative w-full h-screen flex overflow-hidden">
      <div className="absolute top-40  w-full">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center md:items-start font-mono gap-8 text-center md:text-left">
          {/* Bloque Izquierdo */}
          <div className="w-full md:w-1/2 text-center">
            <p className="text-sm md:text-base mb-2 text-[#e8ff00] tracking-widest uppercase">
              {t("Hero.role")}
            </p>

            <h1 className="text-4xl md:text-7xl font-bold mt-5">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      `${t("Hero.titlePrefix")}<br/><span class="font-bold">${t(
                        "Hero.name"
                      )}</span>`
                    )
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 75,
                }}
              />
            </h1>

            <p className="text-sm md:text-base mt-4 text-muted-foreground font-bold">
              {t("Hero.description")}
            </p>
          </div>
          {/* Bloque Derecho */}
          {/* <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <AnimatedLogo />
          </motion.div> */}
        </div>

        {/* <div className="max-w-screen-xl mx-auto flex justify-center md:justify-start mt-8">
          <Button className="bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition p-6 cursor-pointer">
            Get Started
          </Button>
        </div> */}
      </div>

      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-[#1eb3f7]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </div> */}

      {/* Partículas y logo centrado en pantallas medianas+ */}
      {/* <div className="ml-auto w-3/5 h-full pointer-events-none relative">
        <ParticlesContainer />
      </div> */}
    </section>
  );
};
