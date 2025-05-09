import React from "react";

import { useTranslations } from "next-intl";
import LocationGlobe from "./LocationGlobe";
import { StacksBalls } from "./StacksBalls";


export const About = () => {
  const t = useTranslations("Nav"); // Traducciones del grupo "Nav"

  return (
    <div className="max-w-screen-xl mx-auto font-mono">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 ml-3 md:ml-0">
        {t("about")}.
      </h2>

      <LocationGlobe />

      <StacksBalls/>


    </div>
  );
};
