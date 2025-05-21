// components/About.tsx
"use client";
import React from "react";
import { useTranslations } from "next-intl";
import LocationGlobe from "./LocationGlobe";

import { Card, CardContent } from "@/components/ui/card";
import { TechStacksSection } from "./Stacks";

export const About = () => {
  const t = useTranslations("Nav");

  return (
    <div className="max-w-screen-xl mx-auto font-mono">
      <h2 className="text-2xl md:text-4xl font-bold mb-8">{t("about")}.</h2>
      <LocationGlobe />

      <TechStacksSection />
    </div>
  );
};
