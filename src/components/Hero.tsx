
import React from 'react';
import DataFlowAnimation from './DataFlowAnimation';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center pt-16 overflow-hidden">
      {/* Background with reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/90 z-0"></div>
      
      <div className="section-container relative z-10 flex-grow flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 opacity-0 animate-fade-in-up">
            {/* Small badge/chip */}
            <div className="inline-block bg-channeliq-blue/10 px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-channeliq-blue">AI-Powered E-Commerce</span>
            </div>
            
            {/* Updated Headline with improved contrast */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The AI-Powered <span className="text-gradient bg-gradient-to-r from-channeliq-blue via-channeliq-indigo to-channeliq-blue">E-Commerce Intelligence</span> Platform
            </h1>
            
            {/* Updated Subheading with better visibility */}
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
              Channel IQ helps you manage your commerce from one powerful command center. Get real-time AI insights, automate reporting, and make smarter decisions across all your sales channels.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#waitlist" className="btn-primary">
                Join Waitlist
              </a>
              <a href="#why-channeliq" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>
          
          {/* Animation Container - Right Side */}
          <div className="relative h-[400px] hidden lg:block opacity-0 animate-fade-in-up animate-delay-200">
            <DataFlowAnimation />
          </div>
        </div>
        
        {/* Trusted By Section - Empty placeholders for future brand additions */}
        <div className="mt-auto mb-16 text-center opacity-0 animate-fade-in-up animate-delay-300">
          <p className="text-sm font-medium text-foreground/70 mb-4">Trusted by</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {/* Empty placeholders for brand logos */}
            <div className="h-6 w-24 opacity-70 hover:opacity-100 transition-opacity bg-card/30 dark:bg-card/20 py-1 px-4 rounded-lg">
              <span className="text-foreground/90 text-sm font-medium"></span>
            </div>
            <div className="h-6 w-24 opacity-70 hover:opacity-100 transition-opacity bg-card/30 dark:bg-card/20 py-1 px-4 rounded-lg">
              <span className="text-foreground/90 text-sm font-medium"></span>
            </div>
            <div className="h-6 w-24 opacity-70 hover:opacity-100 transition-opacity bg-card/30 dark:bg-card/20 py-1 px-4 rounded-lg">
              <span className="text-foreground/90 text-sm font-medium"></span>
            </div>
            <div className="h-6 w-24 opacity-70 hover:opacity-100 transition-opacity bg-card/30 dark:bg-card/20 py-1 px-4 rounded-lg">
              <span className="text-foreground/90 text-sm font-medium"></span>
            </div>
            <div className="h-6 w-24 opacity-70 hover:opacity-100 transition-opacity bg-card/30 dark:bg-card/20 py-1 px-4 rounded-lg">
              <span className="text-foreground/90 text-sm font-medium"></span>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#why-channeliq" className="block">
            <svg className="w-6 h-6 text-channeliq-blue/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
