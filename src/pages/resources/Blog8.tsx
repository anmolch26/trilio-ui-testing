import React from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog8 = () => {
  const navigate = useNavigate();

  const goToPrevious = () => {
    navigate("/resources/blog-insights/blog/7");
  };

  const goToNext = () => {
    navigate("/resources/blog-insights/blog/9");
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
                    Industry-Specific Considerations
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
                  <span>August 8, 2025</span>
                </div>
              </div>

              <div className="mb-8">
                <img
                  src="https://assets.channeliq.ai/trilio-landing/Blogs/Industry.png"
                  alt="Industry-Specific Considerations"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <p className="text-lg leading-relaxed mb-6">
                While ecommerce analytics fundamentals apply across industries,
                each vertical has unique challenges, opportunities, and
                requirements.{" "}
                <strong>
                  Trilio.ai's industry-specific analytics capabilities
                </strong>{" "}
                help businesses navigate these nuances and optimize performance
                for their particular market.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                This comprehensive guide explores the key considerations for
                different ecommerce industries, from fashion and beauty to
                electronics and food, and how Trilio.ai's platform adapts to
                meet these specific needs.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>
                  Fashion & Apparel: Seasonal Trends & Inventory Management
                </strong>
              </h2>

              <p className="text-lg leading-relaxed mb-4">
                Fashion retailers face unique challenges with seasonal trends,
                high return rates, and complex inventory management across
                multiple channels.
              </p>

              <div className="bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>Key Challenges:</strong>
                </h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>
                      High return rates (20-40%) affecting profitability
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>Seasonal inventory management and forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>Complex size and color variant tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>Multi-channel presence (marketplaces + DTC)</span>
                  </li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>Trilio.ai Solutions:</strong>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Return Rate Analytics:</strong> Track return
                      patterns by product, size, and channel
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Seasonal Forecasting:</strong> AI-powered demand
                      prediction for trend-based inventory
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Variant Performance:</strong> Detailed SKU-level
                      analytics across all channels
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>
                  Health & Beauty: Subscription Models & Customer Retention
                </strong>
              </h2>

              <p className="text-lg leading-relaxed mb-4">
                Beauty and health brands often rely on subscription models and
                require sophisticated customer lifecycle management to maximize
                lifetime value.
              </p>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>Key Challenges:</strong>
                </h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Subscription churn management and prediction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Product usage tracking and replenishment timing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Regulatory compliance and ingredient tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      High customer acquisition costs in competitive market
                    </span>
                  </li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>Trilio.ai Solutions:</strong>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Churn Prediction:</strong> AI models identify
                      at-risk subscribers early
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Usage Analytics:</strong> Track product
                      consumption patterns for optimal replenishment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Lifetime Value Optimization:</strong> Maximize CLV
                      through personalized retention strategies
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>
                  Electronics & Tech: High-Value Transactions & Support
                </strong>
              </h2>

              <p className="text-lg leading-relaxed mb-4">
                Electronics retailers deal with high-value transactions, complex
                product specifications, and extensive customer support
                requirements.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>Key Challenges:</strong>
                </h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      High average order values requiring careful attribution
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Complex product specifications and comparison shopping
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Extended sales cycles and consideration periods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Warranty and support ticket tracking</span>
                  </li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>Trilio.ai Solutions:</strong>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Multi-Touch Attribution:</strong> Track complex
                      customer journeys across long sales cycles
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Product Performance Analytics:</strong> Detailed
                      specs and comparison tracking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Support Integration:</strong> Connect analytics
                      with customer service metrics
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>
                  Food & Beverage: Fresh Inventory & Delivery Optimization
                </strong>
              </h2>

              <p className="text-lg leading-relaxed mb-4">
                Food and beverage businesses require real-time inventory
                management, delivery optimization, and perishable goods
                tracking.
              </p>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>Key Challenges:</strong>
                </h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>
                      Perishable inventory management and waste reduction
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>
                      Delivery time optimization and logistics tracking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>
                      Seasonal demand fluctuations and local market variations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Regulatory compliance and food safety tracking</span>
                  </li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>Trilio.ai Solutions:</strong>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Real-Time Inventory:</strong> Live tracking of
                      perishable goods with expiration alerts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Delivery Analytics:</strong> Optimize delivery
                      routes and timing for customer satisfaction
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Demand Forecasting:</strong> AI-powered prediction
                      for seasonal and local demand patterns
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>
                  Home & Garden: Large Items & Installation Services
                </strong>
              </h2>

              <p className="text-lg leading-relaxed mb-4">
                Home and garden retailers deal with large, heavy items,
                installation services, and complex delivery logistics.
              </p>

              <div className="bg-gradient-to-br from-yellow-50 to-green-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>Key Challenges:</strong>
                </h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>High shipping costs and delivery complexity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Installation service coordination and tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Seasonal demand patterns and weather impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Showroom vs. online channel coordination</span>
                  </li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>Trilio.ai Solutions:</strong>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Logistics Analytics:</strong> Track delivery
                      performance and optimize shipping costs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Service Integration:</strong> Connect installation
                      services with sales analytics
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Omnichannel Analytics:</strong> Unified view of
                      showroom and online performance
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Industry-Specific Analytics Implementation</strong>
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <strong>Custom Metrics by Industry</strong>
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Trilio.ai provides industry-specific metrics and KPIs that
                matter most for each vertical:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Fashion & Apparel</strong>
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Return Rate by Product Category</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Size/Color Performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Seasonal Trend Analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Marketplace vs. DTC Performance</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Health & Beauty</strong>
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Subscription Churn Rate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Product Usage Patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Replenishment Timing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Customer Lifetime Value</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Electronics & Tech</strong>
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Sales Cycle Length</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Support Ticket Correlation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Product Comparison Analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Warranty Claim Tracking</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Food & Beverage</strong>
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      <span>Inventory Turnover Rate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      <span>Delivery Time Optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      <span>Waste Reduction Metrics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      <span>Local Market Performance</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Implementation Strategies by Industry</strong>
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <strong>Phase 1: Industry-Specific Setup</strong>
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Each industry requires different initial setup and configuration
                to maximize the value of analytics:
              </p>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>Fashion & Apparel Setup:</strong>
                </h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Configure size and color variant tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Set up return rate monitoring and alerts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Connect marketplace APIs for unified view</span>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>Health & Beauty Setup:</strong>
                </h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Configure subscription lifecycle tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Set up churn prediction models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Connect product usage data sources</span>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>Electronics Setup:</strong>
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      Configure multi-touch attribution for long sales cycles
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Connect support ticket systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Set up warranty and service tracking</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <strong>Phase 2: Industry-Specific Optimization</strong>
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Once basic setup is complete, focus on industry-specific
                optimizations:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Fashion:</strong> Implement seasonal trend analysis
                    and inventory forecasting
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Beauty:</strong> Deploy churn prediction models and
                    personalized retention campaigns
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Electronics:</strong> Optimize multi-touch
                    attribution and support correlation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Food:</strong> Implement real-time inventory
                    tracking and delivery optimization
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>
                  Conclusion: Industry-Specific Analytics Excellence
                </strong>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                While the fundamentals of ecommerce analytics apply across
                industries, success requires understanding and addressing the
                unique challenges and opportunities of each vertical.
                Trilio.ai's industry-specific capabilities help businesses
                navigate these nuances and optimize performance for their
                particular market.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The key is to start with industry-appropriate metrics and
                gradually build toward more sophisticated analytics that address
                your specific challenges. By leveraging Trilio.ai's platform
                capabilities tailored to your industry, you can achieve faster
                time-to-value and higher ROI from your analytics investment.
              </p>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-teal-800 mb-4">
                  <strong>Ready for Industry-Specific Analytics?</strong>
                </h3>
                <p className="text-teal-700 mb-4">
                  Join thousands of brands using Trilio.ai's industry-specific
                  analytics to optimize performance for their unique market
                  challenges. Start with our free tier for businesses under $1M
                  GMV and see your first industry-tailored insights in under 60
                  seconds.
                </p>
                <p className="text-teal-700 font-medium">
                  Transform your analytics from generic reporting to
                  industry-specific intelligence that drives real business
                  growth.
                </p>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://staging.trilio.ai/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
                >
                  Start Your Free Trial
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={goToPrevious}
              className="flex items-center gap-2 text-black"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous: Common Implementation Challenges and Solutions
            </Button>
            <Button
              variant="outline"
              onClick={goToNext}
              className="flex items-center gap-2 text-black"
            >
              Next: Cost-Benefit Analysis: Platform Investment ROI
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default Blog8;
