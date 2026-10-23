import { FaChevronDown, FaCode, FaDatabase, FaCloud, FaTools } from "react-icons/fa";
import type { IconType } from "react-icons";
import { languages, skillGroups, featuredSkills } from "@/data/profile";

const featuredNames = new Set(featuredSkills.map((skill) => skill.name));
const categoryIcons: Record<string, IconType> = {
  Frontend: FaCode,
  "Backend & Data": FaDatabase,
  "Cloud & Architecture": FaCloud,
  "Engineering Tools": FaTools,
};

/** The same readable skill groups and language levels on desktop and mobile. */
export default function SidebarSkills() {
  return (
    <div className="px-6">
      <section className="py-5 border-t border-gray-200">
        <h3 className="text-dark text-[14px] font-medium mb-3">Languages</h3>
        <dl className="space-y-2 text-[14px]">
          {languages.map((language) => (
            <div key={language.name} className="flex flex-wrap justify-between gap-x-3 gap-y-1">
              <dt className="text-dark">{language.name}</dt>
              <dd className="text-secondary">{language.proficiency}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="py-5 border-t border-gray-200">
        <h3 className="text-dark text-[14px] font-medium mb-3">Core stack</h3>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
          {featuredSkills.map(({ name, icon: Icon }) => (
            <li key={name} className="flex items-center gap-3 min-w-0 text-dark text-[14px]">
              <Icon aria-hidden="true" className="w-5 h-5 shrink-0 text-secondary" />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </section>
      <div className="border-b border-gray-200">
        {skillGroups.map((group) => {
          const Icon = categoryIcons[group.heading];
          return (
            <details key={group.heading} className="group border-t border-gray-200">
              <summary className="skill-summary flex items-center gap-3 py-3 text-dark text-[14px] font-medium cursor-pointer focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2">
                <Icon aria-hidden="true" className="w-4 h-4 shrink-0 text-secondary" />
                <span className="flex-1 min-w-0">{group.heading}</span>
                <FaChevronDown aria-hidden="true" className="w-3 h-3 shrink-0 text-secondary group-open:rotate-180" />
              </summary>
              <ul className="pl-7 pb-4 space-y-2 text-secondary text-[14px] leading-5">
                {group.items.filter((item) => !featuredNames.has(item)).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
          );
        })}
      </div>
    </div>
  );
}
