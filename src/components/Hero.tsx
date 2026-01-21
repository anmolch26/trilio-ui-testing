import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import ThemeButton from "./theme/ThemeButton";
import { useAnalytics } from "../hooks/useAnalytics";

// Brand logos for trust badges
import MoiraLogo from "@/assests/App Icon MOIRA logo (1).png";
import jetsonlogo from "@/assests/jetsonlogo1.jpg";
import Pglogo from "@/assests/P&Glogo.jpg";
import Maricologo from "@/assests/Marico_Logo1.jpg";

// S3 URLs for carousel images
const Icon1 =
  "https://assets.channeliq.ai/trilio-landing/Hero_Images/Remove background project (3).webp";
const Icon2 =
  "https://assets.channeliq.ai/trilio-landing/Hero_Images/Remove background project (5).webp";
const Icon3 =
  "https://assets.channeliq.ai/trilio-landing/Hero_Images/Remove background project (6).webp";
const Icon4 =
  "https://assets.channeliq.ai/trilio-landing/Hero_Images/Remove background project (7).webp";
const Icon5 =
  "https://assets.channeliq.ai/trilio-landing/Hero_Images/Remove background project (8).webp";
const Icon6 =
  "https://assets.channeliq.ai/trilio-landing/Hero_Images/Remove background project (9).webp";
const Icon7 =
  "https://assets.channeliq.ai/trilio-landing/Hero_Images/Remove background project (10).webp";
const Icon8 =
  "https://assets.channeliq.ai/trilio-landing/Hero_Images/Remove background project (11).webp";
const Icon9 =
  "https://assets.channeliq.ai/trilio-landing/Hero_Images/Remove background project (12).webp";
const Icon10 =
  "https://assets.channeliq.ai/trilio-landing/Hero_Images/Remove background project (13).webp";
import AIAssistantInterface from "./AIAssistantInterfaces";
import OrbitingCarousel from "./OrbitingCarousel";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeView, setActiveView] = useState<"dashboard" | "wingman">(
    "dashboard"
  );
  const { trackButtonClick } = useAnalytics();

  // Updated images for the orbiting carousel (removed ChatGPT image)
  const carouselImages = [
    { id: 1, src: Icon1, alt: "Analytics Dashboard" },
    { id: 2, src: Icon4, alt: "Data Visualization" },
    { id: 3, src: Icon3, alt: "Ad Performance" },
    { id: 4, src: Icon2, alt: "Ecommerce Insights" },
    { id: 5, src: Icon5, alt: "Sales Analytics" },
    { id: 6, src: Icon6, alt: "Customer Insights" },
    { id: 7, src: Icon7, alt: "Revenue Tracking" },
    { id: 8, src: Icon8, alt: "Marketing ROI" },
    { id: 9, src: Icon9, alt: "Inventory Management" },
    { id: 10, src: Icon10, alt: "Demand Forecasting" },
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
      trackButtonClick("see_trilio_action", { page_section: "hero" });
    }
  };

  return (
    <section
      className="overflow-hidden relative min-h-screen flex items-center justify-center pb-0 mb-0"
      id="hero"
    >
      <div className="w-full relative" ref={containerRef}>
        <div
          className="container px-4 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row gap-10 lg:gap-12 items-center justify-center min-h-[calc(100vh-120px)] mb-0 pb-0 lg:-mt-12"
          style={{ paddingBottom: 0, marginBottom: 0 }}
        >
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* <div className="hidden sm:block mb-3 sm:mb-6">
              <div className="inline-flex items-center px-4 py-0.5 rounded-full text-sm text-white border border-white/30 backdrop-blur-xl bg-white/5 shadow-lg shadow-white/10 hover:bg-white/10 transition-all duration-300">
                <span className="font-display tracking-wide">
                  Ecommerce Intelligence
                </span>
              </div>
            </div> */}

            <h1
              className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in text-white"
              style={{
                animationDelay: "0.3s",
              }}
            >
              Your AI Wingman for
              <br className="hidden sm:inline" /> Ecommerce Growth
            </h1>

            <p
              style={{
                animationDelay: "0.5s",
              }}
              className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-white/90 font-normal text-base sm:text-lg text-left max-w-xs sm:max-w-lg"
            >
              Stop leaving 20% of your ecommerce revenue on the table. One
              unified dashboard + AI Wingman tells you exactly what to change
              and how much revenue it will move.
            </p>

            <div
              className="flex flex-row flex-wrap gap-3 items-center justify-start opacity-0 animate-fade-in"
              style={{
                animationDelay: "0.7s",
              }}
            >
              <ThemeButton
                variant="primary"
                href="/who-we-help/waitlist"
                showArrow={true}
                className="w-auto text-center px-4 py-1.5 text-xs sm:text-sm font-semibold"
              >
                Join waitlist
              </ThemeButton>

              <ThemeButton
                variant="secondary"
                onClick={handleScrollToShowcase}
                showArrow={true}
                className="w-auto text-center px-4 py-1.5 text-xs sm:text-sm font-semibold"
              >
                See trilio in action
              </ThemeButton>
            </div>

            {/* Trusted by Moira Section */}
            <div
              className="mt-8 sm:mt-10 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.9s" }}
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/20 backdrop-blur-xl shadow-lg mb-4">
                {/* Brand Logos */}
                <div className="flex items-center -space-x-2">
                  <img
                    src={jetsonlogo}
                    alt="Glossier"
                    className="w-7 h-7 rounded-full border-2 border-white/30 bg-white object-cover shadow-sm"
                  />
                  <img
                    src={Pglogo}
                    alt="ridejetson"
                    className="w-7 h-7 rounded-full border-2 border-white/30 bg-white object-cover shadow-sm"
                  />
                  <img
                    src={MoiraLogo}
                    alt="Moira Cosmetics"
                    className="w-7 h-7 rounded-full border-2 border-white/30 bg-white object-cover shadow-sm"
                  />
                </div>

                <span className="text-white/90 text-sm font-normal">
                  Trusted by{" "}
                  <span className="font-semibold text-white">Moira</span> and
                  world's fast-growing brands
                </span>
              </div>

              {/* Revenue Stat */}
              <div className="text-[#00A49F] font-medium text-sm">
                Moira Beauty: +27% revenue in 60 days
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0 flex items-center justify-center">
            <div
              className="relative z-10 animate-fade-in w-full"
              style={{
                animationDelay: "0.9s",
              }}
            >
              {/* Tab Navigation */}
              <div className="flex justify-center mb-6">
                <div className="flex gap-4">
                  <button
                    onClick={() => setActiveView("dashboard")}
                    className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                      activeView === "dashboard"
                        ? "bg-teal-500 border-teal-500 text-white shadow-lg shadow-teal-500/30"
                        : "bg-gray-800/40 border-white/10 text-white/70 hover:bg-white/10 hover:text-white backdrop-blur-sm"
                    }`}
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => setActiveView("wingman")}
                    className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                      activeView === "wingman"
                        ? "bg-teal-500 border-teal-500 text-white shadow-lg shadow-teal-500/30"
                        : "bg-gray-800/40 border-white/10 text-white/70 hover:bg-white/10 hover:text-white backdrop-blur-sm"
                    }`}
                  >
                    AI Wingman
                  </button>
                </div>
              </div>

              <AIAssistantInterface activeView={activeView} />
            </div>
          </div>
        </div>

        {/* Company Logos Section */}
        <div
          className="mt-8 lg:-mt-[2px] opacity-0 animate-fade-in overflow-hidden"
          style={{ animationDelay: "1.0s" }}
        >
          <div className="relative py-3 sm:py-4 bg-white/5 backdrop-blur-sm">
            {/* Scrolling Logos Container */}
            <div className="flex gap-12 md:gap-16 animate-scroll-logos">
              {/* First set of logos */}
              <div className="flex gap-12 md:gap-16 flex-shrink-0">
                {[...Array(4)].map((_, i) => (
                  <React.Fragment key={`set1-${i}`}>
                    <div className="flex-shrink-0">
                      <img
                        src={MoiraLogo}
                        alt="Moira"
                        className="w-10 h-10 sm:w-10 sm:h-10 object-contain rounded-full"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src={jetsonlogo}
                        alt="Jetson"
                        className="w-10 h-10 sm:w-10 sm:h-10 object-contain rounded-full"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src={Pglogo}
                        alt="P&G"
                        className="w-10 h-10 sm:w-10 sm:h-10 object-contain rounded-full"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src={Maricologo}
                        alt="Marico"
                        className="w-10 h-10 sm:w-10 sm:h-10 object-contain rounded-full p-1 bg-white"
                      />
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* Duplicate set for seamless loop */}
              <div
                className="flex gap-12 md:gap-16 flex-shrink-0"
                aria-hidden="true"
              >
                {[...Array(4)].map((_, i) => (
                  <React.Fragment key={`set2-${i}`}>
                    <div className="flex-shrink-0">
                      <img
                        src={MoiraLogo}
                        alt="Moira"
                        className="w-10 h-10 sm:w-10 sm:h-10 object-contain rounded-full"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src={jetsonlogo}
                        alt="Jetson"
                        className="w-10 h-10 sm:w-10 sm:h-10 object-contain rounded-full"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src={Pglogo}
                        alt="P&G"
                        className="w-10 h-10 sm:w-10 sm:h-10 object-contain rounded-full"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src={Maricologo}
                        alt="Marico"
                        className="w-10 h-10 sm:w-10 sm:h-10 object-contain rounded-full p-1 bg-white"
                      />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Orbiting Carousel Section */}
        <div
          className="container px-4 sm:px-6 lg:px-8 mx-auto mt-12 sm:mt-16 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.1s" }}
        >
          <OrbitingCarousel
            images={carouselImages}
            title="Data Universe"
            description="Trilio integrates with 40+ platforms"
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
        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-logos {
          animation: scroll-logos 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
