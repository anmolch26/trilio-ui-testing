import React, { useState } from "react";
import { Check, X } from "lucide-react";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import ThemeButton from "@/components/theme/ThemeButton";
import GMVPricingCalculator from "@/components/pricing/GMVPricingCalculator";
import GMVRangeCards from "@/components/pricing/GMVRangeCards";
import { cn } from "@/lib/utils";

const getPricingForGMV = (gmv) => {
  if (gmv <= 1) return { pro: 199, premium: 499 };
  if (gmv <= 5) return { pro: 299, premium: 699 };
  if (gmv <= 20) return { pro: 499, premium: 1099 };
  if (gmv <= 50) return { pro: 999, premium: 1499 };
  if (gmv <= 100) return { pro: 1999, premium: 2999 };
  return { pro: "Contact Sales", premium: "Contact Sales" };
};

const gmvRangeOptions = [
  { value: 0.5, label: "$0 - $1M" },
  { value: 1, label: "$1M" },
  { value: 5, label: "$1M - $5M" },
  { value: 20, label: "$5M - $20M" },
  { value: 50, label: "$20M - $50M" },
  { value: 100, label: "$50M - $100M" },
  { value: 150, label: "$100M+" },
];

const Pricing = () => {
  const [activeView, setActiveView] = useState<"calculator" | "ranges">(
    "calculator"
  );
  const [gmv, setGMV] = useState(5); // Default $5M

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for testing the waters",
      popular: false,
      features: {
        gmvCap: "≤ $1M",
        smartInsights: false,
        aiAgents: "0",
        sqlNavigator: false,
        conversationalQuery: false,
        analyticsConcierge: false,
        support: "Community",
        integrations: "Basic",
      },
    },
    {
      name: "Pro",
      price: "$199+",
      period: "/month",
      description: "Most popular for growing businesses",
      popular: true,
      features: {
        gmvCap: "≤ $100M",
        smartInsights: true,
        aiAgents: "2 Agents",
        sqlNavigator: true,
        conversationalQuery: false,
        analyticsConcierge: false,
        support: "Priority Support",
        integrations: "Advanced",
      },
    },
    {
      name: "Premium",
      price: "$499+",
      period: "/month",
      description: "Enterprise-grade features",
      popular: false,
      features: {
        gmvCap: "≤ $100M",
        smartInsights: true,
        aiAgents: "4 Agents",
        sqlNavigator: true,
        conversationalQuery: true,
        analyticsConcierge: true,
        support: "Dedicated Success Manager",
        integrations: "Full Suite + Custom",
      },
    },
  ];

  const FeatureIcon = ({ included }: { included: boolean | string }) => {
    if (typeof included === "string") {
      return (
        <span className="text-sm font-medium text-gray-700">{included}</span>
      );
    }
    return included ? (
      <Check className="w-5 h-5 text-green-500" />
    ) : (
      <X className="w-5 h-5 text-gray-400" />
    );
  };

  const pricing = getPricingForGMV(gmv);

  return (
    <PageLayout>
      {/* Hero Section */}
      <ThemeSection background="gradient" padding="xl">
        <div className="text-center max-w-4xl mx-auto">
          <div className="pulse-chip mx-auto mb-6">
            <span>Pricing</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Pricing Plans Built for Your Growth
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            From startups to scale-ups, choose the plan that fits your GMV and
            unlock AI-powered ecommerce insights.
          </p>
        </div>
      </ThemeSection>

      {/* Interactive GMV Pricing Section */}
      <ThemeSection background="gray" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Interactive Pricing Calculator
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              See exactly how our pricing scales with your business growth
            </p>

            {/* View Toggle */}
            <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
              <button
                onClick={() => setActiveView("calculator")}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                  activeView === "calculator"
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                Pricing Calculator
              </button>
              <button
                onClick={() => setActiveView("ranges")}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                  activeView === "ranges"
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                GMV Ranges
              </button>
            </div>
          </div>

          {/* Dynamic Content */}
          <div className="transition-all duration-500">
            {activeView === "calculator" ? (
              <GMVPricingCalculator gmv={gmv} setGMV={setGMV} />
            ) : (
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {gmvRangeOptions.map((range, idx) => (
                  <button
                    key={range.value}
                    onClick={() => setGMV(range.value)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                      gmv === range.value
                        ? "bg-orange-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </ThemeSection>

      {/* Pricing Cards (dynamic, below calculator/range selector) */}
      <ThemeSection background="white" padding="xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Card */}
          <div
            className={cn(
              "relative glass-card p-8 hover-lift transition-all duration-300"
            )}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">Perfect for testing the waters</p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Monthly GMV Cap</span>
                <span className="font-medium">≤ $1M</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Smart Insights</span>
                <FeatureIcon included={plans[0].features.smartInsights} />
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">AI Agents</span>
                <FeatureIcon included={plans[0].features.aiAgents} />
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">SQL Navigator</span>
                <FeatureIcon included={plans[0].features.sqlNavigator} />
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">
                  Conversational Query
                </span>
                <FeatureIcon included={plans[0].features.conversationalQuery} />
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">
                  Analytics Concierge
                </span>
                <FeatureIcon included={plans[0].features.analyticsConcierge} />
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Support</span>
                <span className="text-xs font-medium text-gray-600 text-right max-w-24">
                  {plans[0].features.support}
                </span>
              </div>
            </div>
            <ThemeButton
              variant="secondary"
              size="lg"
              className="w-full"
              href="/contact-form"
            >
              Get Started Free
            </ThemeButton>
          </div>
          {/* Pro Card */}
          <div
            className={cn(
              "relative glass-card p-8 hover-lift transition-all duration-300 ring-2 ring-orange-500 scale-105 shadow-elegant-hover shadow-orange-500/20"
            )}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  {pricing.pro === "Contact Sales"
                    ? "Contact Sales"
                    : `$${pricing.pro}`}
                </span>
                {pricing.pro !== "Contact Sales" && (
                  <span className="text-gray-600">/month</span>
                )}
              </div>
              <p className="text-gray-600">
                Most popular for growing businesses
              </p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Monthly GMV Cap</span>
                <span className="font-medium">
                  {gmv <= 1
                    ? "≤ $1M"
                    : gmv <= 5
                    ? "$1M - $5M"
                    : gmv <= 20
                    ? "$5M - $20M"
                    : gmv <= 50
                    ? "$20M - $50M"
                    : gmv <= 100
                    ? "$50M - $100M"
                    : "$100M+"}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Smart Insights</span>
                <FeatureIcon included={plans[1].features.smartInsights} />
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">AI Agents</span>
                <FeatureIcon included={plans[1].features.aiAgents} />
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">SQL Navigator</span>
                <FeatureIcon included={plans[1].features.sqlNavigator} />
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">
                  Conversational Query
                </span>
                <FeatureIcon included={plans[1].features.conversationalQuery} />
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">
                  Analytics Concierge
                </span>
                <FeatureIcon included={plans[1].features.analyticsConcierge} />
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Support</span>
                <span className="text-xs font-medium text-gray-600 text-right max-w-24">
                  {plans[1].features.support}
                </span>
              </div>
            </div>
            <ThemeButton
              variant="primary"
              size="lg"
              className="w-full"
              href="/contact-form"
            >
              {pricing.pro === "Contact Sales"
                ? "Contact Sales"
                : "Start Free Trial"}
            </ThemeButton>
          </div>
          {/* Premium Card */}
          <div
            className={cn(
              "relative glass-card p-8 hover-lift transition-all duration-300"
            )}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  {pricing.premium === "Contact Sales"
                    ? "Contact Sales"
                    : `$${pricing.premium}`}
                </span>
                {pricing.premium !== "Contact Sales" && (
                  <span className="text-gray-600">/month</span>
                )}
              </div>
              <p className="text-gray-600">Enterprise-grade features</p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Monthly GMV Cap</span>
                <span className="font-medium">
                  {gmv <= 1
                    ? "≤ $1M"
                    : gmv <= 5
                    ? "$1M - $5M"
                    : gmv <= 20
                    ? "$5M - $20M"
                    : gmv <= 50
                    ? "$20M - $50M"
                    : gmv <= 100
                    ? "$50M - $100M"
                    : "$100M+"}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Smart Insights</span>
                <FeatureIcon included={plans[2].features.smartInsights} />
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">AI Agents</span>
                <FeatureIcon included={plans[2].features.aiAgents} />
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">SQL Navigator</span>
                <FeatureIcon included={plans[2].features.sqlNavigator} />
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">
                  Conversational Query
                </span>
                <FeatureIcon included={plans[2].features.conversationalQuery} />
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">
                  Analytics Concierge
                </span>
                <FeatureIcon included={plans[2].features.analyticsConcierge} />
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Support</span>
                <span className="text-xs font-medium text-gray-600 text-right max-w-24">
                  {plans[2].features.support}
                </span>
              </div>
            </div>
            <ThemeButton
              variant="secondary"
              size="lg"
              className="w-full"
              href="/contact-form"
            >
              {pricing.premium === "Contact Sales"
                ? "Contact Sales"
                : "Start Free Trial"}
            </ThemeButton>
          </div>
        </div>
        <div className="mt-8 text-center">
          <div className="mt-8 inline-flex items-center bg-green-50 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium">
            <span role="img" aria-label="lightbulb" className="mr-1">
              💡
            </span>
            As your GMV grows, our pricing scales to support your success
          </div>
        </div>
      </ThemeSection>

      {/* FAQ Section */}
      <ThemeSection background="white" padding="lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-12 text-black">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What happens if I exceed my GMV limit?
              </h3>
              <p className="text-gray-600">
                We'll automatically suggest an upgrade to ensure uninterrupted
                service. You'll never lose access to your data or insights.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I change plans at any time?
              </h3>
              <p className="text-gray-600">
                Yes! You can upgrade or downgrade your plan at any time. Changes
                take effect immediately, and we'll prorate any billing
                adjustments.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer enterprise pricing?
              </h3>
              <p className="text-gray-600">
                For businesses with over $100M monthly GMV or custom
                requirements, we offer tailored enterprise solutions. Contact
                our sales team for a custom quote.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How is GMV calculated?
              </h3>
              <p className="text-gray-600">
                GMV (Gross Merchandise Value) is the total value of merchandise
                sold through your ecommerce platform before any fees or returns
                are deducted.
              </p>
            </div>
          </div>
        </div>
      </ThemeSection>

      {/* CTA Section */}
      <ThemeSection background="orange" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Ecommerce Analytics?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your free trial today and see the difference AI-powered
            insights can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ThemeButton variant="secondary" size="lg" href="/contact-form">
              Start Free Trial
            </ThemeButton>
            <ThemeButton
              variant="outline"
              size="lg"
              href="/contact-form"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              Schedule Demo
            </ThemeButton>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default Pricing;
