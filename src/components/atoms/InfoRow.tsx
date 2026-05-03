interface InfoRowProps {
  label: string;
  value: string;
  highlight?: boolean;
  compact?: boolean;
}

export default function InfoRow({ label, value, highlight = false, compact = false }: InfoRowProps) {
  return (
    <div className={`flex justify-between capitalize ${compact ? "text-[14px] py-1" : "text-[15px] py-[6px]"}`}>
      <span className="text-dark capitalize">{label}:</span>
      <span className={`${highlight ? "text-available" : "text-dark"} capitalize`}>{value}</span>
    </div>
  );
}
