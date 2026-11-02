"use client";

import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.85);
  }
`;

export const DashboardContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: var(--bg-primary, #f2ede6);
  color: var(--text-primary, #0f0e0e);
  display: flex;
  flex-direction: column;
`;

export const DashboardHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border-secondary, #e8dfdf);
  padding: var(--spacing-16) var(--horizontal-padding, 72px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-16);

  @media (max-width: 767px) {
    padding: var(--spacing-14) var(--horizontal-padding, 20px);
  }
`;

export const BrandSection = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-12);
`;

export const BrandLogo = styled.span`
  font-size: var(--font-size-h5, 24px);
  font-weight: var(--font-weight-bold, 700);
  color: var(--text-wine-red, #4d0908);
  letter-spacing: -0.02em;
  text-decoration: none;
`;

export const UserNavSection = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-16);
`;

export const UserPill = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-10);
  padding: var(--spacing-6) var(--spacing-14);
  background: var(--bg-primary, #f2ede6);
  border: 1px solid var(--border-primary, #d3c6be);
  border-radius: var(--spacing-50, 50px);
`;

export const UserAvatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--wine-red, #4d0908);
  color: var(--text-white, #ffffff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: var(--font-weight-semibold, 600);
  text-transform: uppercase;
  flex-shrink: 0;
`;

export const UserMeta = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;

  .name {
    font-size: 13px;
    font-weight: var(--font-weight-semibold, 600);
    color: var(--text-primary, #0f0e0e);
    max-width: 140px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .role {
    font-size: 11px;
    color: var(--text-secondary, #595b59);
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const DashboardContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-40) var(--horizontal-padding, 72px) var(--spacing-80);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-32);

  @media (max-width: 1179px) {
    padding: var(--spacing-32) var(--horizontal-padding, 24px) var(--spacing-60);
  }

  @media (max-width: 767px) {
    padding: var(--spacing-24) var(--horizontal-padding, 20px) var(--spacing-40);
    gap: var(--spacing-24);
  }
`;

export const WelcomeCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(248, 245, 245, 0.9) 100%
  );
  border: 1px solid var(--border-secondary, #e8dfdf);
  border-radius: var(--radius-8, 8px);
  padding: var(--spacing-32);
  box-shadow: var(--box-shadow);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-20);
  flex-wrap: wrap;

  @media (max-width: 767px) {
    padding: var(--spacing-20);
  }
`;

export const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);

  h1 {
    font-size: var(--font-size-h4, 32px);
    font-weight: var(--font-weight-bold, 700);
    color: var(--text-primary, #0f0e0e);
    letter-spacing: -0.02em;
    margin: 0;

    @media (max-width: 767px) {
      font-size: var(--font-size-h5, 24px);
    }
  }

  p {
    font-size: var(--font-size-body-xs, 16px);
    color: var(--text-secondary, #595b59);
    margin: 0;
  }
`;

export const LiveBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-8);
  padding: var(--spacing-6) var(--spacing-16);
  background: var(--bg-secondary, #ffffff);
  border: 1px solid var(--border-primary, #d3c6be);
  border-radius: var(--spacing-50, 50px);
  font-size: var(--font-size-body-xxs, 14px);
  font-weight: var(--font-weight-medium, 500);
  color: var(--text-secondary, #595b59);
  box-shadow: var(--box-shadow);
`;

export const StatusDot = styled.span`
  width: var(--spacing-8, 8px);
  height: var(--spacing-8, 8px);
  border-radius: 50%;
  background-color: var(--status-dot, #68fb7f);
  display: inline-block;
  animation: ${pulse} 2s infinite ease-in-out;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-16);

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: var(--bg-secondary, #ffffff);
  border: 1px solid var(--border-secondary, #e8dfdf);
  border-radius: var(--radius-8, 8px);
  padding: var(--spacing-20) var(--spacing-24);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--box-shadow-secondary);
  }

  .stat-label {
    font-size: 13px;
    font-weight: var(--font-weight-medium, 500);
    color: var(--text-secondary, #595b59);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .stat-value {
    font-size: 28px;
    font-weight: var(--font-weight-bold, 700);
    color: var(--text-primary, #0f0e0e);
    line-height: 1.1;
  }

  .stat-footer {
    display: flex;
    align-items: center;
    gap: var(--spacing-6);
    font-size: 12px;
    color: var(--text-secondary, #595b59);

    .trend-up {
      color: #15803d;
      font-weight: var(--font-weight-semibold, 600);
    }
  }
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-24);

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: var(--bg-secondary, #ffffff);
  border: 1px solid var(--border-secondary, #e8dfdf);
  border-radius: var(--radius-8, 8px);
  padding: var(--spacing-28);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-20);

  @media (max-width: 767px) {
    padding: var(--spacing-20);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-12);
  border-bottom: 1px solid var(--border-secondary, #e8dfdf);
  padding-bottom: var(--spacing-16);

  h2 {
    font-size: 18px;
    font-weight: var(--font-weight-bold, 700);
    color: var(--text-primary, #0f0e0e);
    margin: 0;
  }
`;

export const WorkflowList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
`;

export const WorkflowItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-14) var(--spacing-16);
  border: 1px solid var(--border-secondary, #e8dfdf);
  border-radius: var(--radius-6, 6px);
  background: var(--bg-off-white, #f8f5f5);
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    border-color: var(--border-primary, #d3c6be);
    background: #ffffff;
  }

  .wf-info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);

    .wf-name {
      font-size: 14px;
      font-weight: var(--font-weight-semibold, 600);
      color: var(--text-primary, #0f0e0e);
    }

    .wf-meta {
      font-size: 12px;
      color: var(--text-secondary, #595b59);
    }
  }

  .wf-status {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-6);
    padding: var(--spacing-4) var(--spacing-10);
    border-radius: var(--spacing-50, 50px);
    font-size: 12px;
    font-weight: var(--font-weight-medium, 500);
    background: #dcfce7;
    color: #166534;
  }
`;

export const AccountDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
`;

export const DetailRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);

  .label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--text-secondary, #595b59);
    font-weight: var(--font-weight-medium, 500);
  }

  .value {
    font-size: 14px;
    font-weight: var(--font-weight-semibold, 600);
    color: var(--text-primary, #0f0e0e);
    word-break: break-all;
  }
`;

export const QuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-10);
  margin-top: var(--spacing-8);
`;

export const LoadingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--spacing-16);
  background-color: var(--bg-primary, #f2ede6);
  color: var(--text-secondary, #595b59);
`;

