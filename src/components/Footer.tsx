import React from "react";
import { Link } from "react-router-dom";
import TrilioLogoFooter from "@/assests/Remove background project (4).png";
import { useState } from "react";

const Footer = () => {
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
            </div>
          </div>

          {/* Quick Links */}
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
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2025 Trilio.ai. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            {/* Social Links */}
            <a
              href="https://www.linkedin.com/company/trilio-ai/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pulse-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/*
            <span className="text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </span>
            */}
          </div>

          <div className="flex items-center space-x-4 text-sm">
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
            <a
              href="#terms"
              className="text-gray-600 hover:text-pulse-500 transition-colors"
            >
              Terms of Use
            </a>
          </div>
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

export default Footer;
