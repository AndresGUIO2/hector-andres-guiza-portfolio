import { personalInfo, languages, skills, extraSkills } from "@/data/profile";
import Divider from "@/components/atoms/Divider";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import ProfileCard from "@/components/molecules/ProfileCard";
import InfoList from "@/components/molecules/InfoList";
import ProgressList from "@/components/molecules/ProgressList";
import ExtraSkillsList from "@/components/molecules/ExtraSkillsList";

/**
 * Renders the left sidebar — an atomic-design organism that composes
 * ProfileCard, InfoList, ProgressList, ExtraSkillsList molecules and
 * Divider, ThemeToggle atoms into a fixed desktop navigation panel
 * showing profile info, languages, skills, and a dark-mode toggle.
 */
export default function LeftSidebar() {
  return (
    // Fixed sidebar visible only on large screens (lg breakpoint and up)
    <aside className="hidden lg:block fixed left-0 top-0 w-[305px] h-screen bg-white overflow-y-auto z-10">
      <ProfileCard size="desktop" />
      <Divider />
      <InfoList items={personalInfo} />
      <Divider />
      <ProgressList items={languages} heading="Languages" />
      <Divider />
      <ProgressList items={skills} heading="Programming Languages" />
      <Divider />
      <ExtraSkillsList skills={extraSkills} />
      <Divider />
      {/* Dark mode toggle placed at the bottom of the sidebar */}
      <div className="flex items-center justify-between px-10 pb-6">
        <span className="text-dark text-[15px] capitalize">Dark Mode</span>
        <ThemeToggle size="sm" />
      </div>
    </aside>
  );
}
