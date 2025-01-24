"use client";

import { ReactNode } from "react";
import { navItems } from "@/data";

import dynamic from "next/dynamic";

// Components
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

export default function Home() {
  return (
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
          {/* <Clients /> */}
          {/* <Experience /> */}
          <Footer />
        </h1>
      </div>
    </main>
  );
}
