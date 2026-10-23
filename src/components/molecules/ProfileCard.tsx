import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { profile } from "@/data/profile";

/**
 * Props for the ProfileCard molecule component.
 */
interface ProfileCardProps {
  /** Controls the top spacing; both layouts use the same compact profile. */
  size: "desktop" | "mobile";
}

/**
 * Atomic Design molecule that composes the user's profile photo, name, and title
 * into a unified card layout. Adapts spacing and sizing based on the `size` prop.
 * Used inside the sidebar organism of the resume page.
 */
export default function ProfileCard({ size }: ProfileCardProps) {
  return (
    <div className={`flex flex-col items-center px-6 pb-6 ${size === "desktop" ? "pt-8" : "pt-6"}`}>
      <div className="w-24 h-24 rounded-full overflow-hidden">
        <Image src="/images/profile.png" alt={profile.name} width={96} height={96} className="w-full h-full object-cover" />
      </div>
      <h2 className="text-[18px] mt-4 text-dark font-medium text-center">
        {profile.name}
      </h2>
      <p className="text-[14px] text-secondary mt-1">
        {profile.title}
      </p>
      <p className="flex items-center gap-2 text-[14px] text-secondary mt-3">
        <FaMapMarkerAlt aria-hidden="true" className="text-[12px] shrink-0" />
        {profile.location}
      </p>
    </div>
  );
}
