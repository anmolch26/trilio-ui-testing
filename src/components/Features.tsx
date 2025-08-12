import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  backgroundImage?: string;
  reverse?: boolean;
  descriptionClassName?: string;
  titleClassName?: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  index,
  backgroundImage,
  reverse = false,
  descriptionClassName,
  titleClassName,
}: FeatureCardProps) => {
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
        "relative opacity-0 overflow-visible",
        backgroundImage
          ? "rounded-none min-h-[22rem] md:min-h-[26rem]"
          : cn("rounded-lg bg-white/5 p-4 md:p-5 text-center shadow-none")
      )}
      style={{
        animationDelay: `${0.15 * index}s`,
        ...(backgroundImage
          ? {}
          : {
              background:
                "linear-gradient(270deg, #2B4780 0%, #284175 20%, #20315B 40%, #1C2541 60%, #191E37 80%, #181D35 100%)",
            }),
      }}
    >
      {/* Optional background image */}
      {backgroundImage && (
        <div className="relative w-full min-h-[22rem] md:min-h-[26rem]">
          <div
            className={cn(
              "flex flex-col w-full md:flex-row items-stretch min-h-[22rem] md:min-h-[26rem]",
              reverse && "md:flex-row-reverse"
            )}
          >
            {/* Image half */}
            <div
              className={cn(
                "md:w-1/2 w-full flex-1 min-h-[12rem] bg-center bg-cover shadow-2xl ring-1 ring-black/5 relative overflow-hidden",
                reverse ? "rounded-2xl" : "rounded-2xl"
              )}
              style={{
                backgroundImage: `url(${backgroundImage})`,
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
              }}
            />
            {/* Content half */}
            <div
              className={cn(
                "md:w-1/2 w-full flex-1 p-6 md:p-8 bg-transparent flex flex-col justify-center min-h-[12rem]",
                reverse ? "rounded-2xl" : "rounded-2xl"
              )}
            >
              <h3
                className="text-3xl md:text-4xl font-bold text-white mb-4 text-left"
                style={{
                  fontFamily:
                    "DM Sans, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                }}
              >
                {title}
              </h3>
              <div
                className="text-white/90 leading-relaxed text-left"
                style={{
                  fontFamily:
                    "DM Sans, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                  fontSize: "16px",
                }}
              >
                {description}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* No overlays or glow for default cards */}

      {!backgroundImage && (
        <div className="relative z-10 p-4 text-center bg-transparent">
          <div
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 bg-gray-100"
            )}
          >
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <div className="text-teal-600">{icon}</div>
            </div>
          </div>

          <h3
            className={`text-sm font-semibold mb-1.5 ${
              titleClassName ?? "text-gray-900"
            }`}
          >
            {title}
          </h3>

          <p
            className={`${
              descriptionClassName ?? "text-gray-700"
            } leading-relaxed text-xs md:text-sm`}
          >
            {description}
          </p>
        </div>
      )}
      {/* No shine effect */}
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

        {/* Grid moved below full-width sections */}

        {/* Full-width Wingman, Unified Dashboard and SKU cards */}
        <div className="max-w-7xl mx-auto mt-8 space-y-16">
          <FeatureCard
            icon={null}
            title="Conversational AI Wingman"
            description="Ask questions like “What was my AOV on Shopify last month?” or “Which products are hurting my margin?” and get instant answers in text, charts, or infographic reports. No SQL or Excel needed."
            index={3}
            backgroundImage="https://assets.channeliq.ai/trilio-landing/products/WingmanImage.png"
            reverse={false}
          />
          <FeatureCard
            icon={null}
            title="Unified Business Dashboard Omnichannel Visibility"
            description="Get a single view of your entire business across D2C sites and marketplaces. Track sales, ad performance, inventory, and customer behavior in one place—no more jumping between platforms."
            index={4}
            backgroundImage="https://assets.channeliq.ai/trilio-landing/products/BusinessDashboard.png"
            reverse
          />
          <FeatureCard
            icon={null}
            title="SKU-Level Drill-Down"
            description="Dive deep into product performance. Export detailed SKU data in Excel/PDF format for comprehensive analysis."
            index={5}
            backgroundImage="https://assets.channeliq.ai/trilio-landing/products/SkuCard1.png"
            reverse={false}
          />
        </div>

        {/* Three feature cards moved below the SKU section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto mt-12">
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
            index={6}
            descriptionClassName="text-white"
            titleClassName="text-white"
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
            index={7}
            descriptionClassName="text-white"
            titleClassName="text-white"
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
            index={8}
            descriptionClassName="text-white"
            titleClassName="text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
