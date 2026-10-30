"use client";

import styled from "styled-components";
import Link from "next/link";

export const AuthContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  background-color: #ffffff;
  display: flex;

  /* On short screens or mobile landscape, enable scrolling so content is never clipped */
  @media (max-width: 991px), (max-height: 650px) {
    height: auto;
    min-height: 100vh;
    overflow-y: auto;
  }
`;

// ==========================================
// 1. FIXED BACKGROUND IMAGES
// ==========================================
export const LeftBgImage = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  will-change: opacity;
  transition: opacity 0.65s cubic-bezier(0.65, 0, 0.35, 1);
  pointer-events: none;
  overflow: hidden;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const RightBgImage = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  z-index: 1;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  will-change: opacity;
  transition: opacity 0.65s cubic-bezier(0.65, 0, 0.35, 1);
  pointer-events: none;
  overflow: hidden;

  @media (max-width: 991px) {
    display: none;
  }
`;

// ==========================================
// 2. SLIDING FORM CONTAINER (Swaps Left <-> Right)
// ==========================================
export const SlidingFormPanel = styled.div<{ $isSignUp: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  will-change: transform;
  transition: transform 0.65s cubic-bezier(0.65, 0, 0.35, 1);
  transform: ${({ $isSignUp }) => ($isSignUp ? "translateX(100%)" : "translateX(0%)")};
  overflow-y: auto;
  overflow-x: hidden;
  padding: 32px 20px;

  /* On large viewports with adequate height, remove scroll container overhead for pure 60fps transform */
  @media (min-width: 992px) and (min-height: 651px) {
    overflow: hidden;
  }

  @media (max-width: 991px) {
    position: relative;
    width: 100%;
    height: auto;
    min-height: 100vh;
    transform: none;
    padding: 32px 20px;
    background-color: #ffffff;
  }
`;

export const FormCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 380px;
  min-height: 520px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContent = styled.div<{ $isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: ${({ $isActive }) => ($isActive ? "auto" : "none")};
  visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  will-change: opacity, transform;
  transition: ${({ $isActive }) =>
    $isActive
      ? "opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s, visibility 0.4s 0.15s"
      : "opacity 0.18s ease 0s, transform 0.18s ease 0s, visibility 0.18s 0.18s"};
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 28px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const InputGroup = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const IconSlot = styled.span`
  position: absolute;
  left: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  pointer-events: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 46px;
  padding: 0 16px 0 42px;
  font-size: 14px;
  color: #111827;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  outline: none;
  background-color: #ffffff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
  }
`;

export const FormErrorMessage = styled.div`
  color: #dc2626;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  width: 100%;
`;

export const ForgotPassword = styled(Link)`
  align-self: flex-end;
  font-size: 13px;
  color: #1677ff;
  text-decoration: none;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #e5e7eb;
  }

  span {
    padding: 0 12px;
    font-size: 12px;
    color: #9ca3af;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

export const BottomPrompt = styled.p`
  margin-top: 24px;
  text-align: center;
  font-size: 13px;
  color: #6b7280;

  a {
    color: #1677ff;
    font-weight: 600;
    text-decoration: none;
    margin-left: 5px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// ==========================================
// 3. SLIDING QUOTE CONTAINER (Centered over subjects)
// ==========================================
export const SlidingQuotePanel = styled.div<{ $isSignUp: boolean }>`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  z-index: 15;
  pointer-events: none;
  display: flex;
  justify-content: center;
  will-change: transform;
  transition: transform 0.65s cubic-bezier(0.65, 0, 0.35, 1);
  transform: ${({ $isSignUp }) => ($isSignUp ? "translateX(-100%)" : "translateX(0%)")};

  @media (max-width: 991px) {
    display: none;
  }
`;

export const QuoteLayer = styled.div<{ $isActive: boolean }>`
  position: absolute;
  top: 72px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 460px;
  padding: 0 28px;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transform: ${({ $isActive }) => ($isActive ? "translateY(0)" : "translateY(8px)")};
  visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
  will-change: opacity, transform;
  transition: ${({ $isActive }) =>
    $isActive
      ? "opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s, visibility 0.4s 0.15s"
      : "opacity 0.18s ease 0s, transform 0.18s ease 0s, visibility 0.18s 0.18s"};
`;

export const QuoteBox = styled.div`
  position: relative;
  z-index: 2;

  &::before {
    content: "“";
    font-size: 80px;
    font-family: serif;
    color: rgba(22, 119, 255, 0.15);
    position: absolute;
    top: -40px;
    left: -20px;
    line-height: 1;
    pointer-events: none;
  }
`;

export const QuoteText = styled.h2`
  font-size: 25px;
  font-weight: 500;
  line-height: 1.45;
  color: #1f2937;

  span.highlight {
    color: #1677ff;
    font-weight: 700;
  }
`;

export const Author = styled.p`
  margin-top: 14px;
  font-size: 14px;
  color: #4b5563;
  font-weight: 500;
  text-align: right;
`;
