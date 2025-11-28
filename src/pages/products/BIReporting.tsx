import React from "react";
import PageLayout from "@/components/theme/PageLayout";
import ProductHero from "@/components/ProductHero";
import FeatureGrid from "@/components/FeatureGrid";
import ProductCTA from "@/components/ProductCTA";
import Seo from "@/components/Seo";
import {
  Download,
  BarChart3,
  Calendar,
  FileSpreadsheet,
  Database,
  Filter,
  TrendingUp,
  Zap,
} from "lucide-react";

const BIReporting = () => {
  const heroProps = {
    badgeIcon: Zap,
    badgeText: "AI-Powered Reporting",
    title: "Intelligent BI Dashboards for Every Channel",
    description:
      "Unify Amazon, Shopify, Walmart & more in one exportable report—powered by AI, no coding required.",
    primaryButtonText: "See Live Demo",
    secondaryButtonText: "Start Free Trial",
    // secondaryButtonLink: "https://staging.trilio.ai/register",
    heroImage:
      "https://assets.channeliq.ai/trilio-landing/Blogs/BiReporting.png",
    heroImageAlt: "Multi-tab Excel export with dashboard and SKU breakdown",
    gradientColors: "bg-gradient-to-br from-orange-500/20 to-purple-600/20",
  };

  const mainFeatures = [
    {
      icon: Download,
      title: "AI-Powered Exports",
      description:
        "Smart multi-sheet Excel, PDF, CSV generation with visual charts & automated SKU analysis.",
      gradientColors:
        "bg-gradient-to-br from-orange-50 to-purple-50 border border-orange-200",
    },
    {
      icon: BarChart3,
      title: "Intelligent Analytics",
      description:
        "AI-driven drill-down capabilities with predictive insights and time-series analysis.",
      gradientColors:
        "bg-gradient-to-br from-orange-50 to-purple-50 border border-orange-200",
    },
    {
      icon: Calendar,
      title: "Smart Automation",
      description:
        "AI-scheduled reports with anomaly detection alerts to your inbox or Slack.",
      gradientColors:
        "bg-gradient-to-br from-orange-50 to-purple-50 border border-orange-200",
    },
  ];

  const detailedFeatures = [
    {
      icon: FileSpreadsheet,
      title: "Intelligent Report Builder",
      description:
        "AI-assisted drag-and-drop metrics with smart chart recommendations and template suggestions.",
      gradientColors:
        "bg-gradient-to-br from-white to-gray-50 border border-gray-200",
    },
    {
      icon: Database,
      title: "Smart Retailer Metrics",
      description:
        "AI-optimized templates for Amazon (ACoS, Buy Box), Shopify (cart abandonment), and WooCommerce.",
      gradientColors:
        "bg-gradient-to-br from-white to-gray-50 border border-gray-200",
    },
    {
      icon: Filter,
      title: "AI-Powered Filtering",
      description:
        "Intelligent filtering by product group, channel, payment gateway with predictive grouping.",
      gradientColors:
        "bg-gradient-to-br from-white to-gray-50 border border-gray-200",
    },
  ];

  const useCases = [
    {
      icon: TrendingUp,
      title: "Finance Teams",
      description:
        "AI-powered P&L exports with automated variance analysis and budget tracking insights.",
      gradientColors: "bg-gradient-to-br from-orange-50/50 to-purple-50/50",
    },
    {
      icon: BarChart3,
      title: "Operations",
      description:
        "Smart inventory tracking with AI-powered demand forecasting and returns analysis.",
      gradientColors: "bg-gradient-to-br from-orange-50/50 to-purple-50/50",
    },
    {
      icon: Zap,
      title: "Marketing",
      description:
        "AI-driven ROAS analysis with campaign-level attribution and optimization recommendations.",
      gradientColors: "bg-gradient-to-br from-orange-50/50 to-purple-50/50",
    },
  ];

  return (
    <PageLayout>
      <Seo
        title="BI Reporting for Ecommerce | Trilio"
        description="Intelligent BI Dashboards for every channel. Unify Amazon, Shopify, Walmart & more in one exportable report—powered by AI."
        canonical="/products/bi-reporting"
      />
      <ProductHero {...heroProps} />

      <FeatureGrid
        title="Everything You Need in One Export"
        subtitle="Powered by intelligent automation and AI insights"
        features={mainFeatures}
      />

      <FeatureGrid
        title="AI-Enhanced Features Built for Ecommerce"
        subtitle=""
        features={detailedFeatures}
      />

      <FeatureGrid
        title="Built for Every Team"
        subtitle=""
        features={useCases}
      />

      <ProductCTA
        title="Ready to Transform Your Reporting with AI?"
        description="Join thousands of ecommerce teams who trust Trilio for intelligent BI solutions."
        buttonText="Start Your Free Trial"
      // buttonLink="https://staging.trilio.ai/register"
      />
    </PageLayout>
  );
};

export default BIReporting;
