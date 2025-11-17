import React from "react";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import ThemeButton from "@/components/theme/ThemeButton";

const Tableau = () => (
  <PageLayout backgroundClass="bg-[#00467E]">
    <ThemeSection
      background="white"
      padding="xl"
      className="pt-20 !bg-[#00467E]"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Left: Text Content */}
        <div className="flex-1 text-left text-white max-w-xl">
          <div className="uppercase tracking-widest font-bold text-sm mb-4 text-black">
            TABLEAU ANALYTICS & BI INTEGRATION
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6">
            AI-POWERED TABLEAU DASHBOARDS & REPORTING
          </h1>
          <p className="text-2xl mb-8 font-light leading-snug">
            Connect your commerce, marketing, and operations data to Tableau
            with automated modeling, governed metrics, and real-time insights
            that scale decision-making across teams.
          </p>
          <ThemeButton
            variant="primary"
            size="lg"
            href="/contact-form"
            className="bg-[#6b8e23] text-white font-bold rounded-lg shadow-lg border-0 w-[165px] h-[48px] min-w-[165px] min-h-[48px] whitespace-nowrap hover:bg-[#5a7a1e] transition-colors"
          >
            Get in Touch
          </ThemeButton>
        </div>
        {/* Right: Hero Image (from public) */}
        <div className="flex-1 flex justify-center items-center mt-12 lg:mt-0">
          <img loading="lazy" decoding="async"
            src="https://assets.channeliq.ai/trilio-landing/data-integrations/Tableau0.png"
            alt="AI-Powered Tableau Dashboards & Reporting"
            className="max-w-full h-auto rounded-2xl shadow-2xl"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </div>
    </ThemeSection>

    {/* Success Stories Section */}
    <section className="bg-white py-20 px-4 relative z-20 -mt-16 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#21005c] mb-6">
          AI-Driven Tableau Analytics & Performance Insights
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Build executive-ready dashboards, automate refresh and alerting, and
          enable self-serve analytics on trusted, curated data sources. Drive
          decisions with governed KPIs your teams can rely on.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-12 mt-8">
          {/* Left: Image (from public) */}
          <div className="flex-1 flex justify-center">
            <img loading="lazy" decoding="async"
              src="https://assets.channeliq.ai/trilio-landing/data-integrations/Tableau1.jpg"
              alt="Tableau Analytics and Business Results"
              className="rounded-2xl max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
            />
          </div>
          {/* Right: List */}
          <div className="flex-1 w-full">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-bold text-xl text-[#21005c]">
                  Executive dashboards with governed KPIs
                </span>
                <span className="text-3xl text-[#F18E2B] font-bold">+</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-bold text-xl text-[#21005c]">
                  Automated refresh, alerts, and anomaly detection
                </span>
                <span className="text-3xl text-[#F18E2B] font-bold">+</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-bold text-xl text-[#21005c]">
                  Self-serve exploration with curated data sources
                </span>
                <span className="text-3xl text-[#F18E2B] font-bold">+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-xl text-[#21005c]">
                  Pixel-perfect reporting for every stakeholder
                </span>
                <span className="text-3xl text-[#F18E2B] font-bold">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Tableau Partner Section */}
    <section className="bg-white py-20 px-4 relative z-10 mt-8 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Analytics Visualization */}
        <div className="flex-1 flex justify-center">
          <img loading="lazy" decoding="async"
            src="https://assets.channeliq.ai/trilio-landing/data-integrations/Tableau2.png"
            alt="AI-Powered Tableau Data Modeling and Dashboards"
            className="max-w-full h-auto rounded-2xl shadow-2xl"
            style={{ maxHeight: "500px" }}
          />
        </div>
        {/* Right: Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#21005c] mb-6">
            Unlock the Power of Tableau with AI-Driven Data Modeling
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our platform accelerates Tableau delivery with a semantic layer,
            governed metrics, data quality monitoring, and ELT automation. We
            streamline dashboard development so your teams focus on insights —
            not plumbing.
          </p>
          <p className="text-lg text-gray-700">
            From source integration to metric definitions and access control, we
            deliver an enterprise-ready foundation for reliable, scalable
            Tableau analytics across your organization.
          </p>
        </div>
      </div>
    </section>

    {/* BI ROI Section */}
    <section className="bg-white py-20 px-4 relative z-10 -mt-8 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#21005c] mb-6">
            Boosting BI ROI with Embedded Analytics
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Deliver insights where work happens. Embed Tableau dashboards into
            your tools and workflows with row-level security, role-based access,
            and performance tuning that scales with your usage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ThemeButton
              variant="outline"
              size="sm"
              href="/contact-form"
              className="border-[#21005c] text-[#21005c] hover:bg-[#21005c] hover:text-black"
            >
              EXPLORE EMBEDDED ANALYTICS
            </ThemeButton>
            <ThemeButton
              variant="outline"
              size="sm"
              href="/contact-form"
              className="border-[#21005c] text-[#21005c] hover:bg-[#21005c] hover:text-black"
            >
              EXPLORE DATA MODELING
            </ThemeButton>
          </div>
        </div>
        {/* Right: Visualization */}
        <div className="flex-1 flex justify-center">
          <img loading="lazy" decoding="async"
            src="https://assets.channeliq.ai/trilio-landing/data-integrations/Tableau3.png"
            alt="Embedded Analytics and ROI"
            className="max-w-full h-auto rounded-2xl shadow-2xl"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </div>
    </section>

    {/* Analytics Section */}
    <section className="bg-white py-20 px-4 relative z-10 mt-8 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Analytics Visual */}
        <div className="flex-1 flex justify-center">
          <img loading="lazy" decoding="async"
            src="https://assets.channeliq.ai/trilio-landing/data-integrations/Tableau4.png"
            alt="Data-Driven Tableau Insights"
            className="max-w-full h-auto rounded-2xl shadow-2xl"
            style={{ maxHeight: "500px" }}
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex-1">
          <div className="uppercase tracking-widest font-bold text-sm mb-4 text-[#F18E2B]">
            ANALYTICS
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#21005c] mb-6">
            Data-Driven Tableau Insights
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Unify your data pipeline and standardize KPIs to reveal the true
            impact of every channel, campaign, and product. Monitor adoption,
            performance, and business outcomes with Tableau at the center of
            your decision workflow.
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
    <section className="bg-[#F18E2B] py-20 px-4 relative z-10 mt-8 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text and Graphic */}
        <div className="flex-1 text-white">
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
          <div className="bg-[#00467E] rounded-2xl p-8">
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
                className="w-full bg-[#09b2ae] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#078a87] transition-colors"
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

export default Tableau;
