import { vitePluginSsrCss } from '@hiogawa/vite-plugin-ssr-css';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import biomePlugin from 'vite-plugin-biome';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    biomePlugin({
      mode: 'format',
      files: '.',
      applyFixes: true
    }),
    vitePluginSsrCss({
      entries: ['/src/entry-client']
    })
  ]
});
