
import React from "react";
import { Link } from "react-router-dom";

const WhoWeHelpDropdown = () => {
  const whoWeHelp = [
    { title: "Founders & CEOs", description: "Strategic insights for business growth", href: "/who-we-help/founders-ceos" },
    { title: "Marketing Leaders", description: "Campaign performance and ROI optimization", href: "/who-we-help/marketing-leaders" },
    { title: "Performance Marketers", description: "Real-time ad spend and conversion tracking", href: "/who-we-help/performance-marketers" },
    { title: "Operations Managers", description: "Operational efficiency and workflow insights", href: "/who-we-help/operations-managers" },
    { title: "Data Analysts", description: "Advanced analytics and reporting tools", href: "/who-we-help/data-analysts" },
    { title: "Agencies & Consultants", description: "Client reporting and performance dashboards", href: "/who-we-help/agencies-consultants" },
    { title: "Tech Partners", description: "Integration support and partnership opportunities", href: "/who-we-help/tech-partners" }
  ];

  return (
    <div className="grid w-[550px] grid-cols-2 gap-3 p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100/50">
      {whoWeHelp.map((role, index) => (
        <Link
          key={role.title}
          to={role.href}
          className="dropdown-item group block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:shadow-md hover:scale-[1.02] will-change-transform"
          style={{ animationDelay: `${index * 30}ms` }}
        >
          <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-purple-600 transition-colors duration-200 group-hover:font-bold">
            {role.title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
            {role.description}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default WhoWeHelpDropdown;
