import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // No custom domain yet: GitHub Pages serves the site at /<repo>/.
  // When a domain is attached in Pages settings, switch to "/" and add
  // public/CNAME in the same commit, or every asset 404s.
  base: "/Seedancev1/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
