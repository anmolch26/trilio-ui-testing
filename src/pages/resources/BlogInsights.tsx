import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageLayout from "@/components/theme/PageLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Clock, User } from "lucide-react";

const BlogInsights = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/resources/blog-insights/blog");
  };

  const categories = [
    "All",
    "Analytics",
    "Product",
    "E-commerce",
    "Marketing",
    "Leadership",
    "AI",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "What is an Ecommerce Analytics Platform?",
      summary:
        "An ecommerce analytics platform goes far beyond basic website analytics. While traditional tools like Google Analytics tell you what happened, modern ecommerce analytics platforms reveal the why, when, and what's next.",
      category: "E-commerce",
      author: "Om Rathod",
      date: "August 5, 2025",
      readTime: "8 min",
      image: "/src/assests/EcommerceAnalytics.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Top 10 Features Every Ecommerce Analytics Platform Must Have",
      summary:
        "Your platform should seamlessly connect with all your business tools. Trilio.ai integrates with 12+ platforms including Shopify, Amazon, Google Ads, Facebook, TikTok, and Klaviyo without requiring technical expertise.",
      category: "E-commerce",
      author: "Om Rathod",
      date: "August 5, 2025",
      readTime: "12 min",
      image: "/src/assests/Features.png",
    },
    {
      id: 3,
      title: "Comparing Leading Platforms: Trilio vs Competitors",
      summary:
        "Trilio.ai positions itself as 'Your AI Wingman for Ecommerce Growth' with several key differentiators including 100K+ metrics analyzed in real-time and AI-powered conversational queries.",
      category: "Product",
      author: "Om Rathod",
      date: "August 5, 2025",
      readTime: "15 min",
      image: "/src/assests/WhatsApp Image 2025-08-05 at 17.52.32.jpeg",
    },
    {
      id: 4,
      title: "Implementation Guide: Getting Started in 30 Days",
      summary:
        "A comprehensive 30-day implementation plan covering foundation setup, advanced configuration, optimization insights, and scaling strategies for ecommerce analytics platforms.",
      category: "Leadership",
      author: "Om Rathod",
      date: "August 5, 2025",
      readTime: "20 min",
      image: "/src/assests/Project-Implementation.jpg",
    },
    {
      id: 5,
      title: "Future Trends: AI-Powered Analytics in 2025",
      summary:
        "By 2025, AI will move from assistive to autonomous, meaning platforms will automatically detect opportunities, generate insights without prompting, and optimize campaigns in real-time.",
      category: "AI",
      author: "Om Rathod",
      date: "August 5, 2025",
      readTime: "10 min",
      image: "/src/assests/AIpowered.jpg",
    },
    {
      id: 6,
      title: "Measuring Success: KPIs That Matter",
      summary:
        "A comprehensive guide to measuring success with actionable KPIs including revenue intelligence metrics, operational efficiency, and marketing performance with specific targets and measurement methods.",
      category: "Analytics",
      author: "Om Rathod",
      date: "August 5, 2025",
      readTime: "12 min",
      image: "/src/assests/kpis.png",
    },
    {
      id: 7,
      title: "Common Implementation Challenges and Solutions",
      summary:
        "Practical guide addressing key implementation challenges including data integration complexity, team adoption resistance, data accuracy concerns, and information overload with proven solutions.",
      category: "Leadership",
      author: "Om Rathod",
      date: "August 5, 2025",
      readTime: "8 min",
      image: "/src/assests/challenges.jpg",
    },
    {
      id: 8,
      title: "Industry-Specific Considerations",
      summary:
        "Comprehensive guide covering industry-specific analytics considerations for Fashion & Apparel, Health & Beauty, Electronics & Tech, and Food & Beverage sectors with tailored insights.",
      category: "Marketing",
      author: "Om Rathod",
      date: "August 5, 2025",
      readTime: "10 min",
      image: "/src/assests/WhatsApp Image 2025-08-05 at 18.29.51.jpeg",
    },
    {
      id: 9,
      title: "Cost-Benefit Analysis: Platform Investment ROI",
      summary:
        "Comprehensive ROI analysis with three investment tiers, detailed cost-benefit calculations, and real-world example showing 10,456% annual return for mid-size retailers.",
      category: "Analytics",
      author: "Om Rathod",
      date: "August 5, 2025",
      readTime: "15 min",
      image: "/src/assests/Return-on-investment-ROI.webp",
    },
    {
      id: 10,
      title: "Security and Compliance Considerations",
      summary:
        "Essential guide covering GDPR and CCPA compliance requirements, security best practices including data encryption, access controls, and monitoring procedures for analytics platforms.",
      category: "Leadership",
      author: "Om Rathod",
      date: "August 5, 2025",
      readTime: "12 min",
      image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
    },
    {
      id: 11,
      title: "Next-Generation Features to Watch",
      summary:
        "Forward-looking guide covering emerging analytics technologies including augmented analytics, embedded capabilities, collaborative workflows, edge processing, and quantum-enhanced computing.",
      category: "AI",
      author: "Om Rathod",
      date: "August 5, 2025",
      readTime: "8 min",
      image: "/lovable-uploads/c3d810f5-fda3-4321-a497-5f5483a0ece2.png",
    },
    {
      id: 12,
      title: "Conclusion: Your Path to Analytics Excellence",
      summary:
        "Comprehensive conclusion highlighting 400-1200% ROI potential, key success factors, competitive advantages, and Trilio.ai's complete analytics solution for growing ecommerce brands.",
      category: "Leadership",
      author: "Om Rathod",
      date: "August 5, 2025",
      readTime: "10 min",
      image: "/src/assests/conclusion.jpg",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Explore What We're Thinking
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Product updates, best practices, and e-commerce strategy from the
            Trilio team.
          </p>
        </div>
      </section>

      <div className="pt-12 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Categories */}
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Categories
                </h2>
                <div className="space-y-3">
                  {categories
                    .filter((cat) => cat !== "All")
                    .map((category) => (
                      <button
                        key={category}
                        onClick={() =>
                          setSelectedCategory(
                            selectedCategory === category ? "All" : category
                          )
                        }
                        className={`flex items-center w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                          selectedCategory === category
                            ? "bg-teal-50 text-teal-700 border border-teal-200"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 border-2 rounded mr-3 ${
                            selectedCategory === category
                              ? "border-teal-500 bg-teal-500"
                              : "border-gray-300"
                          }`}
                        >
                          {selectedCategory === category && (
                            <div className="w-2 h-2 bg-white rounded-sm m-0.5"></div>
                          )}
                        </div>
                        {category}
                      </button>
                    ))}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:w-3/4">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Blog Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-gray-200"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          variant="secondary"
                          className="bg-teal-100 text-teal-700 border-teal-200"
                        >
                          {post.category}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {post.date}
                        </span>
                      </div>
                      <CardTitle className="text-base font-semibold hover:text-teal-600 transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <span>by {post.author}</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            navigate(`/resources/blog-insights/blog/${post.id}`)
                          }
                          className="text-teal-600 border-teal-200 hover:bg-teal-50"
                        >
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogInsights;
