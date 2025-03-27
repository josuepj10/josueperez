"use client";

import { Navbar } from "./navbar";
import { MobileNav } from "./mobile-nav";
import { ModeSwitcher } from "./mode-switcher";
import { LanguajeSwitcher } from "./languaje-switcher";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Header = () => {
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
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-md border-b"
    >
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          {mounted && <img src={logoSrc} alt="Logo" className="h-10 w-auto" />}
        </Link>

        {/* Navbar desktop */}
        <Navbar />

        {/* Controles móviles */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeSwitcher />
          <LanguajeSwitcher />
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
};
