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
import { Search, Calendar, Clock, User, Check } from "lucide-react";
import { getAllBlogPosts, BlogPost } from "@/data/blogData";

const BlogInsights = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleBlogs, setVisibleBlogs] = useState(12); // Show 12 blogs initially
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/resources/blog-insights/blog");
  };

  const categories = [
    "Analytics",
    "Product",
    "E-commerce",
    "Marketing",
    "Leadership",
    "AI",
  ];

  // Handle category selection
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((cat) => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  // Handle select all
  const handleSelectAll = () => {
    if (selectedCategories.length === categories.length) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories([...categories]);
    }
  };

  // Handle load more blogs
  const handleLoadMore = () => {
    setVisibleBlogs((prev) => prev + 12);
  };

  // Reset visible blogs when filters change
  React.useEffect(() => {
    setVisibleBlogs(12);
  }, [selectedCategories, searchQuery]);

  // Get all blogs from blogData.tsx and transform them for display
  const allBlogPosts = getAllBlogPosts();

  // Transform blog posts to use featuredImage and mark first blog as featured
  const blogPosts = allBlogPosts.map((post) => ({
    ...post,
    summary: post.title, // Use title as summary for search functionality
    image: post.featuredImage, // Map featuredImage to image for compatibility
    featured: post.id === 1, // Mark first blog as featured
  }));

  // Derived helpers for category UI
  const isAllSelected = selectedCategories.length === categories.length;
  const categoryCounts: Record<string, number> = React.useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach((c) => {
      counts[c] = blogPosts.filter((p) => p.category === c).length;
    });
    return counts;
  }, [blogPosts]);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((category) => post.category === category);
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
              <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Categories
                </h2>

                {/* Selected category chips hidden by request */}

                <div className="space-y-2">
                  {/* Individual categories as pill toggles */}
                  {categories.map((category) => {
                    const active = selectedCategories.includes(category);
                    return (
                      <button
                        key={category}
                        onClick={() => handleCategoryToggle(category)}
                        className={`group w-full flex items-center justify-between px-4 py-2.5 rounded-xl border transition-all ${
                          active
                            ? "bg-gradient-to-r from-teal-50 to-blue-50 border-teal-200 text-teal-900 ring-1 ring-teal-200"
                            : "bg-white border-gray-200 hover:bg-gray-50"
                        }`}
                        aria-pressed={active}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${
                              active ? "bg-teal-500" : "bg-gray-300"
                            }`}
                          ></span>
                          <span className="text-gray-800 font-medium">
                            {category}
                          </span>
                        </span>
                        {active && <Check className="h-4 w-4 text-teal-600" />}
                      </button>
                    );
                  })}
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
                {filteredPosts.slice(0, visibleBlogs).map((post) => (
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
                            navigate(`/resources/blog-insights/${post.slug}`)
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

              {/* Load More Button */}
              {visibleBlogs < filteredPosts.length && (
                <div className="text-center mt-8">
                  <Button
                    onClick={handleLoadMore}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg"
                  >
                    Load More
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogInsights;
