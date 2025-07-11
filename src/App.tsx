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
import CaseStudies from "./pages/resources/CaseStudies";
import GuidesReports from "./pages/resources/GuidesReports";
import HelpCenter from "./pages/resources/HelpCenter";
import DeveloperDocs from "./pages/resources/DeveloperDocs";
import NewsletterSignup from "./pages/resources/NewsletterSignup";
import Pricing from "./pages/Pricing";

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
          <Route path="/blog" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
