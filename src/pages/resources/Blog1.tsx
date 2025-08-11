import React from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog1 = () => {
  const navigate = useNavigate();

  const goToPrevious = () => {
    navigate("/resources/blog-insights/blog/12");
  };

  const goToNext = () => {
    navigate("/resources/blog-insights/blog/2");
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
                    What is an Ecommerce Analytics Platform?
                  </h1>
                </div>
                <div className="ml-6">
                  <img
                    src="https://assets.channeliq.ai/invictus-landing/Leadership/om.jpg"
                    alt="Om Rathod"
                    className="w-44 h-44 rounded-full object-cover mt-8"
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
                  <span>August 1, 2025</span>
                </div>
              </div>

              <div className="mb-8">
                <img
                  src="https://assets.channeliq.ai/trilio-landing/Blogs/EcommerceAnalutics.png"
                  alt="Ecommerce Analytics Platform Overview"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                <strong>What is an Ecommerce Analytics Platform?</strong>
              </h1>

              <p className="text-lg leading-relaxed mb-6">
                An ecommerce analytics platform represents a quantum leap beyond
                basic website analytics capabilities. While traditional tools
                like Google Analytics provide valuable insights into what
                happened on your site, modern ecommerce analytics platforms
                unlock the deeper mysteries of customer behavior—revealing not
                just the what, but the critical why, when, and what's next that
                drive business growth.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                The Power of Unified Data Integration
              </h2>
              <p className="mb-4">
                Modern ecommerce analytics platforms excel at creating a
                comprehensive ecosystem by unifying data from multiple sources
                across your entire business infrastructure:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>
                    <strong>Ecommerce Platforms:</strong> Shopify, WooCommerce,
                    Amazon, or custom ecommerce platforms
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>
                    <strong>Marketing Channels:</strong> Amazon Ads, Google Ads,
                    TikTok, Amazon
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>
                    <strong>Email Marketing:</strong> Klaviyo, Mailchimp
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>
                    <strong>Customer Service Platforms:</strong>{" "}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>
                    <strong>Inventory Management Systems:</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>
                    <strong>Financial Data:</strong>{" "}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>
                    <strong>Social Media:</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>
                    <strong>Review Platforms:</strong>
                  </span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed mb-6">
                The transformative result? A complete 360-degree view of your
                customer journey that reveals exactly which touchpoints drive
                the highest value customers, generate the most qualified leads,
                and create the biggest revenue impact for your business.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                The Evolution: From Static Reporting to Dynamic Intelligence
              </h2>
              <p className="mb-4">
                The landscape has shifted dramatically from traditional
                analytics that focused primarily on historical reporting—telling
                you what happened last month or last quarter—to intelligent
                platforms that empower proactive decision-making.
              </p>

              <p className="mb-4">
                <strong>
                  Today's advanced ecommerce analytics platforms deliver:
                </strong>
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>
                    <strong>Real-time Insights:</strong> Data updated within
                    minutes, not hours, enabling immediate response to market
                    changes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>
                    <strong>Predictive Analytics:</strong> Machine learning
                    algorithms that forecast trends, customer behavior, and
                    revenue patterns before they happen
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>
                    <strong>AI-powered Recommendations:</strong> Intelligent
                    suggestions for immediate action based on data patterns and
                    performance metrics
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>
                    <strong>Automated Alerts:</strong> Smart notifications when
                    performance deviates from expected patterns or when
                    opportunities arise
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>
                    <strong>Cross-channel Attribution:</strong> Advanced
                    modeling that reveals the true customer journey across all
                    touchpoints
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>
                    <strong>Cohort Analysis:</strong> Deep dive into customer
                    segments and their lifetime value patterns
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>
                    <strong>Advanced Segmentation:</strong> Granular customer
                    grouping based on behavior, demographics, and purchase
                    history
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Why This Matters for Your Business</strong>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The shift from basic analytics to comprehensive ecommerce
                analytics platforms isn't just about having more data—it's about
                transforming that data into actionable intelligence that drives
                measurable business growth. With the right platform, businesses
                can optimize their marketing spend, improve customer retention,
                increase average order values, and ultimately build more
                profitable, sustainable ecommerce operations.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                This evolution represents the future of data-driven ecommerce,
                where every decision is backed by comprehensive insights and
                every opportunity is identified before your competition even
                knows it exists.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>How Trilio.ai Delivers on This Vision</strong>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                At Trilio.ai, we've built our platform around the core principle
                that modern ecommerce analytics should be both powerful and
                accessible. Our AI-powered analytics platform transforms the
                complex world of multi-channel ecommerce data into clear,
                actionable insights that drive real business growth.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                <strong>
                  What makes Trilio.ai the ideal ecommerce analytics platform:
                </strong>
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Unified Data Integration:</strong> Connect 20+
                    platforms including Shopify, Amazon, Google Ads, Facebook,
                    TikTok, and Klaviyo in a single dashboard
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>AI-Powered Insights:</strong> Our conversational AI
                    wingman answers your questions in natural language,
                    providing 60-second insights
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Real-Time Analytics:</strong> Monitor 100K+ metrics
                    in real-time across all your channels and campaigns
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Advanced Attribution:</strong> Multi-touch
                    attribution modeling that reveals the true customer journey
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Predictive Intelligence:</strong> Machine learning
                    algorithms that forecast trends and optimize campaigns
                    automatically
                  </span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed mb-6">
                Whether you're a growing ecommerce brand looking to scale
                efficiently or an established business seeking to optimize every
                marketing dollar, Trilio.ai provides the comprehensive analytics
                platform you need to make data-driven decisions with confidence.
              </p>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-teal-800 mb-4">
                  Ready to Transform Your Ecommerce Analytics?
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
                   Trilio Landing Page
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
              Previous: Conclusion: Your Path to Analytics Excellence
            </Button>
            <Button
              variant="outline"
              onClick={goToNext}
              className="flex items-center gap-2 text-black"
            >
              Next: Top 10 Features Every Ecommerce Analytics Platform Must Have
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default Blog1;
