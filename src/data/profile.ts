/**
 * @file Central data layer for the portfolio.
 * All shared constants and types used across sidebars, header, and sections
 * are consolidated here to eliminate duplication (Atomic Design data layer).
 */
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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

/** Personal details shown in the left sidebar and mobile header */
export const personalInfo: PersonalInfo[] = [
  { label: "Age", value: "28" },
  { label: "Residence", value: "Colombia" },
  { label: "Freelance", value: "Available", highlight: true },
  { label: "Address", value: "Medellín, Colombia" },
];

/** Spoken languages with proficiency level */
export const languages: SkillEntry[] = [
  { name: "Spanish", level: 100 },
  { name: "English", level: 80 },
];

/** Programming languages with proficiency level */
export const skills: SkillEntry[] = [
  { name: "Python", level: 80 },
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 60 },
  { name: "Java", level: 60 },
  { name: "HTML/CSS", level: 60 },
  { name: "C++", level: 40 },
];

/** Additional technical skills (tools, frameworks, platforms) */
export const extraSkills: string[] = [
  "Apache Spark",
  "PostgreSQL",
  "Microsoft Fabric",
  "FastAPI",
  "Next.js",
  "Git",
];

/** Social media links displayed in the right sidebar and mobile header */
export const socialLinks: SocialLink[] = [
  { name: "GitHub", icon: FaGithub, href: "https://github.com/AndresGUIO2" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/h%C3%A9ctor-andr%C3%A9s-g%C3%BCiza-ortegon-87795336a/" },
  { name: "Email", icon: FaEnvelope, href: "mailto:handres.guor@gmail.com" },
];
