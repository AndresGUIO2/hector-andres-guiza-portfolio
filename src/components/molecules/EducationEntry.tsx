/**
 * Props for the EducationEntry molecule component.
 */
interface EducationEntryProps {
  /** Name of the school, university, or institution. */
  institution: string;
  /** Degree, role, or program title obtained. */
  role: string;
  /** Date range string shown as an accent badge (e.g. "2020 - 2024"). */
  period: string;
  /** Description of studies, achievements, or relevant coursework. */
  description: string;
  /** When true, renders a horizontal rule below the entry to separate it from the next one. */
  showDivider?: boolean;
}

/**
 * Atomic Design molecule that composes an institution name, role/degree badge, period,
 * and description into a two-column education entry. Used inside the education section
 * organism of the resume page.
 */
export default function EducationEntry({ institution, role, period, description, showDivider = false }: EducationEntryProps) {
  return (
    <div>
      {/* Two-column layout: left = institution info, right = description */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="w-full md:w-[380px] md:shrink-0">
          <h3 className="text-dark text-[18px] font-medium capitalize">
            {institution}
          </h3>
          <div className="flex items-center gap-3 mt-3">
            <span className="text-dark text-[15px] capitalize">{role}</span>
            {/* Period displayed as a small accent-colored badge */}
            <span className="bg-accent text-white text-[10px] px-2 py-1 rounded-[1px]">
              {period}
            </span>
          </div>
        </div>
        {/* min-w-0 prevents the description from overflowing its flex container */}
        <div className="flex-1 min-w-0">
          <p className="text-secondary text-[15px] leading-6 capitalize">{description}</p>
        </div>
      </div>
      {/* Conditional divider to visually separate consecutive entries */}
      {showDivider && <hr className="my-8 border-gray-200" />}
    </div>
  );
}
