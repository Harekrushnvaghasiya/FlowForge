"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SVGIcon from "@/assets/icons/SVGIcon";
import { signInData, signUpData } from "@/helpers/raw";
import {
  AuthContainer,
  LeftBgImage,
  RightBgImage,
  SlidingFormPanel,
  FormCard,
  FormContent,
  Title,
  Form,
  InputGroup,
  IconSlot,
  Input,
  PrimaryButton,
  ForgotPassword,
  Divider,
  SocialRow,
  SocialButton,
  BottomPrompt,
  SlidingQuotePanel,
  QuoteLayer,
  QuoteBox,
  QuoteText,
  Author,
} from "./styles";

interface AuthSliderProps {
  initialMode?: "signin" | "signup";
}

export default function AuthSlider({ initialMode = "signin" }: AuthSliderProps) {
  const pathname = usePathname();
  const [isSignUp, setIsSignUp] = useState(
    initialMode === "signup" || (typeof window !== "undefined" && window.location.pathname.includes("signup"))
  );

  // Sync state if user clicks browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setIsSignUp(window.location.pathname.includes("signup"));
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Adjust state during render if pathname changes
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsSignUp(pathname.includes("signup"));
  }

  // Smooth sliding transition handler
  const handleSwitch = (e: React.MouseEvent, target: "signin" | "signup") => {
    e.preventDefault();
    e.stopPropagation();
    const isTargetSignUp = target === "signup";
    setIsSignUp(isTargetSignUp);

    const targetUrl = isTargetSignUp ? "/signup" : "/signin";
    window.history.pushState(null, "", targetUrl);
  };

  // Sign In form state
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  // Sign Up form state
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign In Submitted", { signInEmail, signInPassword });
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signUpPassword !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Sign Up Submitted", { signUpEmail, signUpPassword });
  };

  return (
    <AuthContainer>
      {/* ============================================================ */}
      {/* 1. FIXED BACKGROUND IMAGES (Stay in place, only crossfade)   */}
      {/* ============================================================ */}
      {/* Left side image: Eucalyptus (visible only in Sign Up) */}
      <LeftBgImage $isVisible={isSignUp}>
        <Image
          src={signUpData.quote.imageUrl}
          alt={signUpData.quote.imageAlt || "Sign Up Background"}
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "0% bottom", zIndex: 0 }}
        />
      </LeftBgImage>

      {/* Right side image: Desk & Chair (visible only in Log In) */}
      <RightBgImage $isVisible={!isSignUp}>
        <Image
          src={signInData.quote.imageUrl}
          alt={signInData.quote.imageAlt || "Sign In Background"}
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "93% bottom", zIndex: 0 }}
        />
      </RightBgImage>

      {/* ============================================================ */}
      {/* 2. SLIDING FORM PANEL (Moves Left <-> Right across columns)  */}
      {/* ============================================================ */}
      <SlidingFormPanel $isSignUp={isSignUp}>
        <FormCard>
          {/* LOG IN FORM */}
          <FormContent $isActive={!isSignUp}>
            <Title>{signInData.title}</Title>
            <Form onSubmit={handleSignInSubmit}>
              <InputGroup>
                <IconSlot>
                  <SVGIcon name="email" height="21.5" width="17.2" />
                </IconSlot>
                <Input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Your mail"
                  value={signInEmail}
                  onChange={(e) => setSignInEmail(e.target.value)}
                  required
                />
              </InputGroup>

              <InputGroup>
                <IconSlot>
                  <SVGIcon name="key" height="19" width="19" />
                </IconSlot>
                <Input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="password"
                  value={signInPassword}
                  onChange={(e) => setSignInPassword(e.target.value)}
                  required
                />
              </InputGroup>

              <PrimaryButton type="submit">{signInData.submitButtonText}</PrimaryButton>

              {signInData.forgotPasswordText && (
                <ForgotPassword href={signInData.forgotPasswordHref || "/forgot-password"}>
                  {signInData.forgotPasswordText}
                </ForgotPassword>
              )}

              <Divider>
                <span>{signInData.dividerText}</span>
              </Divider>

              {signInData.socialButtons && (
                <SocialRow>
                  <SocialButton type="button">
                    <SVGIcon name="google" width="18" height="18" />
                    {signInData.socialButtons.googleText}
                  </SocialButton>
                  <SocialButton type="button">
                    <SVGIcon name="facebook" width="18" height="18" />
                    {signInData.socialButtons.facebookText}
                  </SocialButton>
                </SocialRow>
              )}

              <BottomPrompt>
                {signInData.bottomPrompt.text}
                <button
                  type="button"
                  onClick={(e) => handleSwitch(e, "signup")}
                >
                  {signInData.bottomPrompt.actionText}
                </button>
              </BottomPrompt>
            </Form>
          </FormContent>

          {/* SIGN UP FORM */}
          <FormContent $isActive={isSignUp}>
            <Title>{signUpData.title}</Title>
            <Form onSubmit={handleSignUpSubmit}>
              <InputGroup>
                <IconSlot>
                  <SVGIcon name="email" height="21.5" width="17.2" />
                </IconSlot>
                <Input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Your email"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                  required
                />
              </InputGroup>

              <InputGroup>
                <IconSlot>
                  <SVGIcon name="key" height="19" width="19" />
                </IconSlot>
                <Input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  placeholder="Password"
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                  required
                />
              </InputGroup>

              <InputGroup>
                <IconSlot>
                  <SVGIcon name="key" height="19" width="19" />
                </IconSlot>
                <Input
                  type="password"
                  name="confirmPassword"
                  autoComplete="new-password"
                  placeholder="Repeat Password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  required
                />
              </InputGroup>

              <PrimaryButton type="submit">{signUpData.submitButtonText}</PrimaryButton>

              <Divider>
                <span>{signUpData.dividerText}</span>
              </Divider>

              {signUpData.socialButtons && (
                <SocialRow>
                  <SocialButton type="button">
                    <SVGIcon name="google" width="18" height="18" />
                    {signUpData.socialButtons.googleText}
                  </SocialButton>
                  <SocialButton type="button">
                    <SVGIcon name="facebook" width="18" height="18" />
                    {signUpData.socialButtons.facebookText}
                  </SocialButton>
                </SocialRow>
              )}

              <BottomPrompt>
                {signUpData.bottomPrompt.text}
                <button
                  type="button"
                  onClick={(e) => handleSwitch(e, "signin")}
                >
                  {signUpData.bottomPrompt.actionText}
                </button>
              </BottomPrompt>
            </Form>
          </FormContent>
        </FormCard>
      </SlidingFormPanel>

      {/* ============================================================ */}
      {/* 3. SLIDING QUOTE PANEL (Moves Right <-> Left across columns) */}
      {/* ============================================================ */}
      <SlidingQuotePanel $isSignUp={isSignUp}>
        {/* Log In Quote (Eleanor Roosevelt) */}
        <QuoteLayer $isActive={!isSignUp}>
          <QuoteBox>
            <QuoteText>
              {signInData.quote.quoteText.start}
              <span className="highlight">{signInData.quote.quoteText.highlight1}</span>
              {signInData.quote.quoteText.middle}
              <span className="highlight">{signInData.quote.quoteText.highlight2}</span>
            </QuoteText>
            {signInData.quote.author && <Author>{signInData.quote.author}</Author>}
          </QuoteBox>
        </QuoteLayer>

        {/* Sign Up Quote (Steve Jobs) */}
        <QuoteLayer $isActive={isSignUp}>
          <QuoteBox>
            <QuoteText>
              {signUpData.quote.quoteText.start}
              <span className="highlight">{signUpData.quote.quoteText.highlight1}</span>
              {signUpData.quote.quoteText.middle}
              <span className="highlight">{signUpData.quote.quoteText.highlight2}</span>
            </QuoteText>
            {signUpData.quote.author && <Author>{signUpData.quote.author}</Author>}
          </QuoteBox>
        </QuoteLayer>
      </SlidingQuotePanel>
    </AuthContainer>
  );
}
