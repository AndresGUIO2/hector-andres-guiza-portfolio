import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="hero-gradient rounded-lg overflow-hidden flex flex-col md:flex-row md:min-h-[467px]">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center p-6 md:px-[60px] md:py-[50px]">
        <h1 className="text-[32px] md:text-[48px] font-bold leading-tight text-white">
          I&apos;m Héctor Güiza
          <br />
          <span className="text-white/70">Full Stack</span> Developer
        </h1>
        <p className="text-white/80 text-[16px] leading-6 mt-6 md:mt-8 md:max-w-[424px]">
          Full Stack Developer and Systems Engineering student. Background in
          Data Engineering, software architecture, and process automation.
          Building robust solutions with modern technologies.
        </p>
        <a
          href="mailto:handres.guor@gmail.com"
          className="hero-hire-btn mt-6 md:mt-10 inline-flex items-center gap-3 font-medium text-[16px] px-8 py-4 rounded-[5px] transition-all duration-300 w-fit cursor-pointer"
        >
          HIRE ME
          <FaArrowRight className="text-[14px]" />
        </a>
      </div>

      {/* Right image */}
      <div className="hidden md:block md:w-[326px] self-stretch overflow-hidden">
        <img src="/images/profile.png" alt="Héctor Güiza" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
