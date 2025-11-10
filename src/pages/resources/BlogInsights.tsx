import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Check, ChevronLeft, ChevronRight } from "lucide-react";
import LeadershipTeam from "../about/LeadershipTeam";
import { Navbar } from "@/components";
import LegacyFooter from "@/components/LegacyFooter";

const BlogInsights = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12; // Show 12 blogs per page
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [blogPosts, setBlogPosts] = useState<Array<{
    id: number;
    slug: string;
    title: string;
    author: string;
    category: string;
    date: string;
    image: string;
    summary: string;
  }>>([]);
  const [trendingBlog, setTrendingBlog] = useState<{
    id: number;
    slug: string;
    title: string;
    author: string;
    category: string;
    date: string;
    image: string;
    summary: string;
  } | null>(null);

  const formatDate = (iso: string | null | undefined) => {
    if (!iso) return "";
    try {
      const d = new Date(iso);
      return d.toLocaleDateString(undefined, {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });
    } catch {
      return "";
    }
  };

  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const PAGE_LIMIT = 340;
      let offset = 0;
      let hasMore = true;
      const all: Array<any> = [];
      while (hasMore) {
        const url = `https://staging.trilio.ai/api/auth/v1/blogs?limit=${PAGE_LIMIT}&offset=${offset}`;
        const response = await fetch(url, {
          method: "GET",
          headers: { "Accept": "application/json" },
        });
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);
        const json = await response.json();
        const pageBlogs = (json?.data?.blogs ?? []) as Array<any>;
        all.push(...pageBlogs);
        hasMore = Boolean(json?.data?.has_more);
        offset += PAGE_LIMIT;
        // safety: don't loop forever
        if (offset > 1000) break;
      }
      const mapped = all.map((b) => ({
        id: Number(b.id),
        slug: String(b.slug ?? ""),
        title: String(b.title ?? "Untitled"),
        author: String(b.author ?? ""),
        category: String(b.category ?? ""),
        date: formatDate(b.published_at),
        image: String(b.featured_image_url ?? ""),
        summary: String(b.title ?? ""),
      }));
      setBlogPosts(mapped);

      // Find trending blog (Black Friday/Cyber Monday Preparedness)
      const trending = mapped.find((b) =>
        b.title.toLowerCase().includes("black friday") ||
        b.title.toLowerCase().includes("cyber monday")
      );
      if (trending) {
        setTrendingBlog(trending);
      }
    } catch (err: any) {
      setError(err?.message || "Failed to load blogs.");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of blog section
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, searchQuery]);

  // blogPosts are loaded from backend via fetch

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

  // Pagination calculations
  const totalPages = Math.ceil(filteredPosts.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than or equal to max visible pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Show smart pagination with ellipsis
      if (currentPage <= 3) {
        // Show first pages
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Show last pages
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // Show middle pages
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="h-screen">
      <div className="min-h-screen bg-white">
        <Navbar />
        <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Explore What We're Thinking
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Product updates, best practices, and e-commerce strategy from the
                Trilio team.
              </p>
            </div>

            {/* Trending Blog Card */}
            {trendingBlog && (
              <div className="max-w-6xl mx-auto">
                <Link to={`/resources/blog-insights/${trendingBlog.slug}`} className="block">
                  <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 bg-white cursor-pointer hover:scale-[1.01] h-[400px] md:h-[450px] rounded-2xl">
                    {/* Background Image */}
                    <img
                      src={trendingBlog.image}
                      alt={trendingBlog.title}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl  text-white mb-4 leading-tight">
                        {trendingBlog.title}
                      </h2>
                      <div className="flex items-center gap-3 text-sm text-white/80">
                        <span>{trendingBlog.date}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            )}
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-black placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Blog Grid / Loading / Error */}
              {loading ? (
                <div className="py-16 text-center text-gray-600">Loading blogs…</div>
              ) : error ? (
                <div className="py-16 text-center">
                  <p className="text-red-600 mb-4">{error}</p>
                  <button
                    onClick={fetchBlogs}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50 h-9 px-4"
                  >
                    Retry
                  </button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentPosts.map((post) => (
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
                          <Link
                            to={`/resources/blog-insights/${post.slug}`}
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-teal-200 bg-background hover:bg-teal-50 hover:text-accent-foreground h-9 px-3 text-teal-600"
                          >
                            Read More
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {!loading && !error && totalPages > 1 && (
                <div className="flex justify-center items-center mt-12">
                  {/* Previous Button */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg border-2 transition-all duration-200 mr-4 ${
                      currentPage === 1
                        ? "bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed"
                        : "bg-white border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center space-x-1">
                    {getPageNumbers().map((pageNum, index) => (
                      <React.Fragment key={index}>
                        {pageNum === '...' ? (
                          <div className="w-10 h-10 flex items-center justify-center text-gray-400 font-medium">
                            ...
                          </div>
                        ) : (
                          <button
                            onClick={() => handlePageChange(pageNum as number)}
                            className={`w-10 h-10 flex items-center justify-center rounded-lg border-2 font-medium text-base transition-all duration-200 ${
                              currentPage === pageNum
                                ? "bg-white border-blue-500 text-blue-600"
                                : "bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                            }`}
                          >
                            {pageNum}
                          </button>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg border-2 transition-all duration-200 ml-4 ${
                      currentPage === totalPages
                        ? "bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed"
                        : "bg-white border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}

              
            </div>
          </div>
        </div>
        </div>
        <LegacyFooter />
      </div>
    </div>
  );
};

export default BlogInsights;
