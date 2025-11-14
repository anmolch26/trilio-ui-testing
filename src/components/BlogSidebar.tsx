import React from "react";
import { Linkedin, Youtube } from "lucide-react";

interface BlogSidebarProps {
  blogTitle?: string;
  blogUrl?: string;
}

export const BlogSidebar: React.FC<BlogSidebarProps> = ({ blogTitle = "", blogUrl = "" }) => {
  return (
    <div className="bg-white py-8">
      {/* Share this section */}
      <div className="text-left">
        <h3 className="text-3xl font-bold text-teal-700 mb-8">Share this</h3>
        <div className="flex flex-col items-start gap-6">
          {/* X (Twitter) */}
          <a
            href="https://x.com/trilioai"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full border-2 border-teal-700 bg-white flex items-center justify-center hover:bg-teal-50 transition-all duration-200 hover:scale-110"
            aria-label="Follow us on X (Twitter)"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-7 h-7 fill-teal-700"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@user-trilio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full border-2 border-teal-700 bg-white flex items-center justify-center hover:bg-teal-50 transition-all duration-200 hover:scale-110"
            aria-label="Follow us on YouTube"
          >
            <Youtube className="w-7 h-7 text-teal-700" strokeWidth={2} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/trilio-ai/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full border-2 border-teal-700 bg-white flex items-center justify-center hover:bg-teal-50 transition-all duration-200 hover:scale-110"
            aria-label="Follow us on LinkedIn"
          >
            <Linkedin className="w-7 h-7 text-teal-700" strokeWidth={2} />
          </a>
        </div>
      </div>
    </div>
  );
};

