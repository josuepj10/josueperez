"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Nav");

  return (
    <>
      {/* Botón animado */}
      <button
        className="md:hidden relative w-6 h-4 p-1 flex flex-col justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {/* Línea superior */}
        <span
          className={`absolute w-full h-0.5 bg-black dark:bg-white transition-transform duration-300 ${
            isOpen ? "rotate-45" : "-translate-y-1"
          }`}
        />
        {/* Línea inferior */}
        <span
          className={`absolute w-full h-0.5 bg-black dark:bg-white transition-transform duration-300 ${
            isOpen ? "-rotate-45" : "translate-y-1"
          }`}
        />
      </button>

      {/* Menú móvil alineado arriba a la izquierda */}
      {isOpen && (
        <div
          className="fixed top-16 left-0 w-full h-[calc(100vh-64px)] 
                  bg-background text-foreground 
                  z-50 flex flex-col items-start justify-start 
                  p-4 space-y-4 text-xl font-medium"
        >
          <Link href="/" onClick={() => setIsOpen(false)}>
            {t("home")}
          </Link>
          <Link href="/experience" onClick={() => setIsOpen(false)}>
            {t("experience")}
          </Link>
          <Link href="/work" onClick={() => setIsOpen(false)}>
            {t("work")}
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            {t("contact")}
          </Link>
        </div>
      )}
    </>
  );
};
