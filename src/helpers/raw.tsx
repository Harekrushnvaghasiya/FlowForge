import { Images } from "@/assets/images";
import { HomeHeroData, AuthPageData } from "@/global/appTypes";

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

export const signInData: AuthPageData = {
  title: "Log In",
  submitButtonText: "Log In",
  forgotPasswordText: "Forgot password?",
  forgotPasswordHref: "/forgot-password",
  dividerText: "or",
  socialButtons: {
    googleText: "Google",
    facebookText: "Facebook",
  },
  bottomPrompt: {
    text: "Don't have an account?",
    actionText: "Sign Up",
    actionHref: "/signup",
  },
  quote: {
    quoteText: {
      start: "The future belongs to those who ",
      highlight1: "believe",
      middle: " in the ",
      highlight2: "beauty of their dreams.",
    },
    author: "- Eleanor Roosevelt",
    imageUrl:Images.SignInBg,
    imageAlt: "Minimalist workspace desk with chair",
  },
};

export const signUpData: AuthPageData = {
  title: "Sign Up",
  submitButtonText: "Sign Up",
  dividerText: "or",
  socialButtons: {
    googleText: "Google",
    facebookText: "Facebook",
  },
  bottomPrompt: {
    text: "Already have an account?",
    actionText: "Log In",
    actionHref: "/signin",
  },
  quote: {
    quoteText: {
      start: "The only way to ",
      highlight1: "do great work",
      middle: " is to ",
      highlight2: "love what you do.",
    },
    author: "- Steve Jobs",
    imageUrl:Images.SignUpBg  ,
    imageAlt: "Green eucalyptus stems in a glass vase",
  },
};