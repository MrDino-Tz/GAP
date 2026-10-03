import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  // Default: GitHub-Pages style subpath (/GAP/). When building for the VPS
  // domain root, set GAP_DOMAIN_BUILD=1 so assets are served from /.
  const isDomainBuild = process.env.GAP_DOMAIN_BUILD === "1";
  return {
    base: isDomainBuild ? "/" : mode === "production" ? "/GAP/" : "/",
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
