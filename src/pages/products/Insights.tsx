import React from "react";
import Navbar from "@/components/NavBar";
import LegacyFooter from "@/components/LegacyFooter";
import ProductHero from "@/components/ProductHero";
import FeatureGrid from "@/components/FeatureGrid";
import ProductCTA from "@/components/ProductCTA";
import {
  Brain,
  TrendingUp,
  Zap,
  AlertTriangle,
  Target,
  BarChart3,
  Users,
  Shield,
} from "lucide-react";

const Insights = () => {
  const heroProps = {
    badgeIcon: Brain,
    badgeText: "AI Insights Engine",
    title: "Intelligent Insights That Drive Action",
    description:
      "AI analyzes patterns across all channels to surface hidden opportunities and predict trends before they happen.",
    primaryButtonText: "See AI Insights",
    secondaryButtonText: "Start Free Analysis",
    heroImage: "/src/assests/Untitled.png",
    heroImageAlt: "AI-powered insights dashboard with trend analysis",
    gradientColors: "bg-gradient-to-br from-purple-500/20 to-blue-600/20",
  };

  const mainFeatures = [
    {
      icon: Brain,
      title: "AI Pattern Recognition",
      description:
        "Advanced ML algorithms identify hidden patterns and correlations across your entire ecommerce ecosystem.",
      gradientColors:
        "bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description:
        "Forecast trends, demand, and performance with AI-powered time series analysis and modeling.",
      gradientColors:
        "bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-200",
    },
    {
      icon: AlertTriangle,
      title: "Smart Alerts",
      description:
        "AI monitors thousands of metrics and alerts you only when anomalies require immediate attention.",
      gradientColors:
        "bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200",
    },
  ];

  const detailedFeatures = [
    {
      icon: Target,
      title: "Revenue Optimization",
      description:
        "AI identifies underperforming products and channels with specific recommendations for improvement.",
      gradientColors:
        "bg-gradient-to-br from-white to-gray-50 border border-gray-200",
    },
    {
      icon: BarChart3,
      title: "Customer Behavior AI",
      description:
        "Deep learning models analyze customer journeys to predict churn and identify upsell opportunities.",
      gradientColors:
        "bg-gradient-to-br from-white to-gray-50 border border-gray-200",
    },
    {
      icon: Zap,
      title: "Real-time Intelligence",
      description:
        "Streaming AI processes data in real-time to deliver insights the moment they become actionable.",
      gradientColors:
        "bg-gradient-to-br from-white to-gray-50 border border-gray-200",
    },
  ];

  const useCases = [
    {
      icon: Users,
      title: "Marketing Teams",
      description:
        "AI-powered customer segmentation and campaign optimization with predictive ROAS modeling.",
      gradientColors: "bg-gradient-to-br from-blue-50/50 to-purple-50/50",
    },
    {
      icon: TrendingUp,
      title: "Product Teams",
      description:
        "Intelligent product performance analysis with AI-driven inventory and pricing recommendations.",
      gradientColors: "bg-gradient-to-br from-green-50/50 to-teal-50/50",
    },
    {
      icon: Shield,
      title: "Executive Teams",
      description:
        "Strategic AI insights with executive dashboards and automated board-ready reporting.",
      gradientColors: "bg-gradient-to-br from-purple-50/50 to-pink-50/50",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <ProductHero {...heroProps} />
        <FeatureGrid
          title="AI-Powered Intelligence for Ecommerce"
          subtitle="Machine learning models trained specifically for ecommerce optimization"
          features={mainFeatures}
        />
        <FeatureGrid
          title="Advanced AI Capabilities"
          subtitle=""
          features={detailedFeatures}
        />
        <FeatureGrid
          title="Insights for Every Team"
          subtitle=""
          features={useCases}
        />
        <ProductCTA
          title="Ready to Unlock AI-Powered Insights?"
          description="Join leading ecommerce brands using AI to drive growth and optimize performance."
          buttonText="Start AI Analysis"
          gradientColors="bg-gradient-to-br from-purple-500 to-blue-600"
        />
      </main>
      <LegacyFooter />
    </div>
  );
};

export default Insights;
