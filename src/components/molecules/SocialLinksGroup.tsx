import type { SocialLink } from "@/data/profile";
import SocialIconLink from "@/components/atoms/SocialIconLink";

interface SocialLinksGroupProps {
  links: SocialLink[];
  iconSize?: "sm" | "md";
}

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
