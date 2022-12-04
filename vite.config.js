import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/using-the-music-of-3blue1brown/",
  plugins: [react(), svgr()]
})
