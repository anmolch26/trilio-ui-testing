import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageLayout from "@/components/theme/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, Search, Calendar, Clock, User } from "lucide-react";

const Blog1 = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const backToTopRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const tocLinksRef = useRef<HTMLAnchorElement[]>([]);
  const sectionsRef = useRef<HTMLElement[]>([]);

  // Blog data
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
      image: "/lovable-uploads/3d1cb2ff-526f-4de5-bd95-00e4ad00eaf3.png",
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
  ];

  const categories = [
    "All",
    "Product",
    "E-commerce",
    "Marketing",
    "Leadership",
    "AI",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Scroll handling
  const handleScroll = () => {
    if (isScrolling) return;

    requestAnimationFrame(() => {
      const scrollY = window.pageYOffset;
      setShowBackToTop(scrollY > 400);

      if (headerRef.current) {
        headerRef.current.style.boxShadow =
          scrollY > 0 ? "var(--shadow-sm)" : "none";
      }

      setIsScrolling(false);
    });

    setIsScrolling(true);
  };

  // Smooth scroll to section
  const smoothScrollToSection = (targetId: string) => {
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
    const targetPosition =
      (targetElement as HTMLElement).offsetTop - headerHeight - 20;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  // Back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Intersection Observer for section highlighting
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Event listeners
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  // Initialize elements
  useEffect(() => {
    tocLinksRef.current = Array.from(
      document.querySelectorAll(".toc__link")
    ) as HTMLAnchorElement[];
    sectionsRef.current = tocLinksRef.current
      .map((link) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          return document.getElementById(href.substring(1)) as HTMLElement;
        }
        return null;
      })
      .filter((section) => section !== null) as HTMLElement[];
  }, []);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="hero bg-gradient-to-br from-blue-50 via-purple-50 to-white py-16 mb-16">
        <div className="container mx-auto px-4">
          <div className="hero__content text-center max-w-4xl mx-auto">
            <h1 className="hero__title text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              The Ultimate Guide to Ecommerce Analytics Platforms in 2025
            </h1>
            <p className="hero__subtitle text-xl text-gray-600 mb-12">
              Transform your scattered data into profitable insights with the
              power of unified analytics
            </p>
            <div className="hero__stats grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="stat-item bg-white p-6 rounded-xl border border-gray-200">
                <strong className="text-2xl font-bold text-teal-600 block mb-2">
                  $6.4T
                </strong>
                <span className="text-sm text-gray-500">
                  Global ecommerce sales by 2029
                </span>
              </div>
              <div className="stat-item bg-white p-6 rounded-xl border border-gray-200">
                <strong className="text-2xl font-bold text-teal-600 block mb-2">
                  72%
                </strong>
                <span className="text-sm text-gray-500">
                  Marketers can't measure ROI holistically
                </span>
              </div>
              <div className="stat-item bg-white p-6 rounded-xl border border-gray-200">
                <strong className="text-2xl font-bold text-teal-600 block mb-2">
                  100K+
                </strong>
                <span className="text-sm text-gray-500">
                  Metrics analyzed with Trilio.ai
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="toc-section bg-yellow-50 py-12 mb-16">
        <div className="container mx-auto px-4">
          <div className="toc bg-white rounded-xl p-8 border border-gray-200 max-w-7xl mx-auto">
            <h2 className="toc__title text-2xl font-bold mb-6 text-center text-black">
              Table of Contents
            </h2>
            <nav className="toc__nav grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="#what-is-platform"
                className="toc__link p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-transparent hover:border-teal-500 text-black"
              >
                What is an Ecommerce Analytics Platform?
              </a>
              <a
                href="#top-features"
                className="toc__link p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-transparent hover:border-teal-500 text-black"
              >
                Top 10 Features Every Platform Must Have
              </a>
              <a
                href="#platform-comparison"
                className="toc__link p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-transparent hover:border-teal-500 text-black"
              >
                Comparing Leading Platforms: Trilio vs Competitors
              </a>
              <a
                href="#roi-calculator"
                className="toc__link p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-transparent hover:border-teal-500 text-black"
              >
                ROI Calculator: Measuring Platform Success
              </a>
              <a
                href="#implementation-guide"
                className="toc__link p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-transparent hover:border-teal-500 text-black"
              >
                Implementation Guide: Getting Started in 30 Days
              </a>
              <a
                href="#future-trends"
                className="toc__link p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-transparent hover:border-teal-500 text-black"
              >
                Future Trends: AI-Powered Analytics in 2025
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main pb-16">
        <div className="container mx-auto px-4">
          <article className="article max-w-7xl mx-auto">
            {/* Introduction */}
            <section className="content-section mb-16 p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <p className="lead text-lg text-gray-700 mb-6">
                The ecommerce landscape has reached an unprecedented milestone.
                With{" "}
                <strong>
                  global retail ecommerce sales surpassing $6.4 trillion by 2029
                </strong>
                , the businesses that win aren't just those with great
                products—they're the ones with superior data intelligence.
              </p>

              <p className="mb-6 text-gray-700">
                But here's the challenge:{" "}
                <strong>
                  72% of marketers feel they cannot measure ROI holistically
                  across all channels
                </strong>
                . If you're running an ecommerce business in 2025 without a
                comprehensive analytics platform, you're essentially flying
                blind in a $6.4 trillion marketplace.
              </p>

              <p className="text-gray-700">
                This guide will show you exactly how to choose, implement, and
                maximize an ecommerce analytics platform that transforms your
                business from reactive to predictive, from guessing to knowing,
                and from scattered insights to unified intelligence.
              </p>
            </section>

            {/* What is an Ecommerce Analytics Platform */}
            <section
              className="content-section mb-16 p-8 bg-white rounded-xl border border-gray-200 shadow-sm"
              id="what-is-platform"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-teal-500 pb-4">
                What is an Ecommerce Analytics Platform?
              </h2>

              <p className="mb-6 text-gray-700">
                An ecommerce analytics platform goes far beyond basic website
                analytics. While traditional tools like Google Analytics tell
                you <em>what</em> happened, modern ecommerce analytics platforms
                reveal the <em>why</em>, <em>when</em>, and <em>what's next</em>
                .
              </p>

              <div className="highlight-box bg-green-50 border border-teal-500 rounded-xl p-6 my-8">
                <h3 className="text-teal-600 font-bold mb-4">
                  Modern ecommerce analytics platforms unify data from multiple
                  sources:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>
                      Shopify, WooCommerce, or custom ecommerce platforms
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Marketing channels (Facebook, Google, TikTok, Amazon)
                    </strong>
                  </li>
                  <li>
                    <strong>Email marketing (Klaviyo, Mailchimp)</strong>
                  </li>
                  <li>
                    <strong>Customer service platforms</strong>
                  </li>
                  <li>
                    <strong>Inventory management systems</strong>
                  </li>
                  <li>
                    <strong>Financial data and payment processors</strong>
                  </li>
                </ul>
              </div>

              <p className="mb-6 text-gray-700">
                The result? A{" "}
                <strong>360-degree view of your customer journey</strong> that
                reveals exactly which touchpoints drive the highest value
                customers and the biggest revenue impact.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                The Evolution: From Reporting to Intelligence
              </h3>

              <p className="mb-6 text-gray-700">
                Traditional analytics focused on{" "}
                <strong>historical reporting</strong>—what happened last month
                or last quarter. Today's platforms offer:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>
                  <strong>Real-time insights</strong> updated within minutes,
                  not hours
                </li>
                <li>
                  <strong>Predictive analytics</strong> that forecast trends
                  before they happen
                </li>
                <li>
                  <strong>AI-powered recommendations</strong> for immediate
                  action
                </li>
                <li>
                  <strong>Automated alerts</strong> when performance deviates
                  from expected patterns
                </li>
                <li>
                  <strong>Cross-channel attribution</strong> that reveals the
                  true customer journey
                </li>
              </ul>
            </section>

            {/* Top 10 Features */}
            <section
              className="content-section mb-16 p-8 bg-white rounded-xl border border-gray-200 shadow-sm"
              id="top-features"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-teal-500 pb-4">
                Top 10 Features Every Ecommerce Analytics Platform Must Have
              </h2>

              <div className="features-grid grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="feature-card bg-blue-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-teal-600 font-bold mb-4">
                    1. Unified Data Integration (12+ Channels)
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Your platform should seamlessly connect with all your
                    business tools.{" "}
                    <strong>Trilio.ai integrates with 12+ platforms</strong>{" "}
                    including Shopify, Amazon, Google Ads, Facebook, TikTok, and
                    Klaviyo without requiring technical expertise.
                  </p>
                  <div className="feature-details mt-6">
                    <h4 className="font-semibold mb-3 text-gray-900">
                      What to look for:
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Pre-built connectors for major platforms</li>
                      <li>Real-time data synchronization</li>
                      <li>Historical data backfill capabilities</li>
                      <li>API access for custom integrations</li>
                    </ul>
                  </div>
                </div>

                <div className="feature-card bg-blue-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-teal-600 font-bold mb-4">
                    2. Real-Time ROAS & CAC Tracking
                  </h3>
                  <p className="mb-4 text-gray-700">
                    <strong>
                      Return on Ad Spend (ROAS) and Customer Acquisition Cost
                      (CAC) are the metrics that matter most
                    </strong>
                    . Your platform should provide instant visibility into these
                    KPIs across all channels.
                  </p>
                  <div className="feature-details mt-6">
                    <h4 className="font-semibold mb-3 text-gray-900">
                      Key capabilities:
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Channel-specific ROAS tracking</li>
                      <li>Blended ROAS across all channels</li>
                      <li>Real-time CAC monitoring</li>
                      <li>Trend analysis and forecasting</li>
                    </ul>
                  </div>
                </div>

                <div className="feature-card bg-blue-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-teal-600 font-bold mb-4">
                    3. Multi-Touch Attribution Modeling
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Understanding the complete customer journey requires
                    sophisticated attribution.{" "}
                    <strong>
                      36 touchpoints occur on average before B2B conversion
                    </strong>
                    , making attribution critical for budget allocation.
                  </p>
                  <div className="feature-details mt-6">
                    <h4 className="font-semibold mb-3 text-gray-900">
                      Essential attribution models:
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>First-touch attribution</li>
                      <li>Last-touch attribution</li>
                      <li>Linear attribution</li>
                      <li>Time-decay attribution</li>
                      <li>Data-driven attribution (AI-powered)</li>
                    </ul>
                  </div>
                </div>

                <div className="feature-card bg-blue-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-teal-600 font-bold mb-4">
                    4. AI-Powered Insights and Alerts
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Modern platforms leverage artificial intelligence to surface
                    insights you might miss.{" "}
                    <strong>
                      AI-driven analytics will become autonomous, not just
                      assistive
                    </strong>{" "}
                    by 2025.
                  </p>
                  <div className="feature-details mt-6">
                    <h4 className="font-semibold mb-3 text-gray-900">
                      AI capabilities include:
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Anomaly detection</li>
                      <li>Predictive forecasting</li>
                      <li>Automated insights generation</li>
                      <li>Performance optimization recommendations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Platform Comparison */}
            <section
              className="content-section mb-16 p-8 bg-white rounded-xl border border-gray-200 shadow-sm"
              id="platform-comparison"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-teal-500 pb-4">
                Comparing Leading Platforms: Trilio vs Competitors
              </h2>

              <div className="platform-comparison space-y-6 mt-8">
                <div className="platform-card bg-blue-50 border-2 border-teal-500 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-teal-600 font-bold mb-4">
                    Trilio.ai: The Unified Intelligence Leader
                  </h3>
                  <p className="mb-4 text-gray-700">
                    <strong>
                      Trilio.ai positions itself as "Your AI Wingman for
                      Ecommerce Growth"
                    </strong>{" "}
                    with several key differentiators:
                  </p>

                  <div className="advantages mt-6">
                    <h4 className="text-black font-semibold mb-3">
                      ✔️ Unique Advantages:
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        <strong>100K+ metrics analyzed in real-time</strong>
                      </li>
                      <li>
                        <strong>AI-powered conversational queries</strong>{" "}
                        ("What was my AOV last month?")
                      </li>
                      <li>
                        <strong>60-second insights</strong> generation
                      </li>
                      <li>
                        <strong>Unified dashboard</strong> connecting 12+
                        platforms seamlessly
                      </li>
                      <li>
                        <strong>Free tier available</strong> for businesses
                        under $1M GMV
                      </li>
                    </ul>
                  </div>

                  <p className="mt-6 text-gray-700">
                    <strong>Best for:</strong> Growing ecommerce brands seeking
                    AI-powered insights with easy implementation
                  </p>
                </div>

                <div className="platform-card bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="font-bold mb-4 text-gray-900">
                    Triple Whale: Shopify-Focused Analytics
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Triple Whale has established itself as a popular choice for
                    Shopify merchants.
                  </p>

                  <div className="pros-cons grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="strengths">
                      <h4 className="text-green-600 font-semibold mb-3">
                        Strengths:
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Deep Shopify integration</li>
                        <li>User-friendly interface</li>
                        <li>Strong attribution modeling</li>
                        <li>Automated reporting</li>
                      </ul>
                    </div>

                    <div className="limitations">
                      <h4 className="text-orange-600 font-semibold mb-3">
                        Limitations:
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Limited to Shopify ecosystem</li>
                        <li>Higher pricing tiers</li>
                        <li>Less AI-powered automation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section bg-gradient-to-br from-blue-50 to-green-50 border-2 border-teal-500 rounded-xl p-12 text-center my-16">
              <div className="cta-content">
                <h2 className="text-3xl font-bold text-teal-600 mb-6">
                  Ready to Transform Your Ecommerce Analytics?
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  <strong>Trilio.ai</strong> offers everything covered in this
                  guide: unified data integration, AI-powered insights,
                  real-time ROAS tracking, and conversational analytics—all in a
                  platform designed for growing ecommerce brands.
                </p>

                <div className="cta-features grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  <div className="cta-feature bg-white p-4 rounded-lg border border-gray-200 text-sm text-black">
                    ✔️ <strong>Free trial</strong> for businesses under $1M GMV
                  </div>
                  <div className="cta-feature bg-white p-4 rounded-lg border border-gray-200 text-sm text-black">
                    ✔️ <strong>60-second insights</strong> generation
                  </div>
                  <div className="cta-feature bg-white p-4 rounded-lg border border-gray-200 text-sm text-black">
                    ✔️ <strong>12+ platform integrations</strong> included
                  </div>
                  <div className="cta-feature bg-white p-4 rounded-lg border border-gray-200 text-sm text-black">
                    ✔️ <strong>AI-powered optimization</strong> recommendations
                  </div>
                  <div className="cta-feature bg-white p-4 rounded-lg border border-gray-200 text-sm text-black">
                    ✔️ <strong>Real-time dashboard</strong> updates
                  </div>
                </div>

                <div className="cta-button mb-6">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg rounded-lg">
                    Start Your Free Trilio.ai Trial Today →
                  </Button>
                </div>

                <p className="cta-social-proof text-gray-600 italic">
                  <em>
                    Join 1,000+ brands already using Trilio.ai to dominate their
                    ecommerce analytics and drive unprecedented growth.
                  </em>
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <section className="content-section mb-16 p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-teal-500 pb-4">
                Conclusion: Your Path to Analytics Excellence
              </h2>

              <p className="mb-6 text-gray-700">
                The ecommerce analytics landscape in 2025 isn't just about
                collecting data—it's about transforming that data into
                competitive advantage.{" "}
                <strong>
                  Businesses that implement comprehensive analytics platforms
                  see 400-1200% ROI
                </strong>{" "}
                through improved decision-making, optimized marketing spend, and
                enhanced customer experiences.
              </p>

              <div className="key-takeaways bg-green-50 border border-teal-500 rounded-xl p-6 my-8">
                <h3 className="text-teal-600 font-bold mb-4">
                  Key takeaways for success:
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>
                      Choose platforms with unified data integration
                    </strong>{" "}
                    across all your business tools
                  </li>
                  <li>
                    <strong>
                      Prioritize real-time insights over historical reporting
                    </strong>
                  </li>
                  <li>
                    <strong>Invest in AI-powered analytics</strong> that provide
                    autonomous optimization
                  </li>
                  <li>
                    <strong>Focus on attribution accuracy</strong> to understand
                    true customer journeys
                  </li>
                  <li>
                    <strong>Implement conversational interfaces</strong> for
                    faster insight generation
                  </li>
                </ol>
              </div>

              <div className="competitive-advantage bg-blue-50 border border-gray-200 rounded-xl p-6 my-8">
                <h3 className="text-teal-600 font-bold mb-4">
                  The competitive advantage goes to businesses that can:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>See opportunities before competitors</strong>{" "}
                    through predictive analytics
                  </li>
                  <li>
                    <strong>React instantly to market changes</strong> with
                    real-time data
                  </li>
                  <li>
                    <strong>Optimize continuously</strong> through AI-powered
                    recommendations
                  </li>
                  <li>
                    <strong>Scale efficiently</strong> with automated insights
                    and alerts
                  </li>
                </ul>
              </div>

              <p className="conclusion-statement text-lg font-medium text-teal-600 text-center p-6 bg-cyan-50 rounded-xl border border-teal-500 my-8">
                The question isn't whether you need an advanced ecommerce
                analytics platform—it's which one will best position your
                business for the $6.4 trillion opportunity ahead.
              </p>
            </section>
          </article>
        </div>
      </main>

      {/* Back to Top Button */}
      <button
        className={`back-to-top fixed bottom-8 right-8 w-12 h-12 bg-teal-600 text-white border-none rounded-full text-xl cursor-pointer transition-all duration-300 z-50 shadow-lg hover:bg-teal-700 hover:-translate-y-1 flex items-center justify-center ${
          showBackToTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={scrollToTop}
        ref={backToTopRef}
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </PageLayout>
  );
};

export default Blog1;
