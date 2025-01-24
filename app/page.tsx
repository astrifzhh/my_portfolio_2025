"use client";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { ReactNode } from "react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import RecentProject from "@/components/RecentProject";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import Work from "@/components/Work";

// import { AiFillHome } from "react-icons/ai";
// import Image from "next/image";
// import Clients from "@/components/Clients";
// import Experience from "@/components/Experience";

export default function Page() {
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
