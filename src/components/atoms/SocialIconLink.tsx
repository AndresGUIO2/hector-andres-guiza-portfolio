import { IconType } from "react-icons";

interface SocialIconLinkProps {
  icon: IconType;
  href: string;
  name: string;
  size?: "sm" | "md";
}

export default function SocialIconLink({ icon: Icon, href, name, size = "sm" }: SocialIconLinkProps) {
  const isMd = size === "md";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`${isMd ? "w-12 h-12" : "w-8 h-8"} rounded-full bg-accent flex items-center justify-center text-white ${isMd ? "hover:bg-[#1d4ed8] transition-colors" : ""}`}
      title={name}
    >
      <Icon className={isMd ? "text-[20px]" : "text-[14px]"} />
    </a>
  );
}
