import React from "react";
import { CgEditBlackPoint } from "react-icons/cg";

const Work = () => {
  return (
    <div className="py-20 lg:px-24" id="experience">
      <h1 className="heading">
        My<span className="text-purple"> work experience</span>
      </h1>

      <div className="flex flex-col mt-20 w-full">
        <div className="flex-row">
          {/* Items Work */}
          <div className="flex items-center">
            <div className="-translate-x-[0.1rem]">
              <CgEditBlackPoint
                size={20}
                style={{
                  color: "var(--icon-purple-primary)",
                  //   opacity: 0.1,
                }}
              />
            </div>

            <div className="relative">
              <div className="absolute translate-y-2 -translate-x-3 lg:h-24 md:h-24 sm:h-30 h-32 border-l-2 border-dashed border-gray-500"></div>
            </div>

            {/* Menampilkan Logo Company */}
            {/* <img
              src="/logo/nxsys-dark.svg"
              alt=""
              className="flex md:max-w-24 max-w-24 ml-2"
            /> */}

            <div className="ml-4 flex justify-between items-start w-full">
              <div>
                <span className="font-bold lg:text-xl block">
                  PT NXSYS PROFESSIONAL SOLUTIONS
                </span>
                <p className="text-base mt-2">UI UX Designer</p>
              </div>
              <div className="text-right text-gray-500 sm:text-xs text-base">
                <p>July 2023 - Present</p>
              </div>
            </div>
          </div>
          {/* End Item Work */}

          {/* Items Work */}
          <div className="flex items-center mt-12">
            <div className="-translate-x-[0.1rem]">
              <CgEditBlackPoint
                size={20}
                style={{
                  color: "var(--icon-purple-secondary)",
                  //   opacity: 0.6,
                }}
              />
            </div>

            <div className="relative">
              <div className="absolute translate-y-2 -translate-x-3 lg:h-24 md:h-24 sm:h-30 h-32 border-l-2 border-dashed border-gray-500"></div>
            </div>

            {/* Menampilkan Logo Company */}
            {/* <img
              src="/logo/dtpeduli.svg"
              alt=""
              className="flex md:max-w-24 max-w-24 ml-2"
            /> */}

            <div className="flex justify-between items-start w-full ml-4">
              <div>
                <span className="font-bold lg:text-xl block">DT Peduli</span>
                <p className="text-base mt-2">UI UX Designer</p>
              </div>
              <div className="text-right text-gray-500 sm:text-xs text-base">
                <p>February - July 2023</p>
              </div>
            </div>
          </div>
          {/* End Item Work */}

          {/* Items Work */}
          <div className="flex items-center mt-12">
            <div className="-translate-x-[0.1rem]">
              <CgEditBlackPoint
                size={20}
                style={{
                  color: "var(--icon-purple-secondary)",
                  //   opacity: 0.6,
                }}
              />
            </div>

            <div className="relative">
              <div className="absolute translate-y-2 -translate-x-3 lg:h-24 md:h-24 sm:h-30 h-36 border-l-2 border-dashed border-gray-500"></div>
            </div>

            {/* Menampilkan Logo Company */}
            {/* <img
              src="/logo/tiketux.svg"
              alt=""
              className="flex md:max-w-24 max-w-24 ml-2"
            /> */}

            <div className="flex justify-between items-start w-full ml-4">
              <div>
                <span className="font-bold lg:text-xl block">Tiketux</span>
                <p className="text-base mt-2">Front End Developer</p>
              </div>
              <div className="text-right text-gray-500 sm:text-xs text-base">
                <p>January - March 2023</p>
              </div>
            </div>
          </div>
          {/* End Item Work */}

          {/* Items Work */}
          <div className="flex items-center mt-12">
            <div className="-translate-x-[0.1rem]">
              <CgEditBlackPoint
                size={20}
                style={{
                  color: "var(--icon-purple-secondary)",
                  //   opacity: 0.6,
                }}
              />
            </div>

            <div className="relative">
              <div className="absolute translate-y-2 -translate-x-3 lg:h-24 md:h-24 sm:h-28 h-36 border-l-2 border-dashed border-gray-500"></div>
            </div>

            {/* Menampilkan Logo Company */}
            {/* <img
              src="/logo/bijb.svg"
              alt=""
              className="flex md:max-w-24 max-w-24 ml-2"
            /> */}

            <div className="flex justify-between items-start w-full ml-4">
              <div>
                <span className="font-bold lg:text-xl block">
                  Bandarudara Kertajati
                </span>
                <p className="text-base mt-2">Wordpress Developer</p>
              </div>
              <div className="text-right text-gray-500 sm:text-xs text-base">
                <p>August - December 2022</p>
              </div>
            </div>
          </div>
          {/* End Item Work */}

          {/* Items Work */}
          <div className="flex items-center mt-12">
            <div className="-translate-x-[0.1rem]">
              <CgEditBlackPoint
                size={20}
                style={{
                  color: "var(--icon-purple-secondary)",
                  //   opacity: 0.6,
                }}
              />
            </div>

            {/* Menampilkan Logo Company */}
            {/* <img
              src="/logo/bumilangit.svg"
              alt=""
              className="flex md:max-w-24 max-w-24 ml-2"
            /> */}

            <div className="ml-4 flex justify-between items-start w-full">
              <div>
                <span className="font-bold lg:text-xl block">
                  CV Bumi langit Grup
                </span>
                <p className="text-base mt-2">Social Media Admin</p>
              </div>
              <div className="text-right text-gray-500 sm:text-xs text-base">
                <p>August - November 2021</p>
              </div>
            </div>
          </div>
          {/* End Item Work */}
        </div>
      </div>
    </div>
  );
};

export default Work;
