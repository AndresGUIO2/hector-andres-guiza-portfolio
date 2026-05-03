import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export interface SocialLink {
  name: string;
  icon: IconType;
  href: string;
}

export interface SkillEntry {
  name: string;
  level: number;
}

export interface PersonalInfo {
  label: string;
  value: string;
  highlight?: boolean;
}

export const personalInfo: PersonalInfo[] = [
  { label: "Age", value: "23" },
  { label: "Residence", value: "Colombia" },
  { label: "Freelance", value: "Available", highlight: true },
  { label: "Address", value: "Medellín, Colombia" },
];

export const languages: SkillEntry[] = [
  { name: "Spanish", level: 100 },
  { name: "English", level: 80 },
];

export const skills: SkillEntry[] = [
  { name: "Python", level: 80 },
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 60 },
  { name: "Java", level: 60 },
  { name: "HTML/CSS", level: 60 },
  { name: "C++", level: 40 },
];

export const extraSkills: string[] = [
  "Apache Spark",
  "PostgreSQL",
  "Microsoft Fabric",
  "FastAPI",
  "Next.js",
  "Git",
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", icon: FaGithub, href: "https://github.com/AndresGUIO2" },
  { name: "LinkedIn", icon: FaLinkedin, href: "#" },
  { name: "Email", icon: FaEnvelope, href: "mailto:handres.guor@gmail.com" },
];
