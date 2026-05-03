import type { SkillEntry } from "@/data/profile";
import ProgressBar from "@/components/atoms/ProgressBar";

interface ProgressListProps {
  items: SkillEntry[];
  heading: string;
  compact?: boolean;
}

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
