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

