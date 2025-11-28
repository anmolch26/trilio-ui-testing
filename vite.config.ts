import { defineConfig, PluginOption, UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";
import { createHtmlPlugin } from "vite-plugin-html";
import ViteSitemap from 'vite-plugin-sitemap';
import { criticalCSS } from "./vite-plugin-critical-css";

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
export default defineConfig(async ({ mode }): Promise<UserConfig> => {
  // Fetch dynamic blog routes
  const fetchBlogRoutes = async () => {
    const blogRoutes: string[] = [];
    try {
      // Fetch first batch to check connectivity and get data
      // In a real scenario, you might want to paginate through all, but for build we'll fetch a large limit
      const response = await fetch("https://staging.trilio.ai/api/auth/v1/blogs?limit=1000&offset=0");
      if (response.ok) {
        const json = await response.json() as { data: { blogs: any[] } };
        const blogs = json?.data?.blogs || [];
        blogs.forEach((blog: any) => {
          if (blog.slug) {
            blogRoutes.push(`/resources/blog-insights/${blog.slug}`);
          }
        });
      }
    } catch (e) {
      console.warn("Failed to fetch blog routes for SSG:", e);
    }
    return blogRoutes;
  };

  const blogRoutes = await fetchBlogRoutes();
  const allRoutes = [...routes.map(r => r.path), ...blogRoutes, '/sitemap'];

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      ViteSitemap({
        hostname: 'https://trilio.ai',
        dynamicRoutes: allRoutes,
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
    ].filter(Boolean) as PluginOption[],
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
  };
});
