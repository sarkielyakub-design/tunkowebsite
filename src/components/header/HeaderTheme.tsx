"use client";

import { Moon, Sun } from "lucide-react";

export default function HeaderTheme() {
  /*
   * Later:
   *
   * const { theme, toggleTheme } = useThemeStore();
   */

  const theme = "light";

  const toggleTheme = () => {
    console.log("Toggle Theme");
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-200
        hover:bg-slate-100
      "
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-slate-600" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-500" />
      )}
    </button>
  );
}