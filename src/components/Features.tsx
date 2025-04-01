import React from 'react';
import { 
  ArrowRightLeft, 
  BrainCircuit, 
  BarChart3, 
  MessageSquare, 
  ClipboardCheck, 
  BadgeCheck 
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Omnichannel Data Integration",
      description: "Seamlessly connect and consolidate data from Amazon, Shopify, Walmart, Google Ads, and Facebook Ads into a single dashboard.",
      icon: <ArrowRightLeft className="h-10 w-10 text-channeliq-blue feature-icon transition-all duration-300" />,
      delay: "0"
    },
    {
      title: "AI-Driven Insights & Recommendations",
      description: "Get real-time performance analysis, trend forecasting, and actionable recommendations to optimize sales, advertising, and inventory.",
      icon: <BrainCircuit className="h-10 w-10 text-channeliq-blue feature-icon transition-all duration-300" />,
      delay: "100"
    },
    {
      title: "Automated Reporting & Custom Dashboards",
      description: "Build tailored reports and schedule automated updates via email or Slack for effortless performance tracking.",
      icon: <BarChart3 className="h-10 w-10 text-channeliq-blue feature-icon transition-all duration-300" />,
      delay: "200"
    },
    {
      title: "AI-Powered Chat Assistant",
      description: "Ask business-related questions, generate insights, and receive AI-driven recommendations instantly.",
      icon: <MessageSquare className="h-10 w-10 text-channeliq-blue feature-icon transition-all duration-300" />,
      delay: "300"
    },
    {
      title: "PDP Compliance & Content Optimization",
      description: "Automatically detect and fix non-compliance issues in product listings to maximize visibility and conversion rates.",
      icon: <ClipboardCheck className="h-10 w-10 text-channeliq-blue feature-icon transition-all duration-300" />,
      delay: "400"
    },
    {
      title: "Business Health Scorecard",
      description: "AI-generated performance score with intuitive visual indicators to assess sales growth, ad ROI, and inventory efficiency.",
      icon: <BadgeCheck className="h-10 w-10 text-channeliq-blue feature-icon transition-all duration-300" />,
      delay: "500"
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-channeliq-blue/5 rounded-full -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-channeliq-indigo/5 rounded-full -z-10 blur-3xl"></div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-block bg-channeliq-blue/10 px-3 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-channeliq-blue">Powerful Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AI-Driven E-Commerce Intelligence
          </h2>
          <p className="text-lg text-foreground/80">
            Channel IQ combines cutting-edge AI technology with deep e-commerce expertise to deliver actionable insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card interactive-element opacity-0 animate-fade-in-up transition-all duration-300"
              style={{ animationDelay: `${parseInt(feature.delay) + 200}ms` }}
            >
              <div className="mb-6 p-3 bg-channeliq-blue/10 inline-block rounded-xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-channeliq-blue transition-colors">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
          <a href="#waitlist" className="btn-primary interactive-element">
            Join Beta Waitlist
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
