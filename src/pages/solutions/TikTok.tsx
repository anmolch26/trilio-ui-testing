import React from "react";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import ThemeButton from "@/components/theme/ThemeButton";
import TikTokLogo from "@/assests/vecteezy_tiktok-white-wordmark-logo-icon-tiktok-app-transparent_65386727.png";
import TikTokImage from "@/assests/tik-tok.png";
const TikTokShopImage = "https://your-s3-bucket-url/Remove background project (3).png";
import TikTokInfographic from "@/assests/ChatGPT Image Jul 28, 2025, 04_53_41 PM.webp";
import TikTokShopVisual from "@/assests/ChatGPT Image Jul 28, 2025, 05_14_28 PM.webp";
import TikTokSocialROI from "@/assests/ChatGPT Image Jul 28, 2025, 05_25_08 PM.webp";
import TikTokHeroImage from "@/assests/ChatGPT Image Jul 28, 2025, 07_22_37 PM.webp";
import TikTokAnalytics from "@/assests/ChatGPT Image Jul 28, 2025, 08_04_45 PM.webp";
import RouteCanonical from "@/components/RouteCanonical";

const TikTok = () => (
  <PageLayout backgroundClass="bg-[#21005c]">
    <RouteCanonical path="/solutions/tiktok" />
    <ThemeSection
      background="white"
      padding="xl"
      className="pt-28 !bg-[#21005c]"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Left: Text Content */}
        <div className="flex-1 text-left text-white max-w-xl">
          <div className="uppercase tracking-widest font-bold text-sm mb-4 text-[#b39ddb]">
            Turn Views Into Value
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6">TIKTOK</h1>
          <p className="text-2xl mb-8 font-light leading-snug">
            Harness TikTok’s explosive growth and unique engagement capabilities
            to unlock your brand’s full-funnel performance potential.
          </p>
          <ThemeButton
            variant="primary"
            size="lg"
            href="/contact-form"
            className="bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-500 text-black font-bold rounded-lg shadow-lg border-0 w-[165px] h-[48px] min-w-[165px] min-h-[48px] whitespace-nowrap"
          >
            Get in Touch
          </ThemeButton>
        </div>
        {/* Right: TikTok Hero Image */}
        <div className="flex-1 flex justify-center items-center mt-12 lg:mt-0">
          <img loading="lazy" decoding="async"
            src={TikTokHeroImage}
            alt="TikTok Success and Growth"
            className="w-[400px] h-[400px] object-contain border-0"
          />
        </div>
      </div>
    </ThemeSection>
    {/* Viral Victories Section */}
    <section className="bg-white py-20 px-4 relative z-20 -mt-16 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#21005c] mb-6">
          From Data to Disruption: TikTok Success Stories
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12">
          At Trilio, we empower brands to turn TikTok’s fast-moving trends into
          measurable business results. Our platform unifies your campaign data,
          surfaces actionable insights, and helps you optimize every influencer
          collaboration and creative strategy. With Trilio, you don’t just keep
          up with TikTok’s evolution—you lead it. Unlock full-funnel growth,
          from awareness to conversion, with our AI-driven analytics and human
          expertise guiding every step.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-12 mt-8">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center">
            <img loading="lazy" decoding="async"
              src={TikTokInfographic}
              alt="TikTok Success Stories Infographic"
              className="rounded-2xl shadow-xl max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>
          {/* Right: List */}
          <div className="flex-1 w-full">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-bold text-xl text-[#21005c]">
                  Budget-Boosting Strategies for Brand Growth
                </span>
                <span className="text-3xl text-[#7c3aed] font-bold">+</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-bold text-xl text-[#21005c]">
                  Turning TikTok Trends into Tangible Business Success
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
                  Turning TikTok Challenges into Brand Wins
                </span>
                <span className="text-3xl text-[#7c3aed] font-bold">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* TikTok Shop Partner Section */}
    <section className="bg-white py-20 px-4 relative z-10 mt-8 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center">
          <img loading="lazy" decoding="async"
            src={TikTokShopVisual}
            alt="TikTok Shop with AI Integration"
            className="rounded-2xl shadow-xl max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
          />
        </div>
        {/* Right: Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#21005c] mb-6">
            Unlock the Power of TikTok Shops with AI-Driven Expertise
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            As an innovative AI-powered marketing platform, Trilio.ai joins a
            select group of agencies with exclusive access to TikTok's alphas,
            betas, and advanced platform support. Our comprehensive AI-driven
            approach integrates commerce optimization, social media
            intelligence, affiliate management, and influencer analytics to
            deliver seamless TikTok Shop campaigns in lockstep with your broader
            brand and business strategies.
          </p>
          <p className="text-lg text-gray-700">
            From setting up your TikTok Shop to managing AI-optimized paid media
            and intelligent affiliate networks, we provide a comprehensive,
            data-driven approach that delivers immediate results and long-term
            growth. Trilio.ai's unique combination of AI technology and
            exclusive TikTok access positions us as a leader in the TikTok
            commerce space.
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
            Boosting Social ROI with Creative & Influencer
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            As an officially certified TikTok agency partner, Trilio delivers
            quick-turn performance analysis, iterate creative, and drive ROI
            through scalable influencer marketing campaigns that lead to brand
            lift and conversions.
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
              EXPLORE INFLUENCER MARKETING
            </ThemeButton>
          </div>
        </div>
        {/* Right: TikTok Marketing Partner Visual */}
        <div className="flex-1 flex justify-center">
          <img loading="lazy" decoding="async"
            src={TikTokSocialROI}
            alt="TikTok Social ROI Illustration"
            className="rounded-2xl max-w-[330px] md:max-w-[450px] lg:max-w-[400px]"
          />
        </div>
      </div>
    </section>

    {/* Measurement Section */}
    <section className="bg-white py-20 px-4 relative z-10 mt-8 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Analytics Infographic */}
        <div className="flex-1 flex justify-center">
          <img loading="lazy" decoding="async"
            src={TikTokAnalytics}
            alt="TikTok Analytics and Business Results"
            className="rounded-2xl max-w-[250px] md:max-w-[300px] lg:max-w-[350px]"
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex-1">
          <div className="uppercase tracking-widest font-bold text-sm mb-4 text-[#7c3aed]">
            ANALYTICS
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#21005c] mb-6">
            Data-Driven TikTok Marketing Insights
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Transform your TikTok marketing with AI-powered analytics that
            reveal the true impact of every campaign. Our advanced platform
            tracks engagement, conversion rates, and ROI across all your TikTok
            activities, helping you identify high-performing content and
            optimize your ad spend. Get real-time insights into audience
            behavior, trending hashtags, and competitor analysis to stay ahead
            of the curve.
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
    <section className="bg-[#6b2def] py-20 px-4 relative z-10 mt-8 rounded-t-3xl rounded-b-3xl">
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
          <div className="bg-[#21005e] rounded-2xl p-8">
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
                className="w-full bg-green-500 text-white font-bold py-4 px-6 rounded-lg hover:bg-green-600 transition-colors"
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

export default TikTok;
