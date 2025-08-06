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
            >
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

              <p className="text-xl text-gray-700 mb-8">
                As eCommerce businesses increasingly rely on multi-platform
                analytics to drive growth, the security and compliance landscape
                becomes more complex. With data flowing between Shopify, Amazon,
                Google Ads, and 20+ other platforms, ensuring proper data
                protection isn't just a legal requirement—it's a business
                imperative.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>The eCommerce Data Security Challenge</strong>
              </h2>

              <p className="mb-6">
                Modern eCommerce businesses face unique security challenges when
                consolidating data across multiple platforms. Each
                integration—from Shopify product data to Amazon advertising
                metrics—introduces new compliance requirements and security
                considerations.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>Multi-Platform Data Complexity:</strong>
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Customer PII across multiple marketplaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Payment processing data from various gateways</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Advertising performance data with attribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Inventory and fulfillment information</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Trilio's Security Architecture</strong>
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>1. End-to-End Encryption</strong>
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    TLS 1.2+ encryption for all data transfers between platforms
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    AES-256 encryption for data at rest in our secure cloud
                    infrastructure
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Encrypted API connections to Shopify, Amazon, Google Ads,
                    and all integrations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Secure webhook endpoints with signature verification
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>2. Access Control & Authentication</strong>
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Multi-factor authentication (MFA) required for all user
                    accounts
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Role-based access control (RBAC) with platform-specific
                    permissions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Single sign-on (SSO) integration for enterprise customers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Session timeout and automatic logout for inactive users
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>3. Data Processing & Storage</strong>
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Data residency options for EU, US, and other regions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Automatic data retention policies with configurable
                    timeframes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Secure data processing with no human access to customer data
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Regular automated backups with encryption</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Compliance Standards & Certifications</strong>
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>GDPR Compliance for eCommerce:</strong>
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Right to data portability across all connected platforms
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Automated deletion requests for customer data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Consent management for data processing activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Data processing transparency with detailed audit logs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Cross-border data transfer compliance</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>CCPA & US Privacy Laws:</strong>
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Consumer data access rights for all US customers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Opt-out mechanisms for data sharing and processing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Data sale restrictions and disclosure requirements
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Comprehensive privacy policy management</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>Industry-Specific Compliance:</strong>
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>PCI DSS compliance for payment data handling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>SOC 2 Type II certification for security controls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>ISO 27001 information security management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>HIPAA compliance for health-related eCommerce</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Platform-Specific Security Considerations</strong>
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>Shopify Integration Security:</strong>
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    OAuth 2.0 authentication with minimal required permissions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Secure webhook handling with HMAC signature verification
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Data synchronization with conflict resolution</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>Amazon Marketplace Security:</strong>
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Amazon MWS API integration with secure credentials
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>SP-API compliance for new Amazon integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Secure handling of seller account credentials</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>Google Ads & Analytics Security:</strong>
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Google OAuth 2.0 with scoped access permissions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Secure handling of Google Analytics 4 data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Ad account data protection and access controls</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Monitoring & Incident Response</strong>
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>Real-Time Security Monitoring:</strong>
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>24/7 security operations center (SOC) monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Automated threat detection and alerting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Comprehensive audit trails for all data access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Mean time to detection under 15 minutes</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>Incident Response Procedures:</strong>
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Documented incident response plan with escalation procedures
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Customer notification protocols within 72 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Data breach containment and recovery procedures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Regular incident response drills and training</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Best Practices for eCommerce Businesses</strong>
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>1. Vendor Security Assessment</strong>
              </h3>
              <p className="mb-4">
                Before integrating any analytics platform, conduct thorough
                security assessments:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Review security certifications and compliance reports
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Request detailed security architecture documentation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Verify data retention and deletion policies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Assess incident response capabilities and SLAs</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>2. Data Minimization & Purpose Limitation</strong>
              </h3>
              <p className="mb-4">
                Only collect and process data necessary for your business
                objectives:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Define clear data processing purposes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Implement data minimization practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Regular data inventory and classification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Automated data lifecycle management</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>3. Employee Security Training</strong>
              </h3>
              <p className="mb-4">
                Ensure your team understands security best practices:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Regular security awareness training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Phishing simulation and response training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Data handling and privacy best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Incident reporting procedures</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Looking Ahead: Emerging Security Trends</strong>
              </h2>

              <p className="mb-6">
                As eCommerce continues to evolve, new security challenges and
                solutions emerge:
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>AI-Powered Security:</strong>
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Machine learning for threat detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Behavioral analytics for fraud prevention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Automated security response systems</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <strong>Zero Trust Architecture:</strong>
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Continuous verification of user identity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Micro-segmentation of network access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Least privilege access principles</span>
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  Trilio's Commitment to Security
                </h3>
                <p className="text-blue-800">
                  At Trilio, we understand that your eCommerce data is the
                  lifeblood of your business. Our security-first approach
                  ensures that your multi-platform analytics remain protected
                  while providing the insights you need to grow. With SOC 2 Type
                  II certification, GDPR compliance, and enterprise-grade
                  security measures, you can focus on what matters most—growing
                  your business.
                </p>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                Security and compliance in eCommerce analytics isn't just about
                checking boxes—it's about building trust with your customers and
                protecting your most valuable asset: your data. By choosing
                platforms that prioritize security and implementing best
                practices, you can confidently scale your business while
                maintaining the highest standards of data protection.
              </p>
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
              Previous: Cost-Benefit Analysis: Platform Investment ROI
            </Button>
            <Button
              variant="outline"
              onClick={goToNext}
              className="flex items-center gap-2 text-black"
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
