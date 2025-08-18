import React, { useState, useRef, useEffect } from "react";
import { Play, Volume2, VolumeX, Maximize2, Minimize2 } from "lucide-react";
import SkipBackIcon from "@/assests/SkipBack.png";
import SkipForwardIcon from "@/assests/SkipForward.png";
import SkipBack1 from "@/assests/SkipBack1.png";
import { useAnalytics } from "../hooks/useAnalytics";

const TrilioVideo = "https://assets.channeliq.ai/trilio-landing/TRILIO.mp4";
const ImageShowcaseSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { trackVideoInteraction } = useAnalytics();

  // Reusable, precise 10s skip button using provided image
  const SkipButton: React.FC<{
    direction: "back" | "forward";
    onClick: () => void;
  }> = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className="relative bg-transparent hover:bg-transparent rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-300 hover:scale-110 overflow-visible"
      title={
        direction === "back"
          ? "Skip 10 seconds backward"
          : "Skip 10 seconds forward"
      }
      aria-label={
        direction === "back"
          ? "Skip back 10 seconds"
          : "Skip forward 10 seconds"
      }
    >
      <img
        src={direction === "back" ? SkipBack1 : SkipForwardIcon}
        alt={
          direction === "back"
            ? "Skip back 10 seconds"
            : "Skip forward 10 seconds"
        }
        className={`${
          direction === "back" ? "w-9 h-9" : "w-12 h-12"
        } object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]`}
      />
    </button>
  );

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      trackVideoInteraction("play", "Trilio Demo Video");
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        trackVideoInteraction("pause", "Trilio Demo Video");
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        trackVideoInteraction("play", "Trilio Demo Video");
      }
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      trackVideoInteraction(isMuted ? "unmute" : "mute", "Trilio Demo Video");
    }
  };

  const enterFullscreen = async () => {
    const el: any = playerRef.current;
    if (!el) return;
    try {
      if (el.requestFullscreen) {
        await el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) {
        await el.webkitRequestFullscreen();
      } else if (el.msRequestFullscreen) {
        await el.msRequestFullscreen();
      }
      setIsFullscreen(true);
      trackVideoInteraction("enter_fullscreen", "Trilio Demo Video");
    } catch (err) {
      // ignore
    }
  };

  const exitFullscreen = async () => {
    const d: any = document as any;
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else if (d.webkitFullscreenElement) {
        await d.webkitExitFullscreen();
      } else if (d.msFullscreenElement) {
        await d.msExitFullscreen();
      }
      setIsFullscreen(false);
      trackVideoInteraction("exit_fullscreen", "Trilio Demo Video");
    } catch (err) {
      // ignore
    }
  };

  const toggleFullscreen = () => {
    if (isFullscreen) exitFullscreen();
    else enterFullscreen();
  };

  const handleSkipBackward = () => {
    if (videoRef.current) {
      const newTime = Math.max(0, videoRef.current.currentTime - 10);
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleSkipForward = () => {
    if (videoRef.current) {
      const newTime = Math.min(
        videoRef.current.duration,
        videoRef.current.currentTime + 10
      );
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && !isDragging) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const calculateTimeFromPosition = (clientX: number) => {
    if (!progressBarRef.current || duration === 0) return 0;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    return percentage * duration;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && progressBarRef.current) {
      const newTime = calculateTimeFromPosition(e.clientX);
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleSeek(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && videoRef.current) {
      const newTime = calculateTimeFromPosition(e.clientX);
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
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
      controlsTimeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  const handleControlsMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  // Add global mouse event listeners for dragging
  React.useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging && videoRef.current && progressBarRef.current) {
        const newTime = calculateTimeFromPosition(e.clientX);
        videoRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging, duration]);

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleFsChange = () => {
      const d: any = document as any;
      const active = !!(
        document.fullscreenElement ||
        d.webkitFullscreenElement ||
        d.msFullscreenElement
      );
      setIsFullscreen(active);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    document.addEventListener("webkitfullscreenchange", handleFsChange as any);
    document.addEventListener("msfullscreenchange", handleFsChange as any);
    return () => {
      document.removeEventListener("fullscreenchange", handleFsChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFsChange as any
      );
      document.removeEventListener("msfullscreenchange", handleFsChange as any);
    };
  }, []);

  // Pause video when section is not in viewport
  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

        if (!isInViewport && isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPlaying]);

  return (
    <section
      ref={sectionRef}
      className="w-full pt-8 sm:pt-12 pb-2 sm:pb-3"
      id="showcase"
    >
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
            <div className="p-0 bg-white relative" ref={playerRef}>
              <video
                ref={videoRef}
                src={TrilioVideo}
                className="w-full h-auto"
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onClick={handleVideoClick}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleControlsMouseMove}
              />

              {/* Play Button Overlay - Only on hover when paused */}
              {!isPlaying && showControls && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                  <div className="flex items-center space-x-8 pointer-events-auto">
                    <SkipButton direction="back" onClick={handleSkipBackward} />
                    <button
                      onClick={handlePlayClick}
                      className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                    >
                      <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </button>
                    <SkipButton
                      direction="forward"
                      onClick={handleSkipForward}
                    />
                  </div>
                </div>
              )}

              {/* Skip Buttons Overlay - Only when playing and hovering */}
              {isPlaying && showControls && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="flex items-center space-x-8 pointer-events-auto">
                    <SkipButton direction="back" onClick={handleSkipBackward} />
                    <button
                      onClick={handleVideoClick}
                      className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <div className="w-6 h-6 flex items-center justify-center">
                          <div className="w-1 h-6 bg-gray-800 mx-0.5"></div>
                          <div className="w-1 h-6 bg-gray-800 mx-0.5"></div>
                        </div>
                      ) : (
                        <Play className="w-6 h-6 ml-1" fill="currentColor" />
                      )}
                    </button>
                    <SkipButton
                      direction="forward"
                      onClick={handleSkipForward}
                    />
                  </div>
                </div>
              )}

              {/* Video Controls */}
              {showControls && (
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleControlsMouseMove}
                >
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
                    <div className="flex items-center">
                      <button
                        onClick={toggleFullscreen}
                        className="hover:bg-white/20 rounded-full p-1 transition-colors"
                        title={
                          isFullscreen ? "Exit full screen" : "Full screen"
                        }
                      >
                        {isFullscreen ? (
                          <Minimize2 className="w-5 h-5" />
                        ) : (
                          <Maximize2 className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div
                    ref={progressBarRef}
                    className={`mt-2 bg-white/30 rounded-full h-2 cursor-pointer transition-all duration-200 ${
                      isDragging ? "h-3 bg-white/50" : ""
                    }`}
                    onClick={handleSeek}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                  >
                    <div
                      className="bg-white h-full rounded-full transition-all duration-100 relative"
                      style={{
                        width: `${
                          duration > 0 ? (currentTime / duration) * 100 : 0
                        }%`,
                      }}
                    >
                      {/* Draggable Handle */}
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-8 flex justify-center items-center flex-col"></div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
