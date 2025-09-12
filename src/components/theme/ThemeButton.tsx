import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ThemeButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  disabled?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  showArrow = false,
  disabled = false,
  target,
  rel,
}) => {
  const baseClasses =
    "font-semibold transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-[#01b5af]/20 animated-border";

  const variantClasses = {
    primary:
      "relative overflow-hidden bg-gradient-to-r from-[#01b5af] to-[#019a94] hover:from-[#019a94] hover:to-[#018a84] text-white border-0 shadow-lg hover:shadow-xl hover:shadow-[#01b5af]/30 hover:shadow-[0_0_30px_rgba(1,181,175,0.6)] hover:shadow-[0_0_60px_rgba(1,181,175,0.4)] hover:scale-105",
    secondary:
      "relative overflow-hidden border-2 border-[#01b5af]/60 bg-white/80 backdrop-blur-sm text-[#047e7b] hover:border-[#01b5af] hover:shadow-lg hover:shadow-[#01b5af]/20 hover:shadow-[0_0_30px_rgba(1,181,175,0.6)] hover:shadow-[0_0_60px_rgba(1,181,175,0.4)] hover:scale-105 hover:bg-white",
    outline:
      "relative overflow-hidden border-2 border-[#01b5af]/60 bg-transparent text-[#01b5af] hover:bg-[#01b5af]/10 hover:border-[#01b5af] hover:text-[#01b5af] hover:shadow-lg hover:shadow-[#01b5af]/20 hover:shadow-[0_0_30px_rgba(1,181,175,0.6)] hover:shadow-[0_0_60px_rgba(1,181,175,0.4)] hover:scale-105",
  };

  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm rounded-lg min-h-[40px]",
    md: "px-7 py-3.5 text-base rounded-full min-h-[48px]",
    lg: "px-9 py-4 text-lg rounded-full min-h-[56px]",
  };

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled &&
      "opacity-50 cursor-not-allowed transform-none hover:transform-none",
    className
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
      )}
      {variant === "primary" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-[#01b5af] to-[#019a94] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700 skew-x-12"></div>
        </>
      )}
      {(variant === "secondary" || variant === "outline") && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#01b5af]/10 to-[#01b5af]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
    </>
  );

  if (href && !disabled) {
    const isExternal = /^(https?:)?\/\//i.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          className={buttonClasses}
          style={{ textDecoration: "none" }}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        to={href}
        className={buttonClasses}
        style={{ textDecoration: "none" }}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};

export default ThemeButton;
