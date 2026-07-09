"use client";

import { FC } from "react";
import { TypeAnimation } from "react-type-animation";

const HeroTypeAnimation: FC = () => (
  <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      "Software Engineer",
      1000,
      "Web Developer",
      1000,
      "Mobile App Developer",
      1000,
      "Full Stack Developer",
      1000,
      "Tech Enthusiast",
      1000,
    ]}
    speed={50}
    className="text-2xl font-semibold text-cyan-400  animate-fade-in-up"
    repeat={Infinity}
  />
);

export default HeroTypeAnimation;
