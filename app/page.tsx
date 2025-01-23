import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { AiFillHome } from "react-icons/ai";
import Image from "next/image";
import RecentProject from "@/components/RecentProject";
// import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Work from "@/components/Work";

// Floating NavBar Icon
import {
  FaUser,
  FaProjectDiagram,
  FaComments,
  FaEnvelope,
} from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

export const navItems = [
  { name: "Home", link: "#home", icon: <GoHomeFill /> },
  { name: "About", link: "#about", icon: <FaUser /> },
  { name: "Projects", link: "#projects", icon: <FaProjectDiagram /> },
  { name: "Experience", link: "#experience", icon: <FaComments /> },
  { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
];

export default function Home() {
  return (
    <main className="relative dark:bg-black bg-white justify-center items-center flex flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <h1>
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProject />
          {/* <Clients /> */}
          <Work />
          {/* <Experience /> */}
          {/* <Approach /> */}
          <Footer />
        </h1>
      </div>
    </main>
  );
}
