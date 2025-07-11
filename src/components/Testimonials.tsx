import React, { useRef } from "react";
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
    <div
      className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
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
  return (
    <section
      className="pt-12 pb-2  relative"
      id="testimonials"
      ref={sectionRef}
    >
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span>Testimonials</span>
          </div>
        </div>

        <h2 className="text-5xl font-display font-bold mb-12 text-left">
          What brands say about Trilio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              gradient={testimonial.gradient}
              backgroundImage={testimonial.backgroundImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
