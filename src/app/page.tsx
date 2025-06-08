import AnimatedSection from "@/components/AnimatedSection";
import CursorSpotlight from "@/components/CursorSpotlight";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import Hero from "@/components/Hero";
import SkillPill from "@/components/SkillPill";
import { Metadata } from "next";
import { FC, ReactNode } from "react";
import { BsBriefcase, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaCheckCircle, FaRegUserCircle } from "react-icons/fa";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { MdOutlineLocationOn } from "react-icons/md";

export const metadata: Metadata = {
  title: "Muhammad Mardiansyah | Software Engineer",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Muhammad Mardiansyah Software Engineer",
    "Muhammad Mardiansyah",
    "Software Engineer",
    "Muhammad Mardiansyah Portfolio",
    "Muhammad Mardiansyah Blog",
    "Muhammad Mardiansyah Resume",
    "Muhammad Mardiansyah Projects",
    "Muhammad Mardiansyah Skills",
    "Muhammad Mardiansyah Fullstack developer",
    "Muhammad Mardiansyah Programmer",
    "Muhammad Mardiansyah Universitas Bina Darma",
    "Muhammad Mardiansyah Bina Darma",
  ],
  description:
    "Saya Muhammad Mardiansyah seorang software engineer yang berfokus pada pengembangan aplikasi web dan mobile. Saya mahasiswa dari Universitas Bina Darma jurusan Teknik Informatika. Saya memiliki pengalaman dalam pengembangan aplikasi web dan mobile selama 2 tahun. Saya memiliki kemampuan dalam pengembangan aplikasi web dan mobile menggunakan teknologi terbaru seperti React, React Native, Node.js, Express.js, dan MongoDB. Saya juga memiliki kemampuan dalam pengembangan aplikasi web menggunakan teknologi seperti HTML, CSS, dan JavaScript. Saya juga memiliki kemampuan dalam pengembangan aplikasi mobile menggunakan teknologi seperti React Native. Saya juga memiliki kemampuan dalam pengembangan aplikasi backend menggunakan teknologi seperti Node.js, Express.js, dan MongoDB. Saya juga memiliki kemampuan dalam pengembangan aplikasi frontend menggunakan teknologi seperti React. Saya juga memiliki kemampuan dalam pengembangan aplikasi backend menggunakan teknologi seperti Node.js, Express.js, dan MongoDB. Saya juga memiliki kemampuan dalam pengembangan aplikasi frontend menggunakan teknologi seperti React.",
  authors: [{ name: "Muhammad Mardiansyah" }],
  creator: "Muhammad Mardiansyah",
  publisher: "Muhammad Mardiansyah",
};

const AuroraBackground: FC = () => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-blob"></div>
    <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
    <style>{`
            @keyframes blob {
                0% { transform: translate(0px, 0px) scale(1); }
                33% { transform: translate(30px, -50px) scale(1.1); }
                66% { transform: translate(-20px, 20px) scale(0.9); }
                100% { transform: translate(0px, 0px) scale(1); }
            }
            .animation-delay-2000 { animation-delay: 2s; }
            .animation-delay-4000 { animation-delay: 4s; }
        `}</style>
  </div>
);

const SocialIcon: FC<SocialIconProps> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 block p-2"
  >
    {children}
  </a>
);

const Page: FC = () => {
  return (
    <div className="bg-[#050A18] text-gray-300 min-h-screen font-sans overflow-x-hidden">
      <AuroraBackground />
      <CursorSpotlight />

      <div className="hidden md:block fixed left-0 bottom-0 px-10 z-50">
        <div className="flex flex-col items-center gap-2 after:content-[''] after:block after:w-px after:h-24 after:bg-gray-600">
          <SocialIcon href="https://github.com/mardiansyah17">
            <BsGithub size={25} />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/mmardiansyah/">
            <BsLinkedin size={25} />
          </SocialIcon>
        </div>
      </div>
      <div className="hidden md:block fixed right-0 bottom-0 px-10 z-50">
        <div className="flex flex-col items-center gap-6 after:content-[''] after:block after:w-px after:h-24 after:bg-gray-600">
          <a
            href="mailto:mardiansyahm12@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-1"
            style={{ writingMode: "vertical-rl" }}
          >
            mardiansyahm12@gmail.com
          </a>
        </div>
      </div>

      <main className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-40">
        <Hero />

        <div className=" py-16">
          <AnimatedSection className="about">
            <h2 className="text-3xl font-bold text-center mb-12 text-white flex justify-center items-center gap-3">
              <FaRegUserCircle className="text-cyan-400" />
              About Me
            </h2>
            <div className="flex justify-center  ">
              <p className="text-lg leading-relaxed w-full md:w-2/3 md:text-xl text-center">
                Seorang Software Engineer yang berpengalaman mengembangkan aplikasi web dan mobile.
                Saya membangun antarmuka yang cepat, responsif, dan menarik menggunakan ReactJS,
                NextJS, dan Tailwind CSS. Di sisi backend, saya mahir membuat API dengan Laravel dan
                Node.js. Kini, saya juga menguasai pengembangan aplikasi mobile menggunakan Flutter
                dan React Native, serta mampu melakukan deployment ke VPS secara mandiri.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection className="skills">
            <h2 className="text-3xl font-bold text-center mb-12 text-white flex justify-center items-center gap-3">
              <HiOutlineCodeBracketSquare className=" text-cyan-400" />
              Skills
            </h2>
            <div className="text-center max-w-4xl mx-auto">
              <SkillPill skill="TypeScript" />
              <SkillPill skill="React.js" />
              <SkillPill skill="Next.js" />
              <SkillPill skill="Tailwind CSS" />
              <SkillPill skill="Node.js" />
              <SkillPill skill="Express.js" />
              <SkillPill skill="Laravel" />
              <SkillPill skill="Flutter" />
              <SkillPill skill="React Native" />
              <SkillPill skill="MongoDB" />
              <SkillPill skill="MySQL" />
              <SkillPill skill="PostgreSQL" />
              <SkillPill skill="Git" />
            </div>
          </AnimatedSection>
          <AnimatedSection className="experience">
            <h2 className="text-3xl font-bold text-center mb-12 text-white flex justify-center items-center gap-3">
              <BsBriefcase className=" text-cyan-400" />
              Pengalaman
            </h2>
            <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
              <ExperienceCard
                company="Athena Group"
                role="Staff IT & Programmer"
                period="Januari 2025 - Sekarang"
                location="Palembang, Indonesia"
                descriptions={[
                  "Mengembangkan aplikasi mobile untuk kebutuhan internal perusahaan menggunakan Flutter.",
                  "Membangun dan mengelola web aplikasi serta REST API dengan teknologi modern.",
                  "Melakukan deployment dan maintenance aplikasi di server VPS untuk memastikan performa dan ketersediaan sistem.",
                  "Berkontribusi dalam perencanaan dan implementasi sistem IT yang mendukung operasional bisnis.",
                ]}
              />

              <ExperienceCard
                company="Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka"
                role="Mobile Development Cohort"
                period="September 2024 - Januari 2025"
                location="Indonesia · Remote"
                descriptions={[
                  "Terpilih sebagai Distinction Graduate dan Lulusan Terbaik berkat performa akademik dan kontribusi selama program.",
                  "Mendalami pengembangan aplikasi Android menggunakan Kotlin serta praktik terbaik dalam desain arsitektur dan optimasi performa.",
                  "Berpartisipasi dalam proyek lintas disiplin bersama peserta dari alur Machine Learning dan Cloud Computing.",
                  "Mengembangkan soft skills seperti problem-solving, manajemen waktu, dan kolaborasi tim.",
                ]}
              />

              <ExperienceCard
                company="SEAMEO RECFON"
                role="Programmer (Magang)"
                period="Februari 2024 - Juni 2024"
                location="Jakarta, Indonesia"
                descriptions={[
                  "Mengembangkan aplikasi mobile dengan Flutter dan Supabase untuk edukasi gizi",
                  "Mengintegrasikan API Gemini untuk mendeteksi status gizi dari gambar makanan",
                  "Membangun fitur Jadwal Sehat untuk mengelola konsumsi harian pengguna",
                  "Merancang dan mengimplementasikan fitur pencarian kandungan gizi",
                ]}
              />
              <ExperienceCard
                company="PT LOKO Sistem Terintegrasi"
                role="Web Developer (Paruh Waktu)"
                period="Oktober 2023 - Januari 2024"
                location="Palembang, Indonesia"
                descriptions={[
                  "Berkolaborasi dalam perencanaan, pengembangan, dan implementasi sistem informasi kampus",
                  "Bertanggung jawab atas pembuatan fitur baru, pemeliharaan sistem, dan peningkatan fungsionalitas",
                  "Terlibat dalam pengembangan sistem informasi rumah sakit",
                ]}
              />
            </div>
          </AnimatedSection>
          {/* <AnimatedSection className="projects">
            <h2 className="text-3xl font-bold text-center mb-12 text-white flex justify-center items-center gap-3">
              <TiFolderOpen className=" text-cyan-400" />
              Projek Saya
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <ProjectCard
                title="Sistem Informasi Kampus"
                description="Platform manajemen akademik terintegrasi untuk mahasiswa dan dosen, dibangun dengan performa tinggi dan antarmuka yang responsif."
                imgSrc="https://placehold.co/600x400/0A192F/fbbf24?text=SI-Kampus"
                tech={["React", "Node.js", "MySQL"]}
                liveLink="#"
                repoLink="#"
              />
              <ProjectCard
                title="Aplikasi E-Commerce Modern"
                description="Toko online dengan fitur lengkap, mulai dari katalog produk hingga sistem pembayaran, dioptimalkan untuk UX."
                imgSrc="https://placehold.co/600x400/0A192F/fbbf24?text=E-Commerce"
                tech={["Next.js", "Tailwind", "MongoDB"]}
                liveLink="#"
                repoLink="#"
              />
              <ProjectCard
                title="Company Profile Page"
                description="Website profil perusahaan yang elegan dan profesional, menampilkan informasi bisnis dan portofolio dengan menarik."
                imgSrc="https://placehold.co/600x400/0A192F/fbbf24?text=Company"
                tech={["React", "Laravel", "Flutter"]}
                liveLink="#"
                repoLink="#"
              />
            </div>
          </AnimatedSection>
          <AchievemenSection /> */}
        </div>
      </main>
    </div>
  );
};

const ExperienceCard: FC<ExperienceCardProps> = ({
  company,
  role,
  period,
  location,
  descriptions,
}) => (
  <GlassmorphismCard>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white">{company}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-400 mt-1 mb-4">
        <span className="text-cyan-400 font-semibold sm:mr-4">{role}</span>
        <span className="hidden sm:inline">|</span>
        <span className="sm:mx-4">{period}</span>
        <span className="hidden sm:inline">|</span>
        <span className="sm:ml-4 flex items-center mt-1 sm:mt-0">
          <MdOutlineLocationOn />
          {location}
        </span>
      </div>
      <ul className="space-y-2">
        {descriptions.map((desc, index) => (
          <li key={index} className="flex items-center">
            <FaCheckCircle className="mr-2 text-cyan-400" />
            <span>{desc}</span>
          </li>
        ))}
      </ul>
    </div>
  </GlassmorphismCard>
);

export default Page;

interface SocialIconProps {
  href: string;
  children: ReactNode;
}

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location: string; // Properti baru ditambahkan
  descriptions: string[];
}
