"use client";

import { useState } from "react";
import SVGIcon from "@/assets/icons/SVGIcon";
import Button from "@/components/Button";
import { BUTTON_VARIANTS } from "@/global/constant";
import {
  Wrapper,
  Card,
  Title,
  Subtitle,
  Form,
  InputGroup,
  IconSlot,
  Input,
  BackToLogin,
} from "./styles";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call the password reset API
    setSubmitted(true);
  };

  return (
    <Wrapper>
      <Card>
        <Title>Forgot Password?</Title>
        <Subtitle>
          {submitted
            ? "If an account exists for that email, we've sent password reset instructions."
            : "No worries, enter your email address below and we'll send you a link to reset your password."}
        </Subtitle>

        {!submitted ? (
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <IconSlot>
                <SVGIcon name="email" height="21.5" width="17.2" />
              </IconSlot>
              <Input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Your mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>

            <Button type="submit" variant={BUTTON_VARIANTS.PRIMARY} fullWidth>
              Send Reset Link
            </Button>
          </Form>
        ) : (
          <Button
            type="button"
            variant={BUTTON_VARIANTS.PRIMARY}
            fullWidth
            onClick={() => setSubmitted(false)}
          >
            Resend Email
          </Button>
        )}

        <BackToLogin href="/signin">← Back to Log In</BackToLogin>
      </Card>
    </Wrapper>
  );
}
