"use client";

import React from "react";
import { Container } from "@/styles/common";
import { HomeHeroSectionProps } from "@/global/appTypes";
import {
  HeroWrapper,
  HeroContent,
  StatusBadge,
  StatusDot,
  HeroTitle,
  HeroHighlight,
  HeroDescription,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  TechStackWrapper,
  TechBadge,
} from "./style";

export function HomeHeroSection({ data }: HomeHeroSectionProps) {
  const { badge, title, description, buttons, techStack } = data;

  return (
    <HeroWrapper>
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
            <PrimaryButton href={buttons.primary.href}>
              {buttons.primary.label}
            </PrimaryButton>
            <SecondaryButton
              href={buttons.secondary.href}
              {...(buttons.secondary.isExternal && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {buttons.secondary.label}
            </SecondaryButton>
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

