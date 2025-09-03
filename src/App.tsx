import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";
import AnalyticsWrapper from "./components/AnalyticsWrapper";
import Index from "./pages/Index";
import ContactForm from "./pages/ContactForm";
import NotFound from "./pages/NotFound";
import BIReporting from "./pages/products/BIReporting";
import Insights from "./pages/products/Insights";
import AIAgents from "./pages/products/AIAgents";
import FoundersCEOs from "./pages/who-we-help/FoundersCEOs";
import MarketingLeaders from "./pages/who-we-help/MarketingLeaders";
import PerformanceMarketers from "./pages/who-we-help/PerformanceMarketers";
import OperationsManagers from "./pages/who-we-help/OperationsManagers";
import DataAnalysts from "./pages/who-we-help/DataAnalysts";
import AgenciesConsultants from "./pages/who-we-help/AgenciesConsultants";
import TechPartners from "./pages/who-we-help/TechPartners";
import WaitlistForm from "./pages/who-we-help/WaitlistForm";
import LeadershipTeam from "./pages/about/LeadershipTeam";
import Careers from "./pages/about/Careers";
import TrustCenter from "./pages/about/TrustCenter";
import Faqs from "./pages/about/Faqs";
import OpenPositions from "./pages/careers/OpenPositions";
import LifeAtTrilio from "./pages/careers/LifeAtTrilio";
import InterviewProcess from "./pages/careers/InterviewProcess";
import InternshipsPrograms from "./pages/careers/InternshipsPrograms";
import BlogInsights from "./pages/resources/BlogInsights";
import CaseStudies from "./pages/resources/CaseStudies";
import GuidesReports from "./pages/resources/GuidesReports";
import HelpCenter from "./pages/resources/HelpCenter";
import GettingStarted from "./pages/resources/GettingStarted";
import DeveloperDocs from "./pages/resources/DeveloperDocs";
import NewsletterSignup from "./pages/resources/NewsletterSignup";
import Pricing from "./pages/Pricing";
import TikTok from "./pages/solutions/TikTok";
import Amazon from "./pages/solutions/Amazon";
import Shopify from "./pages/solutions/Shopify";
import GoogleAds from "./pages/solutions/GoogleAds";
import AmazonAds from "./pages/solutions/AmazonAds";
import Meta from "./pages/solutions/Meta";
import WooCommerce from "./pages/solutions/WooCommerce";
import RedditAds from "./pages/solutions/RedditAds";
import Tableau from "./pages/solutions/Tableau";
import GA4 from "./pages/solutions/Ga4";
import Walmart from "./pages/solutions/Walmart";
import BestBuy from "./pages/solutions/BestBuy";
import MailChimp from "./pages/solutions/MailChimp";
import Klaviyo from "./pages/solutions/Klaviyo";
import Stripe from "./pages/solutions/Stripe";
import Square from "./pages/solutions/Square";
import Zendesk from "./pages/solutions/Zendesk";
import ShipStation from "./pages/solutions/ShipStation";
import SmileIo from "./pages/solutions/Smile.io";
import PowerBI from "./pages/solutions/PowerBI";
import Akeneo from "./pages/solutions/Akeneo";
import FreshDesk from "./pages/solutions/FreshDesk";
import Easyship from "./pages/solutions/Easyship";
import Target from "./pages/solutions/Target";
import Rakuten from "./pages/solutions/Rakuten";
import Ebay from "./pages/solutions/Ebay";
import Etsy from "./pages/solutions/Etsy";
import APIDeveloperSupport from "./pages/solutions/APIDeveloperSupport";
import CustomDashboards from "./pages/solutions/CustomDashboards";
import DataIntegrations from "./pages/solutions/DataIntegrations";
import OnboardingTraining from "./pages/solutions/OnboardingTraining";
import HomeDepot from "./pages/solutions/HomeDepot.tsx";
import Blog from "./pages/Blog";
import DynamicBlog from "./pages/resources/DynamicBlog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsWrapper>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact-form" element={<ContactForm />} />
            <Route path="/pricing" element={<Pricing />} />
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
            {/* Dynamic blog route - handles all blog posts */}
            <Route
              path="/resources/blog-insights/:blogSlug"
              element={<DynamicBlog />}
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnalyticsWrapper>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
