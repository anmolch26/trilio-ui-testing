#!/usr/bin/env node
/**
 * Add RouteCanonical component to all pages missing canonical tags
 * This script automatically updates page files to include proper canonical URLs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Map of file paths to their canonical URLs
const pageCanonicals = {
  // Products
  'src/pages/products/BIReporting.tsx': '/products/bi-reporting',
  'src/pages/products/AIAgents.tsx': '/products/ai-agents',
  
  // Who We Help
  'src/pages/who-we-help/DataAnalysts.tsx': '/who-we-help/data-analysts',
  'src/pages/who-we-help/FoundersCEOs.tsx': '/who-we-help/founders-ceos',
  'src/pages/who-we-help/MarketingLeaders.tsx': '/who-we-help/marketing-leaders',
  'src/pages/who-we-help/OperationsManagers.tsx': '/who-we-help/operations-managers',
  'src/pages/who-we-help/PerformanceMarketers.tsx': '/who-we-help/performance-marketers',
  'src/pages/who-we-help/TechPartners.tsx': '/who-we-help/tech-partners',
  'src/pages/who-we-help/AgenciesConsultants.tsx': '/who-we-help/agencies-consultants',
  
  // About
  'src/pages/about/Careers.tsx': '/about/careers',
  'src/pages/about/Faqs.tsx': '/about/faqs',
  'src/pages/about/TrustCenter.tsx': '/about/trust-center',
  
  // Careers
  'src/pages/careers/OpenPositions.tsx': '/about/careers/open-positions',
  'src/pages/careers/LifeAtTrilio.tsx': '/about/careers/life-at-trilio',
  'src/pages/careers/InterviewProcess.tsx': '/about/careers/interview-process',
  'src/pages/careers/InternshipsPrograms.tsx': '/about/careers/internships-programs',
  
  // Resources
  'src/pages/resources/CaseStudies.tsx': '/resources/case-studies',
  'src/pages/resources/GuidesReports.tsx': '/resources/guides-reports',
  'src/pages/resources/HelpCenter.tsx': '/resources/help-center',
  'src/pages/resources/GettingStarted.tsx': '/resources/getting-started',
  'src/pages/resources/DeveloperDocs.tsx': '/resources/developer-docs',
  'src/pages/resources/dataDictionary.tsx': '/resources/data-dictionary',
  'src/pages/resources/NewsletterSignup.tsx': '/resources/newsletter-signup',
  'src/pages/resources/ShopifyIntegrationPage.tsx': '/resources/shopify-integration',
  
  // Solutions
  'src/pages/solutions/Akeneo.tsx': '/solutions/akeneo',
  'src/pages/solutions/Amazon.tsx': '/solutions/amazon',
  'src/pages/solutions/AmazonAds.tsx': '/solutions/amazon-ads',
  'src/pages/solutions/APIDeveloperSupport.tsx': '/solutions/api-developer-support',
  'src/pages/solutions/BestBuy.tsx': '/solutions/bestbuy',
  'src/pages/solutions/CustomDashboards.tsx': '/solutions/custom-dashboards',
  'src/pages/solutions/DataIntegrations.tsx': '/solutions/data-integrations',
  'src/pages/solutions/Easyship.tsx': '/solutions/easyship',
  'src/pages/solutions/Ebay.tsx': '/solutions/ebay',
  'src/pages/solutions/Etsy.tsx': '/solutions/etsy',
  'src/pages/solutions/FreshDesk.tsx': '/solutions/freshdesk',
  'src/pages/solutions/Ga4.tsx': '/solutions/ga4',
  'src/pages/solutions/GoogleAds.tsx': '/solutions/google-ads',
  'src/pages/solutions/HomeDepot.tsx': '/solutions/homedepot',
  'src/pages/solutions/Klaviyo.tsx': '/solutions/klaviyo',
  'src/pages/solutions/MailChimp.tsx': '/solutions/mailchimp',
  'src/pages/solutions/Meta.tsx': '/solutions/meta',
  'src/pages/solutions/OnboardingTraining.tsx': '/solutions/onboarding-training',
  'src/pages/solutions/PowerBI.tsx': '/solutions/powerbi',
  'src/pages/solutions/Rakuten.tsx': '/solutions/rakuten',
  'src/pages/solutions/RedditAds.tsx': '/solutions/reddit-ads',
  'src/pages/solutions/ShipStation.tsx': '/solutions/shipstation',
  'src/pages/solutions/Shopify.tsx': '/solutions/shopify',
  'src/pages/solutions/Smile.io.tsx': '/solutions/smile-io',
  'src/pages/solutions/Square.tsx': '/solutions/square',
  'src/pages/solutions/Stripe.tsx': '/solutions/stripe',
  'src/pages/solutions/Tableau.tsx': '/solutions/tableau',
  'src/pages/solutions/Target.tsx': '/solutions/target',
  'src/pages/solutions/TikTok.tsx': '/solutions/tiktok',
  'src/pages/solutions/Walmart.tsx': '/solutions/walmart',
  'src/pages/solutions/WooCommerce.tsx': '/solutions/woocommerce',
  'src/pages/solutions/Zendesk.tsx': '/solutions/zendesk',
  
  // Other
  'src/pages/Pricing.tsx': '/pricing',
  'src/pages/IntegrationRequest.tsx': '/integration-request',
  'src/pages/Blog.tsx': '/resources/blog-insights',
};

function addCanonicalToFile(filePath, canonicalPath) {
  const fullPath = path.join(projectRoot, filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return false;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Check if RouteCanonical is already imported
  if (content.includes('RouteCanonical')) {
    console.log(`✓  Already has canonical: ${filePath}`);
    return false;
  }
  
  // Add import statement
  const importStatement = `import RouteCanonical from "@/components/RouteCanonical";`;
  
  // Find the last import statement
  const importRegex = /^import\s+.+from\s+.+;$/gm;
  const imports = content.match(importRegex);
  
  if (!imports || imports.length === 0) {
    console.log(`⚠️  No imports found in: ${filePath}`);
    return false;
  }
  
  const lastImport = imports[imports.length - 1];
  const lastImportIndex = content.lastIndexOf(lastImport);
  const afterLastImport = lastImportIndex + lastImport.length;
  
  // Insert import after last import
  content = 
    content.slice(0, afterLastImport) +
    '\n' + importStatement +
    content.slice(afterLastImport);
  
  // Add RouteCanonical component
  const canonicalComponent = `<RouteCanonical path="${canonicalPath}" />`;
  
  // Find the return statement or component start
  // Look for common patterns: return ( or return <
  let insertPosition = -1;
  
  // Pattern 1: return ( with PageLayout
  const pageLayoutMatch = content.match(/return\s*\(\s*<PageLayout/);
  if (pageLayoutMatch) {
    insertPosition = content.indexOf(pageLayoutMatch[0]) + pageLayoutMatch[0].length;
    // Find the end of the opening PageLayout tag
    const afterPageLayout = content.indexOf('>', insertPosition);
    if (afterPageLayout !== -1) {
      insertPosition = afterPageLayout + 1;
      content = 
        content.slice(0, insertPosition) +
        '\n      ' + canonicalComponent +
        content.slice(insertPosition);
    }
  } 
  // Pattern 2: <PageLayout without return ( - direct component return
  else {
    const directPageLayoutMatch = content.match(/<PageLayout[^>]*>/);
    if (directPageLayoutMatch) {
      insertPosition = content.indexOf(directPageLayoutMatch[0]) + directPageLayoutMatch[0].length;
      content = 
        content.slice(0, insertPosition) +
        '\n    ' + canonicalComponent +
        content.slice(insertPosition);
    }
    // Pattern 3: return ( with div
    else {
      const divMatch = content.match(/return\s*\(\s*<div/);
      if (divMatch) {
        insertPosition = content.indexOf(divMatch[0]) + divMatch[0].length;
        const afterDiv = content.indexOf('>', insertPosition);
        if (afterDiv !== -1) {
          insertPosition = afterDiv + 1;
          content = 
            content.slice(0, insertPosition) +
            '\n      ' + canonicalComponent +
            content.slice(insertPosition);
        }
      }
    }
  }
  
  if (insertPosition === -1) {
    console.log(`⚠️  Could not find insertion point in: ${filePath}`);
    return false;
  }
  
  // Write updated content
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`✅ Added canonical to: ${filePath} → ${canonicalPath}`);
  return true;
}

// Main execution
console.log('🔧 Adding canonical tags to all pages...\n');

let successCount = 0;
let skipCount = 0;
let failCount = 0;

for (const [filePath, canonicalPath] of Object.entries(pageCanonicals)) {
  const result = addCanonicalToFile(filePath, canonicalPath);
  if (result === true) successCount++;
  else if (result === false && fs.existsSync(path.join(projectRoot, filePath))) skipCount++;
  else failCount++;
}

console.log('\n📊 Summary:');
console.log(`✅ Successfully added: ${successCount}`);
console.log(`✓  Already had canonical: ${skipCount}`);
console.log(`⚠️  Failed/not found: ${failCount}`);
console.log(`📁 Total processed: ${Object.keys(pageCanonicals).length}`);
console.log('\n🎉 Canonical tags updated successfully!');

