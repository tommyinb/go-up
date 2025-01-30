import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/solo-playground",
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
});
