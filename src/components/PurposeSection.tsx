import React, { useEffect, useRef, useState, useCallback } from "react";

const PurposeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Performance optimization refs
  const rafId = useRef<number>();
  const lastScrollY = useRef(0);
  const lastActiveIndex = useRef(0);

  const cardStyle = {
    height: "60vh",
    maxHeight: "600px",
    borderRadius: "20px",
    transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
    willChange: "transform, opacity",
  };

  // Optimized scroll handler with reduced calculations
  const handleScroll = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      if (!sectionRef.current || !isIntersecting) return;

      const currentScrollY = window.scrollY;

      // Only calculate if scroll changed significantly
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();

      // Simplified progress calculation
      const progress =
        sectionRect.top <= 0
          ? Math.min(1, Math.abs(sectionRect.top) / (window.innerHeight * 1.5))
          : 0;

      // Determine active card with simpler logic
      let newActiveIndex = 0;
      if (progress > 0.65) newActiveIndex = 2;
      else if (progress > 0.35) newActiveIndex = 1;

      // Only update if index actually changed
      if (newActiveIndex !== lastActiveIndex.current) {
        setActiveCardIndex(newActiveIndex);
        lastActiveIndex.current = newActiveIndex;
      }

      lastScrollY.current = currentScrollY;
    });
  }, [isIntersecting]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Throttled scroll listener with longer interval
    let scrollTimeout: NodeJS.Timeout;
    const throttledScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 16); // ~60fps
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [handleScroll]);

  // Pre-calculated transforms to avoid string operations during scroll
  const cardTransforms = {
    0: { transform: "translateY(80px) scale(0.9)", zIndex: 10 },
    1: { transform: "translateY(40px) scale(0.95)", zIndex: 20 },
    2: { transform: "translateY(0px) scale(1)", zIndex: 30 },
  };

  const getCardStyle = (cardIndex: number, isVisible: boolean) => ({
    ...cardStyle,
    ...cardTransforms[cardIndex as keyof typeof cardTransforms],
    opacity: isVisible ? (cardIndex === 0 ? 0.9 : 1) : 0,
    pointerEvents: (isVisible ? "auto" : "none") as "auto" | "none",
  });

  return (
    <div ref={sectionRef} className="relative" style={{ height: "200vh" }}>
      <section
        className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-white"
        id="purpose"
      >
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
              <div
                className="pulse-chip opacity-0 animate-fade-in"
                style={{
                  animationDelay: "0.1s",
                }}
              >
                <span>Data Intelligence</span>
              </div>
            </div>

            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-1 md:mb-2">
              Why Unified Data Matters
            </h2>
          </div>

          <div className="relative flex-1 perspective-1000">
            {/* First Card */}
            <div
              className="absolute inset-0 overflow-hidden shadow-xl"
              style={getCardStyle(0, isIntersecting)}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80"
              />

              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">20+ Integrations</span>
                </div>
              </div>

              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                    We connect all your ecommerce data sources into one unified
                    view
                  </h3>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div
              className="absolute inset-0 overflow-hidden shadow-xl"
              style={getCardStyle(1, activeCardIndex >= 1)}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80"
              />

              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">100K+ Metrics</span>
                </div>
              </div>

              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                    We analyze over 100,000 metrics in real-time to surface what
                    matters
                  </h3>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div
              className="absolute inset-0 overflow-hidden shadow-xl"
              style={getCardStyle(2, activeCardIndex >= 2)}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80"
              />

              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">50+ Brands</span>
                </div>
              </div>

              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                    We empower brands to make{" "}
                    <span className="text-[#FC4D0A]">
                      data-driven decisions
                    </span>{" "}
                    in minutes, not hours
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PurposeSection;
