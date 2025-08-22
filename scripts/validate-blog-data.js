#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const inDir = path.resolve(projectRoot, "tmp/generated-blogs");

const files = fs.existsSync(inDir)
  ? fs
      .readdirSync(inDir)
      .filter((f) => f.endsWith(".json") && f !== "index.json")
  : [];
if (files.length === 0) {
  console.error("No generated blog JSON files found. Run the generator first.");
  process.exit(1);
}

const requiredFields = [
  "slug",
  "title",
  "content",
  "excerpt",
  "author",
  "publishDate",
  "lastModified",
  "tags",
  "category",
  "metaTitle",
  "metaDescription",
  "readingTime",
  "featured",
  "published",
  "featuredImage",
];

let ok = true;
const seenSlugs = new Set();
const seenTitles = new Set();

for (const f of files) {
  const raw = JSON.parse(fs.readFileSync(path.resolve(inDir, f), "utf8"));

  for (const field of requiredFields) {
    if (!(field in raw)) {
      console.error(`Missing field ${field} in ${f}`);
      ok = false;
    }
  }
  if (seenSlugs.has(raw.slug)) {
    console.error(`Duplicate slug ${raw.slug} in ${f}`);
    ok = false;
  }
  if (seenTitles.has(raw.title)) {
    console.error(`Duplicate title ${raw.title} in ${f}`);
    ok = false;
  }
  seenSlugs.add(raw.slug);
  seenTitles.add(raw.title);

  const words = raw.content.split(/\s+/).filter(Boolean).length;
  if (words < 400 || words > 2000) {
    console.error(`Content length out of bounds (${words} words) in ${f}`);
    ok = false;
  }

  // Featured image basic sanity
  if (typeof raw.featuredImage !== "string" || raw.featuredImage.length === 0) {
    console.error(`Missing or invalid featuredImage in ${f}`);
    ok = false;
  }
}

if (!ok) {
  console.error("Validation failed.");
  process.exit(2);
}

console.log(`Validated ${files.length} blog files. All good.`);
