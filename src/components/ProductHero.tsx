
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ProductHeroProps {
  badgeIcon: LucideIcon;
  badgeText: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
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
  heroImage,
  heroImageAlt,
  gradientColors
}) => {
  return (
    <section className="relative overflow-hidden bg-cover py-20 px-4 animated-teal-bg">
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] opacity-20 blur-3xl rounded-full animate-teal-shift" style={{
        background: 'linear-gradient(135deg, #3dccc7, #68d8d6, #9ceaef, #c4fff9)'
      }}></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
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
              <Link 
                to="/contact-form" 
                className="text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center group w-full sm:w-auto text-center"
                style={{ 
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, #07beb8, #3dccc7)',
                  boxShadow: '0 4px 15px rgba(7, 190, 184, 0.3)'
                }}
              >
                {primaryButtonText}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/contact-form" 
                className="button-secondary flex items-center justify-center group w-full sm:w-auto text-center"
                style={{ textDecoration: 'none' }}
              >
                {secondaryButtonText}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="hover-lift">
              <img 
                src={heroImage}
                alt={heroImageAlt}
                className="w-full h-auto rounded-lg shadow-elegant"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
