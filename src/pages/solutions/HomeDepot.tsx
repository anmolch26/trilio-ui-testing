import React from "react";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import ThemeButton from "@/components/theme/ThemeButton";
import RouteCanonical from "@/components/RouteCanonical";

// The Home Depot brand-inspired palette
// Primary: #F96302 (orange). Supporting deep tone: #C74E00

const HomeDepot = () => (
  <PageLayout backgroundClass="bg-[#F96302]">
    <RouteCanonical path="/solutions/homedepot" />
    <ThemeSection
      background="white"
      padding="xl"
      className="pt-28 !bg-[#F96302]"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Left: Text Content */}
        <div className="flex-1 text-left text-white max-w-xl">
          <div className="uppercase tracking-widest font-bold text-sm mb-4 text-white/90">
            HOME DEPOT RETAIL MEDIA & ANALYTICS PLATFORM
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6">
            AI-POWERED HOME DEPOT PERFORMANCE
          </h1>
          <p className="text-2xl mb-8 font-light leading-snug">
            Grow your Home Depot channel with AI-driven insights, automated
            retail media optimization, and real-time analytics that improve
            product discovery, conversion, and contribution margin.
          </p>
          <ThemeButton
            variant="primary"
            size="lg"
            href="/contact-form"
            className="bg-white text-[#F96302] font-bold rounded-lg shadow-lg border-0 w-[165px] h-[48px] min-w-[165px] min-h-[48px] whitespace-nowrap hover:bg-[#f3f3f3] transition-colors"
          >
            Get in Touch
          </ThemeButton>
        </div>
        {/* Right: Hero Image */}
        <div className="flex-1 flex justify-center items-center mt-12 lg:mt-0">
          <img loading="lazy" decoding="async"
            src="https://assets.channeliq.ai/trilio-landing/data-integrations/Home-Depot0.png"
            alt="AI-Powered Home Depot Performance"
            className="max-w-full h-auto rounded-2xl shadow-2xl"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </div>
    </ThemeSection>

    {/* Value Props Section */}
    <section className="bg-white py-20 px-4 relative z-20 -mt-16 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#C74E00] mb-6 text-center">
          AI-Driven Home Depot Analytics & Retail Media
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Turn Home Depot marketplace data into action. We automate retail media
          optimization, provide real-time performance analytics, and deliver
          predictive insights that grow sales and profitability.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-12 mt-8">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center">
            <img loading="lazy" decoding="async"
              src="https://assets.channeliq.ai/trilio-landing/data-integrations/Home-Depot-1.png"
              alt="Home Depot Data to Business Results"
              className="rounded-2xl max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
            />
          </div>
          {/* Right: List */}
          <div className="flex-1 w-full">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-bold text-xl text-[#C74E00]">
                  Retail Media Optimization for Growth
                </span>
                <span className="text-3xl text-[#F96302] font-bold">+</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-bold text-xl text-[#C74E00]">
                  Turn Home Depot Trends into Results
                </span>
                <span className="text-3xl text-[#F96302] font-bold">+</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-bold text-xl text-[#C74E00]">
                  Your category ambitions drive us
                </span>
                <span className="text-3xl text-[#F96302] font-bold">+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-xl text-[#C74E00]">
                  Turning Marketplace Challenges into Wins
                </span>
                <span className="text-3xl text-[#F96302] font-bold">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Analytics Overview Section */}
    <section className="bg-white py-20 px-4 relative z-10 mt-8 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Analytics Dashboard Image */}
        <div className="flex-1 flex justify-center">
          <img loading="lazy" decoding="async"
            src="https://assets.channeliq.ai/trilio-landing/data-integrations/Home-depot2.png"
            alt="AI-Powered Home Depot Analytics Dashboard"
            className="max-w-full h-auto rounded-2xl shadow-2xl"
            style={{ maxHeight: "500px" }}
          />
        </div>
        {/* Right: Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#C74E00] mb-6">
            AI-Powered Analytics & Campaign Optimization
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our AI platform transforms Home Depot retail media with intelligent
            automation. We deliver real-time bid optimization, budget pacing,
            and predictive analytics that maximize ROI while reducing manual
            work.
          </p>
          <p className="text-lg text-gray-700">
            From query intelligence and audience targeting to creative testing
            and sales forecasting, our data-driven approach powers measurable
            results and scalable growth for your Home Depot channel.
          </p>
        </div>
      </div>
    </section>

    {/* Creative + ROI Section */}
    <section className="bg-white py-20 px-4 relative z-10 -mt-8 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#C74E00] mb-6">
            Boosting Home Depot ROI with Creative & Advertising
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Trilio enables quick-turn performance analysis, creative iteration,
            and scalable retail media campaigns that drive brand lift and
            conversions across Home Depot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ThemeButton
              variant="outline"
              size="sm"
              href="/contact-form"
              className="border-[#C74E00] text-[#C74E00] hover:bg-[#C74E00] hover:text-white"
            >
              EXPLORE PERFORMANCE CREATIVE
            </ThemeButton>
            <ThemeButton
              variant="outline"
              size="sm"
              href="/contact-form"
              className="border-[#C74E00] text-[#C74E00] hover:bg-[#C74E00] hover:text-white"
            >
              EXPLORE ADVERTISING STRATEGIES
            </ThemeButton>
          </div>
        </div>
        {/* Right: ROI Infographic */}
        <div className="flex-1 flex justify-center">
          <img loading="lazy" decoding="async"
            src="https://assets.channeliq.ai/trilio-landing/data-integrations/Home-Depot3.png"
            alt="Home Depot ROI Growth & Advertising Performance"
            className="max-w-full h-auto rounded-2xl shadow-2xl"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </div>
    </section>

    {/* Contact Form Section */}
    <section className="bg-[#FFE9DB] py-20 px-4 relative z-10 mt-8 rounded-t-3xl rounded-b-3xl">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Illustration */}
        <div className="flex-1 text-[#C74E00]">
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
          <div className="bg-[#F96302] rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Full Name*
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Company Name*
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Website
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Monthly E-Commerce Revenue
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black">
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
                className="w-full bg-white text-[#F96302] font-bold py-4 px-6 rounded-lg hover:bg-[#f3f3f3] transition-colors"
              >
                Submit Demo Request
              </button>
              <p className="text-white/80 text-xs text-center">
                *By submitting your Email Address, you are agreeing to all
                conditions of our
                <a
                  href="/privacy-policy"
                  className="underline ml-1 hover:text-white"
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

export default HomeDepot;
