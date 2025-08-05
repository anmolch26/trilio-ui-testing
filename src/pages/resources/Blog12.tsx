import React from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog12 = () => {
  const navigate = useNavigate();

  const goToPrevious = () => {
    navigate("/resources/blog-insights/blog/11");
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
                    Conclusion: Your Path to Analytics Excellence
                  </h1>
                </div>
                <div className="ml-6">
                  <img
                    src="https://assets.channeliq.ai/invictus-landing/Leadership/om.jpg"
                    alt="Om Rathod"
                    className="w-20 h-20 rounded-full object-cover mt-8"
                  />
                </div>
              </div>
            </header>

            {/* Blog Content */}
            <div
              className="text-lg text-gray-900 leading-relaxed space-y-6"
              style={{ fontFamily: "Antarctica, Arial, sans-serif" }}
              dangerouslySetInnerHTML={{
                __html: `
                  <div className="mb-6">
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <span className="font-medium">by Om Rathod</span>
                      <span className="mx-2">•</span>
                      <span>August 12, 2025</span>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <img 
                      src="/src/assests/conclusion.jpg" 
                      alt="Analytics Excellence" 
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <p>The ecommerce analytics landscape in 2025 isn't just about collecting data—it's about transforming that data into competitive advantage. <strong>Businesses that implement comprehensive analytics platforms see 400-1200% ROI</strong> through improved decision-making, optimized marketing spend, and enhanced customer experiences.</p>

                  <h2>Key takeaways for success:</h2>
                  <ol className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">1.</span>
                      <span><strong>Choose platforms with unified data integration</strong> across all your business tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">2.</span>
                      <span><strong>Prioritize real-time insights over historical reporting</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">3.</span>
                      <span><strong>Invest in AI-powered analytics</strong> that provide autonomous optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">4.</span>
                      <span><strong>Focus on attribution accuracy</strong> to understand true customer journeys</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">5.</span>
                      <span><strong>Implement conversational interfaces</strong> for faster insight generation</span>
                    </li>
                  </ol>

                  <h2>The competitive advantage goes to businesses that can:</h2>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span><strong>See opportunities before competitors</strong> through predictive analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span><strong>React instantly to market changes</strong> with real-time data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span><strong>Optimize continuously</strong> through AI-powered recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span><strong>Scale efficiently</strong> with automated insights and alerts</span>
                    </li>
                  </ul>

                  <p>The question isn't whether you need an advanced ecommerce analytics platform—it's which one will best position your business for the $6.4 trillion opportunity ahead.</p>

                  <hr className="my-8 border-gray-300" />

                  <h2>Ready to Transform Your Ecommerce Analytics?</h2>
                  <p><strong>Trilio.ai</strong> offers everything covered in this guide: unified data integration, AI-powered insights, real-time ROAS tracking, and conversational analytics—all in a platform designed for growing ecommerce brands.</p>

                  <h3><strong>Start your journey today:</strong></h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span><strong>Free trial</strong> for businesses under $1M GMV</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span><strong>60-second insights</strong> generation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span><strong>12+ platform integrations</strong> included</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span><strong>AI-powered optimization</strong> recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span><strong>Real-time dashboard</strong> updates</span>
                    </li>
                  </ul>

                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mt-6">
                    <h3 className="text-xl font-bold text-teal-800 mb-4">Start Your Free Trilio.ai Trial Today →</h3>
                    <p className="text-teal-700 italic">Join 1,000+ brands already using Trilio.ai to dominate their ecommerce analytics and drive unprecedented growth.</p>
                  </div>
                `,
              }}
            />
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={goToPrevious}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous: Next-Generation Features to Watch
            </Button>
            <Button
              variant="outline"
              onClick={goToNext}
              className="flex items-center gap-2"
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

export default Blog12;
