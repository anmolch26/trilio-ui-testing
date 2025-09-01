import React, { useRef, useEffect } from "react";
interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}
const testimonials: TestimonialProps[] = [
  {
    content:
      "Trilio transformed our ad spend analysis. We now see 3x revenue growth with clear ROAS insights across all channels. The unified dashboard saves us hours every day.",
    author: "",
    role: "CMO, FastGrow Brands",
    gradient: "from-blue-700 via-indigo-800 to-purple-900",
    backgroundImage: "/background-section1.png",
  },
  {
    content:
      "Before Trilio, our data was scattered across 12 different platforms. Now we have one source of truth that shows exactly where to invest our marketing dollars.",
    author: "",
    role: "VP of Marketing, ScaleUp Co",
    gradient: "from-indigo-900 via-purple-800 to-orange-500",
    backgroundImage: "/background-section2.png",
  },
  {
    content:
      "The AI insights helped us identify our most profitable customer segments. We've increased our retention rate by 40% and doubled our LTV in just 3 months.",
    author: "",
    role: "Head of Analytics, TechCommerce",
    gradient: "from-purple-800 via-pink-700 to-red-500",
    backgroundImage: "/background-section2.png",
  },
  {
    content:
      "As a mid-size business, we never thought advanced analytics would be accessible to us. Trilio changed that equation entirely with its easy setup and powerful insights.",
    author: "",
    role: "CEO, GrowthMart",
    gradient: "from-orange-600 via-red-500 to-purple-600",
    backgroundImage: "/background-section1.png",
  },
];
const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png",
}: TestimonialProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-full flex flex-col justify-between text-white relative overflow-hidden border border-white/20">
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>
  );
};
const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Add custom CSS for hiding scrollbars
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-12 pb-2 relative" id="testimonials" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span>Testimonials</span>
          </div>
        </div>

        <h2 className="text-5xl font-display font-bold mb-12 text-left">
          What brands say about Trilio
        </h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-10 bg-black/20 backdrop-blur-sm border border-white/30 rounded-full p-3 hover:bg-black/40 hover:border-white/50 transition-all duration-300 group shadow-lg hidden md:block"
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-10 bg-black/20 backdrop-blur-sm border border-white/30 rounded-full p-3 hover:bg-black/40 hover:border-white/50 transition-all duration-300 group shadow-lg hidden md:block"
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Horizontal Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 pl-8 pr-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-96 lg:w-[28rem]"
              >
                <TestimonialCard
                  content={testimonial.content}
                  author={testimonial.author}
                  role={testimonial.role}
                  gradient={testimonial.gradient}
                  backgroundImage={testimonial.backgroundImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
