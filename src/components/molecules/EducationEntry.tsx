interface EducationEntryProps {
  institution: string;
  role: string;
  period: string;
  description: string;
  showDivider?: boolean;
}

export default function EducationEntry({ institution, role, period, description, showDivider = false }: EducationEntryProps) {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="w-full md:w-[380px] md:shrink-0">
          <h3 className="text-dark text-[18px] font-medium capitalize">
            {institution}
          </h3>
          <div className="flex items-center gap-3 mt-3">
            <span className="text-dark text-[15px] capitalize">{role}</span>
            <span className="bg-accent text-white text-[10px] px-2 py-1 rounded-[1px]">
              {period}
            </span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-secondary text-[15px] leading-6 capitalize">{description}</p>
        </div>
      </div>
      {showDivider && <hr className="my-8 border-gray-200" />}
    </div>
  );
}
