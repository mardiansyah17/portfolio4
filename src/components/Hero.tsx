"use client";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";

// const Hero = () => {
//   const photoRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!photoRef.current) return;
//       const { left, top, width, height } = photoRef.current.getBoundingClientRect();
//       const x = (e.clientX - left - width / 2) / 25;
//       const y = (e.clientY - top - height / 2) / 25;
//       photoRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
//     };

//     const handleMouseLeave = () => {
//       if (photoRef.current) {
//         photoRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
//       }
//     };

//     const area = document.getElementById("hero-area");
//     if (area) {
//       area.addEventListener("mousemove", handleMouseMove);
//       area.addEventListener("mouseleave", handleMouseLeave);
//     }

//     return () => {
//       if (area) {
//         area.removeEventListener("mousemove", handleMouseMove);
//         area.removeEventListener("mouseleave", handleMouseLeave);
//       }
//     };
//   }, []);

//   const handleDownloadCV = (): void => {
//     window.open("/path-to-your-cv.pdf", "_blank");
//   };

//   return (
//     <header id="hero-area" className="min-h-screen flex items-center">
//       <div className="w-full grid md:grid-cols-2 items-center gap-10">
//         <div className="text-center md:text-left">
//           <p
//             className="text-lg text-cyan-400 font-medium mb-2 animate-fade-in-up"
//             style={{ animationDelay: "100ms" }}
//           >
//             Halo, Saya
//           </p>
//           <h1
//             className="text-4xl md:text-5xl lg:text-7xl mb-5 font-extrabold text-white tracking-tight animate-fade-in-up"
//             data-text="Muhammad Mardiansyah"
//             style={{ animationDelay: "200ms" }}
//           >
//             Muhammad Mardiansyah
//           </h1>
// <TypeAnimation
//   sequence={[
//     "Software Engineer",
//     1000,
//     "Web Developer",
//     1000,
//     "Mobile App Developer",
//     1000,
//     "Full Stack Developer",
//     1000,
//     "Tech Enthusiast",
//     1000,
//   ]}
//   speed={50}
//   className="text-2xl font-semibold text-cyan-400  animate-fade-in-up"
//   repeat={Infinity}
// />
//           <p
//             className="max-w-xl mx-auto md:mx-0 mt-6 text-gray-400 animate-fade-in-up"
//             style={{ animationDelay: "400ms" }}
//           >
//             Saya seorang software engineer yang bersemangat dalam membuat aplikasi web dan mobile
//             yang inovatif. Dengan pengalaman dalam berbagai teknologi, saya selalu berusaha untuk
//             menciptakan solusi yang efisien dan menarik.
//           </p>
//           <div
//             className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fade-in-up"
//             style={{ animationDelay: "500ms" }}
//           >
//             <button
//               onClick={handleDownloadCV}
//               className="shine-button bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
//             >
//               Unduh CV
//             </button>
//           </div>
//         </div>
//         <div className="hidden md:flex justify-center items-center">
//           <div
//             ref={photoRef}
//             className="relative w-80 h-80 group transition-transform duration-300 ease-out"
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl transform -rotate-6 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500"></div>
//             <Image
//               src="/images/Muhammad Mardiansyah.png"
//               alt="Foto Profil Muhammad Mardiansyah"
//               width={320}
//               height={320}
//               className="relative w-full h-full object-cover rounded-3xl shadow-xl border-2 border-gray-800"
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Hero;

const Hero: FC = () => {
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
        photoRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
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

  const handleDownloadCV = (): void => {
    window.open("/documents/Muhammad Mardiansyah - CV.pdf", "_blank");
  };

  return (
    <header id="hero-area" className="min-h-screen flex items-center justify-center">
      <div className="w-full grid md:grid-cols-2 items-center gap-10 mt-10">
        {/* Image div moved up and made visible on all screens */}
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
              alt="Foto Profil Muhammad Mardiansyah"
              className="relative w-full h-full object-cover rounded-3xl shadow-xl border-2 border-gray-800"
            />
          </div>
        </div>
        {/* Text div with padding for mobile view */}
        <div className="text-center md:text-left pt-5 md:pt-0">
          <p
            className="text-lg text-cyan-400 font-medium mb-2 animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            Halo, Saya
          </p>
          <h1
            className="text-2xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight animate-fade-in-up glitch"
            data-text="Muhammad Mardiansyah"
            style={{ animationDelay: "200ms" }}
          >
            Muhammad Mardiansyah
          </h1>
          <div className="h-8">
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
          </div>
          <p
            className="max-w-xl mx-auto md:mx-0 mt-6 text-gray-400 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            Saya seorang software engineer yang bersemangat dalam membuat aplikasi web dan mobile
            yang inovatif. Dengan pengalaman dalam berbagai teknologi, saya selalu berusaha untuk
            menciptakan solusi yang efisien dan menarik.
          </p>
          <div
            className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fade-in-up"
            style={{ animationDelay: "500ms" }}
          >
            <button
              onClick={handleDownloadCV}
              className="shine-button bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
            >
              Unduh CV
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
