"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
  FormErrorMessage,
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
import { AuthSliderProps } from "@/global/appTypes";

export default function AuthSlider({ initialMode = "signin" }: AuthSliderProps) {
  const pathname = usePathname();

  const [isSignUp, setIsSignUp] = useState(
    initialMode === "signup" || (typeof window !== "undefined" && window.location.pathname.includes("signup"))
  );

  // Form input refs for focus management between transitions
  const signInFirstInputRef = useRef<HTMLInputElement>(null);
  const signUpFirstInputRef = useRef<HTMLInputElement>(null);
  const isInitialMount = useRef(true);

  // Shift focus to the active form's first input to maintain keyboard & screen-reader context
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    const timer = setTimeout(() => {
      if (isSignUp) {
        signUpFirstInputRef.current?.focus();
      } else {
        signInFirstInputRef.current?.focus();
      }
    }, 250);
    return () => clearTimeout(timer);
  }, [isSignUp]);

  // Sync state if user clicks browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const isTargetSignUp = window.location.pathname.includes("signup");
      setIsSignUp(isTargetSignUp);
      if (typeof document !== "undefined") {
        document.title = isTargetSignUp ? "Sign Up - FlowForge" : "Log In - FlowForge";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute(
            "content",
            isTargetSignUp ? "Sign up to your FlowForge account" : "Log in to your FlowForge account"
          );
        }
      }
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
  const handleSwitch = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    target: "signin" | "signup"
  ) => {
    // Preserve standard browser behaviors (Cmd/Ctrl click to open in new tab)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    e.preventDefault();
    const isTargetSignUp = target === "signup";
    setIsSignUp(isTargetSignUp);

    // Dynamically update document title and description
    if (typeof document !== "undefined") {
      document.title = isTargetSignUp ? "Sign Up - FlowForge" : "Log In - FlowForge";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          isTargetSignUp ? "Sign up to your FlowForge account" : "Log in to your FlowForge account"
        );
      }
    }

    // Update URL smoothly without unmounting the slider or interrupting the CSS animation
    window.history.pushState(null, "", href);
  };

  // Sign In form state
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  // Sign Up form state
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [signUpError, setSignUpError] = useState<string | null>(null);

  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call the sign-in API
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signUpPassword !== repeatPassword) {
      setSignUpError("Passwords do not match. Please try again.");
      return;
    }
    setSignUpError(null);
    // TODO: call the sign-up API
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
          priority={initialMode === "signup"}
          sizes="(max-width: 991px) 0vw, 50vw"
          style={{ objectFit: "cover", objectPosition: "0% bottom", zIndex: 0 }}
        />
      </LeftBgImage>

      {/* Right side image: Desk & Chair (visible only in Log In) */}
      <RightBgImage $isVisible={!isSignUp}>
        <Image
          src={signInData.quote.imageUrl}
          alt={signInData.quote.imageAlt || "Sign In Background"}
          fill
          priority={initialMode !== "signup"}
          sizes="(max-width: 991px) 0vw, 50vw"
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
                  ref={signInFirstInputRef}
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
                <Link
                  href={signInData.bottomPrompt.actionHref}
                  onClick={(e) =>
                    handleSwitch(e, signInData.bottomPrompt.actionHref, "signup")
                  }
                >
                  {signInData.bottomPrompt.actionText}
                </Link>
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
                  ref={signUpFirstInputRef}
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Your email"
                  value={signUpEmail}
                  onChange={(e) => {
                    setSignUpEmail(e.target.value);
                    if (signUpError) setSignUpError(null);
                  }}
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
                  onChange={(e) => {
                    setSignUpPassword(e.target.value);
                    if (signUpError) setSignUpError(null);
                  }}
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
                  onChange={(e) => {
                    setRepeatPassword(e.target.value);
                    if (signUpError) setSignUpError(null);
                  }}
                  required
                />
              </InputGroup>

              {signUpError && (
                <FormErrorMessage role="alert" aria-live="assertive">
                  {signUpError}
                </FormErrorMessage>
              )}

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
                <Link
                  href={signUpData.bottomPrompt.actionHref}
                  onClick={(e) =>
                    handleSwitch(e, signUpData.bottomPrompt.actionHref, "signin")
                  }
                >
                  {signUpData.bottomPrompt.actionText}
                </Link>
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
