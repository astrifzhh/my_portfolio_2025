"use client";

import { ReactNode, useState, useEffect } from "react";
import { navItems } from "@/data";
import dynamic from "next/dynamic";
import ReactGA from "react-ga4";

// Lazy load all components
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const FloatingNav = dynamic(
  () => import("@/components/ui/FloatingNavbar").then((mod) => mod.FloatingNav),
  {
    ssr: false,
  }
);
const RecentProject = dynamic(() => import("@/components/RecentProject"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Work = dynamic(() => import("@/components/Work"), { ssr: false });

// Google analytics
ReactGA.initialize("G-TGVYZJ597D");

// Send pageview with a custom path
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

export default function Main() {
  return (
    <>
      <main className="relative dark:bg-black bg-white justify-center items-center flex flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
          <h1>
            {/* <FloatingNav navItems={navItems} /> */}
            <FloatingNav
              navItems={navItems.map((item) => ({
                ...item,
                icon: item.icon as ReactNode,
              }))}
            />
            <Hero />
            <Grid />
            <RecentProject />
            <Work />
            <Footer />
          </h1>
        </div>
      </main>
    </>
  );
}
