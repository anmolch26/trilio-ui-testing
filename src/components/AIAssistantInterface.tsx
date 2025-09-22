import React, { useState, useEffect } from "react";
import {
  Send,
  Plus,
  BarChart3,
  Image as ImageIcon,
  FileText,
  Mic,
  Paperclip,
} from "lucide-react";
import Lottie from "lottie-react";

const AIAssistantInterface = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [lottieData, setLottieData] = useState<any>(null);

  // Fetch Lottie animation from S3
  useEffect(() => {
    fetch("https://assets.channeliq.ai/trilio-landing/Hero_Images/Siri%20Animation.json")
      .then((response) => response.json())
      .then((data) => setLottieData(data))
      .catch((error) =>
        console.error("Error loading Lottie animation:", error)
      );
  }, []);

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

      {/* AI Assistant Interface */}
      <div className="relative z-10 p-8 backdrop-blur-sm min-h-[400px] flex flex-col">
        {/* Wingman Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center">
            {lottieData ? (
              <Lottie
                animationData={lottieData}
                loop={true}
                autoplay={true}
                style={{ width: "64px", height: "64px" }}
              />
            ) : (
              <div className="w-16 h-16 bg-gray-600 rounded-full animate-pulse" />
            )}
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

        {/* Message Input Area */}
        <div className="mt-auto">
          <div className="relative group">
            <input
              type="text"
              placeholder={currentText}
              className="w-full bg-transparent backdrop-blur-sm rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-all duration-500 focus:ring-2 focus:ring-blue-400/30 glow-animation"
              style={{
                border: "2px solid rgba(96, 132, 255, 0.5)",
              }}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <button className="text-gray-400 hover:text-gray-300">
                <Mic size={16} />
              </button>
              <button className="text-gray-400 hover:text-gray-300">
                <Paperclip size={16} />
              </button>
              <button className="text-gray-400 hover:text-gray-300">
                <Send size={16} />
              </button>
            </div>
          </div>
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
    </div>
  );
};

export default AIAssistantInterface;
