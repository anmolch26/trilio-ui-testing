import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/NavBar";
import LegacyFooter from "@/components/LegacyFooter";
import Seo from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, CreditCard, DollarSign, Package, Users } from "lucide-react";

const BillingPlans = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const articles = [
        {
            title: "Choosing the Right Plan",
            description: "Compare plans and find the best fit for your business size",
            category: "Plans",
            readTime: "4 min read",
            icon: <Package className="h-5 w-5" />,
        },
        {
            title: "Upgrading Your Subscription",
            description: "How to upgrade to access more features and data sources",
            category: "Account",
            readTime: "3 min read",
            icon: <CreditCard className="h-5 w-5" />,
        },
        {
            title: "Payment Methods and Billing",
            description: "Manage payment methods, invoices, and billing cycles",
            category: "Billing",
            readTime: "5 min read",
            icon: <DollarSign className="h-5 w-5" />,
        },
        {
            title: "Team Member Management",
            description: "Add, remove, and manage team member access and permissions",
            category: "Teams",
            readTime: "6 min read",
            icon: <Users className="h-5 w-5" />,
        },
        {
            title: "Cancellation and Refunds",
            description: "Understanding our cancellation policy and refund process",
            category: "Account",
            readTime: "4 min read",
            icon: <CreditCard className="h-5 w-5" />,
        },
        {
            title: "Enterprise Plan Benefits",
            description: "Dedicated support, custom integrations, and priority features",
            category: "Plans",
            readTime: "7 min read",
            icon: <Package className="h-5 w-5" />,
        },
    ];

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Billing & Plans Help - Trilio.ai"
                description="Manage your Trilio.ai subscription, billing, payments, and team members. Learn about plans, upgrades, and account management."
                canonical="/resources/help/billing-plans"
            />
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-orange-50 to-yellow-100 pt-36 pb-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Billing & Plans
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Manage your subscription, billing, payments, and team access
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
                            <span className="text-sm font-medium text-gray-700">
                                💳 Flexible Billing
                            </span>
                        </div>
                        <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
                            <span className="text-sm font-medium text-gray-700">
                                👥 Team Management
                            </span>
                        </div>
                        <div className="bg-white px-6 py-3 rounded-full shadow-sm border">
                            <span className="text-sm font-medium text-gray-700">
                                📊 Plan Upgrades
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-12 bg-gradient-to-br from-orange-50 via-yellow-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <Input
                                type="text"
                                placeholder="Search billing help..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 py-6 text-lg border-gray-200 focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-12">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {filteredArticles.length} Articles
                    </h2>
                    <p className="text-gray-600">
                        Everything about plans, billing, and account management
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map((article, index) => (
                        <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                            <CardHeader>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                                        {article.icon}
                                    </div>
                                    <Badge variant="outline">{article.category}</Badge>
                                </div>
                                <CardTitle className="text-lg group-hover:text-orange-600 transition-colors">
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
                        <p className="text-gray-600">No billing articles found matching your search.</p>
                    </div>
                )}
            </section>

            <section className="container mx-auto px-6 py-12 border-t">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Need Help?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-gradient-to-br from-orange-50 to-yellow-50">
                        <CardHeader>
                            <CardTitle>Contact Billing Support</CardTitle>
                            <CardDescription>Our team is here to help with billing questions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link to="/contact-form?type=billing">
                                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                                    Get Help
                                </button>
                            </Link>
                        </CardContent>
                    </Card>
                    <Link to="/pricing" className="block">
                        <Card className="hover:shadow-lg transition-all h-full">
                            <CardHeader>
                                <CardTitle>View Pricing Plans</CardTitle>
                                <CardDescription>Compare all available plans and features</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <span className="text-orange-600 font-medium">View Plans →</span>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            </section>

            <LegacyFooter />
        </div>
    );
};

export default BillingPlans;
