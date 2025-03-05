"use client";

import { ReactNode } from "react";
import { navItems } from "@/data";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

// Import Component
// import Hero from "../[slug]/component/Hero";
import { project_detail } from "../../data/index"; // Adjust the path as needed
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading...</p>;

  const details = project_detail.find((p) => p.id === Number(id));

  if (!details) {
    return <h1>Project Not Found</h1>;
  }
  // Navbar
  const FloatingNav = dynamic(
    () =>
      import("@/components/ui/FloatingNavbar").then((mod) => mod.FloatingNav),
    {
      ssr: false,
    }
  );
  return (
    <main className="relative dark:bg-black bg-white justify-center items-center flex flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="">
        <FloatingNav
          navItems={navItems.map((item) => ({
            ...item,
            icon: item.icon as ReactNode,
          }))}
        />
        {/* <Hero details={details} /> */}
      </div>
    </main>
  );
};

export default ProjectPage;
