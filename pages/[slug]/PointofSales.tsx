"use client";

import React from "react";
import { ReactNode } from "react";
import { navItems } from "@/data";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

// Import Component
import { project_detail } from "../../data/index"; // Adjust the path as needed
import { TextGenerateEffect } from "../../components/ui/TextGenerateEffects";
import Loading from "@/components/loading/Loading";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import BackToTop from "./component/BackButton";
import BackBtn from "./component/BackBtn";

const POS = () => {
  const router = useRouter();

  if (!router.isReady) return <Loading />;

  return (
    <main className="flex flex-col relative dark:bg-black bg-white justify-center items-center overflow-clip">
      {/* Button Back to Top */}
      <BackToTop />

      <div className="max-w-screen-lg lg:w-[1024px] py-20 px-6 md:px-4 lg:px-0">
        {/* Button Back */}
        <BackBtn />

        {/* Content Start */}
        {/* Title */}
        <div>
          <h2 className="uppercase tracking-widest text-[16px] md:text-sm font-bold text-left text-purple dark:text-violet-400 mt-6">
            Mobile Application
          </h2>
          <TextGenerateEffect
            className="text-left text-[35px] md:text-6xl lg:text-7xl flex max-w-screen-lg"
            words={"Point of Sales System"}
          />
          <p className="text-left dark:text-white text-[18px] md:text-xl">
            Seamless Transactions, Smarter Management—Powering Your Business
            with Efficiency and Ease. 🚀
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <div className="w-full dark:bg-[#131924] bg-violet-50 relative flex justify-center py-20">
        <div className="w-full py-4 md:py-6 flex justify-center">
          <div className="max-w-screen-lg px-6 md:px-4 lg:px-0">
            <img
              className="w-full max-w-full h-auto object-cover px-auto mb-20 md:mb-0 lg:mb-0"
              src="/project/detail/pos_system.png"
              alt={"Point of Sales"}
            />
            <div className="row lg:col">
              <div className="flex flex-col lg:flex-row mx-auto justify-center">
                <div className="py-8 lg:py-32 px-8 md:px-4 space-y-2">
                  <div>
                    <strong>Role:</strong>
                  </div>
                  <div>User Research, Visual and Interaction Design</div>
                </div>
                <div className="py-8 lg:py-32 px-8 md:px-4 space-y-2">
                  <div>
                    <strong>Team:</strong>
                  </div>
                  <div>1 UI UX Designer, 2 Fullstack</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-screen-lg px-6 md:px-4 lg:px-0 py-48">
        <h2 className="text-[16px] md:text-sm uppercase tracking-widest text-sm font-bold text-left text-purple dark:text-violet-400">
          Overview
        </h2>
        <div className="row lg:col mt-6">
          <div className="flex flex-col lg:flex-row">
            <div>
              <h1 className="text-left font-bold text-[20px] md:text-[40px] lg:max-w-[30vw]">
                Why did the project<span className="text-purple"> exist</span>?
              </h1>
            </div>
            <div className="text-md md:text-base space-y-4  mt-8 lg:mt-0">
              <p className="text-left dark:text-white  max-w-2xl text-pretty">
                The expansion of a restaurant from Japan to Indonesia goes hand
                in hand with the growth of its sales. The overwhelming influx of
                sales data makes it impractical to rely solely on manual
                record-keeping to manage this data surge.
              </p>
              <p className="text-left dark:text-white max-w-2xl text-pretty">
                A system is needed to track sales from daily and weekly
                summaries to monthly reports, enabling business owners to easily
                monitor their profits on a monthly or even yearly basis for
                market strategy evaluation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="dark:bg-[#131924] bg-violet-50 w-full flex justify-center">
        <div className="max-w-screen-lg md:px-4 lg:px-0 py-48">
          <h2 className="text-[16px] md:text-sm uppercase tracking-widest text-sm font-bold text-center text-purple dark:text-violet-400 mt-6">
            Problem Statement
          </h2>
          <div className="mt-6 mx-6 lg:mx-0">
            {/* <h1 className="text-center heading-center">
                Why did the project<span className="text-purple"> exist</span>?
              </h1> */}
            <p className="dark:text-white text-pretty uppercase text-4xl lg:text-6xl text-center">
              How we can increase waiter and cashier performance using POS
              Application System to record all orders
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className=" bg-violet-50 w-full flex justify-center py-48 px-6 md:px-4 lg:px-0">
        <div className="max-w-screen-lg ">
          <h2 className="uppercase tracking-widest text-sm font-bold text-center text-violet-500  mt-6">
            Workflow
          </h2>
          <div className="mt-6">
            <h1 className="text-center text-4xl font-bold text-black">
              Design<span className="text-"> Process</span>
            </h1>
            <div className="mt-8">
              <img className="" src="/project/design_process.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="max-w-screen-lg px-6 md:px-4 lg:px-0 py-48">
        {" "}
        <h2 className="text-[16px] md:text-sm uppercase tracking-widest text-sm font-bold text-left text-purple dark:text-violet-400">
          Understanding and Reserach
        </h2>
        <div className="row lg:col mt-6">
          <div className="flex flex-col lg:flex-row lg:space-x-6">
            <div>
              <h1 className="text-left font-bold text-[20px] md:text-[40px] lg:max-w-[30vw] text-nowrap">
                How does it work?
              </h1>
            </div>
            <div className="text-md md:text-base space-y-4 mt-8 lg:mt-0">
              <p className="text-left dark:text-white max-w-2xl text-pretty">
                For your information, we already have POS System, but it's on
                website. In that case, our client requested to add some features
                and make them on mobile device version. Also, they want to
                re-make the design for mobile version.
              </p>
            </div>
          </div>
          {/* <div className="py-20">
            <img className="" src="/project/vpc.png" alt="" />
          </div> */}
        </div>
      </div>

      {/* Section 6 */}
      <div className="dark:bg-[#131924] bg-violet-50 w-full flex justify-center">
        <div className="max-w-screen-lg px-6 md:px-4 lg:px-0 py-48">
          <h2 className="text-[16px] md:text-sm uppercase tracking-widest text-sm font-bold text-left text-purple dark:text-violet-400">
            Exploration
          </h2>
          <div className="col mt-6">
            <div>
              <h1 className="text-left font-bold text-[20px] md:text-[40px] lg:max-w-[30vw] text-nowrap">
                Information Architecture
              </h1>
            </div>
            <div className="text-md md:text-base space-y-2">
              <p className="text-left dark:text-white text-pretty max-w-2xl">
                Finally! After conducting intense discussion, our team can
                mapping the menu skeletone for the POS. Here's the glance of POS
                structure:
              </p>
            </div>

            {/* Sitemap */}
            <div className="mt-8 rounded-lg overflow-hidden">
              <img
                className="mx-auto w-full"
                src="/project/sitemap_pos.png"
                alt="Administrative"
              />
            </div>
            <p className="mt-8 text-muted-foreground">
              It's a lot work and for some confidential document i cannot show
              the detail userflow here, sorry~ 🙌🐧
            </p>
          </div>
        </div>
      </div>

      {/* Section 8 */}
      <div className="max-w-screen-lg px-6 md:px-4 lg:px-0 py-48">
        <h2 className="text-[16px] md:text-sm uppercase tracking-widest text-sm font-bold text-left text-purple dark:text-violet-400">
          Exploration
        </h2>
        <div className="col mt-6">
          <div>
            <h1 className="text-left font-bold text-[20px] md:text-[40px] lg:max-w-[30vw] text-nowrap">
              Low Fidelity UI
            </h1>
          </div>
          <div className="text-md md:text-base space-y-2">
            <p className="text-left dark:text-white text-pretty max-w-2xl">
              Before creating the High-Fidelity UI, I first develop a
              Low-Fidelity version to get approval from the project lead
              regarding the main focus menu that will be designed first.
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-4 p-8 lg:p-20">
            <img
              className="w-1/2 h-auto rounded-md lg:rounded-lg"
              src="/project/wireframe/pos_login.png"
              alt="Wireframe POS Login"
            />
            <div className="flex flex-col items-center justify-center gap-4">
              <img
                className="h-1/2 w-auto rounded-md lg:rounded-lg"
                src="/project/wireframe/pos_1.png"
                alt="Wireframe POS 1"
              />
              <img
                className="h-1/2 w-auto rounded-md lg:rounded-lg"
                src="/project/wireframe/pos_2.png"
                alt="Wireframe POS 2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 9 */}
      <div className="dark:bg-[#131924] bg-violet-50 w-full flex justify-center  px-6 md:px-4 lg:px-0 py-48">
        <div className=" max-w-screen-lg relative">
          <h1 className="text-[16px] md:text-sm uppercase tracking-widest text-sm font-bold text-left text-purple dark:text-violet-400">
            Present
          </h1>
          <div className="col mt-6">
            <div>
              <h1 className="text-left font-bold text-[20px] md:text-[40px] lg:max-w-[30vw] text-nowrap">
                High Fidelity UI
              </h1>
            </div>
            <div className="text-md md:text-base space-y-2">
              <p className="text-left dark:text-white text-pretty max-w-2xl">
                Final UI design for POS (Point of Sales)✨
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 p-8 lg:p-20">
              <img
                className="w-1/2 h-auto rounded-md lg:rounded-lg"
                src="/project/UI/pos_login.png"
                alt="UI Dashboard"
              />
              <div className="flex flex-col items-center justify-center gap-4">
                <img
                  className="h-1/2 w-auto rounded-md lg:rounded-lg"
                  src="/project/UI/pos_1.png"
                  alt="UI LMS"
                />
                <img
                  className="h-1/2 w-auto rounded-md lg:rounded-lg"
                  src="/project/UI/pos_2.png"
                  alt="UI Create LMS"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Content */}
    </main>
  );
};

export default POS;
