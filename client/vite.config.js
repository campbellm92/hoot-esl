import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@ui": resolve(__dirname, "../packages/ui"),
      "@animations": resolve(__dirname, "../packages/animations"),
      "@utils": resolve(__dirname, "../packages/utils"),
      "@localhooks": resolve(__dirname, "./src/hooks"),
      "@globalhooks": resolve(__dirname, "../packages/hooks"),
      "@globalcomponents": resolve(__dirname, "../packages/components"),
      "@localcomponents": resolve(__dirname, "./src/components"),
    },
  },
});
