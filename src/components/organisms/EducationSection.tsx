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
}

/** Static data array listing the developer's academic and professional background */
const educationEntries: EducationEntryData[] = [
  {
    institution: "Universidad de Antioquia",
    role: "Student",
    period: "2021 - Present",
    description:
      "Systems Engineering (10th semester). Specialized in software architecture, data engineering, and full stack development. Key projects include real-time AI rendering engines, electronic invoicing systems, and strategic procurement platforms.",
  },
  {
    institution: "Innovati Software",
    role: "Full Stack Developer, Data Engineer",
    period: "2024",
    description:
      "Designed reference architecture using C4 Model for deployment on Microsoft Fabric and Power Platform. Built and optimized data pipelines for ingestion and transformation. Implemented FAISS algorithms for similarity searches. Backend development in NestJS.",
  },
  {
    institution: "Key Technical Projects",
    role: "Lead Developer",
    period: "2024 - 2025",
    description:
      "Built a strategic procurement intelligence platform using Microsoft Fabric with Medallion Architecture. Developed an AML screening ecosystem with WorldCheck API. Architected a real-time AI 'Talking Heads' rendering engine using Python and GLSL shaders.",
  },
];

/**
 * Renders the education section — an atomic-design organism that composes
 * SectionHeading atom and EducationEntry molecules into a card listing
 * academic background and professional experience entries.
 */
export default function EducationSection() {
  return (
    <div className="flex flex-col items-center gap-[33px]">
      <SectionHeading
        title="Education"
        description="Academic background and professional experience in software engineering, data architecture, and full stack development."
      />
      <div className="bg-white rounded-lg w-full mt-10 p-6 md:p-10">
        {educationEntries.map((entry, index) => (
          <EducationEntry
            key={index}
            institution={entry.institution}
            role={entry.role}
            period={entry.period}
            description={entry.description}
            // Show a visual divider between entries, but not after the last one
            showDivider={index < educationEntries.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
