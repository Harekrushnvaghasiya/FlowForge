"use client";

import styled from "styled-components";

export const HeroWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: var(--vertical-half-padding);
  padding-bottom: var(--vertical-padding);
  background-color: var(--bg-primary);

  @media (max-width: 1179px) {
    padding-top: var(--vertical-half-padding);
    padding-bottom: var(--vertical-padding);
  }

  @media (max-width: 767px) {
    padding-top: var(--vertical-half-padding);
    padding-bottom: var(--vertical-padding);
  }
`;

export const HeroContent = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-8);
  padding: var(--spacing-6) var(--spacing-16);
  border-radius: var(--spacing-50);
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  color: var(--text-secondary);
  font-size: var(--font-size-body-xxs);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-28);
  box-shadow: var(--box-shadow);

  span.highlight {
    color: var(--orange);
    font-weight: var(--font-weight-semibold);
  }

  span.divider {
    color: var(--border-primary);
  }
`;

export const StatusDot = styled.span`
  width: var(--spacing-8);
  height: var(--spacing-8);
  border-radius: 50%;
  background-color: var(--status-dot);
  display: inline-block;
  animation: pulse 2s infinite ease-in-out;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.4;
      transform: scale(0.85);
    }
  }
`;

export const HeroTitle = styled.h1`
  font-size: var(--font-size-h1);
  line-height: var(--line-height-h1);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  letter-spacing: -0.02em;
  margin: 0;

  @media (max-width: 1179px) {
    font-size: var(--font-size-h1);
    line-height: var(--line-height-h1);
  }

  @media (max-width: 767px) {
    font-size: var(--font-size-h1);
    line-height: var(--line-height-h1);
  }
`;

export const HeroHighlight = styled.span`
  color: var(--text-wine-red);
`;

export const HeroDescription = styled.p`
  font-size: var(--font-size-body-lg);
  line-height: var(--line-height-body-lg);
  font-weight: var(--font-weight-regular);
  color: var(--text-secondary);
  max-width: 640px;
  margin: var(--spacing-24) auto 0;

  @media (max-width: 1179px) {
    font-size: var(--font-size-body-lg);
    line-height: var(--line-height-body-lg);
  }

  @media (max-width: 767px) {
    font-size: var(--font-size-body-lg);
    line-height: var(--line-height-body-lg);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-16);
  margin-top: var(--spacing-40);
  flex-wrap: wrap;

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    gap: var(--spacing-12);
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-14) var(--spacing-28);
  font-size: var(--font-size-body-xs);
  font-weight: var(--font-weight-medium);
  background-color: var(--wine-red);
  color: var(--text-white);
  border-radius: var(--radius-4);
  text-decoration: none;
  box-shadow: var(--box-shadow);
  transition: opacity 0.2s ease, transform 0.15s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-14) var(--spacing-28);
  font-size: var(--font-size-body-xs);
  font-weight: var(--font-weight-medium);
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-4);
  text-decoration: none;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--bg-off-white);
    border-color: var(--border-tertiary);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const TechStackWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-8);
  margin-top: var(--spacing-64);
`;

export const TechBadge = styled.span`
  padding: var(--spacing-4) var(--spacing-12);
  font-size: var(--font-size-body-xxs);
  font-family: var(--font-mono);
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-secondary);
  color: var(--text-secondary);
  border-radius: var(--radius-4);
`;

