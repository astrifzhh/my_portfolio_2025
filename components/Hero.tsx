"use client";

import React from "react";
import { useState } from "react";

import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffects";
import MagicButton from "./ui/MagicButton";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";

// Icon
import { RiFilePaper2Line } from "react-icons/ri";
import { TbFileDownload } from "react-icons/tb";
import { TbMoodSmile } from "react-icons/tb";
import { FiDownload } from "react-icons/fi";

// Background
import { ShootingStars } from "./ui/ShootingStars";
import { StarsBackground } from "./ui/StarsBackground";

const Hero = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleDownload = () => {
    setShowConfetti(true);
  };

  return (
    <div className="py-40" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="blue"
        />
        <Spotlight
          className="-top-10 left-full h-[80vh] w-[50vw]"
          fill="var(--bg-color)"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="purple" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white flex items-center justify-center absolute top-0 left-0">
        <ShootingStars />
        <StarsBackground />
      </div>

      <div className="flex justify-center relative my-18 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-sm font-bold text-center text-black-200 dark:text-blue-100 max-w-80">
            Meine Latest Portfolio
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl flex max-w-4xl"
            words="Gain love and spread love through design."
          />

          <p className="text-center">
            Hi, I&apos;m Astri. Love design, code and eat.
          </p>

          <div className="relative">
            <div className={`absolute -top-5 right-0`}>
              <Lottie
                options={{
                  loop: showConfetti,
                  autoplay: showConfetti,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>
            <div>
              <a
                // Ini CV khusus buat virtus (nanti ganti)
                href="/file/cv_astrifauziah.pdf"
                download="cv_astrifauziah.pdf"
                className="block mt-6 md:mt-0"
              >
                <MagicButton
                  title={showConfetti ? "Downloaded!" : "Download CV"}
                  icon={
                    <FiDownload
                      style={
                        {
                          // Biar iconnya bisa dark/light mode
                          // color: "var(--icon-fill)",
                        }
                      }
                      className="ml-1 text-white"
                    />
                  }
                  position="right"
                  handleClick={handleDownload}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
