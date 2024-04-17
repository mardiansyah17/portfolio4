import React from "react";
import ItemSkill from "@/components/ItemSkill";

const Projects = () => {
    return (
        <div className={`p-3`}>
            <h1 className={"text-xl mb-4 text-center font-bold  bg-gradient-to-br from-orange-600 to-amber-300 text-transparent bg-clip-text"}>
                Skills
            </h1>
            <div className={`grid grid-cols-2 sm:grid-cols-3 gap-10`}>
                <ItemSkill logo={"javascript"} title={"Javascript"}/>
                <ItemSkill logo={"react"} title={"React.js"}/>
                <ItemSkill logo={"php"} title={"PHP"}/>
                <ItemSkill logo={"laravel"} title={"Laravel"}/>
                <ItemSkill bg={"bg-white p-1"} logo={"nextjs"} title={"Next.js"}/>
            </div>
        </div>
    );
};

export default Projects;
