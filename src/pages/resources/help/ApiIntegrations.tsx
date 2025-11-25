import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/NavBar";
import LegacyFooter from "@/components/LegacyFooter";
import Seo from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Code, Webhook, Key, FileCode } from "lucide-react";

const ApiIntegrations = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const articles = [
        {
            title: "API Authentication",
            description: "Get started with API keys and authentication methods",
            category: "Basics",
            readTime: "5 min read",
            icon: <Key className="h-5 w-5" />,
        },
        {
            title: "REST API Reference",
            description: "Complete documentation of all API endpoints",
            category: "Reference",
            readTime: "15 min read",
            icon: <Code className="h-5 w-5" />,
        },
        {
            title: "Webhook Configuration",
            description: "Set up webhooks for real-time event notifications",
            category: "Advanced",
            readTime: "8 min read",
            icon: <Webhook className="h-5 w-5" />,
        },
        {
            title: "Custom Integration Guide",
            description: "Build custom integrations with your tech stack",
            category: "Advanced",
            readTime: "12 min read",
            icon: <FileCode className="h-5 w-5" />,
        },
        {
            title: "Rate Limits and Best Practices",
            description: "Optimize your API usage and avoid rate limiting",
            category: "Best Practices",
            readTime: "6 min read",
            icon: <Code className="h-5 w-5" />,
        },
        {
            title: "Sample Code Libraries",
            description: "Ready-to-use code in Python, Node.js, and more",
            category: "Code Examples",
            readTime: "10 min read",
            icon: <FileCode className="h-5 w-5" />,
        },
    ];

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="API & Integrations Help - Trilio.ai"
                description="Developer guides for Trilio.ai API, webhooks, custom integrations, and code libraries. REST API reference and authentication documentation."
                canonical="/resources/help/api-integrations"
            />
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-50 to-purple-100 pt-36 pb-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        API & Integrations
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Build powerful integrations with Trilio's comprehensive API
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
                            <span className="text-sm font-medium text-gray-700">
                                💻 REST API
                            </span>
                        </div>
                        <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
                            <span className="text-sm font-medium text-gray-700">
                                🔗 Webhooks
                            </span>
                        </div>
                        <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
                            <span className="text-sm font-medium text-gray-700">
                                📚 Code Libraries
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-6 py-12">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {filteredArticles.length} Developer Guides
                    </h2>
                    <p className="text-gray-600">
                        Everything you need to build with Trilio's API
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map((article, index) => (
                        <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                            <CardHeader>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                                        {article.icon}
                                    </div>
                                    <Badge variant="outline">{article.category}</Badge>
                                </div>
                                <CardTitle className="text-lg group-hover:text-indigo-600 transition-colors">
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
                        <p className="text-gray-600">No developer guides found matching your search.</p>
                    </div>
                )}
            </section>

            <section className="container mx-auto px-6 py-12 border-t">
                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-gradient-to-br from-indigo-50 to-purple-50">
                        <CardHeader>
                            <CardTitle>Full API Documentation</CardTitle>
                            <CardDescription>Complete reference for all endpoints, parameters, and responses</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link to="/resources/developer-docs">
                                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                                    View API Docs
                                </button>
                            </Link>
                        </CardContent>
                    </Card>
                    <Card className="border-indigo-200">
                        <CardHeader>
                            <CardTitle>Need Developer Support?</CardTitle>
                            <CardDescription>Our technical team can help with integration questions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link to="/contact-form?type=developer">
                                <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">
                                    Contact Developers
                                </button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <LegacyFooter />
        </div>
    );
};

export default ApiIntegrations;
