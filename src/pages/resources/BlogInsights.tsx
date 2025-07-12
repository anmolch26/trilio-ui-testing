import React, { useState } from "react";
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

  const categories = [
    "All",
    "Product",
    "E-commerce",
    "Marketing",
    "Leadership",
    "AI",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in E-commerce Analytics",
      summary:
        "How artificial intelligence is transforming the way businesses understand customer behavior and predict market trends.",
      category: "AI",
      author: "Sarah Chen",
      date: "Dec 10, 2024",
      readTime: "5 min",
      image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
      featured: true,
    },
    {
      id: 2,
      title: "Building Better Dashboards: A Data Visualization Guide",
      summary:
        "Best practices for creating dashboards that actually drive business decisions and improve team productivity.",
      category: "Product",
      author: "Mike Rodriguez",
      date: "Dec 8, 2024",
      readTime: "7 min",
      image: "/lovable-uploads/3d1cb2ff-526f-4de5-b7ff-85618d692167.png",
    },
    {
      id: 3,
      title: "Performance Marketing Metrics That Actually Matter",
      summary:
        "Cut through the noise and focus on the KPIs that drive real business growth in 2024.",
      category: "Marketing",
      author: "Jessica Park",
      date: "Dec 5, 2024",
      readTime: "6 min",
      image: "/lovable-uploads/41f6f133-b265-45dc-a051-e55b3b3ca5bd.png",
    },
    {
      id: 4,
      title: "Leading Remote Teams in the Commerce Space",
      summary:
        "Insights from Trilio's leadership team on building culture and driving results in a distributed workforce.",
      category: "Leadership",
      author: "David Kim",
      date: "Dec 3, 2024",
      readTime: "8 min",
      image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
    },
    {
      id: 5,
      title: "E-commerce Trends Shaping 2025",
      summary:
        "From social commerce to AI personalization, here's what's coming next in online retail.",
      category: "E-commerce",
      author: "Lisa Wang",
      date: "Nov 28, 2024",
      readTime: "10 min",
      image: "/lovable-uploads/5ec4610f-3977-4d38-bfb3-389cf824ed85.jpg",
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

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Search and Filters */}
            <div className="mb-8">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
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

            {/* Featured Post */}
            {filteredPosts.find((post) => post.featured) && (
              <Card className="mb-8 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={filteredPosts.find((post) => post.featured)?.image}
                      alt={filteredPosts.find((post) => post.featured)?.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <Badge className="mb-3">
                      {filteredPosts.find((post) => post.featured)?.category}
                    </Badge>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {filteredPosts.find((post) => post.featured)?.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {filteredPosts.find((post) => post.featured)?.summary}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">
                        {filteredPosts.find((post) => post.featured)?.author}
                      </span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">
                        {filteredPosts.find((post) => post.featured)?.date}
                      </span>
                      <Clock className="h-4 w-4 mr-2" />
                      <span>
                        {filteredPosts.find((post) => post.featured)?.readTime}
                      </span>
                    </div>
                    <Button>Read More</Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPosts
                .filter((post) => !post.featured)
                .map((post) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-xs text-gray-500">
                          {post.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-lg hover:text-purple-600 transition-colors duration-200">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">
                        {post.summary}
                      </CardDescription>
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-2" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{post.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories
                      .filter((cat) => cat !== "All")
                      .map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                          {category}
                        </button>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subscribe to Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Get the latest insights delivered to your inbox.
                  </p>
                  <Button className="w-full">Subscribe</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogInsights;
