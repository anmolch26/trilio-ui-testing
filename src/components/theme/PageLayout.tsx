import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import LegacyFooter from "@/components/LegacyFooter";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  backgroundClass?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  className = "",
  backgroundClass = "bg-gray-50",
}) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);
  return (
    <div className={`min-h-screen ${backgroundClass} ${className}`}>
      <Navbar />
      <main className="relative z-10">{children}</main>
      {location.pathname === "/" ? <Footer /> : <LegacyFooter />}
    </div>
  );
};

export default PageLayout;
