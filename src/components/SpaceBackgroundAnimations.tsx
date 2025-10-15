import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";

interface SpaceBackgroundAnimationProps {
  className?: string;
}

const SpaceBackgroundAnimation: React.FC<SpaceBackgroundAnimationProps> = ({
  className = "",
}) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch animation dynamically instead of bundling it
    fetch("/dark-space1.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Failed to load animation:", error));
  }, []);

  // Don't render until animation is loaded
  if (!animationData) return null;

  return (
    <div
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden ${className}`}
    >
      <Lottie
        animationData={animationData}
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
    </div>
  );
};

export default SpaceBackgroundAnimation;
