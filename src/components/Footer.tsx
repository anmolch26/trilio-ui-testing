import React from "react";
import { Link } from "react-router-dom";
// Updated to use the new image URL
const TrilioLogoFooter = "https://assets.channeliq.ai/trilio-landing/Hero_Images/Remove background project (4).webp";
import { Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black/50 backdrop-blur-sm text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-5">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={TrilioLogoFooter}
                alt="Trilio Logo"
                className="w-10 h-10 object-contain mr-2"
              />
              <span className="text-2xl font-semibold">Trilio.ai</span>
            </div>
            <p className="text-white/70 mb-4">
              Ecommerce Intelligence, Powered by AI. Transform your data into
              profitable insights.
            </p>
            <p className="text-white/60">
              We unify fragmented data across platforms into a trusted source of
              truth and deliver actionable intelligence.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://www.linkedin.com/company/trilio-ai/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl flex items-center justify-center"
              >
                <img
                  src="https://assets.channeliq.ai/sidebar/icons8-linkedin-50.png"
                  alt="LinkedIn"
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
              </a>
              <a
                href="https://x.com/trilioai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl flex items-center justify-center"
              >
                <img
                  src="https://assets.channeliq.ai/sidebar/Twitter(X).png"
                  alt="X (Twitter)"
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.youtube.com/@user-trilio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl flex items-center justify-center"
              >
                <img
                  src="https://assets.channeliq.ai/sidebar/youtube-logo-2431.png"
                  alt="YouTube"
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-3 text-white">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products/bi-reporting"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  BI Reporting
                </Link>
              </li>
              <li>
                <Link
                  to="/products/insights"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  to="/products/ai-agents"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  AI Agents
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-3 text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/careers/open-positions"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/resources/blog-insights"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-form"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact & Newsletter (right of Company) */}
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-3 text-white">Contact</h4>
            <div className="flex items-center gap-2 text-white/90 mb-3">
              <Mail size={18} />
              <a href="mailto:info@trilio.ai" className="hover:text-white">
                info@trilio.ai
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 Trilio.ai. All rights reserved.
          </p>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm"
          >
            <ArrowUp size={16} /> Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
