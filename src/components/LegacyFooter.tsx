import React from "react";
import { Link } from "react-router-dom";
// Updated to use the new image URL
const TrilioLogoFooter = "https://assets.channeliq.ai/trilio-landing/Hero_Images/Remove background project (4).webp";
import { ArrowUp } from "lucide-react";

const LegacyFooter = () => {
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
               loading="lazy" decoding="async" />
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
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 hover:text-pulse-500 transition-colors"
                >
                  Privacy Policy
                </Link>
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
    </footer>
  );
};

export default LegacyFooter;
