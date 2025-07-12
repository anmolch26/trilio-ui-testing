import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  Package,
  Clock,
  Bell,
  ArrowRight,
  FileText,
  AlertCircle,
  TrendingDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const OperationsManagers = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Streamline Workflows &{" "}
                <span className="text-blue-600">Inventory Health</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Automated reporting, fulfillment status, stock alerts & order
                health monitoring in one operational dashboard.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Enable Ops Automation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Inventory Status
                  </span>
                  <Package className="w-5 h-5 text-green-500" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500">In Stock</div>
                    <div className="text-xl font-semibold text-green-600">
                      1,247
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500">Low Stock</div>
                    <div className="text-xl font-semibold text-yellow-600">
                      23
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="text-sm text-gray-500">Orders Today</div>
                  <div className="text-lg font-semibold text-black">
                    156 processed
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
              Operational Inefficiencies
            </h2>
            <p className="text-xl text-gray-600">
              Manual processes and disconnected systems slow down operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <FileText className="w-12 h-12 text-red-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Manual Report Generation
              </h3>
              <p className="text-gray-600">
                Hours spent each week compiling reports that should be
                automated.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <AlertCircle className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Stockouts & Overstock Blindspots
              </h3>
              <p className="text-gray-600">
                No early warning system for inventory issues until it's too
                late.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <TrendingDown className="w-12 h-12 text-yellow-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Fulfillment Delays
              </h3>
              <p className="text-gray-600">
                Can't track order status across multiple fulfillment centers in
                real-time.
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
              Operations on Autopilot
            </h2>
            <p className="text-xl text-gray-600">
              Automated workflows that keep your business running smoothly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Scheduled Reports
              </h3>
              <p className="text-gray-600">
                PDF/CSV reports automatically emailed or posted to Slack on your
                schedule.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Inventory Forecast
              </h3>
              <p className="text-gray-600">
                Days‑of‑stock remaining calculations with automatic reorder
                alerts.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Fulfillment Dashboard
              </h3>
              <p className="text-gray-600">
                Real-time tracking of open, shipped, returned, and cancelled
                order counts.
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
              Automation in Action
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              "Auto‑email weekly inventory snapshot to warehouse team every
              Monday at 8 AM, with low-stock alerts highlighted in red."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-sm text-gray-500 mb-2">
                  Before Automation
                </div>
                <div className="text-2xl font-bold text-red-600 mb-2">
                  8 hours
                </div>
                <div className="text-sm text-gray-600">
                  Weekly reporting time
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-sm text-gray-500 mb-2">
                  After Automation
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">
                  0 hours
                </div>
                <div className="text-sm text-gray-600">
                  Manual work required
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
            Stop Drowning in Manual Tasks
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Automate your operational workflows and focus on strategic growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-form">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Enable Ops Automation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Configure Alerts
              <Bell className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OperationsManagers;
