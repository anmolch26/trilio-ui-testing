import React from "react";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import ThemeButton from "@/components/theme/ThemeButton";
import Seo from "@/components/Seo";

const FreshDesk = () => (
  <PageLayout backgroundClass="bg-[#25C16F]">
    <Seo
      title="Freshdesk Analytics & Support Integration | Trilio"
      description="Streamline your Freshdesk support operations with Trilio. Track tickets, agent performance, and customer satisfaction with real-time analytics."
      canonical="/solutions/freshdesk"
    />
    <ThemeSection
      background="white"
      padding="xl"
      className="pt-28 !bg-[#25C16F]"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Left: Text Content */}
        <div className="flex-1 text-left text-white max-w-xl">
          <div className="uppercase tracking-widest font-bold text-sm mb-4 text-white/90">
            FRESHDESK INTEGRATION
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6">
            Connect your support data with Trilio
          </h1>
          <p className="text-2xl mb-8 font-light leading-snug">
            Trilio streams your Freshdesk tickets, conversations, and customer
            data to create unified support analytics. Track SLAs, agent
            performance, and customer satisfaction with real-time insights
            across all channels.
          </p>
          <ThemeButton
            variant="primary"
            size="lg"
            href="/contact-form"
            className="bg-white text-black font-bold rounded-lg shadow-lg border-0 w-[165px] h-[48px] min-w-[165px] min-h-[48px] whitespace-nowrap hover:bg-gray-100 transition-colors"
          >
            Connect Freshdesk
          </ThemeButton>
        </div>
        {/* Right: Hero Image */}
        <div className="flex-1 flex justify-center items-center mt-12 lg:mt-0">
          <img loading="lazy" decoding="async"
            src="https://assets.channeliq.ai/trilio-landing/data-integrations/freshdesk-1.png"
            alt="Freshdesk Integration with Trilio"
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
          What Trilio syncs from Freshdesk
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12">
          We backfill history and listen to webhooks in near real time. Your
          tickets, conversations, and customer interactions are modeled and
          joined with commerce data for comprehensive support analytics.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-12 mt-8">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center">
            <img loading="lazy" decoding="async"
              src="https://assets.channeliq.ai/trilio-landing/data-integrations/freshdesk-2.png"
              alt="Trilio Freshdesk Data Sync"
              className="rounded-2xl max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
            />
          </div>
          {/* Right: Bullets */}
          <div className="flex-1 w-full">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-bold text-xl text-[#21005c]">
                  Tickets, Conversations, Notes & Status Changes
                </span>
                <span className="text-3xl text-[#25C16F] font-bold">+</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-bold text-xl text-[#21005c]">
                  Contacts, Companies, Agents & Groups
                </span>
                <span className="text-3xl text-[#25C16F] font-bold">+</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-bold text-xl text-[#21005c]">
                  SLA Policies, Time Entries & Custom Fields
                </span>
                <span className="text-3xl text-[#25C16F] font-bold">+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-xl text-[#21005c]">
                  Satisfaction Surveys, Products & Categories
                </span>
                <span className="text-3xl text-[#25C16F] font-bold">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* How we use your Freshdesk data */}
    <section className="bg-white py-20 px-4 relative z-10 mt-8 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Visualization */}
        <div className="flex-1 flex justify-center">
          <img loading="lazy" decoding="async"
            src="https://assets.channeliq.ai/trilio-landing/data-integrations/freshdesk-3.png"
            alt="How Trilio models Freshdesk data"
            className="max-w-full h-auto rounded-2xl shadow-2xl"
            style={{ maxHeight: "500px" }}
          />
        </div>
        {/* Right: Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#21005c] mb-6">
            How Trilio uses your Freshdesk data
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We normalize Freshdesk objects and connect them to your commerce and
            customer datasets. Tickets are enriched with order history, customer
            lifetime value, and product context for comprehensive support
            analytics.
          </p>
          <p className="text-lg text-gray-700">
            From ticket resolution to agent performance and customer satisfaction,
            we create unified metrics so support, sales, and success teams work
            from the same customer truth.
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
            Support metrics and KPIs out of the box
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Track first response time, resolution time, CSAT scores, agent
            productivity, and ticket volume trends. Connect support metrics to
            customer lifetime value and revenue impact for complete visibility.
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
              CONNECT FRESHDESK
            </ThemeButton>
          </div>
        </div>
        {/* Right: Visualization */}
        <div className="flex-1 flex justify-center">
          <img loading="lazy" decoding="async"
            src="https://assets.channeliq.ai/trilio-landing/data-integrations/freshdesk-4.png"
            alt="Freshdesk metrics and KPIs"
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
            src="https://assets.channeliq.ai/trilio-landing/data-integrations/freshdesk-5.png"
            alt="Freshdesk Analytics"
            className="max-w-full h-auto rounded-2xl shadow-2xl"
            style={{ maxHeight: "500px" }}
          />
        </div>

        {/* Right: Text */}
        <div className="flex-1">
          <div className="uppercase tracking-widest font-bold text-sm mb-4 text-[#25C16F]">
            ANALYTICS
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#21005c] mb-6">
            Data-driven support and customer insights
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Measure support performance, customer satisfaction, and agent
            productivity alongside revenue impact. Identify at-risk customers and
            opportunities for proactive support using unified customer data.
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
    <section className="bg-[#25C16F] py-20 px-4 relative z-10 mt-8 rounded-t-3xl rounded-b-3xl">
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
          <div className="bg-[#0B5B4B] rounded-2xl p-8">
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
                className="w-full bg-[#25C16F] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#25C16F]/90 transition-colors"
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

export default FreshDesk;
