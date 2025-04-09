import React from 'react';
import { useTheme } from '../hooks/useTheme';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { CheckCircle2 } from 'lucide-react';
import automatedReporting from '../assets/features/AutomatedReporting&Custom Dashboards.png';

const AutomatedReporting: React.FC = () => {
  const { theme } = useTheme();

  const reportingPoints = [
    "Tailored, On-Demand Reports",
    "Scheduled Email or Slack Updates",
    "Real-Time Data Visualization",
    "Customizable Metrics & KPIs",
    "Centralized Performance Overview",
    "Reduced Manual Workload",
    "Consistent Team Visibility",
    "Quick Access to Actionable Insights"
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
            <h1 className="text-4xl font-bold mb-4">Automated Reporting & Custom Dashboards</h1>
          </div>

          {/* Hero Section with side-by-side layout */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Description Paragraph - Left Side */}
            <div className="md:w-1/2 p-8">
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Automated Reporting & Custom Dashboards simplify performance tracking by allowing businesses to build tailored reports and schedule automated updates delivered directly via email or Slack. These dynamic dashboards are fully customizable, enabling teams to focus on the metrics that matter most across sales, marketing, and operations. By automating the reporting process, organizations save time, reduce manual errors, and ensure stakeholders stay consistently informed with real-time insights. Whether it's a daily sales summary, weekly ad performance, or monthly inventory updates, automated reporting ensures key data is always accessible and actionable without the need for constant oversight.
              </p>
            </div>
            
            {/* Image Section - Right Side */}
            <div className="md:w-1/2 h-[400px]">
              <img 
                src={automatedReporting}
                alt="Automated Reporting and Custom Dashboards"
                className="w-full h-full rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Integration Points */}
          <div className={`p-8 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-900/70 backdrop-blur-sm border border-gray-800' : 'bg-gray-50'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reportingPoints.map((point, index) => (
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

export default AutomatedReporting;