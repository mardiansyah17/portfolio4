import Image from "next/image";
import React from "react";
import Button from "@/components/Button";
import {FaArrowDown} from "react-icons/fa6";

const Hero = () => {
    return (
        <div
            className={"flex justify-center relative items-center flex-col md:flex-row-reverse md:justify-around min-h-screen"}>
            <div className={`w-full h-[15rem] sm:h-[32rem] md:size-[40rem] relative`}>
                <Image src={'/images/Muhammad Mardiansyah1.png'} priority className={'object-cover'}
                       alt={'Muhammad Mardiansyah'}
                       fill/>

            </div>
            <div>
                <div>
                    <p className={"text-center mb-4 text-lg"}>Software Engineer</p>
                    <h1 className={"text-2xl font-bold text-center bg-gradient-to-br from-orange-600 to-amber-300 text-transparent bg-clip-text"}>Muhammad
                        Mardiansyah</h1>
                </div>
                <div className={"mt-4 space-x-4 justify-center flex"}>
                    <Button>Blog</Button>
                    <Button variant={"outline"}>Download CV</Button>
                </div>
            </div>
            <FaArrowDown className={'absolute bottom-14 animate-bounce text-3xl text-orange-500'}/>
        </div>
    );
};

export default Hero;
