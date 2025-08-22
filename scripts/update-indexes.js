#!/usr/bin/env node
/*
 Rebuild lightweight search indexes or summary reports.
 Currently prints category and tag distributions from generated dataset.
*/
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const inFile = path.resolve(projectRoot, "tmp/generated-blogs/index.json");

if (!fs.existsSync(inFile)) {
  console.error("No generated blogs index found. Run generator first.");
  process.exit(1);
}

const posts = JSON.parse(fs.readFileSync(inFile, "utf8"));

const categoryCounts = posts.reduce((acc, p) => {
  acc[p.category] = (acc[p.category] || 0) + 1;
  return acc;
}, {});

const tagCounts = posts.reduce((acc, p) => {
  for (const t of p.tags || []) acc[t] = (acc[t] || 0) + 1;
  return acc;
}, {});

const report = {
  total: posts.length,
  categories: categoryCounts,
  tags: tagCounts,
};

const outDir = path.resolve(projectRoot, "tmp/reports");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.resolve(outDir, "content-summary.json"),
  JSON.stringify(report, null, 2),
  "utf8"
);
console.log("Wrote tmp/reports/content-summary.json");
