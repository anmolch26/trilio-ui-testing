#!/usr/bin/env node
/*
 Reads tmp/generated-blogs/*.json and writes a compiled TS module at
 src/data/generated/generatedBlogData.tsx that matches BlogPost and is
 merged by src/data/blogData.tsx. It converts markdown content into React nodes
 minimally by wrapping as <div dangerouslySetInnerHTML> at render time.
*/
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");
const inDir = path.resolve(projectRoot, "tmp/generated-blogs");
const outFile = path.resolve(
  projectRoot,
  "src/data/generated/generatedBlogData.tsx"
);

if (!fs.existsSync(inDir)) {
  console.error("No tmp/generated-blogs directory. Run generator first.");
  process.exit(1);
}

const files = fs
  .readdirSync(inDir)
  .filter((f) => f.endsWith(".json") && f !== "index.json");
if (files.length === 0) {
  console.error("No blog JSON files to import.");
  process.exit(1);
}

// Read existing coreBlogData size to continue IDs
const blogDataPath = path.resolve(projectRoot, "src/data/blogData.tsx");
const content = fs.readFileSync(blogDataPath, "utf8");
const idMatches = [...content.matchAll(/\bid:\s*(\d+)\s*,/g)].map((m) =>
  parseInt(m[1], 10)
);
const baseMaxId = idMatches.length ? Math.max(...idMatches) : 0;

const posts = files.map((f) =>
  JSON.parse(fs.readFileSync(path.resolve(inDir, f), "utf8"))
);

// Sort deterministically by filename
files.sort();

let idCounter = baseMaxId;
const lines = [];
lines.push('import React from "react";');
lines.push('import type { BlogPost } from "../blogData";');
lines.push("");
lines.push("// This file is auto-generated. Do not edit manually.");
lines.push("");
lines.push("export const generatedBlogData: Record<number, BlogPost> = {");

for (const f of files) {
  const raw = JSON.parse(fs.readFileSync(path.resolve(inDir, f), "utf8"));
  idCounter += 1;
  // Render generated HTML directly using dangerouslySetInnerHTML
  const datePretty = new Date(raw.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  lines.push(`  ${idCounter}: {`);
  lines.push(`    id: ${idCounter},`);
  lines.push(`    title: ${JSON.stringify(raw.title)},`);
  lines.push(`    slug: ${JSON.stringify(raw.slug)},`);
  lines.push(`    author: ${JSON.stringify(raw.author)},`);
  lines.push(`    authorImage: ${JSON.stringify(raw.authorImage)},`);
  lines.push(`    date: ${JSON.stringify(datePretty)},`);
  lines.push(`    category: ${JSON.stringify(raw.category)},`);
  lines.push(
    `    readTime: ${JSON.stringify(String(raw.readingTime) + " min")},`
  );
  // Ensure featuredImage is an absolute or site-relative URL
  const featured = String(raw.featuredImage || "");
  let safeFeatured = featured;
  if (!(featured.startsWith("http") || featured.startsWith("/"))) {
    safeFeatured = "/" + featured.replace(/^\/+/, "");
  }
  lines.push(`    featuredImage: ${JSON.stringify(safeFeatured)},`);
  lines.push("    content: (");
  lines.push(
    '      <div className="prose prose-lg max-w-none text-black prose-headings:text-black prose-headings:font-bold prose-h2:mb-4 prose-h3:mb-3 prose-p:text-black prose-p:mb-4 prose-li:text-black">'
  );
  lines.push(
    `        <div dangerouslySetInnerHTML={{ __html: ${JSON.stringify(
      raw.content
    )} }} />`
  );
  lines.push("      </div>");
  lines.push("    ),");
  lines.push("  },");
}

lines.push("};");
lines.push("");

fs.writeFileSync(outFile, lines.join("\n"), "utf8");
console.log(`Imported ${files.length} blogs into ${outFile}`);
