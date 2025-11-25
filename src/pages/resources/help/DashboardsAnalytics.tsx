import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/NavBar";
import LegacyFooter from "@/components/LegacyFooter";
import Seo from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, BarChart3, LineChart, PieChart, TrendingUp } from "lucide-react";

const DashboardsAnalytics = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const articles = [
        {
            title: "Creating Your First Dashboard",
            description: "Learn how to build custom dashboards tailored to your business needs",
            category: "Basics",
            readTime: "5 min read",
            icon: <BarChart3 className="h-5 w-5" />,
        },
        {
            title: "Understanding Attribution Models",
            description: "Deep dive into first-click, last-click, and multi-touch attribution",
            category: "Advanced",
            readTime: "8 min read",
            icon: <LineChart className="h-5 w-5" />,
        },
        {
            title: "Custom Metrics and KPIs",
            description: "Create custom calculated fields and track your unique business metrics",
            category: "Intermediate",
            readTime: "6 min read",
            icon: <PieChart className="h-5 w-5" />,
        },
        {
            title: "Real-Time Analytics Setup",
            description: "Configure real-time data updates for your critical dashboards",
            category: "Advanced",
            readTime: "7 min read",
            icon: <TrendingUp className="h-5 w-5" />,
        },
        {
            title: "Dashboard Sharing and Permissions",
            description: "Control who can view and edit your dashboards",
            category: "Basics",
            readTime: "4 min read",
            icon: <BarChart3 className="h-5 w-5" />,
        },
        {
            title: "Automated Report Scheduling",
            description: "Set up automated email reports for stakeholders",
            category: "Intermediate",
            readTime: "5 min read",
            icon: <LineChart className="h-5 w-5" />,
        },
    ];

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Dashboards & Analytics Help - Trilio.ai"
                description="Learn how to create custom dashboards, understand attribution models, and customize analytics in Trilio.ai. Comprehensive guides and tutorials."
                canonical="/resources/help/dashboards-analytics"
            />
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-purple-50 to-blue-100 pt-36 pb-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Dashboards & Analytics
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Create powerful dashboards, customize analytics, and build reports tailored to your business
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
                            <span className="text-sm font-medium text-gray-700">
                                📊 Custom Dashboards
                            </span>
                        </div>
                        <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
                            <span className="text-sm font-medium text-gray-700">
                                📈 Real-time Analytics
                            </span>
                        </div>
                        <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
                            <span className="text-sm font-medium text-gray-700">
                                🎯 Attribution Models
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="container mx-auto px-6 py-12">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {filteredArticles.length} Articles
                    </h2>
                    <p className="text-gray-600">
                        Everything you need to know about dashboards and analytics
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map((article, index) => (
                        <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                            <CardHeader>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                                        {article.icon}
                                    </div>
                                    <Badge variant="outline">{article.category}</Badge>
                                </div>
                                <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
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
                        <p className="text-gray-600">No articles found matching your search.</p>
                    </div>
                )}
            </section>

            {/* Related Categories */}
            <section className="container mx-auto px-6 py-12 border-t">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Categories</h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <Link to="/resources/help/data-integration" className="p-4 border rounded-lg hover:border-purple-500 hover:shadow-md transition-all">
                        <h4 className="font-semibold text-gray-900 mb-1">Data Integration</h4>
                        <p className="text-sm text-gray-600">Connect your data sources</p>
                    </Link>
                    <Link to="/resources/getting-started" className="p-4 border rounded-lg hover:border-purple-500 hover:shadow-md transition-all">
                        <h4 className="font-semibold text-gray-900 mb-1">Getting Started</h4>
                        <p className="text-sm text-gray-600">Setup guides and tutorials</p>
                    </Link>
                    <Link to="/resources/help/api-integrations" className="p-4 border rounded-lg hover:border-purple-500 hover:shadow-md transition-all">
                        <h4 className="font-semibold text-gray-900 mb-1">API & Integrations</h4>
                        <p className="text-sm text-gray-600">Developer resources</p>
                    </Link>
                </div>
            </section>

            <LegacyFooter />
        </div>
    );
};

export default DashboardsAnalytics;
