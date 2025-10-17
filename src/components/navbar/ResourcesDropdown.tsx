import React from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

const ResourcesDropdown = () => {
  const resources = [
    { title: "Blog & Insights", href: "/resources/blog-insights" },
    { title: "Case Studies", href: "/resources/case-studies" },
    { title: "Guides & Reports", href: "/resources/guides-reports" },
    { title: "Help Center", href: "/resources/help-center" },
    { title: "Developer Docs", href: "/resources/developer-docs" },
    { title: "Data Dictionary", href: "/resources/data-dictionary" },
    { title: "Newsletter Signup", href: "/resources/newsletter-signup" },
  ];

  return (
    <div className="w-[400px] p-2 bg-white rounded-md shadow-lg border">
      {resources.map((resource) => (
        <NavigationMenuLink
          key={resource.title}
          href={resource.href}
          className="block p-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-purple-600 rounded"
        >
          {resource.title}
        </NavigationMenuLink>
      ))}
    </div>
  );
};

export default ResourcesDropdown;
