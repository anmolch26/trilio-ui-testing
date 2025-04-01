
import React, { useState } from 'react';
import { CheckCircle, ChevronRight, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

const WhyChannelIQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const bulletPoints = [
    {
      id: "centralized",
      title: "Centralized Data Management",
      description: "Consolidate data from all your e-commerce channels into a single, easy-to-use dashboard. Monitor sales, inventory, and marketing performance across Amazon, Shopify, and other platforms from one place."
    },
    {
      id: "ai-insights",
      title: "AI-Powered Insights",
      description: "Get real-time recommendations and predictive analytics to optimize your business strategy. Our AI analyzes patterns across platforms to identify opportunities for growth and efficiency improvements."
    },
    {
      id: "time-saving",
      title: "Time & Resource Savings",
      description: "Eliminate manual analysis and let AI handle the heavy lifting of e-commerce intelligence. Save up to 15 hours per week on reporting and gain deeper insights without hiring additional analysts."
    },
    {
      id: "cross-platform",
      title: "Cross-Platform Optimization",
      description: "Manage and optimize your presence across Amazon, Shopify, Walmart, and major ad platforms. Compare performance, identify gaps, and allocate resources efficiently with cross-channel visibility."
    },
    {
      id: "automated",
      title: "Automated Reporting & Alerts",
      description: "Set up customized dashboards and receive automated reports and alerts for key metrics. Get notified of significant changes or opportunities without constant monitoring."
    },
    {
      id: "business-health",
      title: "Business Health Scorecards",
      description: "Track your e-commerce business health with comprehensive scorecards that measure KPIs across all channels. Easily communicate performance to stakeholders with visual, easy-to-understand metrics."
    }
  ];

  return (
    <section id="why-channeliq" className="py-20 bg-gradient-to-b from-background to-muted/50 dark:from-background dark:to-muted/20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image/Illustration Side */}
          <div className="relative opacity-0 animate-fade-in-up">
            <div className="glass-card rounded-2xl overflow-hidden p-1 dark:bg-card/30 dark:backdrop-blur-md">
              <div className="relative rounded-xl overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-channeliq-blue/40 to-channeliq-indigo/40 opacity-80 mix-blend-overlay dark:mix-blend-normal dark:opacity-50"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Channel IQ Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -left-6 w-48 h-48 bg-channeliq-blue/5 dark:bg-channeliq-blue/10 rounded-full blur-xl animate-pulse-soft"></div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-channeliq-indigo/5 dark:bg-channeliq-indigo/10 rounded-full blur-xl animate-pulse-soft" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Floating stat cards */}
            <div className="absolute top-5 right-0 transform translate-x-1/4 glass-card rounded-lg p-4 shadow-lg animate-float dark:bg-card/40 dark:border-white/10" style={{ animationDelay: '0.5s' }}>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">Average ROI Increase</p>
              <p className="text-2xl font-bold text-channeliq-blue dark:text-channeliq-lightblue">+37%</p>
            </div>
            
            <div className="absolute -bottom-4 left-4 glass-card rounded-lg p-4 shadow-lg animate-float dark:bg-card/40 dark:border-white/10" style={{ animationDelay: '0s' }}>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">Time Saved Weekly</p>
              <p className="text-2xl font-bold text-channeliq-blue dark:text-channeliq-lightblue">15 hrs</p>
            </div>
          </div>
          
          {/* Content Side with Expandable Bullet Points */}
          <div className="space-y-8 opacity-0 animate-fade-in-up animate-delay-200">
            <div className="inline-block bg-channeliq-blue/10 dark:bg-channeliq-blue/20 px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-channeliq-blue dark:text-channeliq-lightblue">Why Channel IQ?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Transform Your E-Commerce Strategy with AI
            </h2>
            
            <div className="space-y-4 pt-4">
              {bulletPoints.map((point) => (
                <Collapsible 
                  key={point.id}
                  open={openItems.includes(point.id)}
                  onOpenChange={() => toggleItem(point.id)}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left hover:bg-muted/30 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-channeliq-blue dark:text-channeliq-lightblue" />
                      </div>
                      <h3 className="font-medium text-lg text-foreground">{point.title}</h3>
                    </div>
                    {openItems.includes(point.id) ? 
                      <ChevronDown className="h-5 w-5 text-channeliq-blue dark:text-channeliq-lightblue" /> : 
                      <ChevronRight className="h-5 w-5 text-channeliq-blue dark:text-channeliq-lightblue" />
                    }
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-12 pb-4 text-gray-600 dark:text-gray-300">
                    {point.description}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#waitlist" className="btn-primary dark:bg-channeliq-blue dark:text-white dark:hover:bg-channeliq-blue/90">
                Join Waitlist
              </a>
              <a href="#features" className="btn-secondary dark:text-channeliq-lightblue dark:border-channeliq-blue/30 dark:hover:bg-channeliq-blue/10">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChannelIQ;
