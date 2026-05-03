import { FaCopyright } from "react-icons/fa";

/**
 * Renders the footer — an atomic-design organism that composes the
 * FaCopyright icon atom into a centered copyright bar displayed at
 * the bottom of the page.
 */
export default function Footer() {
  return (
    <div className="bg-white rounded-lg flex items-center justify-center py-4">
      <FaCopyright className="text-dark text-[16px] mr-2" />
      <span className="text-dark text-[15px] capitalize">
        2026 All Rights Reserved. Héctor Güiza
      </span>
    </div>
  );
}
