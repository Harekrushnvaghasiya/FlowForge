import Dashboard from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - FlowForge",
  description: "Manage your FlowForge automated workflows, pipelines, and account.",
};

export default function DashboardPage() {
  return <Dashboard />;
}

