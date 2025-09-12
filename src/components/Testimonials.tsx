import React, { useRef, useEffect, useState, useCallback } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [
  {
    content:
      "Trilio transformed our ad spend analysis. We now see 3x revenue growth with clear ROAS insights across all channels. The unified dashboard saves us hours every day.",
    author: "",
    role: "CMO, FastGrow Brands",
    gradient: "from-blue-700 via-indigo-800 to-purple-900",
    backgroundImage: "/background-section1.png",
  },
  {
    content:
      "Before Trilio, our data was scattered across 12 different platforms. Now we have one source of truth that shows exactly where to invest our marketing dollars.",
    author: "",
    role: "VP of Marketing, ScaleUp Co",
    gradient: "from-indigo-900 via-purple-800 to-orange-500",
    backgroundImage: "/background-section2.png",
  },
  {
    content:
      "The AI insights helped us identify our most profitable customer segments. We've increased our retention rate by 40% and doubled our LTV in just 3 months.",
    author: "",
    role: "Head of Analytics, TechCommerce",
    gradient: "from-purple-800 via-pink-700 to-red-500",
    backgroundImage: "/background-section2.png",
  },
  {
    content:
      "As a mid-size business, we never thought advanced analytics would be accessible to us. Trilio changed that equation entirely with its easy setup and powerful insights.",
    author: "",
    role: "CEO, GrowthMart",
    gradient: "from-orange-600 via-red-500 to-purple-600",
    backgroundImage: "/background-section1.png",
  },
  {
    content:
      "Trilio's inventory forecasting saved us from a major stockout crisis. The AI predictions are incredibly accurate and helped us optimize our supply chain like never before.",
    author: "",
    role: "Operations Director, RetailMax",
    gradient: "from-emerald-700 via-teal-600 to-cyan-500",
    backgroundImage: "/background-section3.png",
  },
];

const TestimonialCard = ({
  content,
  author,
  role,
  gradient,
  backgroundImage = "/background-section1.png",
  cardClass = "",
  isActive = false,
  position = "center",
}: TestimonialProps & {
  cardClass?: string;
  isActive?: boolean;
  position?: "left" | "center" | "right";
}) => {
  return (
    <div
      className={`
        ${
          isActive
            ? "active-card animate-card-glow"
            : position === "left" || position === "right"
            ? "side-card"
            : "distant-card"
        } 
        rounded-[2rem] p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between text-white relative overflow-hidden border
        transition-all duration-1000 ease-out transform-gpu
        cursor-pointer group
        ${cardClass}
      `}
      style={{
        background: isActive
          ? `linear-gradient(135deg, ${gradient
              .replace("from-", "rgba(59, 130, 246, 0.95), ")
              .replace(" via-", "rgba(37, 99, 235, 0.95) 50%, ")
              .replace(" to-", "rgba(29, 78, 216, 0.95)")})`
          : undefined,
      }}
    >
      {/* Floating particles for active card */}
      {isActive && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 text-center transform transition-transform duration-700">
        <div
          className={`mb-4 sm:mb-6 lg:mb-8 transition-all duration-700 ${
            isActive ? "animate-text-glow" : ""
          }`}
        >
          <p className="text-sm sm:text-base lg:text-xl font-medium leading-relaxed relative">
            <span className="relative z-10">{`"${content}"`}</span>
            {isActive && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-600/20 blur-lg animate-pulse" />
            )}
          </p>
        </div>

        <div className="space-y-1">
          <h4 className="font-semibold text-sm sm:text-base lg:text-xl tracking-wide">
            {author}
          </h4>
          <p
            className={`text-xs sm:text-sm lg:text-base transition-colors duration-500 ${
              isActive ? "text-white/90" : "text-white/70"
            }`}
          >
            {role}
          </p>
        </div>
      </div>

      {/* Border glow for active card */}
      {isActive && (
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-blue-500/50 via-blue-400/50 to-blue-600/50 blur-sm animate-border-glow -z-10" />
      )}
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const goToPrevious = useCallback(() => {
    setDirection("left");
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 15000);
  }, []);

  const goToNext = useCallback(() => {
    setDirection("right");
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 15000);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentIndex) return;
      setDirection(index > currentIndex ? "right" : "left");
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 15000);
    },
    [currentIndex]
  );

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrevious();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [goToPrevious, goToNext]);

  // Auto-advance carousel
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered, goToNext]);

  // Enhanced CSS animations
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-10px) rotate(90deg); }
        50% { transform: translateY(-5px) rotate(180deg); }
        75% { transform: translateY(-15px) rotate(270deg); }
      }

      @keyframes shimmer {
        0% { transform: translateX(-100%) skewX(-12deg); }
        100% { transform: translateX(200%) skewX(-12deg); }
      }

      @keyframes cardGlow {
        0%, 100% { 
          box-shadow: 0 25px 50px -12px rgba(30, 64, 175, 0.5), 
                      0 0 0 1px rgba(59, 130, 246, 0.2),
                      inset 0 1px 0 rgba(59, 130, 246, 0.3); 
        }
        50% { 
          box-shadow: 0 35px 70px -12px rgba(30, 64, 175, 0.7), 
                      0 0 0 1px rgba(59, 130, 246, 0.3),
                      inset 0 1px 0 rgba(59, 130, 246, 0.4),
                      0 0 60px rgba(30, 64, 175, 0.4); 
        }
      }

      @keyframes borderGlow {
        0%, 100% { opacity: 0.5; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.02); }
      }

      @keyframes textGlow {
        0%, 100% { text-shadow: 0 0 10px rgba(59, 130, 246, 0.4); }
        50% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(30, 64, 175, 0.4); }
      }

      @keyframes slideInRight {
        0% { transform: translateX(100%) scale(0.8) rotateY(-30deg); opacity: 0; filter: blur(10px); z-index: 10; }
        50% { transform: translateX(50%) scale(0.9) rotateY(-15deg); opacity: 0.5; filter: blur(5px); z-index: 50; }
        100% { transform: translateX(0) scale(1) rotateY(0deg); opacity: 1; filter: blur(0); z-index: 100; }
      }

      @keyframes slideInLeft {
        0% { transform: translateX(-100%) scale(0.8) rotateY(30deg); opacity: 0; filter: blur(10px); z-index: 10; }
        50% { transform: translateX(-50%) scale(0.9) rotateY(15deg); opacity: 0.5; filter: blur(5px); z-index: 50; }
        100% { transform: translateX(0) scale(1) rotateY(0deg); opacity: 1; filter: blur(0); z-index: 100; }
      }

      @keyframes slideOutRight {
        0% { transform: translateX(0) scale(1) rotateY(0deg); opacity: 1; filter: blur(0); z-index: 100; }
        50% { transform: translateX(50%) scale(0.9) rotateY(-15deg); opacity: 0.5; filter: blur(5px); z-index: 50; }
        100% { transform: translateX(100%) scale(0.8) rotateY(-30deg); opacity: 0; filter: blur(10px); z-index: 10; }
      }

      @keyframes slideOutLeft {
        0% { transform: translateX(0) scale(1) rotateY(0deg); opacity: 1; filter: blur(0); z-index: 100; }
        50% { transform: translateX(-50%) scale(0.9) rotateY(15deg); opacity: 0.5; filter: blur(5px); z-index: 50; }
        100% { transform: translateX(-100%) scale(0.8) rotateY(30deg); opacity: 0; filter: blur(10px); z-index: 10; }
      }

      .perspective-deep {
        perspective: 1500px;
        transform-style: preserve-3d;
      }
      
      .active-card {
        background: linear-gradient(135deg, rgba(30, 64, 175, 0.95) 0%, rgba(59, 130, 246, 0.95) 30%, rgba(37, 99, 235, 0.95) 70%, rgba(29, 78, 216, 0.95) 100%);
        backdrop-filter: blur(25px) saturate(150%);
        border: 1px solid rgba(255, 255, 255, 0.3);
        position: relative;
        animation: slideInRight 1s ease-out;
      }

      .active-card::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(45deg, #1e40af, #3b82f6, #2563eb, #1d4ed8, #1e40af);
        border-radius: 2rem;
        z-index: -2;
        animation: borderGlow 0s ease-in-out infinite;
        filter: blur(8px);
      }

      .active-card::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%);
        backdrop-filter: blur(15px);
        border-radius: 2rem;
        z-index: -1;
        opacity: 0.8;
      }

      .side-card {
        background: linear-gradient(135deg, rgba(30, 64, 175, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(37, 99, 235, 0.1) 100%);
        backdrop-filter: blur(15px) saturate(120%);
        border: 1px solid rgba(59, 130, 246, 0.3);
        box-shadow: 0 15px 35px -5px rgba(30, 64, 175, 0.3);
      }

      .distant-card {
        background: linear-gradient(135deg, rgba(30, 64, 175, 0.15) 0%, rgba(59, 130, 246, 0.08) 50%, rgba(37, 99, 235, 0.02) 100%);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(59, 130, 246, 0.2);
        box-shadow: 0 8px 25px -8px rgba(30, 64, 175, 0.2);
      }

      .animate-card-glow {
        animation: cardGlow 4s ease-in-out infinite;
      }

      .animate-float {
        animation: float linear infinite;
      }

      .animate-shimmer {
        animation: shimmer 3s ease-in-out infinite;
      }

      .animate-border-glow {
        animation: borderGlow 3s ease-in-out infinite;
      }

      .animate-text-glow {
        animation: textGlow 3s ease-in-out infinite;
      }

      /* Responsive positioning for side cards */
      @media (max-width: 640px) {
        .side-card-left {
          transform: translateX(-120px) translateY(10px) translateZ(-100px) scale(0.85) rotateY(25deg) !important;
        }
        .side-card-right {
          transform: translateX(120px) translateY(10px) translateZ(-100px) scale(0.85) rotateY(-25deg) !important;
        }
      }

      @media (min-width: 641px) and (max-width: 768px) {
        .side-card-left {
          transform: translateX(-220px) translateY(10px) translateZ(-100px) scale(0.85) rotateY(25deg) !important;
        }
        .side-card-right {
          transform: translateX(220px) translateY(10px) translateZ(-100px) scale(0.85) rotateY(-25deg) !important;
        }
      }

      @media (min-width: 769px) and (max-width: 1024px) {
        .side-card-left {
          transform: translateX(-250px) translateY(10px) translateZ(-100px) scale(0.85) rotateY(25deg) !important;
        }
        .side-card-right {
          transform: translateX(250px) translateY(10px) translateZ(-100px) scale(0.85) rotateY(-25deg) !important;
        }
      }


    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const getCardPosition = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) return "center";
    if (diff === -1 || diff === testimonials.length - 1) return "left";
    if (diff === 1 || diff === -(testimonials.length - 1)) return "right";
    return "hidden";
  };

  return (
    <section
      className="pt-12 pb-12 sm:pt-16 sm:pb-16 relative px-4 sm:px-6 lg:px-8"
      id="testimonials"
      ref={sectionRef}
    >
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
        <div className="w-full flex justify-center">
          <div className="inline-flex items-center px-4 py-1 rounded-full text-base  text- border border-white/30 backdrop-blur-xl bg-white/5 shadow-lg shadow-white/10 hover:bg-white/10 transition-all duration-300">
            <span className="font-display tracking-wide">
              Testimonials
            </span>
          </div>
        </div>
        </div>

        <h2 className="pt-8 text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-8 sm:mb-10 md:mb-12 text-center">
          What brands say about Trilio
        </h2>

        {/* Carousel Container */}
        <div
          className="relative w-full max-w-7xl mx-auto h-64 flex items-center justify-center carousel-container
                     sm:h-80 md:h-96 lg:h-96 xl:h-96"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Track with Enhanced 3D Perspective */}
          <div
            className="relative w-[320px] h-[200px] perspective-deep overflow-visible
                          sm:w-[400px] sm:h-[240px] 
                          md:w-[450px] md:h-[260px] 
                          lg:w-[500px] lg:h-[280px] 
                          xl:w-[500px] xl:h-[280px]"
          >
            {testimonials.map((testimonial, index) => {
              const position = getCardPosition(index);
              const isActive = index === currentIndex;
              const isPrev = position === "left";
              const isNext = position === "right";
              const isVisible = position !== "hidden";

              if (!isVisible) return null;

              let transformStyle = "";
              let zIndex = 0;
              let opacity = 1;
              let filter = "blur(0px)";

              if (isActive) {
                transformStyle =
                  "translateX(0px) translateY(0px) translateZ(0px) scale(1) rotateY(0deg)";
                zIndex = 100;
                opacity = 1;
                filter = "blur(0px)";
              } else if (isPrev) {
                // Responsive positioning for left card - will be overridden by CSS media queries
                transformStyle =
                  "translateX(-280px) translateY(10px) translateZ(-100px) scale(0.85) rotateY(25deg)";
                zIndex = 20;
                opacity = 0.85;
                filter = "blur(3px)";
              } else if (isNext) {
                // Responsive positioning for right card - will be overridden by CSS media queries
                transformStyle =
                  "translateX(280px) translateY(10px) translateZ(-100px) scale(0.85) rotateY(-25deg)";
                zIndex = 20;
                opacity = 0.85;
                filter = "blur(3px)";
              }

              return (
                <div
                  key={index}
                  className={`absolute w-[300px] h-[180px] transition-all duration-[15000ms] transform-gpu cursor-pointer
                             sm:w-[380px] sm:h-[220px]
                             md:w-[430px] md:h-[240px]
                             lg:w-[480px] lg:h-[260px]
                             xl:w-[480px] xl:h-[260px]
                             ${isPrev ? "side-card-left" : ""}
                             ${isNext ? "side-card-right" : ""}`}
                  style={{
                    transform: transformStyle,
                    zIndex: zIndex,
                    opacity: opacity,
                    filter: filter,
                    transformStyle: "preserve-3d",
                    transitionTimingFunction:
                      "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                  onClick={() => !isActive && goToSlide(index)}
                >
                  <TestimonialCard
                    content={testimonial.content}
                    author={testimonial.author}
                    role={testimonial.role}
                    gradient={testimonial.gradient}
                    backgroundImage={testimonial.backgroundImage}
                    cardClass="w-full h-full"
                    isActive={isActive}
                    position={position}
                  />
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-1 sm:left-4 top-1/2 transform -translate-y-1/2 z-50 
                     w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-br from-white/20 to-white/10 
                     backdrop-blur-lg border-2 border-white/30 
                     rounded-full flex items-center justify-center
                     transition-all duration-300
                     group shadow-lg cursor-pointer"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-3 h-3 sm:w-5 sm:h-5 text-white transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-1 sm:right-4 top-1/2 transform -translate-y-1/2 z-50 
                     w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-br from-white/20 to-white/10 
                     backdrop-blur-lg border-2 border-white/30 
                     rounded-full flex items-center justify-center
                     transition-all duration-300
                     group shadow-lg cursor-pointer"
            aria-label="Next testimonial"
          >
            <svg
              className="w-3 h-3 sm:w-5 sm:h-5 text-white transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Premium Indicators */}
          <div className="absolute -bottom-16 sm:-bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-50">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  transition-all duration-300 cursor-pointer
                  ${
                    index === currentIndex
                      ? "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full shadow-lg"
                      : "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/40 hover:bg-white/70 hover:scale-125 rounded-full"
                  }
                `}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
