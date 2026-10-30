"use client";

import React from "react";
import { Container } from "@/styles/common";
import { HomeHeroSectionProps } from "@/global/appTypes";
import Button from "@/components/Button";
import { BUTTON_VARIANTS, BUTTON_SIZES } from "@/global/constant";
import {
  HeroWrapper,
  TopRightNav,
  HeroContent,
  StatusBadge,
  StatusDot,
  HeroTitle,
  HeroHighlight,
  HeroDescription,
  ButtonGroup,
  TechStackWrapper,
  TechBadge,
} from "./styles";

export function HomeHeroSection({ data }: HomeHeroSectionProps) {
  const { badge, title, description, buttons, techStack } = data;

  return (
    <HeroWrapper>
      <TopRightNav>
        <Button
          href="/signin"
          variant={BUTTON_VARIANTS.SECONDARY}
          size={BUTTON_SIZES.SM}
        >
          Sign In
        </Button>
      </TopRightNav>

      <Container>
        <HeroContent>
          {/* Status Badge */}
          <StatusBadge>
            <StatusDot />
            <span className="highlight">{badge.highlight}</span>
            <span className="divider">•</span>
            <span>{badge.text}</span>
          </StatusBadge>

          {/* Hero Heading */}
          <HeroTitle>
            {title.prefix}
            <HeroHighlight>{title.highlight}</HeroHighlight>
          </HeroTitle>

          {/* Hero Subtitle */}
          <HeroDescription>{description}</HeroDescription>

          {/* Action Buttons */}
          <ButtonGroup>
            <Button
              href={buttons.primary.href}
              variant={BUTTON_VARIANTS.BRAND}
              size={BUTTON_SIZES.LG}
              isExternal={buttons.primary.isExternal}
            >
              {buttons.primary.label}
            </Button>
            <Button
              href={buttons.secondary.href}
              variant={BUTTON_VARIANTS.SECONDARY}
              size={BUTTON_SIZES.LG}
              isExternal={buttons.secondary.isExternal}
              {...(buttons.secondary.isExternal && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {buttons.secondary.label}
            </Button>
          </ButtonGroup>

          {/* Tech Stack Badges */}
          <TechStackWrapper>
            {techStack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </TechStackWrapper>
        </HeroContent>
      </Container>
    </HeroWrapper>
  );
}

export default HomeHeroSection;
