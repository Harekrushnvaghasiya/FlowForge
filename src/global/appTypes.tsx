import type { StaticImageData } from "next/image";

// ==========================================
// Home Hero Component Interfaces
// ==========================================
export interface HomeHeroBadge {
  highlight: string;
  text: string;
}

export interface HomeHeroTitle {
  prefix: string;
  highlight: string;
}

export interface ActionButton {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface HomeHeroButtons {
  primary: ActionButton;
  secondary: ActionButton;
}

export interface HomeHeroData {
  badge: HomeHeroBadge;
  title: HomeHeroTitle;
  description: string;
  buttons: HomeHeroButtons;
  techStack: string[];
}

export interface HomeHeroSectionProps {
  data: HomeHeroData;
}

export interface AuthQuoteData {
  quoteText: {
    start: string;
    highlight1: string;
    middle: string;
    highlight2: string;
    end?: string;
  };
  author: string;
  imageUrl: StaticImageData | string;
  imageAlt: string;
}

export interface AuthPageData {
  title: string;
  submitButtonText: string;
  forgotPasswordText?: string;
  forgotPasswordHref?: string;
  dividerText: string;
  socialButtons: {
    googleText: string;
    facebookText: string;
  };
  bottomPrompt: {
    text: string;
    actionText: string;
    actionHref: string;
  };
  quote: AuthQuoteData;
}

export interface SignInPageProps {
  data: AuthPageData;
}

export interface SignUpPageProps {
  data: AuthPageData;
}
