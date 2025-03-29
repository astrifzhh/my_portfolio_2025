"use client";

import HeroBlog from "@/components/blog/HeroBlog";
import Footer from "@/components/Footer";
import ListBlog from "@/components/blog/component/ListBlog";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

import React, { ReactNode } from "react";

export default function Blog() {
  return (
    <div className="relative dark:bg-black bg-white justify-center items-center flex flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems.map((item) => ({
            ...item,
            icon: item.icon as ReactNode,
          }))}
        />
        <HeroBlog />
        <ListBlog />
        <Footer />
      </div>
    </div>
  );
}
