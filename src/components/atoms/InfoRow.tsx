/**
 * Props for the InfoRow atom component.
 */
interface InfoRowProps {
  /** Field name shown on the left side (e.g. "Email", "Location") */
  label: string;
  /** Corresponding value shown on the right side */
  value: string;
  /** When true, renders the value with the "text-available" accent colour to draw attention */
  highlight?: boolean;
  /** When true, uses smaller font size and tighter vertical padding for dense layouts */
  compact?: boolean;
}

/**
 * InfoRow — atomic design atom (smallest reusable unit).
 * Renders a single key-value row with the label on the left and the value on the right.
 * Optionally highlights the value (e.g. to indicate availability status).
 * Used in AboutSection and ExperienceCard organisms.
 */
export default function InfoRow({ label, value, highlight = false, compact = false }: InfoRowProps) {
  return (
    <div className={`flex justify-between capitalize ${compact ? "text-[14px] py-1" : "text-[15px] py-[6px]"}`}>
      <span className="text-dark capitalize">{label}:</span>
      <span className={`${highlight ? "text-available" : "text-dark"} capitalize`}>{value}</span>
    </div>
  );
}
