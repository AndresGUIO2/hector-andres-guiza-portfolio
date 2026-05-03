import { FaCheckSquare } from "react-icons/fa";

/**
 * Props for the ExtraSkillsList molecule component.
 */
interface ExtraSkillsListProps {
  /** List of skill names to display as simple checklist items. */
  skills: string[];
  /** When true, uses a smaller dot indicator instead of the icon and tightens spacing. */
  compact?: boolean;
}

/**
 * Atomic Design molecule that renders a static checklist of extra skills.
 * In full mode it uses the FaCheckSquare icon; in compact mode it falls back
 * to a small colored dot to save space. Used inside the sidebar organism.
 */
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
          {/* Compact mode uses a lightweight dot instead of an icon library glyph */}
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
