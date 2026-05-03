"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

interface ThemeToggleProps {
  size?: "sm" | "md";
}

export default function ThemeToggle({ size = "sm" }: ThemeToggleProps) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  const isMd = size === "md";

  return (
    <button
      onClick={toggle}
      className={`${isMd ? "w-12 h-12" : "w-8 h-8"} rounded-full bg-accent flex items-center justify-center text-white hover:bg-[#1d4ed8] transition-colors cursor-pointer`}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark
        ? <FaSun className={isMd ? "text-[18px]" : "text-[14px]"} />
        : <FaMoon className={isMd ? "text-[18px]" : "text-[14px]"} />
      }
    </button>
  );
}
