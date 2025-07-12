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
import { Download, FileText, BarChart, BookOpen, Search } from "lucide-react";

const GuidesReports = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Reports", "Playbooks", "Benchmarks", "Forecasts"];

  const resources = [
    {
      id: 1,
      title: "E-commerce Analytics Benchmark Report 2024",
      description:
        "Comprehensive analysis of industry performance metrics, conversion rates, and growth trends across 1000+ brands.",
      type: "Reports",
      tags: ["Analytics", "Benchmarks", "Industry"],
      image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
      downloadCount: "2.3K",
      featured: true,
    },
    {
      id: 2,
      title: "The Complete Guide to Attribution Modeling",
      description:
        "Step-by-step playbook for implementing multi-touch attribution and understanding your customer journey.",
      type: "Playbooks",
      tags: ["Attribution", "Marketing", "Strategy"],
      image: "/lovable-uploads/3d1cb2ff-526f-4de5-b7ff-85618d692167.png",
      downloadCount: "1.8K",
    },
    {
      id: 3,
      title: "AI in Commerce: 2025 Forecast Report",
      description:
        "Predictions and trends for artificial intelligence adoption in e-commerce over the next 18 months.",
      type: "Forecasts",
      tags: ["AI", "Future", "Technology"],
      image: "/lovable-uploads/41f6f133-b265-45dc-a051-e55b3b3ca5bd.png",
      downloadCount: "3.1K",
    },
    {
      id: 4,
      title: "Performance Marketing Playbook",
      description:
        "Proven strategies and tactics for scaling profitable paid advertising campaigns across all channels.",
      type: "Playbooks",
      tags: ["Performance Marketing", "Paid Ads", "ROI"],
      image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
      downloadCount: "2.7K",
    },
    {
      id: 5,
      title: "DTC Brand Metrics Benchmark",
      description:
        "Industry benchmarks for key performance indicators across direct-to-consumer brands by category.",
      type: "Benchmarks",
      tags: ["DTC", "Metrics", "Performance"],
      image: "/lovable-uploads/5ec4610f-3977-4d38-bfb3-389cf824ed85.jpg",
      downloadCount: "1.9K",
    },
    {
      id: 6,
      title: "Customer Lifetime Value Optimization Guide",
      description:
        "Framework for calculating, tracking, and improving CLV across different business models.",
      type: "Playbooks",
      tags: ["CLV", "Retention", "Strategy"],
      image: "/lovable-uploads/a629bbe0-8e90-4b25-a313-21449a7292cd.jpg",
      downloadCount: "2.2K",
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      selectedCategory === "All" || resource.type === selectedCategory;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case "Reports":
        return <BarChart className="h-6 w-6" />;
      case "Playbooks":
        return <BookOpen className="h-6 w-6" />;
      case "Benchmarks":
        return <FileText className="h-6 w-6" />;
      case "Forecasts":
        return <BarChart className="h-6 w-6" />;
      default:
        return <FileText className="h-6 w-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-50 via-blue-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            E-commerce Strategy, Delivered
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Download guides and industry reports created by experts.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-200${
                  selectedCategory !== category ? " text-black" : ""
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Resource */}
        {filteredResources.find((resource) => resource.featured) && (
          <Card className="mb-12 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={
                    filteredResources.find((resource) => resource.featured)
                      ?.image
                  }
                  alt={
                    filteredResources.find((resource) => resource.featured)
                      ?.title
                  }
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <Badge className="mr-3 bg-purple-100 text-purple-700">
                    Featured
                  </Badge>
                  <Badge variant="outline">
                    {
                      filteredResources.find((resource) => resource.featured)
                        ?.type
                    }
                  </Badge>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {
                    filteredResources.find((resource) => resource.featured)
                      ?.title
                  }
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {
                    filteredResources.find((resource) => resource.featured)
                      ?.description
                  }
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Download className="h-4 w-4 mr-2" />
                    <span>
                      {
                        filteredResources.find((resource) => resource.featured)
                          ?.downloadCount
                      }{" "}
                      downloads
                    </span>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Download Now
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources
            .filter((resource) => !resource.featured)
            .map((resource) => (
              <Card
                key={resource.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="relative">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-lg">
                    {getIcon(resource.type)}
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{resource.type}</Badge>
                    <div className="flex items-center text-xs text-gray-500">
                      <Download className="h-3 w-3 mr-1" />
                      {resource.downloadCount}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-purple-600 transition-colors duration-200">
                    {resource.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="mb-4">
                    {resource.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full">
                    Download Now
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get notified when we publish new guides and reports
          </p>
          <Button
            variant="secondary"
            className="bg-white text-purple-600 hover:bg-gray-100"
          >
            Subscribe to Updates
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuidesReports;
