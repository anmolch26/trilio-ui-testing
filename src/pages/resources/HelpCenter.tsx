import React, { useState } from "react";
import Navbar from "@/components/Navbar";
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  HelpCircle,
  Book,
  Settings,
  CreditCard,
  AlertTriangle,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "Getting Started",
      icon: <Book className="h-6 w-6" />,
      description: "Setup guides and onboarding tutorials",
      articleCount: 12,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Dashboards & Analytics",
      icon: <Settings className="h-6 w-6" />,
      description: "Creating and customizing your reports",
      articleCount: 18,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Data Integration",
      icon: <Settings className="h-6 w-6" />,
      description: "Connecting your data sources",
      articleCount: 15,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Billing & Plans",
      icon: <CreditCard className="h-6 w-6" />,
      description: "Account management and pricing",
      articleCount: 8,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Troubleshooting",
      icon: <AlertTriangle className="h-6 w-6" />,
      description: "Common issues and solutions",
      articleCount: 22,
      color: "bg-red-50 text-red-600",
    },
    {
      title: "API & Integrations",
      icon: <Settings className="h-6 w-6" />,
      description: "Developer resources and guides",
      articleCount: 10,
      color: "bg-indigo-50 text-indigo-600",
    },
  ];

  const popularArticles = [
    {
      title: "How to Connect Your Shopify Store",
      category: "Getting Started",
      views: "12.5K views",
      updated: "Updated 2 days ago",
    },
    {
      title: "Understanding Attribution Models",
      category: "Dashboards & Analytics",
      views: "8.3K views",
      updated: "Updated 1 week ago",
    },
    {
      title: "Setting Up Facebook Ads Integration",
      category: "Data Integration",
      views: "9.1K views",
      updated: "Updated 3 days ago",
    },
    {
      title: "Troubleshooting Data Sync Issues",
      category: "Troubleshooting",
      views: "6.7K views",
      updated: "Updated 5 days ago",
    },
  ];

  const faqs = [
    {
      id: "faq-1",
      question: "How long does it take to set up my first dashboard?",
      answer:
        "Most users can create their first dashboard within 15-30 minutes after connecting their data sources. Our quick-start templates help you get up and running even faster.",
    },
    {
      id: "faq-2",
      question: "Can I connect multiple Shopify stores to one account?",
      answer:
        "Yes! You can connect multiple Shopify stores, as well as other e-commerce platforms, to a single Trilio account. Each store will appear as a separate data source in your dashboard.",
    },
    {
      id: "faq-3",
      question: "What happens if my data stops syncing?",
      answer:
        "Trilio automatically monitors all data connections and will alert you if any issues occur. Most sync problems resolve automatically, but our support team is always available to help troubleshoot.",
    },
    {
      id: "faq-4",
      question: "Can I export my data and reports?",
      answer:
        "Absolutely! You can export individual reports as PDF, CSV, or Excel files. You can also schedule automated report delivery to any email address.",
    },
    {
      id: "faq-5",
      question: "Is there a mobile app available?",
      answer:
        "While we don't have a dedicated mobile app yet, our web platform is fully responsive and works great on mobile devices. A native mobile app is on our roadmap for 2025.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            How Can We Help?
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Browse articles and tutorials to get the most from Trilio.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for articles, guides, and tutorials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-lg"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Categories Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                  >
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors duration-200">
                    {category.title}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      {category.articleCount} articles
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group-hover:bg-purple-50 group-hover:text-purple-600"
                    >
                      View All
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Popular Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-xs text-gray-500">
                      {article.views}
                    </span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-purple-600 transition-colors duration-200">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="flex items-center text-sm">
                    <span className="text-green-600">{article.updated}</span>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                    <div className="flex items-center">
                      <HelpCircle className="h-5 w-5 mr-3 text-purple-500 flex-shrink-0" />
                      <span className="font-medium text-black">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-2xl">
                Can't Find What You Need?
              </CardTitle>
              <CardDescription className="text-lg">
                Our support team is here to help you succeed with Trilio.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Contact Support
                  <MessageCircle className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">
                  Schedule a Call
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default HelpCenter;
