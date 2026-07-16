"use client";

import { useEffect, useState } from "react";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import CTAButtons from "./CTAButtons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/95 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Left */}
        <div className="flex items-center gap-4">

          <MobileMenu />

          <Logo />

        </div>

        {/* Center */}
        <DesktopMenu />

        {/* Right */}
        <div className="flex items-center gap-3">

          <LanguageSwitcher />

          <CTAButtons />

        </div>

      </div>
    </header>
  );
}