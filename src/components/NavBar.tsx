import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import TrilioLogo from "./TrilioLogo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

// Direct imports instead of lazy loading
import ProductsDropdown from "./navbar-components/ProductsDropdown";
import SolutionsDropdown from "./navbar-components/SolutionsDropdown";
import WhoWeHelpDropdown from "./navbar-components/WhoWeHelpDropdown";
import ResourcesDropdown from "./navbar-components/ResourcesDropdown";
import AboutDropdown from "./navbar-components/AboutDropdown";
// import EraseBgLogo from "../assests/erasebg-transformed.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(
    null
  );
  const location = useLocation();

  // Check if current route is homepage
  const isHomepage = location.pathname === "/";

  // For non-homepage routes, always use light theme
  // For homepage, use dynamic behavior based on scroll
  const shouldUseLightTheme = !isHomepage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMobileSection = (section: string) => {
    setOpenMobileSection(openMobileSection === section ? null : section);
  };

  const products = [
    {
      title: "Trilio BI Reporting",
      description:
        "Build, customize & schedule deep-dive dashboards across ecommerce & ad data.",
      href: "/products/bi-reporting",
    },
    {
      title: "Trilio Insights",
      description:
        "AI-powered anomaly detection, trend forecasting, and actionable recommendations.",
      href: "/products/insights",
    },
    {
      title: "Trilio AI Agents",
      description:
        "Automated teammates that alert you on key business metrics and assist with decision-making.",
      href: "/products/ai-agents",
    },
  ];

  const services = [
    {
      title: "Data Integrations",
      description: "Connect Shopify, Amazon, Meta, Google, Klaviyo, etc.",
      href: "/solutions/data-integrations",
    },
    {
      title: "Custom Dashboard Development",
      description: "Tailored KPIs & workflows.",
      href: "/solutions/custom-dashboards",
    },
    {
      title: "Onboarding & Training",
      description: "Expert support to get teams started.",
      href: "/solutions/onboarding-training",
    },
    {
      title: "API & Developer Support",
      description: "API documentation, SDKs, and help for custom builds.",
      href: "/solutions/api-developer-support",
    },
  ];

  const whoWeHelp = [
    {
      title: "Founders & CEOs",
      description: "Strategic insights for business growth",
      href: "/who-we-help/founders-ceos",
    },
    {
      title: "Marketing Leaders",
      description: "Campaign performance and ROI optimization",
      href: "/who-we-help/marketing-leaders",
    },
    {
      title: "Performance Marketers",
      description: "Real-time ad spend and conversion tracking",
      href: "/who-we-help/performance-marketers",
    },
    {
      title: "Operations Managers",
      description: "Operational efficiency and workflow insights",
      href: "/who-we-help/operations-managers",
    },
    {
      title: "Data Analysts",
      description: "Advanced analytics and reporting tools",
      href: "/who-we-help/data-analysts",
    },
    {
      title: "Agencies & Consultants",
      description: "Client reporting and performance dashboards",
      href: "/who-we-help/agencies-consultants",
    },
    {
      title: "Tech Partners",
      description: "Integration support and partnership opportunities",
      href: "/who-we-help/tech-partners",
    },
  ];

  const resources = [
    { title: "Blog & Insights", href: "#blog" },
    { title: "Case Studies", href: "#case-studies" },
    { title: "Guides & Reports", href: "#guides" },
    { title: "Help Center", href: "#help" },
    { title: "Developer Docs", href: "#docs" },
    { title: "Newsletter Signup", href: "#newsletter" },
  ];

  const about = [
    { title: "Leadership Team", href: "/about/leadership-team" },
    { title: "Trust Center", href: "/about/trust-center" },
  ];

  const careers = [
    { title: "Open Positions", href: "/careers/open-positions" },
    { title: "Life at Trilio", href: "/careers/life-at-trilio" },
    { title: "Interview Process", href: "/careers/interview-process" },
    { title: "Internships & Programs", href: "/careers/internships-programs" },
  ];

  // Simplified and consistent styling logic
  const getNavTextClasses = () => {
    if (shouldUseLightTheme) {
      return "text-gray-800 hover:text-teal-600";
    }
    return "text-white hover:text-teal-400";
  };

  const getNavTriggerClasses = () => {
    const baseClasses =
      "nav-trigger-modern group relative font-medium transition-all duration-300 px-3 py-1.5 rounded-lg bg-transparent flex items-center gap-1 text-shadow-sm";

    if (shouldUseLightTheme) {
      return `${baseClasses} text-gray-800 hover:text-teal-600 hover:bg-teal-50/50`;
    }
    return `${baseClasses} text-white hover:text-teal-400 hover:bg-teal-50/10`;
  };

  const getMobileButtonClasses = () => {
    const baseClasses =
      "lg:hidden p-2 focus:outline-none rounded-lg transition-colors duration-200";

    if (shouldUseLightTheme) {
      return `${baseClasses} text-gray-800 hover:bg-gray-100`;
    }
    return `${baseClasses} text-white hover:bg-white/10`;
  };

  const getNavbarBackground = () => {
    if (isScrolled || !isHomepage) {
      return "bg-white/60 backdrop-blur-md shadow-lg border-b border-gray-100/50";
    }
    return "bg-transparent";
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-1 sm:py-1.5 md:py-2 transition-all duration-300",
        getNavbarBackground()
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
          aria-label="Trilio.ai"
        >
          {isHomepage && !isScrolled ? (
            <TrilioLogo
              isScrolled={isScrolled}
              isOnWhiteBackground={shouldUseLightTheme}
              className="h-16 w-auto animate-fade-in"
            />
          ) : (
            <TrilioLogo
              isScrolled={isScrolled}
              isOnWhiteBackground={shouldUseLightTheme}
              className="animate-fade-in"
            />
          )}
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className={getNavTriggerClasses()}>
                Products
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400/0 via-teal-400/5 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="animate-dropdown-enter bg-white border border-gray-200 shadow-lg">
                <ProductsDropdown />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={getNavTriggerClasses()}>
                Solutions
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400/0 via-teal-400/5 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="animate-dropdown-enter bg-white border border-gray-200 shadow-lg">
                <SolutionsDropdown />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={getNavTriggerClasses()}>
                Who We Help
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400/0 via-teal-400/5 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="animate-dropdown-enter bg-white border border-gray-200 shadow-lg">
                <WhoWeHelpDropdown />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={getNavTriggerClasses()}>
                Resources
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400/0 via-teal-400/5 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="animate-dropdown-enter bg-white border border-gray-200 shadow-lg">
                <ResourcesDropdown />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/pricing"
                className={getNavTriggerClasses()}
                style={{ textDecoration: "none" }}
              >
                Pricing
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={getNavTriggerClasses()}>
                About
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400/0 via-teal-400/5 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="animate-dropdown-enter bg-white border border-gray-200 shadow-lg">
                <AboutDropdown />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href="https://staging.trilio.ai/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className={cn(
                "relative group overflow-hidden border-2 font-semibold px-4 py-1.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 text-shadow-sm",
                shouldUseLightTheme
                  ? "border-teal-500/60 bg-white text-teal-700 hover:border-teal-600 hover:text-teal-800 hover:shadow-teal-500/20 hover:bg-white"
                  : "border-teal-400/60 bg-white/10 backdrop-blur-sm text-white hover:border-teal-300 hover:text-white hover:shadow-teal-400/20 hover:bg-white/20"
              )}
            >
              <span className="relative z-10">Login</span>
              <div
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  shouldUseLightTheme
                    ? "bg-gradient-to-r from-teal-50 to-teal-100"
                    : "bg-gradient-to-r from-teal-500/20 to-teal-400/20"
                )}
              ></div>
            </Button>
          </a>
          <Link to="/contact-form">
            <Button className="relative group overflow-hidden bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold px-4 py-1.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105 border-0 text-shadow-sm animated-border">
              <span className="relative z-10">Request a Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700 skew-x-12"></div>
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={getMobileButtonClasses()}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col pt-16 px-6 lg:hidden transition-all duration-300 ease-in-out overflow-y-auto",
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-4">
          {/* Products */}
          <div className="mobile-section">
            <button
              onClick={() => toggleMobileSection("products")}
              className="mobile-trigger flex items-center justify-between w-full text-lg font-semibold py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 transition-all duration-200 group"
            >
              <span className="group-hover:text-teal-600 transition-colors duration-200">
                Products
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 transition-all duration-300 group-hover:text-teal-600",
                  openMobileSection === "products" && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "mobile-dropdown overflow-hidden transition-all duration-300 ease-in-out",
                openMobileSection === "products"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <div className="ml-4 mt-2 space-y-2">
                {products.map((product, index) => (
                  <Link
                    key={product.title}
                    to={product.href}
                    className="mobile-item block p-3 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 transition-all duration-200 group animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="font-semibold text-sm text-gray-900 group-hover:text-teal-600 transition-colors duration-200">
                      {product.title}
                    </div>
                    <p className="text-xs text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-200">
                      {product.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="mobile-section">
            <button
              onClick={() => toggleMobileSection("services")}
              className="mobile-trigger flex items-center justify-between w-full text-lg font-semibold py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 transition-all duration-200 group"
            >
              <span className="group-hover:text-teal-600 transition-colors duration-200">
                Solutions
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 transition-all duration-300 group-hover:text-teal-600",
                  openMobileSection === "services" && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "mobile-dropdown overflow-hidden transition-all duration-300 ease-in-out",
                openMobileSection === "services"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <div className="ml-4 mt-2 space-y-2">
                {services.map((service, index) => (
                  <Link
                    key={service.title}
                    to={service.href}
                    className="mobile-item block p-3 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 transition-all duration-200 group animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="font-semibold text-sm text-gray-900 group-hover:text-teal-600 transition-colors duration-200">
                      {service.title}
                    </div>
                    <p className="text-xs text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-200">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Who We Help */}
          <div className="mobile-section">
            <button
              onClick={() => toggleMobileSection("help")}
              className="mobile-trigger flex items-center justify-between w-full text-lg font-semibold py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 transition-all duration-200 group"
            >
              <span className="group-hover:text-teal-600 transition-colors duration-200">
                Who We Help
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 transition-all duration-300 group-hover:text-teal-600",
                  openMobileSection === "help" && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "mobile-dropdown overflow-hidden transition-all duration-300 ease-in-out",
                openMobileSection === "help"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <div className="ml-4 mt-2 space-y-2">
                {whoWeHelp.map((role, index) => (
                  <Link
                    key={role.title}
                    to={role.href}
                    className="mobile-item block p-3 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 transition-all duration-200 group animate-fade-in"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <div className="font-semibold text-sm text-gray-900 group-hover:text-teal-600 transition-colors duration-200">
                      {role.title}
                    </div>
                    <p className="text-xs text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-200">
                      {role.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="mobile-section">
            <button
              onClick={() => toggleMobileSection("resources")}
              className="mobile-trigger flex items-center justify-between w-full text-lg font-semibold py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 transition-all duration-200 group"
            >
              <span className="group-hover:text-teal-600 transition-colors duration-200">
                Resources
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 transition-all duration-300 group-hover:text-teal-600",
                  openMobileSection === "resources" && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "mobile-dropdown overflow-hidden transition-all duration-300 ease-in-out",
                openMobileSection === "resources"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <div className="ml-4 mt-2 space-y-2">
                {resources.map((resource, index) => (
                  <a
                    key={resource.title}
                    href={resource.href}
                    className="mobile-item block p-3 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 transition-all duration-200 group font-semibold text-sm text-gray-900 hover:text-teal-600 animate-fade-in"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    {resource.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mobile-section">
            <Link
              to="/pricing"
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = "";
              }}
              className="mobile-trigger flex items-center justify-between w-full text-lg font-semibold py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 transition-all duration-200 group"
            >
              <span className="group-hover:text-teal-600 transition-colors duration-200">
                Pricing
              </span>
            </Link>
          </div>

          {/* About */}
          <div className="mobile-section">
            <button
              onClick={() => toggleMobileSection("about")}
              className="mobile-trigger flex items-center justify-between w-full text-lg font-semibold py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 transition-all duration-200 group"
            >
              <span className="group-hover:text-teal-600 transition-colors duration-200">
                About
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 transition-all duration-300 group-hover:text-teal-600",
                  openMobileSection === "about" && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "mobile-dropdown overflow-hidden transition-all duration-300 ease-in-out",
                openMobileSection === "about"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <div className="ml-4 mt-2 space-y-2">
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-3">
                    About Us
                  </h4>
                  {about.map((item, index) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="mobile-item block p-3 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 transition-all duration-200 group font-semibold text-sm text-gray-900 hover:text-teal-600 animate-fade-in"
                      style={{ animationDelay: `${index * 30}ms` }}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
                <div className="border-t pt-2">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-3">
                    Careers
                  </h4>
                  {careers.map((career, index) => (
                    <a
                      key={career.title}
                      href={career.href}
                      className="mobile-item block p-3 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 transition-all duration-200 group font-semibold text-sm text-gray-900 hover:text-teal-600 animate-fade-in"
                      style={{
                        animationDelay: `${(about.length + index) * 30}ms`,
                      }}
                    >
                      {career.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile CTA and Theme Toggle */}
          <div className="flex flex-col space-y-4 mt-8 pb-8">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Theme</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://staging.trilio.ai/login",
                  "_blank",
                  "noopener,noreferrer"
                );
                setIsMenuOpen(false);
                document.body.style.overflow = "";
              }}
            >
              <Button
                variant="outline"
                className="relative group overflow-hidden border-2 border-teal-300/60 bg-white/80 backdrop-blur-sm text-teal-700 hover:border-teal-400 hover:text-teal-800 font-semibold w-full rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 hover:scale-105 hover:bg-white animated-border"
              >
                <span className="relative z-10">Login</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-teal-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Link>
            <Link
              to="/contact-form"
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = "";
              }}
            >
              <Button className="relative group overflow-hidden bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold w-full rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105 animated-border">
                <span className="relative z-10">Request a Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700 skew-x-12"></div>
              </Button>
            </Link>
          </div>
        </nav>
      </div>

      <style>{`
        @keyframes dropdown-enter {
          0% {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-3px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes mobile-fade-in {
          0% {
            opacity: 0;
            transform: translateX(-10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes underline-expand {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes border-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-dropdown-enter {
          animation: dropdown-enter 250ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .dropdown-item {
          animation: fade-in 300ms ease-out forwards;
          opacity: 0;
        }
        
        .mobile-item {
          animation: mobile-fade-in 300ms ease-out forwards;
          opacity: 0;
        }
        
        .nav-trigger-modern {
          position: relative;
        }
        
        .nav-trigger-modern::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 8px;
          padding: 1px;
          background: linear-gradient(135deg, transparent, rgba(20, 184, 166, 0.1), transparent);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 300ms ease;
        }
        
        .nav-trigger-modern:hover::before {
          opacity: 1;
        }

        .animated-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          padding: 2px;
          background: linear-gradient(45deg, #14b8a6, #06b6d4, #3b82f6, #14b8a6);
          background-size: 300% 300%;
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          animation: border-flow 3s ease infinite;
          opacity: 0.7;
        }

        .text-shadow-sm {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </header>
  );
};

export default Navbar;
