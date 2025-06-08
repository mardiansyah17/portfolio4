import { FC, ReactNode } from "react";

const GlassmorphismCard: FC<GlassmorphismCardProps> = ({ children, className }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
    <div className="relative bg-black/60 backdrop-blur-md border border-gray-700/80 rounded-lg h-full">
      {children}
    </div>
  </div>
);

export default GlassmorphismCard;

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
}
