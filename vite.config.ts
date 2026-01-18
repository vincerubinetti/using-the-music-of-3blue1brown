import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/using-the-music-of-3blue1brown/",
  resolve: { alias: { "@": "/src" } },
  plugins: [react(), tailwindcss()],
});
