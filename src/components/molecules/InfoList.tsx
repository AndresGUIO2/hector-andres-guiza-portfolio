import type { PersonalInfo } from "@/data/profile";
import InfoRow from "@/components/atoms/InfoRow";

interface InfoListProps {
  items: PersonalInfo[];
  compact?: boolean;
}

export default function InfoList({ items, compact = false }: InfoListProps) {
  const paddingX = compact ? "px-8" : "px-10";

  return (
    <div className={paddingX}>
      {items.map((item) => (
        <InfoRow
          key={item.label}
          label={item.label}
          value={item.value}
          highlight={item.highlight}
          compact={compact}
        />
      ))}
    </div>
  );
}
