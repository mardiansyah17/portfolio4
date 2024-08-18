import React from "react";

const AboutMe = () => {
  return (
    <div className={""}>
      <h1
        className={
          "text-xl mb-4 font-bold  bg-gradient-to-br from-orange-600 to-amber-300 text-transparent bg-clip-text"
        }
      >
        About me
      </h1>
      <div className={"h-fit flex "}>
        <span
          className={
            "w-10 sm:w-4 mr-3 min-h-full rounded-xl bg-gradient-to-b from-orange-600 to-amber-300 "
          }
        ></span>
        <p>
          Perkenalkan nama saya Muhammad Mardiansyah seorang Software engineer dapat mengembangkan
          aplikasi web dengan berbagai fitur dan fungsionalitas. Pada pembuatan website pada sisi
          client saya mampu membuat website yang menarik, cepat dan responsive dengan menggunakan
          Tailwind css sebagai style dan React.JS dan Next.JS sebagai framework. pada pembuat pada
          sisi server atau backend saya memiliki keahlian membuat api dengan menggunakan Node.JS
          atau Laravel.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
