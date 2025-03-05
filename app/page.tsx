"use client";

import { ReactNode, useState, useEffect } from "react";
import { navItems } from "@/data";
import dynamic from "next/dynamic";
import Loading from "@/components/loading/Loading";

// Lazy load all components
const Main = dynamic(() => import("@/components/Main"), {
  ssr: false,
  loading: () => <Loading />,
});

export default function Home() {
  return <Main />;
}
