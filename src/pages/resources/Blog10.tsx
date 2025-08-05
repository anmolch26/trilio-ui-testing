import React from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog10 = () => {
  const navigate = useNavigate();

  const goToPrevious = () => {
    navigate("/resources/blog-insights/blog/9");
  };

  const goToNext = () => {
    navigate("/resources/blog-insights/blog/11");
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
                    Security and Compliance Considerations
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
                      <span>August 10, 2025</span>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <img 
                      src="/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png" 
                      alt="Security and Compliance" 
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <h2>Data Privacy Requirements</h2>
                  
                  <h3><strong>GDPR Compliance:</strong></h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Right to data portability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Right to deletion requests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Consent management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Data processing transparency</span>
                    </li>
                  </ul>

                  <h3><strong>CCPA Compliance:</strong></h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Consumer data access rights</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Opt-out mechanisms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Data sale restrictions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Privacy policy requirements</span>
                    </li>
                  </ul>

                  <h2>Security Best Practices</h2>
                  
                  <h3><strong>1. Data Encryption</strong></h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>End-to-end encryption for all data transfers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>At-rest encryption for stored data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Regular security audits and updates</span>
                    </li>
                  </ul>

                  <h3><strong>2. Access Controls</strong></h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Role-based permission systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Multi-factor authentication</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Regular access reviews and updates</span>
                    </li>
                  </ul>

                  <h3><strong>3. Monitoring and Logging</strong></h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Comprehensive audit trails</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Real-time security monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Incident response procedures</span>
                    </li>
                  </ul>
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
              Previous: Cost-Benefit Analysis: Platform Investment ROI
            </Button>
            <Button
              variant="outline"
              onClick={goToNext}
              className="flex items-center gap-2"
            >
              Next: Next-Generation Features to Watch
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default Blog10;
