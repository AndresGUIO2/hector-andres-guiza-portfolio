import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import MobileHeader from "@/components/MobileHeader";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSection from "@/components/HeroSection";
import KnowledgeSection from "@/components/KnowledgeSection";
import EducationSection from "@/components/EducationSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg max-w-[1440px] mx-auto relative">
      <LeftSidebar />
      <RightSidebar />
      <MobileHeader />
      <main className="px-4 lg:ml-[305px] lg:mr-[95px] lg:px-[9px] flex flex-col gap-[42px] py-0">
        <HeroSection />
        <ScrollReveal>
          <KnowledgeSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <EducationSection />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <PortfolioSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Footer />
        </ScrollReveal>
      </main>
    </div>
  );
}
