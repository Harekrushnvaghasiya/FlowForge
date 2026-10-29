"use client";

import { SignUpPageProps } from "@/global/appTypes";
import { useState } from "react";
import { 
    Author, 
    AuthWrapper, 
    Form, 
    FormContainer, 
    FormSide, 
    ImageSide, 
    InputGroup, 
    QuoteBox, 
    QuoteText, 
    Title, 
    IconSlot, 
    Input, 
    PrimaryButton, 
    Divider, 
    SocialButton,
    SocialRow,
    BottomPrompt 
} from "./styles";
import Image from "next/image";
import SVGIcon from "@/assets/icons/SVGIcon";
import Link from "next/link";

export function SignUpPage({ data }: SignUpPageProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== repeatPassword) {
            alert("Passwords do not match");
            return;
        }
        // TODO: call the sign-up API
    };

    return (
        <AuthWrapper>
            <ImageSide>
                <Image 
                    src={data.quote.imageUrl}
                    alt={data.quote.imageAlt || "Sign Up Background"}
                    fill
                    priority
                    style={{ objectFit: "cover", objectPosition: "0% bottom", zIndex: 0 }}
                />
                <QuoteBox>
                    <QuoteText>
                        {data.quote.quoteText.start}
                        <span className="highlight">{data.quote.quoteText.highlight1}</span>
                        {data.quote.quoteText.middle}
                        <span className="highlight">{data.quote.quoteText.highlight2}</span>
                    </QuoteText>
                    {data.quote.author && (
                        <Author>{data.quote.author}</Author>
                    )}
                </QuoteBox>
            </ImageSide>

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
                                placeholder="Your email" 
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
                                autoComplete="new-password"
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
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

                        <PrimaryButton type="submit">
                            {data.submitButtonText}
                        </PrimaryButton>

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
        </AuthWrapper>
    );
}

export default SignUpPage;
