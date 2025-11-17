import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import ThemeButton from "./theme/ThemeButton";

interface ProductHeroProps {
  badgeIcon: LucideIcon;
  badgeText: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  secondaryButtonLink?: string;
  heroImage: string;
  heroImageAlt: string;
  gradientColors: string;
}

const ProductHero: React.FC<ProductHeroProps> = ({
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  secondaryButtonLink,
  heroImage,
  heroImageAlt,
  gradientColors,
}) => {
  return (
    <section className="relative overflow-hidden bg-cover pt-48 pb-20 px-4 animated-teal-bg">
      <div
        className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] opacity-20 blur-3xl rounded-full animate-teal-shift"
        style={{
          background:
            "linear-gradient(135deg, #3dccc7, #68d8d6, #9ceaef, #c4fff9)",
        }}
      ></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="pulse-chip mb-6">
              <BadgeIcon className="w-4 h-4 mr-2" />
              <span>{badgeText}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ThemeButton
                variant="primary"
                href="/contact-form"
                showArrow={true}
                className="w-full sm:w-auto text-center px-4 py-1.5 text-sm font-semibold"
              >
                {primaryButtonText}
              </ThemeButton>
              <ThemeButton
                variant="secondary"
                href={secondaryButtonLink || "/contact-form"}
                showArrow={true}
                className="w-full sm:w-auto text-center px-4 py-1.5 text-sm font-semibold"
                target={secondaryButtonLink ? "_blank" : undefined}
                rel={secondaryButtonLink ? "noopener noreferrer" : undefined}
              >
                {secondaryButtonText}
              </ThemeButton>
            </div>
          </div>
          <div
            className="relative opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <img
              src={heroImage}
              alt={heroImageAlt}
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
