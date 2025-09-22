import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import darkSpaceAnimation from "@/assests/dark-space-optimized.json";

interface SpaceBackgroundAnimationProps {
  className?: string;
}

const SpaceBackgroundAnimation: React.FC<SpaceBackgroundAnimationProps> = ({
  className = "",
}) => {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Load animation after a short delay to improve initial page load
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden ${className}`}
    >
      {shouldLoad ? (
        <Lottie
          animationData={darkSpaceAnimation}
          loop={true}
          autoplay={true}
          style={{
            width: "100vw",
            height: "100vh",
            opacity: 0.15, // Make it very subtle so it doesn't interfere with content
            filter: "blur(0.5px)", // Slight blur for better background effect
            objectFit: "cover",
          }}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        />
      ) : (
        <div 
          className="w-full h-full bg-gradient-to-br from-gray-900 to-black"
          style={{ opacity: 0.15 }}
        />
      )}
    </div>
  );
};

export default SpaceBackgroundAnimation;
