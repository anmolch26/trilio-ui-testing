import React from "react";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import ThemeButton from "@/components/theme/ThemeButton";
import RouteCanonical from "@/components/RouteCanonical";

const PowerBI = () => (
  <PageLayout backgroundClass="bg-[#F2C811]">
    <RouteCanonical path="/solutions/powerbi" />
    <ThemeSection
      background="white"
      padding="xl"
      className="pt-20 !bg-[#F2C811]"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Left: Text Content */}
        <div className="flex-1 text-left text-black max-w-xl">
          <div className="uppercase tracking-widest font-bold text-sm mb-4 text-[#1f1f1f]">
            POWER BI INTEGRATION
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6">
            Connect your data to Power BI with Trilio
          </h1>
          <p className="text-2xl mb-8 font-light leading-snug">
            Trilio streams your commerce, marketing, and operations data directly
            to Power BI with pre-built semantic models, automated refresh, and
            governed metrics. Build executive dashboards from a single source of
            truth.
          </p>
          <ThemeButton
            variant="primary"
            size="lg"
            href="/contact-form"
            className="bg-[#1f1f1f] text-white font-bold rounded-lg shadow-lg border-0 w-[165px] h-[48px] min-w-[165px] min-h-[48px] whitespace-nowrap hover:bg-black transition-colors"
          >
            Connect Power BI
          </ThemeButton>
        </div>
        {/* Right: Hero Image */}
        <div className="flex-1 flex justify-center items-center mt-12 lg:mt-0">
          <img loading="lazy" decoding="async"
            src="https://assets.channeliq.ai/trilio-landing/data-integrations/powerbi-1.png"
            alt="Power BI Integration with Trilio"
            className="max-w-full h-auto rounded-2xl shadow-2xl"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </div>
    </ThemeSection>

    {/* What we sync */}
    <section className="bg-white py-20 px-4 relative z-20 -mt-16 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#21005c] mb-6">
          What Trilio syncs to Power BI
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12">
          We stream your commerce, marketing, and operational data with
          pre-built semantic models and automated refresh. Your Power BI
          dashboards stay current with governed metrics and KPIs.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-12 mt-8">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center">
            <img loading="lazy" decoding="async"
              src="https://assets.channeliq.ai/trilio-landing/data-integrations/powerbi-2.png"
              alt="Trilio Power BI Data Sync"
              className="rounded-2xl max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
            />
          </div>
          {/* Right: List */}
          <div className="flex-1 w-full">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-bold text-xl text-[#21005c]">
                  Commerce Data: Orders, Products, Customers & Revenue
                </span>
                <span className="text-3xl text-[#F2C811] font-bold">+</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-bold text-xl text-[#21005c]">
                  Marketing Data: Campaigns, Attribution & Performance
                </span>
                <span className="text-3xl text-[#F2C811] font-bold">+</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-bold text-xl text-[#21005c]">
                  Operational Data: Inventory, Fulfillment & Support
                </span>
                <span className="text-3xl text-[#F2C811] font-bold">+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-xl text-[#21005c]">
                  Financial Data: Costs, Margins & Profitability
                </span>
                <span className="text-3xl text-[#F2C811] font-bold">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* How we use your Power BI data */}
    <section className="bg-white py-20 px-4 relative z-10 mt-8 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Visualization */}
        <div className="flex-1 flex justify-center">
          <img loading="lazy" decoding="async"
            src="https://assets.channeliq.ai/trilio-landing/data-integrations/powerbi-3.png"
            alt="How Trilio models data for Power BI"
            className="max-w-full h-auto rounded-2xl shadow-2xl"
            style={{ maxHeight: "500px" }}
          />
        </div>
        {/* Right: Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#21005c] mb-6">
            How Trilio powers your Power BI dashboards
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We normalize data from all your sources and create pre-built semantic
            models with governed KPIs. Commerce, marketing, and operational data
            flows into Power BI with automated refresh and consistent metrics.
          </p>
          <p className="text-lg text-gray-700">
            From data ingestion to DAX measures and performance optimization, we
            deliver a unified foundation so every team works from the same truth.
          </p>
        </div>
      </div>
    </section>

    {/* Metrics */}
    <section className="bg-white py-20 px-4 relative z-10 -mt-8 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#21005c] mb-6">
            Executive dashboards and KPIs out of the box
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Track revenue, conversion, customer acquisition cost, lifetime value,
            inventory turns, and profitability. Attribute performance by channel,
            campaign, product, and region with pre-built Power BI templates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ThemeButton
              variant="outline"
              size="sm"
              href="/contact-form"
              className="border-[#21005c] text-[#21005c] hover:bg-[#21005c] hover:text-black"
            >
              SEE A LIVE DASHBOARD
            </ThemeButton>
            <ThemeButton
              variant="outline"
              size="sm"
              href="/contact-form"
              className="border-[#21005c] text-[#21005c] hover:bg-[#21005c] hover:text-black"
            >
              CONNECT POWER BI
            </ThemeButton>
          </div>
        </div>
        {/* Right: Visualization */}
        <div className="flex-1 flex justify-center">
          <img loading="lazy" decoding="async"
            src="https://assets.channeliq.ai/trilio-landing/data-integrations/powerbi-4.png"
            alt="Power BI metrics and KPIs"
            className="max-w-full h-auto rounded-2xl shadow-2xl"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </div>
    </section>

    {/* Analytics Section */}
    <section className="bg-white py-20 px-4 relative z-10 mt-8 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Visual */}
        <div className="flex-1 flex justify-center">
          <img loading="lazy" decoding="async"
            src="https://assets.channeliq.ai/trilio-landing/data-integrations/powerbi-5.png"
            alt="Power BI Analytics"
            className="max-w-full h-auto rounded-2xl shadow-2xl"
            style={{ maxHeight: "500px" }}
          />
        </div>

        {/* Right: Text */}
        <div className="flex-1">
          <div className="uppercase tracking-widest font-bold text-sm mb-4 text-[#F2C811]">
            ANALYTICS
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#21005c] mb-6">
            Data-driven business insights in Power BI
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Measure the impact of every channel, campaign, and product with
            unified metrics. Monitor performance, profitability, and growth with
            Power BI dashboards that update automatically from your data sources.
          </p>
          <ThemeButton
            variant="outline"
            size="lg"
            href="/contact-form"
            className="border-[#21005c] text-[#21005c] hover:bg-[#21005c] hover:text-black"
          >
            LEARN MORE
          </ThemeButton>
        </div>
      </div>
    </section>

    {/* Contact Form Section */}
    <section className="bg-[#F2C811] py-20 px-4 relative z-10 mt-8 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text and Graphic */}
        <div className="flex-1 text-black">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Get Your Demo</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
          <div className="relative">
            <div className="bg-gray-300 rounded-lg p-6 max-w-sm">
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 bg-gray-200 rounded"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                <div className="w-12 h-6 bg-gray-400 rounded"></div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 bg-white rounded-full p-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            </div>
            <div className="absolute top-4 right-8 bg-white rounded-lg p-2 text-xs">
              💬
            </div>
            <div className="absolute top-8 right-4 bg-white rounded-lg p-2 text-xs">
              📧
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1">
          <div className="bg-[#1f1f1f] rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Full Name*
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Company Name*
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Website
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Monthly E-Commerce Revenue
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black">
                  <option>-SELECT-</option>
                  <option>$0 - $10K</option>
                  <option>$10K - $50K</option>
                  <option>$50K - $100K</option>
                  <option>$100K - $500K</option>
                  <option>$500K+</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F2C811] text-black font-bold py-4 px-6 rounded-lg hover:bg-[#F2C811]/90 transition-colors"
              >
                Submit Demo Request
              </button>

              <p className="text-gray-300 text-xs text-center">
                *By submitting your Email Address, you are agreeing to all
                conditions of our{" "}
                <a
                  href="/privacy-policy"
                  className="underline hover:text-white"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default PowerBI;
