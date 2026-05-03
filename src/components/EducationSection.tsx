interface EducationEntry {
  institution: string;
  role: string;
  period: string;
  description: string;
}

const educationEntries: EducationEntry[] = [
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

export default function EducationSection() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-dark text-[24px] md:text-[32px] font-bold capitalize">Education</h2>
      <p className="text-secondary text-[15px] leading-6 text-center md:max-w-[438px] mt-4 capitalize">
        Academic background and professional experience in software engineering,
        data architecture, and full stack development.
      </p>
      <div className="bg-white rounded-lg w-full mt-10 p-6 md:p-10">
        {educationEntries.map((entry, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              {/* Left side */}
              <div className="w-full md:w-[380px] md:shrink-0">
                <h3 className="text-dark text-[18px] font-medium capitalize">
                  {entry.institution}
                </h3>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-dark text-[15px] capitalize">
                    {entry.role}
                  </span>
                  <span className="bg-accent text-white text-[10px] px-2 py-1 rounded-[1px]">
                    {entry.period}
                  </span>
                </div>
              </div>
              {/* Right side - description */}
              <div className="flex-1 min-w-0">
                <p className="text-secondary text-[15px] leading-6 capitalize">
                  {entry.description}
                </p>
              </div>
            </div>
            {index < educationEntries.length - 1 && (
              <hr className="my-8 border-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
