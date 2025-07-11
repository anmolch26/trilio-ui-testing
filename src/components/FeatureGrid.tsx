
import React from "react";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradientColors: string;
}

interface FeatureGridProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ title, subtitle, features }) => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900 mb-4">{title}</h2>
          <p className="section-subtitle text-gray-600">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className={`glass-card p-8 hover-lift ${feature.gradientColors} border-opacity-50`}
              >
                <IconComponent className="w-12 h-12 text-orange-500 mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
