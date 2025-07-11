import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import LottieAnimation from "./LottieAnimation";
import ThemeButton from "./theme/ThemeButton";
import Icon1 from "@/assests/Remove background project (5).png";
import Icon2 from "@/assests/Remove background project (6).png";
import Icon3 from "@/assests/Remove background project (7).png";
import Icon4 from "@/assests/Remove background project (8).png";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    fetch("/loop-header.lottie")
      .then((response) => response.json())
      .then((data) => setLottieData(data))
      .catch((error) =>
        console.error("Error loading Lottie animation:", error)
      );
  }, []);

  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      imageRef.current.style.transform = `perspective(1000px) rotateY(${
        x * 2.5
      }deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);

  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll(".parallax");
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || "0.1");
        const yPos = -scrollY * speed;
        element.style.setProperty("--parallax-y", `${yPos}px`);
      });
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const handleScrollToShowcase = () => {
    const showcaseElement = document.getElementById("showcase");
    if (showcaseElement) {
      const offset = window.innerWidth < 768 ? 100 : 80;
      window.scrollTo({
        top: showcaseElement.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="overflow-hidden relative min-h-screen flex items-center justify-center pb-0 mb-0"
      id="hero"
    >
      <div className="container px-4 sm:px-6 lg:px-8 w-full" ref={containerRef}>
        <div
          className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center justify-center min-h-[calc(100vh-120px)] mb-0 pb-0"
          style={{ paddingBottom: 0, marginBottom: 0 }}
        >
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="mb-3 sm:mb-6">
              <div
                className="pulse-chip inline-block opacity-0 animate-fade-in"
                style={{
                  animationDelay: "0.1s",
                }}
              >
                <span>Ecommerce Intelligence</span>
              </div>
            </div>

            <h1
              className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in text-white"
              style={{
                animationDelay: "0.3s",
              }}
            >
              Your AI Wingman for
              <br className="hidden sm:inline" />
              Ecommerce Growth
            </h1>

            <p
              style={{
                animationDelay: "0.5s",
              }}
              className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-white/90 font-normal text-base sm:text-lg text-left"
            >
              Turn every click, visit, and ad dollar into profitable
              insights—instantly.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
              style={{
                animationDelay: "0.7s",
              }}
            >
              <ThemeButton
                variant="primary"
                href="/contact-form"
                showArrow={true}
                className="w-full sm:w-auto text-center"
              >
                Try for free
              </ThemeButton>

              <ThemeButton
                variant="secondary"
                onClick={handleScrollToShowcase}
                showArrow={true}
                className="w-full sm:w-auto text-center"
              >
                See trilio in action
              </ThemeButton>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0 flex items-center justify-center">
            {lottieData ? (
              <div
                className="relative z-10 animate-fade-in"
                style={{
                  animationDelay: "0.9s",
                }}
              >
                <LottieAnimation
                  animationPath={lottieData}
                  className="w-full h-auto max-w-lg mx-auto"
                  loop={true}
                  autoplay={true}
                />
              </div>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/40 to-gray-200/40 rounded-2xl sm:rounded-3xl -z-10 shadow-xl blur-sm"></div>
                <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200/50 bg-gradient-to-br from-white to-gray-50/80">
                  <div className="bg-gradient-to-r from-gray-600 to-gray-700 h-12 flex items-center px-4 space-x-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-white text-sm font-medium">
                        Trilio Analytics Dashboard
                      </span>
                    </div>
                  </div>
                  <div className="p-0 bg-white relative">
                    {/* Removed animated logo icons */}
                    <img
                      src="/lovable-uploads/64071d5d-3b4d-4c4f-b5d1-697a4dcad6e2.png"
                      alt="Ecommerce Analytics Dashboard"
                      className="w-full h-auto"
                      ref={imageRef}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes border-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes revolve-icons {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-revolve-icons {
          animation: revolve-icons 8s linear infinite;
        }
        @keyframes square-icon-1 {
  0% { top: -24px; left: 50%; transform: translateX(-50%); }
  25% { top: 50%; left: calc(100% + 24px); transform: translateY(-50%); }
  50% { top: calc(100% + 24px); left: 50%; transform: translateX(-50%); }
  75% { top: 50%; left: -24px; transform: translateY(-50%); }
  100% { top: -24px; left: 50%; transform: translateX(-50%); }
}
@keyframes square-icon-2 {
  0% { right: -24px; top: 50%; transform: translateY(-50%); }
  25% { bottom: -24px; right: 50%; transform: translateX(50%); }
  50% { right: calc(100% + 24px); top: 50%; transform: translateY(-50%); }
  75% { top: -24px; right: 50%; transform: translateX(50%); }
  100% { right: -24px; top: 50%; transform: translateY(-50%); }
}
@keyframes square-icon-3 {
  0% { bottom: -24px; left: 50%; transform: translateX(-50%); }
  25% { bottom: 50%; left: calc(100% + 24px); transform: translateY(50%); }
  50% { top: -24px; left: 50%; transform: translateX(-50%); }
  75% { bottom: 50%; left: -24px; transform: translateY(50%); }
  100% { bottom: -24px; left: 50%; transform: translateX(-50%); }
}
@keyframes square-icon-4 {
  0% { left: -24px; top: 50%; transform: translateY(-50%); }
  25% { top: calc(100% + 24px); left: 50%; transform: translateX(-50%); }
  50% { left: calc(100% + 24px); top: 50%; transform: translateY(-50%); }
  75% { top: -24px; left: 50%; transform: translateX(-50%); }
  100% { left: -24px; top: 50%; transform: translateY(-50%); }
}
.animate-square-icon-1 { animation: square-icon-1 8s linear infinite; }
.animate-square-icon-2 { animation: square-icon-2 8s linear infinite; }
.animate-square-icon-3 { animation: square-icon-3 8s linear infinite; }
.animate-square-icon-4 { animation: square-icon-4 8s linear infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
