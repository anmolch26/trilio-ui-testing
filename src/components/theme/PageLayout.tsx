import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      <main className="relative z-10 pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
