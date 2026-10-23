import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import TagBadge from "@/components/atoms/TagBadge";

interface ProjectCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  imagePosition?: string;
  onExpand: () => void;
}

export default function ProjectCard({ id, title, image, description, technologies, imagePosition = "center", onExpand }: ProjectCardProps) {
  return (
    <article id={id} aria-labelledby={`${id}-heading`} className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg bg-card scroll-mt-20">
      <div className="relative h-[300px] shrink-0 bg-[#29282c]">
        <Image src={image} alt={title} fill sizes="(min-width: 640px) 310px, calc(100vw - 32px)" className="object-cover" style={{ objectPosition: imagePosition }} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 id={`${id}-heading`} className="text-dark text-[18px] font-medium">{title}</h3>
        <p className="text-secondary text-[14px] leading-5 mt-2">{description}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {technologies.map((technology) => <TagBadge key={technology} text={technology} size="sm" variant="accent" />)}
        </div>
        <button id={`${id}-learn-more`} type="button" aria-label={`Learn more about ${title}`} aria-expanded={false} onClick={onExpand} className="inline-flex items-center gap-2 text-accent text-[18px] font-medium mt-auto pt-4 text-left hover:underline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4">
          Learn more <FiArrowRight size={14} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
