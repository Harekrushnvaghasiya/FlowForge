"use client";

import { SignInPageProps } from "@/global/appTypes";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SVGIcon from "@/assets/icons/SVGIcon";
import { 
    AuthWrapper,
    Author,
    BottomPrompt,
    Divider, 
    ForgotPassword, 
    Form, 
    FormContainer,
    FormSide, 
    IconSlot, 
    ImageSide, 
    Input, 
    InputGroup, 
    PrimaryButton, 
    QuoteBox, 
    QuoteText, 
    SocialButton,
    SocialRow,
    Title 
} from "./styles";

export function SignInPage({ data }: SignInPageProps) {
    const [email, setEmail] = useState("");
    const [passWord, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Sign In Submitted", { email, passWord });
    };

    return (
        <AuthWrapper>
            <FormSide>
                <FormContainer>
                    <Title>{data.title}</Title>
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
                        <InputGroup>
                            <IconSlot>
                                <SVGIcon name="key" height="19" width="19" />
                            </IconSlot>
                            <Input 
                                type="password" 
                                name="password"
                                autoComplete="current-password"
                                placeholder="password" 
                                value={passWord} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required
                            />
                        </InputGroup>

                        <PrimaryButton type="submit">{data.submitButtonText}</PrimaryButton>

                        {data.forgotPasswordText && (
                            <ForgotPassword href={data.forgotPasswordHref || "#"}>
                                {data.forgotPasswordText}
                            </ForgotPassword>
                        )}

                        <Divider>
                            <span>{data.dividerText}</span>
                        </Divider>

                        {data.socialButtons && (
                            <SocialRow>
                                <SocialButton type="button">
                                    <SVGIcon name="google" width="18" height="18" />
                                    {data.socialButtons.googleText}
                                </SocialButton>
                                <SocialButton type="button">
                                    <SVGIcon name="facebook" width="18" height="18" />
                                    {data.socialButtons.facebookText}
                                </SocialButton>
                            </SocialRow>
                        )}

                        <BottomPrompt>
                            {data.bottomPrompt.text}
                            <Link href={data.bottomPrompt.actionHref}>
                                {data.bottomPrompt.actionText}
                            </Link>
                        </BottomPrompt>
                    </Form>
                </FormContainer>
            </FormSide>

            <ImageSide>
                <Image
                    src={data.quote.imageUrl}
                    alt={data.quote.imageAlt || "Sign In Background"}
                    fill
                    priority
                    style={{ objectFit: "cover", zIndex: 0 }}
                />
                <QuoteBox>
                    <QuoteText>
                        {data.quote.quoteText.start}
                        <span className="highlight">{data.quote.quoteText.highlight1}</span>
                        {data.quote.quoteText.middle}
                        <span className="highlight">{data.quote.quoteText.highlight2}</span>
                    </QuoteText>
                    {data.quote.author && <Author>{data.quote.author}</Author>}
                </QuoteBox>
            </ImageSide>
        </AuthWrapper>
    );
}

export default SignInPage;
