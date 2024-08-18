"use client";
import Image from "next/image";
import React from "react";
import Button from "@/components/Button";
import { FaArrowDown, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";
import ParticleBackground from "../ParticleBackground";

const Hero = () => {
  return (
    <>
      <div
        className={
          "flex justify-center relative items-center flex-col md:flex-row-reverse md:justify-between md:w-4/5 md:mx-auto  min-h-screen"
        }
      >
        <div className={`w-full h-[15rem] sm:h-[32rem] md:size-[40rem] relative`}>
          <Image
            src={"/images/Muhammad Mardiansyah.png"}
            priority
            className={"object-cover"}
            alt={"Muhammad Mardiansyah"}
            fill
          />
        </div>
        <div>
          <div>
            <h1
              className={
                "text-2xl font-bold text-center bg-gradient-to-br from-orange-600 to-amber-300 text-transparent bg-clip-text"
              }
            >
              Muhammad Mardiansyah
            </h1>
            <p className={"text-center mt-4 text-lg"}>Software developer</p>
          </div>
          <div className="flex justify-around mb-5 mt-4 w-4/5 mx-auto">
            <Link target="_blank" href={"https://www.linkedin.com/in/mmardiansyah/"}>
              <FaLinkedinIn size={25} />
            </Link>
            <Link target="_blank" href={"https://github.com/mardiansyah17"}>
              <FaGithub size={25} />
            </Link>
            <Link target="_blank" href={"https://www.instagram.com/mardiancode/"}>
              <FaInstagram size={25} />
            </Link>
          </div>
          <div className={"mt-4 space-x-4 justify-center flex"}>
            <Button>Blog</Button>
            <Link
              target={"_blank"}
              locale={false}
              href={
                "https://drive.google.com/file/d/1BuMN8RSJ6HXAUTy9xG1DE9dG2Lvoniiw/view?usp=drive_link"
              }
              className={`px-4 min-w-24 py-2 rounded-md  border-orange-500 border
          `}
            >
              Download CV
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 flex justify-center left-0 right-0">
          <FaArrowDown className={"animate-bounce text-3xl text-orange-500"} />
        </div>
      </div>
    </>
  );
};

export default Hero;
