"use client";

import { ReactElement, ReactNode } from "react";

// Icon Collections
import { FaUser, FaComments, FaEnvelope } from "react-icons/fa";
import { MdLuggage } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { TiHeartOutline } from "react-icons/ti";

/* In your data file (likely @/data) */
export const navItems: {
  name: string;
  link: string;
  icon: typeof GoHomeFill | ReactNode;
}[] = [
  {
    name: "Home",
    link: "/",
    icon: GoHomeFill,
  },
  {
    name: "About",
    link: "#about",
    icon: FaUser,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: MdLuggage,
  },
  {
    name: "Experience",
    link: "#experience",
    icon: TiHeartOutline,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: FaEnvelope,
  },
  {
    name: "Blog",
    link: "blog",
    icon: FaComments,
  },
];

export const gridItems = [
  {
    id: 1,
    title: "I love exploring new things, new taste, new design.",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] text-white",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/maself-dino.jpeg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Traveling will always be my❤️",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/bg-purple.jpg",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech skill",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Design enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently eagerly to learn coding especially ReactJS!",
    description: "FYI this page also made by NextJS✨",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 text-white",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "SMIS - Website",
    des: "Explore school system for more easier administration and archiving.",
    img: "/project/p1.png",
    iconLists: ["/project/figma.svg", "/project/notion.svg"],
    link: "WebsiteSMIS",
  },

  // Project Mobile Soon
  // {
  //   id: 2,
  //   title: "SMIS - Mobile APP",
  //   des: "Explore school system for more easier administration and archiving.",
  //   img: "/project/p2.svg",
  //   iconLists: ["/project/figma.svg", "/project/notion.svg"],
  //   link: "MobileSMIS",
  // },

  {
    id: 3,
    title: "Point of Sales",
    des: "A modern Point of Sales (POS) system is an intuitive, user-friendly interface designed to streamline retail transactions, enhance customer experience, and provide valuable insights for business owners.",
    img: "/project/p3.png",
    iconLists: ["/project/figma.svg", "/project/notion.svg"],
    link: "PointofSales",
  },
];

export const project_detail = [
  {
    id: 1,
    title: "School Management Information System",
    des: "Explore school system for more easier administration and archiving.",
    requirement: [
      { key: "Role", value: "User Research, Visual and Interaction Design" },
      {
        key: "Team",
        value: "1 UI UX Designer, 4 Fullstack",
      },
    ],
    content: [
      { key: "content1", value: "it is a content of content1" },
      { key: "content2", value: "it is a content of content2" },
    ],
    img: "/project/detail/img_project1_1.png",
    iconLists: ["/project/figma.svg", "/project/notion.svg"],
    link: "/project_detail/1",
  },
  // {
  //   id: 2,
  //   title: "SMIS - Mobile APP",
  //   des: "Explore school system for more easier administration and archiving.",
  //   img: "/project/p2.svg",
  //   iconLists: ["/project/figma.svg", "/project/notion.svg"],
  //   link: "project_detail/2",
  // },
  {
    id: 3,
    title: "Point of Sales",
    des: "A modern Point of Sales (POS) system is an intuitive, user-friendly interface designed to streamline retail transactions, enhance customer experience, and provide valuable insights for business owners.",
    requirement: [
      { key: "Role", value: "User Research, Visual and Interaction Design" },
      {
        key: "Team",
        value: "1 UI UX Designer, 2 Fullstack",
      },
    ],
    img: "/project/p3.svg",
    iconLists: ["/project/figma.svg", "/project/notion.svg"],
    link: "project_detail/2",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "BIJB",
    // img: "/logo/bijb.svg",
    nameImg: "/logo/bijb.svg",
  },
  {
    id: 2,
    name: "Tiketux",
    // img: "/app.svg",
    nameImg: "/logo/tiketux.svg",
  },
  {
    id: 3,
    name: "DT Peduli",
    // img: "/host.svg",
    nameImg: "/logo/dtpeduli.svg",
  },
  {
    id: 4,
    name: "PT NXSYS PROFESSIONAL SOLUTIONS",
    // img: "/s.svg",
    nameImg: "/logo/nxsys-dark.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/astrifzhh",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/astrifzhh_/?hl=en",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/astrifzh/",
  },
];
