import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ThemeCardProps {
  icon?: LucideIcon | React.ReactNode;
  title: string;
  description: string;
  className?: string;
  variant?: "default" | "feature" | "testimonial";
  children?: React.ReactNode;
}

const ThemeCard: React.FC<ThemeCardProps> = ({
  icon,
  title,
  description,
  className,
  variant = "default",
  children,
}) => {
  const baseClasses = "glass-card hover-lift transition-all duration-300";

  const variantClasses = {
    default: "p-6",
    feature: "p-8 text-center",
    testimonial: "p-6 border-l-4 border-orange-500",
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      {icon && (typeof icon === "function"
        ? React.createElement(icon as LucideIcon, {
            className: "mb-4 mx-auto w-8 h-8 text-blue-600",
          })
        : icon)}
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  );
};

export default ThemeCard;
