"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ParticlesContainer from "./particles-container";

import { motion } from "framer-motion";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export const Hero = () => {
  const t = useTranslations();

  return (
    <section className="relative w-full h-screen flex overflow-hidden">
      {/* Texto principal */}
      <div className="absolute top-40 left-0 w-full z-10">
        <div className="max-w-screen-xl mx-auto px-4 font-mono">
          <p className="text-sm md:text-base mb-2 text-[#1eb3f7] tracking-widest uppercase">
            {t("Hero.role")}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `${t(
                      "Hero.titlePrefix"
                    )}<br/><span class="bg-gradient-to-r from-[#7a64fa] to-[#1eb3f7] bg-clip-text text-transparent font-bold">${t(
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

          <p className="text-sm md:text-base mt-4 max-w-md text-muted-foreground">
            {t("Hero.description")}
          </p>
        </div>
      </div>

      {/* Partículas y logo centrado en pantallas medianas+ */}
      <div className="ml-auto w-3/5 h-full pointer-events-none relative">
        <ParticlesContainer />
      </div>
    </section>
  );
};
