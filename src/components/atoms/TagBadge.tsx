/**
 * Props for the TagBadge atom component.
 */
interface TagBadgeProps {
  /** The text content displayed inside the badge */
  text: string;
  /** Controls badge dimensions — "md" is larger for prominent tags */
  size?: "sm" | "md";
  /** Visual style — "accent" uses the brand accent colour, "ghost" uses a translucent white */
  variant?: "accent" | "ghost";
}

/**
 * TagBadge — atomic design atom (smallest reusable unit).
 * Renders a small pill-shaped badge used to display tags, categories,
 * or skill labels. Supports accent and ghost colour variants.
 * Used in ProjectCard, ExperienceCard, and other organisms.
 */
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
