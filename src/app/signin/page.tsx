import AuthSlider from "@/components/AuthSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Log In - FlowForge",
    description: "Log in to your FlowForge account",
};

export default function SignInRoute() {
    return <AuthSlider initialMode="signin" />;
}
