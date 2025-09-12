#!/usr/bin/env node
/*
 Generates N blog entries as JSON files under tmp/generated-blogs/.
 Content is markdown with frontmatter fields mirrored in JSON.
 Run: node scripts/generate-blog-data.js --count 200
*/

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");
const outDir = path.resolve(projectRoot, "tmp/generated-blogs");
fs.mkdirSync(outDir, { recursive: true });
// Candidate paths for brand logo overlay (first existing is used)
const brandLogoCandidates = [
  path.resolve(projectRoot, "src/assests/erasebg-transformed (2).png"),
];
function resolveBrandLogoPath() {
  for (const p of brandLogoCandidates) {
    try {
      if (fs.existsSync(p)) return p;
    } catch {}
  }
  return null;
}

const ARG_COUNT = parseInt(
  process.argv.find((a) => a.startsWith("--count="))?.split("=")[1] ||
    process.argv[2] ||
    "200",
  10
);
const COUNT = Number.isFinite(ARG_COUNT) ? ARG_COUNT : 200;

// Discover available public images to attach as featured images
const publicDir = path.resolve(projectRoot, "public");
const uploadDir = path.resolve(publicDir, "lovable-uploads");
const allowedImageExts = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg"]);

function collectImagesFrom(dir, baseHref = "/") {
  try {
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((f) => allowedImageExts.has(path.extname(f).toLowerCase()))
      .map((f) => path.posix.join(baseHref, f));
  } catch {
    return [];
  }
}

const publicRootImages = collectImagesFrom(publicDir, "/");
const uploadImages = collectImagesFrom(uploadDir, "/lovable-uploads");
const IMAGE_POOL = [...uploadImages, ...publicRootImages];

function pickFeaturedImage(index) {
  if (IMAGE_POOL.length === 0) {
    return "https://assets.channeliq.ai/trilio-landing/Blogs/BiReport.png";
  }
  return IMAGE_POOL[index % IMAGE_POOL.length];
}

// Image Template System (20 deterministic templates)
const TEMPLATES = [
  {
    id: 1,
    name: "Indigo→Teal + Bars+Line+Pie",
    gradient: ["#4F46E5", "#06B6D4"],
    overlay: ["rgba(79,70,229,0.25)", "rgba(6,182,212,0.25)"],
    draw: { grid: true, bars: true, line: true, pie: true, ring: false },
    chip: { bg: "dark", text: "#FFFFFF" },
  },
  {
    id: 2,
    name: "Blue→Cyan + Bars+Line",
    gradient: ["#0EA5E9", "#22D3EE"],
    overlay: ["rgba(14,165,233,0.2)", "rgba(34,211,238,0.2)"],
    draw: { grid: false, bars: true, line: true, pie: false, ring: false },
    chip: { bg: "dark", text: "#FFFFFF" },
  },
  {
    id: 3,
    name: "Purple→Pink + Bars+Pie",
    gradient: ["#7C3AED", "#EC4899"],
    overlay: ["rgba(124,58,237,0.2)", "rgba(236,72,153,0.2)"],
    draw: { grid: true, bars: true, line: false, pie: true, ring: false },
    chip: { bg: "dark", text: "#FFFFFF" },
  },
  {
    id: 4,
    name: "Emerald→Teal + Line+Ring",
    gradient: ["#10B981", "#14B8A6"],
    overlay: ["rgba(16,185,129,0.2)", "rgba(20,184,166,0.2)"],
    draw: { grid: true, bars: false, line: true, pie: false, ring: true },
    chip: { bg: "dark", text: "#FFFFFF" },
  },
  {
    id: 5,
    name: "Amber→Orange + Bars",
    gradient: ["#F59E0B", "#F97316"],
    overlay: ["rgba(245,158,11,0.2)", "rgba(249,115,22,0.2)"],
    draw: { grid: false, bars: true, line: false, pie: false, ring: false },
    chip: { bg: "dark", text: "#FFFFFF" },
  },
  {
    id: 6,
    name: "Slate→Blue + Line",
    gradient: ["#0F172A", "#2563EB"],
    overlay: ["rgba(15,23,42,0.25)", "rgba(37,99,235,0.25)"],
    draw: { grid: true, bars: false, line: true, pie: false, ring: false },
    chip: { bg: "light", text: "#0F172A" },
  },
  {
    id: 7,
    name: "Rose→Fuchsia + Pie",
    gradient: ["#E11D48", "#C026D3"],
    overlay: ["rgba(225,29,72,0.2)", "rgba(192,38,211,0.2)"],
    draw: { grid: true, bars: false, line: false, pie: true, ring: false },
    chip: { bg: "dark", text: "#FFFFFF" },
  },
  {
    id: 8,
    name: "Violet→Sky + Bars+Ring",
    gradient: ["#8B5CF6", "#38BDF8"],
    overlay: ["rgba(139,92,246,0.2)", "rgba(56,189,248,0.2)"],
    draw: { grid: false, bars: true, line: false, pie: false, ring: true },
    chip: { bg: "dark", text: "#FFFFFF" },
  },
  {
    id: 9,
    name: "Teal→Cyan + Bars+Line+Ring",
    gradient: ["#0D9488", "#06B6D4"],
    overlay: ["rgba(13,148,136,0.2)", "rgba(6,182,212,0.2)"],
    draw: { grid: true, bars: true, line: true, pie: false, ring: true },
    chip: { bg: "dark", text: "#FFFFFF" },
  },
  {
    id: 10,
    name: "Indigo→Slate + Line+Pie",
    gradient: ["#3730A3", "#334155"],
    overlay: ["rgba(55,48,163,0.2)", "rgba(51,65,85,0.2)"],
    draw: { grid: false, bars: false, line: true, pie: true, ring: false },
    chip: { bg: "light", text: "#0F172A" },
  },
  {
    id: 11,
    name: "Blue→Indigo + Bars+Pie",
    gradient: ["#2563EB", "#4F46E5"],
    overlay: ["rgba(37,99,235,0.2)", "rgba(79,70,229,0.2)"],
    draw: { grid: true, bars: true, line: false, pie: true, ring: false },
    chip: { bg: "dark", text: "#FFFFFF" },
  },
  {
    id: 12,
    name: "Cyan→Green + Bars+Line",
    gradient: ["#06B6D4", "#10B981"],
    overlay: ["rgba(6,182,212,0.2)", "rgba(16,185,129,0.2)"],
    draw: { grid: false, bars: true, line: true, pie: false, ring: false },
    chip: { bg: "dark", text: "#FFFFFF" },
  },
  {
    id: 13,
    name: "Orange→Rose + Bars",
    gradient: ["#F97316", "#F43F5E"],
    overlay: ["rgba(249,115,22,0.2)", "rgba(244,63,94,0.2)"],
    draw: { grid: true, bars: true, line: false, pie: false, ring: false },
    chip: { bg: "dark", text: "#FFFFFF" },
  },
  {
    id: 14,
    name: "Sky→Teal + Line+Ring",
    gradient: ["#0EA5E9", "#0D9488"],
    overlay: ["rgba(14,165,233,0.2)", "rgba(13,148,136,0.2)"],
    draw: { grid: true, bars: false, line: true, pie: false, ring: true },
    chip: { bg: "dark", text: "#FFFFFF" },
  },
  {
    id: 15,
    name: "Yellow→Orange + Pie+Ring",
    gradient: ["#FACC15", "#FB923C"],
    overlay: ["rgba(250,204,21,0.2)", "rgba(251,146,60,0.2)"],
    draw: { grid: false, bars: false, line: false, pie: true, ring: true },
    chip: { bg: "dark", text: "#111827" },
  },
  {
    id: 16,
    name: "Slate→Cyan + Bars+Line+Pie",
    gradient: ["#1E293B", "#06B6D4"],
    overlay: ["rgba(30,41,59,0.25)", "rgba(6,182,212,0.25)"],
    draw: { grid: true, bars: true, line: true, pie: true, ring: false },
    chip: { bg: "light", text: "#0F172A" },
  },
  {
    id: 17,
    name: "Fuchsia→Violet + Bars",
    gradient: ["#C026D3", "#7C3AED"],
    overlay: ["rgba(192,38,211,0.2)", "rgba(124,58,237,0.2)"],
    draw: { grid: true, bars: true, line: false, pie: false, ring: false },
    chip: { bg: "dark", text: "#FFFFFF" },
  },
  {
    id: 18,
    name: "Green→Emerald + Line",
    gradient: ["#22C55E", "#10B981"],
    overlay: ["rgba(34,197,94,0.2)", "rgba(16,185,129,0.2)"],
    draw: { grid: false, bars: false, line: true, pie: false, ring: false },
    chip: { bg: "dark", text: "#0F172A" },
  },
  {
    id: 19,
    name: "Rose→Amber + Bars+Ring",
    gradient: ["#E11D48", "#F59E0B"],
    overlay: ["rgba(225,29,72,0.2)", "rgba(245,158,11,0.2)"],
    draw: { grid: true, bars: true, line: false, pie: false, ring: true },
    chip: { bg: "dark", text: "#FFFFFF" },
  },
  {
    id: 20,
    name: "Indigo→Slate + Bars+Line+Ring",
    gradient: ["#4F46E5", "#334155"],
    overlay: ["rgba(79,70,229,0.25)", "rgba(51,65,85,0.25)"],
    draw: { grid: true, bars: true, line: true, pie: false, ring: true },
    chip: { bg: "light", text: "#0F172A" },
  },
];

function hashString(s) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(h ^ s.charCodeAt(i), 16777619) >>> 0;
  }
  return h >>> 0;
}

function pickTemplate(title, keywordsArr) {
  const key = `${title}::${(keywordsArr || []).join(",")}`;
  const h = hashString(key);
  const idx = h % TEMPLATES.length;
  return TEMPLATES[idx];
}

// Fixed topic titles requested
const BASE_TITLES = [
  "Advanced ROAS Optimization Techniques",
  "Common ROAS Mistakes to Avoid",
  "The Role of Technology in ROAS Optimization",
  "How Trilio.ai Enhances ROAS Performance",
  "How to Calculate Customer Acquisition Cost: A Complete Guide for Ecommerce Success",
  "The Complete CAC Calculation Formula",
  "CAC Benchmarks Across Industries",
  "Advanced CAC Calculation Methods",
  "CAC Optimization Strategies",
  "The CAC-LTV Relationship",
  "Common CAC Calculation Mistakes",
  "Technology Solutions for CAC Management",
  "How Trilio.ai Optimizes Customer Acquisition Cost Management",
  "Understanding Customer Lifetime Value (CLV)",
  "The Complete CLV Calculation Framework",
  "CLV Benchmarks Across Industries",
  "Sophisticated CLV Calculation Techniques",
  "Strategies to Increase Customer Lifetime Value",
  "The CLV-CAC Optimization Balance",
  " Advanced CLV Analytics and Attribution",
  "Common CLV Calculation Pitfalls",
  "Technology Infrastructure for CLV Excellence",
  "Improve Ecommerce Conversion Rates: 25 Proven Strategies for 2025",
  "Understanding Ecommerce Conversion Rates",
  "Strategic Foundation for Conversion Optimization",
  "Advanced Conversion Rate Tactics",
  "Conversion Rate Testing and Analysis",
  "Technology and Platform Considerations",
];

const authors = [
  {
    name: "Om Rathod",
    image: "https://assets.channeliq.ai/invictus-landing/Leadership/om.jpg",
  },
  {
    name: "Nirjar Sanghavi",
    image: "https://assets.channeliq.ai/invictus-landing/Leadership/Nirjar.png",
  },
  {
    name: "Sabarish Nathan",
    image:
      "https://assets.channeliq.ai/invictus-landing/Leadership/Sabrish.jpg",
  },
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function estimateReadingTime(text) {
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(words / 200));
}

function makeDateSpread(index, total) {
  const start = new Date("2024-01-01T00:00:00Z").getTime();
  const end = new Date("2025-12-31T00:00:00Z").getTime();
  const t = start + Math.floor(((index + 1) / (total + 1)) * (end - start));
  const d = new Date(t);
  return d.toISOString().slice(0, 10);
}

function deriveTopicKey(title) {
  const t = title.toLowerCase();
  if (t.includes("real-time") || t.includes("real time")) return "realtime";
  if (t.includes("shopify") && t.includes("profit")) return "shopify";
  if (t.includes("business intelligence") || t.includes("intelligence"))
    return "bi";
  if (t.includes("conclusion") || t.includes("transform")) return "conclusion";
  return "bi";
}

// Removed sentenceParts and canned paragraph generator in favor of a
// richer unique-content generator below.

function codeBlockHtml(lang, code) {
  const safe = String(code).replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return `<pre><code class="language-${lang}">${safe}</code></pre>`;
}

function internalLinkHtml(slug, title) {
  return `<a href="/resources/blog-insights/${slug}" class="text-teal-600 underline">See also: ${title}</a>`;
}

function extractContentIntent(title) {
  const t = title.toLowerCase();
  if (t.includes("what is")) return "whatIs";
  if (t.includes("business impact")) return "businessImpact";
  if (t.includes("core applications")) return "applications";
  if (t.includes("essential metrics") || t.includes("metrics"))
    return "metrics";
  if (t.includes("implementation")) return "implementation";
  if (t.includes("best practices")) return "bestPractices";
  if (t.includes("common challenges")) return "challenges";
  if (t.includes("future trends")) return "futureTrends";
  if (t.includes("choosing") || t.includes("solution")) return "choosing";
  if (t.includes("measuring success") || t.includes("roi")) return "roi";
  if (t.includes("components")) return "components";
  if (
    t.includes("complete guide") ||
    t.includes("ultimate guide") ||
    t.includes("guide")
  )
    return "guide";
  if (t.includes("conclusion") || t.includes("transform")) return "conclusion";
  return "general";
}

// Removed sectionsForRealtime; content is now produced by generateUniqueContent.

// Removed sectionsForShopify as well.

function generateUniqueContent(title, topicKey) {
  // Deterministic RNG for reproducible variety per post
  function rng(s) {
    let h = hashString(String(s));
    return () => {
      h =
        Math.imul(h ^ (h >>> 15), 2246822507) ^
        Math.imul(h ^ (h >>> 13), 3266489909);
      return (h >>> 0) / 4294967296;
    };
  }
  const R = rng(title + "::" + topicKey);
  const pick = (arr) => arr[Math.floor(R() * arr.length) % arr.length];
  const pickMany = (arr, n) => {
    const a = [...arr];
    const out = [];
    while (out.length < Math.min(n, a.length)) {
      const i = Math.floor(R() * a.length) % a.length;
      out.push(a.splice(i, 1)[0]);
    }
    return out;
  };

  const blocks = {
    realtime: {
      intros: [
        "Real-time analytics turns streaming events into decisions that protect revenue and CX.",
        "Sub‑second feedback loops let teams react to spikes, pricing errors, and stockouts before they snowball.",
        "Low‑latency data shortens the distance between a signal and an action across marketing and ops.",
      ],
      challenges: [
        "Data drift between streaming and batch systems",
        "High‑cardinality metrics that are costly to compute",
        "Alert noise that erodes trust",
        "Backfills that break freshness guarantees",
        "Limited on‑call playbooks for incidents",
      ],
      framework: [
        "Contracts on critical events (orders, carts, inventory)",
        "Materialized views with freshness SLAs",
        "Guardrail alerts with human‑in‑the‑loop actions",
        "Rollups for dashboards, raw for investigations",
      ],
      trilio: [
        "Streaming pipelines with governed schemas and replay",
        "A semantic layer for consistent KPIs across tools",
        "Real‑time anomaly detection tied to action playbooks",
        "Unified spend + revenue + inventory to calculate live margin",
        "Role‑based dashboards with freshness tags and lineage",
      ],
      kpis: [
        "Freshness (P95)",
        "Alert precision/recall",
        "ROAS lift vs baseline",
        "Stockout minutes",
        "Time‑to‑action",
      ],
    },
    shopify: {
      intros: [
        "Profit analytics reveals the products and channels that truly drive contribution margin.",
        "Brands win when they connect revenue, COGS, discounts, refunds, and media spend at order/SKU level.",
        "A clear view of unit economics guides smarter pricing, merchandising, and marketing.",
      ],
      challenges: [
        "COGS and shipping rules that vary by SKU and region",
        "Returns applied late that distort profit",
        "Attribution disagreements across ad platforms",
        "Discounts that lift revenue but erode margin",
      ],
      framework: [
        "Normalize orders, items, and refunds with unique keys",
        "Map COGS, fees, and shipping by SKU and carrier",
        "Attribute media spend at order and cohort levels",
        "Publish a single margin definition and version it",
      ],
      trilio: [
        "Out‑of‑the‑box Shopify + ads + shipping integrations",
        "Contribution margin dashboards by SKU, channel, and cohort",
        "Automated anomaly alerts for refunds and discount leakage",
        "Budget guardrails using LTV/CAC and payback targets",
        "Self‑serve drill‑downs for finance and growth teams",
      ],
      kpis: [
        "Contribution margin",
        "Discount rate",
        "Refund loss",
        "Payback period",
        "LTV/CAC",
      ],
    },
    bi: {
      intros: [
        "Business intelligence aligns teams around shared definitions and a trustworthy source of truth.",
        "A semantic model eliminates metric drift and accelerates decision‑making.",
        "Great BI programs ship fast, measure adoption, and iterate continuously.",
      ],
      challenges: [
        "Multiple versions of the same KPI",
        "Slow refresh cycles and stale data",
        "Unowned dashboards that no one maintains",
        "Limited governance and lineage",
      ],
      framework: [
        "Define owners for every metric and report",
        "Ship use‑case dashboards, not catch‑all pages",
        "Track adoption and retire low‑value artifacts",
        "Automate quality checks and validations",
      ],
      trilio: [
        "Central semantic layer with versioned KPIs",
        "Connectors for commerce, ads, support, and finance",
        "Role‑based access with row‑level security",
        "Usage analytics to guide the roadmap",
        "Paginated reports for finance plus interactive boards for operators",
      ],
      kpis: [
        "Dashboard adoption",
        "Data freshness",
        "Issue MTTR",
        "Time‑to‑insight",
        "Metric coverage",
      ],
    },
  };

  const domain = blocks[topicKey] || blocks.bi;
  const longBody = pick(domain.intros);

  const html = [
    `<h2><strong>${title}</strong></h2>`,
    `<p>${longBody}</p>`,
    `<h3><strong>Why It Matters</strong></h3>`,
    `<p>${pick(domain.intros)}</p>`,
    `<h3><strong>Common Challenges</strong></h3>`,
    `<ul>${pickMany(domain.challenges, 5)
      .map((x) => `<li>${x}</li>`)
      .join("")}</ul>`,
    `<h3><strong>A Practical Framework</strong></h3>`,
    `<ul>${pickMany(domain.framework, 4)
      .map((x) => `<li>${x}</li>`)
      .join("")}</ul>`,
    `<h3><strong>How Trilio Helps</strong></h3>`,
    `<ul>${pickMany(domain.trilio, 5)
      .map((x) => `<li>${x}</li>`)
      .join("")}</ul>`,
    `<h3><strong>Implementation Guide</strong></h3>`,
    `<ol>${[
      "Connect priority data sources and validate record counts",
      "Define and publish metric contracts and owners",
      "Ship a minimum viable dashboard that answers one question",
      "Add alerts with guardrails and clear on‑call playbooks",
      "Review adoption monthly and iterate the roadmap",
    ]
      .map((x) => `<li>${x}</li>`)
      .join("")}</ol>`,
    `<h3><strong>KPIs to Watch</strong></h3>`,
    `<ul>${pickMany(domain.kpis, 5)
      .map((x) => `<li>${x}</li>`)
      .join("")}</ul>`,
    `<h3><strong>Pitfalls and Mitigations</strong></h3>`,
    `<ul>${[
      "Too many dashboards → curate and archive quarterly",
      "Unclear definitions → publish a KPI catalog with versions",
      "Alert fatigue → tune thresholds and require owners",
      "Opaque pipelines → add lineage and freshness to every chart",
    ]
      .map((x) => `<li>${x}</li>`)
      .join("")}</ul>`,
    `<h3><strong>Conclusion</strong></h3>`,
    `<p>Start small, win trust, and compound value. Trilio provides the data plumbing, semantic layer, and operational guardrails so your teams can focus on decisions—not dashboards.</p>`,
  ];
  return html.join("\n");
}

function buildHtml(post, related, topicKey) {
  return generateUniqueContent(post.title, topicKey);
}

const titleSuffixes = [
  "Complete Guide",
  "Deep Dive",
  "Hands-on Tutorial",
  "Best Practices",
  "Playbook",
  "Checklist",
  "From First Principles",
  "Field Notes",
  "Patterns and Anti-patterns",
  "Case Studies",
  "Implementation Guide",
  "Advanced Techniques",
  "Starter Kit",
  "FAQ",
  "Cheat Sheet",
  "Toolkit",
  "Blueprint",
  "In Practice",
  "Lessons Learned",
  "Pro Tips",
];

function ensureUniqueTitle(baseTitle, usedTitles, i) {
  if (!usedTitles.has(baseTitle)) {
    usedTitles.add(baseTitle);
    return baseTitle;
  }
  // deterministically append a suffix and index to avoid duplicates
  let n = 2;
  let candidate = `${baseTitle} — ${
    titleSuffixes[i % titleSuffixes.length]
  } (${n})`;
  while (usedTitles.has(candidate)) {
    n += 1;
    candidate = `${baseTitle} — ${
      titleSuffixes[(i + n) % titleSuffixes.length]
    } (${n})`;
  }
  usedTitles.add(candidate);
  return candidate;
}

function buildPost(i, total, usedSlugs, usedTitles) {
  // Source title strictly from provided list, cycle if COUNT exceeds BASE_TITLES length
  const baseTitle = BASE_TITLES[i % BASE_TITLES.length];
  const title = ensureUniqueTitle(baseTitle, usedTitles, i);
  let slug = slugify(title);
  let attempt = 1;
  while (usedSlugs.has(slug)) {
    slug = `${slug}-${++attempt}`;
  }
  usedSlugs.add(slug);

  const author = randomChoice(authors);
  const publishDate = makeDateSpread(i, total);
  const excerpt = `A practical guide with examples, pitfalls, and performance-minded techniques.`;

  // Placeholder content will be expanded post-import into React nodes
  const related = [];
  const topicKey = deriveTopicKey(title);
  const contentHtml = buildHtml({ title, excerpt }, related, topicKey);

  const readingTime = estimateReadingTime(contentHtml);

  const metaTitle = `${title} | Trilio Blog`;
  const metaDescription = `In-depth strategies, examples, and trade-offs for modern ecommerce intelligence teams.`;

  return {
    id: 100000 + i, // temporary id; final id assigned on import
    slug,
    title,
    content: contentHtml,
    excerpt,
    author: author.name,
    authorImage: author.image,
    publishDate,
    lastModified: publishDate,
    tags: ["ecommerce-intelligence", "real-time-analytics", "profit-analytics"],
    category: "E-commerce",
    metaTitle,
    metaDescription,
    readingTime,
    featured: false,
    published: true,
    // will be set later to a downloaded image path or fallback
    featuredImage: `/blogs/${slug}.jpg`,
  };
}

const usedSlugs = new Set();
const usedTitles = new Set();
const posts = [];

// Evenly distribute categories
for (let i = 0; i < COUNT; i++) {
  posts.push(buildPost(i, COUNT, usedSlugs, usedTitles));
}

// After generating all, add internal links among related posts
// Simple: for each, link to previous two slugs
for (let i = 0; i < posts.length; i++) {
  const related = posts
    .slice(Math.max(0, i - 2), i)
    .map((p) => ({ slug: p.slug, title: p.title }));
  const topicKey = deriveTopicKey(posts[i].title);
  const html = buildHtml(
    { title: posts[i].title, excerpt: posts[i].excerpt },
    related,
    topicKey
  );
  posts[i].content = html;
}

// Download images to public/blogs/ and update featuredImage
const blogsDir = path.resolve(publicDir, "blogs");
fs.mkdirSync(blogsDir, { recursive: true });

async function generateCanvasImage(title, keywords, outPath) {
  try {
    const { createCanvas, loadImage } = await import("@napi-rs/canvas");
    const width = 1200;
    const height = 630;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    // Choose a deterministic template per post
    const template = pickTemplate(title, keywords || []);

    // Try to fetch a relevant photo as background (Unsplash Source)
    let bgDrawn = false;
    try {
      const bgUrl = await fetchFromUnsplashSource(keywords);
      if (bgUrl) {
        const res = await fetch(bgUrl);
        if (res.ok) {
          const buf = Buffer.from(await res.arrayBuffer());
          const img = await loadImage(buf);
          // cover
          const ratio = Math.max(width / img.width, height / img.height);
          const iw = img.width * ratio;
          const ih = img.height * ratio;
          const ix = (width - iw) / 2;
          const iy = (height - ih) / 2;
          ctx.drawImage(img, ix, iy, iw, ih);
          bgDrawn = true;
          // dark scrim
          ctx.fillStyle = "rgba(0,0,0,0.25)";
          ctx.fillRect(0, 0, width, height);
        }
      }
    } catch {}

    // Background gradient if no photo, or as color accent overlay
    const grad = ctx.createLinearGradient(0, 0, width, height);
    const stops = Array.isArray(template.gradient)
      ? template.gradient
      : ["#4F46E5", "#06B6D4"];
    if (stops.length === 1) {
      grad.addColorStop(0, stops[0]);
      grad.addColorStop(1, stops[0]);
    } else {
      for (let i = 0; i < stops.length; i++) {
        grad.addColorStop(i / (stops.length - 1), stops[i]);
      }
    }
    if (!bgDrawn) {
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    } else {
      // subtle gradient overlay for branding
      const grd = ctx.createLinearGradient(0, 0, width, height);
      const ov = template.overlay || [
        "rgba(79,70,229,0.25)",
        "rgba(6,182,212,0.25)",
      ];
      grd.addColorStop(0, ov[0] || "rgba(79,70,229,0.25)");
      grd.addColorStop(1, ov[1] || "rgba(6,182,212,0.25)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);
    }

    // Subtle grid (optional)
    if (template.draw.grid) {
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    // Deterministic random visuals (bars, line, pie)
    function rngSeed(s) {
      let h = 2166136261 >>> 0;
      for (let i = 0; i < s.length; i++)
        h = Math.imul(h ^ s.charCodeAt(i), 16777619) >>> 0;
      return () =>
        ((h =
          Math.imul(h ^ (h >>> 15), 2246822507) ^
          Math.imul(h ^ (h >>> 13), 3266489909)) >>>
          0) /
        4294967296;
    }
    const rnd = rngSeed(title);

    // Bars
    if (template.draw.bars) {
      const barBaseY = height - 90;
      const barX0 = 80;
      const barW = 36;
      const barGap = 22;
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      for (let i = 0; i < 7; i++) {
        const h = 60 + Math.floor(rnd() * 180);
        ctx.fillRect(barX0 + i * (barW + barGap), barBaseY - h, barW, h);
      }
    }

    // Line
    if (template.draw.line) {
      const lx0 = width - 480;
      const ly0 = 120;
      ctx.strokeStyle = "rgba(255,255,255,0.9)";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(lx0, ly0 + 80 + rnd() * 40);
      for (let i = 1; i <= 8; i++) {
        const x = lx0 + i * 50;
        const y = ly0 + 80 + (rnd() - 0.5) * 120;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Pie
    if (template.draw.pie) {
      const cx = width - 220;
      const cy = height / 2 + 40;
      const r = 90;
      let angle = -Math.PI / 2;
      const slices = [rnd() * 0.5 + 0.2, rnd() * 0.4 + 0.15, rnd() * 0.3 + 0.1];
      const colors = ["#ffffff", "#E2E8F0", "#F1F5F9"];
      for (let i = 0; i < slices.length; i++) {
        const a = slices[i] * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.fillStyle = colors[i % colors.length];
        ctx.arc(cx, cy, r, angle, angle + a);
        ctx.closePath();
        ctx.fill();
        angle += a;
      }
      ctx.strokeStyle = "rgba(255,255,255,0.6)";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(cx, cy, r + 18, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Decorative ring with dots
    if (template.draw.ring) {
      const rcx = width - 240;
      const rcy = 180;
      const rr = 70;
      ctx.strokeStyle = "rgba(255,255,255,0.75)";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(rcx, rcy, rr, 0, Math.PI * 2);
      ctx.stroke();
      for (let i = 0; i < 12; i++) {
        const a = (Math.PI * 2 * i) / 12 + rnd() * 0.2;
        const dx = rcx + Math.cos(a) * rr;
        const dy = rcy + Math.sin(a) * rr;
        ctx.beginPath();
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.arc(dx, dy, 4 + Math.floor(rnd() * 2), 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Title chip (kept tasteful)
    ctx.globalAlpha = 0.95;
    const label = title.length > 72 ? title.slice(0, 69) + "…" : title;
    // backdrop
    if (template.chip.bg === "light") {
      ctx.fillStyle = "rgba(255,255,255,0.9)";
    } else {
      ctx.fillStyle = "rgba(15,23,42,0.85)"; // slate-900
    }
    // compute dynamic width
    ctx.font = "bold 30px Arial, sans-serif";
    const approx = Math.min(
      980,
      Math.max(480, 32 * Math.min(label.length, 32))
    );
    const boxW = approx;
    const boxH = 72;
    const boxX = 60;
    const boxY = 60;
    // rounded rect
    const cornerR = 14;
    ctx.beginPath();
    ctx.moveTo(boxX + cornerR, boxY);
    ctx.lineTo(boxX + boxW - cornerR, boxY);
    ctx.quadraticCurveTo(boxX + boxW, boxY, boxX + boxW, boxY + cornerR);
    ctx.lineTo(boxX + boxW, boxY + boxH - cornerR);
    ctx.quadraticCurveTo(
      boxX + boxW,
      boxY + boxH,
      boxX + boxW - cornerR,
      boxY + boxH
    );
    ctx.lineTo(boxX + cornerR, boxY + boxH);
    ctx.quadraticCurveTo(boxX, boxY + boxH, boxX, boxY + boxH - cornerR);
    ctx.lineTo(boxX, boxY + cornerR);
    ctx.quadraticCurveTo(boxX, boxY, boxX + cornerR, boxY);
    ctx.closePath();
    ctx.fill();
    // text
    ctx.fillStyle = template.chip.text || "#111827";
    ctx.fillText(label, boxX + 20, boxY + 48);
    ctx.globalAlpha = 1;

    // Draw brand logo at bottom-left (if available)
    try {
      const logoPath = resolveBrandLogoPath();
      if (logoPath) {
        const logoBuf = fs.readFileSync(logoPath);
        const logoImg = await loadImage(logoBuf);
        const desiredWidth = 200;
        const scale = desiredWidth / (logoImg.width || desiredWidth);
        const desiredHeight = Math.max(
          1,
          Math.round((logoImg.height || desiredWidth) * scale)
        );
        const marginLeft = 28;
        const marginBottom = 2; // very close to the bottom

        // Optional soft shadow for contrast
        ctx.save();
        ctx.shadowColor = "rgba(0,0,0,0.25)";
        ctx.shadowBlur = 10;
        ctx.drawImage(
          logoImg,
          marginLeft,
          height - desiredHeight - marginBottom,
          desiredWidth,
          desiredHeight
        );
        ctx.restore();
      }
    } catch {}

    const buf = await canvas.encode("png");
    fs.writeFileSync(outPath, buf);
    return outPath;
  } catch (e) {
    return null;
  }
}

function wrapText(ctx, text, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    const metrics = ctx.measureText(test);
    if (metrics.width > maxWidth) {
      if (line) lines.push(line);
      line = w;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 3); // cap to 3 lines for aesthetics
}

async function download(url, destPath) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const arrayBuffer = await res.arrayBuffer();
    fs.writeFileSync(destPath, Buffer.from(arrayBuffer));
    return true;
  } catch (e) {
    return false;
  }
}

function buildOpenAIPrompt(title, topicKey) {
  const baseStyle =
    "High-quality, modern, clean, 1200x630 social preview image, subtle gradients, minimal text, focus on concept visuals.";
  const theme =
    topicKey === "shopify"
      ? "Shopify store analytics dashboard, profit analysis, ecommerce visuals, charts and KPIs."
      : "Real-time analytics, ecommerce intelligence, dashboards, data streams, charts and KPIs.";
  return `${title}. ${theme} ${baseStyle}`;
}

async function fetchFromOpenAI(title, topicKey) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;
  const prompt = buildOpenAIPrompt(title, topicKey);
  try {
    const res = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-image-1",
        prompt,
        size: "1200x630",
        response_format: "url",
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const url = data?.data?.[0]?.url;
    return url || null;
  } catch (e) {
    return null;
  }
}

function deriveImageKeywords(title, topicKey) {
  const t = title.toLowerCase();
  const keywords = new Set();
  if (topicKey === "shopify") {
    keywords.add("shopify");
    keywords.add("ecommerce");
    if (t.includes("profit")) keywords.add("profit");
    if (t.includes("analytics")) keywords.add("analytics dashboard");
    if (t.includes("roi")) keywords.add("roi");
    if (t.includes("metrics")) keywords.add("metrics");
  } else {
    // realtime / bi
    if (t.includes("real-time") || t.includes("real time"))
      keywords.add("real time");
    if (t.includes("analytics")) keywords.add("analytics dashboard");
    if (t.includes("ecommerce")) keywords.add("ecommerce");
    if (t.includes("roi")) keywords.add("roi");
    if (t.includes("metrics")) keywords.add("metrics");
    if (t.includes("business intelligence") || t.includes("intelligence"))
      keywords.add("business intelligence");
  }
  // Ensure some defaults
  if (keywords.size === 0) {
    keywords.add("ecommerce");
    keywords.add("analytics");
  }
  return Array.from(keywords);
}

async function fetchFromPexels(keywords) {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) return null;
  const q = encodeURIComponent(keywords.join(", "));
  const url = `https://api.pexels.com/v1/search?query=${q}&per_page=1&orientation=landscape`;
  const res = await fetch(url, { headers: { Authorization: apiKey } });
  if (!res.ok) return null;
  const data = await res.json();
  const photo = data?.photos?.[0];
  return (
    photo?.src?.large2x || photo?.src?.large || photo?.src?.original || null
  );
}

async function fetchFromPixabay(keywords) {
  const apiKey = process.env.PIXABAY_API_KEY;
  if (!apiKey) return null;
  const q = encodeURIComponent(keywords.join(", "));
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${q}&image_type=photo&orientation=horizontal&per_page=3`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  const hit = data?.hits?.[0];
  return hit?.largeImageURL || hit?.webformatURL || null;
}

async function fetchFromUnsplashSource(keywords) {
  // Unsplash source endpoint (best-effort); returns a redirect
  const q = encodeURIComponent(keywords.join(","));
  const url = `https://source.unsplash.com/1200x630/?${q}`;
  // We'll return the URL directly to be downloaded by download()
  return url;
}

const REFRESH_IMAGES =
  process.env.REFRESH_IMAGES === "1" ||
  process.argv.includes("--refresh-images");

async function ensureImages() {
  for (let i = 0; i < posts.length; i++) {
    const p = posts[i];
    const topicKey = deriveTopicKey(p.title);
    const keywords = deriveImageKeywords(p.title, topicKey);
    // Try providers in order: Canvas (local generation), Pexels, Pixabay, Unsplash Source, fallback pool
    let url = null;
    // ChatGPT (OpenAI Images) first, if key present
    // Canvas-generated image (no network) – returns a file path if created
    const canvasPath = await generateCanvasImage(
      p.title,
      keywords,
      path.resolve(blogsDir, `${p.slug}.png`)
    );
    if (canvasPath) {
      p.featuredImage = `/blogs/${p.slug}.png`;
      continue;
    }
    url = url || (await fetchFromOpenAI(p.title, topicKey));
    url = url || (await fetchFromPexels(keywords));
    url = url || (await fetchFromPixabay(keywords));
    url = url || (await fetchFromUnsplashSource(keywords));
    const dest = path.resolve(blogsDir, `${p.slug}.jpg`);
    if (REFRESH_IMAGES && fs.existsSync(dest)) {
      try {
        fs.unlinkSync(dest);
      } catch {}
    }
    if (!fs.existsSync(dest)) {
      const ok = url ? await download(url, dest) : false;
      if (!ok) {
        // fallback to existing pool image
        p.featuredImage = pickFeaturedImage(i);
        continue;
      }
    }
    // set site-relative path
    p.featuredImage = `/blogs/${p.slug}.jpg`;
  }
}

await ensureImages();

// Write as individual JSON files
posts.forEach((post, idx) => {
  const file = path.resolve(
    outDir,
    `${String(idx + 1).padStart(3, "0")}-${post.slug}.json`
  );
  fs.writeFileSync(file, JSON.stringify(post, null, 2), "utf8");
});

// Also write an index file
fs.writeFileSync(
  path.resolve(outDir, "index.json"),
  JSON.stringify(posts, null, 2),
  "utf8"
);

console.log(`Generated ${posts.length} blog JSON files in ${outDir}`);
