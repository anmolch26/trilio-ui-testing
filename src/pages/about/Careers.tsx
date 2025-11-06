import React, { useState } from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageLayout from "@/components/theme/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Users,
  Gift,
  GraduationCap,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const Careers = () => {
  const [expandedDepartment, setExpandedDepartment] = useState<string | null>(
    "Engineering"
  );

  const departments = {
    Engineering: [
      {
        title: "Senior Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
      },
      {
        title: "Data Engineer",
        location: "San Francisco, CA",
        type: "Full-time",
      },
      { title: "ML Engineer", location: "Remote", type: "Full-time" },
      { title: "DevOps Engineer", location: "New York, NY", type: "Full-time" },
    ],
    Product: [
      {
        title: "Senior Product Manager",
        location: "San Francisco, CA",
        type: "Full-time",
      },
      { title: "UX Designer", location: "Remote", type: "Full-time" },
      {
        title: "Product Marketing Manager",
        location: "Austin, TX",
        type: "Full-time",
      },
    ],
    Sales: [
      {
        title: "Account Executive",
        location: "New York, NY",
        type: "Full-time",
      },
      {
        title: "Sales Development Representative",
        location: "Remote",
        type: "Full-time",
      },
      {
        title: "Customer Success Manager",
        location: "Chicago, IL",
        type: "Full-time",
      },
    ],
    Marketing: [
      {
        title: "Content Marketing Manager",
        location: "Remote",
        type: "Full-time",
      },
      {
        title: "Growth Marketing Specialist",
        location: "San Francisco, CA",
        type: "Full-time",
      },
    ],
  };

  const benefits = [
    {
      title: "Benefits & Health",
      description:
        "Comprehensive health, dental, and vision insurance for you and your family",
      icon: Users,
    },
    {
      title: "Work Culture",
      description:
        "Flexible remote work, unlimited PTO, and quarterly team retreats",
      icon: Gift,
    },
    {
      title: "Perks",
      description:
        "Home office stipend, gym membership, and catered meals in office",
      icon: GraduationCap,
    },
    {
      title: "Learning & Development",
      description:
        "$2000 annual learning budget and conference attendance support",
      icon: GraduationCap,
    },
  ];

  const testimonials = [
    {
      quote:
        "The pace of innovation here is incredible. Every day I'm working on problems that directly impact thousands of merchants.",
      name: "Alex Chen",
      role: "Senior Engineer",
      image: "/lovable-uploads/a629bbe0-8e90-4b25-a313-21449a7292cd.jpg",
    },
    {
      quote:
        "Trilio gave me the autonomy to build products that users genuinely love. The customer feedback loop is so tight here.",
      name: "Maria Garcia",
      role: "Product Manager",
      image: "/lovable-uploads/5ec4610f-3977-4d38-bfb3-389cf824ed85.jpg",
    },
    {
      quote:
        "I've never worked at a company where leadership is so accessible and genuinely cares about every team member's growth.",
      name: "James Wilson",
      role: "Sales Manager",
      image: "/lovable-uploads/a629bbe0-8e90-4b25-a313-21449a7292cd.jpg",
    },
  ];

  const toggleDepartment = (dept: string) => {
    setExpandedDepartment(expandedDepartment === dept ? null : dept);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Build with Us
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                at Trilio
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our mission to revolutionize eCommerce BI and help millions
              of merchants make smarter, data-driven decisions every day.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Open Positions
            </h2>
            <div className="space-y-4">
              {Object.entries(departments).map(([dept, positions]) => (
                <Card key={dept} className="overflow-hidden">
                  <button
                    onClick={() => toggleDepartment(dept)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl font-semibold">{dept}</h3>
                      <Badge variant="secondary">
                        {positions.length} roles
                      </Badge>
                    </div>
                    {expandedDepartment === dept ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </button>
                  {expandedDepartment === dept && (
                    <CardContent className="px-6 pb-6 pt-0 border-t bg-gray-50/50">
                      <div className="space-y-4">
                        {positions.map((position, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-white rounded-lg border"
                          >
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {position.title}
                              </h4>
                              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {position.location}
                                </span>
                                <Badge variant="outline">{position.type}</Badge>
                              </div>
                            </div>
                            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                              Apply
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Life at Trilio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Life at Trilio
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={benefit.title}
                  className="text-center group hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">
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

      {/* Employee Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Team Says
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.name}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <blockquote className="text-gray-600 mb-6 italic">
                      "{testimonial.quote}"
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
                        <p className="font-semibold">{testimonial.name}</p>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Don't See the Perfect Role?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We're always interested in connecting with talented individuals.
            Send us your resume and let's start a conversation.
          </p>
          <a href="mailto:careers@trilio.ai">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold">
              Submit Your Resume
            </Button>
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
