import ForgotPasswordPage from "@/components/ForgotPasswordPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password - FlowForge",
  description: "Reset your FlowForge account password",
};

export default function ForgotPasswordRoute() {
  return <ForgotPasswordPage />;
}

