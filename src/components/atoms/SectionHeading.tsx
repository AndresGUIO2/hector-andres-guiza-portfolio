/**
 * Props for the SectionHeading atom component.
 */
interface SectionHeadingProps {
  /** Main heading text displayed prominently */
  title: string;
  /** Optional subtitle providing additional context below the title */
  description?: string;
}

/**
 * SectionHeading — atomic design atom (smallest reusable unit).
 * Renders a centred section title with an optional description paragraph below it.
 * Provides a consistent visual anchor for every major page section.
 * Used in AboutSection, SkillsSection, ProjectsSection, and other organisms.
 */
export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-dark text-[24px] md:text-[32px] font-bold capitalize">{title}</h2>
      {description && (
        <p className="text-secondary text-[15px] leading-6 text-center md:max-w-[438px] mt-4 capitalize">
          {description}
        </p>
      )}
    </div>
  );
}
