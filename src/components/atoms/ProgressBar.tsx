interface ProgressBarProps {
  label: string;
  level: number;
  compact?: boolean;
}

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
          style={{ width: `${level - 2}%` }}
        />
      </div>
    </div>
  );
}
