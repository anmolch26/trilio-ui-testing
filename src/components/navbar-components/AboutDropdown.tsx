import React from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

const AboutDropdown = () => {
  const about = [
    { title: "Leadership Team", href: "/about/leadership-team" },
    { title: "Trust Center", href: "/about/trust-center" },
    { title: "Careers", href: "/careers/open-positions" },
    { title: "Life at Trilio", href: "/careers/life-at-trilio" },
  ];

  return (
    <div className="grid w-[400px] gap-2 p-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100/50">
      <div className="mb-2">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
          About Us
        </h3>
        {about.map((item, index) => (
          <NavigationMenuLink
            key={item.title}
            href={item.href}
            className="dropdown-item group block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:shadow-md hover:scale-[1.02] will-change-transform"
            style={{ animationDelay: `${index * 30}ms` }}
          >
            <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-purple-600 transition-colors duration-200 group-hover:font-bold">
              {item.title}
            </div>
          </NavigationMenuLink>
        ))}
      </div>
    </div>
  );
};

export default AboutDropdown;
