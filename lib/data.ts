import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import eurekaImg from "@/public/eureka-thumbnail.png";
import versoImg from "@/public/verso-thumbnail.png";
import ethikchainImg from "@/public/ethikchain-thumbnail.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Portfolio",
    hash: "#portfolio",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Eureka",
    description:
      "The first tamper-proof certification timestamped in the Bitcoin's blockchain.",
    tags: ["#prototyping", "#user interface", "#branding", "#design", "#html", "#scss", "#react.js", "#nodes.js", "#git", "#express"],
    imageUrl: eurekaImg,
  },
  {
    title: "Verso",
    description:
      "Cryptocurrencies cashback using the BTU-Protocol.",
    tags: ["#user experience", "#prototyping", "#user interface", "#branding", "#design", "#makeover"],
    imageUrl: versoImg,
  },
  {
    title: "Ethikchain",
    description:
      "Ethikchain was a visionary Proof-of-Concept initiative focusing on meat production traceability.",
      tags: ["#user experience", "#prototyping", "#user interface", "#design"],
    imageUrl: ethikchainImg,
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated",
    location: "Bagnolet, FRANCE",
    description:
      "I successfully completed my studies at The Fonderie de l'Image, marking the beginning of my professional journey. Shortly after graduating, I ventured into the video game industry, taking on the role of an environmental designer.",
    icon: React.createElement(LuGraduationCap),
    date: "2008",
  },
  {
    title: "Freelancing",
    location: "Melun, FRANCE",
    description:
      "For a period of four years, I delved into the realm of freelancing, honing my skills as a front-end developer and designer. During this time, my expertise encompassed Xcode, Photoshop, HTML, SCSS, and jQuery. Notably, in 2012, I co-founded Ubster, a pioneering free & legal music platform boasting a vast library of over 60 million streaming tracks.",
    icon: React.createElement(CgWorkAlt),
    date: "2010 - 2014",
  },
  {
    title: "Founded Eureka",
    location: "Paris, FRANCE",
    description:
      "Stepping into the entrepreneurial realm, I established Eureka Certification, a training organization specialized in Bitcoin & Altcoins education and certification within the French-speaking world. My responsibilities included teaching at prominent engineering schools, ESGI and ECE Paris. Notably, our certification gained official recognition in the French National Repository of Professional Certification.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2016",
  },
  {
    title: "Growing Eureka",
    location: "Paris, FRANCE",
    description:
      "In the subsequent years, Eureka flourished through strategic partnerships with esteemed entities like the Linux Foundation and PwC. My role extended to collaborating with prestigious clients, including BNP Paribas, Société Générale, Natixis, BPCE, EDF, SNCF, and Accenture. My toolkit expanded to encompass the Adobe Suite, HTML, SCSS, React.js, Node.js, Git, and Express.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2020",
  },
  {
    title: "Joining Verso",
    location: "Seoul, SOUTH KOREA",
    description:
      "Transitioning to remote work, I embraced the role of a Product Designer for the Verso iOS/Android applications. My focus revolved around crafting a compelling brand design and optimizing user interfaces using Sketch and Figma, adhering to the atomic design methodology and prototyping.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Joined SOGEFI",
    location: "Cesson, FRANCE",
    description:
      "Currently serving as an Operations Officer at SOGEFI Holding, my work revolves around formulating robust investment strategies and conducting in-depth analyses of crypto-assets. Additionally, I actively contribute to enhancing operational processes within the company with my design skills. I am now open to exploring new, full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

export const skillsData = [
  {
    name: "Adobe CC • 10y+",
    xp: 100,
    icon: "/icons/adobe-icon.png",
  },
  {
    name: "Microsoft Visual Studio • 3y",
    xp: 55,
    icon: "/icons/vscode-icon.png",
  },
  {
    name: "Sketch • 9y",
    xp: 75,
    icon: "/icons/sketch-icon.png",
  },
  {
    name: "Figma • 2.5y",
    xp: 75,
    icon: "/icons/figma-icon.png",
  },
  {
    name: "Framer • 3y",
    xp: 65,
    icon: "/icons/framer-icon.png",
  },
  {
    name: "Keynote • 9y",
    xp: 100,
    icon: "/icons/keynote-icon.png",
  },
  {
    name: "MongoDB • 2y",
    xp: 45,
    icon: "/icons/mongodb-icon.png",
  },
  {
    name: "Express • 2y",
    xp: 25,
    icon: "/icons/express-icon.png",
  },
  {
    name: "React • 2y",
    xp: 35,
    icon: "/icons/react-icon.png",
  },
  {
    name: "Node.js • 2y",
    xp: 25,
    icon: "/icons/node-icon.png",
  },
  {
    name: "Next.js • 2y",
    xp: 35,
    icon: "/icons/next-icon.png",
  },
  {
    name: "Tailwind • 1y",
    xp: 55,
    icon: "/icons/tailwind-icon.png",
  },
  {
    name: "Git • 3y",
    xp: 65,
    icon: "/icons/git-icon.png",
  },
] as const;
