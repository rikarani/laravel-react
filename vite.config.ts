import path from "path";
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
  plugins: [
    laravel({
      input: ["resources/ts/main.tsx"],
      refresh: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./resources/ts"),
    },
  },
});
