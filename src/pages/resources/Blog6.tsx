import React from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog6 = () => {
  const navigate = useNavigate();

  const goToPrevious = () => {
    navigate("/resources/blog-insights/blog/5");
  };

  const goToNext = () => {
    navigate("/resources/blog-insights/blog/7");
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
                    Measuring Success: KPIs That Matter
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
            >
              <div className="mb-6">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span className="font-medium">by Om Rathod</span>
                  <span className="mx-2">•</span>
                  <span>August 6, 2025</span>
                </div>
              </div>

              <div className="mb-8">
                <img
                  src="/src/assests/kpis.png"
                  alt="KPIs That Matter"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>

              <h2>Revenue Intelligence Metrics</h2>

              <h3>
                <strong>1. Revenue Growth Rate</strong>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Target:</strong> 15-25% quarterly growth
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Measurement:</strong> (Current Quarter Revenue -
                    Previous Quarter Revenue) / Previous Quarter Revenue × 100
                  </span>
                </li>
              </ul>

              <h3>
                <strong>2. Average Order Value (AOV) Improvement</strong>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Target:</strong> 5-10% monthly increase
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Measurement:</strong> Track AOV trends across
                    channels and campaigns
                  </span>
                </li>
              </ul>

              <h3>
                <strong>3. Customer Lifetime Value (CLV) Enhancement</strong>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Target:</strong> 20-30% CLV increase year-over-year
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Measurement:</strong> CLV by acquisition channel and
                    customer segment
                  </span>
                </li>
              </ul>

              <h2>Operational Efficiency Metrics</h2>

              <h3>
                <strong>1. Decision-Making Speed</strong>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Target:</strong> 50% reduction in time-to-insight
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Measurement:</strong> Track time from question to
                    actionable answer
                  </span>
                </li>
              </ul>

              <h3>
                <strong>2. Report Generation Time</strong>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Target:</strong> 80% reduction in manual reporting
                    time
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Measurement:</strong> Hours saved per week on report
                    creation
                  </span>
                </li>
              </ul>

              <h3>
                <strong>3. Data Accuracy Improvement</strong>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Target:</strong> 95%+ accuracy across all data
                    sources
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Measurement:</strong> Error rate reduction and data
                    consistency
                  </span>
                </li>
              </ul>

              <h2>Marketing Performance Metrics</h2>

              <h3>
                <strong>1. ROAS Optimization</strong>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Target:</strong> 20-40% ROAS improvement
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Measurement:</strong> Before/after platform
                    implementation comparison
                  </span>
                </li>
              </ul>

              <h3>
                <strong>2. CAC Reduction</strong>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Target:</strong> 15-25% CAC decrease
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Measurement:</strong> Cost per acquisition trends by
                    channel
                  </span>
                </li>
              </ul>

              <h3>
                <strong>3. Attribution Accuracy</strong>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Target:</strong> Complete customer journey
                    visibility
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Measurement:</strong> Multi-touch attribution
                    implementation success
                  </span>
                </li>
              </ul>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={goToPrevious}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous: Future Trends: AI-Powered Analytics in 2025
            </Button>
            <Button
              variant="outline"
              onClick={goToNext}
              className="flex items-center gap-2"
            >
              Next: Common Implementation Challenges and Solutions
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default Blog6;
