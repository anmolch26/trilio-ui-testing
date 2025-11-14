import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";
import { criticalCSS } from "./vite-plugin-critical-css";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && criticalCSS(),
    visualizer({
      open: false,
      filename: "dist/stats.html",
      gzipSize: true,
      brotliSize: true,
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
        manualChunks: (id) => {
          // Split major vendor libs so first paint needs less JS
          if (id.includes('node_modules')) {
            // React core
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            // Radix UI components
            if (id.includes('@radix-ui')) {
              return 'radix-ui';
            }
            // Charts
            if (id.includes('recharts')) {
              return 'charts';
            }
            // Animation
            if (id.includes('framer-motion')) {
              return 'motion';
            }
            // Query/State management
            if (id.includes('@tanstack')) {
              return 'query';
            }
            // UI libraries
            if (id.includes('lucide-react') || id.includes('sonner') || id.includes('cmdk')) {
              return 'ui-libs';
            }
            // Form libraries
            if (id.includes('react-hook-form') || id.includes('zod') || id.includes('@hookform')) {
              return 'forms';
            }
            // Other vendor code
            return 'vendor';
          }
          // Split by route/page for better caching
          if (id.includes('/pages/')) {
            const pageMatch = id.match(/\/pages\/([^/]+)/);
            if (pageMatch) {
              const pageName = pageMatch[1];
              // Group solutions pages together
              if (pageName === 'solutions') {
                return 'solutions';
              }
              // Group resources pages together
              if (pageName === 'resources') {
                return 'resources';
              }
              // Group who-we-help pages together
              if (pageName === 'who-we-help') {
                return 'who-we-help';
              }
              // Group about pages together
              if (pageName === 'about' || pageName === 'careers') {
                return 'about';
              }
              // Group product pages together
              if (pageName === 'products') {
                return 'products';
              }
            }
          }
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
