#!/usr/bin/env node
/*
Converts generated blog JSON files to React component format and adds them to generatedBlogData.tsx
*/

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");
const generatedBlogsDir = path.resolve(projectRoot, "tmp/generated-blogs");
const generatedBlogDataFile = path.resolve(
  projectRoot,
  "src/data/generated/generatedBlogData.tsx"
);

// Read the generated blog data
const indexFile = path.resolve(generatedBlogsDir, "index.json");
const blogs = JSON.parse(fs.readFileSync(indexFile, "utf8"));

// Read the existing generatedBlogData.tsx file
let existingContent = fs.readFileSync(generatedBlogDataFile, "utf8");

// Find the last blog entry ID to determine starting ID for new blogs
const lastIdMatch = existingContent.match(/(\d+):\s*{/g);
let lastId = 78; // Default starting ID
if (lastIdMatch && lastIdMatch.length > 0) {
  const lastEntry = lastIdMatch[lastIdMatch.length - 1];
  lastId = parseInt(lastEntry.match(/(\d+):/)[1]);
}

// Convert blog data to React component format
function convertBlogToReact(blog, newId) {
  const publishDate = new Date(blog.publishDate);
  const formattedDate = publishDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `  ${newId}: {
    id: ${newId},
    title: "${blog.title}",
    slug: "${blog.slug}",
    author: "${blog.author}",
    authorImage: "${blog.authorImage}",
    date: "${formattedDate}",
    category: "${blog.category}",
    readTime: "${blog.readingTime} min",
    featuredImage: "${blog.featuredImage}",
    content: (
      <div className="prose prose-lg max-w-none text-black prose-headings:text-black prose-headings:font-bold prose-h2:mb-4 prose-h3:mb-3 prose-p:text-black prose-p:mb-4 prose-li:text-black">
        <div
          dangerouslySetInnerHTML={{
            __html: \`${blog.content.replace(/`/g, "\\`")}\`,
          }}
        />
      </div>
    ),
  },`;
}

// Generate new blog entries
let newBlogEntries = [];
let currentId = lastId + 1;

for (let i = 0; i < blogs.length; i++) {
  const blog = blogs[i];
  const newBlogEntry = convertBlogToReact(blog, currentId);
  newBlogEntries.push(newBlogEntry);
  currentId++;
}

// Find the position to insert new blogs (before the closing };)
const insertPosition = existingContent.lastIndexOf("};");
if (insertPosition === -1) {
  console.error("Could not find insertion point in generatedBlogData.tsx");
  process.exit(1);
}

// Insert new blog entries
const beforeClosing = existingContent.substring(0, insertPosition);
const afterClosing = existingContent.substring(insertPosition);

const newContent =
  beforeClosing + "\n" + newBlogEntries.join("\n") + "\n" + afterClosing;

// Write the updated content
fs.writeFileSync(generatedBlogDataFile, newContent, "utf8");

console.log(
  `Successfully added ${blogs.length} new blog entries to generatedBlogData.tsx`
);
console.log(`New blog IDs: ${lastId + 1} to ${currentId - 1}`);
