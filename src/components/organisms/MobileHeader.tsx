"use client";

import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { socialLinks } from "@/data/profile";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import SocialIconLink from "@/components/atoms/SocialIconLink";
import ProfileCard from "@/components/molecules/ProfileCard";
import SidebarSkills from "@/components/molecules/SidebarSkills";

/**
 * Renders the mobile header — an atomic-design organism that composes
 * ProfileCard and SidebarSkills molecules with social links and a theme toggle in
 * a hamburger-triggered slide-out drawer. Replaces both sidebars on
 * small/medium screens.
 */
export default function MobileHeader() {
  /** Tracks whether the slide-out navigation drawer is open */
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawerRef.current?.querySelector("button")?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
      }
      if (event.key !== "Tab") return;
      const controls = Array.from(
        drawerRef.current?.querySelectorAll<HTMLElement>("button, summary, a[href]") ?? [],
      ).filter((element) => element.getClientRects().length > 0);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [menuOpen]);

  return (
    <>
      {/* Sticky header bar */}
      <header className="sticky top-0 z-30 h-[60px] bg-white shadow-sm px-4 flex items-center justify-between gap-2 lg:hidden">
        <span className="text-dark font-medium text-[14px] sm:text-[16px] truncate">
          Héctor Güiza
        </span>
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {socialLinks.map((link) => (
            <SocialIconLink
              key={link.name}
              icon={link.icon}
              href={link.href}
              name={link.name}
              size="sm"
            />
          ))}
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 flex items-center justify-center text-dark"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-profile"
          >
            {menuOpen ? <FaTimes className="text-[20px]" /> : <FaBars className="text-[20px]" />}
          </button>
        </div>
      </header>

      {/* Sidebar overlay — rendered conditionally when the drawer is open */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Semi-transparent backdrop; clicking it closes the drawer */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />
          {/* Slide-out panel containing the same content as LeftSidebar */}
          <div ref={drawerRef} id="mobile-profile" role="dialog" aria-modal="true" aria-label="Profile and skills" className="absolute left-0 top-0 w-[280px] max-w-full h-full bg-white overflow-y-auto shadow-lg pb-8">
            <button type="button" aria-label="Close profile" onClick={() => setMenuOpen(false)} className="absolute right-3 top-3 w-8 h-8 flex items-center justify-center text-secondary focus-visible:outline-2 focus-visible:outline-accent">
              <FaTimes aria-hidden="true" />
            </button>
            <ProfileCard size="mobile" />
            <SidebarSkills />
            <div className="flex items-center justify-between px-6 pt-4">
              <span className="text-secondary text-[14px]">Appearance</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
