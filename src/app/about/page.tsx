"use client";
import React from "react";
import { BackgroundLines } from "../../components/ui/background-lines";
import ButtonAnimation from "../../components/ButtonAnimation/button"
import {
  FaGraduationCap,
  FaReact,
} from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
const About = () => {
  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Cloud",
    "CyberSecurity",
  ];

  const words =
    "B.Tech IT Graduate • Front-End Developer • React & Next.js Enthusiast • UI/UX Explorer • Open Source Contributor";

  

  return (
    <div>
      <BackgroundLines className="flex w-full flex-col px-4">
        <div className=" ">
          <div className="pt-1 p-4 px-4 flex flex-col justify-center 2xl:px-44 2xl:py-10 mx-auto bg-black text-white">
            {/* Heading */}
            <div className="text-2xl font-bold text-orange-200 2xl:text-3xl">
              Little About Me
            </div>

            {/* Section: Background */}
            <div className="flex items-center gap-x-2 pt-8 pb-4">
              <FaGraduationCap className="text-2xl text-blue-300 2xl:text-3xl" />
              <h1 className="text-xl font-semibold 2xl:text-2xl">Background</h1>
            </div>

            {/* You can re-enable this animation if needed */}
            <TextGenerateEffect
              duration={10}
              filter={false}
              words={words}
              className="2xl:text-3xl text-white"
            />

            {/* Section: Technology */}
            <div className="pt-10">
              <div className="flex gap-x-2 py-2 font-sans">
                <FaReact className="text-2xl mt-1 text-red-300 2xl:text-3xl" />
                <div className="text-2xl 2xl:text-3xl">Technology:</div>
              </div>
              <div className="flex flex-col gap-y-3">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex items-center gap-x-2">
                    <IoTerminal className="text-xl text-green-400 2xl:text-2xl" />
                    <span className="text-lg capitalize 2xl:text-xl">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Let's Connect */}
            <div className="py-4 lg:py-10 2xl:pt-20">
              <hr />
              <div className="pt-6 text-2xl lg:pt-6 2xl:pt-8 2xl:text-4xl flex justify-center">
                Let&apos;s connect
              </div>  
              <ButtonAnimation/>
            </div>
          </div>
        </div>
      </BackgroundLines>
    </div>
  );
};

export default About;
