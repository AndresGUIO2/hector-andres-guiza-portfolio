import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/AndresGUIO2",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "#",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    href: "mailto:handres.guor@gmail.com",
  },
];

export default function RightSidebar() {
  return (
    <aside className="hidden lg:flex fixed right-0 top-0 w-[95px] h-screen bg-card flex-col items-center pt-[73px] pb-[131px] z-10">
      <h3 className="text-dark text-[18px] font-bold capitalize mb-8">
        Links
      </h3>
      <div className="flex flex-col gap-[15px] items-center">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white hover:bg-[#1d4ed8] transition-colors"
            title={link.name}
          >
            <link.icon className="text-[20px]" />
          </a>
        ))}
      </div>
    </aside>
  );
}
