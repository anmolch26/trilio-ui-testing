import React, { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";
import AnalyticsWrapper from "./components/AnalyticsWrapper";
import RouteCanonical from "./components/RouteCanonical";

// ⚡ ONLY load home page eagerly - it's what users see first
import Index from "./pages/Index";

// 🚀 All other pages are lazy-loaded on-demand for optimal performance
// Core pages
const ContactForm = lazy(() => import("./pages/ContactForm"));
const IntegrationRequest = lazy(() => import("./pages/IntegrationRequest"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));

// Product pages
const BIReporting = lazy(() => import("./pages/products/BIReporting"));
const Insights = lazy(() => import("./pages/products/Insights"));
const AIAgents = lazy(() => import("./pages/products/AIAgents"));

// Who we help pages
const FoundersCEOs = lazy(() => import("./pages/who-we-help/FoundersCEOs"));
const MarketingLeaders = lazy(() => import("./pages/who-we-help/MarketingLeaders"));
const PerformanceMarketers = lazy(() => import("./pages/who-we-help/PerformanceMarketers"));
const OperationsManagers = lazy(() => import("./pages/who-we-help/OperationsManagers"));
const DataAnalysts = lazy(() => import("./pages/who-we-help/DataAnalysts"));
const AgenciesConsultants = lazy(() => import("./pages/who-we-help/AgenciesConsultants"));
const TechPartners = lazy(() => import("./pages/who-we-help/TechPartners"));
const WaitlistForm = lazy(() => import("./pages/who-we-help/WaitlistForm"));

// About pages
const LeadershipTeam = lazy(() => import("./pages/about/LeadershipTeam"));
const Careers = lazy(() => import("./pages/about/Careers"));
const TrustCenter = lazy(() => import("./pages/about/TrustCenter"));
const Faqs = lazy(() => import("./pages/about/Faqs"));

// Careers pages
const OpenPositions = lazy(() => import("./pages/careers/OpenPositions"));
const LifeAtTrilio = lazy(() => import("./pages/careers/LifeAtTrilio"));
const InterviewProcess = lazy(() => import("./pages/careers/InterviewProcess"));
const InternshipsPrograms = lazy(() => import("./pages/careers/InternshipsPrograms"));

// Resources pages
const BlogInsights = lazy(() => import("./pages/resources/BlogInsights"));
const CaseStudies = lazy(() => import("./pages/resources/CaseStudies"));
const GuidesReports = lazy(() => import("./pages/resources/GuidesReports"));
const HelpCenter = lazy(() => import("./pages/resources/HelpCenter"));
const GettingStarted = lazy(() => import("./pages/resources/GettingStarted"));
const DeveloperDocs = lazy(() => import("./pages/resources/DeveloperDocs"));
const DataDictionary = lazy(() => import("./pages/resources/dataDictionary"));
const NewsletterSignup = lazy(() => import("./pages/resources/NewsletterSignup"));
const DynamicBlog = lazy(() => import("./pages/resources/DynamicBlog"));

// Solutions pages
const TikTok = lazy(() => import("./pages/solutions/TikTok"));
const Amazon = lazy(() => import("./pages/solutions/Amazon"));
const Shopify = lazy(() => import("./pages/solutions/Shopify"));
const GoogleAds = lazy(() => import("./pages/solutions/GoogleAds"));
const AmazonAds = lazy(() => import("./pages/solutions/AmazonAds"));
const Meta = lazy(() => import("./pages/solutions/Meta"));
const WooCommerce = lazy(() => import("./pages/solutions/WooCommerce"));
const RedditAds = lazy(() => import("./pages/solutions/RedditAds"));
const Tableau = lazy(() => import("./pages/solutions/Tableau"));
const GA4 = lazy(() => import("./pages/solutions/Ga4"));
const Walmart = lazy(() => import("./pages/solutions/Walmart"));
const BestBuy = lazy(() => import("./pages/solutions/BestBuy"));
const MailChimp = lazy(() => import("./pages/solutions/MailChimp"));
const Klaviyo = lazy(() => import("./pages/solutions/Klaviyo"));
const Stripe = lazy(() => import("./pages/solutions/Stripe"));
const Square = lazy(() => import("./pages/solutions/Square"));
const Zendesk = lazy(() => import("./pages/solutions/Zendesk"));
const ShipStation = lazy(() => import("./pages/solutions/ShipStation"));
const SmileIo = lazy(() => import("./pages/solutions/Smile.io"));
const PowerBI = lazy(() => import("./pages/solutions/PowerBI"));
const Akeneo = lazy(() => import("./pages/solutions/Akeneo"));
const FreshDesk = lazy(() => import("./pages/solutions/FreshDesk"));
const Easyship = lazy(() => import("./pages/solutions/Easyship"));
const Target = lazy(() => import("./pages/solutions/Target"));
const Rakuten = lazy(() => import("./pages/solutions/Rakuten"));
const Ebay = lazy(() => import("./pages/solutions/Ebay"));
const Etsy = lazy(() => import("./pages/solutions/Etsy"));
const APIDeveloperSupport = lazy(() => import("./pages/solutions/APIDeveloperSupport"));
const CustomDashboards = lazy(() => import("./pages/solutions/CustomDashboards"));
const DataIntegrations = lazy(() => import("./pages/solutions/DataIntegrations"));
const OnboardingTraining = lazy(() => import("./pages/solutions/OnboardingTraining"));
const HomeDepot = lazy(() => import("./pages/solutions/HomeDepot"));

const queryClient = new QueryClient();

// Loading component for lazy-loaded routes
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouteCanonical />
        <AnalyticsWrapper>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact-form" element={<ContactForm />} />
              <Route path="/integration-request" element={<IntegrationRequest />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/products/bi-reporting" element={<BIReporting />} />
              <Route path="/products/insights" element={<Insights />} />
              <Route path="/products/ai-agents" element={<AIAgents />} />
              <Route
                path="/who-we-help/founders-ceos"
                element={<FoundersCEOs />}
              />
              <Route
                path="/who-we-help/marketing-leaders"
                element={<MarketingLeaders />}
              />
              <Route
                path="/who-we-help/performance-marketers"
                element={<PerformanceMarketers />}
              />
              <Route
                path="/who-we-help/operations-managers"
                element={<OperationsManagers />}
              />
              <Route
                path="/who-we-help/data-analysts"
                element={<DataAnalysts />}
              />
              <Route
                path="/who-we-help/agencies-consultants"
                element={<AgenciesConsultants />}
              />
              <Route
                path="/who-we-help/tech-partners"
                element={<TechPartners />}
              />
              <Route path="/who-we-help/waitlist" element={<WaitlistForm />} />
              {/* About section routes */}
              <Route path="/about/leadership-team" element={<LeadershipTeam />} />
              <Route path="/about/careers" element={<Careers />} />
              <Route path="/about/trust-center" element={<TrustCenter />} />
              <Route path="/about/faqs" element={<Faqs />} />
              {/* New about/careers routes for navigation consistency */}
              <Route
                path="/about/careers/open-positions"
                element={<OpenPositions />}
              />
              <Route
                path="/about/careers/life-at-trilio"
                element={<LifeAtTrilio />}
              />
              <Route
                path="/about/careers/interview-process"
                element={<InterviewProcess />}
              />
              <Route
                path="/about/careers/internships-programs"
                element={<InternshipsPrograms />}
              />
              {/* Solutions section routes */}
              <Route path="/solutions/tiktok" element={<TikTok />} />
              <Route path="/solutions/amazon" element={<Amazon />} />
              <Route path="/solutions/shopify" element={<Shopify />} />
              <Route path="/solutions/google-ads" element={<GoogleAds />} />
              <Route path="/solutions/amazon-ads" element={<AmazonAds />} />
              <Route path="/solutions/meta" element={<Meta />} />
              <Route path="/solutions/woocommerce" element={<WooCommerce />} />
              <Route path="/solutions/reddit-ads" element={<RedditAds />} />
              <Route path="/solutions/tableau" element={<Tableau />} />
              <Route path="/solutions/ga4" element={<GA4 />} />
              <Route path="/solutions/walmart" element={<Walmart />} />
              <Route path="/solutions/bestbuy" element={<BestBuy />} />
              <Route path="/solutions/target" element={<Target />} />
              <Route path="/solutions/rakuten" element={<Rakuten />} />
              <Route path="/solutions/ebay" element={<Ebay />} />
              <Route path="/solutions/etsy" element={<Etsy />} />
              <Route path="/solutions/homedepot" element={<HomeDepot />} />
              <Route path="/solutions/mailchimp" element={<MailChimp />} />
              <Route path="/solutions/klaviyo" element={<Klaviyo />} />
              <Route path="/solutions/stripe" element={<Stripe />} />
              <Route path="/solutions/square" element={<Square />} />
              <Route path="/solutions/zendesk" element={<Zendesk />} />
              <Route path="/solutions/shipstation" element={<ShipStation />} />
              <Route path="/solutions/smile-io" element={<SmileIo />} />
              <Route path="/solutions/powerbi" element={<PowerBI />} />
              <Route path="/solutions/akeneo" element={<Akeneo />} />
              <Route path="/solutions/freshdesk" element={<FreshDesk />} />
              <Route path="/solutions/easyship" element={<Easyship />} />
              {/* API Developer Support routes */}
              <Route
                path="/solutions/api-developer-support"
                element={<APIDeveloperSupport />}
              />
              <Route
                path="/solutions/custom-dashboards"
                element={<CustomDashboards />}
              />
              <Route
                path="/solutions/data-integrations"
                element={<DataIntegrations />}
              />
              <Route
                path="/solutions/onboarding-training"
                element={<OnboardingTraining />}
              />
              {/* Shopify Integration routes */}
              <Route
                path="/resources/shopify-integration"
                element={<DeveloperDocs />}
              />
              {/* Developer Docs routes */}
              <Route
                path="/resources/developer-docs/shopify"
                element={<DeveloperDocs />}
              />
              <Route
                path="/resources/developer-docs/amazon"
                element={<DeveloperDocs />}
              />
              <Route
                path="/resources/developer-docs/google-analytics"
                element={<DeveloperDocs />}
              />
              <Route
                path="/resources/developer-docs/google-ads"
                element={<DeveloperDocs />}
              />
              <Route
                path="/resources/developer-docs/amazon-ads"
                element={<DeveloperDocs />}
              />
              <Route
                path="/resources/developer-docs/meta-ads"
                element={<DeveloperDocs />}
              />
              <Route
                path="/resources/developer-docs/klaviyo"
                element={<DeveloperDocs />}
              />
              {/* Careers section routes (kept for backward compatibility) */}
              <Route path="/careers/open-positions" element={<OpenPositions />} />

              <Route path="/careers/life-at-trilio" element={<LifeAtTrilio />} />
              <Route
                path="/careers/interview-process"
                element={<InterviewProcess />}
              />
              <Route
                path="/careers/internships-programs"
                element={<InternshipsPrograms />}
              />
              {/* Resources section routes */}
              {/* Blog routes - lazy loaded for better performance */}
              <Route path="/resources/blog-insights" element={<BlogInsights />} />
              <Route path="/resources/case-studies" element={<CaseStudies />} />
              <Route
                path="/resources/guides-reports"
                element={<GuidesReports />}
              />
              <Route path="/resources/help-center" element={<HelpCenter />} />
              <Route
                path="/resources/getting-started"
                element={<GettingStarted />}
              />
              <Route
                path="/resources/developer-docs"
                element={<DeveloperDocs />}
              />
              <Route
                path="/resources/data-dictionary"
                element={<DataDictionary />}
              />
              <Route
                path="/resources/data-dictionary/:metricSlug"
                element={<DataDictionary />}
              />
              <Route
                path="/resources/newsletter-signup"
                element={<NewsletterSignup />}
              />
              {/* Future routes for additional pages */}
              <Route path="/product" element={<Index />} />
              <Route path="/features" element={<Index />} />
              <Route path="/use-cases" element={<Index />} />
              <Route path="/industries" element={<Index />} />
              <Route path="/about" element={<Index />} />
              <Route path="/contact" element={<Index />} />
              <Route path="/careers" element={<Index />} />
              {/* Dynamic blog route - handles all blog posts (lazy loaded) */}
              <Route
                path="/resources/blog-insights/:blogSlug"
                element={<DynamicBlog />}
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AnalyticsWrapper>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider >
);

export default App;
