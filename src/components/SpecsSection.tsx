import React from "react";
const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 " id="capabilities">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span>Core Capabilities</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Grid of 4 capability cards with enhanced design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="group relative bg-white rounded-2xl p-8 text-center shadow-elegant hover:shadow-elegant-hover transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border border-gray-100 hover:border-orange-200/50 cursor-pointer overflow-hidden">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Animated background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-pulse-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-orange-200/50">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-orange-50 group-hover:to-purple-50 transition-all duration-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:scale-110 transition-transform duration-300"
                  >
                    <path
                      d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                      stroke="#FC4D0A"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      className="group-hover:stroke-purple-600 transition-colors duration-300"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                Real-time ROAS & CAC
              </h4>
              <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                Monitor return on ad spend and customer acquisition costs across
                all channels in real-time.
              </p>
            </div>
          </div>

          <div className="group relative bg-white rounded-2xl p-8 text-center shadow-elegant hover:shadow-elegant-hover transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border border-gray-100 hover:border-purple-200/50 cursor-pointer overflow-hidden">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Animated background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-pulse-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-purple-200/50">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-blue-50 transition-all duration-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:scale-110 transition-transform duration-300"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="16"
                      rx="2"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      className="group-hover:stroke-blue-600 transition-colors duration-300"
                    />
                    <path
                      d="M7 8h10M7 12h6"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="group-hover:stroke-blue-600 transition-colors duration-300"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                Unified Dashboard
              </h4>
              <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                One dashboard to rule them all - Shopify, Amazon, Meta, Google,
                Klaviyo and more.
              </p>
            </div>
          </div>

          <div className="group relative bg-white rounded-2xl p-8 text-center shadow-elegant hover:shadow-elegant-hover transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border border-gray-100 hover:border-green-200/50 cursor-pointer overflow-hidden">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-teal-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Animated background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-teal-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-pulse-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-green-200/50">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-green-50 group-hover:to-teal-50 transition-all duration-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:scale-110 transition-transform duration-300"
                  >
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                      stroke="#10B981"
                      strokeWidth="2"
                      className="group-hover:stroke-teal-600 transition-colors duration-300"
                    />
                    <polyline
                      points="14,2 14,8 20,8"
                      stroke="#10B981"
                      strokeWidth="2"
                      className="group-hover:stroke-teal-600 transition-colors duration-300"
                    />
                    <line
                      x1="16"
                      y1="13"
                      x2="8"
                      y2="13"
                      stroke="#10B981"
                      strokeWidth="2"
                      className="group-hover:stroke-teal-600 transition-colors duration-300"
                    />
                    <line
                      x1="16"
                      y1="17"
                      x2="8"
                      y2="17"
                      stroke="#10B981"
                      strokeWidth="2"
                      className="group-hover:stroke-teal-600 transition-colors duration-300"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                Custom BI Reports
              </h4>
              <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                Build automated custom reports with drag-and-drop functionality
                on any metric.
              </p>
            </div>
          </div>

          <div className="group relative bg-white rounded-2xl p-8 text-center shadow-elegant hover:shadow-elegant-hover transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border border-gray-100 hover:border-blue-200/50 cursor-pointer overflow-hidden">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Animated background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-pulse-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-blue-200/50">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-indigo-50 transition-all duration-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:scale-110 transition-transform duration-300"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      className="group-hover:stroke-indigo-600 transition-colors duration-300"
                    />
                    <polyline
                      points="12,6 12,12 16,14"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      className="group-hover:stroke-indigo-600 transition-colors duration-300"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                60-Second Insights
              </h4>
              <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                Get actionable AI-powered insights and recommendations in under
                60 seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Main content with text mask image */}
      </div>
    </section>
  );
};
export default SpecsSection;
