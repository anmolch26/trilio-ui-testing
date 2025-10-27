import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RouteCanonical from "@/components/RouteCanonical";
import {
  getBlogPostBySlug,
  getNextBlogPost,
  getPreviousBlogPost,
} from "@/data/blogData.tsx";

const DynamicBlog = () => {
  const { blogSlug } = useParams<{ blogSlug: string }>();
  const navigate = useNavigate();
  const blogPost = getBlogPostBySlug(blogSlug || "");

  if (!blogPost) {
    return (
      <PageLayout backgroundClass="bg-white">
        <ThemeSection background="white" padding="xl" className="pt-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The blog post you're looking for doesn't exist.
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

  const previousPost = getPreviousBlogPost(blogPost.id);
  const nextPost = getNextBlogPost(blogPost.id);

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
      <ThemeSection background="white" padding="xl" className="pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Blog Post */}
          <article className="mb-16">
            {/* Blog Header - Generic Structure */}

            <header className="mb-8">
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
            <div className="mb-8">
              <img
                src={blogPost.featuredImage}
                fetchPriority="high"
                alt={blogPost.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Blog Content - Only the unique content */}
            <div className="prose prose-lg max-w-none text-black prose-headings:text-black prose-headings:font-bold prose-h2:mb-4 prose-h3:mb-3 prose-p:text-black prose-p:mb-4 prose-li:text-black">
              {blogPost.content}
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
