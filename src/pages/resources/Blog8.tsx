import React from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog8 = () => {
  const navigate = useNavigate();

  const goToPrevious = () => {
    navigate("/resources/blog-insights/blog/7");
  };

  const goToNext = () => {
    navigate("/resources/blog-insights/blog/9");
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
                    Case Studies: Real Results from Ecommerce Brands
                  </h1>
                </div>
                <div className="ml-6">
                  <img
                    src="https://assets.channeliq.ai/invictus-landing/Leadership/om.jpg"
                    alt="Om Rathod"
                    className="w-20 h-20 rounded-full object-cover mt-8"
                   loading="lazy" decoding="async" />
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
                  <span>August 8, 2025</span>
                </div>
              </div>

              <div className="mb-8">
                <img
                  src="/src/assests/WhatsApp Image 2025-08-05 at 18.29.51.jpeg"
                  alt="Industry-Specific Considerations"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                 loading="lazy" decoding="async" />
              </div>

              <h2>Case Study 1: Fashion Retailer - 40% ROAS Improvement</h2>

              <h3>
                <strong>Background:</strong>
              </h3>
              <p>
                A mid-size fashion retailer was struggling with fragmented data
                across Shopify, Facebook Ads, and Google Ads. They had no
                unified view of customer journeys and were making decisions
                based on incomplete information.
              </p>

              <h3>
                <strong>Challenge:</strong>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Disconnected data sources leading to poor attribution
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Manual reporting taking 15+ hours per week</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>ROAS declining month-over-month</span>
                </li>
              </ul>

              <h3>
                <strong>Solution:</strong>
              </h3>
              <p>
                Implemented Trilio.ai with unified dashboard connecting all
                platforms and AI-powered insights.
              </p>

              <h3>
                <strong>Results:</strong>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>40% ROAS improvement</strong> within 3 months
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>90% reduction</strong> in manual reporting time
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>25% increase</strong> in customer lifetime value
                  </span>
                </li>
              </ul>

              <h2>
                Case Study 2: DTC Beauty Brand - 60% Faster Decision Making
              </h2>

              <h3>
                <strong>Background:</strong>
              </h3>
              <p>
                A growing DTC beauty brand was spending too much time analyzing
                data and not enough time acting on insights. Their team was
                overwhelmed with multiple dashboards and conflicting data.
              </p>

              <h3>
                <strong>Challenge:</strong>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Multiple analytics tools creating confusion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Slow decision-making process (3-5 days for insights)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Inconsistent data across platforms</span>
                </li>
              </ul>

              <h3>
                <strong>Solution:</strong>
              </h3>
              <p>
                Adopted Trilio.ai's conversational AI interface and unified
                analytics platform.
              </p>

              <h3>
                <strong>Results:</strong>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>60% faster</strong> decision-making process
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>30% reduction</strong> in CAC across channels
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>50% increase</strong> in team productivity
                  </span>
                </li>
              </ul>

              <h2>Case Study 3: Electronics Ecommerce - 35% Revenue Growth</h2>

              <h3>
                <strong>Background:</strong>
              </h3>
              <p>
                An electronics retailer was struggling with inventory management
                and customer acquisition costs. They needed better insights to
                optimize their multi-channel strategy.
              </p>

              <h3>
                <strong>Challenge:</strong>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>High customer acquisition costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Poor inventory forecasting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Limited customer journey visibility</span>
                </li>
              </ul>

              <h3>
                <strong>Solution:</strong>
              </h3>
              <p>
                Implemented Trilio.ai with predictive analytics and advanced
                attribution modeling.
              </p>

              <h3>
                <strong>Results:</strong>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>35% revenue growth</strong> in 6 months
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>40% improvement</strong> in inventory turnover
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    <strong>25% reduction</strong> in stockouts
                  </span>
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
              Previous: Common Implementation Challenges and Solutions
            </Button>
            <Button
              variant="outline"
              onClick={goToNext}
              className="flex items-center gap-2"
            >
              Next: Industry-Specific Considerations
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default Blog8;
