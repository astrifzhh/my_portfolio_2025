"use client";
import React, { useState, ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

import ThemeToggle from "../ThemeToggle";
import { useTheme } from "next-themes";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(true);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-full border border-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4 border-white-[0.2] dark:bg-black-100 bg-slate-100",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
          backgroundColor: "var(--bg-navbar)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            // href={navItem.link}
            // href={`/${navItem.link}`}
            href={`/${navItem.link}`}
            className={cn(
              "relative items-center  flex space-x-1 dark:text-gray-200 text-gray-800 dark:hover:text-neutral-300 hover:text-neutral-500 font-semibold"
            )}
          >
            <span
              className="block sm:hidden"
              style={{ color: "var(--icon-fill)" }}
            >
              <navItem.icon />
            </span>
            {/* add !cursor-pointer */}
            {/* remove hidden sm:block for the mobile responsive */}
            <span className="text-sm !cursor-pointer hidden sm:block">
              {navItem.name}
            </span>
          </Link>
        ))}
        <ThemeToggle />
      </motion.div>
    </AnimatePresence>
  );
};
