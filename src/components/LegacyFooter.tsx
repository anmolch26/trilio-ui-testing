import React, { useState } from "react";
import { Link } from "react-router-dom";
// Updated to use the new image URL
const TrilioLogoFooter = "https://assets.channeliq.ai/trilio-landing/Hero_Images/Remove background project (4).webp";
import { ArrowUp } from "lucide-react";

const LegacyFooter = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  return (
    <footer className="w-full bg-white pb-0 border-t border-gray-200">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={TrilioLogoFooter}
                alt="Trilio Logo"
                className="w-10 h-10 object-contain mr-2"
              />
              <span className="text-xl font-semibold text-black">
                Trilio.ai
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Ecommerce Intelligence, Powered by AI. Transform your data into
              profitable insights.
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                Email:{" "}
                <a
                  href="mailto:support@trilio.ai"
                  className="text-pulse-500 hover:underline"
                >
                  support@trilio.ai
                </a>
              </p>
              <div className="flex items-center space-x-3 mt-8">
                <a
                  href="https://www.linkedin.com/company/trilio-ai/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pulse-500 transition-colors"
                >
                  <img
                    src="https://assets.channeliq.ai/sidebar/icons8-linkedin-50.png"
                    alt="LinkedIn"
                    className="w-6 h-6 object-contain"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://x.com/trilioai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pulse-500 transition-colors"
                >
                  <img
                    src="https://assets.channeliq.ai/sidebar/X.png"
                    alt="X (Twitter)"
                    className="w-6 h-6 object-contain"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@user-trilio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pulse-500 transition-colors"
                >
                  <img
                    src="https://assets.channeliq.ai/sidebar/youtube.png"
                    alt="YouTube"
                    className="w-6 h-6 object-contain"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products/bi-reporting"
                  className="text-gray-600 hover:text-pulse-500 transition-colors"
                >
                  BI Reporting
                </Link>
              </li>
              <li>
                <Link
                  to="/products/insights"
                  className="text-gray-600 hover:text-pulse-500 transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  to="/products/ai-agents"
                  className="text-gray-600 hover:text-pulse-500 transition-colors"
                >
                  AI Agents
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-600 hover:text-pulse-500 transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/careers/open-positions"
                  className="text-gray-600 hover:text-pulse-500 transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/resources/blog-insights"
                  className="text-gray-600 hover:text-pulse-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-form"
                  className="text-gray-600 hover:text-pulse-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-gray-600 hover:text-pulse-500 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPrivacy(true);
                  }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-gray-600 hover:text-pulse-500 transition-colors"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2025 Trilio.ai. All rights reserved.
          </p>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 text-gray-600 hover:text-pulse-500 text-sm"
          >
            <ArrowUp size={16} /> Back to Top
          </a>
        </div>
      </div>
      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 pr-8 rounded-lg shadow-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={() => setShowPrivacy(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-black">
              Terms & Privacy Policy
            </h2>
            <div className="text-gray-700 text-sm space-y-3 max-h-[60vh] overflow-y-auto">
              <p>
                Trilio.ai (“we”, “our”, or “us”) is committed to protecting your
                privacy and providing a secure, reliable analytics platform. By
                using Trilio.ai, you agree to these Terms & Privacy Policy. If
                you do not agree, please do not use our services.
              </p>
              <ol className="list-decimal pl-4 space-y-2">
                <li>
                  <strong>Information We Collect</strong>
                  <br />
                  Account Registration: Name, email, password, and other details
                  you provide.
                  <br />
                  Integrations: Data from connected platforms (e.g., Amazon,
                  Google, Shopify) as authorized by you.
                  <br />
                  Usage Data: IP address, browser type, device info, pages
                  visited, and actions taken within the platform.
                </li>
                <li>
                  <strong>How We Use Your Information</strong>
                  <br />
                  To provide, maintain, and improve Trilio.ai services.
                  <br />
                  To generate analytics and reports for your business.
                  <br />
                  To communicate with you about your account, updates, or
                  support.
                  <br />
                  To comply with legal obligations.
                </li>
                <li>
                  <strong>Data Security</strong>
                  <br />
                  We use industry-standard security measures to protect your
                  data. However, no method of transmission over the internet is
                  100% secure.
                </li>
                <li>
                  <strong>Sharing Your Information</strong>
                  <br />
                  We do not sell your data. We may share your information:
                  <br />
                  With trusted service providers who help operate Trilio.ai.
                  <br />
                  To comply with legal requirements.
                  <br />
                  With your explicit consent.
                </li>
                <li>
                  <strong>Your Rights</strong>
                  <br />
                  Access, update, or delete your account information.
                  <br />
                  Disconnect integrations at any time.
                  <br />
                  Opt out of marketing communications.
                  <br />
                  Contact us at support@trilio.ai to exercise your rights.
                </li>
                <li>
                  <strong>Cookies</strong>
                  <br />
                  Trilio.ai uses cookies to enhance your experience and analyze
                  usage. You can manage cookies in your browser settings.
                </li>
                <li>
                  <strong>Third-Party Links</strong>
                  <br />
                  Our platform may link to third-party sites. We are not
                  responsible for their privacy practices or content.
                </li>
                <li>
                  <strong>Changes to This Policy</strong>
                  <br />
                  We may update this policy as needed. Updates will be posted
                  here with a revised effective date.
                </li>
                <li>
                  <strong>Contact Us</strong>
                  <br />
                  For questions or concerns, contact:
                  <br />
                  Trilio.ai
                  <br />
                  Email: support@trilio.ai
                </li>
              </ol>
              <p>By continuing, you agree to these Terms & Privacy Policy.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default LegacyFooter;
