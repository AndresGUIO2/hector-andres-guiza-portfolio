interface SectionHeadingProps {
  title: string;
  description?: string;
}

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
