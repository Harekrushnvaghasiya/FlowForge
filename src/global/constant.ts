export const BUTTON_VARIANTS = {
  PRIMARY: "primary",
  BRAND: "brand",
  SECONDARY: "secondary",
  SOCIAL: "social",
  OUTLINE: "outline",
  GHOST: "ghost",
} as const;

export type ButtonVariant = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

export const BUTTON_SIZES = {
  SM: "sm",
  MD: "md",
  LG: "lg",
} as const;

export type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];

