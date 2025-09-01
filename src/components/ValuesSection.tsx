import React from "react";
const ValuesSection = () => {
  return (
    <section id="values" className="w-full py-0">
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
          <div
            className="bg-no-repeat bg-cover bg-center p-4 sm:p-5 min-h-[250px] sm:min-h-[350px] flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%)",
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
      </div>
    </section>
  );
};
export default ValuesSection;
