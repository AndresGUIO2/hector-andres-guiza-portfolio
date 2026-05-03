"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

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
  // Defaults to dark mode until the saved preference is read
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setDark(false);
    } else {
      // Ensure the "dark" class is present when no explicit light preference exists
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    // Persist the new theme so it survives page reloads
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
