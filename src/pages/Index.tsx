
import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WhyChannelIQ from '../components/WhyChannelIQ';
import WaitlistForm from '../components/WaitlistForm';
import Survey from '../components/Survey';
import Footer from '../components/Footer';
import { Play } from 'lucide-react';

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const productVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Create intersection observer to trigger animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Get all elements with opacity-0 class (prepared for animation)
    const animatedElements = document.querySelectorAll('.opacity-0');
    animatedElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleProductVideoHover = () => {
    if (productVideoRef.current) {
      productVideoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  
  const handleProductVideoLeave = () => {
    if (productVideoRef.current) {
      productVideoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };
  
  const handleProductVideoClick = () => {
    if (productVideoRef.current) {
      if (productVideoRef.current.paused) {
        productVideoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        productVideoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <WhyChannelIQ />
        
        {/* Product Video Section - Horizontal Layout */}
        <section className="py-20 bg-gradient-to-r from-muted to-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-channeliq-blue/5 rounded-full -z-10 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-channeliq-lightblue/5 rounded-full -z-10 blur-3xl"></div>
          
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in-up">
              <div className="inline-block bg-channeliq-blue/10 px-3 py-1 rounded-full mb-4">
                <span className="text-sm font-medium text-channeliq-blue">See Channel IQ in Action</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                60-Second Product Overview
              </h2>
              <p className="text-lg text-foreground/80">
                Watch how Channel IQ's AI-driven analytics can transform your e-commerce business.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto opacity-0 animate-fade-in-up animate-delay-200">
              <div 
                className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 aspect-video ${
                  isVideoPlaying ? 'ring-4 ring-channeliq-blue/30' : 'hover:shadow-channeliq-blue/20 hover:scale-[1.01]'
                }`}
                onMouseEnter={handleProductVideoHover}
                onMouseLeave={handleProductVideoLeave}
                onClick={handleProductVideoClick}
              >
                {/* Placeholder for actual video */}
                <video 
                  ref={productVideoRef}
                  className="w-full h-full object-cover cursor-pointer"
                  poster="/placeholder.svg"
                  muted
                  loop
                >
                  <source src="#" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play overlay button that shows when video is not playing */}
                {!isVideoPlaying && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center shadow-lg hover:bg-channeliq-blue hover:text-white transition-colors mb-4">
                      <Play className="h-8 w-8 ml-1" />
                    </div>
                    <p className="text-white font-medium text-xl text-center px-6">Watch the Channel IQ platform in action</p>
                  </div>
                )}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-foreground/70">
                  See how Channel IQ's AI insights engine analyzes your e-commerce data across all platforms, 
                  providing actionable recommendations and automated optimizations.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Survey />
        <WaitlistForm />
        
        {/* Final CTA Section */}
        <section id="contact" className="py-16 bg-gradient-to-r from-channeliq-blue to-channeliq-indigo text-white">
          <div className="section-container text-center">
            <div className="max-w-3xl mx-auto opacity-0 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Be the first to unlock AI-driven e-commerce intelligence
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Join the waitlist today and get early access to the future of e-commerce optimization.
              </p>
              <a href="#waitlist" className="inline-block px-8 py-4 bg-white text-channeliq-blue font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
                Join Waitlist
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
