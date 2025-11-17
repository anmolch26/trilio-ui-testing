import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/NavBar";
import LegacyFooter from "@/components/LegacyFooter";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import RouteCanonical from "@/components/RouteCanonical";
import {
  Code,
  Copy,
  ExternalLink,
  Play,
  Book,
  Key,
  Zap,
  Webhook,
  Github,
  MessageCircle,
  Database,
  ShoppingCart,
  Mail,
  BarChart3,
  ChevronDown,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const DeveloperDocs = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [showIntegrationsDropdown, setShowIntegrationsDropdown] =
    useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle URL-based navigation
  useEffect(() => {
    const path = location.pathname;
    if (path.includes("/shopify")) {
      setActiveSection("shopify");
    } else if (path.includes("/klaviyo")) {
      setActiveSection("klaviyo");
    } else if (path.includes("/amazon")) {
      setActiveSection("amazon");
    } else if (path.includes("/google-analytics")) {
      setActiveSection("google-analytics");
    } else if (path.includes("/google-ads")) {
      setActiveSection("google-ads");
    } else if (path.includes("/amazon-ads")) {
      setActiveSection("amazon-ads");
    } else if (path.includes("/meta-ads")) {
      setActiveSection("meta-ads");
    }
  }, [location.pathname]);

  const sidebarSections = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: <Book className="h-4 w-4" />,
    },
    {
      id: "integrations",
      title: "Integrations",
      icon: <Database className="h-4 w-4" />,
      hasDropdown: true,
    },
    {
      id: "authentication",
      title: "Authentication",
      icon: <Key className="h-4 w-4" />,
    },
    {
      id: "api-reference",
      title: "API Reference",
      icon: <Code className="h-4 w-4" />,
    },
    {
      id: "webhooks",
      title: "Webhooks",
      icon: <Webhook className="h-4 w-4" />,
    },
    {
      id: "rate-limits",
      title: "Rate Limits",
      icon: <Zap className="h-4 w-4" />,
    },
    {
      id: "sdk-libraries",
      title: "SDK Libraries",
      icon: <Github className="h-4 w-4" />,
    },
  ];

  const integrations = [
    {
      id: "shopify",
      name: "Shopify",
      icon: <ShoppingCart className="h-4 w-4" />,
    },
    {
      id: "klaviyo",
      name: "Klaviyo",
      icon: <Mail className="h-4 w-4" />,
    },
    {
      id: "amazon",
      name: "Amazon",
      icon: <ShoppingCart className="h-4 w-4" />,
    },
    {
      id: "google-analytics",
      name: "Google Analytics",
      icon: <BarChart3 className="h-4 w-4" />,
    },
    {
      id: "google-ads",
      name: "Google Ads",
      icon: <BarChart3 className="h-4 w-4" />,
    },
    {
      id: "amazon-ads",
      name: "Amazon Ads",
      icon: <BarChart3 className="h-4 w-4" />,
    },
    {
      id: "meta-ads",
      name: "Meta Ads",
      icon: <BarChart3 className="h-4 w-4" />,
    },
  ];

  const handleIntegrationClick = (integrationId: string) => {
    setActiveSection(integrationId);
    setShowIntegrationsDropdown(false);
    // Update URL to reflect the selected integration
    navigate(`/resources/developer-docs/${integrationId}`);
  };

  const codeExamples = {
    curl: `curl -X GET "https://api.trilio.ai/v1/metrics" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,

    javascript: `const trilio = require('@trilio/sdk');

const client = new trilio.Client({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://api.trilio.ai/v1'
});

const metrics = await client.metrics.get({
  dateRange: '30d',
  metrics: ['revenue', 'orders', 'sessions']
});`,

    python: `import trilio

client = trilio.Client(api_key='YOUR_API_KEY')

metrics = client.metrics.get(
    date_range='30d',
    metrics=['revenue', 'orders', 'sessions']
)`,
  };

  const [selectedLanguage, setSelectedLanguage] = useState("curl");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-white">
      <RouteCanonical path="/resources/developer-docs" />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Trilio for Developers</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            API docs, SDKs, authentication guides, and webhook setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-gray-900 hover:bg-gray-100">
              <Play className="mr-2 h-4 w-4" />
              Quick Start
            </Button>
            <Button
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-gray-900"
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Documentation</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {sidebarSections.map((section) => (
                      <div key={section.id}>
                        {section.hasDropdown ? (
                          <div>
                            <button
                              onClick={() =>
                                setShowIntegrationsDropdown(
                                  !showIntegrationsDropdown
                                )
                              }
                              className={`w-full flex items-center justify-between px-4 py-3 text-left transition-all duration-200 ${
                                activeSection === section.id || showIntegrationsDropdown
                                  ? "bg-purple-50 text-purple-600 border-r-2 border-purple-500"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                              }`}
                            >
                              <div className="flex items-center">
                                {section.icon}
                                <span className="ml-3">{section.title}</span>
                              </div>
                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${
                                  showIntegrationsDropdown ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {showIntegrationsDropdown && (
                              <div className="bg-gray-50 border-l-2 border-purple-200 ml-4">
                                {integrations.map((integration) => (
                                  <button
                                    key={integration.id}
                                    onClick={() =>
                                      handleIntegrationClick(integration.id)
                                    }
                                    className={`w-full flex items-center px-4 py-3 text-left text-sm transition-all duration-200 ${
                                      activeSection === integration.id
                                        ? "bg-purple-50 text-purple-600 border-r-2 border-purple-500"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                    }`}
                                  >
                                    {integration.icon}
                                    <span className="ml-3">
                                      {integration.name}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <button
                            onClick={() => setActiveSection(section.id)}
                            className={`w-full flex items-center px-4 py-3 text-left transition-all duration-200 ${
                              activeSection === section.id
                                ? "bg-purple-50 text-purple-600 border-r-2 border-purple-500"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                          >
                            {section.icon}
                            <span className="ml-3">{section.title}</span>
                          </button>
                        )}
                      </div>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {activeSection === "getting-started" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Getting Started
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Welcome to the Trilio API! This documentation will help you
                    integrate Trilio's powerful analytics capabilities into your
                    applications.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Start</CardTitle>
                    <CardDescription>
                      Get up and running with the Trilio API in minutes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">
                          1. Get your API key
                        </h4>
                        <p className="text-sm text-gray-600">
                          Navigate to your Trilio dashboard → Settings → API
                          Keys
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">
                          2. Make your first request
                        </h4>
                        <p className="text-sm text-gray-600">
                          Use our REST API to fetch your analytics data
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">
                          3. Explore endpoints
                        </h4>
                        <p className="text-sm text-gray-600">
                          Browse our comprehensive API reference
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Base URL</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                      https://api.trilio.ai/v1
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === "authentication" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Authentication
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    The Trilio API uses API keys for authentication. Include
                    your API key in the Authorization header.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>API Key Authentication</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-sm">
                            Authorization Header
                          </span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() =>
                              copyToClipboard(
                                "Authorization: Bearer YOUR_API_KEY"
                              )
                            }
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <code className="text-sm">
                          Authorization: Bearer YOUR_API_KEY
                        </code>
                      </div>
                      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                        <p className="text-sm text-yellow-800">
                          <strong>Security Note:</strong> Keep your API keys
                          secure and never expose them in client-side code.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === "api-reference" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    API Reference
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Comprehensive reference for all Trilio API endpoints.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>GET /metrics</CardTitle>
                    <CardDescription>
                      Retrieve analytics metrics for your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Parameters</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex">
                            <code className="bg-gray-100 px-2 py-1 rounded mr-2">
                              date_range
                            </code>
                            <span className="text-gray-600">
                              string - Date range (7d, 30d, 90d)
                            </span>
                          </div>
                          <div className="flex">
                            <code className="bg-gray-100 px-2 py-1 rounded mr-2">
                              metrics
                            </code>
                            <span className="text-gray-600">
                              array - Metrics to retrieve
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Example Request</h4>
                        <div className="bg-gray-900 text-white p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex space-x-2">
                              {Object.keys(codeExamples).map((lang) => (
                                <button
                                  key={lang}
                                  onClick={() => setSelectedLanguage(lang)}
                                  className={`px-3 py-1 text-sm rounded ${
                                    selectedLanguage === lang
                                      ? "bg-purple-600 text-white"
                                      : "text-gray-400 hover:text-white"
                                  }`}
                                >
                                  {lang.toUpperCase()}
                                </button>
                              ))}
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-gray-400 hover:text-white"
                              onClick={() =>
                                copyToClipboard(
                                  codeExamples[
                                    selectedLanguage as keyof typeof codeExamples
                                  ]
                                )
                              }
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                          <pre className="text-sm overflow-x-auto">
                            <code>
                              {
                                codeExamples[
                                  selectedLanguage as keyof typeof codeExamples
                                ]
                              }
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === "webhooks" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Webhooks
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Set up webhooks to receive real-time notifications about
                    events in your Trilio account.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Webhook Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <code className="text-sm font-mono">
                            data.updated
                          </code>
                          <p className="text-sm text-gray-600">
                            Triggered when new data is processed
                          </p>
                        </div>
                        <Badge variant="secondary">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <code className="text-sm font-mono">
                            alert.triggered
                          </code>
                          <p className="text-sm text-gray-600">
                            Triggered when an alert condition is met
                          </p>
                        </div>
                        <Badge variant="secondary">Active</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === "rate-limits" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Rate Limits
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Information about API rate limits and best practices.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Current Limits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          1,000
                        </div>
                        <div className="text-sm text-gray-600">
                          Requests per hour
                        </div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          100
                        </div>
                        <div className="text-sm text-gray-600">
                          Requests per minute
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === "shopify" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Shopify Integration
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Connect your Shopify store to Trilio for comprehensive
                    e-commerce analytics and insights.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      Required Credentials
                    </CardTitle>
                    <CardDescription>
                      Set up API communication with your Shopify store
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Store URL</h4>
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <code className="text-sm">
                              https://your-store.myshopify.com
                            </code>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() =>
                                copyToClipboard(
                                  "https://your-store.myshopify.com"
                                )
                              }
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Access Token</h4>
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <code className="text-sm">
                              Private app access token
                            </code>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() =>
                                copyToClipboard("Private app access token")
                              }
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Required Admin API Scopes</CardTitle>
                    <CardDescription>
                      Configure these permissions in your Shopify app
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "read_products",
                        "read_product_listings",
                        "read_orders",
                        "read_customers",
                        "read_inventory",
                        "read_analytics",
                        "read_reports",
                        "read_marketing_events",
                        "read_fulfillments",
                        "read_shipping",
                        "read_discounts",
                        "read_price_rules",
                        "read_gift_cards",
                        "read_shop_data",
                        "read_checkouts",
                        "read_abandoned_checkouts",
                        "read_content",
                      ].map((scope) => (
                        <div
                          key={scope}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                            {scope}
                          </code>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Setup Process</CardTitle>
                    <CardDescription>
                      Follow these steps to connect your Shopify store
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          step: 1,
                          title: "Log in to Shopify Admin",
                          desc: "Access your Shopify admin dashboard",
                        },
                        {
                          step: 2,
                          title: "Navigate to Apps",
                          desc: "Go to Settings → Apps and sales channels → Develop apps",
                        },
                        {
                          step: 3,
                          title: "Enable Custom Apps",
                          desc: "Enable custom apps if not already enabled",
                        },
                        {
                          step: 4,
                          title: "Create App",
                          desc: 'Click "Create an app" to start the setup process',
                        },
                        {
                          step: 5,
                          title: "Configure API Access",
                          desc: "Configure Admin API access with all required scopes listed above",
                        },
                        {
                          step: 6,
                          title: "Install App",
                          desc: "Install the app in your store",
                        },
                        {
                          step: 7,
                          title: "Copy Access Token",
                          desc: "Copy the Admin API access token for use in Trilio",
                        },
                      ].map((item) => (
                        <div
                          key={item.step}
                          className="flex items-start space-x-3"
                        >
                          <Badge className="mt-1">{item.step}</Badge>
                          <div>
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900">
                        Important Notes
                      </h4>
                      <ul className="text-sm text-blue-800 mt-2 space-y-1">
                        <li>
                          • Ensure all required scopes are enabled for full
                          functionality
                        </li>
                        <li>
                          • Keep your access token secure and never share it
                          publicly
                        </li>
                        <li>
                          • The app requires read-only access to your store data
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "klaviyo" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Klaviyo Integration
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Connect your Klaviyo account to Trilio for advanced email
                    marketing analytics and customer insights.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      Required Credentials
                    </CardTitle>
                    <CardDescription>
                      Set up API communication with your Klaviyo account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">API Key</h4>
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <code className="text-sm">
                              Klaviyo Private API Key
                            </code>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() =>
                                copyToClipboard("Klaviyo Private API Key")
                              }
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Required API Key Permissions</CardTitle>
                    <CardDescription>
                      Ensure your API key has these read-only permissions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Read Lists and Segments",
                        "Read Profiles",
                        "Read Metrics and Events",
                        "Read Campaigns",
                        "Read Flows",
                        "Read Templates",
                        "Read Account information",
                      ].map((permission) => (
                        <div
                          key={permission}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{permission}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Setup Process</CardTitle>
                    <CardDescription>
                      Follow these steps to connect your Klaviyo account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          step: 1,
                          title: "Sign in to Klaviyo",
                          desc: "Access your Klaviyo account dashboard",
                        },
                        {
                          step: 2,
                          title: "Navigate to API Keys",
                          desc: "Go to Account → Settings → API Keys",
                        },
                        {
                          step: 3,
                          title: "Create Private API Key",
                          desc: 'Click "Create Private API Key" to generate a new key',
                        },
                        {
                          step: 4,
                          title: "Name the Key",
                          desc: 'Name the key (e.g., "Trilio Integration") for easy identification',
                        },
                        {
                          step: 5,
                          title: "Select Access Level",
                          desc: 'Select "Read-Only Access" for data retrieval',
                        },
                        {
                          step: 6,
                          title: "Copy API Key",
                          desc: "Copy the generated API key for use in Trilio",
                        },
                        {
                          step: 7,
                          title: "Connect to Trilio",
                          desc: "Go to trilio.ai and sign in to your account",
                        },
                        {
                          step: 8,
                          title: "Add Integration",
                          desc: "Navigate to Integrations → Klaviyo and paste your API key",
                        },
                      ].map((item) => (
                        <div
                          key={item.step}
                          className="flex items-start space-x-3"
                        >
                          <Badge className="mt-1">{item.step}</Badge>
                          <div>
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900">
                        Important Notes
                      </h4>
                      <ul className="text-sm text-blue-800 mt-2 space-y-1">
                        <li>
                          • The API key provides read-only access to your
                          Klaviyo data
                        </li>
                        <li>
                          • Keep your API key secure and never share it publicly
                        </li>
                        <li>
                          • You can revoke access at any time from your Klaviyo
                          settings
                        </li>
                        <li>
                          • The integration will sync your email marketing data
                          for analysis
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "amazon" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Amazon Seller Central Integration (SP-API)
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Authorize our developer account to access your seller data
                    via the Selling Partner API.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      Required Credentials
                    </CardTitle>
                    <CardDescription>
                      Set up API communication with your Amazon Seller Central
                      account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">
                          Developer Account ID
                        </h4>
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <code className="text-sm">
                              amzn1.sp.solution.5267be4c-5872-46f1-95ab-e6c67bece302
                            </code>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() =>
                                copyToClipboard(
                                  "amzn1.sp.solution.5267be4c-5872-46f1-95ab-e6c67bece302"
                                )
                              }
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Required API Permissions</CardTitle>
                    <CardDescription>
                      Grant access to these APIs for comprehensive data
                      integration
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Orders API",
                        "Reports API",
                        "Catalog Items API",
                        "Inventory API",
                        "Finances API",
                        "Fulfillment Inbound API",
                        "Fulfillment Outbound API",
                        "Merchant Fulfillment API",
                        "Notifications API",
                        "Product Fees API",
                        "Product Pricing API",
                        "Sales API",
                        "Sellers API",
                        "Services API",
                        "Shipment Invoicing API",
                        "Shipping API",
                      ].map((api) => (
                        <div key={api} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{api}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Setup Process</CardTitle>
                    <CardDescription>
                      Follow these steps to connect your Amazon Seller Central
                      account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          step: 1,
                          title: "Sign up at Trilio",
                          desc: "Go to https://staging.trilio.ai/login and create an account",
                        },
                        {
                          step: 2,
                          title: "Navigate to Integrations",
                          desc: "Go to Profile section and click on Integrations",
                        },
                        {
                          step: 3,
                          title: "Select Amazon",
                          desc: "Click on Amazon integration to start the setup process",
                        },
                        {
                          step: 4,
                          title: "Redirect to Amazon",
                          desc: "You will be redirected to Amazon's Seller Central login page",
                        },
                        {
                          step: 5,
                          title: "Login to Amazon",
                          desc: "Log in using your Amazon seller credentials",
                        },
                        {
                          step: 6,
                          title: "Authorize Access",
                          desc: "Authorize access for our developer account with all required permissions",
                        },
                      ].map((item) => (
                        <div
                          key={item.step}
                          className="flex items-start space-x-3"
                        >
                          <Badge className="mt-1">{item.step}</Badge>
                          <div>
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900">
                        Important Notes
                      </h4>
                      <ul className="text-sm text-blue-800 mt-2 space-y-1">
                        <li>
                          • This integration uses Amazon's Selling Partner API
                          (SP-API)
                        </li>
                        <li>
                          • You must have an active Amazon Seller Central
                          account
                        </li>
                        <li>
                          • All data access is read-only for analytics purposes
                        </li>
                        <li>
                          • You can revoke access at any time from your Amazon
                          Seller Central settings
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "google-analytics" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Google Analytics 4 (GA4) Integration
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Connect your Google Analytics 4 property to Trilio for
                    comprehensive web analytics and user behavior insights.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      Required Credentials
                    </CardTitle>
                    <CardDescription>
                      Set up access to your Google Analytics 4 property
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">GA4 Property ID</h4>
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <code className="text-sm">e.g. 123456789</code>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyToClipboard("123456789")}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Grant Access To</h4>
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <code className="text-sm">
                              trilio-ga4@trilio-462507.iam.gserviceaccount.com
                            </code>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() =>
                                copyToClipboard(
                                  "trilio-ga4@trilio-462507.iam.gserviceaccount.com"
                                )
                              }
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Required Permissions</CardTitle>
                    <CardDescription>
                      Grant these permissions for comprehensive read-only access
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium">Viewer</span>
                        <span className="text-sm text-gray-600">
                          - Read-only access to all reports and configuration
                          data
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Setup Process</CardTitle>
                    <CardDescription>
                      Follow these steps to connect your Google Analytics 4
                      property
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          step: 1,
                          title: "Log in to Google Analytics",
                          desc: "Go to https://analytics.google.com and sign in",
                        },
                        {
                          step: 2,
                          title: "Access Admin Settings",
                          desc: "Click the 'Admin' gear icon in the bottom left corner",
                        },
                        {
                          step: 3,
                          title: "Select Property",
                          desc: "Under the 'Property' column, select your GA4 property",
                        },
                        {
                          step: 4,
                          title: "Manage Access",
                          desc: "Click 'Property Access Management'",
                        },
                        {
                          step: 5,
                          title: "Add User",
                          desc: "Click the '+' button to add a new user",
                        },
                        {
                          step: 6,
                          title: "Enter Service Account",
                          desc: "Enter: trilio-ga4@trilio-462507.iam.gserviceaccount.com",
                        },
                        {
                          step: 7,
                          title: "Assign Role",
                          desc: "Assign 'Viewer' role for comprehensive read-only access",
                        },
                        {
                          step: 8,
                          title: "Save Changes",
                          desc: "Click 'Save' to complete the setup",
                        },
                      ].map((item) => (
                        <div
                          key={item.step}
                          className="flex items-start space-x-3"
                        >
                          <Badge className="mt-1">{item.step}</Badge>
                          <div>
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900">
                        Important Notes
                      </h4>
                      <ul className="text-sm text-blue-800 mt-2 space-y-1">
                        <li>
                          • This integration requires a Google Analytics 4 (GA4)
                          property
                        </li>
                        <li>
                          • Universal Analytics (UA) properties are not
                          supported
                        </li>
                        <li>
                          • The service account has read-only access to your
                          analytics data
                        </li>
                        <li>
                          • You can revoke access at any time from your Google
                          Analytics settings
                        </li>
                        <li>
                          • Data will be synced for comprehensive web analytics
                          insights
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "google-ads" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Google Ads Integration
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Connect your Google Ads account to Trilio for comprehensive
                    advertising analytics and campaign performance insights.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      Required Credentials
                    </CardTitle>
                    <CardDescription>
                      Set up access to your Google Ads account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Customer ID</h4>
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <code className="text-sm">e.g. 123-456-7890</code>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyToClipboard("123-456-7890")}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Grant Access To</h4>
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <code className="text-sm">
                              Our Google Ads Manager account: 219-056-5758
                            </code>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyToClipboard("219-056-5758")}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Required Permission Level</CardTitle>
                    <CardDescription>
                      Grant access to these data types for comprehensive
                      analytics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Campaign performance data",
                        "Ad group and keyword data",
                        "Audience insights",
                        "Conversion tracking data",
                        "Account structure and settings",
                        "Extensions and assets data",
                        "Shopping campaigns data",
                        "Video campaigns data",
                        "Display campaigns data",
                      ].map((dataType) => (
                        <div
                          key={dataType}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{dataType}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Setup Process</CardTitle>
                    <CardDescription>
                      Follow these steps to connect your Google Ads account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          step: 1,
                          title: "Log in to Google Ads",
                          desc: "Go to https://ads.google.com and sign in to your account",
                        },
                        {
                          step: 2,
                          title: "Access Tools & Settings",
                          desc: "Click on Tools & Settings (wrench icon) in the top menu",
                        },
                        {
                          step: 3,
                          title: "Navigate to Access",
                          desc: "Under 'Setup', click 'Access and security'",
                        },
                        {
                          step: 4,
                          title: "Invite Users",
                          desc: "Click the '+' button to invite new users",
                        },
                        {
                          step: 5,
                          title: "Enter Manager Account",
                          desc: "Enter manager account ID: 219-056-5758",
                        },
                        {
                          step: 6,
                          title: "Select Access Level",
                          desc: "Select 'Read Only' access level for data retrieval",
                        },
                        {
                          step: 7,
                          title: "Save Invitation",
                          desc: "Save the invitation to complete the setup",
                        },
                      ].map((item) => (
                        <div
                          key={item.step}
                          className="flex items-start space-x-3"
                        >
                          <Badge className="mt-1">{item.step}</Badge>
                          <div>
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900">
                        Important Notes
                      </h4>
                      <ul className="text-sm text-blue-800 mt-2 space-y-1">
                        <li>
                          • This integration provides read-only access to your
                          Google Ads data
                        </li>
                        <li>
                          • You must have admin access to your Google Ads
                          account
                        </li>
                        <li>
                          • The manager account will have access to all
                          campaigns and data
                        </li>
                        <li>
                          • You can revoke access at any time from your Google
                          Ads settings
                        </li>
                        <li>
                          • Data will be synced for comprehensive advertising
                          analytics
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "amazon-ads" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Amazon Ads Integration
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Grant access to our Amazon Ads app for comprehensive
                    advertising analytics and campaign performance insights.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      Required Credentials
                    </CardTitle>
                    <CardDescription>
                      Set up access to your Amazon Ads account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Client ID</h4>
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <code className="text-sm">
                              amzn1.application-oa2-client.aa03631e19f94334932b94d22185515c
                            </code>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() =>
                                copyToClipboard(
                                  "amzn1.application-oa2-client.aa03631e19f94334932b94d22185515c"
                                )
                              }
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Required Scopes</CardTitle>
                    <CardDescription>
                      Grant access to these scopes for comprehensive advertising
                      data
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "advertising::campaign_management_read",
                        "advertising::reporting",
                        "advertising::display_read",
                        "advertising::dsp_reports",
                        "advertising::audiences_read",
                        "advertising::stores_read",
                        "advertising::brand_metrics",
                        "advertising::attribution",
                      ].map((scope) => (
                        <div
                          key={scope}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                            {scope}
                          </code>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Setup Process</CardTitle>
                    <CardDescription>
                      Follow these steps to connect your Amazon Ads account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          step: 1,
                          title: "Sign up at Trilio",
                          desc: "Go to https://staging.trilio.ai/login and create an account",
                        },
                        {
                          step: 2,
                          title: "Navigate to Integrations",
                          desc: "Go to Profile section and click on Integrations",
                        },
                        {
                          step: 3,
                          title: "Select Amazon Ads",
                          desc: "Click on Amazon Ads integration to start the setup process",
                        },
                        {
                          step: 4,
                          title: "Redirect to Amazon Ads",
                          desc: "You will be redirected to Amazon Ads login page",
                        },
                        {
                          step: 5,
                          title: "Login to Amazon",
                          desc: "Log in using your Amazon account credentials",
                        },
                        {
                          step: 6,
                          title: "Grant Access",
                          desc: "Grant access to our Ads app with all required scopes",
                        },
                      ].map((item) => (
                        <div
                          key={item.step}
                          className="flex items-start space-x-3"
                        >
                          <Badge className="mt-1">{item.step}</Badge>
                          <div>
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900">
                        Important Notes
                      </h4>
                      <ul className="text-sm text-blue-800 mt-2 space-y-1">
                        <li>
                          • This integration provides read-only access to your
                          Amazon Ads data
                        </li>
                        <li>• You must have an active Amazon Ads account</li>
                        <li>
                          • All data access is for analytics and reporting
                          purposes only
                        </li>
                        <li>
                          • You can revoke access at any time from your Amazon
                          Ads settings
                        </li>
                        <li>
                          • Data will be synced for comprehensive advertising
                          analytics
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "meta-ads" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Meta Ads Integration
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Connect your Meta Ads account to Trilio for comprehensive
                    Facebook and Instagram advertising analytics and campaign
                    performance insights.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      Required Credentials
                    </CardTitle>
                    <CardDescription>
                      Set up access to your Meta Ads account via Business
                      Manager
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">
                          Trilio Partner Business ID
                        </h4>
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <code className="text-sm">606203958945233</code>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyToClipboard("606203958945233")}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Required Asset Permissions</CardTitle>
                    <CardDescription>
                      Grant access to these assets for comprehensive advertising
                      data
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">
                          Facebook Pages (if active)
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Select page(s)</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">
                              Assign permissions: Ads, Insights, Revenue
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Ad Accounts</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">
                              Assign permissions: View Performance
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">
                          Instagram Accounts
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">
                              Assign permissions: Ads, Insights
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Setup Process</CardTitle>
                    <CardDescription>
                      Follow these steps to connect your Meta Ads account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          step: 1,
                          title: "Go to Business Settings",
                          desc: "Navigate to your Business Settings → Partners → Add Partner",
                        },
                        {
                          step: 2,
                          title: "Add Partner",
                          desc: 'Click on "Give a partner access to your assets"',
                        },
                        {
                          step: 3,
                          title: "Enter Partner ID",
                          desc: "Use Trilio Partner Business ID: 606203958945233",
                        },
                        {
                          step: 4,
                          title: "Select Asset Types",
                          desc: "Select Facebook Pages, Ad Accounts, and Instagram accounts",
                        },
                        {
                          step: 5,
                          title: "Assign Permissions",
                          desc: "For each asset type, assign the required permissions as listed above",
                        },
                        {
                          step: 6,
                          title: "Complete Setup",
                          desc: 'Click on "Assign assets" and you are all set!',
                        },
                      ].map((item) => (
                        <div
                          key={item.step}
                          className="flex items-start space-x-3"
                        >
                          <Badge className="mt-1">{item.step}</Badge>
                          <div>
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900">
                        Important Notes
                      </h4>
                      <ul className="text-sm text-blue-800 mt-2 space-y-1">
                        <li>
                          • This integration provides read-only access to your
                          Meta Ads data
                        </li>
                        <li>
                          • You must have admin access to your Business Manager
                          account
                        </li>
                        <li>
                          • All data access is for analytics and reporting
                          purposes only
                        </li>
                        <li>
                          • You can revoke access at any time from your Business
                          Manager settings
                        </li>
                        <li>
                          • Data will be synced for comprehensive Facebook and
                          Instagram advertising analytics
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "sdk-libraries" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    SDK Libraries
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Official SDKs and community libraries for popular
                    programming languages.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Github className="h-5 w-5 mr-2" />
                        JavaScript/Node.js
                      </CardTitle>
                      <CardDescription>
                        Official SDK for JavaScript and Node.js
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-100 p-3 rounded-lg mb-4">
                        <code className="text-sm">npm install @trilio/sdk</code>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Documentation
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Github className="h-5 w-5 mr-2" />
                        Python
                      </CardTitle>
                      <CardDescription>Official Python SDK</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-100 p-3 rounded-lg mb-4">
                        <code className="text-sm">
                          pip install trilio-python
                        </code>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Documentation
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Community Support CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our developer community or contact our support team for
            assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <MessageCircle className="mr-2 h-4 w-4" />
              Join Slack Community
            </Button>
            <Button variant="outline" className="text-black">
              <ExternalLink className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <LegacyFooter />
    </div>
  );
};

export default DeveloperDocs;
