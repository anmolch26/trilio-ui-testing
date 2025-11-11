
import React from "react";
import { cn } from "@/lib/utils";

interface ThemeSectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray" | "gradient" | "orange" | "purple";
  padding?: "sm" | "md" | "lg" | "xl";
}

const ThemeSection: React.FC<ThemeSectionProps> = ({
  children,
  className,
  background = "gray",
  padding = "lg"
}) => {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-br from-orange-50 to-purple-50",
    orange: "bg-gradient-to-br from-orange-500 to-orange-600",
    purple: "bg-gradient-to-br from-purple-500 to-purple-600"
  };

  const paddingClasses = {
    sm: "py-8 px-4",
    md: "py-12 px-4",
    lg: "py-16 px-4",
    xl: "py-20 px-4"
  };

  return (
    <section 
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      <div className="container mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  );
};

export default ThemeSection;
