import React, { useState } from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Filter, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import InternshipsPrograms from "./InternshipsPrograms";

const OpenPositions = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build scalable web applications with React and Node.js",
    },
    {
      id: 2,
      title: "Data Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description:
        "Design and maintain data pipelines and analytics infrastructure",
    },
    {
      id: 3,
      title: "ML Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Develop machine learning models for commerce intelligence",
    },
    {
      id: 4,
      title: "Senior Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Drive product strategy and roadmap for BI platform",
    },
    {
      id: 5,
      title: "UX Designer",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description:
        "Design intuitive user experiences for data visualization tools",
    },
    {
      id: 6,
      title: "Account Executive",
      department: "Sales",
      location: "New York, NY",
      type: "Full-time",
      description: "Drive revenue growth by acquiring new enterprise customers",
    },
    {
      id: 7,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Ensure customer satisfaction and drive product adoption",
    },
    {
      id: 8,
      title: "Product Marketing Intern",
      department: "Marketing",
      location: "Remote",
      type: "Internship",
      description: "Support go-to-market strategies and content creation",
    },
  ];

  const departments = [
    "All",
    "Engineering",
    "Product",
    "Sales",
    "Customer Success",
    "Marketing",
  ];
  const locations = [
    "All",
    "Remote",
    "San Francisco, CA",
    "New York, NY",
    "Chicago, IL",
  ];

  const filteredJobs = jobs.filter((job) => {
    const deptMatch =
      selectedDepartment === "All" || job.department === selectedDepartment;
    const locMatch =
      selectedLocation === "All" || job.location === selectedLocation;
    return deptMatch && locMatch;
  });

  const processSteps = [
    {
      step: 1,
      title: "Application Review",
      description:
        "We review your resume and cover letter to ensure you meet our requirements.",
      timeline: "1-2 weeks",
      icon: Search,
    },
    {
      step: 2,
      title: "Technical Assessment",
      description:
        "If your application is successful, you'll be invited for a technical interview.",
      timeline: "1-2 weeks",
      icon: Filter,
    },
    {
      step: 3,
      title: "Technical Interview",
      description:
        "You'll have a conversation with a technical team member to discuss your experience and skills.",
      timeline: "1-2 weeks",
      icon: MapPin,
    },
    {
      step: 4,
      title: "Final Interview",
      description:
        "If you pass the technical interview, you'll meet with our hiring manager for a final discussion.",
      timeline: "1-2 weeks",
      icon: Search,
    },
    {
      step: 5,
      title: "Offer",
      description:
        "If you're successful in all interviews, we'll extend an offer to join our team.",
      timeline: "1-2 weeks",
      icon: MapPin,
    },
  ];

  const interviewTips = [
    {
      title: "What to Expect During the Interview Process?",
      content:
        "Our interview process is designed to be collaborative and informative. You'll have the opportunity to ask questions and learn more about the role and our team. We believe in getting to know you as a person and understanding how you can contribute to our mission.",
    },
    {
      title: "How Long Does the Interview Process Take?",
      content:
        "The timeline can vary, but typically it takes 1-2 weeks for the entire process. This includes application review, technical assessment, technical interview, final interview, and offer. We strive to move quickly and efficiently while ensuring thorough evaluation.",
    },
    {
      title: "What Should I Prepare for the Technical Interview?",
      content:
        "For the technical interview, we expect you to be prepared to discuss your experience, projects, and technical skills. We're interested in how you've solved problems and what technologies you're comfortable with. Feel free to ask questions about the role and the team.",
    },
    {
      title: "What Happens After the Interview?",
      content:
        "After each interview, we'll provide feedback and let you know the next steps. If you're successful, we'll extend an offer. If not, we'll provide constructive feedback to help you improve for future opportunities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join the Team Building the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                Future of Commerce Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore roles in Engineering, Product, Sales, Customer Success,
              and more. Help us revolutionize how businesses understand their
              data.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filter by:</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-gray-700">
                    Department:
                  </span>
                  {departments.map((dept) => (
                    <button
                      key={dept}
                      onClick={() => setSelectedDepartment(dept)}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                        selectedDepartment === dept
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-gray-700">
                    Location:
                  </span>
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => setSelectedLocation(loc)}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                        selectedLocation === loc
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-black">
                Open Positions ({filteredJobs.length})
              </h2>
            </div>
            <div className="grid gap-6">
              {filteredJobs.map((job, index) => (
                <Card
                  key={job.id}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                            {job.title}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            {job.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 mb-3 text-gray-600">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <Badge variant="secondary">{job.department}</Badge>
                        </div>
                        <p className="text-gray-600">{job.description}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105">
                          Apply Now
                        </Button>
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
            Don't See the Role You're Looking For?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We're always interested in connecting with talented individuals.
            Send us your resume and let's start a conversation.
          </p>
          <a href="mailto:careers@trilio.ai">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
              Drop Us Your Resume
            </Button>
          </a>
        </div>
      </section>

      {/* --- Interview Process Section (from InterviewProcess.tsx) --- */}
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                Interview Process
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We value your time and aim to make interviews collaborative, not
              intimidating. Here's what to expect when you apply to join our
              team.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              Interview Timeline
            </h2>
            <div className="relative">
              {/* Desktop Timeline */}
              <div className="hidden md:block">
                <div className="flex items-center justify-between mb-8 gap-8">
                  {processSteps.map((step, index) => (
                    <div
                      key={step.step}
                      className="relative z-10 flex flex-col items-center"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 animate-fade-in">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md text-center max-w-xs">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {step.description}
                        </p>
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                          {step.timeline}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Mobile Timeline */}
              <div className="md:hidden space-y-6">
                {processSteps.map((step, index) => (
                  <Card
                    key={step.step}
                    className="hover:shadow-lg transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {step.description}
                          </p>
                          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                            {step.timeline}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              Interview Tips & FAQs
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {interviewTips.map((tip, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg border shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-semibold text-black">
                    {tip.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {tip.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Hiring Manager Quote */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-blue-500 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="https://assets.channeliq.ai/invictus-landing/Leadership/Harika.png"
                      alt="Harika"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <blockquote className="text-lg text-gray-700 italic mb-4">
                      "We're not looking for perfect candidates - we're looking
                      for curious, driven people who want to grow with us. Our
                      interviews are conversations, not interrogations. Come as
                      you are, and let's explore how we can build something
                      amazing together."
                    </blockquote>
                    <div>
                      <p className="font-semibold text-gray-900"></p>
                      <p className="text-sm text-gray-600">Harika Hr Manager</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Browse our open positions and take the first step toward joining the
            Trilio team.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
            Apply Now
          </Button>
        </div>
      </section>

      {/* Internships & Programs Section */}
      <InternshipsPrograms />

      <Footer />
    </div>
  );
};

export default OpenPositions;
