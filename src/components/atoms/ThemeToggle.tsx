"use client";

import { useEffect, useSyncExternalStore } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("portfolio-theme-change", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("portfolio-theme-change", onChange);
  };
}

function getTheme() {
  return localStorage.getItem("theme") !== "light";
}

function getServerTheme() {
  return true;
}

/**
 * Props for the ThemeToggle atom component.
 */
interface ThemeToggleProps {
  /** Controls the button dimensions — "md" is larger for hero areas, "sm" for navbars */
  size?: "sm" | "md";
}

/**
 * ThemeToggle — atomic design atom (smallest reusable unit).
 * Renders a sun/moon button that toggles between dark and light mode.
 * Persists the user preference in localStorage and applies the "dark"
 * class on the <html> element for Tailwind dark-mode support.
 * Used in the Navbar organism.
 */
export default function ThemeToggle({ size = "sm" }: ThemeToggleProps) {
  const dark = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  function toggle() {
    const next = !dark;
    localStorage.setItem("theme", next ? "dark" : "light");
    window.dispatchEvent(new Event("portfolio-theme-change"));
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
