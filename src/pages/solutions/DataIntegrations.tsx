import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import ThemeButton from "@/components/theme/ThemeButton";
import ThemeCard from "@/components/theme/ThemeCard";
import Logo5 from "@/assests/Remove background project (5).png";
import Logo6 from "@/assests/Remove background project (6).png";
import Logo7 from "@/assests/Remove background project (7).png";
import Logo8 from "@/assests/Remove background project (8).png";
import Logo9 from "@/assests/Remove background project (9).png";
import Logo10 from "@/assests/Remove background project (10).png";
import Logo11 from "@/assests/Remove background project (11).png";
import Logo12 from "@/assests/Remove background project (12).png";
import Logo13 from "@/assests/Remove background project (13).png";
import Icon11 from "@/assests/Remove background project (11).png";
import Icon13 from "@/assests/Remove background project (13).png";
import Icon10 from "@/assests/Remove background project (10).png";
import Logo3 from "@/assests/Remove background project (3).png";
import TikTokImage from "@/assests/tik-tok.png";

const DataIntegrations = () => {
  const integrations = [
    {
      name: "Amazon Ads",
      description: "Orders, Products, Customers",
      logo: Logo5,
    },
    {
      name: "Reddit Ads",
      description: "Sales, Inventory, Reviews",
      logo: Logo6,
    },
    { name: "Meta Ads", description: "Ad Spend, ROAS, Reach", logo: Logo7 },
    {
      name: "Mailchimp",
      description: "Campaigns, Keywords, CPC",
      logo: Logo8,
    },
    { name: "GA4", description: "Email Metrics, Segments", logo: Logo9 },
    {
      name: "Google Ads",
      description: "Marketplace Sales, Fees",
      logo: Logo10,
    },
    { name: "Shopify", description: "Video Performance, CPM", logo: Logo11 },
    { name: "Walmart", description: "Pin Analytics, Traffic", logo: Logo12 },
    { name: "Amazon", description: "Payments, Subscriptions", logo: Logo13 },
    { name: "PayPal", description: "Transactions, Disputes", logo: "💰" },
    { name: "WooCommerce", description: "Store Data, Analytics", logo: Logo3 },
    { name: "TikTok", description: "Sales, Customer Data", logo: TikTokImage },
  ];

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
    <PageLayout backgroundClass="bg-white">
      {/* Hero Section */}
      <ThemeSection background="gradient" padding="xl" className="pt-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="pulse-chip mx-auto mb-6">
            <span>Data Integrations</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Connect All Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Commerce Data
            </span>{" "}
            in Minutes
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            Trilio integrates with 20+ platforms including Amazon, Shopify,
            Meta, Google Ads, Klaviyo, and more.
          </p>
          <div className="glass-card p-8 shadow-elegant max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-4 animate-pulse">
              <div className="text-4xl">🛍️</div>
              <ArrowRight className="text-blue-500" />
              <div className="text-4xl">📦</div>
              <ArrowRight className="text-blue-500" />
              <div className="text-4xl">📊</div>
              <ArrowRight className="text-blue-500" />
              <div className="text-2xl font-bold text-purple-600">Trilio</div>
            </div>
          </div>
        </div>
      </ThemeSection>

      {/* Integration Grid */}
      <ThemeSection background="white" padding="xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12 text-black">
            Supported Integrations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={integration.name}
                className="glass-card p-6 text-center hover-lift transition-all duration-300"
              >
                {integration.name === "TikTok" ? (
                  <Link to="/solutions/data-integrations/TikTok">
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      <img
                        src={integration.logo}
                        alt={integration.name + " logo"}
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                    <h3 className="font-semibold mb-2 text-black">
                      {integration.name}
                    </h3>
                  </Link>
                ) : integration.name === "Amazon" ? (
                  <Link to="/solutions/data-integrations/Amazon">
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      <img
                        src={integration.logo}
                        alt={integration.name + " logo"}
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                    <h3 className="font-semibold mb-2 text-black">
                      {integration.name}
                    </h3>
                  </Link>
                ) : (
                  <>
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      {integration.name === "WooCommerce" || index < 9 ? (
                        <img
                          src={integration.logo}
                          alt={integration.name + " logo"}
                          className="h-16 w-16 object-contain"
                        />
                      ) : (
                        <span className="text-4xl">{integration.logo}</span>
                      )}
                    </div>
                    <h3 className="font-semibold mb-2 text-black">
                      {integration.name}
                    </h3>
                  </>
                )}
                <p className="text-sm text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ThemeSection>

      {/* How It Works */}
      <ThemeSection background="gray" padding="xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12 text-black">
            How Integration Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
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
          <h2 className="section-title mb-8 text-black">
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
            showArrow={true}
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
            Start integrating your commerce platforms today and unlock powerful
            insights.
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
  );
};

export default DataIntegrations;
