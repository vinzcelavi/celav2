import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { vitePluginSsrCss } from "@hiogawa/vite-plugin-ssr-css";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    vitePluginSsrCss({
      entries: ["/src/entry-client"],
    }),
  ]
})
