import { FaCheckSquare } from "react-icons/fa";

interface ExtraSkillsListProps {
  skills: string[];
  compact?: boolean;
}

export default function ExtraSkillsList({ skills, compact = false }: ExtraSkillsListProps) {
  const headingClass = compact ? "text-[16px]" : "text-[18px]";
  const paddingX = compact ? "px-8 pb-6" : "px-10 pb-6";
  const marginBottom = compact ? "mb-3" : "mb-4";
  const itemGap = compact ? "mb-1" : "mb-2";
  const textSize = compact ? "text-[13px]" : "text-[15px]";
  const iconSize = compact ? "text-[13px]" : "text-[15px]";
  const gap = compact ? "gap-2" : "gap-3";

  return (
    <div className={paddingX}>
      <h3 className={`text-dark ${headingClass} font-medium capitalize ${marginBottom}`}>
        Extra Skills
      </h3>
      {skills.map((skill) => (
        <div key={skill} className={`flex items-center ${gap} ${itemGap}`}>
          {compact ? (
            <div className="w-[8px] h-[8px] rounded-[2px] bg-accent shrink-0" />
          ) : (
            <FaCheckSquare className={`text-accent ${iconSize} shrink-0`} />
          )}
          <span className={`text-secondary ${textSize} capitalize`}>{skill}</span>
        </div>
      ))}
    </div>
  );
}
