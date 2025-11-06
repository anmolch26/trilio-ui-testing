
import React from 'react';
import { cn } from '@/lib/utils';

interface TrilioLogoProps {
  className?: string;
  isScrolled?: boolean;
  isOnWhiteBackground?: boolean;
  largeLogo?: boolean;
}

const TrilioLogo: React.FC<TrilioLogoProps> = ({
  className,
  isScrolled,
  isOnWhiteBackground = false,
  largeLogo = false
}) => {
  return (
    <div className={cn("flex items-center transition-all duration-500 cursor-pointer group", isScrolled ? "scale-90" : "scale-100", className)}>
      {/* Logo Image with dynamic filter */}
      <img 
        src="/lovable-uploads/9a046283-fff2-4873-a280-f9e479a02c07.png" 
        alt="Trilio.ai Logo"
        className={cn(
          "transition-all duration-500 group-hover:scale-110", 
          largeLogo 
            ? (isScrolled ? "h-16 sm:h-18" : "h-20 sm:h-22")
            : (isScrolled ? "h-16" : "h-20"),
          isOnWhiteBackground ? "filter-none" : "filter brightness-0 invert"
        )}
        style={{
          filter: isOnWhiteBackground ? 'none' : 'brightness(0) invert(1)'
        }}
       loading="lazy" decoding="async" />
    </div>
  );
};

export default TrilioLogo;
