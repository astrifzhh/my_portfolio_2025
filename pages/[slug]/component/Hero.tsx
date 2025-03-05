import React from "react";
import { useRouter } from "next/router";
import { project_detail } from "../../../data/index"; // Adjust the path as needed

import { TextGenerateEffect } from "../../../components/ui/TextGenerateEffects";

type ProjectDetails = {
  id: number;
  title: string;
  des: string;
  img: string;
  content?: { key: string; value: string }[];
  requirement?: { key: string; value: string }[];
};

type HeroProps = {
  details: ProjectDetails; // Define the expected prop type
};

const Hero: React.FC<HeroProps> = ({ details }) => {
  if (!details) {
    return <h1>Project Not Found</h1>;
  }

  return (
    <>
      {/* Title Section */}
      <div className="max-w-4xl w-full py-20 mx-auto">
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block my-4">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="scale(-1,1) translate(-24,0)">
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </g>
            </svg>
            <span>Back</span>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
        <div key={details.id}>
          <h2 className="uppercase tracking-widest text-sm font-bold text-left text-purple dark:text-blue-300 mt-6">
            Meine Latest Portfolio
          </h2>
          <TextGenerateEffect
            className="text-left text-[40px] md:text-5xl lg:text-6xl flex max-w-screen-lg"
            words={details.title}
          />
          <p className="text-left dark:text-white">{details.des}</p>
        </div>
      </div>

      {/* Preview Image */}
      <div className="dark:bg-[#131924] bg-violet-50 w-screen relative left-0 right-0 ml-[-5px] sm:ml-[-10px]">
        <div className="w-full py-6 flex justify-center">
          <div className="max-w-screen-lg w-full px-4">
            <img
              className="w-full h-auto object-cover"
              src={details.img}
              alt={details.title}
            />
            {/* Role Section */}
            {details.requirement && details.requirement.length > 0 && (
              <div className="col">
                <div className="row flex">
                  {details.requirement.map(({ key, value }) => (
                    <div className="p-20" key={key}>
                      <strong>{key}: </strong> {value}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl w-full py-20 mx-auto">
        <div>
          <h2 className="uppercase tracking-widest text-sm font-bold text-left text-purple dark:text-blue-300 mt-6">
            Overview
          </h2>
        </div>
        <div className="col mt-6">
          <div className="row flex">
            <div>
              <h1 className="text-left heading-project lg:max-w-[30vw]">
                Why did the project<span className="text-purple"> exist</span>?
              </h1>
            </div>
            <div>
              <p className="text-left dark:text-white">{details.des}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
