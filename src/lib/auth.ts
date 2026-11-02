import { prismaAdapter } from "better-auth/adapters/prisma";
import { betterAuth } from "better-auth";
import prisma from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
  },

  secret:
    process.env.BETTER_AUTH_SECRET ||
    "temporary-build-secret-flowforge-dev-32-chars-long",
  baseURL:
    process.env.BETTER_AUTH_URL ||
    process.env.NEXT_PUBLIC_APP_URL ||
    "http://localhost:3000",
});
