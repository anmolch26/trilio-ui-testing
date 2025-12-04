import React from "react";
import PageLayout from "@/components/theme/PageLayout";
import ProductHero from "@/components/ProductHero";
import FeatureGrid from "@/components/FeatureGrid";
import ProductCTA from "@/components/ProductCTA";
import RouteCanonical from "@/components/RouteCanonical";
import {
  Bot,
  MessageSquare,
  Zap,
  Shield,
  Users,
  BarChart3,
  Brain,
  Sparkles,
} from "lucide-react";

const AIAgents = () => {
  const heroProps = {
    badgeIcon: Bot,
    badgeText: "AI Teammate",
    title: "Your Intelligent E‑commerce AI Assistant",
    description:
      "Ask questions, automate complex tasks, and get AI-powered recommendations—no dashboards needed.",
    primaryButtonText: "Chat with AI Agent",
    secondaryButtonText: "Enable AI Agents",
    heroImage:
      "https://assets.channeliq.ai/trilio-landing/products/wingman.png",
    heroImageAlt: "AI chat interface with intelligent responses",
    gradientColors: "bg-gradient-to-br from-orange-500/20 to-purple-600/20",
  };

  const mainFeatures = [
    {
      icon: MessageSquare,
      title: "Natural Language AI",
      description:
        "Advanced NLP understands complex business questions and provides instant, contextual answers with data visualization.",
      gradientColors:
        "bg-gradient-to-br from-orange-50 to-purple-50 border border-orange-200",
    },
    {
      icon: BarChart3,
      title: "Intelligent Report Generation",
      description:
        "AI creates comprehensive reports with insights, recommendations, and automated scheduling based on simple commands.",
      gradientColors:
        "bg-gradient-to-br from-orange-50 to-purple-50 border border-orange-200",
    },
    {
      icon: Zap,
      title: "Smart Automated Actions",
      description:
        "Execute complex business logic automatically with AI validation and safety checks built-in.",
      gradientColors:
        "bg-gradient-to-br from-orange-50 to-purple-50 border border-orange-200",
    },
  ];

  const capabilities = [
    {
      icon: Brain,
      title: "AI Intelligence Processing",
      description:
        "Neural networks parse intent, access relevant data, and apply business logic for accurate responses.",
      gradientColors:
        "bg-gradient-to-br from-white to-gray-50 border border-gray-200",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description:
        "Military-grade security with granular AI governance and complete audit transparency.",
      gradientColors:
        "bg-gradient-to-br from-white to-gray-50 border border-gray-200",
    },
    {
      icon: Sparkles,
      title: "Smart Automation",
      description:
        "AI-powered workflows with intelligent decision making and seamless integration capabilities.",
      gradientColors:
        "bg-gradient-to-br from-white to-gray-50 border border-gray-200",
    },
  ];

  const useCases = [
    {
      icon: Users,
      title: "Sales & Marketing AI",
      description:
        "AI generates qualified lead lists and automates personalized campaigns with A/B testing.",
      gradientColors: "bg-gradient-to-br from-orange-50/50 to-purple-50/50",
    },
    {
      icon: BarChart3,
      title: "Finance AI",
      description:
        "Automated financial analysis with AI-powered forecasting and budget optimization recommendations.",
      gradientColors: "bg-gradient-to-br from-orange-50/50 to-purple-50/50",
    },
    {
      icon: Shield,
      title: "Operations AI",
      description:
        "Intelligent inventory management with AI-driven supply chain optimization and demand forecasting.",
      gradientColors: "bg-gradient-to-br from-orange-50/50 to-purple-50/50",
    },
  ];

  return (
    <PageLayout>
      <RouteCanonical path="/products/ai-agents" />
      <ProductHero {...heroProps} />

      <FeatureGrid
        title="AI That Understands E-commerce Intelligence"
        subtitle="Advanced natural language processing meets e-commerce expertise"
        features={mainFeatures}
      />

      <FeatureGrid
        title="Advanced AI Capabilities"
        subtitle=""
        features={capabilities}
      />

      <FeatureGrid
        title="AI Agents for Every Department"
        subtitle=""
        features={useCases}
      />

      <ProductCTA
        title="Ready to Work with AI Agents?"
        description="Join thousands of teams who trust AI agents for intelligent automation and insights."
        buttonText="Start with AI Agents"
      />
    </PageLayout>
  );
};

export default AIAgents;
