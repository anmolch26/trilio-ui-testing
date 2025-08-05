import React from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog11 = () => {
  const navigate = useNavigate();

  const goToPrevious = () => {
    navigate("/resources/blog-insights/blog/10");
  };

  const goToNext = () => {
    navigate("/resources/blog-insights/blog/12");
  };

  return (
    <PageLayout backgroundClass="bg-white">
      <ThemeSection background="white" padding="xl" className="pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Blog Post */}
          <article className="mb-16">
            {/* Blog Header */}
            <header className="mb-8">
              <div className="flex items-center mb-6">
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                    Next-Generation Features to Watch
                  </h1>
                </div>
                <div className="ml-6">
                  <img
                    src="https://assets.channeliq.ai/invictus-landing/Leadership/om.jpg"
                    alt="Om Rathod"
                    className="w-20 h-20 rounded-full object-cover mt-8"
                  />
                </div>
              </div>
            </header>

            {/* Blog Content */}
            <div
              className="text-lg text-gray-900 leading-relaxed space-y-6"
              style={{ fontFamily: "Antarctica, Arial, sans-serif" }}
              dangerouslySetInnerHTML={{
                __html: `
                  <div className="mb-6">
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <span className="font-medium">by Om Rathod</span>
                      <span className="mx-2">•</span>
                      <span>August 11, 2025</span>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <img 
                      src="/lovable-uploads/c3d810f5-fda3-4321-a497-5f5483a0ece2.png" 
                      alt="Next-Generation Features" 
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <h2>1. Augmented Analytics</h2>
                  <p>AI-powered insights that automatically surface in dashboards without user queries</p>

                  <h2>2. Embedded Analytics</h2>
                  <p>Analytics capabilities built directly into operational tools</p>

                  <h2>3. Collaborative Analytics</h2>
                  <p>Team-based insight sharing and decision-making workflows</p>

                  <h2>4. Edge Analytics</h2>
                  <p>Real-time processing at data source locations for instant insights</p>

                  <h2>5. Quantum-Enhanced Analytics</h2>
                  <p>Advanced computational power for complex pattern recognition</p>
                `,
              }}
            />
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={goToPrevious}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous: Security and Compliance Considerations
            </Button>
            <Button
              variant="outline"
              onClick={goToNext}
              className="flex items-center gap-2"
            >
              Next: Conclusion: Your Path to Analytics Excellence
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default Blog11;
