
import React from "react";
import { Link } from "react-router-dom";

const ProductsDropdown = () => {
  const products = [
    {
      title: "Trilio BI Reporting",
      description: "Build, customize & schedule deep-dive dashboards across ecommerce & ad data.",
      href: "/products/bi-reporting"
    },
    {
      title: "Trilio Insights",
      description: "AI-powered anomaly detection, trend forecasting, and actionable recommendations.",
      href: "/products/insights"
    },
    {
      title: "Trilio AI Agents",
      description: "Automated teammates that alert you on key business metrics and assist with decision-making.",
      href: "/products/ai-agents"
    }
  ];

  return (
    <div className="grid w-[600px] gap-3 p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100/50">
      {products.map((product, index) => (
        <Link
          key={product.title}
          to={product.href}
          className="dropdown-item group block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:shadow-md hover:scale-[1.02] will-change-transform"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-purple-600 transition-colors duration-200 group-hover:font-bold">
            {product.title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
            {product.description}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default ProductsDropdown;
