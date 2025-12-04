import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/NavBar";
import LegacyFooter from "@/components/LegacyFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Lightbulb, Users, Shield, Zap } from "lucide-react";
import RouteCanonical from "@/components/RouteCanonical";

const LifeAtTrilio = () => {
  const navigate = useNavigate();
  const values = [
    {
      title: "Ownership Mindset",
      description:
        "We take full responsibility for our work and treat every project like it's our own business.",
      icon: Target,
    },
    {
      title: "Customer Obsession",
      description:
        "Every decision we make starts with understanding and serving our customers better.",
      icon: Heart,
    },
    {
      title: "Curiosity & Continuous Learning",
      description:
        "We never stop questioning, learning, and pushing boundaries to grow personally and professionally.",
      icon: Lightbulb,
    },
    {
      title: "Collaborative Innovation",
      description:
        "The best ideas come from diverse perspectives working together toward common goals.",
      icon: Users,
    },
    {
      title: "Transparent Communication",
      description:
        "We communicate openly, honestly, and with respect for everyone's contributions.",
      icon: Shield,
    },
  ];

  const testimonials = [
    {
      quote:
        "The pace of innovation here is incredible. Every day I'm working on problems that directly impact thousands of merchants.",
      name: "Alex Chen",
      role: "Senior Engineer",
      image: "https://assets.channeliq.ai/trilio-landing/Hero_Images/Remove background project (4).webp",
    },
    {
      quote:
        "Trilio gave me the autonomy to build products that users genuinely love. The customer feedback loop is so tight here.",
      name: "Maria Garcia",
      role: "Product Manager",
      image: "https://assets.channeliq.ai/trilio-landing/Hero_Images/Remove background project (4).webp",
    },
    {
      quote:
        "I've never worked at a company where leadership is so accessible and genuinely cares about every team member's growth.",
      name: "James Wilson",
      role: "Sales Manager",
      image: "https://assets.channeliq.ai/trilio-landing/Hero_Images/Remove background project (4).webp",
    },
  ];

  const benefits = [
    {
      title: "Health Insurance",
      description: "Comprehensive medical, dental, and vision coverage",
      icon: "🏥",
    },
    {
      title: "Remote-First Flexibility",
      description: "Work from anywhere with flexible hours",
      icon: "🌍",
    },
    {
      title: "Wellness Days",
      description: "Additional mental health and wellness time off",
      icon: "🧘",
    },
    {
      title: "Equity Options",
      description: "Share in Trilio's success with stock options",
      icon: "📈",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <RouteCanonical path="/about/careers/life-at-trilio" />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Life at
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                Trilio
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We work hard, solve tough problems, and have fun doing it. Join a
              team that's passionate about revolutionizing commerce
              intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              What Our Team Says
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.name}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl text-blue-500 mb-4">"</div>
                    <blockquote className="text-gray-600 mb-6 italic">
                      {testimonial.quote}
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                         loading="lazy" decoding="async" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Gallery Placeholder */}
      <section className="pt-0 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Team in Action
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                <img
                  src="https://assets.channeliq.ai/trilio-landing/team-members/Abhishek+(2).jpg"
                  alt="Abhishek"
                  className="w-full h-full object-cover"
                 loading="lazy" decoding="async" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                <img
                  src="https://assets.channeliq.ai/trilio-landing/team-members/Anmol.JPG"
                  alt="Anmol"
                  className="w-full h-full object-cover"
                 loading="lazy" decoding="async" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                <img
                  src="https://assets.channeliq.ai/trilio-landing/team-members/Amey.jpg"
                  alt="Amey"
                  className="w-full h-full object-cover"
                 loading="lazy" decoding="async" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                <img
                  src="https://assets.channeliq.ai/trilio-landing/team-members/Vishal11.jpg"
                  alt="vishal"
                  className="w-full h-full object-cover"
                 loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              Benefits & Perks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={benefit.title}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discover open positions and become part of our mission to
            revolutionize commerce intelligence.
          </p>
          <Button 
            onClick={() => navigate("/careers/open-positions")}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            View Open Positions
          </Button>
        </div>
      </section>

      <LegacyFooter />
    </div>
  );
};

export default LifeAtTrilio;
