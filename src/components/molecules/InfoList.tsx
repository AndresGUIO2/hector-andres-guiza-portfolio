import type { PersonalInfo } from "@/data/profile";
import InfoRow from "@/components/atoms/InfoRow";

/**
 * Props for the InfoList molecule component.
 */
interface InfoListProps {
  /** Array of personal information entries to display as rows. */
  items: PersonalInfo[];
  /** When true, reduces padding for use in tighter layouts (e.g. mobile sidebar). */
  compact?: boolean;
}

/**
 * Atomic Design molecule that composes multiple InfoRow atoms into a vertical list
 * of personal information entries (e.g. location, email, phone).
 * Used inside the sidebar organism of the resume page.
 */
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
