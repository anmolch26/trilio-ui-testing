import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/NavBar";
import LegacyFooter from "@/components/LegacyFooter";
import Seo from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Database, Zap, RefreshCw, Link2 } from "lucide-react";

const DataIntegration = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const articles = [
        {
            title: "Connecting Your Shopify Store",
            description: "Step-by-step guide to integrate your Shopify data with Trilio",
            category: "E-commerce",
            readTime: "6 min read",
            icon: <Database className="h-5 w-5" />,
        },
        {
            title: "Amazon Seller Central Integration",
            description: "Connect your Amazon marketplace data for unified reporting",
            category: "E-commerce",
            readTime: "7 min read",
            icon: <Database className="h-5 w-5" />,
        },
        {
            title: "Facebook Ads Connection Setup",
            description: "Integrate Meta advertising data into your analytics",
            category: "Advertising",
            readTime: "5 min read",
            icon: <Link2 className="h-5 w-5" />,
        },
        {
            title: "Google Ads Integration Guide",
            description: "Connect Google Ads for complete marketing attribution",
            category: "Advertising",
            readTime: "5 min read",
            icon: <Link2 className="h-5 w-5" />,
        },
        {
            title: "Data Sync Troubleshooting",
            description: "Common sync issues and how to resolve them",
            category: "Troubleshooting",
            readTime: "8 min read",
            icon: <RefreshCw className="h-5 w-5" />,
        },
        {
            title: "Custom API Integration",
            description: "Connect custom data sources using our API",
            category: "Advanced",
            readTime: "10 min read",
            icon: <Zap className="h-5 w-5" />,
        },
    ];

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Data Integration Help - Trilio.ai"
                description="Learn how to connect Shopify, Amazon, Facebook Ads, Google Ads, and other data sources to Trilio.ai. Integration guides and troubleshooting."
                canonical="/resources/help/data-integration"
            />
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 to-blue-100 pt-36 pb-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Data Integration
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Connect Shopify, Amazon, advertising platforms, and more with Trilio.ai
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
                            <span className="text-sm font-medium text-gray-700">
                                🛍️ E-commerce
                            </span>
                        </div>
                        <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
                            <span className="text-sm font-medium text-gray-700">
                                📢 Advertising
                            </span>
                        </div>
                        <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
                            <span className="text-sm font-medium text-gray-700">
                                🔌 40+ Integrations
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-12">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {filteredArticles.length} Integration Guides
                    </h2>
                    <p className="text-gray-600">
                        Connect all your data sources in minutes
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map((article, index) => (
                        <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                            <CardHeader>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                                        {article.icon}
                                    </div>
                                    <Badge variant="outline">{article.category}</Badge>
                                </div>
                                <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                                    {article.title}
                                </CardTitle>
                                <CardDescription>{article.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <span className="text-sm text-gray-500">{article.readTime}</span>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredArticles.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-600">No integration guides found matching your search.</p>
                    </div>
                )}
            </section>

            <section className="container mx-auto px-6 py-12 border-t">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Categories</h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <Link to="/resources/getting-started" className="p-4 border rounded-lg hover:border-green-500 hover:shadow-md transition-all">
                        <h4 className="font-semibold text-gray-900 mb-1">Getting Started</h4>
                        <p className="text-sm text-gray-600">Setup guides and tutorials</p>
                    </Link>
                    <Link to="/resources/help/troubleshooting" className="p-4 border rounded-lg hover:border-green-500 hover:shadow-md transition-all">
                        <h4 className="font-semibold text-gray-900 mb-1">Troubleshooting</h4>
                        <p className="text-sm text-gray-600">Common issues and solutions</p>
                    </Link>
                    <Link to="/resources/help/api-integrations" className="p-4 border rounded-lg hover:border-green-500 hover:shadow-md transition-all">
                        <h4 className="font-semibold text-gray-900 mb-1">API & Integrations</h4>
                        <p className="text-sm text-gray-600">Developer resources</p>
                    </Link>
                </div>
            </section>

            <LegacyFooter />
        </div>
    );
};

export default DataIntegration;
