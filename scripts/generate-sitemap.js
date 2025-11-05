#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const siteBase = process.env.SITE_BASE_URL || "https://trilio.ai";
const defaultLastMod = process.env.SITEMAP_LASTMOD || "2025-10-24T16:42:54.435Z";
const defaultChangeFreq = process.env.SITEMAP_CHANGEFREQ || "monthly";
const defaultPriority = process.env.SITEMAP_PRIORITY || "0.6";

// Gather static routes from src/App.tsx
const appFile = path.resolve(projectRoot, "src/App.tsx");
const appSrc = fs.readFileSync(appFile, "utf8");
const routeRegex = /<Route\s+path=\"([^\"]+)\"/g;
const routePaths = new Set();
let m;
while ((m = routeRegex.exec(appSrc)) !== null) {
  const p = m[1];
  // Skip wildcard and dynamic param routes; they will be handled separately
  if (p.includes(":")) continue;
  if (p.trim() === "*") continue;
  routePaths.add(p.startsWith("/") ? p : `/${p}`);
}

// Fetch blog post slugs from API
const API_BASE = process.env.API_BASE_URL || "https://staging.trilio.ai";
const blogSlugs = [];

try {
  console.log("Fetching blog slugs from API...");
  const limit = 500; // Fetch in batches
  let offset = 0;
  let hasMore = true;

  while (hasMore) {
    const url = `${API_BASE}/api/auth/v1/blogs?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      console.warn(`API request failed with status ${response.status}`);
      break;
    }

    const json = await response.json();
    const blogs = json?.data?.blogs || [];
    
    if (blogs.length === 0) {
      hasMore = false;
    } else {
      blogs.forEach((blog) => {
        if (blog.slug) {
          blogSlugs.push(blog.slug);
        }
      });
      offset += limit;
      
      // Safety check to prevent infinite loops
      if (offset > 10000) {
        console.warn("Safety limit reached (10,000 blogs). Stopping fetch.");
        break;
      }
    }
  }
  
  console.log(`Fetched ${blogSlugs.length} blog slugs from API`);
} catch (error) {
  console.error("Error fetching blog slugs from API:", error.message);
  console.log("Continuing with 0 blog URLs in sitemap");
}

const blogUrls = blogSlugs.map(
  (slug) => `${siteBase}/resources/blog-insights/${slug}`
);

// Compose unique URL list
const staticUrls = Array.from(routePaths)
  .filter((p) => p !== "/index.html")
  .map((p) => `${siteBase}${p === "/" ? "/" : p}`);

const allUrls = Array.from(new Set([...staticUrls, ...blogUrls])).sort();

// Heuristic priority by URL path
function priorityFor(url) {
  try {
    const u = new URL(url);
    const p = u.pathname;
    if (p === "/" || p === "") return "1.0"; // homepage highest
    if (p === "/pricing" || p === "/contact-form" || p === "/resources/data-dictionary") return "0.9";
    if (p.startsWith("/products/")) return "0.9";
    if (p.startsWith("/solutions/")) return "0.9";
    if (p === "/resources/blog-insights") return "0.8";
    if (p.startsWith("/resources/blog-insights/")) return "0.65"; // individual blogs
    if (p.startsWith("/resources/")) return "0.8";
    if (p.startsWith("/who-we-help/")) return "0.8";
    if (p.startsWith("/about") || p.startsWith("/careers")) return "0.55";
    return defaultPriority;
  } catch {
    return defaultPriority;
  }
}

// Heuristic changefreq by URL path
function changefreqFor(url) {
  try {
    const u = new URL(url);
    const p = u.pathname;
    if (p === "/" || p === "") return "daily"; // homepage daily
    if (p === "/resources/blog-insights") return "daily"; // listing daily
    if (p.startsWith("/resources/blog-insights/")) return "monthly"; // individual blogs monthly
    if (p === "/solutions/data-integrations") return "weekly";
    return defaultChangeFreq;
  } catch {
    return defaultChangeFreq;
  }
}

// Build entries with metadata
const entries = allUrls.map((u) => {
  return {
    url: u,
    lastmod: defaultLastMod,
    changefreq: changefreqFor(u),
    priority: priorityFor(u),
  };
});

// Sort by changefreq precedence: daily -> weekly -> monthly -> others
const cfRank = { daily: 0, weekly: 1, monthly: 2, yearly: 3 };
entries.sort((a, b) => {
  const ra = cfRank[a.changefreq] ?? 9;
  const rb = cfRank[b.changefreq] ?? 9;
  if (ra !== rb) return ra - rb;
  // Stable secondary sort: higher priority first, then URL lexicographically
  if (a.priority !== b.priority) return parseFloat(b.priority) - parseFloat(a.priority);
  return a.url.localeCompare(b.url);
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>\n    <loc>${e.url}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
  )
  .join("\n")}
</urlset>
`;

const outFile = path.resolve(projectRoot, "public/sitemap.xml");
fs.writeFileSync(outFile, xml, "utf8");
// Also write to dist if it exists to reflect immediately in preview builds
const distOut = path.resolve(projectRoot, "dist/sitemap.xml");
try {
  if (fs.existsSync(path.resolve(projectRoot, "dist"))) {
    fs.writeFileSync(distOut, xml, "utf8");
  }
} catch {}
console.log(`Updated sitemap with ${allUrls.length} URLs at ${outFile}`);
