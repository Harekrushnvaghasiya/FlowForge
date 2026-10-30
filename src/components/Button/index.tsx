"use client";

import React from "react";
import {
  StyledButton,
  StyledLink,
  StyledAnchor,
  GlossOverlay,
  GlassInnerRim,
  GlassReflectionOverlay,
  ShimmerSweep,
  ButtonContent,
  ButtonTextFront,
  ButtonTextShadow,
  IconSlot,
  Spinner,
} from "./styles";
import {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  ButtonVariant,
  ButtonSize,
} from "@/global/constant";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  pill?: boolean;
  fullWidth?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  isExternal?: boolean;
  target?: string;
  rel?: string;
  children?: React.ReactNode;
}

export default function Button({
  variant = BUTTON_VARIANTS.PRIMARY,
  size = BUTTON_SIZES.MD,
  pill,
  fullWidth = false,
  isLoading = false,
  disabled = false,
  icon,
  iconPosition = "left",
  href,
  isExternal = false,
  target,
  rel,
  type = "button",
  onClick,
  children,
  className,
  style,
  ...rest
}: ButtonProps) {
  const isButtonDisabled = disabled || isLoading;
  const isPill = pill !== undefined ? pill : variant === BUTTON_VARIANTS.PRIMARY;
  const isPrimary = variant === BUTTON_VARIANTS.PRIMARY;

  const content = (
    <>
      {!isPrimary && <GlossOverlay aria-hidden="true" />}
      {isPrimary && <GlassInnerRim aria-hidden="true" />}
      {isPrimary && <GlassReflectionOverlay aria-hidden="true" />}
      {isPrimary && <ShimmerSweep aria-hidden="true" />}
      {isLoading && <Spinner aria-hidden="true" />}
      {icon && iconPosition === "left" && !isLoading && (
        <IconSlot>{icon}</IconSlot>
      )}
      {children && (
        <ButtonContent>
          {isPrimary && (
            <ButtonTextShadow aria-hidden="true">{children}</ButtonTextShadow>
          )}
          <ButtonTextFront>{children}</ButtonTextFront>
        </ButtonContent>
      )}
      {icon && iconPosition === "right" && !isLoading && (
        <IconSlot>{icon}</IconSlot>
      )}
    </>
  );

  if (href) {
    const isAnchorExternal =
      isExternal ||
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      target === "_blank";

    if (isAnchorExternal) {
      return (
        <StyledAnchor
          href={href}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          $variant={variant}
          $size={size}
          $pill={isPill}
          $fullWidth={fullWidth}
          $disabled={isButtonDisabled}
          className={className}
          style={style}
          onClick={
            isButtonDisabled
              ? (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()
              : (onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>)
          }
          {...(rest as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </StyledAnchor>
      );
    }

    return (
      <StyledLink
        href={href}
        target={target}
        rel={rel}
        $variant={variant}
        $size={size}
        $pill={isPill}
        $fullWidth={fullWidth}
        $disabled={isButtonDisabled}
        className={className}
        style={style}
        onClick={
          isButtonDisabled
            ? (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()
            : (onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>)
        }
        {...(rest as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </StyledLink>
    );
  }

  return (
    <StyledButton
      type={type}
      disabled={isButtonDisabled}
      $variant={variant}
      $size={size}
      $pill={isPill}
      $fullWidth={fullWidth}
      $disabled={isButtonDisabled}
      onClick={onClick}
      className={className}
      style={style}
      {...rest}
    >
      {content}
    </StyledButton>
  );
}
