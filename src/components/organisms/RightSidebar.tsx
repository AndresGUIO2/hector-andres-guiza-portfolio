import { socialLinks } from "@/data/profile";
import SocialIconLink from "@/components/atoms/SocialIconLink";

/**
 * Renders the right sidebar — an atomic-design organism that composes
 * SocialIconLink atoms into a fixed vertical bar listing the user's
 * social/media profile links. Visible only on large screens.
 */
export default function RightSidebar() {
  return (
    // Fixed right rail visible only on large screens (lg breakpoint and up)
    <aside className="hidden lg:flex fixed right-0 top-0 w-[95px] h-screen bg-card flex-col items-center pt-[73px] pb-[131px] z-10">
      <h3 className="text-dark text-[18px] font-bold capitalize mb-8">
        Links
      </h3>
      <div className="flex flex-col gap-[15px] items-center">
        {socialLinks.map((link) => (
          <SocialIconLink
            key={link.name}
            icon={link.icon}
            href={link.href}
            name={link.name}
            size="md"
          />
        ))}
      </div>
    </aside>
  );
}
