"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const socialLinks = [
  { name: "GitHub", icon: FaGithub, href: "https://github.com/AndresGUIO2" },
  { name: "LinkedIn", icon: FaLinkedin, href: "#" },
  { name: "Email", icon: FaEnvelope, href: "mailto:handres.guor@gmail.com" },
];

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
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white"
              title={link.name}
            >
              <link.icon className="text-[14px]" />
            </a>
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
            {/* Profile */}
            <div className="flex flex-col items-center pt-[30px] px-8">
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
                <img src="/images/profile.png" alt="Héctor Güiza" className="w-full h-full object-cover" />
              </div>
              <h2 className="mt-4 text-dark text-[16px] font-medium capitalize">
                Héctor Andrés Güiza
              </h2>
              <p className="text-secondary text-[14px] capitalize mt-1">
                Full Stack Developer
              </p>
            </div>

            <div className="divider mt-4" />

            {/* About */}
            <div className="px-8">
              <div className="flex justify-between text-[14px] py-1">
                <span className="text-dark capitalize">Age:</span>
                <span className="text-dark capitalize">23</span>
              </div>
              <div className="flex justify-between text-[14px] py-1">
                <span className="text-dark capitalize">Residence:</span>
                <span className="text-dark capitalize">Colombia</span>
              </div>
              <div className="flex justify-between text-[14px] py-1">
                <span className="text-dark capitalize">Freelance:</span>
                <span className="text-available capitalize">Available</span>
              </div>
              <div className="flex justify-between text-[14px] py-1">
                <span className="text-dark capitalize">Address:</span>
                <span className="text-dark capitalize">Medellín, Colombia</span>
              </div>
            </div>

            <div className="divider" />

            {/* Languages */}
            <div className="px-8">
              <h3 className="text-dark text-[16px] font-medium capitalize mb-3">Languages</h3>
              <div className="mb-2">
                <div className="flex justify-between text-[13px] text-secondary capitalize">
                  <span>Spanish</span><span>100%</span>
                </div>
                <div className="progress-track mt-1"><div className="progress-fill" style={{ width: "98%" }} /></div>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-[13px] text-secondary capitalize">
                  <span>English</span><span>80%</span>
                </div>
                <div className="progress-track mt-1"><div className="progress-fill" style={{ width: "78%" }} /></div>
              </div>
            </div>

            <div className="divider" />

            {/* Skills */}
            <div className="px-8">
              <h3 className="text-dark text-[16px] font-medium capitalize mb-3">Programming Languages</h3>
              {[
                { name: "Python", level: 80 },
                { name: "JavaScript", level: 80 },
                { name: "TypeScript", level: 60 },
                { name: "Java", level: 60 },
                { name: "HTML/CSS", level: 60 },
                { name: "C++", level: 40 },
              ].map((skill) => (
                <div key={skill.name} className="mb-2">
                  <div className="flex justify-between text-[13px] text-secondary capitalize">
                    <span>{skill.name}</span><span>{skill.level}%</span>
                  </div>
                  <div className="progress-track mt-1"><div className="progress-fill" style={{ width: `${skill.level - 2}%` }} /></div>
                </div>
              ))}
            </div>

            <div className="divider" />

            {/* Extra Skills */}
            <div className="px-8 pb-6">
              <h3 className="text-dark text-[16px] font-medium capitalize mb-3">Extra Skills</h3>
              {["Apache Spark", "PostgreSQL", "Microsoft Fabric", "FastAPI", "Next.js", "Git"].map((skill) => (
                <div key={skill} className="flex items-center gap-2 mb-1">
                  <div className="w-[8px] h-[8px] rounded-[2px] bg-accent shrink-0" />
                  <span className="text-secondary text-[13px] capitalize">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
