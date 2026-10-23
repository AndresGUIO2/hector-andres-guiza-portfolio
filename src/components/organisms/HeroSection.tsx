import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { profile } from "@/data/profile";

/**
 * Renders the hero section — an atomic-design organism that composes
 * inline atoms (heading, paragraph, CTA link with FaArrowRight icon)
 * into a prominent banner introducing the developer with a call-to-action.
 */
export default function HeroSection() {
  return (
    <div className="hero-gradient rounded-lg overflow-hidden flex flex-col md:flex-row md:min-h-[467px]">
      {/* Left content: name, title, bio, and hire-me CTA */}
      <div className="flex-1 flex flex-col justify-center p-6 md:px-[60px] md:py-[50px]">
        <h1 className="text-[32px] md:text-[48px] font-bold leading-tight text-white">
          I&apos;m Héctor Güiza
          <br />
          <span className="text-white/70">Fullstack</span> Engineer
        </h1>
        <p className="text-white/80 text-[16px] leading-6 mt-6 md:mt-8 md:max-w-[424px]">
          {profile.summary}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="hero-hire-btn mt-6 md:mt-10 inline-flex items-center gap-3 font-medium text-[16px] px-8 py-4 rounded-[5px] transition-all duration-300 w-fit cursor-pointer"
        >
          Get in touch
          <FaArrowRight className="text-[14px]" />
        </a>
      </div>

      {/* Right image */}
      <div className="hidden md:block md:w-[260px] xl:w-[326px] md:shrink-0 self-stretch overflow-hidden relative">
        <Image src="/images/profile.png" alt={profile.name} fill sizes="(min-width: 1280px) 326px, 260px" preload className="object-cover" />
      </div>
    </div>
  );
}
