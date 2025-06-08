"use client";
import AchievementCard from "@/components/AchievementCard";
import AnimatedSection from "@/components/AnimatedSection";
import { BsTrophy } from "react-icons/bs";

function AchievemenSection() {
  return (
    <AnimatedSection className="achievements">
      <h2 className="text-3xl font-bold text-center mb-12 text-white flex justify-center items-center gap-3">
        <BsTrophy className="text-cyan-400" />
        Prestasi
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <AchievementCard
          company="Studi Independen Bersertifikat"
          role="Bangkit Academy"
          period="MSIB Batch 7"
          description="Lolos seleksi ketat dan mengikuti program studi independen Bangkit, fokus pada jalur pembelajaran Machine Learning."
          documentationUrl="https://placehold.co/1200x800/050A18/FFFFFF?text=Sertifikat+Bangkit"
          onViewDocumentation={() => {}}
        />
      </div>
    </AnimatedSection>
  );
}

export default AchievemenSection;
