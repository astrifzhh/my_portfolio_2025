/* Things that needed for component/Grid.tsx */
"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

import Lottie from "react-lottie";

import { BackgroundGradientAnimation } from "./GradientBackground";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
// import { GlobeDemo } from "./GridGlobe";

import { FiCopy } from "react-icons/fi";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  // Add items to passing
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id?: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // const text = "hi.astrifzh@gmail.com";
    navigator.clipboard.writeText("hi.astrifzh@gmail.com");

    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:border-white/[0.1] border-black border border-transparent justify-between flex flex-col space-y-4 dark:bg-card bg-card",
        className
      )}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {/* Called Card Content */}
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" /> */}
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm z-10 text-[#c1c2d3]">
            {description}
          </div>

          {id === 2 && (
            <div className="w-fit h-full absolute">
              {/* Called Card Content */}
              {img && (
                <img
                  // src={img}
                  // alt={img}
                  className={cn("object-cover object-center")}
                />
              )}
            </div>
          )}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 text-[#f2dfff] dark:text-gray-500">
              <div className="flex flex-col gap-3 lg:gap-8">
                {["React.js", "Next.js", "Adobe Illustator"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center dark:bg-[#10132E] bg-[#C9A6E0]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center dark:bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center dark:bg-[#10132E] bg-[#F4EFF9]"></span>
                {["Figma", "Project Manage", "Adobe"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center dark:bg-[#10132E] bg-[#C9A6E0]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>

              <MagicButton
                title={copied ? "Email copied" : "Copy my email address"}
                icon={<FiCopy className="mr-1" />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161a31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
