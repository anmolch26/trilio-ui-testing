import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import LeadershipTeam from "./pages/about/LeadershipTeam";
import Careers from "./pages/about/Careers";
import TrustCenter from "./pages/about/TrustCenter";
import DataIntegrations from "./pages/solutions/DataIntegrations";
import CustomDashboards from "./pages/solutions/CustomDashboards";
import OnboardingTraining from "./pages/solutions/OnboardingTraining";
import APIDeveloperSupport from "./pages/solutions/APIDeveloperSupport";
import OpenPositions from "./pages/careers/OpenPositions";
import LifeAtTrilio from "./pages/careers/LifeAtTrilio";
import InterviewProcess from "./pages/careers/InterviewProcess";
import InternshipsPrograms from "./pages/careers/InternshipsPrograms";
import BlogInsights from "./pages/resources/BlogInsights";
import Blog1 from "./pages/resources/Blog1";
import Blog2 from "./pages/resources/Blog2";
import Blog3 from "./pages/resources/Blog3";
import Blog4 from "./pages/resources/Blog4";
import Blog5 from "./pages/resources/Blog5";
import Blog6 from "./pages/resources/Blog6";
import Blog7 from "./pages/resources/Blog7";
import Blog8 from "./pages/resources/Blog8";
import Blog9 from "./pages/resources/Blog9";
import Blog10 from "./pages/resources/Blog10";
import Blog11 from "./pages/resources/Blog11";
import Blog12 from "./pages/resources/Blog12";
import CaseStudies from "./pages/resources/CaseStudies";
import GuidesReports from "./pages/resources/GuidesReports";
import HelpCenter from "./pages/resources/HelpCenter";
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
import GA4 from "./pages/solutions/Ga4";
import Walmart from "./pages/solutions/Walmart";
import MailChimp from "./pages/solutions/MailChimp";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/products/bi-reporting" element={<BIReporting />} />
          <Route path="/products/insights" element={<Insights />} />
          <Route path="/products/ai-agents" element={<AIAgents />} />
          <Route path="/who-we-help/founders-ceos" element={<FoundersCEOs />} />
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
          <Route path="/who-we-help/data-analysts" element={<DataAnalysts />} />
          <Route
            path="/who-we-help/agencies-consultants"
            element={<AgenciesConsultants />}
          />
          <Route path="/who-we-help/tech-partners" element={<TechPartners />} />
          {/* About section routes */}
          <Route path="/about/leadership-team" element={<LeadershipTeam />} />
          <Route path="/about/careers" element={<Careers />} />
          <Route path="/about/trust-center" element={<TrustCenter />} />
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
          <Route
            path="/solutions/data-integrations"
            element={<DataIntegrations />}
          />
          <Route
            path="/solutions/custom-dashboards"
            element={<CustomDashboards />}
          />
          <Route
            path="/solutions/onboarding-training"
            element={<OnboardingTraining />}
          />
          <Route
            path="/solutions/api-developer-support"
            element={<APIDeveloperSupport />}
          />
          <Route
            path="/solutions/data-integrations/TikTok"
            element={<TikTok />}
          />
          <Route
            path="/solutions/data-integrations/Amazon"
            element={<Amazon />}
          />
          <Route
            path="/solutions/data-integrations/Shopify"
            element={<Shopify />}
          />
          <Route
            path="/solutions/data-integrations/GoogleAds"
            element={<GoogleAds />}
          />
          <Route
            path="/solutions/data-integrations/AmazonAds"
            element={<AmazonAds />}
          />
          <Route path="/solutions/data-integrations/Meta" element={<Meta />} />
          <Route
            path="/solutions/data-integrations/WooCommerce"
            element={<WooCommerce />}
          />
          <Route
            path="/solutions/data-integrations/RedditAds"
            element={<RedditAds />}
          />
          <Route path="/solutions/data-integrations/GA4" element={<GA4 />} />
          <Route
            path="/solutions/data-integrations/Walmart"
            element={<Walmart />}
          />
          <Route
            path="/solutions/data-integrations/MailChimp"
            element={<MailChimp />}
          />
          {/* Integration Documentation Routes */}
          <Route
            path="/resources/developer-docs/shopify"
            element={<DeveloperDocs />}
          />
          <Route
            path="/resources/developer-docs/klaviyo"
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
          {/* Explicit blog routes */}
          <Route path="/resources/blog-insights/blog/1" element={<Blog1 />} />
          <Route path="/resources/blog-insights/blog/2" element={<Blog2 />} />
          <Route path="/resources/blog-insights/blog/3" element={<Blog3 />} />
          <Route path="/resources/blog-insights/blog/4" element={<Blog4 />} />
          <Route path="/resources/blog-insights/blog/5" element={<Blog5 />} />
          <Route path="/resources/blog-insights/blog/6" element={<Blog6 />} />
          <Route path="/resources/blog-insights/blog/7" element={<Blog7 />} />
          <Route path="/resources/blog-insights/blog/8" element={<Blog8 />} />
          <Route path="/resources/blog-insights/blog/9" element={<Blog9 />} />
          <Route path="/resources/blog-insights/blog/10" element={<Blog10 />} />
          <Route path="/resources/blog-insights/blog/11" element={<Blog11 />} />
          <Route path="/resources/blog-insights/blog/12" element={<Blog12 />} />
          {/* Keep dynamic route as fallback */}
          <Route
            path="/resources/blog-insights/blog/:blogId"
            element={<Blog />}
          />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/guides-reports" element={<GuidesReports />} />
          <Route path="/resources/help-center" element={<HelpCenter />} />
          <Route path="/resources/developer-docs" element={<DeveloperDocs />} />
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
          <Route
            path="/resources/blog-insights/blog/:blogId"
            element={<Blog />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
