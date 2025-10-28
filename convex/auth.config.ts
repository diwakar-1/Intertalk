import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://rare-buffalo-45.clerk.accounts.dev",
      applicationID: "convex",
    },
  ]
} satisfies AuthConfig;