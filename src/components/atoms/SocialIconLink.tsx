import { IconType } from "react-icons";

/**
 * Props for the SocialIconLink atom component.
 */
interface SocialIconLinkProps {
  /** The react-icons component to render inside the circular button */
  icon: IconType;
  /** URL the link points to (external URLs open in a new tab) */
  href: string;
  /** Accessible name used for the title attribute and screen readers */
  name: string;
  /** Controls the button dimensions — "md" is larger for hero sections */
  size?: "sm" | "md";
}

/**
 * SocialIconLink — atomic design atom (smallest reusable unit).
 * Renders a circular icon button that links to a social profile or external page.
 * External URLs (starting with "http") automatically open in a new tab with
 * security-related rel attributes.
 * Used in the HeroSection and Footer organisms.
 */
export default function SocialIconLink({ icon: Icon, href, name, size = "sm" }: SocialIconLinkProps) {
  const isMd = size === "md";

  return (
    <a
      href={href}
      // Open external links in a new tab; internal links navigate normally
      target={href.startsWith("http") ? "_blank" : undefined}
      // Prevent reverse-tabnabbing on external links
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`${isMd ? "w-12 h-12" : "w-8 h-8"} rounded-full bg-accent flex items-center justify-center text-white ${isMd ? "hover:bg-[#1d4ed8] transition-colors" : ""}`}
      title={name}
    >
      <Icon className={isMd ? "text-[20px]" : "text-[14px]"} />
    </a>
  );
}
