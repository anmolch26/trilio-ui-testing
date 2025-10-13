import React from "react";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import ThemeButton from "@/components/theme/ThemeButton";
import GoogleAdsInfographic from "@/assests/Google-Ads-Competitor-Analysis-Guide-blog-image.svg";
import GoogleAdsHeroImage from "@/assests/google-ads-marketing.jpg";
import GoogleAdsAnalyticsImage from "@/assests/ChatGPT Image Aug 4, 2025, 07_43_08 PM.webp";
import GoogleAdsROIImage from "@/assests/ChatGPT Image Aug 4, 2025, 07_55_37 PM.webp";
import GoogleAdsInsightsImage from "@/assests/ChatGPT Image Aug 4, 2025, 08_04_47 PM.webp";

const GoogleAds = () => (
  <PageLayout backgroundClass="bg-[#4285F4]">
    <ThemeSection
      background="white"
      padding="xl"
      className="pt-24 !bg-[#4285F4]"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Left: Text Content */}
        <div className="flex-1 text-left text-white max-w-xl">
          <div className="uppercase tracking-widest font-bold text-sm mb-4 text-black">
            GOOGLE ADS ANALYTICS & OPTIMIZATION PLATFORM
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6">
            AI-POWERED GOOGLE ADS MARKETING SOLUTIONS
          </h1>
          <p className="text-2xl mb-8 font-light leading-snug">
            Transform your Google Ads campaigns with AI-driven insights,
            automated bid optimization, and data-driven strategies that maximize
            your advertising ROI.
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
        {/* Right: Google Ads Hero Image */}
        <div className="flex-1 flex justify-center items-center mt-12 lg:mt-0">
          <img
            src={GoogleAdsHeroImage}
            alt="AI-Powered Google Ads Marketing Solutions"
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
          From Data to Disruption: Google Ads Success Stories
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12">
          At Trilio, we empower brands to turn Google Ads' vast advertising
          ecosystem into measurable business results. Our platform unifies your
          campaign data, surfaces actionable insights, and helps you optimize
          every advertising strategy and keyword targeting.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-12 mt-8">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={GoogleAdsInfographic}
              alt="Google Ads Data to Business Results"
              className="rounded-2xl max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
            />
          </div>
          {/* Right: List */}
          <div className="flex-1 w-full">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-bold text-xl text-[#21005c]">
                  Bid Optimization Strategies for Campaign Growth
                </span>
                <span className="text-3xl text-[#7c3aed] font-bold">+</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-bold text-xl text-[#21005c]">
                  Turning Google Ads Trends into Tangible Business Success
                </span>
                <span className="text-3xl text-[#7c3aed] font-bold">+</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-bold text-xl text-[#21005c]">
                  Your business ambitions drive us
                </span>
                <span className="text-3xl text-[#7c3aed] font-bold">+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-xl text-[#21005c]">
                  Turning Google Ads Challenges into Brand Wins
                </span>
                <span className="text-3xl text-[#7c3aed] font-bold">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Google Ads Partner Section */}
    <section className="bg-white py-20 px-4 relative z-10 mt-8 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Analytics Dashboard Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={GoogleAdsAnalyticsImage}
            alt="AI-Powered Google Ads Analytics Dashboard"
            className="max-w-full h-auto rounded-2xl shadow-2xl"
            style={{ maxHeight: "500px" }}
          />
        </div>
        {/* Right: Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#21005c] mb-6">
            Unlock the Power of Google Ads Advertising with AI-Driven Expertise
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            As an innovative AI-powered marketing platform, Trilio.ai joins a
            select group of agencies with exclusive access to Google's advanced
            advertising tools and platform support. Our comprehensive AI-driven
            approach integrates PPC optimization, campaign management, and
            performance analytics to deliver seamless Google Ads campaigns.
          </p>
          <p className="text-lg text-gray-700">
            From setting up your Google Ads account to managing AI-optimized
            paid media and intelligent campaign strategies, we provide a
            comprehensive, data-driven approach that delivers immediate results
            and long-term growth. Trilio.ai's unique combination of AI
            technology and exclusive Google access positions us as a leader in
            the Google Ads advertising space.
          </p>
        </div>
      </div>
    </section>

    {/* Boosting Social ROI Section */}
    <section className="bg-white py-20 px-4 relative z-10 -mt-8 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#21005c] mb-6">
            Boosting Google Ads ROI with Creative & Advertising
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            As an innovative AI-powered marketing platform, Trilio delivers
            quick-turn performance analysis, iterate creative, and drive ROI
            through scalable advertising campaigns that lead to brand lift and
            conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ThemeButton
              variant="outline"
              size="sm"
              href="/contact-form"
              className="border-[#21005c] text-[#21005c] hover:bg-[#21005c] hover:text-black"
            >
              EXPLORE PERFORMANCE CREATIVE
            </ThemeButton>
            <ThemeButton
              variant="outline"
              size="sm"
              href="/contact-form"
              className="border-[#21005c] text-[#21005c] hover:bg-[#21005c] hover:text-black"
            >
              EXPLORE ADVERTISING STRATEGIES
            </ThemeButton>
          </div>
        </div>
        {/* Right: Google Ads ROI Infographic */}
        <div className="flex-1 flex justify-center">
          <img
            src={GoogleAdsROIImage}
            alt="Google Ads ROI Growth & Advertising Performance"
            className="max-w-full h-auto rounded-2xl shadow-2xl"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </div>
    </section>

    {/* Analytics Section */}
    <section className="bg-white py-20 px-4 relative z-10 mt-8 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: AI-Powered Analytics Visual */}
        <div className="flex-1 flex justify-center">
          <img
            src={GoogleAdsInsightsImage}
            alt="AI-Powered Google Ads Marketing Analytics Dashboard"
            className="max-w-full h-auto rounded-2xl shadow-2xl"
            style={{ maxHeight: "500px" }}
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex-1">
          <div className="uppercase tracking-widest font-bold text-sm mb-4 text-[#7c3aed]">
            ANALYTICS
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#21005c] mb-6">
            Data-Driven Google Ads Marketing Insights
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Transform your Google Ads marketing with AI-powered analytics that
            reveal the true impact of every campaign. Our advanced platform
            tracks clicks, conversion rates, and ROI across all your Google Ads
            activities, helping you identify high-performing keywords and
            optimize your ad spend. Get real-time insights into customer
            behavior, search trends, and competitor analysis to stay ahead of
            the curve.
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
    <section className="bg-[#4ED7F1] py-20 px-4 relative z-10 mt-8 rounded-t-3xl rounded-b-3xl">
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
          <div className="bg-[#4284f3] rounded-2xl p-8">
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

export default GoogleAds;
