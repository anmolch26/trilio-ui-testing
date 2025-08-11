import React from "react";
import ThemeButton from "./theme/ThemeButton";

interface ProductCTAProps {
  title: string;
  description: string;
  buttonText: string;
  gradientColors?: string;
}

const ProductCTA: React.FC<ProductCTAProps> = ({
  title,
  description,
  buttonText,
  gradientColors = "bg-gradient-to-br from-teal-500 to-teal-600",
}) => {
  return (
    <section
      className={`py-20 px-4 ${gradientColors} relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-teal-100 mb-8">{description}</p>
        <ThemeButton
          variant="secondary"
          href="/contact-form"
          showArrow={true}
          className="bg-white text-black hover:bg-gray-100 border-white hover:border-gray-100 hover:text-black"
        >
          {buttonText}
        </ThemeButton>
      </div>
    </section>
  );
};

export default ProductCTA;
