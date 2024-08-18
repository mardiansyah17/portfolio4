import React from "react";
import { Badge } from "../ui/badge";

const Projects = () => {
  return (
    <>
      <h1
        className={
          "text-xl mb-4 mt-10 font-bold  bg-gradient-to-br from-orange-600 to-amber-300 text-transparent bg-clip-text"
        }
      >
        Skills
      </h1>
      <div className={`flex gap-4 flex-wrap`}>
        <Badge>Javascript</Badge>
        <Badge>React.js</Badge>
        <Badge>Next.js</Badge>
        <Badge>React Native</Badge>
        <Badge>PHP</Badge>
        <Badge>Laravel</Badge>
        <Badge>Dart</Badge>
        <Badge>Flutter</Badge>
        <Badge>MySQL</Badge>
        <Badge>MongoDB</Badge>
        <Badge>Node.js</Badge>
      </div>
    </>
  );
};

export default Projects;
