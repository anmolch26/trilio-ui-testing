import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/NavBar";
import LegacyFooter from "@/components/LegacyFooter";

const GettingStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-36 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Getting Started with Trilio
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your comprehensive guide to setting up and using Trilio's advanced
              analytics platform
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
                <span className="text-sm font-medium text-gray-700">
                  ⏱️ 5 min setup
                </span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
                <span className="text-sm font-medium text-gray-700">
                  📊 Real-time analytics
                </span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
                <span className="text-sm font-medium text-gray-700">
                  🚀 No coding required
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg"
                onClick={() => {
                  navigate("/who-we-help/waitlist");
                  window.scrollTo(0, 0);
                }}
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </section>

        {/* Quick Start Steps */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Quick Start Guide
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Create Your Account
                </h3>
                <p className="text-gray-600">
                  Sign up for Trilio and verify your email address. You'll
                  receive a welcome email with your dashboard access.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Connect Your Data Sources
                </h3>
                <p className="text-gray-600">
                  Link your marketing platforms, e-commerce stores, and
                  analytics tools. Trilio supports 40+ integrations.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Start Analyzing
                </h3>
                <p className="text-gray-600">
                  View your unified dashboard, set up custom reports, and start
                  making data-driven decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What You Can Do with Trilio
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Unified Analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  Combine data from all your marketing channels into one
                  comprehensive dashboard.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ROAS Optimization
                </h3>
                <p className="text-gray-600 text-sm">
                  Track return on ad spend across all platforms and optimize
                  your marketing budget.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  AI Insights
                </h3>
                <p className="text-gray-600 text-sm">
                  Get intelligent recommendations and predictions to improve
                  your marketing performance.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Custom Reports
                </h3>
                <p className="text-gray-600 text-sm">
                  Create personalized reports and dashboards tailored to your
                  business needs.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Real-time Data
                </h3>
                <p className="text-gray-600 text-sm">
                  Access up-to-the-minute data and insights to make timely
                  decisions.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Easy Integrations
                </h3>
                <p className="text-gray-600 text-sm">
                  Connect with popular platforms like Google Ads, Facebook,
                  Shopify, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Help Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Need Help Getting Started?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Support Options */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Support Resources
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-sm">📚</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Documentation
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Comprehensive guides and API references
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-sm">🎥</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Video Tutorials
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Step-by-step video guides for all features
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 text-sm">💬</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Live Chat</h4>
                      <p className="text-gray-600 text-sm">
                        Get instant help from our support team
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600 text-sm">📧</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Email Support
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Detailed help via email within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Email Support
                    </h4>
                    <p className="text-blue-600">support@trilio.com</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Business Hours
                    </h4>
                    <p className="text-gray-600">
                      Monday - Friday, 9 AM - 6 PM EST
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Response Time
                    </h4>
                    <p className="text-gray-600">
                      Within 24 hours for email, instant for chat
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Start Your Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How long does it take to set up Trilio?
                </h3>
                <p className="text-gray-600">
                  Most users can get started in under 5 minutes. Simply create
                  an account, connect your first data source, and you'll see
                  data flowing into your dashboard immediately.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What data sources can I connect?
                </h3>
                <p className="text-gray-600">
                  Trilio supports 40+ integrations including Google Ads,
                  Facebook Ads, Instagram, TikTok, Shopify, WooCommerce, Google
                  Analytics, and many more. We're constantly adding new
                  integrations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-600">
                  Yes! We offer a 14-day free trial with full access to all
                  features. No credit card required to start your trial.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I export my data?
                </h3>
                <p className="text-gray-600">
                  Absolutely. You can export your data in multiple formats
                  including CSV, Excel, and PDF. You can also set up automated
                  reports that are sent to your email.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <LegacyFooter />
    </div>
  );
};

export default GettingStarted;
