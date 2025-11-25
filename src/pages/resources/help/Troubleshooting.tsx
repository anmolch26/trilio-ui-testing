import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/NavBar";
import LegacyFooter from "@/components/LegacyFooter";
import Seo from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, AlertTriangle, Bug, RefreshCw, WifiOff } from "lucide-react";

const Troubleshooting = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const articles = [
        {
            title: "Data Not Syncing",
            description: "Quick fixes for when your data isn't updating",
            category: "Common Issues",
            readTime: "5 min read",
            icon: <RefreshCw className="h-5 w-5" />,
        },
        {
            title: "Connection Errors",
            description: "Resolving integration connection failures",
            category: "Connectivity",
            readTime: "6 min read",
            icon: <WifiOff className="h-5 w-5" />,
        },
        {
            title: "Login Issues",
            description: "Can't access your account? Start here",
            category: "Account",
            readTime: "4 min read",
            icon: <AlertTriangle className="h-5 w-5" />,
        },
        {
            title: "Dashboard Not Loading",
            description: "Troubleshoot slow or failing dashboard renders",
            category: "Performance",
            readTime: "5 min read",
            icon: <Bug className="h-5 w-5" />,
        },
        {
            title: "Missing Data Issues",
            description: "Why some data might not appear in reports",
            category: "Common Issues",
            readTime: "7 min read",
            icon: <AlertTriangle className="h-5 w-5" />,
        },
        {
            title: "Export Failures",
            description: "Fix issues with exporting reports and data",
            category: "Reports",
            readTime: "4 min read",
            icon: <Bug className="h-5 w-5" />,
        },
    ];

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Troubleshooting Help - Trilio.ai"
                description="Fix common issues with Trilio.ai including data sync problems, connection errors, login issues, and dashboard performance. Quick solutions and fixes."
                canonical="/resources/help/troubleshooting"
            />
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-red-50 to-orange-100 pt-36 pb-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Troubleshooting
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Fix problems quickly with our comprehensive troubleshooting guides
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
                            <span className="text-sm font-medium text-gray-700">
                                ⚡ Quick Fixes
                            </span>
                        </div>
                        <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
                            <span className="text-sm font-medium text-gray-700">
                                🔧 Common Issues
                            </span>
                        </div>
                        <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
                            <span className="text-sm font-medium text-gray-700">
                                💬 24/7 Support
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-12 bg-gradient-to-br from-red-50 via-orange-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-red-100 text-red-700">
                            <AlertTriangle className="h-5 w-5 mr-2" />
                            <span className="font-medium">Troubleshooting</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Common Issues and Solutions
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Fix problems quickly with our comprehensive troubleshooting guides
                        </p>

                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <Input
                                type="text"
                                placeholder="Describe your issue..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 py-6 text-lg border-gray-200 focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-12">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {filteredArticles.length} Solutions
                    </h2>
                    <p className="text-gray-600">
                        Quick fixes for common problems
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map((article, index) => (
                        <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                            <CardHeader>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
                                        {article.icon}
                                    </div>
                                    <Badge variant="outline">{article.category}</Badge>
                                </div>
                                <CardTitle className="text-lg group-hover:text-red-600 transition-colors">
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
                        <p className="text-gray-600">No solutions found. Try a different search or contact support.</p>
                    </div>
                )}
            </section>

            <section className="container mx-auto px-6 py-12 border-t">
                <Card className="bg-gradient-to-br from-red-50 to-orange-50">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Still Having Issues?</CardTitle>
                        <CardDescription className="text-lg">Our support team is ready to help</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center gap-4">
                        <Link to="/contact-form?type=support">
                            <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700">
                                Contact Support
                            </button>
                        </Link>
                        <Link to="/resources/help-center">
                            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                                Browse Help Center
                            </button>
                        </Link>
                    </CardContent>
                </Card>
            </section>

            <LegacyFooter />
        </div>
    );
};

export default Troubleshooting;
