"use client";

import styled, { css, keyframes } from "styled-components";
import Link from "next/link";
import { BUTTON_VARIANTS, BUTTON_SIZES, ButtonVariant, ButtonSize } from "@/global/constant";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const GlossOverlay = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.75) 0%,
    rgba(255, 255, 255, 0.15) 60%,
    rgba(255, 255, 255, 0) 100%
  );
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  pointer-events: none;
  z-index: 1;
`;

export const GlassInnerRim = styled.span`
  position: absolute;
  inset: 0px;
  border-radius: inherit;
  box-shadow:
    inset 0 0 10px 1px rgba(0, 0, 0, 0.08),
    inset 0 2px 3px 0 rgba(0, 0, 0, 0.07),
    inset 0 -2px 3px 0 rgba(0, 0, 0, 0.05);
  pointer-events: none;
  z-index: 1;
  transition:
    box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.35s ease;
`;

export const GlassReflectionOverlay = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  background: radial-gradient(
    ellipse 65% 85% at 88% 85%,
    rgba(255, 255, 255, 0.78) 0%,
    rgba(255, 255, 255, 0.38) 45%,
    rgba(255, 255, 255, 0) 80%
  );
  pointer-events: none;
  z-index: 3;
  opacity: 1;
  transform: translate(0, 0);
  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.35s ease;
`;

export const ShimmerSweep = styled.span`
  position: absolute;
  top: -60%;
  left: -70%;
  width: 45%;
  height: 220%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.45) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(25deg);
  transition: transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
  pointer-events: none;
  opacity: 0;
  z-index: 4;
`;

export const ButtonContent = styled.span`
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-8);
`;

export const ButtonTextFront = styled.span`
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ButtonTextShadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--btn-primary-reflection-color, #000000);
  /* In idle/rest state: glass is flat on desk, no separate background shadow */
  transform: translateY(0);
  filter: blur(0px);
  opacity: 0;
  user-select: none;
  pointer-events: none;
  z-index: 1;
  transition:
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const IconSlot = styled.span`
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const Spinner = styled.span`
  position: relative;
  z-index: 2;
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 0.75s linear infinite;
  flex-shrink: 0;
`;

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case BUTTON_VARIANTS.BRAND:
      return css`
        background: linear-gradient(
          180deg,
          var(--btn-brand-bg-start, rgba(97, 37, 37, 0.94)) 0%,
          var(--btn-brand-bg-end, rgba(77, 9, 8, 0.96)) 100%
        );
        color: var(--text-white, #ffffff);
        border: 1px solid var(--btn-brand-border, rgba(240, 148, 149, 0.35));
        box-shadow:
          0 8px 24px -4px var(--btn-brand-shadow, rgba(77, 9, 8, 0.35)),
          0 2px 6px 0 var(--glass-shadow-ambient-12, rgba(0, 0, 0, 0.12)),
          inset 0 1px 1px 0 var(--glass-specular-medium, rgba(255, 255, 255, 0.5)),
          inset 0 -2px 4px 0 var(--glass-shadow-ambient-40, rgba(0, 0, 0, 0.4));
        text-shadow: 0 1px 2px var(--glass-shadow-ambient-35, rgba(0, 0, 0, 0.35));

        &:hover:not(:disabled) {
          background: linear-gradient(
            180deg,
            var(--btn-brand-hover-start, rgba(120, 42, 42, 0.98)) 0%,
            var(--btn-brand-hover-end, rgba(87, 20, 20, 0.98)) 100%
          );
          border-color: var(--btn-brand-border-hover, rgba(240, 148, 149, 0.6));
          box-shadow:
            0 12px 30px -4px var(--btn-brand-shadow-hover, rgba(77, 9, 8, 0.5)),
            0 4px 10px 0 var(--glass-shadow-ambient-16, rgba(0, 0, 0, 0.16)),
            inset 0 1px 2px 0 var(--glass-specular-strong, rgba(255, 255, 255, 0.7)),
            inset 0 -2px 4px 0 var(--glass-shadow-ambient-35, rgba(0, 0, 0, 0.35));
          transform: translateY(-2px);
        }
      `;

    case BUTTON_VARIANTS.SECONDARY:
      return css`
        background: linear-gradient(
          180deg,
          var(--btn-secondary-bg-start, rgba(255, 255, 255, 0.4)) 0%,
          var(--btn-secondary-bg-end, rgba(255, 255, 255, 0.12)) 100%
        );
        color: var(--text-primary, #0f0e0e);
        border: 1px solid var(--glass-border-medium, rgba(255, 255, 255, 0.4));
        box-shadow:
          0 8px 20px -4px rgba(0, 0, 0, 0.08),
          0 2px 6px 0 rgba(0, 0, 0, 0.04),
          inset 0 1px 2px 0 rgba(255, 255, 255, 0.95),
          inset 0 -2px 3px 0 rgba(0, 0, 0, 0.06);

        &:hover:not(:disabled) {
          background: linear-gradient(
            180deg,
            var(--btn-secondary-hover-start, rgba(255, 255, 255, 0.6)) 0%,
            var(--btn-secondary-hover-end, rgba(255, 255, 255, 0.25)) 100%
          );
          box-shadow:
            0 12px 28px -4px rgba(0, 0, 0, 0.12),
            0 4px 10px 0 rgba(0, 0, 0, 0.06),
            inset 0 1px 2px 0 rgba(255, 255, 255, 1),
            inset 0 -2px 4px 0 rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }
      `;

    case BUTTON_VARIANTS.SOCIAL:
      return css`
        background: linear-gradient(
          180deg,
          var(--btn-social-bg-start, rgba(255, 255, 255, 0.92)) 0%,
          var(--btn-social-bg-end, rgba(249, 250, 251, 0.82)) 100%
        );
        color: var(--btn-social-text, #374151);
        border: 1px solid var(--btn-social-border, #e5e7eb);
        box-shadow:
          0 2px 8px 0 var(--glass-shadow-ambient-4, rgba(0, 0, 0, 0.04)),
          inset 0 1px 1px 0 var(--glass-specular-pure, rgba(255, 255, 255, 0.95)),
          inset 0 -1px 1px 0 var(--glass-shadow-ambient-3, rgba(0, 0, 0, 0.03));

        &:hover:not(:disabled) {
          background: linear-gradient(
            180deg,
            var(--btn-social-hover-start, rgba(255, 255, 255, 0.98)) 0%,
            var(--btn-social-hover-end, rgba(243, 244, 246, 0.95)) 100%
          );
          border-color: var(--btn-social-border-hover, #d1d5db);
          box-shadow:
            0 6px 18px -2px var(--glass-shadow-ambient-8, rgba(0, 0, 0, 0.08)),
            inset 0 1px 2px 0 var(--glass-specular-solid, #ffffff);
          transform: translateY(-1px);
        }
      `;

    case BUTTON_VARIANTS.OUTLINE:
      return css`
        background: var(--btn-outline-bg, rgba(255, 255, 255, 0.12));
        color: inherit;
        border: 1px solid var(--btn-outline-border, rgba(255, 255, 255, 0.45));
        box-shadow:
          inset 0 1px 1px 0 var(--glass-specular-light, rgba(255, 255, 255, 0.4)),
          0 4px 12px 0 var(--glass-shadow-ambient-5, rgba(0, 0, 0, 0.05));

        &:hover:not(:disabled) {
          background: var(--btn-outline-bg-hover, rgba(255, 255, 255, 0.22));
          border-color: var(--btn-outline-border-hover, rgba(255, 255, 255, 0.7));
          transform: translateY(-2px);
        }
      `;

    case BUTTON_VARIANTS.GHOST:
      return css`
        background: var(--transparent, transparent);
        color: inherit;
        border: 1px solid var(--transparent, transparent);

        &:hover:not(:disabled) {
          background: var(--btn-ghost-hover, rgba(255, 255, 255, 0.15));
          border-color: var(--btn-ghost-border-hover, rgba(255, 255, 255, 0.2));
          transform: translateY(-1px);
        }
      `;

    case BUTTON_VARIANTS.PRIMARY:
    default:
      return css`
        /* Liquid Glass Physics: Translucent cool glass with outer border & distinct inner border shadow */
        background: linear-gradient(
          180deg,
          var(--btn-primary-bg-start, rgba(255, 255, 255, 0.72)) 0%,
          var(--btn-primary-bg-mid, rgba(220, 224, 232, 0.45)) 45%,
          var(--btn-primary-bg-end, rgba(214, 218, 228, 0.55)) 100%
        );
        color: var(--btn-primary-text, #1a1a1c);
        font-size: 18px;
        font-weight: 500;
        letter-spacing: -0.015em;
        border-radius: 9999px;
        /* Outer border remains as it is on the boundary */
        border: 1px solid var(--btn-primary-border, rgba(0, 0, 0, 0.14));
        border-top-color: var(--btn-primary-border-top, #ffffff);
        border-bottom-color: var(--btn-primary-border-bottom, rgba(0, 0, 0, 0.18));
        box-shadow:
          0 3px 10px 0 var(--btn-primary-shadow, rgba(0, 0, 0, 0.04)),
          inset 0 1.5px 1px 0 #ffffff,
          inset 0 -1.5px 1px 0 rgba(255, 255, 255, 0.85);

        /* On hover: glass mirror pulls outward toward viewer with external elevation; shadow stays inside */
        &:hover:not(:disabled) {
          transform: translateY(-4px) scale(1.02);
          background: linear-gradient(
            180deg,
            var(--btn-primary-hover-start, rgba(255, 255, 255, 0.86)) 0%,
            var(--btn-primary-hover-mid, rgba(226, 230, 238, 0.48)) 45%,
            var(--btn-primary-hover-end, rgba(220, 224, 234, 0.58)) 100%
          );
          border-color: rgba(0, 0, 0, 0.12);
          border-top-color: #ffffff;
          border-bottom-color: rgba(0, 0, 0, 0.15);
          box-shadow:
            0 18px 38px -4px var(--btn-primary-shadow-hover, rgba(0, 0, 0, 0.16)),
            0 8px 16px 0 rgba(0, 0, 0, 0.06),
            inset 0 2px 2px 0 #ffffff,
            inset 0 -2px 2px 0 rgba(255, 255, 255, 0.9);

          /* The shadow stays inside the button as pure liquid glass refraction */
          ${GlassInnerRim} {
            inset: 0px;
            box-shadow:
              inset 0 0 12px 1px rgba(0, 0, 0, 0.07),
              inset 0 2px 3px 0 rgba(0, 0, 0, 0.08),
              inset 0 -2px 3px 0 rgba(0, 0, 0, 0.04);
          }

          /* The reflection moves inward towards the text and fades */
          ${GlassReflectionOverlay} {
            opacity: 0;
            transform: translate(-15%, -10%) scale(0.9);
          }

          /* The text shadow prints onto the background with clearly readable words */
          ${ButtonTextShadow} {
            transform: translateY(8px);
            filter: blur(1.5px);
            opacity: var(--btn-primary-reflection-opacity, 0.36);
          }

          ${ShimmerSweep} {
            opacity: 1;
            transform: translateX(450%) rotate(25deg);
          }
        }

        /* Active: press down flat into the desk */
        &:active:not(:disabled) {
          transform: translateY(1px) scale(0.99);
          box-shadow:
            0 1px 4px 0 rgba(0, 0, 0, 0.05),
            inset 0 1px 1px 0 #ffffff,
            inset 0 -1px 1px 0 rgba(0, 0, 0, 0.08);

          ${GlassInnerRim} {
            inset: 0px;
            box-shadow:
              inset 0 0 10px 1px rgba(0, 0, 0, 0.08),
              inset 0 2px 3px 0 rgba(0, 0, 0, 0.07),
              inset 0 -2px 3px 0 rgba(0, 0, 0, 0.05);
          }

          ${ButtonTextShadow} {
            transform: translateY(0);
            filter: blur(0px);
            opacity: 0;
          }

          ${GlassReflectionOverlay} {
            opacity: 1;
            transform: translate(0, 0);
          }
        }
      `;
  }
};

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case BUTTON_SIZES.SM:
      return css`
        height: 38px;
        padding: 0 var(--spacing-16);
        font-size: 13px;
        border-radius: var(--radius-6);
      `;

    case BUTTON_SIZES.LG:
      return css`
        height: 54px;
        padding: var(--spacing-14) var(--spacing-28);
        font-size: 16px;
        border-radius: var(--radius-8);
      `;

    case BUTTON_SIZES.MD:
    default:
      return css`
        height: 54px;
        padding: 0 var(--spacing-28);
        font-size: 17px;
        border-radius: var(--radius-8);
      `;
  }
};

export const liquidGlassButtonStyles = css<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $pill?: boolean;
  $fullWidth?: boolean;
  $disabled?: boolean;
}>`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-8);
  font-family: inherit;
  font-weight: var(--font-weight-medium);
  line-height: 1.2;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  user-select: none;
  outline: none;
  box-sizing: border-box;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  /* Liquid Glass Optics */
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);

  /* Physics Transitions */
  transition:
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.3s ease,
    border-color 0.3s ease,
    opacity 0.2s ease;

  /* Size base styling */
  ${({ $size }) => getSizeStyles($size)}

  /* Variant styling (takes precedence over size defaults) */
  ${({ $variant }) => getVariantStyles($variant)}

  /* Pill shape override */
  ${({ $pill }) =>
    $pill &&
    css`
      border-radius: 9999px !important;
    `}

  /* Disabled state */
  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.55;
      pointer-events: none;
      box-shadow: none;
      transform: none !important;
    `}

  /* Focus ring for accessibility */
  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 3px var(--btn-primary-focus, rgba(0, 0, 0, 0.18)),
      inset 0 1px 1px 0 var(--glass-specular-focus, rgba(255, 255, 255, 0.8));
  }

  @media (max-width: 767px) {
    ${({ $fullWidth }) =>
      $fullWidth &&
      css`
        width: 100%;
      `}
  }
`;

export const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $pill?: boolean;
  $fullWidth?: boolean;
  $disabled?: boolean;
}>`
  ${liquidGlassButtonStyles}
`;

export const StyledLink = styled(Link)<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $pill?: boolean;
  $fullWidth?: boolean;
  $disabled?: boolean;
}>`
  ${liquidGlassButtonStyles}
`;

export const StyledAnchor = styled.a<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $pill?: boolean;
  $fullWidth?: boolean;
  $disabled?: boolean;
}>`
  ${liquidGlassButtonStyles}
`;
