"use client";
import { FC } from "react";
import GlassmorphismCard from "@/components/GlassmorphismCard";

const AchievementCard: FC<AchievementCardProps> = ({
  company,
  role,
  period,
  description,
  documentationUrl,
  onViewDocumentation,
}) => (
  <GlassmorphismCard>
    <div className="p-6 flex flex-col h-full">
      <h3 className="text-xl font-bold text-white">{company}</h3>
      <p className="text-cyan-400 font-semibold mt-1">{role}</p>
      <p className="text-gray-400 text-sm mb-3">{period}</p>
      <p className="text-gray-300 flex-grow">{description}</p>
      <button
        onClick={() => onViewDocumentation(documentationUrl, company)}
        className="mt-4 self-start text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
      >
        Lihat Sertifikat &rarr;
      </button>
    </div>
  </GlassmorphismCard>
);

export default AchievementCard;
interface AchievementCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  documentationUrl: string;
  onViewDocumentation: (url: string, title: string) => void;
}
