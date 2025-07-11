import React from "react";
const ValuesSection = () => {
  return (
    <section id="values" className="w-full py-0">
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
          <div
            className="bg-no-repeat bg-cover bg-center p-4 sm:p-5 min-h-[250px] sm:min-h-[350px] flex flex-col justify-between"
            style={{
              backgroundImage: "url('/background-section3.png')",
            }}
          >
            <div
              style={{
                marginTop: "40px",
              }}
            >
              <h2
                style={{
                  marginBottom: "0px",
                  padding: "0px 0px 40px",
                }}
                className="sm:text-4xl font-playfair text-white italic mt-0 mx-0 font-thin text-5xl md:text-6xl py-0 px-0 text-center lg:text-6xl"
              >
                Data-Driven, Human-Centered
              </h2>
              <p className="mt-8 text-base sm:text-lg md:text-xl text-center text-white/80 max-w-3xl mx-auto">
                Trilio.ai works with your team, not instead of it. By unifying
                scattered data, automating report generation, and surfacing
                AI-driven insights, Trilio helps your team focus on what matters
                the most: grow your brand today!
              </p>
            </div>

            {/* White box at the bottom with overflow */}
          </div>
        </div>

        {/* Three value pillars with enhanced design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-4 pb-12">
          <div className="group relative bg-white rounded-2xl p-8 text-center shadow-elegant hover:shadow-elegant-hover transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border border-gray-100 hover:border-orange-200/50 cursor-pointer overflow-hidden">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Animated background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-pulse-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-orange-200/50">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-orange-50 group-hover:to-purple-50 transition-all duration-300">
                  <svg
                    width="32"
                    height="32"
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                Data-Driven Decisions
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                Every insight is backed by real data from your business,
                ensuring recommendations you can trust and act upon.
              </p>
            </div>
          </div>

          <div className="group relative bg-white rounded-2xl p-8 text-center shadow-elegant hover:shadow-elegant-hover transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border border-gray-100 hover:border-purple-200/50 cursor-pointer overflow-hidden">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Animated background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-pulse-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-purple-200/50">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-blue-50 transition-all duration-300">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:scale-110 transition-transform duration-300"
                  >
                    <path
                      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      className="group-hover:stroke-blue-600 transition-colors duration-300"
                    />
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      className="group-hover:stroke-blue-600 transition-colors duration-300"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                Human-Centered Design
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                Our platform is built for real people running real businesses,
                with intuitive interfaces that make complex data simple.
              </p>
            </div>
          </div>

          <div className="group relative bg-white rounded-2xl p-8 text-center shadow-elegant hover:shadow-elegant-hover transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border border-gray-100 hover:border-green-200/50 cursor-pointer overflow-hidden">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-teal-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Animated background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-teal-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-pulse-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-green-200/50">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-green-50 group-hover:to-teal-50 transition-all duration-300">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:scale-110 transition-transform duration-300"
                  >
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
                      stroke="#10B981"
                      strokeWidth="2"
                      className="group-hover:stroke-teal-600 transition-colors duration-300"
                    />
                    <path
                      d="m9 12 2 2 4-4"
                      stroke="#10B981"
                      strokeWidth="2"
                      className="group-hover:stroke-teal-600 transition-colors duration-300"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                Transparent AI
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                We believe AI should be explainable. Our insights show you not
                just what to do, but why our AI recommends it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ValuesSection;
