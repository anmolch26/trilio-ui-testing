import React from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog7 = () => {
  const navigate = useNavigate();

  const goToPrevious = () => {
    navigate("/resources/blog-insights/blog/6");
  };

  const goToNext = () => {
    navigate("/resources/blog-insights/blog/8");
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
                    Common Implementation Challenges and Solutions
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
            >
              <div className="mb-6">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span className="font-medium">by Om Rathod</span>
                  <span className="mx-2">•</span>
                  <span>August 7, 2025</span>
                </div>
              </div>

              <div className="mb-8">
                <img
                  src="/src/assests/challenges.jpg"
                  alt="Implementation Challenges"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>

              <h2>Data Integration Challenges</h2>

              <h3>
                <strong>Challenge: Inconsistent Data Formats</strong>
              </h3>
              <p>
                Different platforms export data in various formats, making
                unified analysis difficult.
              </p>
              <h4>
                <strong>Solution:</strong>
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Use platforms with pre-built connectors (like Trilio.ai's
                    20+ integrations)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Implement data standardization protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Set up automated data validation checks</span>
                </li>
              </ul>

              <h3>
                <strong>Challenge: API Rate Limits</strong>
              </h3>
              <p>
                Many platforms restrict API calls, limiting real-time data
                access.
              </p>
              <h4>
                <strong>Solution:</strong>
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Implement intelligent data caching strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Use batch processing for non-critical data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Prioritize real-time data for critical metrics only
                  </span>
                </li>
              </ul>

              <h2>Team Adoption Challenges</h2>

              <h3>
                <strong>Challenge: Resistance to Change</strong>
              </h3>
              <p>Team members may resist learning new analytics platforms.</p>
              <h4>
                <strong>Solution:</strong>
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Provide comprehensive training programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Start with familiar metrics and gradually introduce new
                    insights
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Demonstrate immediate value through quick wins</span>
                </li>
              </ul>

              <h3>
                <strong>Challenge: Skill Gap</strong>
              </h3>
              <p>
                Teams may lack the technical skills needed for advanced
                analytics.
              </p>
              <h4>
                <strong>Solution:</strong>
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Choose user-friendly platforms with conversational AI (like
                    Trilio.ai)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Provide role-based training and access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Create standardized templates and dashboards</span>
                </li>
              </ul>

              <h2>Technical Implementation Challenges</h2>

              <h3>
                <strong>Challenge: Data Accuracy Issues</strong>
              </h3>
              <p>
                Inconsistent or inaccurate data can undermine trust in
                analytics.
              </p>
              <h4>
                <strong>Solution:</strong>
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Implement data validation and reconciliation processes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Set up automated error detection and alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Regular data quality audits and reporting</span>
                </li>
              </ul>

              <h3>
                <strong>Challenge: Performance Issues</strong>
              </h3>
              <p>
                Large datasets can cause slow loading times and poor user
                experience.
              </p>
              <h4>
                <strong>Solution:</strong>
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Implement data optimization and indexing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Use caching strategies for frequently accessed data
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Choose platforms with robust infrastructure (like
                    Trilio.ai's real-time processing)
                  </span>
                </li>
              </ul>

              <h2>Business Process Challenges</h2>

              <h3>
                <strong>Challenge: Lack of Clear Objectives</strong>
              </h3>
              <p>
                Without clear goals, analytics implementation can become
                directionless.
              </p>
              <h4>
                <strong>Solution:</strong>
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Define specific KPIs and success metrics upfront</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Create a phased implementation roadmap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Regular progress reviews and goal adjustments</span>
                </li>
              </ul>

              <h3>
                <strong>Challenge: Insufficient Resources</strong>
              </h3>
              <p>
                Limited budget or personnel can slow implementation progress.
              </p>
              <h4>
                <strong>Solution:</strong>
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Start with free tiers (like Trilio.ai's free tier for
                    businesses under $1M GMV)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Prioritize high-impact, low-effort implementations first
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Leverage automated features to reduce manual work</span>
                </li>
              </ul>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={goToPrevious}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous: Measuring Success: KPIs That Matter
            </Button>
            <Button
              variant="outline"
              onClick={goToNext}
              className="flex items-center gap-2"
            >
              Next: Case Studies: Real Results from Ecommerce Brands
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default Blog7;
