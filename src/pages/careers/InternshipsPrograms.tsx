import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Palette,
  TrendingUp,
  BarChart3,
  Clock,
  Users,
  Award,
} from "lucide-react";

const InternshipsPrograms = () => {
  const internshipTracks = [
    {
      title: "Engineering",
      description:
        "Build scalable products and work on real features used by thousands of customers",
      icon: Code,
      projects: [
        "API development",
        "Fronten features",
        "Data pipeline optimization",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Product",
      description:
        "Shape product strategy and design experiences that delight our users",
      icon: Palette,
      projects: ["User research", "Feature specification", "A/B test design"],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Marketing",
      description:
        "Drive growth through content, campaigns, and strategic partnerships",
      icon: TrendingUp,
      projects: [
        "Content creation",
        "Campaign analysis",
        "Social media strategy",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Data/Analytics",
      description:
        "Uncover insights from complex datasets and build intelligence tools",
      icon: BarChart3,
      projects: [
        "Dashboard creation",
        "Predictive modeling",
        "Data visualization",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  const programHighlights = [
    {
      title: "8-12 Week Programs",
      description:
        "Structured internships with clear goals and measurable outcomes",
      icon: Clock,
    },
    {
      title: "1:1 Mentorship",
      description:
        "Paired with senior team members for guidance and career development",
      icon: Users,
    },
    {
      title: "Real Project Ownership",
      description:
        "Work on meaningful projects that impact our product and customers",
      icon: Award,
    },
  ];

  const pastProjects = [
    {
      title: "ML-Powered Anomaly Detection",
      intern: "Priya S., Stanford CS",
      description:
        "Built a machine learning model to automatically detect unusual patterns in e-commerce data, now used by 500+ merchants.",
      track: "Engineering",
    },
    {
      title: "Mobile Dashboard Redesign",
      intern: "Marcus J., RISD Design",
      description:
        "Led the complete redesign of our mobile dashboard, improving user engagement by 40%.",
      track: "Product",
    },
    {
      title: "Content Strategy Framework",
      intern: "Aisha K., Northwestern",
      description:
        "Developed our content marketing playbook and created 50+ pieces of educational content.",
      track: "Marketing",
    },
  ];

  const partnerSchools = [
    "Stanford University",
    "MIT",
    "UC Berkeley",
    "Carnegie Mellon",
    "Georgia Tech",
    "University of Washington",
  ];

  const internTestimonials = [
    {
      name: "Priya S.",
      quote:
        "My internship at Trilio was incredible. I got to work on features that thousands of users interact with daily, and my mentor helped me grow both technically and professionally.",
      role: "Software Engineering Intern → Full-time SWE at Google",
      image: "/lovable-uploads/a629bbe0-8e90-4b25-a313-21449a7292cd.jpg",
    },
    {
      name: "Marcus J.",
      quote:
        "The product team gave me real ownership over user research and feature design. I learned more in 10 weeks than I did in two years of coursework.",
      role: "Product Management Intern → PM at Airbnb",
      image: "/lovable-uploads/5ec4610f-3977-4d38-bfb3-389cf824ed85.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Start Your Journey
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                With Trilio
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're building the next generation of product leaders, engineers,
              analysts, and marketers. Join our internship programs and launch
              your career in tech.
            </p>
          </div>
        </div>
      </section>

      {/* Internship Tracks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              Internship Tracks
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {internshipTracks.map((track, index) => (
                <Card
                  key={track.title}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${track.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <track.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {track.title} Track
                    </h3>
                    <p className="text-gray-600 mb-4">{track.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">
                        Example projects:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {track.projects.map((project, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs"
                          >
                            {project}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              Program Highlights
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {programHighlights.map((highlight, index) => (
                <Card
                  key={highlight.title}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              Real Projects, Real Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pastProjects.map((project, index) => (
                <Card
                  key={project.title}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">
                      {project.track}
                    </Badge>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {project.description}
                    </p>
                    <p className="text-xs font-medium text-blue-600">
                      {project.intern}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Schools */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">
              Partner Universities
            </h2>
            <p className="text-gray-600 mb-8">
              We actively recruit from top universities and welcome applications
              from all schools
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {partnerSchools.map((school, index) => (
                <div
                  key={school}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="font-medium text-gray-700">{school}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intern Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              Intern Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {internTestimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.name}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl text-blue-500 mb-4">"</div>
                    <blockquote className="text-gray-600 mb-6 italic">
                      {testimonial.quote}
                    </blockquote>
                    <div>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
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
            Ready to Launch Your Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our internship program and gain hands-on experience building
            products that impact thousands of businesses worldwide.
          </p>
          <a href="mailto:internships@trilio.ai">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
              Apply for Internships
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default InternshipsPrograms;
