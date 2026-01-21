import React, { useState, useEffect } from "react";
import {
  Send,
  Plus,
  BarChart3,
  Image as ImageIcon,
  FileText,
  Mic,
  Paperclip,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Eye,
  Target,
} from "lucide-react";
import Lottie from "lottie-react";
import siriAnimation from "@/assests/Lottie/Siri_Animation_v3.json";

interface AIAssistantInterfaceProps {
  activeView: "dashboard" | "wingman";
}

const AIAssistantInterface: React.FC<AIAssistantInterfaceProps> = ({
  activeView,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [showReply, setShowReply] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState("");
  const [hoveredDataPoint, setHoveredDataPoint] = useState<number | null>(null);

  // Chart data
  const chartData = [
    { date: "Dec 29", previousPeriod: 2.5, actual: 5.0, target: 7.5, x: 0 },
    { date: "Dec 31", previousPeriod: 3.8, actual: 6.5, target: 9.5, x: 100 },
    { date: "Jan 2", previousPeriod: 5.2, actual: 3.0, target: 0, x: 200 },
    { date: "Jan 4", previousPeriod: 5.5, actual: 1.8, target: 0, x: 300 },
  ];

  // Add custom CSS for glowing animation
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes glowPulse {
        0%, 100% {
          box-shadow: 0 0 25px rgba(96, 132, 255, 0.4), 0 0 50px rgba(96, 132, 255, 0.3), 0 0 75px rgba(96, 132, 255, 0.2), inset 0 0 10px rgba(96, 132, 255, 0.1), inset 0 2px 0 rgba(255, 255, 255, 0.2);
        }
        50% {
          box-shadow: 0 0 35px rgba(96, 132, 255, 0.5), 0 0 70px rgba(96, 132, 255, 0.4), 0 0 105px rgba(96, 132, 255, 0.3), inset 0 0 15px rgba(96, 132, 255, 0.15), inset 0 2px 0 rgba(255, 255, 255, 0.25);
        }
      }
      
      .glow-animation {
        animation: glowPulse 3s ease-in-out infinite;
      }
      
      .glow-animation:hover {
        animation: none;
        box-shadow: 0 0 40px rgba(96, 132, 255, 0.6), 0 0 80px rgba(96, 132, 255, 0.5), 0 0 120px rgba(96, 132, 255, 0.4), inset 0 0 20px rgba(96, 132, 255, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.3);
        border-color: rgba(96, 132, 255, 0.8);
        transition: all 0.3s ease;
      }
      
      .glow-animation:focus {
        animation: none;
        box-shadow: 0 0 50px rgba(96, 132, 255, 0.7), 0 0 100px rgba(96, 132, 255, 0.6), 0 0 150px rgba(96, 132, 255, 0.5), inset 0 0 25px rgba(96, 132, 255, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.4);
        border-color: rgba(96, 132, 255, 1);
        transition: all 0.3s ease;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const sentences = [
    "Message Wingman...",
    "Ask about your sales data...",
    "Get insights on ad performance...",
    "Check inventory status...",
  ];

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];

    if (!isDeleting) {
      if (currentText.length < currentSentence.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentSentence.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
      }
    }
  }, [currentText, currentSentenceIndex, isDeleting, sentences]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userMessage.trim()) {
      setSubmittedMessage(userMessage);
      setShowReply(true);
      setUserMessage("");

      // Hide reply after 5 seconds
      setTimeout(() => {
        setShowReply(false);
        setSubmittedMessage("");
      }, 5000);
    }
  };

  const handleSendClick = () => {
    if (userMessage.trim()) {
      setSubmittedMessage(userMessage);
      setShowReply(true);
      setUserMessage("");

      // Hide reply after 5 seconds
      setTimeout(() => {
        setShowReply(false);
        setSubmittedMessage("");
      }, 5000);
    }
  };

  return (
    <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200/10 w-full max-w-4xl mx-auto">
      {/* Background Color */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(270deg, #2B4780 0%, #284175 20%, #20315B 40%, #1C2541 60%, #191E37 80%, #181D35 100%)",
          }}
        />
      </div>

      {/* Dashboard View */}
      {activeView === "dashboard" && (
        <div className="relative z-10 px-8 pb-5 pt-2 backdrop-blur-sm min-h-[400px]">
          {/* Dashboard Header */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <h2 className="text-xl font-semibold text-white">
              Trilio Dashboard
            </h2>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
            {/* Total Sales */}
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
              <p className="text-gray-400 text-xs mb-1">Total Sales</p>
              <h3 className="text-xl font-bold text-white mb-1">$27.52K</h3>
              <div className="flex items-center gap-1 text-teal-400 text-xs">
                <TrendingUp size={12} />
                <span>15.0%</span>
              </div>
            </div>

            {/* Ad Spend */}
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
              <p className="text-gray-400 text-xs mb-1">Ad Spend</p>
              <h3 className="text-xl font-bold text-white mb-1">$13.05K</h3>
              <div className="flex items-center gap-1 text-red-400 text-xs">
                <TrendingDown size={12} />
                <span>13.7%</span>
              </div>
            </div>

            {/* Units Sold */}
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
              <p className="text-gray-400 text-xs mb-1">Units Sold</p>
              <h3 className="text-xl font-bold text-white mb-1">3.38K</h3>
              <div className="flex items-center gap-1 text-teal-400 text-xs">
                <TrendingUp size={12} />
                <span>3.78K</span>
              </div>
            </div>

            {/* ROAS */}
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
              <p className="text-gray-400 text-xs mb-1">ROAS</p>
              <h3 className="text-xl font-bold text-white mb-1">1.54x</h3>
              <div className="flex items-center gap-1 text-red-400 text-xs">
                <TrendingDown size={12} />
                <span>4.6%</span>
              </div>
            </div>
          </div>

          {/* Single Chart Section - Interactive */}
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-5 border border-gray-700/30">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-medium text-sm">
                Total Sales Trend
              </h4>
              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span className="text-gray-400">Previous Period</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-gray-400">Actual</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                  <span className="text-gray-400">Target</span>
                </div>
              </div>
            </div>

            {/* Interactive Line Chart */}
            <div className="relative h-32">
              <svg
                className="w-full h-full"
                viewBox="0 0 300 100"
                preserveAspectRatio="none"
              >
                {/* Grid lines */}
                <line
                  x1="0"
                  y1="20"
                  x2="300"
                  y2="20"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="40"
                  x2="300"
                  y2="40"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="60"
                  x2="300"
                  y2="60"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="80"
                  x2="300"
                  y2="80"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1"
                />

                {/* Teal line (Target) */}
                <path
                  d="M 0 25 L 100 10 L 200 100 L 300 100"
                  fill="none"
                  stroke="rgba(20, 184, 166, 0.8)"
                  strokeWidth="1.5"
                />

                {/* Orange line (Previous Period) */}
                <path
                  d="M 0 85 L 100 75 L 200 55 L 300 58"
                  fill="none"
                  stroke="rgba(251, 146, 60, 0.8)"
                  strokeWidth="1.5"
                />

                {/* Blue line (Actual) */}
                <path
                  d="M 0 60 L 100 45 L 200 75 L 300 88"
                  fill="none"
                  stroke="rgba(96, 165, 250, 0.8)"
                  strokeWidth="1.5"
                />

                {/* Interactive data points */}
                {chartData.map((point, index) => {
                  // Calculate Y positions based on the actual line paths
                  const targetYPositions = [25, 10, 100, 100];
                  const previousPeriodYPositions = [85, 75, 55, 58];
                  const actualYPositions = [60, 45, 75, 88];

                  const targetY = targetYPositions[index];
                  const previousPeriodY = previousPeriodYPositions[index];
                  const actualY = actualYPositions[index];
                  const isHovered = hoveredDataPoint === index;

                  return (
                    <g key={index}>
                      {/* Invisible larger hit areas for easier hovering - one for each dot */}
                      <circle
                        cx={point.x}
                        cy={targetY}
                        r="12"
                        fill="transparent"
                        style={{ cursor: "pointer" }}
                        onMouseEnter={() => setHoveredDataPoint(index)}
                        onMouseLeave={() => setHoveredDataPoint(null)}
                      />
                      <circle
                        cx={point.x}
                        cy={previousPeriodY}
                        r="12"
                        fill="transparent"
                        style={{ cursor: "pointer" }}
                        onMouseEnter={() => setHoveredDataPoint(index)}
                        onMouseLeave={() => setHoveredDataPoint(null)}
                      />
                      <circle
                        cx={point.x}
                        cy={actualY}
                        r="12"
                        fill="transparent"
                        style={{ cursor: "pointer" }}
                        onMouseEnter={() => setHoveredDataPoint(index)}
                        onMouseLeave={() => setHoveredDataPoint(null)}
                      />

                      {/* Target dot */}
                      <circle
                        cx={point.x}
                        cy={targetY}
                        r={isHovered ? "3" : "2"}
                        fill="rgba(20, 184, 166, 1)"
                        className={
                          isHovered ? "transition-all duration-200" : ""
                        }
                        style={{
                          filter: isHovered
                            ? "drop-shadow(0 0 6px rgba(20, 184, 166, 0.8))"
                            : "none",
                          pointerEvents: "none",
                        }}
                      />

                      {/* Previous Period dot */}
                      <circle
                        cx={point.x}
                        cy={previousPeriodY}
                        r={isHovered ? "3" : "2"}
                        fill="rgba(251, 146, 60, 1)"
                        className={
                          isHovered ? "transition-all duration-200" : ""
                        }
                        style={{
                          filter: isHovered
                            ? "drop-shadow(0 0 6px rgba(251, 146, 60, 0.8))"
                            : "none",
                          pointerEvents: "none",
                        }}
                      />

                      {/* Actual dot */}
                      <circle
                        cx={point.x}
                        cy={actualY}
                        r={isHovered ? "3" : "2"}
                        fill="rgba(96, 165, 250, 1)"
                        className={
                          isHovered ? "transition-all duration-200" : ""
                        }
                        style={{
                          filter: isHovered
                            ? "drop-shadow(0 0 6px rgba(96, 165, 250, 0.8))"
                            : "none",
                          pointerEvents: "none",
                        }}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Tooltip */}
              {hoveredDataPoint !== null && (
                <div
                  className="absolute bg-white rounded-lg p-4 shadow-2xl pointer-events-none transition-all duration-200 border border-gray-200"
                  style={{
                    left: `${(hoveredDataPoint / 3) * 100}%`,
                    top: "-140px",
                    transform:
                      hoveredDataPoint === 0
                        ? "translateX(0)"
                        : hoveredDataPoint === 3
                        ? "translateX(-100%)"
                        : "translateX(-50%)",
                    minWidth: "220px",
                  }}
                >
                  {/* Current Section */}
                  <div className="mb-3">
                    <div className="text-gray-900 font-semibold text-sm mb-2">
                      Current: {chartData[hoveredDataPoint].date}, 2025
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
                          <span className="text-gray-700 text-sm">Actual:</span>
                        </div>
                        <span className="text-gray-900 font-bold text-sm">
                          ${chartData[hoveredDataPoint].actual.toFixed(2)}K
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-teal-500"></div>
                          <span className="text-gray-700 text-sm">Target:</span>
                        </div>
                        <span className="text-gray-900 font-bold text-sm">
                          ${chartData[hoveredDataPoint].target.toFixed(2)}K
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Previous Section */}
                  <div className="pt-3 border-t border-gray-200">
                    <div className="text-gray-900 font-semibold text-sm mb-2">
                      Previous: Dec 24, 2025
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-orange-400"></div>
                        <span className="text-gray-700 text-sm">
                          Previous Period:
                        </span>
                      </div>
                      <span className="text-gray-900 font-bold text-sm">
                        ${chartData[hoveredDataPoint].previousPeriod.toFixed(2)}
                        K
                      </span>
                    </div>
                  </div>

                  {/* Tooltip arrow */}
                  <div className="absolute left-1/2 -bottom-1.5 w-3 h-3 bg-white border-r border-b border-gray-200 transform rotate-45 -translate-x-1/2"></div>
                </div>
              )}
            </div>

            <div className="flex justify-between mt-3 text-xs text-gray-500">
              <span>Dec 29</span>
              <span>Dec 31</span>
              <span>Jan 2</span>
              <span>Jan 4</span>
            </div>
          </div>
        </div>
      )}

      {/* AI Wingman View */}
      {activeView === "wingman" && (
        <div className="relative z-10 p-8 backdrop-blur-sm min-h-[400px] flex flex-col">
          {/* Wingman Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center">
              <Lottie
                animationData={siriAnimation}
                loop={true}
                autoplay={true}
                style={{ width: "64px", height: "64px" }}
              />
            </div>
          </div>

          {/* Main Greeting */}
          <div className="text-center mb-4">
            <h2 className="text-2xl font-medium text-white mb-2">
              Chat with Wingman
            </h2>
            <p className="text-gray-300 text-sm mt-4">
              Whether you need insights from your ecommerce data or want to
              optimize your ad performance, just give me a command
            </p>
          </div>

          {/* Chat Messages Area */}
          {showReply && (
            <div className="mb-4 space-y-3 flex-grow overflow-y-auto max-h-[200px]">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-blue-600 rounded-2xl px-4 py-2 max-w-[80%]">
                  <p className="text-white text-sm">{submittedMessage}</p>
                </div>
              </div>

              {/* Wingman Reply */}
              <div className="flex justify-start">
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl px-4 py-2 max-w-[80%] border border-gray-600/30">
                  <p className="text-white text-sm">
                    Your data just got a wingman. Let's turn numbers into
                    growth! 🚀
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Message Input Area */}
          <div className="mt-auto">
            <form onSubmit={handleSubmit}>
              <div className="relative group">
                <input
                  type="text"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  placeholder={currentText}
                  className="w-full bg-transparent backdrop-blur-sm rounded-2xl px-4 py-3 pr-32 text-white placeholder-gray-400 focus:outline-none transition-all duration-500 focus:ring-2 focus:ring-blue-400/30 glow-animation"
                  style={{
                    border: "2px solid rgba(96, 132, 255, 0.5)",
                  }}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <Mic size={16} />
                  </button>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <Paperclip size={16} />
                  </button>
                  <button
                    type="submit"
                    onClick={handleSendClick}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Suggested Prompts */}
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              <button className="bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 text-gray-300 text-[8px] hover:bg-gray-800/90 transition-colors border border-gray-600/30 shadow-sm whitespace-nowrap">
                Sales Analytics
              </button>
              <button className="bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 text-gray-300 text-[8px] hover:bg-gray-800/90 transition-colors border border-gray-600/30 shadow-sm whitespace-nowrap">
                Ad Performance
              </button>
              <button className="bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 text-gray-300 text-[8px] hover:bg-gray-800/90 transition-colors border border-gray-600/30 shadow-sm whitespace-nowrap">
                Inventory Status
              </button>
              <button className="bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 text-gray-300 text-[8px] hover:bg-gray-800/90 transition-colors border border-gray-600/30 shadow-sm whitespace-nowrap">
                Demand Forecasting
              </button>
              <button className="bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 text-gray-300 text-[8px] hover:bg-gray-800/90 transition-colors border border-gray-600/30 shadow-sm whitespace-nowrap">
                Product Insights
              </button>
              <button className="bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 text-gray-300 text-[8px] hover:bg-gray-800/90 transition-colors border border-gray-600/30 shadow-sm whitespace-nowrap">
                Custom Reports
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistantInterface;
