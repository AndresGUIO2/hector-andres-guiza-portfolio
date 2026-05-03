interface TagBadgeProps {
  text: string;
  size?: "sm" | "md";
  variant?: "accent" | "ghost";
}

export default function TagBadge({ text, size = "sm", variant = "accent" }: TagBadgeProps) {
  const sizeClass = size === "md" ? "text-[12px] px-3 py-1" : "text-[10px] px-2 py-[2px]";
  const variantClass = variant === "ghost"
    ? "bg-white/20 text-white"
    : "bg-accent/10 text-accent";

  return (
    <span className={`${sizeClass} ${variantClass} rounded-full`}>
      {text}
    </span>
  );
}
