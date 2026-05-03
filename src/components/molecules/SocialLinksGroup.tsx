import type { SocialLink } from "@/data/profile";
import SocialIconLink from "@/components/atoms/SocialIconLink";

/**
 * Props for the SocialLinksGroup molecule component.
 */
interface SocialLinksGroupProps {
  /** Array of social link data objects (icon, href, name) to render. */
  links: SocialLink[];
  /** Controls the rendered size of each social icon — "sm" for sidebar, "md" for larger contexts. */
  iconSize?: "sm" | "md";
}

/**
 * Atomic Design molecule that composes multiple SocialIconLink atoms into a row
 * of social media / contact links. Used inside the sidebar organism and the
 * contact section of the resume page.
 */
export default function SocialLinksGroup({ links, iconSize = "sm" }: SocialLinksGroupProps) {
  return (
    <>
      {links.map((link) => (
        <SocialIconLink
          key={link.name}
          icon={link.icon}
          href={link.href}
          name={link.name}
          size={iconSize}
        />
      ))}
    </>
  );
}
