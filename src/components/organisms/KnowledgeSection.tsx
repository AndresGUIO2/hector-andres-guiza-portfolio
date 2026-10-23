"use client";

import { FaCode, FaDatabase, FaDraftingCompass, FaBrain, FaCloud, FaVial } from "react-icons/fa";
import { IconType } from "react-icons";
import SectionHeading from "@/components/atoms/SectionHeading";
import FlipCard from "@/components/molecules/FlipCard";
import WorkflowPresentation from "@/components/molecules/WorkflowPresentation";

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
    description: "TypeScript, Next.js, FastAPI",
    icon: FaCode,
    highlight: "Built AI-powered web applications at PiTransform, connecting Next.js and TypeScript interfaces to Python/FastAPI backends and REST APIs.",
    tags: ["Next.js", "TypeScript", "Python", "FastAPI", "REST APIs"],
  },
  {
    title: "Data Engineering",
    description: "SQL, pipelines, Microsoft Fabric",
    icon: FaDatabase,
    highlight: "Processed millions of transaction records at Innovati Software for budgeting and operational analysis, helping reduce budget preparation time by 75%.",
    tags: ["SQL", "Microsoft Fabric", "PostgreSQL", "Data pipelines"],
  },
  {
    title: "Software Architecture",
    description: "Serverless, events, C4 Model",
    icon: FaDraftingCompass,
    highlight: "Contributed to serverless architecture improvements with cold starts under 2 seconds. Decoupled heavy background processing using an event-driven architecture.",
    tags: ["Serverless", "Event-driven architecture", "Microservices", "C4 Model"],
  },
  {
    title: "AI & Interactive Avatars",
    description: "AI agents, visemes, lip sync",
    icon: FaBrain,
    highlight: "Implemented talking avatars with viseme-driven lip synchronization, without paid avatar animation services. Built AI agent applications with Python and FastAPI.",
    tags: ["AI agents", "Visemes", "Lip sync", "Python", "FastAPI"],
  },
  {
    title: "Cloud & DevOps",
    description: "Azure, Bicep, infrastructure as code",
    icon: FaCloud,
    highlight: "Automated Azure infrastructure provisioning with Bicep to keep environments consistent and deployments repeatable, alongside experience with Docker and CI/CD.",
    tags: ["Azure", "Azure Bicep", "Docker", "CI/CD"],
  },
  {
    title: "Performance Testing",
    description: "Gatling, load testing, concurrency",
    icon: FaVial,
    highlight: "Designed and ran high-concurrency Gatling load tests to validate application stability under traffic spikes and support performance-focused engineering decisions.",
    tags: ["Gatling", "Load testing", "Concurrency", "Performance"],
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
        title="Technical Expertise"
        description="Full stack engineering backed by experience in APIs, data pipelines, serverless architecture, and performance testing."
      />
      <WorkflowPresentation />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
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
