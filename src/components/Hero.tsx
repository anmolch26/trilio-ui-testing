import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import LottieAnimation from "./LottieAnimation";
import ThemeButton from "./theme/ThemeButton";
import { useAnalytics } from "../hooks/useAnalytics";
import Icon1 from "@/assests/Remove background project (3).png";
import Icon2 from "@/assests/Remove background project (5).png";
import Icon3 from "@/assests/Remove background project (6).png";
import Icon4 from "@/assests/Remove background project (7).png";
import Icon5 from "@/assests/Remove background project (8).png";
import Icon6 from "@/assests/Remove background project (9).png";
import Icon7 from "@/assests/Remove background project (10).png";
import Icon8 from "@/assests/Remove background project (11).png";
import Icon9 from "@/assests/Remove background project (12).png";
import Icon10 from "@/assests/Remove background project (13).png";
import AIAssistantInterface from "./AIAssistantInterface";
import OrbitingCarousel from "./OrbitingCarousel";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { trackButtonClick } = useAnalytics();

  // Updated images for the orbiting carousel (removed ChatGPT image)
  const carouselImages = [
    { id: 1, src: Icon1, alt: "Analytics Dashboard" },
    { id: 2, src: Icon2, alt: "Ecommerce Insights" },
    { id: 3, src: Icon3, alt: "Ad Performance" },
    { id: 4, src: Icon4, alt: "Data Visualization" },
    { id: 5, src: Icon5, alt: "Sales Analytics" },
    { id: 6, src: Icon6, alt: "Customer Insights" },
    { id: 7, src: Icon7, alt: "Revenue Tracking" },
    { id: 8, src: Icon8, alt: "Marketing ROI" },
    { id: 9, src: Icon9, alt: "Inventory Management" },
    { id: 10, src: Icon10, alt: "Demand Forecasting" },
    { id: 11, src: Icon1, alt: "Product Performance" },
    { id: 12, src: Icon2, alt: "Growth Analytics" },
  ];

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
      trackButtonClick('see_trilio_action', { page_section: 'hero' });
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
                <AIAssistantInterface />
              </>
            )}
          </div>
        </div>

        {/* Orbiting Carousel Section */}
        <div
          className="mt-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.1s" }}
        >
          <OrbitingCarousel
            images={carouselImages}
            title="Connect All Your Commerce Data"
            description="Trilio integrates with 20+ platforms"
            buttonText="See All Integrations"
          />
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
