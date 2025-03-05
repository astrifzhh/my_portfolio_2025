import React from "react";

const HeroBlog = () => {
  return (
    <div className="w-full mx-auto lg:max-w-[76vw] pt-40" id="#hero">
      <div className="bg-hero-blog flex justify-center relative py-16">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-sm font-regular text-center text-black-200 dark:text-blue-100 mb-4">
            Welcome to Bulletin
          </h2>
          <h1 className="heading-blog lg:max-w-[55vw] mb-4 leading-relaxed">
            UI UX Designer🖌️ that ignite
            <span className="text-purple"> inspiration💎</span>, Project
            <span className="text-purple"> Manage👋</span>
            that enhance <span className="text-purple">team✨</span>
          </h1>
          {/* <p className="text-center">
            Hi, I&apos;m Astri. Love design, code and eat.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default HeroBlog;
