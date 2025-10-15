import React, { useEffect, useRef, useState, Suspense, lazy } from "react";
import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import OptimizedPurposeSection from "@/components/OptimizedPurposeSection";
import SpecsSection from "@/components/SpecsSection";
import DetailsSection from "@/components/DetailsSection";
import ImageShowcaseSection from "@/components/ImageShowcaseSection";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import ValuesSection from "@/components/ValuesSection";
import Footer from "@/components/Footer";

const AnimatedParticles = lazy(() => import("@/components/AnimatedParticles"));
const SpaceBackgroundAnimation = lazy(() => import("@/components/SpaceBackgroundAnimations"));
const Testimonials = lazy(() => import("@/components/Testimonials"));

const Index = () => {
  const [showAnimations, setShowAnimations] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false);
  const testimonialsSentinelRef = useRef<HTMLDivElement | null>(null);
  // Initialize intersection observer to detect when elements enter viewport
  // Re-run after testimonials mount so newly added nodes are observed
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [showTestimonials]);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href")?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;

        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth",
        });
      });
    });
  }, []);

  // Defer top-of-page heavy animations until idle or slight delay
  useEffect(() => {
    let timeoutId: number | undefined;
    if ((window as any).requestIdleCallback) {
      (window as any).requestIdleCallback(() => setShowAnimations(true), { timeout: 1500 });
    } else {
      timeoutId = window.setTimeout(() => setShowAnimations(true), 1200);
    }
    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  // Preload and show testimonials when near viewport
  useEffect(() => {
    const el = testimonialsSentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowTestimonials(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="gradient-background">
        <Suspense fallback={null}>
          {showAnimations && (
            <>
              <SpaceBackgroundAnimation />
              <AnimatedParticles showAnimation={true} />
            </>
          )}
        </Suspense>
        <div className="light-beam"></div>
        <div className="light-beam-2"></div>
        <div className="light-streak"></div>
        <div className="ambient-glow"></div>
      </div>

      <Navbar largeLogo={true} />
      <main className="space-y-0 relative z-10 pt-16">
        <Hero />
        <SpecsSection />
        <OptimizedPurposeSection />
        <DetailsSection />
        <ImageShowcaseSection />
        <Features />
        <div ref={testimonialsSentinelRef} className="h-6" />
        <Suspense fallback={null}>
          {showTestimonials && <Testimonials />}
        </Suspense>
        
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
