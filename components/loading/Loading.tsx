import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Component
import { ShootingStars } from "@/components/ui/ShootingStars";
import { StarsBackground } from "../ui/StarsBackground";

const Loading = () => {
  return (
    <div className="h-screen w-full dark:bg-black-100 bg-white flex items-center justify-center absolute top-0 left-0">
      <div className="flex flex-col items-center justify-center min-h-screen relative">
        <div className="translate-y-[40%] mx-auto">
          <DotLottieReact
            src="https://lottie.host/d29e57ba-514a-4597-ba6c-9a2f26cb7ed6/sF0tuxRvKi.lottie"
            loop
            autoplay
          />
        </div>
        <div className="translate-y-[-20%] mx-auto">
          <DotLottieReact
            src="https://lottie.host/99524fa4-6c65-4004-a889-3a0cda7dd405/aSpkB8vQXy.lottie"
            loop
            autoplay
          />
        </div>
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default Loading;
