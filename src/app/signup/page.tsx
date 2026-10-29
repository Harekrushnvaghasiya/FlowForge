import AuthSlider from "@/components/AuthSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign Up - FlowForge",
    description: "Sign up to your FlowForge account",
};

export default function SignUpRoute() {
    return <AuthSlider initialMode="signup" />;
}
