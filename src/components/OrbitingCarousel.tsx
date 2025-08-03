import React from "react";
import { useNavigate } from "react-router-dom";

interface OrbitingImage {
  id: number;
  src: string;
  alt: string;
}

interface OrbitingCarouselProps {
  images: OrbitingImage[];
  title: string;
  description: string;
  buttonText?: string;
}

const OrbitingCarousel: React.FC<OrbitingCarouselProps> = ({
  images,
  title,
  description,
  buttonText = "Book an Appointment",
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/solutions/data-integrations");
  };

  return (
    <div className="relative w-full h-[800px] flex items-center justify-center overflow-hidden">
      {/* Central Content */}
      <div
        className="relative z-20 text-center"
        style={{ marginTop: "-400px" }}
      >
        <div className="mb-4 h-[500px]">
          <button
            className="text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2 mx-auto"
            style={{ backgroundColor: "#01b5af" }}
          >
            <div className="w-3 h-3  bg-white rounded-full"></div>
            {/* <span>Features</span> */}
          </button>
        </div>

        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-300 text-lg mb-6 max-w-md mx-auto">
          {description}
        </p>

        <button
          onClick={handleButtonClick}
          className="text-white px-8 py-3 rounded-full text-lg font-medium transition-colors cursor-pointer hover:opacity-90 active:scale-95"
          style={{ backgroundColor: "#01b5af" }}
        >
          {buttonText}
        </button>
      </div>

      {/* Orbiting Images */}
      <div className="absolute h-[1300px] inset-0 flex items-center justify-center">
        <div className="relative w-[1200px] h-[1000px] flex items-center justify-center">
          {images.map((image, index) => {
            const angle = (index * 180) / images.length; // Changed to use total images count
            const delay = (index * -96) / images.length; // Much larger delay for more spacing

            return (
              <div
                key={image.id}
                className="absolute w-32 h-32 overflow-hidden animate-semi-orbit"
                style={{
                  animationDelay: `${delay}s`,
                  animationDuration: "36s",
                  animationIterationCount: "infinite",
                  animationTimingFunction: "linear",
                  transform: `rotate(${angle}deg) translateX(500px) rotate(-${angle}deg)`,
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes semi-orbit {
          0% {
            transform: rotate(180deg) translateX(500px) rotate(-180deg);
          }
          100% {
            transform: rotate(360deg) translateX(500px) rotate(-360deg);
          }
        }
        
        .animate-semi-orbit {
          animation: semi-orbit 36s linear infinite;
        }
        
        /* Much larger delays for more spacing */
        .animate-semi-orbit:nth-child(1) { animation-delay: 0s; }
        .animate-semi-orbit:nth-child(2) { animation-delay: -48s; }
        .animate-semi-orbit:nth-child(3) { animation-delay: -96s; }
        .animate-semi-orbit:nth-child(4) { animation-delay: -144s; }
        .animate-semi-orbit:nth-child(5) { animation-delay: -192s; }
        .animate-semi-orbit:nth-child(6) { animation-delay: -240s; }
        .animate-semi-orbit:nth-child(7) { animation-delay: -288s; }
        .animate-semi-orbit:nth-child(8) { animation-delay: -336s; }
        .animate-semi-orbit:nth-child(9) { animation-delay: -384s; }
        .animate-semi-orbit:nth-child(10) { animation-delay: -432s; }
        .animate-semi-orbit:nth-child(11) { animation-delay: -480s; }
        .animate-semi-orbit:nth-child(12) { animation-delay: -528s; }
      `}</style>
    </div>
  );
};

export default OrbitingCarousel;
