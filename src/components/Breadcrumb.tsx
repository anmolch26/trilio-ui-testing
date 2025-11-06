import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = "" }) => {
  return (
    <nav aria-label="Breadcrumb" className={`inline-block bg-gray-100 rounded-lg px-4 py-3 ${className}`}>
      <ol className="flex items-center flex-wrap gap-2 text-sm">
        {/* Home link */}
        <li className="flex items-center">
          <Link
            to="/"
            className="text-gray-600 hover:text-teal-600 transition-colors duration-200 font-medium hover:underline"
          >
            Home
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <React.Fragment key={index}>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
              </li>
              <li className="flex items-center">
                {isLast || !item.href ? (
                  <span 
                    className="text-teal-600 font-semibold"
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-600 hover:text-teal-600 transition-colors duration-200 font-medium hover:underline"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

// Helper to generate JSON-LD BreadcrumbList structured data
export const generateBreadcrumbJsonLd = (items: BreadcrumbItem[], baseUrl: string = "https://trilio.ai") => {
  const itemListElements = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: item.label,
      item: item.href ? `${baseUrl}${item.href}` : undefined,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itemListElements,
  };
};

