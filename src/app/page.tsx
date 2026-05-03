/**
 * @file Main page — composes the full portfolio layout.
 * Uses the Atomic Design barrel export from @/components to render all organisms:
 * - Fixed sidebars (LeftSidebar, RightSidebar) for desktop
 * - MobileHeader for smaller screens
 * - Scrollable main content with staggered reveal animations
 */
import {
  LeftSidebar,
  RightSidebar,
  MobileHeader,
  ScrollReveal,
  HeroSection,
  KnowledgeSection,
  EducationSection,
  PortfolioSection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg max-w-[1440px] mx-auto relative">
      {/* Fixed sidebars — hidden on mobile, visible on desktop */}
      <LeftSidebar />
      <RightSidebar />

      {/* Mobile hamburger menu — hidden on desktop */}
      <MobileHeader />

      {/* Scrollable main content area with staggered fade-in */}
      <main className="px-4 lg:ml-[305px] lg:mr-[95px] lg:px-[9px] flex flex-col gap-[42px] py-0">
        <HeroSection />

        {/* Each section is wrapped in ScrollReveal for fade-in on scroll */}
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
