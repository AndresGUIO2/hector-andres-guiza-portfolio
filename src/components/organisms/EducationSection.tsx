import SectionHeading from "@/components/atoms/SectionHeading";
import EducationEntry from "@/components/molecules/EducationEntry";

/**
 * Shape for each education/experience entry rendered by EducationEntry.
 */
interface EducationEntryData {
  /** School, company, or project name */
  institution: string;
  /** Role or position held */
  role: string;
  /** Date range string (e.g. "2021 - Present") */
  period: string;
  /** Detailed description of the experience or achievement */
  description: string;
  achievements?: string[];
}

/** Public summaries; company code and internal assets stay private. */
const educationEntries: EducationEntryData[] = [
  {
    institution: "PiTransform",
    role: "Full Stack Developer",
    period: "2025 - Present",
    description:
      "Remote work for a US company, building web applications and AI-powered experiences.",
    achievements: [
      "Built an AI agent platform with a Python/FastAPI backend and a Next.js/TypeScript frontend.",
      "Contributed to application architecture improvements, achieving serverless cold starts under 2 seconds.",
      "Decoupled heavy background processing through an event-driven architecture and validated application stability with high-concurrency Gatling load tests.",
      "Implemented talking avatars with viseme-driven lip synchronization, without paid avatar animation services.",
      "Automated infrastructure provisioning with Azure Bicep for consistent, repeatable environments.",
    ],
  },
  {
    institution: "Innovati Software",
    role: "Full Stack Developer & Data Engineer",
    period: "2024 - 2025",
    description:
      "Software architecture, data engineering, and process automation in Medellín, Colombia.",
    achievements: [
      "Designed reference architecture with the C4 Model for Microsoft Fabric and Power Platform solutions, aligning decisions with architecture board and stakeholder requirements.",
      "Processed millions of public purchase and sales records and internal transactions for budgeting and operational analysis.",
      "Reduced budget preparation time by 75% through data processing and automation.",
    ],
  },
  {
    institution: "Universidad de Antioquia",
    role: "Systems Engineering",
    period: "Expected 2026",
    description:
      "Focus areas include software architecture, data engineering, full stack development, AI systems, and process automation.",
  },
];

/**
 * Renders the education section — an atomic-design organism that composes
 * SectionHeading atom and EducationEntry molecules into a card listing
 * academic background and professional experience entries.
 */
export default function EducationSection() {
  return (
    <section id="experience" className="flex flex-col items-center gap-8">
      <SectionHeading
        title="Experience & Education"
        description="Professional experience building web applications, improving architecture, and turning data into useful tools."
      />
      <div className="bg-white rounded-lg w-full p-6 md:p-10">
        {educationEntries.map((entry, index) => (
          <EducationEntry
            key={entry.institution}
            institution={entry.institution}
            role={entry.role}
            period={entry.period}
            description={entry.description}
            achievements={entry.achievements}
            // Show a visual divider between entries, but not after the last one
            showDivider={index < educationEntries.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
