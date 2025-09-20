import React from "react";
const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 mb-24 md:mb-32" id="capabilities">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with centered badge */}
        <div className="flex justify-center mb-8 sm:mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full text-base  text-white border border-white/30 backdrop-blur-xl bg-white/5 shadow-lg shadow-white/10 hover:bg-white/10 transition-all duration-300">
            <span className="font-display tracking-wide">
              Core Capabilities
            </span>
          </div>
        </div>

        {/* Main content with text mask image */}
        <div className="max-w-7xl mx-auto space-y-48">
          {/* First Section - Dashboard */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Dashboard Image */}
            <div className="w-full max-w-4xl lg:flex-shrink-0 lg:-ml-16">
              <div className="relative">
                <img
                  src="https://assets.channeliq.ai/trilio-landing/Hero_Images/Dashboard13 (1).webp"
                  alt="Trilio Dashboard - Unified ecommerce analytics platform"
                  className="w-full h-auto object-contain"
                  style={{ minHeight: "400px", maxHeight: "600px" }}
                />
              </div>
            </div>

            {/* Dashboard Text content */}
            <div className="text-center flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-White leading-tight">
                <span style={{ color: "#05b8b2" }}>"Unified"</span> Business
                View
                {/* <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                  {" "}
                  All Your Data
                </span> */}
              </h2>
              <p className="text-base text-gray-300 leading-relaxed">
                Consolidate all your ecommerce data from Amazon, Shopify, Google
                Ads, Meta, and more into one unified dashboard. Get real-time
                KPIs, cross-channel performance metrics, and actionable insights
                without jumping between 15+ different platforms.
              </p>
            </div>
          </div>

          {/* Second Section - Conversational AI Wingman */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
            {/* Wing Image */}
            <div className="w-full max-w-3xl lg:flex-shrink-0">
              <div className="relative">
                <img
                  src="https://assets.channeliq.ai/trilio-landing/Hero_Images/Insights2 (1).webp"
                  alt="Trilio Conversational AI Wingman - Ask questions and get instant answers"
                  className="w-full h-auto object-contain"
                  style={{ minHeight: "500px", maxHeight: "600px" }}
                />
              </div>
            </div>

            {/* Wingman Text content */}
            <div className="text-center flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white leading-tight">
                <span style={{ color: "#05b8b2" }}>
                  "AI-Driven Intelligence"
                </span>
                <h3></h3>that Acts<h3></h3>
                {/* <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                  {" "}
                  AI-Powered Insights and Actions
                </span> */}
              </h2>
              <p className="text-base text-gray-300 leading-relaxed mb-4">
                Move beyond static reports with AI that continuously analyzes
                your data patterns and automatically surfaces critical insights.
                Get predictive recommendations, anomaly detection, and suggested
                actions that directly impact your revenue and ROAS.
              </p>

              {/* AI Wingman Features */}
            </div>
          </div>

          {/* Third Section - Custom BI */}
          <div
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 "
            style={{ marginTop: "5rem", marginBottom: "-4rem" }}
          >
            {/* Custom BI Image */}
            <div className="w-full max-w-6xl lg:flex-shrink-0 -m-24 p-0 -ml-12">
              <div className="relative">
                <img
                  src="https://assets.channeliq.ai/trilio-landing/Hero_Images/Impact01.webp"
                  alt="Trilio Custom BI - Create your own view with easy options"
                  className="w-full h-auto object-contain"
                  style={{ minHeight: "0px", maxHeight: "800px" }}
                />
              </div>
            </div>

            {/* Custom BI Text content */}
            <div className="text-center flex-1 ">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white leading-tight">
                Impact Events
                {/* <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                  {" "}
                  Custom View
                </span> */}
              </h2>
              <p className="text-base text-gray-300 leading-relaxed">
                Never wonder 'did that campaign actually work?' again. Track
                every promotion, product launch, and marketing campaign with
                before/after analysis and automatic KPI impact measurement. Turn
                every marketing initiative into a data-driven learning
                opportunity.
              </p>
            </div>
          </div>

          {/* Fourth Section - SKU-Level Drill-Down */}
        </div>
      </div>

      {/* Spacer for gap between sections */}
      <div className="h-32 md:h-38"></div>
    </section>
  );
};
export default SpecsSection;
