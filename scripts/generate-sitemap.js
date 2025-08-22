#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const siteBase = process.env.SITE_BASE_URL || "https://www.trilio.ai";

// Try to load compiled generated data to list slugs
const blogDataPath = path.resolve(
  projectRoot,
  "src/data/generated/generatedBlogData.tsx"
);
if (!fs.existsSync(blogDataPath)) {
  console.error("No generated blog data found. Run import step first.");
  process.exit(1);
}

const file = fs.readFileSync(blogDataPath, "utf8");
const slugMatches = [...file.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

const urls = slugMatches.map(
  (slug) => `${siteBase}/resources/blog-insights/${slug}`
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>
`;

const outFile = path.resolve(projectRoot, "public/sitemap.xml");
fs.writeFileSync(outFile, xml, "utf8");
console.log(`Updated sitemap with ${urls.length} blog URLs at ${outFile}`);
