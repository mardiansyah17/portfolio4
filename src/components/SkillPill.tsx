import { FC } from "react";

const SkillPill: FC<SkillPillProps> = ({ skill }) => (
  <span className="inline-block bg-gray-800/50 border border-gray-700 text-gray-300 rounded-full px-4 py-2 text-sm font-semibold mr-3 mb-3 shadow-md transform hover:scale-110 hover:bg-cyan-500 hover:text-gray-900 transition-all duration-300 cursor-pointer">
    {skill}
  </span>
);

export default SkillPill;

interface SkillPillProps {
  skill: string;
}
