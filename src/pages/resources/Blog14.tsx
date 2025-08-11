import React from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog14 = () => {
  const navigate = useNavigate();

  const goToPrevious = () => {
    navigate("/resources/blog-insights/blog/13");
  };

  const goToNext = () => {
    navigate("/resources/blog-insights/blog/1");
  };

  return (
    <PageLayout backgroundClass="bg-white">
      <ThemeSection background="white" padding="xl" className="pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Blog Post */}
          <article className="mb-16">
            {/* Blog Header */}
            <header className="mb-8">
              <div className="flex items-center mb-6">
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                    Why Basic Shopify Analytics Aren't Enough for Growth
                  </h1>
                </div>
                <div className="ml-6">
                  <img
                    src="https://assets.channeliq.ai/invictus-landing/Leadership/Nirjar.png"
                    alt="Om Rathod"
                    className="w-44 h-44 rounded-full object-cover mt-8"
                  />
                </div>
              </div>
            </header>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              {/* Author and Date */}
              <div className="flex items-center text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                 
                  <span>by Nirjar Sanghavi</span>
                </div>
                <span className="mx-2 text-gray-400">•</span>
                <span>August 14, 2025</span>
              </div>

              {/* Featured Image */}
              <div className="mb-12">
                <img
                  src="/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png"
                  alt="Shopify Analytics Limitations"
                  className="w-full h-96 object-cover rounded-xl shadow-xl"
                />
              </div>

              {/* Introduction */}
              <div className="mb-12">
                <p className="text-xl leading-relaxed text-gray-700 mb-6">
                  Shopify's native analytics provide a solid foundation with
                  sales overviews, customer insights, and basic traffic data.
                  However,{" "}
                  <strong className="text-gray-900">
                    as your store grows, these limitations become growth
                    barriers
                  </strong>
                  . What works for a small store becomes a bottleneck for
                  scaling businesses.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8 ">
                Critical Limitations of Built-in Shopify Analytics
              </h2>

              <div className="space-y-8 mb-12">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">
                    <strong>1. Fragmented Data Sources</strong>
                  </h3>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Marketing data lives in Facebook Ads Manager</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Email performance sits in Klaviyo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>
                        Google Ads data remains in Google Ads interface
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>
                        Customer service metrics stay in support tools
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-green-900 mb-3">
                    <strong>2. Limited Attribution Capabilities</strong>
                  </h3>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>
                        Cannot track complete customer journeys across channels
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Missing multi-touch attribution modeling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>
                        No visibility into which touchpoints drive highest-value
                        customers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Limited understanding of cross-channel impact</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-purple-900 mb-3">
                    <strong>3. Delayed Reporting</strong>
                  </h3>
                  <ul className="space-y-2 text-purple-800">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Most reports update with significant delays</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Real-time decision-making becomes impossible</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Optimization opportunities are missed</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-orange-900 mb-3">
                    <strong>4. Surface-Level Insights</strong>
                  </h3>
                  <ul className="space-y-2 text-orange-800">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Basic metrics without deeper analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>No predictive capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Limited segmentation options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Missing correlation insights</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-indigo-900 mb-3">
                    <strong>5. Multi-Store Management Issues</strong>
                  </h3>
                  <ul className="space-y-2 text-indigo-800">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>
                        Difficult to compare performance across stores
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>No consolidated reporting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Limited scaling capabilities</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8 ">
                The Cost of Limited Analytics
              </h2>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 p-8 mb-12 rounded-lg">
                <h3 className="text-lg font-bold text-red-900 mb-3">
                  <strong>
                    Businesses relying solely on basic Shopify analytics
                    typically experience:
                  </strong>
                </h3>
                <ul className="space-y-3 text-red-800">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>
                      <strong>20-30% higher customer acquisition costs</strong>{" "}
                      due to poor channel attribution
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>
                      <strong>15-25% lower lifetime value optimization</strong>{" "}
                      from limited customer insights
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>
                      <strong>Significant time waste</strong> on manual report
                      compilation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>
                      <strong>Missed optimization opportunities</strong> worth
                      10-40% revenue increases
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8 ">
                Real-World Impact Examples
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">
                    <strong>Case Study: Fashion Retailer</strong>
                  </h3>
                  <p className="text-blue-800 mb-3">
                    A mid-size fashion retailer was spending $50,000 monthly on
                    Facebook and Google Ads but couldn't determine which
                    campaigns drove the highest-value customers.
                  </p>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• 35% of ad spend was wasted on low-value customers</li>
                    <li>
                      • Customer acquisition cost was 40% higher than industry
                      average
                    </li>
                    <li>• Lifetime value optimization was impossible</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-green-900 mb-3">
                    <strong>Case Study: Electronics Store</strong>
                  </h3>
                  <p className="text-green-800 mb-3">
                    An electronics store with multiple Shopify stores was making
                    decisions based on incomplete data from individual store
                    dashboards.
                  </p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• 25% revenue lost due to poor inventory decisions</li>
                    <li>
                      • Cross-store customer insights were completely missing
                    </li>
                    <li>• Marketing budget allocation was guesswork</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8 ">
                What Advanced Analytics Provide
              </h2>

              <div className="space-y-8 mb-12">
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-teal-900 mb-3">
                    <strong>Unified Data View</strong>
                  </h3>
                  <ul className="space-y-2 text-teal-800">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>All marketing channels in one dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Real-time data synchronization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Cross-platform customer journey tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Consolidated reporting across all tools</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-purple-900 mb-3">
                    <strong>Advanced Attribution</strong>
                  </h3>
                  <ul className="space-y-2 text-purple-800">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Multi-touch attribution modeling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Customer lifetime value optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Channel performance comparison</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>ROI optimization insights</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-orange-900 mb-3">
                    <strong>Predictive Analytics</strong>
                  </h3>
                  <ul className="space-y-2 text-orange-800">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Demand forecasting and inventory optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Customer churn prediction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Revenue forecasting and trend analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Automated optimization recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8 ">
                Making the Transition
              </h2>

              <div className="mb-8">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  The transition from basic Shopify analytics to advanced
                  analytics doesn't have to be overwhelming. Start with a clear
                  understanding of your current limitations and build a roadmap
                  for improvement.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400 p-8 my-12 rounded-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  Ready to Break Free from Basic Analytics?
                </h3>
                <p className="text-blue-800">
                  Don't let limited analytics hold back your growth. Advanced
                  analytics platforms like Trilio.ai can transform your Shopify
                  store from data-poor to insight-rich, unlocking the growth
                  potential that basic analytics simply can't provide.
                </p>
              </div>

              <div className="mt-12 p-8 bg-gray-50 rounded-xl">
                <p className="text-lg leading-relaxed text-gray-700 mb-0">
                  The question isn't whether you can afford advanced
                  analytics—it's whether you can afford to continue making
                  business decisions with incomplete data. In today's
                  competitive eCommerce landscape, the cost of poor analytics
                  far exceeds the investment in better tools.
                </p>
              </div>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={goToPrevious}
              className="flex items-center gap-2 text-black"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous: Setting Up Your Advanced Shopify Analytics Dashboard
            </Button>
            <Button
              variant="outline"
              onClick={goToNext}
              className="flex items-center gap-2 text-black"
            >
              Next: What is an Ecommerce Analytics Platform?
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default Blog14;
