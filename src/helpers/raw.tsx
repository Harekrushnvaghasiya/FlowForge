import { HomeHeroData } from "@/global/appTypes";

export const homeHeroData: HomeHeroData = {
  badge: {
    highlight: "Full-Stack Application",
    text: "Next.js & TypeScript",
  },
  title: {
    prefix: "Welcome to ",
    highlight: "FlowForge",
  },
  description:
    "A modern full-stack web application platform engineered with Next.js App Router, TypeScript, and a standardized design token system.",
  buttons: {
    primary: {
      label: "Explore Architecture",
      href: "#features",
    },
    secondary: {
      label: "Next.js Documentation →",
      href: "https://nextjs.org/docs",
      isExternal: true,
    },
  },
  techStack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Yarn",
    "Turbopack",
    "Design Tokens",
  ],
};

