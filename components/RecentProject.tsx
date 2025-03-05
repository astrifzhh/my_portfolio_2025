"use client";
import { projects } from "@/data";
import React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";

import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProject = () => {
  // Function to create a URL-friendly slug
  const createSlug = (text: string): string => {
    if (!text) return ""; // Handle undefined/null cases safely
    return text
      .toString() // Ensure it's a string
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-"); // Replace spaces with hyphens
  };

  return (
    <div className="py-20 mt-24" id="projects">
      <h1 className="heading">
        A small selection of <span className="text-purple">recent project</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer
              title={`${title}`}
              // href={`/${createSlug(link)}`} -- kalau mau membuat slug
              href={`/ProjectDetails/${link}`}
              // href={`/ProjectDetails/${link}`}
            >
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden mb-10">
                {/* Background Image */}
                <img
                  src="/bg.png"
                  alt="bg-img"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Foreground Image */}
                <img
                  src={img}
                  alt={title}
                  className="z-10 w-full h-auto sm:inset-auto sm:bottom-0 rounded-lg"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3 ">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full dark:bg-black bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flew lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
