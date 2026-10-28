"use client";

import { SignInPageProps } from "@/global/appTypes";
import { useState } from "react";
import { 
    AuthWrapper,
    Divider, 
    ForgotPassword, 
    Form, 
    FormSide, 
    IconSlot, 
    ImageSide, 
    Input, 
    InputGroup, 
    PrimaryButton, 
    QuoteBox, 
    QuoteText, 
    Title 
} from "./styles";
import SVGIcon from "@/assets/icons/SVGIcon";
import Link from "next/link";

export function SignInPage({data}: SignInPageProps){
    const [email,setEmail] = useState("");
    const [passWord,setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault();
    console.log("Sign In Submitted",{email,passWord});
    };
    return(
        <AuthWrapper>
            <FormSide>
                <Title>{data.title}</Title>
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <IconSlot>
                            <SVGIcon name="email" height="21.5" width="17.2" />
                        </IconSlot>
                        <Input type="email" placeholder="Your mail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </InputGroup>
                    <InputGroup>
                        <IconSlot>
                            <SVGIcon name="key" height="19" width="19" />
                        </IconSlot>
                        <Input type="password" placeholder="password" value={passWord} onChange={(e)=>setPassword(e.target.value)}/>
                    </InputGroup>

                     <PrimaryButton type="submit">{data.submitButtonText}</PrimaryButton>

                     {data.forgotPasswordText && (
                        <Link href={data.forgotPasswordHref || "#"} passHref legacyBehavior>
                            <ForgotPassword>{data.forgotPasswordText}</ForgotPassword>
                        </Link>
                     )}

                     <Divider>
                        <span>{data.dividerText}</span>
                     </Divider>
                </Form>
            </FormSide>
            <ImageSide $bgImage={data.quote.imageUrl}>
                <QuoteBox>
                    <QuoteText>
                        {data.quote.quoteText.start}
                        <span className="highlight">{data.quote.quoteText.highlight1}</span>
                        {data.quote.quoteText.middle}
                        <span className="highlight">{data.quote.quoteText.highlight2}</span>
                    </QuoteText>
                </QuoteBox>
            </ImageSide>
        </AuthWrapper>
    )
}

export default SignInPage;