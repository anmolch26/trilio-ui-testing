import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, Calendar, Award, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import NirjarProfilePic from "@/assests/Nirjar Profile Pic.jpg";
import OmProfilePic from "@/assests/IMG_7723_PhotoGrid (1).png";

const LeadershipTeam = () => {
  const leaders = [
    {
      name: "Nirjar Sanghavi",
      title: "Co-founder & CEO  ",
      bio: "Visionary leader with 20+ years of deep expertise in eCommerce analytics and business intelligence at companies like Samsung, Groupon, eBay, PayPal, and Chase. Nirjar founded Trilio with the mission to democratize data-driven decision making for online merchants. With background  in Ecommerce, Data Science, Analytics, Nirjar brings a rare mix of technical depth and business acumen to Trilio.",
      image:
        "https://assets.channeliq.ai/invictus-landing/Leadership/Nirjar.png",
    },
    {
      name: "Om Rathod",
      title: " Co-founder & CRO ",
      bio: "Revenue growth leader and co-founder driving Trilio's commercial strategy. Om has led the product vision and execution from scratch. With a strong background in SaaS sales and GTM strategy, Om bridges product innovation with real-world customer needs driving both adoption and growth.",
      image: "https://assets.channeliq.ai/invictus-landing/Leadership/IMG_7723_PhotoGrid (1).png",
    },
  ];

  const stats = [
    {
      number: "67%",
      label: "Diverse Hires",
      icon: Users,
    },
    {
      number: "15",
      label: "Nationalities",
      icon: Globe,
    },
    {
      number: "4.2",
      label: "Years Average Tenure",
      icon: Calendar,
    },
    {
      number: "98%",
      label: "Employee Satisfaction",
      icon: Award,
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
              Meet the Team
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                Powering Trilio
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our leadership team combines decades of experience in eCommerce,
              data science, and building world-class products that merchants
              love.
            </p>
          </div>
        </div>
      </section>

      {/* Leaders Horizontal Cards with Alternating Sides */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            {leaders.map((leader, index) => (
              <div
                key={leader.name || index}
                className={`flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-xl p-8 gap-10 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="flex-shrink-0 w-full md:w-[380px] h-[340px] flex items-center justify-center">
                  <img
                    src={
                      index === 0
                        ? "https://assets.channeliq.ai/invictus-landing/Leadership/Nirjar.png"
                        : "https://assets.channeliq.ai/invictus-landing/Leadership/IMG_7723_PhotoGrid (1).png"
                    }
                    alt={leader.name}
                    className="w-full h-full object-cover rounded-2xl shadow-md"
                  />
                </div>
                {/* Text */}
                <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                  <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
                    {leader.name}
                  </h2>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                    {leader.title}
                  </h3>
                  <p className="text-lg text-gray-700">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section (from OurStory.tsx) */}
      <section className="pt-0 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              Mission & Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 12c.621 0 1.125-.504 1.125-1.125S12.621 9.75 12 9.75s-1.125.504-1.125 1.125S11.379 12 12 12zm0 0c2.071 0 3.75-1.679 3.75-3.75S14.071 4.5 12 4.5 8.25 6.179 8.25 8.25 9.929 12 12 12zm0 0c4.142 0 7.5-3.358 7.5-7.5S16.142 0 12 0 4.5 3.358 4.5 7.5 7.858 12 12 12z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Mission</h3>
                  <p className="text-gray-600">
                    Democratize advanced analytics for every eCommerce business,
                    regardless of size or technical expertise.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v9m0 0c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V3m0 0C6.477 3 2 7.477 2 13c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Vision</h3>
                  <p className="text-gray-600">
                    A world where every merchant has access to enterprise-level
                    business intelligence to drive growth.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-3-3h-1a3 3 0 00-3 3v2h2zm-7 0h2v-2a3 3 0 00-3-3H6a3 3 0 00-3 3v2h5zm7-8a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Values</h3>
                  <p className="text-gray-600">
                    Transparency, innovation, customer success, and data-driven
                    decision making guide everything we do.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Join Our Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We're always looking for talented individuals who share our passion
            for revolutionizing eCommerce analytics.
          </p>
          <Link to="/about/careers">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold">
              View Open Roles
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeadershipTeam;
