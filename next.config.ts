import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "sow-watchpoint";
const isUserOrOrgPage = repositoryName.endsWith(".github.io");

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  trailingSlash: isGitHubPages,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages && !isUserOrOrgPage ? `/${repositoryName}` : undefined,
  assetPrefix: isGitHubPages && !isUserOrOrgPage ? `/${repositoryName}/` : undefined,
};

export default nextConfig;
