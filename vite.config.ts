import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = process.cwd();

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? "/",
  plugins: [react()],
  build: {
    target: "es2020",
    rollupOptions: {
      input: {
        home: resolve(root, "index.html"),
        healthcare: resolve(root, "work/healthcare-ml/index.html"),
        mmm: resolve(root, "work/bayesian-mmm/index.html"),
        experimentation: resolve(root, "work/experimentation/index.html"),
        inventory: resolve(root, "work/inventory-optimization/index.html")
      }
    }
  }
});
