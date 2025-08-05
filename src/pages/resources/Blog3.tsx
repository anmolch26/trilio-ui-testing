import React from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog3 = () => {
  const navigate = useNavigate();

  const goToPrevious = () => {
    navigate("/resources/blog-insights/blog/2");
  };

  const goToNext = () => {
    navigate("/resources/blog-insights/blog/4");
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
                    Comparing Leading Platforms: Trilio vs Competitors
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
                  <span>August 3, 2025</span>
                </div>
              </div>

              <div className="mb-8">
                <img
                  src="/src/assests/Screenshot 2025-08-05 at 6.00.31 PM.png"
                  alt="Platform Comparison Illustration"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>

              <h2>Trilio.ai: The Unified Intelligence Leader</h2>
              <p>
                <strong>
                  Trilio.ai positions itself as "Your AI Wingman for Ecommerce
                  Growth"
                </strong>{" "}
                with several key differentiators:
              </p>
              <ul>
                <li>
                  <strong>100K+ metrics analyzed in real-time</strong>
                </li>
                <li>
                  <strong>AI-powered conversational queries</strong> ("What was
                  my AOV last month?")
                </li>
                <li>
                  <strong>60-second insights</strong> generation
                </li>
                <li>
                  <strong>Unified dashboard</strong> connecting 12+ platforms
                  seamlessly
                </li>
                <li>
                  <strong>Free tier available</strong> for businesses under $1M
                  GMV
                </li>
              </ul>
              <p>
                <strong>Best for:</strong> Growing ecommerce brands seeking
                AI-powered insights with easy implementation
              </p>

              <h3>Triple Whale: Shopify-Focused Analytics</h3>
              <p>
                Triple Whale has established itself as a popular choice for
                Shopify merchants.
              </p>
              <strong>Strengths:</strong>
              <ul>
                <li>Deep Shopify integration</li>
                <li>User-friendly interface</li>
                <li>Strong attribution modeling</li>
                <li>Automated reporting</li>
              </ul>
              <strong>Limitations:</strong>
              <ul>
                <li>Limited to Shopify ecosystem</li>
                <li>Higher pricing tiers</li>
                <li>Less AI-powered automation</li>
              </ul>

              <h3>Northbeam: Advanced Attribution Focus</h3>
              <p>Northbeam excels in sophisticated attribution modeling.</p>
              <strong>Strengths:</strong>
              <ul>
                <li>Advanced multi-touch attribution</li>
                <li>Cross-platform compatibility</li>
                <li>Detailed customer journey mapping</li>
              </ul>
              <strong>Limitations:</strong>
              <ul>
                <li>Complex setup process</li>
                <li>Higher learning curve</li>
                <li>Premium pricing</li>
              </ul>

              <h3>Polar Analytics: Enterprise-Grade Solutions</h3>
              <p>
                Polar targets larger enterprises with comprehensive feature
                sets.
              </p>
              <strong>Strengths:</strong>
              <ul>
                <li>Enterprise scalability</li>
                <li>Advanced segmentation</li>
                <li>Custom reporting capabilities</li>
              </ul>
              <strong>Limitations:</strong>
              <ul>
                <li>Complex for small businesses</li>
                <li>Higher costs</li>
                <li>Longer implementation time</li>
              </ul>

              <h3>Lifesight: Marketing Intelligence</h3>
              <p>
                Lifesight focuses on marketing measurement and optimization.
              </p>
              <strong>Strengths:</strong>
              <ul>
                <li>Marketing mix modeling</li>
                <li>Advanced forecasting</li>
                <li>Cross-channel insights</li>
              </ul>
              <strong>Limitations:</strong>
              <ul>
                <li>Marketing-focused (less operational data)</li>
                <li>Complex interface</li>
                <li>Enterprise pricing</li>
              </ul>

              <h2>Key Decision Factors for Ecommerce Analytics</h2>
              <p>
                When choosing between these platforms, consider these critical
                factors:
              </p>

              <h3>1. Business Size and Growth Stage</h3>
              <p>
                <strong>Startups & Small Businesses:</strong> Trilio.ai's free
                tier and easy implementation make it ideal for businesses under
                $1M GMV. The AI-powered conversational queries and 60-second
                insights provide immediate value without overwhelming
                complexity.
              </p>
              <p>
                <strong>Growing Brands:</strong> As you scale, the unified
                dashboard connecting 12+ platforms becomes increasingly
                valuable. Trilio's real-time analysis of 100K+ metrics ensures
                you don't miss critical performance indicators.
              </p>
              <p>
                <strong>Enterprise:</strong> For larger organizations, consider
                Polar Analytics' enterprise-grade solutions, though they come
                with higher complexity and costs.
              </p>

              <h3>2. Platform Integration Requirements</h3>
              <p>
                <strong>Shopify-Only:</strong> Triple Whale offers deep Shopify
                integration but limits your ecosystem flexibility.
              </p>
              <p>
                <strong>Multi-Platform:</strong> Trilio.ai's seamless connection
                to 12+ platforms including Amazon, Google Ads, Facebook, TikTok,
                and Klaviyo provides the most comprehensive view of your
                customer journey.
              </p>
              <p>
                <strong>Advanced Attribution:</strong> Northbeam excels in
                sophisticated attribution modeling but requires more technical
                expertise.
              </p>

              <h3>3. AI and Automation Needs</h3>
              <p>
                <strong>AI-Powered Insights:</strong> Trilio.ai leads with
                conversational AI queries and automated insights generation. The
                platform's AI capabilities include anomaly detection, predictive
                forecasting, and performance optimization recommendations.
              </p>
              <p>
                <strong>Manual Analysis:</strong> Traditional platforms require
                more manual work for insights and reporting.
              </p>

              <h2>Implementation and Onboarding Comparison</h2>

              <h3>Trilio.ai: Quick Start Advantage</h3>
              <p>
                <strong>Setup Time:</strong> 60-second insights generation means
                you can start seeing value immediately.
              </p>
              <p>
                <strong>Learning Curve:</strong> AI-powered conversational
                queries make the platform accessible to non-technical users.
              </p>
              <p>
                <strong>Support:</strong> Free tier available for businesses
                under $1M GMV includes full platform access.
              </p>

              <h3>Competitor Implementation Challenges</h3>
              <p>
                <strong>Northbeam:</strong> Complex setup process and higher
                learning curve may delay time-to-value.
              </p>
              <p>
                <strong>Polar Analytics:</strong> Longer implementation time and
                enterprise-focused features may not suit smaller businesses.
              </p>
              <p>
                <strong>Lifesight:</strong> Marketing-focused interface may not
                provide the operational insights needed for comprehensive
                ecommerce analytics.
              </p>

              <h2>Cost-Benefit Analysis</h2>

              <h3>Trilio.ai Value Proposition</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Free Tier:</strong> Available for businesses under
                    $1M GMV
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Unified Platform:</strong> 12+ platform integrations
                    in one dashboard
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>AI Automation:</strong> Reduces manual analysis time
                    significantly
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Real-Time Insights:</strong> 100K+ metrics analyzed
                    in real-time
                  </span>
                </li>
              </ul>

              <h3>Competitor Pricing Considerations</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Triple Whale:</strong> Higher pricing tiers for
                    advanced features
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Northbeam:</strong> Premium pricing for
                    sophisticated attribution
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Polar Analytics:</strong> Enterprise costs may be
                    prohibitive for smaller businesses
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Lifesight:</strong> Enterprise pricing focused on
                    marketing intelligence
                  </span>
                </li>
              </ul>

              <h2>Future-Proofing Your Analytics Strategy</h2>
              <p>
                As ecommerce continues to evolve, consider these forward-looking
                factors:
              </p>

              <h3>AI Integration</h3>
              <p>
                Trilio.ai's AI-powered conversational queries and automated
                insights represent the future of analytics. The ability to ask
                natural language questions like "What was my AOV last month?"
                and receive instant insights positions businesses for continued
                growth.
              </p>

              <h3>Platform Scalability</h3>
              <p>
                The unified dashboard approach ensures you can add new platforms
                and channels without losing historical data or requiring new
                analytics tools. This scalability is crucial as your business
                grows and diversifies its marketing channels.
              </p>

              <h3>Real-Time Decision Making</h3>
              <p>
                With 60-second insights generation and real-time analysis of
                100K+ metrics, Trilio.ai enables faster, more informed
                decision-making compared to traditional batch processing
                approaches.
              </p>

              <h2>Conclusion: Making the Right Choice</h2>
              <p>
                For most growing ecommerce brands, Trilio.ai offers the best
                combination of ease of use, comprehensive platform integration,
                and AI-powered insights. The free tier for businesses under $1M
                GMV makes it accessible to startups, while the unified dashboard
                and real-time analytics support continued growth.
              </p>

              <p>
                While competitors excel in specific areas (Triple Whale for
                Shopify, Northbeam for attribution, Polar for enterprise,
                Lifesight for marketing), Trilio.ai provides the most balanced
                solution for comprehensive ecommerce analytics with minimal
                complexity and maximum insight generation.
              </p>
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
              Previous: Top 10 Features Every Ecommerce Analytics Platform Must
              Have
            </Button>
            <Button
              variant="outline"
              onClick={goToNext}
              className="flex items-center gap-2"
            >
              Next: Implementation Guide: Getting Started in 30 Days
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default Blog3;
