"use client";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col text-center items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how i can help you
          achieve your goals.
        </p>
        <a href="mailto:astrifauziah287@gmacil.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4">
        <p className="md:text-base text-sm md:font-normal font-light ">
          Copyright © 2025 Astri Fauziah
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              // key={profile.id}
              key={String(profile.id)}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 dark:bg-black-200 bg-white-200 rounded-full"
            >
              <img
                src={profile.img}
                alt={String(profile.id)}
                width="20"
                height="20"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
