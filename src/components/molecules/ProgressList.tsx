import type { SkillEntry } from "@/data/profile";
import ProgressBar from "@/components/atoms/ProgressBar";

/**
 * Props for the ProgressList molecule component.
 */
interface ProgressListProps {
  /** Array of skill entries, each with a name and proficiency level. */
  items: SkillEntry[];
  /** Section heading displayed above the progress bars (e.g. "Languages", "Frameworks"). */
  heading: string;
  /** When true, reduces spacing and font sizes for compact layouts. */
  compact?: boolean;
}

/**
 * Atomic Design molecule that composes a heading + multiple ProgressBar atoms into
 * a grouped skill section. Used inside the sidebar organism of the resume page.
 */
export default function ProgressList({ items, heading, compact = false }: ProgressListProps) {
  const headingClass = compact ? "text-[16px]" : "text-[18px]";
  const paddingX = compact ? "px-8" : "px-10";
  const marginBottom = compact ? "mb-3" : "mb-4";

  return (
    <div className={paddingX}>
      <h3 className={`text-dark ${headingClass} font-medium capitalize ${marginBottom}`}>
        {heading}
      </h3>
      {items.map((item) => (
        <ProgressBar
          key={item.name}
          label={item.name}
          level={item.level}
          compact={compact}
        />
      ))}
    </div>
  );
}
