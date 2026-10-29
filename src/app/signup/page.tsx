import SignUpPage from "@/components/SignUpPage";
import { signUpData } from "@/helpers/raw";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign Up - FlowForge",
    description: "Sign up to your FlowForge account",
};

export default function SignUpRoute(){
    return (
        <SignUpPage data={signUpData} />
    )
}