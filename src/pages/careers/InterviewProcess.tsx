import React, { useState } from "react";
import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  Clock,
  Users,
  FileText,
  MessageCircle,
} from "lucide-react";

const InterviewProcess = () => {
  const processSteps = [
    {
      step: 1,
      title: "Application Review",
      description: "We carefully review your application and portfolio",
      icon: FileText,
      timeline: "1-2 days",
    },
    {
      step: 2,
      title: "Intro Call",
      description: "30-minute conversation with our talent team",
      icon: MessageCircle,
      timeline: "30 minutes",
    },
    {
      step: 3,
      title: "Skills Assessment",
      description: "Role-specific technical or case study evaluation",
      icon: CheckCircle,
      timeline: "1-2 hours",
    },
    {
      step: 4,
      title: "Team Interview",
      description: "Meet your potential teammates and manager",
      icon: Users,
      timeline: "45-60 minutes",
    },
    {
      step: 5,
      title: "Final Chat & Offer",
      description: "Culture fit discussion and next steps",
      icon: Clock,
      timeline: "30 minutes",
    },
  ];

  const interviewTips = [
    {
      title: "How to prepare for a case round",
      content:
        "For product and business roles, we'll present a real scenario from our business. Think structured, ask clarifying questions, and walk us through your thought process. We care more about how you think than having the 'right' answer.",
    },
    {
      title: "What we look for in culture fit",
      content:
        "We want to see curiosity, ownership mindset, and collaborative spirit. Share examples of when you've taken initiative, learned from failure, or helped teammates succeed. Authenticity matters more than perfect answers.",
    },
    {
      title: "Technical interview expectations",
      content:
        "For engineering roles, expect coding problems that reflect real work - no obscure algorithms. We'll discuss system design, trade-offs, and how you approach debugging. Feel free to think out loud and ask questions.",
    },
    {
      title: "Questions you should ask us",
      content:
        "Great candidates ask thoughtful questions about our roadmap, team dynamics, growth opportunities, and challenges. This shows genuine interest and helps you evaluate if Trilio is right for you too.",
    },
    {
      title: "What happens after interviews",
      content:
        "We'll get back to you within 2-3 business days with feedback, regardless of the outcome. If moving forward, we'll discuss compensation, start date, and answer any final questions you have.",
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
                <div className="flex items-start justify-center gap-16 mb-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {processSteps.map((step, index) => (
                    <div
                      key={step.step}
                      className="relative z-10 flex flex-col items-center bg-white p-4 rounded-lg shadow-md text-center w-72 border border-gray-100"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 animate-fade-in">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
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
                      src="/lovable-uploads/5ec4610f-3977-4d38-bfb3-389cf824ed85.jpg"
                      alt="Sarah Kim"
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
                      <p className="font-semibold text-gray-900">Sarah Kim</p>
                      <p className="text-sm text-gray-600">
                        Head of Talent & People
                      </p>
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

      <Footer />
    </div>
  );
};

export default InterviewProcess;
