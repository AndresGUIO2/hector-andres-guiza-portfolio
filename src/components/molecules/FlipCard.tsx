import { IconType } from "react-icons";
import TagBadge from "@/components/atoms/TagBadge";

interface FlipCardProps {
  icon: IconType;
  title: string;
  description: string;
  highlight: string;
  tags: string[];
}

export default function FlipCard({ icon: Icon, title, description, highlight, tags }: FlipCardProps) {
  return (
    <div className="flip-card h-[280px]">
      <div className="flip-inner w-full h-full relative">
        {/* Front face */}
        <div className="flip-front bg-white rounded-lg flex flex-col items-center justify-center py-8 md:py-10 px-6">
          <Icon className="text-accent text-[48px] mb-6" />
          <h3 className="text-dark text-[18px] font-medium capitalize text-center">
            {title}
          </h3>
          <p className="text-secondary text-[15px] capitalize mt-2 text-center">
            {description}
          </p>
        </div>
        {/* Back face */}
        <div className="flip-back bg-accent rounded-lg flex flex-col items-center justify-center p-5 text-white">
          <Icon className="text-[24px] mb-2 opacity-80" />
          <h3 className="text-[15px] font-medium capitalize text-center mb-2">
            {title}
          </h3>
          <p className="text-[11px] leading-[16px] text-center opacity-90 mb-3">
            {highlight}
          </p>
          <div className="flex flex-wrap justify-center gap-1">
            {tags.map((tag) => (
              <TagBadge key={tag} text={tag} size="sm" variant="ghost" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
