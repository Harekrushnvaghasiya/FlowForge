import { Suspense } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Dashboard from "@/components/Dashboard";
import { LoadingContainer, StatusDot } from "@/components/Dashboard/styles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - FlowForge",
  description: "Manage your FlowForge automated workflows, pipelines, and account.",
};

async function DashboardSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  return <Dashboard initialUser={session.user} />;
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <LoadingContainer>
          <StatusDot />
          <span>Loading your workspace...</span>
        </LoadingContainer>
      }
    >
      <DashboardSession />
    </Suspense>
  );
}
