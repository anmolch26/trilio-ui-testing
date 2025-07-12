import React, { useState } from "react";
import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";

const DeveloperDocs = () => {
  const [activeSection, setActiveSection] = useState("getting-started");

  const sidebarSections = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: <Book className="h-4 w-4" />,
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
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
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
                      <button
                        key={section.id}
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

      <Footer />
    </div>
  );
};

export default DeveloperDocs;
