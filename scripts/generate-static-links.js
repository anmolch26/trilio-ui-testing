#!/usr/bin/env node
/**
 * Generate static links from sitemap for SEO crawler discovery
 * This script reads the sitemap.xml and creates hidden HTML links
 * that search engine crawlers can discover.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');
const indexHtmlPath = path.join(projectRoot, 'index.html');

// Read sitemap
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Extract all URLs from sitemap
const urlMatches = sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g);
const urls = Array.from(urlMatches).map(match => match[1]);

console.log(`Found ${urls.length} URLs in sitemap`);

// Convert full URLs to relative paths
const relativeUrls = urls.map(url => {
  const urlObj = new URL(url);
  return urlObj.pathname;
});

// Group URLs by type for better organization
const grouped = {
  main: [],
  products: [],
  whoWeHelp: [],
  about: [],
  careers: [],
  solutions: [],
  resources: [],
  blogs: [],
  dataDictionary: [],
  legal: []
};

relativeUrls.forEach(url => {
  if (url === '/') grouped.main.push(url);
  else if (url.startsWith('/products/')) grouped.products.push(url);
  else if (url.startsWith('/who-we-help/')) grouped.whoWeHelp.push(url);
  else if (url.startsWith('/about/careers/')) grouped.careers.push(url);
  else if (url.startsWith('/about/')) grouped.about.push(url);
  else if (url.startsWith('/careers/')) grouped.careers.push(url);
  else if (url.startsWith('/solutions/')) grouped.solutions.push(url);
  else if (url.startsWith('/resources/blog-insights/')) grouped.blogs.push(url);
  else if (url.startsWith('/resources/data-dictionary/')) grouped.dataDictionary.push(url);
  else if (url.startsWith('/resources/')) grouped.resources.push(url);
  else if (url.includes('privacy') || url.includes('terms')) grouped.legal.push(url);
  else grouped.main.push(url);
});

// Generate HTML for links
function generateLinkSection(title, urls, comment = '') {
  if (urls.length === 0) return '';
  
  const links = urls.map(url => `      <a href="${url}">${url.split('/').pop() || 'Home'}</a>`).join('\n');
  
  return `
      <!-- ${title} ${comment} -->
${links}`;
}

const staticLinksHtml = `
    <!-- SEO: Static links for search engine crawlers -->
    <!-- Generated from sitemap.xml - DO NOT EDIT MANUALLY -->
    <nav style="position: absolute; left: -9999px; top: -9999px;" aria-hidden="true">
${generateLinkSection('Main Pages', grouped.main)}
${generateLinkSection('Products', grouped.products)}
${generateLinkSection('Who We Help', grouped.whoWeHelp)}
${generateLinkSection('About', grouped.about)}
${generateLinkSection('Careers', grouped.careers)}
${generateLinkSection('Solutions', grouped.solutions, `(${grouped.solutions.length} integrations)`)}
${generateLinkSection('Resources', grouped.resources)}
${generateLinkSection('Blog Posts', grouped.blogs, `(${grouped.blogs.length} articles)`)}
${generateLinkSection('Data Dictionary', grouped.dataDictionary, `(${grouped.dataDictionary.length} metrics)`)}
${generateLinkSection('Legal', grouped.legal)}
    </nav>
`;

// Read current index.html
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Remove existing SEO links section if present
const seoLinksRegex = /<!-- SEO: Static links for search engine crawlers -->[\s\S]*?<\/nav>\s*/;
indexHtml = indexHtml.replace(seoLinksRegex, '');

// Insert new static links before <div id="root">
const rootDivIndex = indexHtml.indexOf('<div id="root">');
if (rootDivIndex === -1) {
  console.error('Error: Could not find <div id="root"> in index.html');
  process.exit(1);
}

// Insert the static links
indexHtml = 
  indexHtml.slice(0, rootDivIndex) +
  staticLinksHtml +
  '\n    ' +
  indexHtml.slice(rootDivIndex);

// Write updated index.html
fs.writeFileSync(indexHtmlPath, indexHtml, 'utf8');

console.log('\n✅ Static links generated successfully!');
console.log('\nSummary:');
console.log(`  Main pages: ${grouped.main.length}`);
console.log(`  Products: ${grouped.products.length}`);
console.log(`  Who We Help: ${grouped.whoWeHelp.length}`);
console.log(`  About: ${grouped.about.length}`);
console.log(`  Careers: ${grouped.careers.length}`);
console.log(`  Solutions: ${grouped.solutions.length}`);
console.log(`  Resources: ${grouped.resources.length}`);
console.log(`  Blog Posts: ${grouped.blogs.length} 📝`);
console.log(`  Data Dictionary: ${grouped.dataDictionary.length}`);
console.log(`  Legal: ${grouped.legal.length}`);
console.log(`  ───────────────────`);
console.log(`  Total: ${relativeUrls.length} links`);
console.log('\n🔍 All links are now discoverable by search engine crawlers!');

