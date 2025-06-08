"use client";
import { FC } from "react";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import GlassmorphismCard from "./GlassmorphismCard";

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  imgSrc,
  tech,
  liveLink,
  repoLink,
}) => (
  <GlassmorphismCard className="flex flex-col">
    <div className="overflow-hidden rounded-t-lg">
      <img
        src={imgSrc}
        alt={`Screenshot of ${title}`}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "https://placehold.co/600x400/0A192F/fbbf24?text=Image+Not+Found";
        }}
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-400 mt-2 mb-4 text-sm leading-relaxed flex-grow">{description}</p>
      <div className="mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="inline-block bg-gray-700 text-cyan-400 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-start space-x-4 mt-auto">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-cyan-400 font-semibold flex items-center transition-colors duration-300"
        >
          <FaExternalLinkAlt className="text-cyan-400 mr-2" />
          Live Demo
        </a>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-cyan-400 font-semibold flex items-center transition-colors duration-300"
        >
          <FaCode className="mr-2 text-cyan-400" />
          Source
        </a>
      </div>
    </div>
  </GlassmorphismCard>
);

export default ProjectCard;

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  tech: string[];
  liveLink: string;
  repoLink: string;
}
