import React from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog13 = () => {
  const navigate = useNavigate();

  const goToPrevious = () => {
    navigate("/resources/blog-insights/blog/12");
  };

  const goToNext = () => {
    navigate("/resources/blog-insights/blog/1");
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
                    Shopify Analytics Dashboard: Complete Setup and Optimization
                    Guide for 2025
                  </h1>
                </div>
                <div className="ml-6">
                  <img
                    src="https://assets.channeliq.ai/invictus-landing/Leadership/Nirjar.png"
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
                  <span className="font-medium">by Nirjar Sanghavi</span>
                  <span className="mx-2">•</span>
                  <span>August 13, 2025</span>
                </div>
              </div>

              <div className="mb-8">
                <img
                  src="/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png"
                  alt="Shopify Analytics Dashboard"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400 p-6 mb-8">
                <p className="text-xl text-blue-900 font-semibold mb-2">
                  Master your Shopify data to unlock 25% higher revenue growth
                  through advanced analytics
                </p>
              </div>

              <p className="text-xl text-gray-700 mb-8">
                Running a successful Shopify store in 2025 means more than just
                having great products and a beautiful storefront.{" "}
                <strong>
                  The most successful Shopify merchants are those who turn their
                  data into actionable insights
                </strong>
                , and with{" "}
                <strong>
                  Shopify powering over 4.4 million stores worldwide
                </strong>
                , the competitive advantage goes to those with superior
                analytics intelligence.
              </p>

              <p className="mb-6">
                But here's the reality:{" "}
                <strong>
                  Shopify's built-in analytics, while useful, only scratch the
                  surface of what's possible
                </strong>
                . If you're serious about scaling your Shopify business, you
                need a comprehensive analytics setup that goes far beyond basic
                sales reports.
              </p>

              <p className="mb-8">
                This complete guide will transform how you approach Shopify
                analytics, showing you exactly how to set up, optimize, and
                leverage advanced dashboards that drive real business growth.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>
                  Setting Up Your Advanced Shopify Analytics Dashboard
                </strong>
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>Step 1: Audit Your Current Analytics Setup</strong>
              </h3>
              <p className="mb-6">
                Before implementing advanced analytics, understand what you
                currently have:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-bold text-blue-900 mb-3">
                  <strong>Current Data Sources Checklist:</strong>
                </h4>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Shopify native analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Google Analytics 4 integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Facebook Pixel implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Email marketing platform connections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Customer service tool integrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Inventory management system links</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h4 className="text-lg font-bold text-green-900 mb-3">
                  <strong>Data Quality Assessment:</strong>
                </h4>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Verify tracking accuracy across all platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Check for data discrepancies between tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Identify missing conversion tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Document current reporting workflows</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>Step 2: Choose Your Advanced Analytics Platform</strong>
              </h3>
              <p className="mb-6">
                <strong>Essential Features Your Platform Must Have:</strong>
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-purple-900 mb-3">
                    <strong>1. Native Shopify Integration</strong>
                  </h4>
                  <ul className="space-y-2 text-purple-800">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Real-time data synchronization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Historical data import capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Multi-store management support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Shopify Plus advanced feature access</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-orange-900 mb-3">
                    <strong>2. Multi-Channel Data Unification</strong>
                  </h4>
                  <ul className="space-y-2 text-orange-800">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>
                        Facebook, Instagram, and Google Ads integration
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Email marketing platform connections</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Amazon and marketplace data (if applicable)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Customer service and review platform links</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-indigo-900 mb-3">
                    <strong>3. Advanced Attribution Modeling</strong>
                  </h4>
                  <ul className="space-y-2 text-indigo-800">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Multi-touch attribution capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Customer journey mapping</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Cross-device tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Channel interaction analysis</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-4">
                <strong>Platform Comparison for Shopify:</strong>
              </h4>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                        Feature
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                        Trilio.ai
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                        Triple Whale
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                        Northbeam
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                        Polar Analytics
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Shopify Integration
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-green-600 font-bold">Native</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-green-600 font-bold">Native</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-blue-600">Good</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-blue-600">Good</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Real-time Data
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-green-600 font-bold">✓</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-green-600 font-bold">✓</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-orange-600">Delayed</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-green-600 font-bold">✓</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        AI Insights
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-green-600 font-bold">✓</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-orange-600">Limited</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-red-600">No</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-orange-600">Limited</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Multi-touch Attribution
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-green-600 font-bold">✓</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-green-600 font-bold">✓</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-green-600 font-bold">✓</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-green-600 font-bold">✓</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Conversational Query
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-green-600 font-bold">✓</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-red-600">No</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-red-600">No</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-red-600">No</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Free Tier
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-green-600 font-bold">✓</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-red-600">No</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-red-600">No</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <span className="text-red-600">No</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>Step 3: Implementation Roadmap</strong>
              </h3>

              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-blue-900 mb-3">
                    <strong>Week 1: Foundation Setup</strong>
                  </h4>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Install chosen analytics platform</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>
                        Connect primary data sources (Shopify, ad platforms)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Verify data accuracy and synchronization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Set up basic tracking and conversion events</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-green-900 mb-3">
                    <strong>Week 2: Advanced Configuration</strong>
                  </h4>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Implement multi-touch attribution models</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Configure customer journey mapping</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Set up advanced customer segmentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Create role-based dashboard access</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-purple-900 mb-3">
                    <strong>Week 3: Custom Dashboard Creation</strong>
                  </h4>
                  <ul className="space-y-2 text-purple-800">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Build executive summary dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Create marketing performance views</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Set up operational monitoring dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Configure automated alerts and notifications</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-orange-900 mb-3">
                    <strong>Week 4: Optimization and Training</strong>
                  </h4>
                  <ul className="space-y-2 text-orange-800">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Train team members on new dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Establish reporting schedules and processes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>
                        Implement first optimization based on insights
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Plan ongoing analysis and improvement</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400 p-6 my-8">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  Ready to Transform Your Shopify Analytics?
                </h3>
                <p className="text-blue-800">
                  The future of eCommerce belongs to those who can turn data
                  into actionable insights. With the right Shopify analytics
                  setup, you can unlock unprecedented growth and stay ahead of
                  the competition. Start your analytics transformation today and
                  join the ranks of data-driven Shopify merchants.
                </p>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                Remember, the goal isn't just to collect data—it's to use that
                data to make better business decisions. By implementing a
                comprehensive Shopify analytics dashboard, you're not just
                tracking metrics; you're building a competitive advantage that
                will drive your business forward in 2025 and beyond.
              </p>
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
              Next: What is an Ecommerce Analytics Platform?
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default Blog13;
