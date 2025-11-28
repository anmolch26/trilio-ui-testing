import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock, Calendar } from "lucide-react";
import { Breadcrumb, generateBreadcrumbJsonLd } from "@/components/Breadcrumb";
import { BlogSidebar } from "@/components/BlogSidebar";
import Seo from "@/components/Seo";
import "@/data/generated/ecommerceArticle.css";

const DynamicBlog = () => {
  const { blogSlug } = useParams<{ blogSlug: string }>();
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const [apiPost, setApiPost] = React.useState<
    | {
      id: number;
      slug: string;
      title: string;
      author: string;
      authorImage?: string;
      category?: string;
      date: string;
      featuredImage?: string;
      contentHtml: string;
      metaDescription?: string;
    }
    | null
  >(null);
  const [relatedPosts, setRelatedPosts] = React.useState<Array<{
    id: number;
    slug: string;
    title: string;
    date: string;
    featuredImage?: string;
    readTime?: string;
  }>>([]);
  const [allBlogs, setAllBlogs] = React.useState<Array<{
    id: number;
    slug: string;
    title: string;
  }>>([]);

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

  React.useEffect(() => {
    let isMounted = true;
    const fetchBySlug = async () => {
      if (!blogSlug) return;
      setLoading(true);
      setError(null);
      try {
        // Fetch the specific blog by slug
        const url = `https://staging.trilio.ai/api/auth/v1/blogs/${blogSlug}`;
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });

        if (!res.ok) {
          if (res.status === 404) {
            throw new Error('Blog not found');
          }
          throw new Error(`Request failed: ${res.status}`);
        }

        const json = await res.json();
        const blog = json?.data; // API returns blog directly in data, not data.blog

        if (isMounted && blog) {
          setApiPost({
            id: Number(blog.id),
            slug: String(blog.slug ?? ""),
            title: String(blog.title ?? "Untitled"),
            author: String(blog.author ?? ""),
            authorImage: String(blog.author_image ?? ""),
            category: String(blog.category ?? ""),
            date: formatDate(blog.published_at),
            featuredImage: String(blog.featured_image_url ?? ""),
            contentHtml: String(blog.content_html ?? ""),
            metaDescription: blog.meta_description
              ? String(blog.meta_description)
              : blog.excerpt
                ? String(blog.excerpt)
                : (blog.content_html ? String(blog.content_html).replace(/<[^>]+>/g, '').slice(0, 160) + "..." : ""),
          });

          // Fetch all blogs for prev/next navigation and related posts
          try {
            const allBlogsUrl = `https://staging.trilio.ai/api/auth/v1/blogs?limit=1000&offset=0`;
            const allBlogsRes = await fetch(allBlogsUrl, {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            });

            if (allBlogsRes.ok) {
              const allBlogsJson = await allBlogsRes.json();
              const blogs = allBlogsJson?.data?.blogs ?? [];
              const blogsList = blogs.map((b: any) => ({
                id: Number(b.id),
                slug: String(b.slug ?? ""),
                title: String(b.title ?? "Untitled"),
              }));
              setAllBlogs(blogsList);

              // Related posts
              const otherBlogs = blogs.filter((b: any) => String(b.slug) !== String(blogSlug));
              const shuffled = otherBlogs.sort(() => 0.5 - Math.random());
              const selected = shuffled.slice(0, 3).map((b: any) => ({
                id: Number(b.id),
                slug: String(b.slug ?? ""),
                title: String(b.title ?? "Untitled"),
                date: formatDate(b.published_at),
                featuredImage: String(b.featured_image_url ?? ""),
                readTime: "3 min read",
              }));
              setRelatedPosts(selected);
            }
          } catch (err) {
            console.warn('Failed to load related posts:', err);
          }
        } else if (isMounted) {
          setApiPost(null);
        }
      } catch (err: any) {
        if (isMounted) setError(err?.message || "Failed to load blog.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchBySlug();
    return () => {
      isMounted = false;
    };
  }, [blogSlug]);

  if (loading && !apiPost) {
    return (
      <PageLayout backgroundClass="bg-white">
        <section className="bg-white py-20 pt-36">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">Loading…</h1>
            <p className="text-gray-600">Fetching blog post.</p>
          </div>
        </section>
      </PageLayout>
    );
  }



  if (!apiPost && !loading) {
    return (
      <PageLayout backgroundClass="bg-white">
        <section className="bg-white py-20 pt-36">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              {error ? error : "The blog post you're looking for doesn't exist."}
            </p>
            <Button
              onClick={() => navigate("/resources/blog-insights")}
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              Back to Blog
            </Button>
          </div>
        </section>
      </PageLayout>
    );
  }

  const blogPost = {
    id: apiPost!.id,
    slug: apiPost!.slug,
    title: apiPost!.title,
    author: apiPost!.author,
    authorImage: apiPost!.authorImage || "",
    date: apiPost!.date,
    featuredImage: apiPost!.featuredImage || "",
    content: apiPost!.contentHtml, // HTML string
    metaDescription: apiPost!.metaDescription || apiPost!.title,
  };

  // Find previous and next posts from all blogs
  const currentIndex = allBlogs.findIndex((b) => b.slug === blogPost.slug);
  const previousPost = currentIndex > 0 ? allBlogs[currentIndex - 1] : undefined;
  const nextPost = currentIndex >= 0 && currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : undefined;

  const goToPrevious = () => {
    if (previousPost) {
      navigate(`/resources/blog-insights/${previousPost.slug}`);
    }
  };

  const goToNext = () => {
    if (nextPost) {
      navigate(`/resources/blog-insights/${nextPost.slug}`);
    }
  };

  return (
    <PageLayout backgroundClass="bg-white">
      <Seo
        title={blogPost.title}
        description={blogPost.metaDescription}
        image={blogPost.featuredImage}
        type="article"
        author={blogPost.author}
        canonical={`/resources/blog-insights/${blogPost.slug}`}
      />

      {/* BlogPosting JSON-LD for rich results */}
      {(() => {
        const origin = typeof window !== "undefined" ? window.location.origin : "https://trilio.ai";
        const url = `${origin}/resources/blog-insights/${blogPost.slug}`;
        const datePublishedIso = (() => {
          try {
            return new Date(blogPost.date).toISOString();
          } catch {
            return undefined as unknown as string;
          }
        })();
        const jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
          },
          headline: blogPost.title,
          image: [blogPost.featuredImage].filter(Boolean),
          author: {
            '@type': 'Person',
            name: blogPost.author,
            image: blogPost.authorImage,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Trilio.ai',
            logo: {
              '@type': 'ImageObject',
              url: 'https://assets.channeliq.ai/trilio-landing/Hero_Images/cropped_circle_image.png',
            },
          },
          datePublished: datePublishedIso,
          dateModified: datePublishedIso,
          description: blogPost.metaDescription,
          url,
        };
        return (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        );
      })()}
      {/* Breadcrumb JSON-LD for rich results */}
      {(() => {
        const origin = typeof window !== "undefined" ? window.location.origin : "https://trilio.ai";
        const breadcrumbItems = [
          { label: "Blog Insights", href: "/resources/blog-insights" },
          { label: "Blog Post" },
        ];
        const breadcrumbJsonLd = generateBreadcrumbJsonLd(breadcrumbItems, origin);
        return (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
          />
        );
      })()}
      {/* Hero Section with Featured Image Background */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={blogPost.featuredImage}
            fetchPriority="high"
            alt={blogPost.title}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
        </div>

        {/* Hero Content - Breadcrumb, Title and Metadata */}
        <div className="relative h-full flex flex-col justify-between">
          {/* Breadcrumb at top - Commented out but keeping spacing */}
          <div className="container mx-auto px-4 md:px-6 lg:px-12 pt-8">
            {/* <Breadcrumb
              items={[
                { label: "Blog Insights", href: "/resources/blog-insights" },
                { label: "Blog Post" },
              ]}
              className="[&_a]:text-white/80 [&_a]:hover:text-white [&_span]:text-white/60"
            /> */}
          </div>

          {/* Title and Metadata at bottom */}
          <div className="container mx-auto px-4 md:px-6 lg:px-12 pb-12 md:pb-16">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                {blogPost.title}
              </h1>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <img
                    src={blogPost.authorImage}
                    alt={blogPost.author}
                    className="w-8 h-8 rounded-full object-cover border-2 border-white/50"
                  />
                  <span className="font-medium">by {blogPost.author}</span>
                </div>
                <span className="text-white/50">|</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>3 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPost.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-12 pl-4 md:pl-6 lg:pl-12 pr-10">
        <div>
          {/* Blog Post */}
          <article className="mb-16">

            {/* Two-column layout: Sidebar on left, Content on right - Starting from text */}
            <div className="flex flex-col lg:flex-row gap-0">
              {/* Left Sidebar - Starts aligned with content text */}
              <aside className="lg:w-60 flex-shrink-0">
                <div className="lg:sticky lg:top-24">
                  <BlogSidebar
                    blogTitle={blogPost.title}
                    blogUrl={`https://trilio.ai/resources/blog-insights/${blogPost.slug}`}
                  />
                </div>
              </aside>

              {/* Right Column - Blog Content */}
              <div className="flex-1 min-w-0">
                {!blogPost.content || blogPost.content === "" ? (
                  <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-lg text-center">
                    <p className="text-yellow-800 font-medium">No content available for this blog post.</p>
                    <p className="text-yellow-600 text-sm mt-2">The blog content might still be in draft or hasn't been published yet.</p>
                  </div>
                ) : typeof blogPost.content === "string" ? (
                  <div
                    className="ecommerce-article"
                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                  />
                ) : (
                  <div className="prose prose-lg max-w-none text-black prose-headings:text-black prose-headings:font-bold prose-h2:mb-4 prose-h3:mb-3 prose-p:text-black prose-p:mb-4 prose-li:text-black">
                    {blogPost.content}
                  </div>
                )}

                {/* CTA Button */}
                <div className="cta-container mt-12 text-center">
                  <a
                    href="https://trilio.ai/"
                    className="cta-button inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    Explore Trilio
                    <span className="text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Author Card */}
            <div className="flex justify-center mt-16 mb-8">
              <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-6xl w-full">
                <div className="flex items-center gap-6">
                  <img
                    src={blogPost.authorImage}
                    alt={blogPost.author}
                    className="w-32 h-32 rounded-full object-cover flex-shrink-0 shadow-md"
                  />
                  <div className="flex-1">
                    <div className="mb-1">
                      <h3 className="text-2xl font-bold text-gray-900">{blogPost.author}</h3>
                    </div>
                    <p className={`font-medium mb-3 ${blogPost.author.toLowerCase().includes('om') && blogPost.author.toLowerCase().includes('rathod') ? 'text-black' : 'text-gray-600'}`}>
                      {blogPost.author.toLowerCase().includes('nirjar') || blogPost.author.toLowerCase().includes('sanghavi')
                        ? 'Co-founder & CEO'
                        : blogPost.author.toLowerCase().includes('om') && blogPost.author.toLowerCase().includes('rathod')
                          ? 'Co-founder & CRO'
                          : 'Content Contributor'}
                    </p>
                    <p className={`text-base leading-relaxed mb-4 ${blogPost.author.toLowerCase().includes('om') && blogPost.author.toLowerCase().includes('rathod') ? 'text-black' : 'text-gray-600'}`}>
                      {blogPost.author.toLowerCase().includes('nirjar') || blogPost.author.toLowerCase().includes('sanghavi')
                        ? "Visionary leader with 20+ years of deep expertise in eCommerce analytics and business intelligence at companies like Samsung, Groupon, eBay, PayPal, and Chase. Nirjar founded Trilio with the mission to democratize data-driven decision making for online merchants. With background in Ecommerce, Data Science, Analytics, Nirjar brings a rare mix of technical depth and business acumen to Trilio."
                        : blogPost.author.toLowerCase().includes('om') && blogPost.author.toLowerCase().includes('rathod')
                          ? "Revenue growth leader and co-founder driving Trilio's commercial strategy. Om has led the product vision and execution from scratch. With a strong background in SaaS sales and GTM strategy, Om bridges product innovation with real-world customer needs driving both adoption and growth."
                          : "Content author and contributor at Trilio.ai, sharing insights on e-commerce analytics, business intelligence, and data-driven strategies to help businesses grow and optimize their performance."}
                    </p>
                    <a
                      href={blogPost.author.toLowerCase().includes('nirjar') || blogPost.author.toLowerCase().includes('sanghavi')
                        ? "https://www.linkedin.com/in/nirjar"
                        : blogPost.author.toLowerCase().includes('om') && blogPost.author.toLowerCase().includes('rathod')
                          ? "https://www.linkedin.com/in/om-rathod-9123031a5"
                          : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex items-center justify-between text-gray-900 pt-8 border-t border-gray-200 gap-4">
            {previousPost ? (
              <Button
                variant="outline"
                onClick={goToPrevious}
                className="flex items-center space-x-2 max-w-[45%] text-left"
              >
                <ChevronLeft className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">{previousPost.title}</span>
              </Button>
            ) : (
              <div className="flex-1"></div>
            )}

            {nextPost ? (
              <Button
                variant="outline"
                onClick={goToNext}
                className="flex items-center space-x-2 max-w-[45%] text-right ml-auto"
              >
                <span className="truncate">{nextPost.title}</span>
                <ChevronRight className="h-4 w-4 flex-shrink-0" />
              </Button>
            ) : (
              <div className="flex-1"></div>
            )}
          </div>

          {/* You may also like Section */}
          {relatedPosts.length > 0 && (
            <section className="py-16 border-t border-gray-200 mt-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-2">
                  Continue Reading
                </h2>
                <p className="text-gray-500 text-sm mb-3">explore more insights</p>
                <div className="w-16 h-0.5 bg-teal-400 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {relatedPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => navigate(`/resources/blog-insights/${post.slug}`)}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.featuredImage || "https://via.placeholder.com/400x300"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-teal-700 mb-3 line-clamp-2 group-hover:text-teal-800 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {post.date} | {post.readTime}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default DynamicBlog;
