"use client";

import { FaCode, FaDatabase, FaDraftingCompass, FaBrain, FaCloud, FaRobot } from "react-icons/fa";
import { IconType } from "react-icons";
import SectionHeading from "@/components/atoms/SectionHeading";
import FlipCard from "@/components/molecules/FlipCard";

/**
 * Shape for each knowledge area displayed as a flip card.
 */
interface KnowledgeItem {
  /** Name of the knowledge area (e.g. "Full Stack Development") */
  title: string;
  /** Short subtitle displayed on the card front */
  description: string;
  /** Icon component rendered on the card front */
  icon: IconType;
  /** Detailed paragraph shown on the flipped side */
  highlight: string;
  /** Technology tags displayed on the flipped side */
  tags: string[];
}

/** Static data array describing the developer's knowledge areas and highlights */
const knowledgeItems: KnowledgeItem[] = [
  {
    title: "Full Stack Development",
    description: "Web apps, APIs, Next.js",
    icon: FaCode,
    highlight: "Built a POS & Electronic Invoicing System using Next.js frontend with FastAPI async backend, integrating third-party APIs for automated legal invoice dispatch.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "NestJS", "TypeScript", "Tailwind"],
  },
  {
    title: "Data Engineering",
    description: "Pipelines, Data Lakes, ETL",
    icon: FaDatabase,
    highlight: "Architected a Strategic Procurement Intelligence Platform using Microsoft Fabric with Medallion Architecture (Bronze→Silver→Gold), automating pipelines from government open data.",
    tags: ["Spark", "Fabric", "PySpark", "Pandas", "FAISS", "KNN"],
  },
  {
    title: "Software Architecture",
    description: "C4 Model, Architecture as Code",
    icon: FaDraftingCompass,
    highlight: "Defined corporate Reference Architecture for a 1000+ employee company using C4 Model and Architecture as Code, achieving formal approval from the IT Architecture Board.",
    tags: ["C4 Model", "LikeC4", "AaC", "Microservices", "Governance"],
  },
  {
    title: "AI & Computer Vision",
    description: "ML, Rendering, GLSL Shaders",
    icon: FaBrain,
    highlight: "Co-developed a real-time AI 'Talking Heads' rendering engine using Python and custom GLSL shaders, with parallax-based 2.5D depth synthesis and lip-sync models.",
    tags: ["Python", "GLSL", "OpenCV", "PyTorch", "Gemini API", "FAISS"],
  },
  {
    title: "Cloud & DevOps",
    description: "Azure, Microsoft Fabric, Spark",
    icon: FaCloud,
    highlight: "Deployed enterprise solutions on Microsoft Fabric (OneLake) and Power Platform, building automated data pipelines for advanced analytics at scale.",
    tags: ["Azure", "Fabric", "Power Platform", "CI/CD", "Docker"],
  },
  {
    title: "Automation",
    description: "Power Platform, Scripts, Bots",
    icon: FaRobot,
    highlight: "Built a high-compliance AML screening ecosystem with WorldCheck API, batch processing 50+ concurrent cases with automated risk scoring and traffic-light logic.",
    tags: ["Power Platform", "WorldCheck API", "Python", "SQL", "RPA"],
  },
];

/**
 * Renders the knowledge section — an atomic-design organism that composes
 * SectionHeading atom and FlipCard molecules into a responsive grid
 * showcasing the developer's technical expertise areas.
 */
export default function KnowledgeSection() {
  return (
    <div className="flex flex-col items-center gap-[33px]">
      <SectionHeading
        title="My Knowledge"
        description="Full Stack Developer with expertise spanning data engineering, software architecture, AI, and cloud solutions."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-full">
        {knowledgeItems.map((item) => (
          <FlipCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
            highlight={item.highlight}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  );
}
