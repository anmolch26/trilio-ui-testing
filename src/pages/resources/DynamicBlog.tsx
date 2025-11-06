import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RouteCanonical from "@/components/RouteCanonical";
import { Breadcrumb, generateBreadcrumbJsonLd } from "@/components/Breadcrumb";
import { BlogSidebar } from "@/components/BlogSidebar";
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
      }
    | null
  >(null);

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
        const PAGE_LIMIT = 340;
        let offset = 0;
        let hasMore = true;
        let found: any = null;
        while (hasMore && !found) {
          const url = `https://staging.trilio.ai/api/auth/v1/blogs?limit=${PAGE_LIMIT}&offset=${offset}`;
          const res = await fetch(url, {
            method: "GET",
            headers: { Accept: "application/json" },
          });
          if (!res.ok) throw new Error(`Request failed: ${res.status}`);
          const json = await res.json();
          const list = (json?.data?.blogs ?? []) as Array<any>;
          found = list.find((b) => String(b.slug) === String(blogSlug));
          hasMore = Boolean(json?.data?.has_more);
          offset += PAGE_LIMIT;
          if (offset > 1000) break;
        }
        if (isMounted && found) {
          setApiPost({
            id: Number(found.id),
            slug: String(found.slug ?? ""),
            title: String(found.title ?? "Untitled"),
            author: String(found.author ?? ""),
            authorImage: String(found.author_image ?? ""),
            category: String(found.category ?? ""),
            date: formatDate(found.published_at),
            featuredImage: String(found.featured_image_url ?? ""),
            contentHtml: String(found.content_html ?? ""),
          });
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
        <ThemeSection background="white" padding="xl" className="pt-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">Loading…</h1>
            <p className="text-gray-600">Fetching blog post.</p>
          </div>
        </ThemeSection>
      </PageLayout>
    );
  }

  if (!apiPost && !loading) {
    return (
      <PageLayout backgroundClass="bg-white">
        <ThemeSection background="white" padding="xl" className="pt-24">
          <div className="max-w-4xl mx-auto text-center">
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
        </ThemeSection>
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
  };

  // Note: Previous/Next navigation removed since API doesn't provide adjacent posts
  const previousPost = undefined;
  const nextPost = undefined;

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
      <RouteCanonical path={`/resources/blog-insights/${blogPost.slug}`} />
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
          description: blogPost.title,
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
      <ThemeSection background="white" padding="xl" className="pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <Breadcrumb
            items={[
              { label: "Blog Insights", href: "/resources/blog-insights" },
              { label: "Blog Post" },
            ]}
            className="mb-6"
          />
          
          {/* Blog Post */}
          <article className="mb-16">
            {/* Blog Header - Generic Structure */}

            <header className="mb-8 max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {blogPost.title}
              </h1>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <img
                  src={blogPost.authorImage}
                  alt={blogPost.author}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <span className="font-medium">{blogPost.author}</span>
                <span className="mx-2">•</span>
                <span>{blogPost.date}</span>
              </div>
            </header>
            
            {/* Featured Image - Full Width, Above Everything */}
            <div className="mb-8">
              <img
                src={blogPost.featuredImage}
                fetchPriority="high"
                alt={blogPost.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Two-column layout: Sidebar on left, Content on right - Starting from text */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Sidebar - Starts aligned with content text */}
              <aside className="lg:w-80 flex-shrink-0 lg:mt-24">
                <div className="lg:sticky lg:top-24">
                  <BlogSidebar 
                    blogTitle={blogPost.title}
                    blogUrl={`https://trilio.ai/resources/blog-insights/${blogPost.slug}`}
                  />
                </div>
              </aside>

              {/* Right Column - Blog Content */}
              <div className="flex-1 min-w-0">
                {typeof blogPost.content === "string" ? (
                  <div
                    className="ecommerce-article"
                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                  />
                ) : (
                  <div className="prose prose-lg max-w-none text-black prose-headings:text-black prose-headings:font-bold prose-h2:mb-4 prose-h3:mb-3 prose-p:text-black prose-p:mb-4 prose-li:text-black">
                    {blogPost.content}
                  </div>
                )}
              </div>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex items-center justify-between text-gray-900 pt-8 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={goToPrevious}
              disabled={!previousPost}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>

            <Button
              variant="outline"
              onClick={goToNext}
              disabled={!nextPost}
              className="flex items-center space-x-2"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default DynamicBlog;
