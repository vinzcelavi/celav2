import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { vitePluginSsrCss } from "@hiogawa/vite-plugin-ssr-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSsrCss({
      entries: ["/src/entry-client"],
    }),
  ]
})
