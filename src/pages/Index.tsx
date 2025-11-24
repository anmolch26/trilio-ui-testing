import React, { useEffect, useState, Suspense, lazy } from "react";

// ⚡ ONLY load above-the-fold components eagerly (what user sees immediately)
import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Seo from "@/components/Seo";


const SpecsSection = lazy(() => import("@/components/SpecsSection"));
const OptimizedPurposeSection = lazy(() => import("@/components/OptimizedPurposeSection"));
const DetailsSection = lazy(() => import("@/components/DetailsSection"));
const ImageShowcaseSection = lazy(() => import("@/components/ImageShowcaseSection"));
const Features = lazy(() => import("@/components/Features"));
import Newsletter from "@/components/Newsletter";
const Footer = lazy(() => import("@/components/Footer"));
const AnimatedParticles = lazy(() => import("@/components/AnimatedParticles"));
const SpaceBackgroundAnimation = lazy(() => import("@/components/SpaceBackgroundAnimations"));
import Testimonials from "@/components/Testimonials";


const Index = () => {
  const [showAnimations, setShowAnimations] = useState(false);
  const [showTestimonials] = useState(false);

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
  }, []);

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

  // Testimonials now eagerly loaded (no lazy/preload logic)

  return (
    <div className="min-h-screen">
      <Seo
        title="Trilio - AI-Powered Data Analytics for E-commerce"
        description="Trilio helps e-commerce businesses unlock growth with AI-powered data analytics, insights, and reporting."
        canonical="/"
        schemaMarkup={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Trilio.ai',
          url: 'https://trilio.ai/',
        }}
      />
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

        {/* Lazy load below-the-fold sections */}
        <Suspense fallback={<div className="h-20" />}>
          <SpecsSection />
          <OptimizedPurposeSection />
          <DetailsSection />
          <ImageShowcaseSection />
          <Features />
        </Suspense>

        <Testimonials />

      </main>

      {/* Newsletter eagerly loaded, Footer remains lazy */}
      <Newsletter />
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
