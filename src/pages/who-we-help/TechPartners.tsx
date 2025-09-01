import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  Zap,
  Users,
  BarChart3,
  ArrowRight,
  Code,
  FileText,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LegacyFooter from "@/components/LegacyFooter";

const TechPartners = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Collaborate &{" "}
                <span className="text-blue-600">Co‑Market with Trilio</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Integration guides, partner portal, and joint go‑to‑market
                support for technology partners building with Trilio.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Apply for Partner Program
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Partner Portal</span>
                  <Code className="w-5 h-5 text-blue-500" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span
                      className={`text-sm font-medium${
                        [
                          "API Documentation",
                          "SDK Downloads",
                          "Co-marketing Kit",
                        ].includes("API Documentation")
                          ? " text-black"
                          : ""
                      }`}
                    >
                      API Documentation
                    </span>
                    <span className="text-xs text-green-600">Complete</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span
                      className={`text-sm font-medium${
                        [
                          "API Documentation",
                          "SDK Downloads",
                          "Co-marketing Kit",
                        ].includes("SDK Downloads")
                          ? " text-black"
                          : ""
                      }`}
                    >
                      SDK Downloads
                    </span>
                    <span className="text-xs text-blue-600">Available</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span
                      className={`text-sm font-medium${
                        [
                          "API Documentation",
                          "SDK Downloads",
                          "Co-marketing Kit",
                        ].includes("Co-marketing Kit")
                          ? " text-black"
                          : ""
                      }`}
                    >
                      Co-marketing Kit
                    </span>
                    <span className="text-xs text-purple-600">Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Partner Integration Challenges
            </h2>
            <p className="text-xl text-gray-600">
              Building integrations shouldn't be a solo journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Code className="w-12 h-12 text-red-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Complex Integration Onboarding
              </h3>
              <p className="text-gray-600">
                Lengthy technical setup processes without proper documentation
                or support.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <FileText className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Lack of Co‑Marketing Resources
              </h3>
              <p className="text-gray-600">
                No branded materials or go-to-market support for joint
                partnerships.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <AlertTriangle className="w-12 h-12 text-yellow-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                No Dedicated Partner Support
              </h3>
              <p className="text-gray-600">
                Generic support channels don't address partnership-specific
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Partnership Success Platform
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to build, launch, and grow with Trilio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Partner Portal
              </h3>
              <p className="text-gray-600">
                API keys, sandbox environment, comprehensive tech docs, and
                integration guides.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Co‑Marketing Toolkit
              </h3>
              <p className="text-gray-600">
                Logos, email templates, slide decks, and co-branded marketing
                materials.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Joint GTM Dashboard
              </h3>
              <p className="text-gray-600">
                Track referrals, joint campaigns, and partnership ROI in
                real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Integration Made Simple
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              "Integrate your analytics tool with Trilio in 1 hour using our
              pre-built SDKs and comprehensive documentation."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-sm text-gray-500 mb-2">
                  Typical Integration
                </div>
                <div className="text-2xl font-bold text-red-600 mb-2">
                  2-4 weeks
                </div>
                <div className="text-sm text-gray-600">Development time</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-sm text-gray-500 mb-2">
                  With Trilio SDK
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">
                  1 hour
                </div>
                <div className="text-sm text-gray-600">Integration time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our partner ecosystem and unlock new revenue opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-form">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Apply for Partner Program
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Join Partner Program
              <Users className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <LegacyFooter />
    </div>
  );
};

export default TechPartners;
