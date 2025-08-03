import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Different gradient colors for each card
  const gradientClasses = [
    "from-teal-400 to-blue-600",
    "from-purple-400 to-pink-600",
    "from-orange-400 to-red-600",
    "from-green-400 to-teal-600",
    "from-blue-400 to-purple-600",
    "from-pink-400 to-orange-600",
  ];

  const hoverColors = [
    "group-hover:border-teal-200/50 group-hover:text-teal-600",
    "group-hover:border-purple-200/50 group-hover:text-purple-600",
    "group-hover:border-orange-200/50 group-hover:text-orange-600",
    "group-hover:border-green-200/50 group-hover:text-green-600",
    "group-hover:border-blue-200/50 group-hover:text-blue-600",
    "group-hover:border-pink-200/50 group-hover:text-pink-600",
  ];

  const iconBgColors = [
    "from-pulse-100 to-teal-100 group-hover:from-teal-50 group-hover:to-blue-50",
    "from-pulse-100 to-purple-100 group-hover:from-purple-50 group-hover:to-pink-50",
    "from-pulse-100 to-orange-100 group-hover:from-orange-50 group-hover:to-red-50",
    "from-pulse-100 to-green-100 group-hover:from-green-50 group-hover:to-teal-50",
    "from-pulse-100 to-blue-100 group-hover:from-blue-50 group-hover:to-purple-50",
    "from-pulse-100 to-pink-100 group-hover:from-pink-50 group-hover:to-orange-50",
  ];

  const shadowColors = [
    "group-hover:shadow-teal-200/50",
    "group-hover:shadow-purple-200/50",
    "group-hover:shadow-orange-200/50",
    "group-hover:shadow-green-200/50",
    "group-hover:shadow-blue-200/50",
    "group-hover:shadow-pink-200/50",
  ];

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative bg-white rounded-2xl p-8 text-center opacity-0",
        "shadow-elegant hover:shadow-elegant-hover transition-all duration-500",
        "hover:-translate-y-3 hover:scale-[1.02] border border-gray-100 cursor-pointer overflow-hidden",
        hoverColors[index % hoverColors.length],
        shadowColors[index % shadowColors.length]
      )}
      style={{
        animationDelay: `${0.15 * index}s`,
      }}
    >
      {/* Gradient overlay on hover */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-effects-none",
          index % 6 === 0 && "from-teal-50/50 to-blue-50/30",
          index % 6 === 1 && "from-purple-50/50 to-pink-50/30",
          index % 6 === 2 && "from-orange-50/50 to-red-50/30",
          index % 6 === 3 && "from-green-50/50 to-teal-50/30",
          index % 6 === 4 && "from-blue-50/50 to-purple-50/30",
          index % 6 === 5 && "from-pink-50/50 to-orange-50/30"
        )}
      ></div>

      {/* Animated background glow */}
      <div
        className={cn(
          "absolute -inset-1 bg-gradient-to-r rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500",
          gradientClasses[index % gradientClasses.length]
        )}
      ></div>

      <div className="relative z-10">
        <div
          className={cn(
            "w-20 h-20 bg-gradient-to-br rounded-full flex items-center justify-center mx-auto mb-6",
            "group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg",
            iconBgColors[index % iconBgColors.length],
            shadowColors[index % shadowColors.length]
          )}
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:bg-gradient-to-br transition-all duration-300">
            <div className="text-teal-600 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-gray-900 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[#a2fce9]/[0.51]">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent",
            "translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 skew-x-12"
          )}
        ></div>
      </div>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section
      id="features"
      ref={sectionRef}
      className="pb-0 mb-0 relative overflow-hidden bg-white/0"
    >
      {/* Subtle ambient light effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#C4FEF9] border border-teal-500/20 text-teal-700 mb-6 opacity-0 fade-in-element">
            <span className="text-sm font-medium">Features</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 fade-in-element leading-tight text-emerald-100 lg:text-6xl">
            Everything You Need to <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
              Scale Your Business
            </span>
          </h2>

          <p className="text-xl max-w-3xl mx-auto opacity-0 fade-in-element leading-relaxed text-gray-100">
            Powerful features designed to transform your data into profitable
            insights and actionable growth strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <FeatureCard
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            }
            title="Unified Business Dashboard (Omnichannel Visibility)"
            description="Get a single view of your entire business across D2C sites and marketplaces. Track sales, ad performance, inventory, and customer behavior in one place—no more jumping between platforms."
            index={0}
          />
          <FeatureCard
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
              </svg>
            }
            title="Customizable Dashboards & Reports"
            description="Easily create drag-and-drop dashboards or use ready-to-go templates for Sales, CAC, ROAS, LTV, Inventory Turnover, and more. Filter by channel, product, geography, or campaign. Export reports or schedule them via Slack and Email."
            index={1}
          />
          <FeatureCard
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
              </svg>
            }
            title="AI-Powered Insights & Smart Alerts"
            description="Trilio proactively surfaces insights across your all channels Shopify, Amazon, Google Ads, Klaviyo and 20+ platforms. Ex. declining ROAS, stock-out risks, or conversion drops so you can take immediate action. You’ll also get event-triggered alerts powered by AI & ML."
            index={2}
          />
          <FeatureCard
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 1 0 7.75" />
              </svg>
            }
            title="Conversational AI Wingman"
            description="Ask questions like “What was my AOV on Shopify last month?” or “Which products are hurting my margin?” and get instant answers in text, charts, or infographic reports. No SQL or Excel needed."
            index={3}
          />
          <FeatureCard
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            }
            title="Revenue & Forecast Planner"
            description="Set annual, monthly, or SKU-level revenue targets and let Trilio auto-forecast your performance. Compare actual vs. target across timeframes and identify where you’re missing your growth goals."
            index={4}
          />
          <FeatureCard
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            }
            title="SKU-Level Drill-Down"
            description="Dive deep into product performance. Export detailed SKU data in Excel/PDF format for comprehensive analysis."
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
