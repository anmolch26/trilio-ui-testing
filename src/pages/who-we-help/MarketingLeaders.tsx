import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/NavBar";
import {
  TrendingUp,
  Target,
  BarChart4,
  ArrowRight,
  Zap,
  AlertCircle,
  TrendingDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LegacyFooter from "@/components/LegacyFooter";
import RouteCanonical from "@/components/RouteCanonical";

const MarketingLeaders = () => {
  return (
    <div className="min-h-screen bg-white">
     
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Unify Your{" "}
                <span className="text-blue-600">Ad & Retail Analytics</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                ROAS, CAC & conversion funnels for Facebook, Google, Amazon &
                Shopify—one source of truth.
              </p>
              <Link to="/contact-form?type=marketing-demo">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                  See Marketing Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Blended ROAS</span>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900">4.2x</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500">Facebook</div>
                    <div className="text-lg font-semibold text-blue-600">
                      3.8x
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500">Google</div>
                    <div className="text-lg font-semibold text-green-600">
                      4.6x
                    </div>
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
              Marketing Attribution Chaos
            </h2>
            <p className="text-xl text-gray-600">
              Fragmented data leads to poor budget allocation decisions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Zap className="w-12 h-12 text-red-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Fragmented Ad Data
              </h3>
              <p className="text-gray-600">
                Each platform reports differently, making true ROAS comparison
                impossible.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <TrendingDown className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Rising CAC Without Visibility
              </h3>
              <p className="text-gray-600">
                Customer acquisition costs climbing but no insight into which
                channels are responsible.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <AlertCircle className="w-12 h-12 text-yellow-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                No Holistic Funnel View
              </h3>
              <p className="text-gray-600">
                Can't track customer journey from first touch to final purchase
                across channels.
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
              Marketing Intelligence Unified
            </h2>
            <p className="text-xl text-gray-600">
              Stop guessing, start optimizing with real attribution data
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <BarChart4 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Multi‑Channel ROAS
              </h3>
              <p className="text-gray-600">
                Compare ad spend vs. revenue across Facebook, Google, TikTok,
                and Amazon in one view.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                CAC Waterfall
              </h3>
              <p className="text-gray-600">
                Visualize cost per acquisition and discount impact across your
                entire funnel.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Conversion Funnel
              </h3>
              <p className="text-gray-600">
                Top‑of‑funnel to purchase tracking, filter by channel, campaign,
                or creative.
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
              Real-World Impact
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              "Optimize Facebook vs. TikTok budget allocation in one click based
              on true blended ROAS data."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-sm text-gray-500 mb-2">Before Trilio</div>
                <div className="text-2xl font-bold text-red-600 mb-2">2.1x</div>
                <div className="text-sm text-gray-600">Average ROAS</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-sm text-gray-500 mb-2">After Trilio</div>
                <div className="text-2xl font-bold text-green-600 mb-2">
                  4.2x
                </div>
                <div className="text-sm text-gray-600">Average ROAS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Stop Wasting Ad Spend on Guesswork
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            See which channels really drive revenue, not just clicks
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-form?type=marketing-demo">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                See Marketing Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Get Custom ROAS Report
              <BarChart4 className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <LegacyFooter />
    </div>
  );
};

export default MarketingLeaders;
