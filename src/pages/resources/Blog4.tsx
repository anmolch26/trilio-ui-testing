import React from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog4 = () => {
  const navigate = useNavigate();

  const goToPrevious = () => {
    navigate("/resources/blog-insights/blog/3");
  };

  const goToNext = () => {
    navigate("/resources/blog-insights/blog/5");
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
                    Implementation Guide: Getting Started in 30 Days
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
                  <span>August 4, 2025</span>
                </div>
              </div>

              <div className="mb-8">
                <img
                  src="https://assets.channeliq.ai/trilio-landing/Blogs/Guide.png"
                  alt="Implementation Guide"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                <strong>
                  Implementation Guide: Getting Started in 30 Days
                </strong>
              </h1>

              <p className="text-lg leading-relaxed mb-6">
                Implementing a comprehensive ecommerce analytics platform like
                Trilio.ai doesn't have to be overwhelming. This 30-day
                implementation guide will walk you through a structured approach
                to get your analytics platform up and running, from initial
                setup to advanced optimization.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Implementation Overview:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Week 1:</strong> Foundation Setup & Basic
                      Integration
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Week 2:</strong> Advanced Configuration & AI Setup
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Week 3:</strong> Optimization & Team Training
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Week 4:</strong> Scale & Advanced Features
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Week 1: Foundation Setup</strong>
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <strong>Days 1-2: Account Setup and Core Integration</strong>
              </h3>
              <p className="mb-4">
                Start with the essential setup to get your Trilio.ai platform
                operational.
              </p>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Day 1 Tasks:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Create your Trilio.ai account and verify email</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      Complete business profile setup (industry, size, goals)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      Connect primary ecommerce platform (Shopify/WooCommerce)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      Set up basic tracking parameters and conversion events
                    </span>
                  </li>
                </ul>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-4">
                  Day 2 Tasks:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Connect Google Analytics 4 (GA4) integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Set up Facebook Ads and Google Ads connections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Configure basic attribution models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Test data flow and verify initial metrics</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <strong>Days 3-5: Data Validation and Quality Assurance</strong>
              </h3>
              <p className="mb-4">
                Ensure your data is accurate and reliable before proceeding with
                advanced features.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Data Accuracy Check:</strong> Verify revenue, order,
                    and customer data matches your existing systems
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Attribution Testing:</strong> Test multi-touch
                    attribution tracking across all channels
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Real-time Monitoring:</strong> Set up alerts for
                    data discrepancies or connection issues
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Historical Data Import:</strong> Import up to 12
                    months of historical data for baseline analysis
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <strong>Days 6-7: Team Onboarding and Basic Training</strong>
              </h3>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Team Setup:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      Invite key team members (marketing, operations, finance)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      Set up role-based access controls and permissions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Create initial custom dashboards for each team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      Schedule basic training sessions on platform navigation
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Week 2: Advanced Configuration</strong>
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <strong>Days 8-10: AI-Powered Features Setup</strong>
              </h3>
              <p className="mb-4">
                Configure Trilio.ai's advanced AI capabilities for maximum
                insight generation.
              </p>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  AI Configuration:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Conversational AI Setup:</strong> Train the AI
                      wingman on your business terminology
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Custom Insights:</strong> Configure AI to focus on
                      your key metrics and KPIs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Predictive Analytics:</strong> Set up forecasting
                      models for revenue and customer behavior
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Anomaly Detection:</strong> Configure alerts for
                      unusual performance patterns
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <strong>
                  Days 11-12: Advanced Attribution and Customer Journey Mapping
                </strong>
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Multi-Touch Attribution:</strong> Configure advanced
                    attribution models (time-decay, data-driven)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Customer Journey Mapping:</strong> Set up touchpoint
                    tracking across all channels
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Cross-Device Tracking:</strong> Implement customer
                    identity resolution
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>ROAS Optimization:</strong> Set up automated ROAS
                    tracking and optimization alerts
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <strong>
                  Days 13-14: Custom Dashboards and Automated Reporting
                </strong>
              </h3>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Dashboard Creation:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Executive Dashboard:</strong> High-level KPIs and
                      performance overview
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Marketing Dashboard:</strong> Channel performance,
                      ROAS, and attribution
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Operations Dashboard:</strong> Inventory,
                      fulfillment, and customer service metrics
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Finance Dashboard:</strong> Revenue, margins, and
                      profitability analysis
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Week 3: Optimization and Insights</strong>
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <strong>
                  Days 15-17: Baseline Establishment and Performance Analysis
                </strong>
              </h3>
              <p className="mb-4">
                Establish performance baselines and identify optimization
                opportunities.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Performance Baselines:</strong> Document current
                    ROAS, CAC, and conversion rates
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Channel Analysis:</strong> Identify top-performing
                    channels and optimization opportunities
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Customer Segmentation:</strong> Create high-value
                    customer segments and targeting strategies
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Competitive Benchmarking:</strong> Compare
                    performance against industry standards
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <strong>
                  Days 18-19: Advanced AI Features and Predictive Analytics
                </strong>
              </h3>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  AI-Powered Optimization:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Predictive Analytics:</strong> Set up revenue
                      forecasting and trend prediction
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Automated Insights:</strong> Configure AI to
                      surface actionable recommendations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Smart Alerts:</strong> Set up intelligent
                      notifications for performance changes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Optimization Suggestions:</strong> Enable
                      AI-powered campaign and budget optimization
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <strong>
                  Days 20-21: Process Documentation and Standard Operating
                  Procedures
                </strong>
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Standard Operating Procedures:</strong> Document
                    daily, weekly, and monthly review processes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Report Generation:</strong> Create automated
                    reporting schedules and templates
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Team Training Materials:</strong> Develop
                    comprehensive training documentation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Escalation Procedures:</strong> Define processes for
                    handling data issues or anomalies
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Week 4: Scale and Advanced Features</strong>
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <strong>
                  Days 22-24: Performance Analysis and Optimization
                </strong>
              </h3>
              <p className="mb-4">
                Analyze your first month of data and implement optimization
                strategies.
              </p>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Performance Review:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Data Analysis:</strong> Review first month of
                      comprehensive analytics data
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Trend Identification:</strong> Identify patterns
                      in customer behavior and performance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Optimization Opportunities:</strong> Generate
                      specific recommendations for improvement
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>ROI Calculation:</strong> Measure the impact of
                      analytics implementation
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <strong>
                  Days 25-26: Team Alignment and Cross-Department Integration
                </strong>
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Cross-Team Insights:</strong> Share analytics
                    insights across marketing, operations, and finance
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>KPI Alignment:</strong> Ensure all teams are
                    tracking the same success metrics
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Optimization Planning:</strong> Develop action plans
                    based on analytics insights
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>Communication Protocols:</strong> Establish regular
                    reporting and review schedules
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <strong>
                  Days 27-30: Advanced Features and Future Planning
                </strong>
              </h3>
              <div className="bg-gradient-to-br from-pink-50 to-red-50 border border-pink-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Advanced Implementation:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>90-Day Roadmap:</strong> Develop comprehensive
                      optimization strategy
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Additional Integrations:</strong> Plan connections
                      to additional platforms (TikTok, Amazon, etc.)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Advanced AI Features:</strong> Implement
                      predictive analytics and automated optimization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Success Metrics:</strong> Set long-term targets
                      for growth and optimization
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Implementation Best Practices</strong>
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <strong>Data Quality and Validation</strong>
              </h3>
              <p className="mb-4">
                <strong>Start with Clean Data:</strong> Ensure all integrations
                are properly configured and data is accurate before proceeding
                with advanced features. Regular data validation checks should be
                part of your ongoing maintenance routine.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <strong>Team Training and Adoption</strong>
              </h3>
              <p className="mb-4">
                <strong>Invest in Training:</strong> Comprehensive team training
                is crucial for successful implementation. Schedule regular
                training sessions and create documentation that team members can
                reference independently.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <strong>Iterative Implementation</strong>
              </h3>
              <p className="mb-6">
                <strong>Start Small, Scale Up:</strong> Begin with core features
                and gradually add advanced capabilities. This approach allows
                you to validate each step before moving to more complex
                configurations.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Expected Outcomes After 30 Days</strong>
              </h2>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Measurable Results:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Unified Data View:</strong> Single dashboard for
                      all ecommerce metrics
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>AI-Powered Insights:</strong> 60-second answers to
                      complex business questions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Real-Time Monitoring:</strong> Instant alerts for
                      performance changes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>
                      <strong>Optimization Opportunities:</strong> Clear action
                      items for performance improvement
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-teal-800 mb-4">
                  <strong>Ready to Start Your Implementation Journey?</strong>
                </h3>
                <p className="text-teal-700 mb-4">
                  Join thousands of brands already using Trilio.ai to transform
                  their ecommerce analytics. Our free tier for businesses under
                  $1M GMV makes it easy to get started.
                </p>
                <p className="text-teal-700 font-medium">
                  Begin your 30-day implementation today and see your first
                  insights in under 60 seconds.
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
              Previous: Comparing Leading Platforms: Trilio vs Competitors
            </Button>
            <Button
              variant="outline"
              onClick={goToNext}
              className="flex items-center gap-2 text-black"
            >
              Next: Future Trends: AI-Powered Analytics in 2025
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default Blog4;
