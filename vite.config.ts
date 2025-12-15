import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";
import { createHtmlPlugin } from "vite-plugin-html";
import ViteSitemap from 'vite-plugin-sitemap';
import { criticalCSS } from "./vite-plugin-critical-css";
import { blogMetaTagsMiddleware } from "./vite-plugin-blog-meta";

const routes = [
  { path: '/', name: 'Home' },
  { path: '/pricing', name: 'Pricing' },
  { path: '/contact-form', name: 'Contact' },
  { path: '/products/ai-agents', name: 'AI Agents' },
  { path: '/products/bi-reporting', name: 'BI Reporting' },
  { path: '/products/insights', name: 'Insights' },
  { path: '/about/careers', name: 'Careers' },
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    blogMetaTagsMiddleware(),
    ViteSitemap({
      hostname: 'https://trilio.ai',
      dynamicRoutes: routes.map(r => r.path),
      generateRobotsTxt: true,
    }),
    mode === 'development' && componentTagger(),
    mode === 'production' && criticalCSS(),
    visualizer({
      open: false,
      filename: "dist/stats.html",
      gzipSize: true,
      brotliSize: true,
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Trilio.ai - Ecommerce Intelligence, Powered by AI',
          description: 'Transform your ecommerce data into profitable insights with Trilio.ai.',
        },
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true, // Enable source maps for bundle analysis
    cssCodeSplit: true, // Split CSS for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Split major vendor libs so first paint needs less JS
          react: ["react", "react-dom", "react-router-dom"],
          radix: [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-tooltip",
          ],
          charts: ["recharts"],
        },
        // Optimize asset file names for better caching
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return `assets/[name]-[hash][extname]`;
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    assetsInlineLimit: 4096, // Inline smaller assets to reduce requests
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
      },
    },
  },
}));
