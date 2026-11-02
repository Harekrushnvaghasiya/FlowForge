"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import Button from "@/components/Button";
import { BUTTON_VARIANTS, BUTTON_SIZES } from "@/global/constant";
import {
  DashboardContainer,
  DashboardHeader,
  BrandSection,
  BrandLogo,
  UserNavSection,
  UserPill,
  UserAvatar,
  UserMeta,
  DashboardContent,
  WelcomeCard,
  WelcomeText,
  LiveBadge,
  StatusDot,
  StatsGrid,
  StatCard,
  MainGrid,
  Card,
  CardHeader,
  WorkflowList,
  WorkflowItem,
  AccountDetails,
  DetailRow,
  QuickActions,
  LoadingContainer,
} from "./styles";

interface Workflow {
  id: string;
  name: string;
  trigger: string;
  lastRun: string;
  status: "active" | "running" | "completed";
}

const mockWorkflows: Workflow[] = [
  {
    id: "wf-1",
    name: "Customer Lead Enrichment & Routing",
    trigger: "Webhook: Stripe Payment Succeeded",
    lastRun: "2 minutes ago",
    status: "active",
  },
  {
    id: "wf-2",
    name: "Nightly Analytics Warehouse Sync",
    trigger: "Scheduled Cron: 0 0 * * *",
    lastRun: "3 hours ago",
    status: "completed",
  },
  {
    id: "wf-3",
    name: "Incident Escalation & Slack Dispatcher",
    trigger: "HTTP Post: /api/v1/alert",
    lastRun: "Just now",
    status: "running",
  },
  {
    id: "wf-4",
    name: "User Welcome Sequence & Onboarding Mail",
    trigger: "Auth Event: user.created",
    lastRun: "12 minutes ago",
    status: "active",
  },
];

interface DashboardUser {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  createdAt?: Date;
  emailVerified?: boolean;
}

interface DashboardProps {
  initialUser?: DashboardUser;
}

export default function Dashboard({ initialUser }: DashboardProps = {}) {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const user = session?.user || initialUser;

  React.useEffect(() => {
    if (!isPending && !user) {
      router.push("/signin");
    }
  }, [isPending, user, router]);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await authClient.signOut();
      router.push("/signin");
      router.refresh();
    } catch (err) {
      console.error("Sign out error:", err);
      router.push("/signin");
    } finally {
      setIsSigningOut(false);
    }
  };

  if ((isPending && !initialUser) || !user) {
    return (
      <LoadingContainer>
        <StatusDot />
        <span>Loading your workspace...</span>
      </LoadingContainer>
    );
  }

  const displayName = user?.name || user?.email?.split("@")[0] || "FlowForge Creator";
  const userInitial = displayName.charAt(0).toUpperCase();

  return (
    <DashboardContainer>
      {/* Top Navigation Bar */}
      <DashboardHeader>
        <BrandSection>
          <Link href="/" style={{ textDecoration: "none" }}>
            <BrandLogo>FlowForge</BrandLogo>
          </Link>
          <LiveBadge>
            <StatusDot />
            <span>Workspace</span>
          </LiveBadge>
        </BrandSection>

        <UserNavSection>
          <UserPill>
            <UserAvatar>{userInitial}</UserAvatar>
            <UserMeta>
              <span className="name">{displayName}</span>
              <span className="role">{user?.email || "Authenticated User"}</span>
            </UserMeta>
          </UserPill>

          <Button
            variant={BUTTON_VARIANTS.SECONDARY}
            size={BUTTON_SIZES.SM}
            onClick={handleSignOut}
            disabled={isSigningOut}
            isLoading={isSigningOut}
          >
            Sign Out
          </Button>
        </UserNavSection>
      </DashboardHeader>

      {/* Main Dashboard Content */}
      <DashboardContent>
        {/* Welcome Section */}
        <WelcomeCard>
          <WelcomeText>
            <h1>Welcome back, {displayName}!</h1>
            <p>
              Your automation engine is running smoothly. Monitor flows, track executions, and manage
              your pipeline configurations below.
            </p>
          </WelcomeText>

          <Button
            href="/"
            variant={BUTTON_VARIANTS.BRAND}
            size={BUTTON_SIZES.SM}
          >
            + New Flow
          </Button>
        </WelcomeCard>

        {/* 4 Overview Metric Cards */}
        <StatsGrid>
          <StatCard>
            <span className="stat-label">Active Workflows</span>
            <span className="stat-value">12</span>
            <div className="stat-footer">
              <span className="trend-up">+2</span> added this week
            </div>
          </StatCard>

          <StatCard>
            <span className="stat-label">Total Executions</span>
            <span className="stat-value">28,450</span>
            <div className="stat-footer">
              <span className="trend-up">99.94%</span> success rate
            </div>
          </StatCard>

          <StatCard>
            <span className="stat-label">Avg. Latency</span>
            <span className="stat-value">142ms</span>
            <div className="stat-footer">Optimal performance</div>
          </StatCard>

          <StatCard>
            <span className="stat-label">API Credits Used</span>
            <span className="stat-value">64%</span>
            <div className="stat-footer">12,800 / 20,000 runs</div>
          </StatCard>
        </StatsGrid>

        {/* Two-column Main Grid */}
        <MainGrid>
          {/* Workflows Column */}
          <Card>
            <CardHeader>
              <h2>Recent Workflows & Pipelines</h2>
              <span className="subtitle">4 flows running</span>
            </CardHeader>

            <WorkflowList>
              {mockWorkflows.map((wf) => (
                <WorkflowItem key={wf.id}>
                  <div className="wf-info">
                    <span className="wf-name">{wf.name}</span>
                    <span className="wf-meta">
                      {wf.trigger} • Last run {wf.lastRun}
                    </span>
                  </div>
                  <span className="wf-status">
                    <StatusDot />
                    {wf.status}
                  </span>
                </WorkflowItem>
              ))}
            </WorkflowList>
          </Card>

          {/* Account Profile Column */}
          <Card>
            <CardHeader>
              <h2>Account Details</h2>
            </CardHeader>

            <AccountDetails>
              <DetailRow>
                <span className="label">User Name</span>
                <span className="value">{displayName}</span>
              </DetailRow>

              <DetailRow>
                <span className="label">Email Address</span>
                <span className="value">{user?.email || "Not specified"}</span>
              </DetailRow>

              <DetailRow>
                <span className="label">Account Status</span>
                <span className={`value ${user?.emailVerified ? "status-active" : "status-pending"}`}>
                  {user?.emailVerified ? "Active & Verified" : "Pending Verification"}
                </span>
              </DetailRow>

              <DetailRow>
                <span className="label">User ID</span>
                <span className="value user-id">{user?.id || "usr_live_flowforge"}</span>
              </DetailRow>

              <QuickActions>
                <Button
                  href="/"
                  variant={BUTTON_VARIANTS.SECONDARY}
                  size={BUTTON_SIZES.SM}
                  fullWidth
                >
                  View Documentation
                </Button>
                <Button
                  variant={BUTTON_VARIANTS.OUTLINE}
                  size={BUTTON_SIZES.SM}
                  fullWidth
                  onClick={handleSignOut}
                  disabled={isSigningOut}
                >
                  Log Out
                </Button>
              </QuickActions>
            </AccountDetails>
          </Card>
        </MainGrid>
      </DashboardContent>
    </DashboardContainer>
  );
}

