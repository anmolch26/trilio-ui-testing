import React from "react";
import {
  ArrowRight,
  User,
  Target,
  Users,
  MessageCircle,
  Play,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import ThemeButton from "@/components/theme/ThemeButton";
import ThemeCard from "@/components/theme/ThemeCard";

const OnboardingTraining = () => {
  const included = [
    {
      icon: <User />,
      title: "Dedicated Onboarding Specialist",
      description: "Personal guide throughout your entire setup process",
    },
    {
      icon: <Target />,
      title: "Goal-Based Setup",
      description:
        "Configuration tailored to your specific business objectives",
    },
    {
      icon: <Users />,
      title: "Team Workshops",
      description: "Hands-on training sessions for your entire team",
    },
    {
      icon: <MessageCircle />,
      title: "Slack & Email Support",
      description: "Direct access to our customer success experts",
    },
    {
      icon: <Play />,
      title: "Video Tutorials",
      description: "Comprehensive library of how-to guides and best practices",
    },
    {
      icon: <BookOpen />,
      title: "Knowledge Base Access",
      description: "Complete documentation and troubleshooting resources",
    },
  ];

  const timeline = [
    {
      day: "Day 1",
      milestone: "Kickoff",
      description: "Meet your specialist and define goals",
    },
    {
      day: "Day 3",
      milestone: "Data Connected",
      description: "All integrations live and syncing",
    },
    {
      day: "Day 5",
      milestone: "Dashboards Live",
      description: "Custom KPIs and reports ready",
    },
    {
      day: "Day 7",
      milestone: "Team Training",
      description: "Everyone confident using Trilio",
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <ThemeSection background="gradient" padding="xl">
        <div className="text-center max-w-4xl mx-auto">
          <div className="pulse-chip mx-auto mb-6">
            <span>Onboarding & Training</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Get Up and Running in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Days, Not Weeks
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            Our onboarding and training ensures your team extracts value from
            Day 1.
          </p>
        </div>
      </ThemeSection>

      {/* What's Included */}
      <ThemeSection background="white" padding="xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12 text-black">
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {included.map((item, index) => (
              <ThemeCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                variant="feature"
              />
            ))}
          </div>
        </div>
      </ThemeSection>

      {/* Timeline */}
      <ThemeSection background="gray" padding="xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12 text-black">
            7-Day Onboarding Timeline
          </h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2"></div>
            <div className="grid md:grid-cols-4 gap-8 relative">
              {timeline.map((item, index) => (
                <div key={item.day} className="text-center">
                  <div className="w-16 h-16 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-blue-600 font-bold text-sm">
                      {item.day}
                    </span>
                  </div>
                  <h3
                    className={`font-semibold mb-2${
                      [
                        "Kickoff",
                        "Data Connected",
                        "Dashboards Live",
                        "Team Training",
                      ].includes(item.milestone)
                        ? " text-black"
                        : ""
                    }`}
                  >
                    {item.milestone}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ThemeSection>

      {/* Testimonial */}
      <ThemeSection background="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <ThemeCard
            title="Sarah Chen"
            description="The Trilio team had us up and running in just 5 days. Their onboarding process is incredibly thorough, and our team was confident using the platform from week one."
            variant="testimonial"
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Sarah Chen</div>
                <div className="text-gray-600 text-sm">
                  Head of Marketing, GrowthCo
                </div>
              </div>
            </div>
          </ThemeCard>
        </div>
      </ThemeSection>

      {/* CTA Section */}
      <ThemeSection background="purple" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's get your team onboarded and trained to maximize your Trilio
            investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ThemeButton variant="secondary" size="lg" href="/contact-form?type=customer-success">
              Talk to a Customer Success Expert
            </ThemeButton>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default OnboardingTraining;
