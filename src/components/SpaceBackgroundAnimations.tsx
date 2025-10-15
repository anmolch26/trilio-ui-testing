import React from "react";
import Lottie from "lottie-react";
import darkSpaceAnimation from "@/assests/dark-space1.json";

interface SpaceBackgroundAnimationProps {
  className?: string;
}

const SpaceBackgroundAnimation: React.FC<SpaceBackgroundAnimationProps> = ({
  className = "",
}) => {

  return (
    <div
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden ${className}`}
    >
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
    </div>
  );
};

export default SpaceBackgroundAnimation;
