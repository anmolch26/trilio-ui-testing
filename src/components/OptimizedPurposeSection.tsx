import React, { useEffect, useRef, useState } from "react";

const OptimizedPurposeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(
              entry.target.getAttribute("data-card-index") || "0"
            );
            setVisibleCards((prev) => {
              const newState = [...prev];
              newState[cardIndex] = true;
              return newState;
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const cardElements = document.querySelectorAll("[data-card-index]");
    cardElements.forEach((el) => observer.observe(el));

    return () => {
      cardElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const cardStyle = {
    height: "25vh",
    maxHeight: "250px",
    borderRadius: "20px",
    transition:
      "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease-out",
  };

  const getCardAnimationStyle = (index: number, isVisible: boolean) => ({
    ...cardStyle,
    transform: isVisible
      ? "translateY(0px) scale(1)"
      : "translateY(60px) scale(0.95)",
    opacity: isVisible ? 1 : 0,
  });

  return (
    <section ref={sectionRef} className="w-full pb-16" id="purpose">
      <div className="container px-6 lg:px-8 mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
          <div className="inline-flex items-center px-4 py-1 rounded-full text-base  text-white border border-white/30 backdrop-blur-xl bg-white/5 shadow-lg shadow-white/10 hover:bg-white/10 transition-all duration-300">
            <span className="font-display tracking-wide">
            Why unified data matters
            </span>
          </div>
          </div>
        </div>

        {/* Cards Container - Single row, infinite scroll */}
        <div className="max-w-[2220px] mx-auto">
          <div className="relative w-full overflow-x-hidden overflow-y-hidden">
            <div className="flex gap-6 w-max animate-scroll-cards hover:[animation-play-state:paused]">
              {/* First 6 cards and their duplicates for infinite scroll */}
              {[0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5].map((idx, i) => (
                <div
                  key={i}
                  data-card-index={idx}
                  className="group w-[420px] h-[220px] flex-shrink-0 overflow-hidden shadow-xl border border-white/30 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                  style={getCardAnimationStyle(idx, visibleCards[idx])}
                >
                  <div
                    className={`absolute top-4 right-4 z-20${
                      idx === 2 ? " top-2" : ""
                    }`}
                  >
                    <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      <span className="text-sm font-medium">
                        {idx === 0 && "20+ Integrations"}
                        {idx === 1 && "100K+ Metrics"}
                        {idx === 2 && "Real-time Analytics"}
                        {idx === 3 && "CAC & Product Insights"}
                        {idx === 4 && "AI Forecasting"}
                        {idx === 5 && "Inventory Alerts"}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-teal-400/50 to-purple-500/50 z-10" />
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-teal-400/20 to-purple-500/20" />
                  {/* Card content by index */}
                  {idx === 0 && (
                    <>
                      <div className="relative z-10 p-4 sm:p-5 md:p-6 h-full flex flex-col items-center justify-center">
                        <div className="max-w-lg">
                          <h3 className="text-base sm:text-lg md:text-xl font-display text-white font-bold leading-tight mb-2 text-center">
                            We connect all your ecommerce data sources into one
                            unified view
                          </h3>
                        </div>
                      </div>
                    </>
                  )}
                  {idx === 1 && (
                    <>
                      <div className="relative z-10 p-4 sm:p-5 md:p-6 h-full flex flex-col items-center justify-center">
                        <div className="max-w-lg">
                          <h3 className="text-base sm:text-lg md:text-xl font-display text-white font-bold leading-tight mb-2 text-center">
                            We analyze over 100,000 metrics in real-time to
                            surface what matters
                          </h3>
                        </div>
                      </div>
                    </>
                  )}
                  {idx === 2 && (
                    <>
                      <div className="relative z-10 p-4 sm:p-5 md:p-6 h-full flex flex-col items-center justify-center">
                        <div className="max-w-lg">
                          <h3 className="text-base sm:text-lg md:text-xl font-display text-white font-bold leading-tight mb-2 text-center">
                            We provide instant insights that help you optimize
                            performance across all channels
                          </h3>
                        </div>
                      </div>
                    </>
                  )}
                  {idx === 3 && (
                    <>
                      <div className="relative z-10 p-4 sm:p-5 md:p-6 h-full flex flex-col items-center justify-center">
                        <div className="max-w-lg mt-8">
                          <h3 className="text-base sm:text-lg md:text-xl font-display text-white font-bold leading-tight mb-2 text-center">
                            We show you what's driving up your CAC, which
                            products are under performing, and where you're
                            losing money{" "}
                          </h3>
                        </div>
                      </div>
                    </>
                  )}
                  {idx === 4 && (
                    <>
                      <div className="relative z-10 p-4 sm:p-5 md:p-6 h-full flex flex-col items-center justify-center">
                        <div className="max-w-md">
                          <h3 className="text-base sm:text-lg md:text-xl font-display text-white font-bold leading-tight mb-2 text-center">
                            We leverage advanced AI forecast your sales, ad
                            spend, and inventory needs using the data you
                            already have{" "}
                          </h3>
                        </div>
                      </div>
                    </>
                  )}
                  {idx === 5 && (
                    <>
                      <div className="relative z-10 p-4 sm:p-5 md:p-6 h-full flex flex-col items-center justify-center">
                        <div className="max-w-lg mt-8">
                          <h3 className="text-base sm:text-lg md:text-xl font-display text-white font-bold leading-tight mb-2 text-center">
                            Get automated alerts before stockouts or overstock
                            happen. Make better purchase decisions with clear
                            inventory signals
                          </h3>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedPurposeSection;
