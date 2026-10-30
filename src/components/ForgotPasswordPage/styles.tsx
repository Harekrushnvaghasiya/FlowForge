"use client";

import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 24px;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 12px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 28px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
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

export const BackToLogin = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  font-size: 14px;
  font-weight: 500;
  color: #1677ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
