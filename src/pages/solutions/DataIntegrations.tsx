import React, { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import ThemeButton from "@/components/theme/ThemeButton";
import ThemeCard from "@/components/theme/ThemeCard";
import TikTokImage from "@/assests/TikTokImage.png";
import RouteCanonical from "@/components/RouteCanonical";

const DataIntegrations = () => {
  const integrations = [
   
    
    {
      name: "Shopify",
      description: "Storefront, Orders, Customers",
      logo: "https://assets.channeliq.ai/sidebar/shopify-bag-logo.png",
      path: "/solutions/shopify",
      categories: ["Most Popular", "Ecommerce"],
    },
    {
      name: "Amazon",
      description: "Marketplace, Orders, Fees",
      logo: "https://assets.channeliq.ai/sidebar/amazon-logo.png",
      path: "/solutions/amazon",
      categories: ["Most Popular", "Ecommerce"],
    },
    {
      name: "Walmart",
      description: "Orders, Catalog, Fees",
      logo: "https://assets.channeliq.ai/sidebar/walmart-sidebar-logo.png",
      path: "/solutions/walmart",
      categories: ["Ecommerce"],
    },
    {
      name: "Best Buy",
      description: "Transactions, Disputes",
      logo: "https://assets.channeliq.ai/sidebar/bestbuy-sidebar-logo.png",
      path: "/solutions/bestbuy",
      categories: ["Ecommerce"],
    },
    {
      name: "Home Depot",
      description: "Retail Media, Marketplace, Analytics",
      logo: "https://assets.channeliq.ai/sidebar/home-depot-sidebar-logo.png",
      path: "/solutions/homedepot",
      categories: ["Ecommerce"],
    },
    {
      name: "Amazon Ads",
      description: "Sponsored Ads, Conversions",
      logo: "https://assets.channeliq.ai/sidebar/amazon-ads-sidebar.png",
      path: "/solutions/amazon-ads",
      categories: ["Advertising"],
    },
    {
      name: "Google Ads",
      description: "Campaigns, Spend, Conversions",
      logo: "https://assets.channeliq.ai/sidebar/google-ad-sidebar-logo.png",
      path: "/solutions/google-ads",
      categories: ["Most Popular", "Advertising"],
    },
    {
      name: "Reddit Ads",
      description: "Campaigns, CPC, Conversions",
      logo: "https://assets.channeliq.ai/sidebar/reddit-sidebar-logo.png",
      path: "/solutions/reddit-ads",
      categories: ["Advertising"],
    },
    {
      name: "Meta Ads",
      description: "Ad Spend, ROAS, Reach",
      logo: "https://assets.channeliq.ai/sidebar/meta-sidebar-logo.png",
      path: "/solutions/meta",
      categories: ["Advertising"],
    },
    {
      name: "Klaviyo",
      description: "Email, SMS, Segments",
      logo: "https://assets.channeliq.ai/sidebar/klaviyo-logo.png",
      path: "/solutions/klaviyo",
      categories: ["Email / Marketing Automation"],
    },
    {
      name: "Mailchimp",
      description: "Campaigns, Audiences",
      logo: "https://assets.channeliq.ai/sidebar/mailchimp-sidebar-logo.png",
      path: "/solutions/mailchimp",
      categories: ["Email / Marketing Automation"],
    },
    {
      name: "GA4",
      description: "Web Analytics, Conversions",
      logo: "https://assets.channeliq.ai/sidebar/ga4-bar-logo.png",
      path: "/solutions/ga4",
      categories: ["Analytics"],
    },
    {
      name: "TikTok",
      description: "Sales, Customer Data",
      logo: "https://assets.channeliq.ai/sidebar/tiktok-sidebar.png",
      path: "/solutions/tiktok",
      categories: ["Most Popular", "Ecommerce"],
    },
    
    {
      name: "eBay",
      description: "Marketplace, Retail Media, Analytics",
      logo: "https://assets.channeliq.ai/sidebar/Ebay-Sidebar.png",
      path: "/solutions/ebay",
      categories: ["Ecommerce"],
    },
   
    {
      name: "WooCommerce",
      description: "Store Data, Analytics",
      logo: "https://assets.channeliq.ai/sidebar/woocommerce-sidebar.png",
      path: "/solutions/woocommerce",
      categories: ["Ecommerce"],
    },
   
    {
      name: "Etsy",
      description: "Marketplace, Retail Media, Analytics",
      logo: "https://assets.channeliq.ai/sidebar/Etsy-Sidebar.png",
      path: "/solutions/etsy",
      categories: ["Ecommerce"],
    },
    {
      name: "Tableau",
      description: "BI & Dashboards",
      logo: "https://assets.channeliq.ai/sidebar/tableau-sidebar.png",
      path: "/solutions/tableau",
      categories: ["Business Intelligence"],
    },
    {
      name: "Rakuten",
      description: "Marketplace, Orders, Media",
      logo: "https://assets.channeliq.ai/sidebar/rakuten(1).png",
      path: "/solutions/rakuten",
      categories: ["Other"],
    },
    {
      name: "Target",
      description: "Retail Media, Orders, Analytics",
      logo: "https://assets.channeliq.ai/sidebar/target.png",
      path: "/solutions/target",
      categories: ["Advertising"],
    },
    {
      name: "Stripe",
      description: "Payments, Billing, Revenue",
      logo: "https://assets.channeliq.ai/sidebar/Stripe-Sidebar.png",
      path: "/solutions/stripe",
      categories: ["Payments"],
    },
    {
      name: "Square",
      description: "POS, Payments, Invoicing",
      logo: "https://assets.channeliq.ai/sidebar/Square-Sidebar.png",
      path: "/solutions/square",
      categories: ["Payments"],
    },
   
    {
      name: "Zendesk",
      description: "Support, CX, Help Center",
      logo: "https://assets.channeliq.ai/sidebar/Zendesk-Sidebar.png",
      path: "/solutions/zendesk",
      categories: ["Customer Support"],
    },
    {
      name: "Freshdesk",
      description: "Support, SLAs, Knowledge",
      logo: "https://assets.channeliq.ai/sidebar/FreshDesk-Sidebar.png",
      path: "/solutions/freshdesk",
      categories: ["Customer Support"],
    },
    {
      name: "ShipStation",
      description: "Shipping, Labels, Tracking",
      logo: "https://assets.channeliq.ai/sidebar/ShipStation-Sidebar.png",
      path: "/solutions/shipstation",
      categories: ["Fulfilment / 3PL"],
    },
    {
      name: "Easyship",
      description: "Rates, Duties/Taxes, Automation",
      logo: "https://assets.channeliq.ai/sidebar/easyship-Sidebar.png",
      path: "/solutions/easyship",
      categories: ["Fulfilment / 3PL"],
    },
    {
      name: "Smile.io",
      description: "Loyalty, VIP Tiers, Referrals",
      logo: "https://assets.channeliq.ai/sidebar/Smile-Sidebar.png",
      path: "/solutions/smile-io",
      categories: ["Loyalty / Reviews / Referrals"],
    },
    {
      name: "Power BI",
      description: "Dashboards, Reports, DAX",
      logo: "https://assets.channeliq.ai/sidebar/PowerBI-Sidebar.png",
      path: "/solutions/powerbi",
      categories: ["Business Intelligence"],
    },
    {
      name: "Akeneo",
      description: "PIM, PX, Syndication",
      logo: "https://assets.channeliq.ai/sidebar/Akeneo-Sidebar.png",
      path: "/solutions/akeneo",
      categories: ["Analytics", "Operations"],
    },
    
    
  ];

  const categories = [
    "All",
    "Most Popular",
    "Ecommerce",
    "Advertising",
    "Analytics",
    "Business Intelligence",
    "Payments",
    "Email / Marketing Automation",
    "Customer Support",
    "Fulfilment / 3PL",
    "Loyalty / Reviews / Referrals",
    "Operations",
    "Other",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const steps = [
    {
      icon: (
        <span className="text-4xl" role="img" aria-label="Choose a Source">
          🛍️
        </span>
      ),
      title: "Choose a Source",
      description:
        "Select from 20+ pre-built integrations or connect custom data sources",
    },
    {
      icon: (
        <span className="text-4xl" role="img" aria-label="Authenticate">
          🔒
        </span>
      ),
      title: "Authenticate",
      description: "Secure OAuth connection with enterprise-grade encryption",
    },
    {
      icon: (
        <span className="text-4xl" role="img" aria-label="Start Syncing">
          🔄
        </span>
      ),
      title: "Start Syncing",
      description:
        "Data flows automatically with real-time updates and historical backfill",
    },
  ];

  return (
    <>
      <PageLayout backgroundClass="bg-white">
    
        {/* Hero Section (clean) */}
        <ThemeSection background="gradient" padding="sm" className="pt-36 pb-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl lg:text-6xl leading-[1.3] pb-2 overflow-visible font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
              Integrations
            </h1>
            <div className="mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="sm:mr-4">
                <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-1">
                  Connect All Your Commerce Data in Minutes
                </p>
                <p className="text-lg text-gray-600 max-w-3xl mb-0">
                  Trilio integrates with 40+ platforms including Amazon,
                  Shopify, Meta, Google Ads, Klaviyo, and more.
                </p>
              </div>
              <ThemeButton
                variant="primary"
                size="sm"
                href="/integration-request"
                showArrow
                className="flex-shrink-0"
              >
                Request Integration
              </ThemeButton>
            </div>
          </div>
        </ThemeSection>

        {/* Search + Categories + Grid */}
        <ThemeSection background="white" padding="sm" className="pt-8">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search integrations"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-28 py-3 border border-gray-200 rounded-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-blue-500"
                />
                {/* Removed inline clear (X) button for a cleaner input */}
              </div>
              <button
                onClick={() => setSearchTerm("")}
                className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Clear
              </button>
            </div>

            <div className="flex gap-8">
              {/* Categories Sidebar */}
              <aside className="w-64 hidden md:block">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                  Categories
                </h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === cat
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </aside>

              {/* Integrations Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {integrations
                    .filter((i) =>
                      selectedCategory === "All"
                        ? true
                        : i.categories?.includes(selectedCategory)
                    )
                    .filter((i) =>
                      i.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((integration) => {
                      const CardInner = (
                        <div className="group p-6 text-center rounded-xl border border-gray-200 bg-white transition-all duration-200 ease-out hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.01]">
                          <div className="mb-4 flex justify-center transition-transform duration-200 ease-out group-hover:scale-110">
                            {typeof integration.logo === "string" &&
                            integration.logo.startsWith("💰") ? (
                              <span className="text-4xl">
                                {integration.logo}
                              </span>
                            ) : (
                              <img loading="lazy" decoding="async"
                                src={integration.logo}
                                alt={integration.name + " logo"}
                                className="h-12 w-12 object-contain drop-shadow-sm"
                              />
                            )}
                          </div>
                          <h3 className="font-medium text-gray-900 transition-colors duration-200 group-hover:text-gray-950">
                            {integration.name}
                          </h3>
                          {/* Cleaner design: omit description */}
                        </div>
                      );

                      return (
                        <div key={integration.name}>
                          {integration.path ? (
                            <Link to={integration.path}>{CardInner}</Link>
                          ) : (
                            CardInner
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </ThemeSection>

        {/* How It Works */}
        <ThemeSection background="gray" padding="xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              How Integration Works
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step) => (
                <ThemeCard
                  key={step.title}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  variant="feature"
                />
              ))}
            </div>
          </div>
        </ThemeSection>

        {/* Advanced Integration Support */}
        <ThemeSection background="white" padding="lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Advanced Integration Support
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <ThemeCard
                title="CSV/Manual Uploads"
                description="Import historical data from spreadsheets"
                className="text-center"
              >
                <div className="text-3xl mb-4">📄</div>
              </ThemeCard>
              <ThemeCard
                title="SFTP Connections"
                description="Secure file transfer protocols"
                className="text-center"
              >
                <div className="text-3xl mb-4">🔐</div>
              </ThemeCard>
              <ThemeCard
                title="Custom Pipelines"
                description="Bespoke data ingestion solutions"
                className="text-center"
              >
                <div className="text-3xl mb-4">⚙️</div>
              </ThemeCard>
            </div>
            <ThemeButton
              variant="primary"
              size="lg"
              href="/contact-form"
              showArrow
            >
              See All Integrations
            </ThemeButton>
          </div>
        </ThemeSection>

        {/* CTA Section */}
        <ThemeSection background="orange" padding="lg">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Connect Your Data?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start integrating your commerce platforms today and unlock
              powerful insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ThemeButton variant="secondary" size="lg" href="/contact-form">
                Start Free Trial
              </ThemeButton>
              <ThemeButton
                variant="outline"
                size="lg"
                href="/contact-form"
                className="border-white text-white hover:bg-white hover:text-orange-600"
              >
                Schedule Demo
              </ThemeButton>
            </div>
          </div>
        </ThemeSection>
      </PageLayout>

      <style>{`
        .orbital-container {
          position: relative;
          width: 300px;
          height: 300px;
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        .central-point {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
        }

        .orbital-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 80px;
          height: 80px;
          transform-style: preserve-3d;
          animation: orbit 8s linear infinite;
        }

        .orbital-icon-1 {
          animation-delay: 0s;
        }

        .orbital-icon-2 {
          animation-delay: -2s;
        }

        .orbital-icon-3 {
          animation-delay: -4s;
        }

        .orbital-icon-4 {
          animation-delay: -6s;
        }

        @keyframes orbit {
          0% {
            transform: 
              translate(-50%, -50%) 
              rotateY(0deg) 
              translateZ(160px) 
              rotateX(0deg);
          }
          100% {
            transform: 
              translate(-50%, -50%) 
              rotateY(360deg) 
              translateZ(160px) 
              rotateX(0deg);
          }
        }

        .orbital-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        }
      `}</style>
    </>
  );
};

export default DataIntegrations;
