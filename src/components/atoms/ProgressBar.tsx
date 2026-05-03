/**
 * Props for the ProgressBar atom component.
 */
interface ProgressBarProps {
  /** Human-readable skill or metric name displayed to the left */
  label: string;
  /** Percentage value (0-100) that determines the fill width */
  level: number;
  /** When true, uses smaller font size and tighter spacing for dense layouts */
  compact?: boolean;
}

/**
 * ProgressBar — atomic design atom (smallest reusable unit).
 * Displays a labelled horizontal bar filled to a given percentage.
 * Used in SkillsSection and other organisms that visualise proficiency levels.
 */
export default function ProgressBar({ label, level, compact = false }: ProgressBarProps) {
  return (
    <div className={compact ? "mb-2" : "mb-3"}>
      <div className={`flex justify-between capitalize ${compact ? "text-[13px]" : "text-[15px]"} text-secondary`}>
        <span>{label}</span>
        <span>{level}%</span>
      </div>
      <div className="progress-track mt-1">
        <div
          className="progress-fill"
          // Subtract 2 % so the fill never touches the track edge at 100 %
          style={{ width: `${level - 2}%` }}
        />
      </div>
    </div>
  );
}
