import React from "react";
import Hero from "@/components/Sections/Hero";
import AboutMe from "@/components/Sections/AboutMe";
import Skills from "@/components/Sections/Skills";
import type { Metadata } from "next";
import Projects from "@/components/Sections/Projects";
import ParticleBackground from "@/components/ParticleBackground";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { Tables } from "../../database.types";

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
const Page = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data } = await supabase.from("projects").select("*,categories(name)");
  console.log(data);
  return (
    <div>
      <ParticleBackground />

      <Hero />
      <div className="w-[90%] sm:w-3/4 mx-auto">
        <AboutMe />
        <Skills />
        {data != null ? <Projects projects={data as unknown as Tables<"projects">} /> : null}
      </div>
    </div>
  );
};

export default Page;
