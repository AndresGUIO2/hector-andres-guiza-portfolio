/**
 * @file Central data layer for the portfolio.
 * All shared constants and types used across sidebars, header, and sections
 * are consolidated here to eliminate duplication (Atomic Design data layer).
 */
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaEnvelope, FaCloud } from "react-icons/fa";
import { SiPython, SiFastapi, SiTypescript, SiNextdotjs, SiPostgresql } from "react-icons/si";

/** Represents a social media link with its icon and URL */
export interface SocialLink {
  /** Display name (e.g. "GitHub", "LinkedIn") */
  name: string;
  /** react-icons icon component */
  icon: IconType;
  /** Full URL to the profile or mailto: link */
  href: string;
}

/** A skill or language with a proficiency percentage (0–100) */
export interface SkillEntry {
  /** Skill or language name */
  name: string;
  /** Proficiency level as a percentage (0–100) */
  level: number;
}

/** A personal information row displayed in the sidebars */
export interface PersonalInfo {
  /** Label shown on the left (e.g. "Age", "Residence") */
  label: string;
  /** Value shown on the right */
  value: string;
  /** If true, renders with the accent color to draw attention */
  highlight?: boolean;
}

/** Public professional details shared by the hero and profile card. */
export const profile = {
  name: "Héctor Andrés Güiza",
  title: "Fullstack Engineer",
  location: "Medellín, Colombia",
  summary:
    "I build web applications with Python, FastAPI, TypeScript, and Next.js. My work spans backend architecture, data engineering, serverless applications, and AI-powered experiences.",
  email: "handres.guor@gmail.com",
};

/** Personal details shown in the left sidebar and mobile header */
export const personalInfo: PersonalInfo[] = [
  { label: "Residence", value: "Colombia" },
  { label: "City", value: "Medellín" },
];

/** Language levels reported in the resume, without arbitrary percentages. */
export const languages = [
  { name: "Spanish", proficiency: "Native" },
  { name: "English", proficiency: "C1 Advanced" },
];

export const featuredSkills = [
  { name: "Python", icon: SiPython },
  { name: "FastAPI", icon: SiFastapi },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Azure", icon: FaCloud },
];

export const developmentApproach = [
  {
    step: "Define",
    title: "Spec-Driven Development",
    description:
      "I turn requirements into clear specifications, so expected behavior, constraints, and acceptance criteria guide each implementation decision.",
    artifact: "Specification",
    artifactItems: ["Expected behavior", "Technical constraints", "Acceptance criteria"],
  },
  {
    step: "Build",
    title: "AI-Assisted Development",
    description:
      "I work with Claude Code, Codex, and Antigravity to build and refine solutions, grounded in project context and my engineering judgment.",
    artifact: "Implementation",
    artifactItems: ["Understand the codebase", "Build focused changes", "Refine against the spec"],
  },
  {
    step: "Validate",
    title: "Review & Ownership",
    description:
      "I review the changes, test key behaviors, and check maintainability. I own the architectural decisions and the quality of the final result.",
    artifact: "Review checklist",
    artifactItems: ["Verify expected behavior", "Run relevant checks", "Inspect the final diff"],
  },
];

/** Resume skills grouped by area, shared by desktop and mobile. */
export const skillGroups = [
  { heading: "Frontend", items: ["TypeScript", "JavaScript", "Next.js", "Vue.js", "Pinia", "HTML/CSS"] },
  { heading: "Backend & Data", items: ["Python", "FastAPI", "REST APIs", "SQL", "PostgreSQL", "MongoDB"] },
  { heading: "Cloud & Architecture", items: ["Azure", "AWS", "Docker", "Azure Bicep", "Microservices", "Event-driven architecture"] },
  { heading: "Engineering Tools", items: ["Git/GitHub", "CI/CD", "Gatling", "Microsoft Fabric", "C4 Model"] },
];

/** Social media links displayed in the right sidebar and mobile header */
export const socialLinks: SocialLink[] = [
  { name: "GitHub", icon: FaGithub, href: "https://github.com/AndresGUIO2" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/h%C3%A9ctor-andr%C3%A9s-g%C3%BCiza-ortegon-87795336a/" },
  { name: "Email", icon: FaEnvelope, href: `mailto:${profile.email}` },
];
