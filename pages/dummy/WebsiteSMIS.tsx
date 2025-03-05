// "use client";

// import { ReactNode } from "react";
// import { navItems } from "@/data";
// import dynamic from "next/dynamic";
// import { useRouter } from "next/router";

// // Import Component
// import { project_detail } from "../../data/index"; // Adjust the path as needed
// import { TextGenerateEffect } from "../../components/ui/TextGenerateEffects";
// import Loading from "@/components/loading/Loading";
// import { TbKeyframeFilled } from "react-icons/tb";
// import { FloatingNav } from "@/components/ui/FloatingNavbar";
// import BackToTop from "./component/BackButton";
// import { ThemeProvider } from "@/components/ThemeProvider";
// import BackBtn from "./component/BackBtn";

// const WebsiteSMIS = () => {
//   const router = useRouter();
//   // const { id } = router.query;

//   if (!router.isReady) return <Loading />;

//   // const details = project_detail.find((p) => p.id === Number(id));

//   // if (!details) {
//   //   return <h1>Project Not Found</h1>;
//   // }

//   // Navbar
//   // const FloatingNav = dynamic(
//   //   () =>
//   //     import("@/components/ui/FloatingNavbar").then((mod) => mod.FloatingNav),
//   //   {
//   //     ssr: false,
//   //   }
//   // );

//   return (
//     <main className="flex flex-col relative dark:bg-black bg-white justify-center items-center overflow-clip">
//       {/* Back to top button */}
//       <BackToTop />

//       <div className="max-w-screen-lg py-20 px-6 md:px-4 lg:px-0">
//         {/* Button Back */}
//         <BackBtn />

//         {/* Content Start */}
//         {/* Title */}
//         <div key={details.id}>
//           <h2 className="uppercase tracking-widest text-[16px] md:text-sm font-bold text-left text-purple dark:text-violet-400 mt-6">
//             Website Application
//           </h2>
//           <TextGenerateEffect
//             className="text-left text-[35px] md:text-6xl lg:text-7xl flex max-w-screen-lg"
//             words={details.title}
//           />
//           <p className="text-left dark:text-white text-[18px] md:text-xl">
//             Innovative School System for Streamlined Administration and
//             Effortless Archiving.
//           </p>
//         </div>
//       </div>

//       {/* Section 1 */}
//       <div className="w-full dark:bg-[#131924] bg-violet-50 relative flex justify-center py-20">
//         <div>
//           <div className="w-full">
//             <div className="max-w-screen-lg px-6 md:px-4 lg:px-0">
//               <img
//                 className="w-full max-w-full h-auto object-cover px-auto mb-20 md:mb-0 lg:mb-0"
//                 src="/project/detail/website_smis.png"
//                 alt={details.title}
//               />
//             </div>
//             {details.requirement && details.requirement.length > 0 && (
//               <div className="row lg:col">
//                 <div className="flex flex-col lg:flex-row mx-auto justify-center">
//                   {details.requirement.map(({ key, value }) => (
//                     <div
//                       className="py-8 lg:py-32 px-8 md:px-4 space-y-2"
//                       key={key}
//                     >
//                       <div>
//                         <strong>{key}: </strong>
//                       </div>
//                       <div>{value}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div className="max-w-screen-lg px-6 md:px-4 lg:px-0 py-48">
//         <h2 className="text-[16px] md:text-sm uppercase tracking-widest text-sm font-bold text-left text-purple dark:text-violet-400">
//           Overview
//         </h2>
//         <div className="row lg:col mt-6">
//           <div className="flex flex-col lg:flex-row">
//             <div>
//               <h1 className="text-left font-bold text-[20px] md:text-[40px] lg:max-w-[30vw]">
//                 Why did the project<span className="text-purple"> exist</span>?
//               </h1>
//             </div>
//             <div className="text-md md:text-base space-y-4 mt-8 lg:mt-0">
//               <p className="text-left dark:text-white  max-w-2xl text-pretty">
//                 After the pandemic era of 2020-2021, the hashtag{" "}
//                 <span className="font-bold text-purple"> #DirumahAja</span>{" "}
//                 encouraged people to stay at home, leading to a shift where most
//                 daily activities were conducted online. This was especially true
//                 for schools, which instructed students to continue their
//                 education from home. As a result, the need for digitalization in
//                 learning platforms became essential to ensure accessibility
//                 anytime and anywhere.
//               </p>
//               <p className="text-left dark:text-white max-w-2xl text-pretty">
//                 NXSYS responded to this need by developing SMIS (School
//                 Management Information System), a platform supporting online
//                 learning and school administration such as finance, reporting,
//                 etc.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Section 3 */}
//       <div className="dark:bg-[#131924] bg-violet-50 w-full flex justify-center">
//         <div className="max-w-screen-lg md:px-4 lg:px-0 py-48">
//           <h2 className="text-[16px] md:text-sm uppercase tracking-widest text-sm font-bold text-center text-purple dark:text-violet-400 mt-6">
//             Problem Statement
//           </h2>
//           <div className="mt-6 mx-6 lg:mx-0">
//             {/* <h1 className="text-center heading-center">
//               Why did the project<span className="text-purple"> exist</span>?
//             </h1> */}
//             <p className="dark:text-white text-pretty uppercase text-4xl lg:text-6xl text-center">
//               How our team can develop school management system for data input
//               efficiency and offering more user friendly experience
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Section 4 */}
//       <div className=" bg-violet-50 w-full flex justify-center py-48 px-6 md:px-4 lg:px-0">
//         <div className="max-w-screen-lg ">
//           <h2 className="uppercase tracking-widest text-sm font-bold text-center text-violet-500  mt-6">
//             Workflow
//           </h2>
//           <div className="mt-6">
//             <h1 className="text-center text-4xl font-bold text-black">
//               Design<span className="text-"> Process</span>
//             </h1>
//             <div className="mt-8">
//               <img className="" src="/project/design_process.png" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Section 5 */}
//       <div className="max-w-screen-lg px-6 md:px-4 lg:px-0 py-48">
//         {" "}
//         <h2 className="text-[16px] md:text-sm uppercase tracking-widest text-sm font-bold text-left text-purple dark:text-violet-400">
//           Big Step
//         </h2>
//         <div className="row lg:col mt-6">
//           <div className="flex flex-col lg:flex-row lg:space-x-6">
//             <div>
//               <h1 className="text-left font-bold text-[20px] md:text-[40px] lg:max-w-[30vw] text-nowrap">
//                 Start Diggin 🏋️‍♀️
//               </h1>
//             </div>
//             <div className="text-md md:text-base space-y-4 mt-8 lg:mt-0">
//               <p className="text-left dark:text-white max-w-2xl text-pretty">
//                 We spent my first week to understanding one school website as
//                 our benchmark that given by my project director. This phase was
//                 crucial for me to start thinking the best approach to begin.
//               </p>
//               <p className="text-left dark:text-white max-w-2xl text-pretty">
//                 Our team conduct a user interview in aim to more understanding
//                 what user or stakeholder needed. I gathering all the information
//                 using VPC (Value Proposition Canvas), here's glance of them:
//               </p>
//             </div>
//           </div>
//           <div className="py-20">
//             <img className="" src="/project/vpc.png" alt="" />
//           </div>
//         </div>
//       </div>

//       {/* Section 6 */}
//       <div className="dark:bg-[#131924] bg-violet-50 w-full flex justify-center">
//         <div className="max-w-screen-lg px-6 md:px-4 lg:px-0 py-48">
//           <h2 className="text-[16px] md:text-sm uppercase tracking-widest text-sm font-bold text-left text-purple dark:text-violet-400">
//             Exploration
//           </h2>
//           <div className="col mt-6">
//             <div>
//               <h1 className="text-left font-bold text-[20px] md:text-[40px] lg:max-w-[30vw] text-nowrap">
//                 Information Architecture
//               </h1>
//             </div>
//             <div className="text-md md:text-base space-y-2">
//               <p className="text-left dark:text-white text-pretty max-w-2xl">
//                 Finally! After conducting several interview and discussion, our
//                 team can mapping the menu skeletone for the SMIS, thus we can
//                 start made user flow proposal for each menu.
//               </p>
//             </div>

//             {/* Documentation */}
//             <div className="p-8 border border-[#CBACF9] dark:border-[#2B313A] mt-12 rounded-lg">
//               {/* Badge */}
//               <div className="w-full flex justify-start">
//                 <div className="w-fit bg-black dark:bg-violet-500 rounded-full p-3">
//                   <h2 className="uppercase tracking-widest text-[10px] lg:text-[10px] font-bold text-center text-white ">
//                     Discussion
//                   </h2>
//                 </div>
//               </div>
//               <h1 className="text-left text-2xl font-bold text-black dark:text-white mt-4">
//                 Documentation during brainstorming and discussing:
//               </h1>
//               <div className="flex flex-row items-center justify-center gap-4 mt-8">
//                 <img
//                   className="block mx-auto w-1/2 h-auto rounded-lg"
//                   src="/project/brainstorming/doc_4.jpg"
//                   alt=""
//                 />
//                 <div className="flex flex-col items-center justify-center gap-4">
//                   <img
//                     className="block mx-auto w-auto h-1/2 rounded-lg"
//                     src="/project/brainstorming/doc_1.jpeg"
//                     alt=""
//                   />
//                   <img
//                     className="block mx-auto w-auto h-1/2 rounded-lg"
//                     src="/project/brainstorming/doc_2.jpeg"
//                     alt=""
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Sitemap */}
//             <div className="p-8 border border-[#CBACF9] dark:border-[#2B313A] mt-12 rounded-lg">
//               {/* Badge */}
//               <div className="w-full flex justify-start">
//                 <div className="w-fit bg-black dark:bg-violet-500 rounded-full p-3">
//                   <h2 className="uppercase tracking-widest text-[10px] lg:text-[10px] font-bold text-center text-white ">
//                     Result
//                   </h2>
//                 </div>
//               </div>
//               <h1 className="text-left text-2xl font-bold text-black dark:text-white mt-4">
//                 Portal Sitemap
//               </h1>
//               <div className="mt-8">
//                 <img
//                   className="mx-auto"
//                   // style={{
//                   //   width: "50%",
//                   //   height: "auto",
//                   //   // transform: "scale(0)",
//                   // }}
//                   src="/project/sitemap_website_smis.png"
//                   alt="Administrative"
//                 />
//               </div>
//               <p className="mt-8">
//                 There's several role: Admin, Finance, Yayasan, Headmaster,
//                 Teacher, Security/OB, TK Teacher, etc.
//               </p>
//               <p className="mt-8 text-muted-foreground">
//                 It's a lot work and for some confidential reason i cannot show
//                 the detail userflow here~ 🙌🐧
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Section 8 */}
//       <div className="max-w-screen-lg px-6 md:px-4 lg:px-0 py-48">
//         <h2 className="text-[16px] md:text-sm uppercase tracking-widest text-sm font-bold text-left text-purple dark:text-violet-400">
//           Exploration
//         </h2>
//         <div className="col mt-6">
//           <div>
//             <h1 className="text-left font-bold text-[20px] md:text-[40px] lg:max-w-[30vw] text-nowrap">
//               Low Fidelity UI
//             </h1>
//           </div>
//           <div className="text-md md:text-base space-y-2">
//             <p className="text-left dark:text-white text-pretty max-w-2xl">
//               After the menu mapping proposal was approved by the user, I began
//               by creating a wireframe (Low Fidelity UI) by sketching our main
//               idea. This approach helps minimize changes and ensures we stay
//               focused on the core concept before working on the final UI.
//             </p>
//           </div>
//           <div className="flex flex-row items-center justify-center gap-4 p-20">
//             <img
//               className="w-1/2 h-auto"
//               src="/project/wireframe/website_lms1.png"
//               alt="Wireframe Dashboard"
//             />
//             <div className="flex flex-col items-center justify-center gap-4">
//               <img
//                 className="h-1/2 w-auto"
//                 src="/project/wireframe/website_lms2.png"
//                 alt="Wireframe LMS"
//               />
//               <img
//                 className="h-1/2 w-auto"
//                 src="/project/wireframe/website_lms3.png"
//                 alt="Wireframe Create LMS"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Section 9 */}
//       <div className="dark:bg-[#131924] bg-violet-50 w-full flex justify-center  px-6 md:px-4 lg:px-0 py-48">
//         <div className=" max-w-screen-lg relative">
//           <h1 className="text-[16px] md:text-sm uppercase tracking-widest text-sm font-bold text-left text-purple dark:text-violet-400">
//             Present
//           </h1>
//           <div className="col mt-6">
//             <div>
//               <h1 className="text-left font-bold text-[20px] md:text-[40px] lg:max-w-[30vw] text-nowrap">
//                 High Fidelity UI
//               </h1>
//             </div>
//             <div className="text-md md:text-base space-y-2">
//               <p className="text-left dark:text-white text-pretty max-w-2xl">
//                 Final UI design for SMIS (School Management Information System)
//               </p>
//             </div>
//             <div className="flex flex-row items-center justify-center gap-4 p-20">
//               <img
//                 className="w-1/2 h-auto"
//                 src="/project/UI/dashboard_smis.png"
//                 alt="UI Dashboard"
//               />
//               <div className="flex flex-col items-center justify-center gap-4">
//                 <img
//                   className="h-1/2 w-auto"
//                   src="/project/UI/lms_folder.png"
//                   alt="UI LMS"
//                 />
//                 <img
//                   className="h-1/2 w-auto"
//                   src="/project/UI/lms_create.png"
//                   alt="UI Create LMS"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Section 10 */}
//       <div className="max-w-screen-lg px-6 md:px-4 lg:px-0 py-48">
//         <h2 className="text-[16px] md:text-sm uppercase tracking-widest text-sm font-bold text-left text-purple dark:text-violet-400">
//           Epilog
//         </h2>
//         <div className="row lg:col mt-6">
//           <div className="flex flex-col lg:flex-row lg:space-x-6">
//             <div>
//               <h1 className="text-left font-bold text-[20px] md:text-[40px] lg:max-w-[30vw] text-nowrap">
//                 Key to Take
//               </h1>
//             </div>
//             <div className="text-md md:text-base mt-8 lg:mt-0">
//               <div className="flex flex-col space-y-8">
//                 <div className="flex flex-row">
//                   <TbKeyframeFilled
//                     style={{ color: "var(--icon-fill-purple)" }}
//                     className="mt-1 mr-4"
//                   />
//                   <p className="text-left dark:text-white max-w-2xl text-pretty">
//                     <p className="font-bold">User-Centric Approach</p>
//                     The importance of aligning with user needs to ensure
//                     accuracy in achieving project goals and timelines.
//                   </p>
//                 </div>
//                 <div className="flex flex-row">
//                   <TbKeyframeFilled
//                     style={{ color: "var(--icon-fill-purple)" }}
//                     className="mt-1 mr-4"
//                   />
//                   <p className="text-left dark:text-white max-w-2xl text-pretty">
//                     <p className="font-bold">Iterative Develompment</p>
//                     Plan - Design - Implementation - Testing - Feedback 🔁
//                   </p>
//                 </div>
//                 <div className="flex flex-row">
//                   <TbKeyframeFilled
//                     style={{ color: "var(--icon-fill-purple)" }}
//                     className="mt-1 mr-4"
//                   />
//                   <p className="text-left dark:text-white max-w-2xl text-pretty">
//                     <p className="font-bold">Communication</p>
//                     The key to a successful project is strong communication
//                     among various teams.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* End Content */}
//     </main>
//   );
// };

// export default WebsiteSMIS;
