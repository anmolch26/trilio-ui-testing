
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-8 sm:pt-12 pb-2 sm:pb-3" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-3 sm:mb-4 bg-gradient-to-r from-white via-teal-100 to-teal-200 bg-clip-text text-transparent drop-shadow-lg">
            See Trilio.ai in Action
          </h2>
          <p className="text-base sm:text-lg text-gray-100 drop-shadow-md bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent font-medium">
            Get a unified view of your ecommerce performance with real-time insights, 
            automated reports, and AI-powered recommendations that drive growth.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src="/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png" 
              alt="Trilio.ai Dashboard showing unified ecommerce analytics" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Unified Ecommerce Intelligence</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Transform scattered data from Shopify, Amazon, Meta, Google, and more into 
              actionable insights. Our AI analyzes thousands of metrics to surface 
              opportunities that drive real revenue growth.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Real-time ROAS tracking
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Multi-channel analytics
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                AI-powered insights
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
