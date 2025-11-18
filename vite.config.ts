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
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libs - loaded on every page
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-core';
          }
          
          // Router - needed for navigation
          if (id.includes('react-router-dom')) {
            return 'router';
          }
          
          // Split ALL Radix UI into separate chunk (lazy load when needed)
          if (id.includes('@radix-ui')) {
            return 'radix-ui';
          }
          
          // React Query
          if (id.includes('@tanstack/react-query')) {
            return 'react-query';
          }
          
          // Charts library - only needed on specific pages
          if (id.includes('recharts')) {
            return 'charts';
          }
          
          // Form libraries - only needed on form pages
          if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) {
            return 'forms';
          }
          
          // Helmet for SEO
          if (id.includes('react-helmet')) {
            return 'helmet';
          }
          
          // Animation libraries
          if (id.includes('lottie-react')) {
            return 'animations';
          }
          
          // Date libraries
          if (id.includes('date-fns') || id.includes('react-day-picker')) {
            return 'date-utils';
          }
          
          // Other UI libraries
          if (id.includes('embla-carousel') || id.includes('cmdk') || id.includes('vaul')) {
            return 'ui-extras';
          }
          
          // Node modules that aren't split above
          if (id.includes('node_modules')) {
            return 'vendor';
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
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    assetsInlineLimit: 4096,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2, // Run terser twice for better compression
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false, // Remove all comments
      },
    },
    // Increase chunk size warning limit since we're splitting strategically
    chunkSizeWarningLimit: 600,
    // Enable CSS minification
    cssMinify: 'lightningcss',
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
    ],
    exclude: [
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-dropdown-menu',
    ],
  },
}));