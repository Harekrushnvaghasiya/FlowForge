import SignInPage from "@/components/SignInPage";
import { signInData } from "@/helpers/raw";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Log In - FlowForge",
    description: "Log in to your FlowForge account",
};

export default function SignInRoute(){
    return (
        <SignInPage data={signInData} />
    )
}