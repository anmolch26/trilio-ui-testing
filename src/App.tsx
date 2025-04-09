import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./hooks/useTheme";

// Import feature pages
import OmnichannelDataIntegration from "./subpages/OmnichannelDataIntegration";
import AIDrivenInsights from "./subpages/AIDrivenInsights";
import AutomatedReporting from "./subpages/AutomatedReporting";
import AIChatAssistant from "./subpages/AIChatAssistant";
import PDPCompliance from "./subpages/PDPCompliance";
import BusinessHealth from "./subpages/BusinessHealth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Feature Routes */}
            <Route path="/features/omnichannel" element={<OmnichannelDataIntegration />} />
            <Route path="/features/ai-insights" element={<AIDrivenInsights />} />
            <Route path="/features/automated-reporting" element={<AutomatedReporting />} />
            <Route path="/features/ai-chat-assistant" element={<AIChatAssistant />} />
            <Route path="/features/pdp-compliance" element={<PDPCompliance />} />
            <Route path="/features/business-health" element={<BusinessHealth />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
