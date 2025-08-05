import React from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog2 = () => {
  const navigate = useNavigate();

  const goToPrevious = () => {
    navigate("/resources/blog-insights/blog/1");
  };

  const goToNext = () => {
    navigate("/resources/blog-insights/blog/3");
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
                    Top 10 Features Every Ecommerce Analytics Platform Must Have
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
                  <span>August 2, 2025</span>
                </div>
              </div>

              <div className="mb-8">
                <img
                  src="/src/assests/Features.png"
                  alt="Ecommerce Analytics Platform Features"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                <strong>
                  Top 10 Features Every Ecommerce Analytics Platform Must Have
                </strong>
              </h1>

              <p className="text-lg leading-relaxed mb-6">
                In today's competitive ecommerce landscape, having the right
                analytics platform isn't just an advantage—it's a necessity.
                With the rise of AI-powered intelligence and multi-channel
                selling, your analytics platform needs to do more than just
                report numbers. It needs to provide actionable insights that
                drive real business growth.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>1.</strong> AI-Powered Natural Language Intelligence
              </h2>
              <p className="mb-4">
                The future of analytics is conversational. Modern platforms
                should understand complex business questions and provide
                instant, contextual answers with data visualization.
              </p>

              <div className="bg-gradient-to-br from-orange-50 to-purple-50 border border-orange-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Key AI Capabilities:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Advanced NLP for complex business queries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>
                      Instant contextual answers with data visualization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>AI-powered report generation with insights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Automated scheduling based on simple commands</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a
                    href="/products/ai-agents"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                  >
                    Explore AI Agents →
                  </a>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>2.</strong> Intelligent BI Reporting & Exports
              </h2>
              <p className="mb-4">
                Smart multi-sheet Excel, PDF, CSV generation with visual charts
                & automated SKU analysis powered by AI.
              </p>

              <div className="bg-gradient-to-br from-orange-50 to-purple-50 border border-orange-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Advanced Reporting Features:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>AI-assisted drag-and-drop metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>
                      Smart chart recommendations and template suggestions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>
                      AI-optimized templates for Amazon, Shopify, WooCommerce
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Automated anomaly detection alerts</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a
                    href="/products/bi-reporting"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                  >
                    Discover BI Reporting →
                  </a>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>3.</strong> Unified Data Integration (20+ Channels)
              </h2>
              <p className="mb-4">
                Your platform should seamlessly connect with all your business
                tools. Trilio.ai integrates with 20+ platforms including
                Shopify, Amazon, Google Ads, Facebook, TikTok, and Klaviyo
                without requiring technical expertise.
              </p>

              <p className="mb-4">
                <strong>What to look for:</strong>
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Pre-built connectors for major platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Real-time data synchronization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Historical data backfill capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>API access for custom integrations</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>4.</strong> Real-Time ROAS & CAC Tracking
              </h2>
              <p className="mb-4">
                Return on Ad Spend (ROAS) and Customer Acquisition Cost (CAC)
                are the metrics that matter most. Your platform should provide
                instant visibility into these KPIs across all channels.
              </p>

              <p className="mb-4">
                <strong>Key capabilities:</strong>
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Channel-specific ROAS tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Blended ROAS across all channels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Real-time CAC monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Trend analysis and forecasting</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>5.</strong> Multi-Touch Attribution Modeling
              </h2>
              <p className="mb-4">
                Understanding the complete customer journey requires
                sophisticated attribution. 36 touchpoints occur on average
                before B2B conversion, making attribution critical for budget
                allocation.
              </p>

              <p className="mb-4">
                <strong>Essential attribution models:</strong>
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>First-touch attribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Last-touch attribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Linear attribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Time-decay attribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Data-driven attribution (AI-powered)</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>6.</strong> Smart Automated Actions
              </h2>
              <p className="mb-4">
                Execute complex business logic automatically with AI validation
                and safety checks built-in.
              </p>

              <div className="bg-gradient-to-br from-orange-50/50 to-purple-50/50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Automation Capabilities:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>
                      AI-powered workflows with intelligent decision making
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Seamless integration capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>
                      Automated financial analysis with AI-powered forecasting
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>
                      Intelligent inventory management with demand forecasting
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>7.</strong> Enterprise-Grade Security
              </h2>
              <p className="mb-4">
                Military-grade security with granular AI governance and complete
                audit transparency.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>8.</strong> Predictive Analytics
              </h2>
              <p className="mb-4">
                AI-driven drill-down capabilities with predictive insights and
                time-series analysis.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>9.</strong> Cross-Department Intelligence
              </h2>
              <p className="mb-4">
                Built for every team—from finance and operations to marketing
                and sales.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>10.</strong> Real-Time Decision Making
              </h2>
              <p className="mb-6">
                With 60-second insights generation and real-time analysis of
                100K+ metrics, enable faster, more informed decision-making.
              </p>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-teal-800 mb-4">
                  <strong>
                    Ready to Experience the Future of Ecommerce Analytics?
                  </strong>
                </h3>
                <p className="text-teal-700 mb-4">
                  Join thousands of brands already using Trilio.ai to unlock the
                  full potential of their ecommerce data. Start with our free
                  tier for businesses under $1M GMV and experience the power of
                  AI-driven analytics.
                </p>
                <p className="text-teal-700 font-medium">
                  Get started today and see your first insights in under 60
                  seconds.
                </p>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
                >
                  <span className="mr-2">🚀</span>
                  Explore Trilio Landing Page
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
              Previous: What is an Ecommerce Analytics Platform?
            </Button>
            <Button
              variant="outline"
              onClick={goToNext}
              className="flex items-center gap-2 text-black"
            >
              Next: Comparing Leading Platforms: Trilio vs Competitors
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default Blog2;
