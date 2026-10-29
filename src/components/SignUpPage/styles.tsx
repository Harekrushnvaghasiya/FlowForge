"use client";

import styled from "styled-components";

export const AuthWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: #ffffff;

  @media (max-width: 991px) {
    flex-direction: column-reverse;
  }
`;

export const FormSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 32px;
  background-color: #ffffff;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
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

export const PrimaryButton = styled.button`
  width: 100%;
  height: 46px;
  background-color: #1677ff;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0958d9;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 24px 0;

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

export const SocialButton = styled.button`
  flex: 1;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
  }
`;

export const BottomPrompt = styled.p`
  margin-top: 28px;
  text-align: center;
  font-size: 13px;
  color: #6b7280;

  a {
    color: #1677ff;
    font-weight: 600;
    text-decoration: none;
    margin-left: 4px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ImageSide = styled.div<{ $bgImage?: string }>`
  flex: 1;
  position: relative;
  ${(props) =>
    props.$bgImage
      ? `background-image: url("${props.$bgImage}"); background-size: cover; background-position: center;`
      : ""}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 80px 60px;
  min-height: 400px;
  overflow: hidden;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const QuoteBox = styled.div`
  max-width: 480px;
  position: relative;
  z-index: 2;

  &::before {
    content: "“";
    font-size: 90px;
    font-family: serif;
    color: rgba(22, 119, 255, 0.12);
    position: absolute;
    top: -48px;
    left: -20px;
    line-height: 1;
    pointer-events: none;
  }
`;

export const QuoteText = styled.h2`
  font-size: 26px;
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
  font-size: 15px;
  color: #4b5563;
  font-weight: 500;
  text-align: right;
`;