
import React from "react";
import { Link } from "react-router-dom";

const SolutionsDropdown = () => {
  const services = [
    { title: "Data Integrations", description: "Connect Shopify, Amazon, Meta, Google, Klaviyo, etc.", href: "/solutions/data-integrations" },
    { title: "Custom Dashboard Development", description: "Tailored KPIs & workflows.", href: "/solutions/custom-dashboards" },
    { title: "Onboarding & Training", description: "Expert support to get teams started.", href: "/solutions/onboarding-training" },
    { title: "API & Developer Support", description: "API documentation, SDKs, and help for custom builds.", href: "/solutions/api-developer-support" }
  ];

  return (
    <div className="grid w-[500px] gap-3 p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100/50">
      {services.map((service, index) => (
        <Link
          key={service.title}
          to={service.href}
          className="dropdown-item group block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:shadow-md hover:scale-[1.02] will-change-transform"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-purple-600 transition-colors duration-200 group-hover:font-bold">
            {service.title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
            {service.description}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default SolutionsDropdown;
