import { FaCheckSquare } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const languages = [
  { name: "Spanish", level: 100 },
  { name: "English", level: 80 },
];

const skills = [
  { name: "Python", level: 80 },
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 60 },
  { name: "Java", level: 60 },
  { name: "HTML/CSS", level: 60 },
  { name: "C++", level: 40 },
];

const extraSkills = [
  "Apache Spark",
  "PostgreSQL",
  "Microsoft Fabric",
  "FastAPI",
  "Next.js",
  "Git",
];

export default function LeftSidebar() {
  return (
    <aside className="hidden lg:block fixed left-0 top-0 w-[305px] h-screen bg-white overflow-y-auto z-10">
      {/* Profile */}
      <div className="flex flex-col items-center pt-[50px] px-10">
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
          <img src="/images/profile.png" alt="Héctor Güiza" className="w-full h-full object-cover" />
        </div>
        <h2 className="mt-8 text-dark text-[18px] font-medium capitalize">
          Héctor Andrés Güiza
        </h2>
        <p className="text-secondary text-[15px] capitalize mt-1">
          Full Stack Developer
        </p>
      </div>

      {/* Divider */}
      <div className="divider mt-6" />

      {/* About */}
      <div className="px-10">
        <div className="flex justify-between text-[15px] py-[6px]">
          <span className="text-dark capitalize">Age:</span>
          <span className="text-dark capitalize">23</span>
        </div>
        <div className="flex justify-between text-[15px] py-[6px]">
          <span className="text-dark capitalize">Residence:</span>
          <span className="text-dark capitalize">Colombia</span>
        </div>
        <div className="flex justify-between text-[15px] py-[6px]">
          <span className="text-dark capitalize">Freelance:</span>
          <span className="text-available capitalize">Available</span>
        </div>
        <div className="flex justify-between text-[15px] py-[6px]">
          <span className="text-dark capitalize">Address:</span>
          <span className="text-dark capitalize">Medellín, Colombia</span>
        </div>
      </div>

      {/* Divider */}
      <div className="divider" />

      {/* Languages */}
      <div className="px-10">
        <h3 className="text-dark text-[18px] font-medium capitalize mb-4">
          Languages
        </h3>
        {languages.map((lang) => (
          <div key={lang.name} className="mb-3">
            <div className="flex justify-between text-[15px] text-secondary capitalize">
              <span>{lang.name}</span>
              <span>{lang.level}%</span>
            </div>
            <div className="progress-track mt-1">
              <div
                className="progress-fill"
                style={{ width: `${lang.level - 2}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="divider" />

      {/* Skills */}
      <div className="px-10">
        <h3 className="text-dark text-[18px] font-medium capitalize mb-4">
          Programming Languages
        </h3>
        {skills.map((skill) => (
          <div key={skill.name} className="mb-3">
            <div className="flex justify-between text-[15px] text-secondary capitalize">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="progress-track mt-1">
              <div
                className="progress-fill"
                style={{ width: `${skill.level - 2}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="divider" />

      {/* Extra Skills */}
      <div className="px-10 pb-6">
        <h3 className="text-dark text-[18px] font-medium capitalize mb-4">
          Extra Skills
        </h3>
        {extraSkills.map((skill) => (
          <div key={skill} className="flex items-center gap-3 mb-2">
            <FaCheckSquare className="text-accent text-[15px] shrink-0" />
            <span className="text-secondary text-[15px] capitalize">
              {skill}
            </span>
          </div>
        ))}
      </div>

      {/* Dark mode toggle */}
      <div className="divider" />
      <div className="flex items-center justify-between px-10 pb-6">
        <span className="text-dark text-[15px] capitalize">Dark Mode</span>
        <ThemeToggle size="sm" />
      </div>
    </aside>
  );
}
