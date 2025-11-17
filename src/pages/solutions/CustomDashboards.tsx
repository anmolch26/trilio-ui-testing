import React from "react";
import { ArrowRight, Search, Palette, Code, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import ThemeButton from "@/components/theme/ThemeButton";
import ThemeCard from "@/components/theme/ThemeCard";
import RouteCanonical from "@/components/RouteCanonical";

const CustomDashboards = () => {
  const useCases = [
    {
      title: "Sales vs. ROAS by Channel",
      description:
        "Compare revenue performance against return on ad spend across all marketing channels",
      icon: BarChart3,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Weekly CAC & LTV Trends",
      description:
        "Track customer acquisition cost alongside lifetime value to optimize retention",
      icon: Search,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Return Rate by SKU & Region",
      description:
        "Identify product quality issues and regional preferences through return analytics",
      icon: Palette,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Customer Segmentation Heatmap",
      description:
        "Visualize customer behavior patterns and purchasing habits across demographics",
      icon: Code,
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const buildProcess = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into your business goals and KPI requirements",
    },
    {
      step: "02",
      title: "Mockup Review",
      description: "Interactive prototypes for your feedback and approval",
    },
    {
      step: "03",
      title: "Development",
      description: "Expert engineers build your custom dashboard solution",
    },
    {
      step: "04",
      title: "Ongoing Optimization",
      description: "Continuous refinement based on usage and new requirements",
    },
  ];

  return (
    <PageLayout>
      <RouteCanonical path="/solutions/custom-dashboards" />
      {/* Hero Section */}
      <ThemeSection background="gradient" padding="xl">
        <div className="text-center max-w-4xl mx-auto">
          <div className="pulse-chip mx-auto mb-6">
            <span>Custom Dashboards</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Your KPIs,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Your Way
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            We build tailor-made dashboards to reflect your goals, not just
            standard metrics.
          </p>
          <div className="glass-card p-8 shadow-elegant max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-4 animate-pulse">
              <div className="h-20 bg-gradient-to-r from-blue-200 to-purple-200 rounded"></div>
              <div className="h-20 bg-gradient-to-r from-orange-200 to-red-200 rounded"></div>
              <div className="h-20 bg-gradient-to-r from-green-200 to-teal-200 rounded"></div>
              <div className="h-20 bg-gradient-to-r from-purple-200 to-pink-200 rounded"></div>
            </div>
          </div>
        </div>
      </ThemeSection>

      {/* Use Cases Gallery */}
      <ThemeSection background="white" padding="xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12 text-black">
            Custom Dashboard Examples
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="glass-card p-8 hover-lift transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${useCase.gradient} rounded-full flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300`}
                >
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className={`text-xl font-semibold mb-4${
                    [
                      "Sales vs. ROAS by Channel",
                      "Weekly CAC & LTV Trends",
                      "Customer Segmentation Heatmap",
                      "Return Rate by SKU & Region",
                    ].includes(useCase.title)
                      ? " text-black"
                      : ""
                  }`}
                >
                  {useCase.title}
                </h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ThemeSection>

      {/* Build Process */}
      <ThemeSection background="gray" padding="xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12 text-black">
            Our Build Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buildProcess.map((process, index) => (
              <div
                key={process.step}
                className="glass-card p-6 text-center hover-lift transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  {process.step}
                </div>
                <h3
                  className={`text-lg font-semibold mb-3${
                    [
                      "Discovery",
                      "Mockup Review",
                      "Development",
                      "Ongoing Optimization",
                    ].includes(process.title)
                      ? " text-black"
                      : ""
                  }`}
                >
                  {process.title}
                </h3>
                <p className="text-sm text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ThemeSection>

      {/* CTA Section */}
      <ThemeSection background="purple" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Custom Dashboard?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss your unique KPIs and create a dashboard that drives
            real business decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ThemeButton variant="secondary" size="lg" href="/contact-form?type=custom-bi-demo">
              Request a Custom BI Demo
            </ThemeButton>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default CustomDashboards;
