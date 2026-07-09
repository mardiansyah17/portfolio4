"use client";

import Image from "next/image";
import { FC, useEffect, useRef } from "react";

const HeroPhoto: FC = () => {
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!photoRef.current) return;

      const { left, top, width, height } = photoRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / 25;

      photoRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    const handleMouseLeave = () => {
      if (photoRef.current) {
        photoRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
      }
    };

    const area = document.getElementById("hero-area");

    if (area) {
      area.addEventListener("mousemove", handleMouseMove);
      area.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (area) {
        area.removeEventListener("mousemove", handleMouseMove);
        area.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div
        ref={photoRef}
        className="relative w-64 h-64 md:w-80 md:h-80 group transition-transform duration-300 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl transform -rotate-6 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500"></div>
        <Image
          src="/images/Muhammad Mardiansyah.png"
          width={320}
          height={320}
          priority
          sizes="(min-width: 768px) 320px, 256px"
          alt="Foto Profil Muhammad Mardiansyah"
          className="relative w-full h-full object-cover rounded-3xl shadow-xl border-2 border-gray-800"
        />
      </div>
    </div>
  );
};

export default HeroPhoto;
