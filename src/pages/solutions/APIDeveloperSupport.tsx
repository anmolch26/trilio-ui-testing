import React from "react";
import {
  ArrowRight,
  Code,
  FileText,
  Zap,
  Shield,
  Smartphone,
  MessageSquare,
  Bell,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import ThemeButton from "@/components/theme/ThemeButton";
import ThemeCard from "@/components/theme/ThemeCard";
import RouteCanonical from "@/components/RouteCanonical";

const APIDeveloperSupport = () => {
  const developerFeatures = [
    {
      icon: <FileText />,
      title: "API Docs",
      description: "Comprehensive documentation with examples and tutorials",
    },
    {
      icon: <Code />,
      title: "Data Models",
      description: "Complete schema references for all endpoints and objects",
    },
    {
      icon: <Zap />,
      title: "Webhook Triggers",
      description: "Real-time notifications for data updates and events",
    },
    {
      icon: <Shield />,
      title: "Authentication Guides",
      description: "OAuth 2.0, API keys, and security best practices",
    },
  ];

  const useCases = [
    {
      icon: Smartphone,
      title: "Pull Trilio KPIs into a mobile dashboard",
      description:
        "Create custom mobile apps with real-time eCommerce metrics using our REST API endpoints.",
      code: "GET /api/v1/metrics/revenue?period=30d",
    },
    {
      icon: MessageSquare,
      title: "Automate a daily Slack report",
      description:
        "Schedule automated reports to your team channels with key performance indicators.",
      code: "POST /api/v1/reports/schedule",
    },
    {
      icon: Bell,
      title: "Trigger an alert in your CRM on inventory drop",
      description:
        "Set up webhook notifications to alert your sales team when stock levels are low.",
      code: "POST /api/v1/webhooks/inventory-alerts",
    },
  ];

  const resources = [
    {
      title: "API Documentation",
      description: "Complete REST API reference",
      href: "#api-docs",
    },
    {
      title: "SDK Repositories",
      description: "JavaScript, Python, PHP libraries",
      href: "#sdks",
    },
    {
      title: "Rate Limits",
      description: "Usage guidelines and quotas",
      href: "#rate-limits",
    },
    {
      title: "Developer FAQs",
      description: "Common questions and solutions",
      href: "#faqs",
    },
  ];

  return (
    <PageLayout>
      <RouteCanonical path="/solutions/api-developer-support" />
      {/* Hero Section */}
      <ThemeSection background="gradient" padding="xl">
        <div className="text-center max-w-4xl mx-auto">
          <div className="pulse-chip mx-auto mb-6">
            <span>API & Developer Support</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Build With Trilio's
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Flexible APIs
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            Use our REST API, webhooks, and SDKs to customize your data
            experience.
          </p>
          <div className="glass-card p-6 text-left max-w-2xl mx-auto font-mono text-sm shadow-elegant">
            <div className="text-green-400 mb-2">$ curl -X GET \</div>
            <div className="text-blue-300 mb-2">
              {" "}
              "https://api.trilio.ai/v1/metrics" \
            </div>
            <div className="text-yellow-300 mb-2">
              {" "}
              -H "Authorization: Bearer YOUR_API_KEY"
            </div>
            <div className="text-gray-400 mt-4">
              <div>{"{"}</div>
              <div> "revenue": 125000,</div>
              <div> "orders": 1250,</div>
              <div> "roas": 4.2</div>
              <div>{"}"}</div>
            </div>
          </div>
        </div>
      </ThemeSection>

      {/* Developer Portal Preview */}
      <ThemeSection background="white" padding="xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12 text-black">
            Developer Portal Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developerFeatures.map((feature, index) => (
              <ThemeCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                variant="feature"
              />
            ))}
          </div>
        </div>
      </ThemeSection>

      {/* Use Case Gallery */}
      <ThemeSection background="gray" padding="xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12 text-black">
            Developer Use Cases
          </h2>
          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="glass-card p-8 hover-lift transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <useCase.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3
                        className={`text-xl font-semibold${
                          [
                            "Pull Trilio KPIs into a mobile dashboard",
                            "Automate a daily Slack report",
                            "Trigger an alert in your CRM on inventory drop",
                          ].includes(useCase.title)
                            ? " text-black"
                            : ""
                        }`}
                      >
                        {useCase.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                    <div className="text-green-400">{useCase.code}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ThemeSection>

      {/* Developer Resources */}
      <ThemeSection background="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12 text-black">
            Developer Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div
                key={resource.title}
                className="glass-card p-6 hover-lift transition-all duration-300"
              >
                <h3
                  className={`text-lg font-semibold mb-2 hover:text-blue-600 transition-colors duration-200${
                    [
                      "API Documentation",
                      "SDK Repositories",
                      "Rate Limits",
                      "Developer FAQs",
                    ].includes(resource.title)
                      ? " text-black"
                      : ""
                  }`}
                >
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {resource.description}
                </p>
                <a
                  href={resource.href}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </ThemeSection>

      {/* CTA Section */}
      <ThemeSection background="purple" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Access our developer portal and start integrating Trilio's powerful
            APIs into your applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ThemeButton variant="secondary" size="lg" href="/resources/developer-docs">
              Access Developer Docs
            </ThemeButton>
            <ThemeButton
              variant="outline"
              size="lg"
              href="/contact-form"
              className="border-white text-white hover:bg-white hover:text-purple-600"
            >
              Join Developer Community
            </ThemeButton>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default APIDeveloperSupport;
