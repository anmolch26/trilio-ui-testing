import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/NavBar";
import LegacyFooter from "@/components/LegacyFooter";
import {
  Target,
  Zap,
  BarChart3,
  ArrowRight,
  Settings,
  AlertTriangle,
  TrendingDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const PerformanceMarketers = () => {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Performance Marketing Analytics & Attribution | Trilio"
        description="Maximize ROI with granular attribution. Creative testing, SKU-level ROI, and budget optimization for performance marketers."
        canonical="/who-we-help/performance-marketers"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Maximize ROI with{" "}
                <span className="text-blue-600">Granular Attribution</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Budget optimization, creative testing, and SKU‑level ROI
                insights for performance marketers who demand precision.
              </p>
              <Link to="/contact-form?type=attribution-lab">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                  Launch Attribution Lab
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Creative Performance Matrix
                  </span>
                  <Target className="w-5 h-5 text-blue-500" />
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="bg-green-100 p-2 rounded text-center">
                    <div className="font-semibold text-green-700">Ad A1</div>
                    <div className="text-green-600">4.2x</div>
                  </div>
                  <div className="bg-yellow-100 p-2 rounded text-center">
                    <div className="font-semibold text-yellow-700">Ad A2</div>
                    <div className="text-yellow-600">2.8x</div>
                  </div>
                  <div className="bg-red-100 p-2 rounded text-center">
                    <div className="font-semibold text-red-700">Ad A3</div>
                    <div className="text-red-600">1.2x</div>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="text-sm text-gray-500">Top SKU ROI</div>
                  <div className="text-lg font-semibold text-black">
                    Widget Pro: 6.8x
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
              Performance Marketing Pain Points
            </h2>
            <p className="text-xl text-gray-600">
              Without granular data, optimization becomes impossible
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <AlertTriangle className="w-12 h-12 text-red-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Difficult Creative A/B Analysis
              </h3>
              <p className="text-gray-600">
                Can't easily compare creative performance across campaigns and
                platforms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <BarChart3 className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                No SKU‑Level ROI
              </h3>
              <p className="text-gray-600">
                Product-level attribution missing, making it impossible to
                optimize ad spend by item.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <TrendingDown className="w-12 h-12 text-yellow-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Slow Budget Shifts
              </h3>
              <p className="text-gray-600">
                Manual budget reallocation takes days when you need to react in
                hours.
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
              Precision Performance Tools
            </h2>
            <p className="text-xl text-gray-600">
              Granular insights that drive better creative and budget decisions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Creative Performance Matrix
              </h3>
              <p className="text-gray-600">
                Compare click‑through & conversion rates by creative across all
                campaigns and platforms.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                SKU ROI Explorer
              </h3>
              <p className="text-gray-600">
                Unit‑level ROAS, margin metrics, and contribution analysis for
                every product.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Auto‑Rebalance Budgets
              </h3>
              <p className="text-gray-600">
                AI-powered suggestions to reallocate spend based on real-time
                performance data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <blockquote className="text-xl lg:text-2xl text-gray-900 mb-6">
              "We improved ROAS by 25% using Trilio's SKU insights. Now we know
              exactly which products to push in our ads."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-semibold">MS</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Mike Smith</div>
                <div className="text-gray-600">
                  Performance Marketing Manager, RetailCo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Stop Leaving Money on the Table
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Optimize every creative, every SKU, every dollar with granular
            attribution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-form?type=attribution-lab">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Launch Attribution Lab
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

          </div>
        </div>
      </section>

      <LegacyFooter />
    </div>
  );
};

export default PerformanceMarketers;
