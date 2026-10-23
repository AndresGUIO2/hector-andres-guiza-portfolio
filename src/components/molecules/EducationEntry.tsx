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
  /** Public achievements, without exposing company implementation details. */
  achievements?: string[];
  /** When true, renders a horizontal rule below the entry to separate it from the next one. */
  showDivider?: boolean;
}

/**
 * Atomic Design molecule that composes an institution name, role/degree badge, period,
 * and description into a two-column education entry. Used inside the education section
 * organism of the resume page.
 */
export default function EducationEntry({ institution, role, period, description, achievements = [], showDivider = false }: EducationEntryProps) {
  return (
    <div>
      {/* Two-column layout: left = institution info, right = description */}
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-4 md:gap-8">
        <div>
          <h3 className="text-dark text-[18px] font-medium">
            {institution}
          </h3>
          <p className="text-dark text-[15px] leading-6 mt-2">{role}</p>
          <p className="text-secondary text-[14px] mt-2">{period}</p>
        </div>
        {/* min-w-0 prevents the description from overflowing its flex container */}
        <div className="flex-1 min-w-0">
          <p className="text-secondary text-[15px] leading-6">{description}</p>
          {achievements.length > 0 && (
            <ul className="list-disc pl-5 mt-3 space-y-3 text-dark text-[15px] leading-6">
              {achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* Conditional divider to visually separate consecutive entries */}
      {showDivider && <hr className="my-8 border-gray-200" />}
    </div>
  );
}
