import React from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog5 = () => {
  const navigate = useNavigate();

  const goToPrevious = () => {
    navigate("/resources/blog-insights/blog/4");
  };

  const goToNext = () => {
    navigate("/resources/blog-insights/blog/6");
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
                    Future Trends: AI-Powered Analytics in 2025
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
                  <span>August 5, 2025</span>
                </div>
              </div>

              <div className="mb-8">
                <img
                  src="/src/assests/AIpowered.jpg"
                  alt="AI-Powered Analytics"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>

              <h2>The Rise of Autonomous Analytics</h2>
              <p>
                <strong>
                  By 2025, AI will move from assistive to autonomous
                </strong>
                , meaning platforms will:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>
                      Automatically detect and act on opportunities
                    </strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Generate insights without human prompting</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>
                      Predict and prevent problems before they occur
                    </strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>
                      Optimize campaigns in real-time without human intervention
                    </strong>
                  </span>
                </li>
              </ul>

              <h2>Conversational Analytics Interfaces</h2>
              <p>
                The future of analytics interaction is conversational. Instead
                of building complex reports, you'll simply ask:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <em>
                      "Which products are driving the highest LTV customers?"
                    </em>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <em>
                      "What's causing the CAC increase in our Facebook
                      campaigns?"
                    </em>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <em>"Predict next month's inventory needs by SKU"</em>
                  </span>
                </li>
              </ul>
              <p>
                <strong>Trilio.ai already offers this capability</strong> with
                its conversational AI wingman feature.
              </p>

              <h2>Real-Time Decision Making</h2>
              <p>
                <strong>
                  2025 will see the shift from delayed reporting to instant
                  action
                </strong>
                :
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Campaigns will automatically pause when ROAS drops below
                    targets
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Inventory alerts will trigger before stockouts occur
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Customer service will receive real-time sentiment analysis
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Pricing will adjust dynamically based on demand patterns
                  </span>
                </li>
              </ul>

              <h2>Predictive Customer Intelligence</h2>
              <p>Advanced platforms will predict:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Which customers are likely to churn</strong> (and
                    automatically trigger retention campaigns)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>
                      When customers will make their next purchase
                    </strong>{" "}
                    (optimizing email timing)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Which products customers will want</strong> (before
                    they know it themselves)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Lifetime value potential</strong> (for acquisition
                    bid optimization)
                  </span>
                </li>
              </ul>

              <h2>Privacy-First Analytics</h2>
              <p>
                With increasing privacy regulations, platforms must balance
                insight generation with privacy protection:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>First-party data optimization</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Cookieless attribution modeling</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Privacy-compliant customer tracking</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Consent management integration</strong>
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
              Previous: Implementation Guide: Getting Started in 30 Days
            </Button>
            <Button
              variant="outline"
              onClick={goToNext}
              className="flex items-center gap-2"
            >
              Next: Measuring Success: KPIs That Matter
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default Blog5;
