import React from 'react';
import { useTheme } from '../hooks/useTheme';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { CheckCircle2 } from 'lucide-react';
import aichatassistant from '../assets/features/AIChatAssistant.png';

const AIChatAssistant: React.FC = () => {
  const { theme } = useTheme();

  const insightPoints = [
    "Natural Language Query Support",
    "Instant Business Insights",
    "AI-Driven Recommendations",
    "Real-Time Data Access",
    "Easy Report Generation",
    "Trend Detection & Analysis",
    "No Technical Expertise Required",
    "Boosted Team Productivity",
    "Seamless Integration with Dashboards"
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <NavBar />
      <main className="container mx-auto px-4 pt-24 pb-8">
        {/* Background Glow Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-channeliq-blue/10 rounded-full -z-10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-channeliq-blue/10 rounded-full -z-10 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">AI-Powered Chat Assistant</h1>
          </div>

          {/* Hero Section with side-by-side layout */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Description Paragraph - Left Side */}
            <div className="md:w-1/2 p-8">
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              An AI-Powered Chat Assistant transforms how teams interact with their data by enabling instant access to business insights through natural language queries. Users can simply ask questions—like sales performance, ad efficiency, or inventory status—and receive clear, contextual answers along with AI-driven recommendations. This intelligent assistant breaks down complex data into easily digestible insights, empowering faster decision-making without the need for deep technical expertise. Whether it's generating reports, uncovering trends, or suggesting optimizations, the AI assistant acts as a real-time analyst, streamlining workflows and boosting productivity across departments.</p>
              </div>
              
            {/* Image Section - Right Side */}
            <div className="md:w-1/2 h-[500px]">
              <img 
                src={aichatassistant}
                alt="AIChatAssistant"
                className="w-full h-full rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Integration Points */}
          <div className={`p-8 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-900/70 backdrop-blur-sm border border-gray-800' : 'bg-gray-50'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insightPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-channeliq-blue flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIChatAssistant; 





