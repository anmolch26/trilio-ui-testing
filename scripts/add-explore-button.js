#!/usr/bin/env node
/*
Adds the "Explore Trilio" button to all newly added blogs (IDs 135-159)
*/

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");
const generatedBlogDataFile = path.resolve(
  projectRoot,
  "src/data/generated/generatedBlogData.tsx"
);

// Read the current file
let content = fs.readFileSync(generatedBlogDataFile, "utf8");

// The Explore Trilio button HTML
const exploreButtonHtml = `\n\n<div class="mt-8 text-center"><a href="/" class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl">Explore Trilio<span class="ml-2">→</span></a></div>`;

// Add the button to all blogs with IDs 135-159
for (let id = 135; id <= 159; id++) {
  // Simple pattern to find the conclusion paragraph for each blog
  const conclusionPattern = new RegExp(
    `(\\s*${id}:\\s*{[\\s\\S]*?<h3><strong>Conclusion</strong></h3>[\\s\\S]*?<p>[^<]*</p>)([^`]*?)(`[^`]*?`[\\s\\S]*?})`,
    "g"
  );
  
  content = content.replace(conclusionPattern, (match, beforeConclusion, middle, afterConclusion) => {
    // Check if the button is already present
    if (middle.includes('Explore Trilio')) {
      return match; // Skip if button already exists
    }
    
    // Add the button before the closing backtick
    const newMiddle = middle.replace(/(<p>[^<]*<\/p>)([^`]*?)(`)/, `$1${exploreButtonHtml}$2$3`);
    return beforeConclusion + newMiddle + afterConclusion;
  });
}

// Write the updated content
fs.writeFileSync(generatedBlogDataFile, content, "utf8");

console.log("Successfully added 'Explore Trilio' button to all newly added blogs (IDs 135-159)");