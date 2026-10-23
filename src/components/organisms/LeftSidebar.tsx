import ThemeToggle from "@/components/atoms/ThemeToggle";
import ProfileCard from "@/components/molecules/ProfileCard";
import SidebarSkills from "@/components/molecules/SidebarSkills";

/**
 * Renders the left sidebar — an atomic-design organism that composes
 * ProfileCard and SidebarSkills molecules with a theme toggle in a fixed panel
 * showing profile info, languages, skills, and a dark-mode toggle.
 */
export default function LeftSidebar() {
  return (
    // Fixed sidebar visible only on large screens (lg breakpoint and up)
    <aside className="hidden lg:block fixed left-0 top-0 w-[305px] h-screen bg-white overflow-y-auto z-10">
      <ProfileCard size="desktop" />
      <SidebarSkills />
      {/* Dark mode toggle placed at the bottom of the sidebar */}
      <div className="flex items-center justify-between px-6 py-4">
        <span className="text-secondary text-[14px]">Appearance</span>
        <ThemeToggle size="sm" />
      </div>
    </aside>
  );
}
