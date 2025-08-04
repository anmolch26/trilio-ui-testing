import React, { useState, useRef } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useAnalytics } from "../hooks/useAnalytics";

const TrilioVideo = "https://assets.channeliq.ai/trilio-landing/Trilio.ai_+Your+AI-Powered+eCommerce+Intelligence+Engine-8_4_2025%2C+2_18%E2%80%AFAM.mp4";

const ImageShowcaseSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { trackVideoInteraction } = useAnalytics();

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      trackVideoInteraction('play', 'Trilio Demo Video');
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        trackVideoInteraction('pause', 'Trilio Demo Video');
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        trackVideoInteraction('play', 'Trilio Demo Video');
      }
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      trackVideoInteraction(isMuted ? 'unmute' : 'mute', 'Trilio Demo Video');
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = clickX / rect.width;
      const newTime = percentage * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleMouseEnter = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 1000);
  };

  return (
    <section className="w-full pt-8 sm:pt-12 pb-2 sm:pb-3" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-3 sm:mb-4 bg-gradient-to-r from-white via-teal-100 to-teal-200 bg-clip-text text-transparent drop-shadow-lg">
            Unified Ecommerce Intelligence
          </h2>
          <p className="text-base sm:text-lg text-gray-100 drop-shadow-md bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent font-medium">
            Get a unified view of your ecommerce performance with real-time
            insights, automated reports, and AI-powered recommendations that
            drive growth.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 flex justify-center">
            <div className="flex items-center text-sm text-gray-100">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Real-time ROAS tracking
            </div>
            <div className="flex items-center text-sm text-gray-100">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Multi-channel analytics
            </div>
            <div className="flex items-center text-sm text-gray-100">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              AI-powered insights
            </div>
          </div>
        </div>

        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200/50 bg-gradient-to-br from-white to-gray-50/80">
            <div className="p-0 bg-white relative">
              <video
                ref={videoRef}
                src={TrilioVideo}
                className="w-full h-auto"
                loop
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onClick={handleVideoClick}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                  <button
                    onClick={handlePlayClick}
                    className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  >
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </button>
                </div>
              )}

              {/* Video Controls */}
              {showControls && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={handleMuteToggle}
                        className="hover:bg-white/20 rounded-full p-1 transition-colors"
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5" />
                        ) : (
                          <Volume2 className="w-5 h-5" />
                        )}
                      </button>
                      <span className="text-sm font-medium">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div
                    className="mt-2 bg-white/30 rounded-full h-1 cursor-pointer"
                    onClick={handleSeek}
                  >
                    <div
                      className="bg-white h-1 rounded-full transition-all duration-100"
                      style={{
                        width: `${
                          duration > 0 ? (currentTime / duration) * 100 : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-8 flex justify-center items-center flex-col">
          
        
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
