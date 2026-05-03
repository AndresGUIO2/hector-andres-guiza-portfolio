"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { socialLinks, personalInfo, languages, skills, extraSkills } from "@/data/profile";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import SocialIconLink from "@/components/atoms/SocialIconLink";
import Divider from "@/components/atoms/Divider";
import ProfileCard from "@/components/molecules/ProfileCard";
import InfoList from "@/components/molecules/InfoList";
import ProgressList from "@/components/molecules/ProgressList";
import ExtraSkillsList from "@/components/molecules/ExtraSkillsList";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Sticky header bar */}
      <header className="sticky top-0 z-30 h-[60px] bg-white shadow-sm px-4 flex items-center justify-between lg:hidden">
        <span className="text-dark font-medium text-[16px]">
          Héctor Güiza
        </span>
        <div className="flex items-center gap-3">
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
            className="ml-2 w-8 h-8 flex items-center justify-center text-dark"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes className="text-[20px]" /> : <FaBars className="text-[20px]" />}
          </button>
        </div>
      </header>

      {/* Sidebar overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />
          {/* Slide-out panel */}
          <div className="absolute left-0 top-0 w-[280px] h-full bg-white overflow-y-auto shadow-lg">
            <ProfileCard size="mobile" />
            <Divider />
            <InfoList items={personalInfo} compact />
            <Divider />
            <ProgressList items={languages} heading="Languages" compact />
            <Divider />
            <ProgressList items={skills} heading="Programming Languages" compact />
            <Divider />
            <ExtraSkillsList skills={extraSkills} compact />
          </div>
        </div>
      )}
    </>
  );
}
