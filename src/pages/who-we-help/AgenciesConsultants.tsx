import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/NavBar";
import {
  Users,
  Shield,
  DollarSign,
  ArrowRight,
  Palette,
  Key,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LegacyFooter from "@/components/LegacyFooter";

const AgenciesConsultants = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Manage{" "}
                <span className="text-blue-600">Multi‑Client Dashboards</span>{" "}
                at Scale
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                White‑label reports, role controls, and billing per account for
                agencies managing multiple client relationships.
              </p>
              <Link to="/contact-form?type=agency-demo">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                  Book Agency Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Client Dashboard
                  </span>
                  <Users className="w-5 h-5 text-blue-500" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                    <span
                      className={`text-sm font-medium${
                        ["RetailCorp", "EcommPlus", "ShopMaster"].includes(
                          "RetailCorp"
                        )
                          ? " text-black"
                          : ""
                      }`}
                    >
                      RetailCorp
                    </span>
                    <span className="text-xs text-blue-600">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                    <span
                      className={`text-sm font-medium${
                        ["RetailCorp", "EcommPlus", "ShopMaster"].includes(
                          "EcommPlus"
                        )
                          ? " text-black"
                          : ""
                      }`}
                    >
                      EcommPlus
                    </span>
                    <span className="text-xs text-green-600">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                    <span
                      className={`text-sm font-medium${
                        ["RetailCorp", "EcommPlus", "ShopMaster"].includes(
                          "ShopMaster"
                        )
                          ? " text-black"
                          : ""
                      }`}
                    >
                      ShopMaster
                    </span>
                    <span className="text-xs text-yellow-600">Setup</span>
                  </div>
                </div>
                <div className="pt-2 text-sm text-gray-500">
                  Total Clients: 12 | Billing: $4,800/mo
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
              Agency Management Headaches
            </h2>
            <p className="text-xl text-gray-600">
              Managing multiple clients shouldn't require multiple tools
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Key className="w-12 h-12 text-red-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Separate Logins for Each Client
              </h3>
              <p className="text-gray-600">
                Juggling dozens of passwords and accounts makes client
                management inefficient.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Palette className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                No White‑Label Option
              </h3>
              <p className="text-gray-600">
                Generic reports don't reflect your agency's brand and
                professionalism.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <AlertTriangle className="w-12 h-12 text-yellow-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Difficult Billing Tracking
              </h3>
              <p className="text-gray-600">
                No visibility into per-client usage makes accurate billing
                nearly impossible.
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
              Built for Agency Scale
            </h2>
            <p className="text-xl text-gray-600">
              Professional client management tools that grow with your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Palette className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                White‑Label Portals
              </h3>
              <p className="text-gray-600">
                Custom branding, logos, and domain names for each client portal.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Client Switcher
              </h3>
              <p className="text-gray-600">
                Single sign‑on to jump between client accounts without multiple
                logins.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Usage Billing
              </h3>
              <p className="text-gray-600">
                Track per‑client consumption and generate automated invoices.
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
              Agency Efficiency
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              "Deliver branded monthly reports to 10 clients in 5 minutes, with
              automatic scheduling and custom insights for each account."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-sm text-gray-500 mb-2">
                  Manual Reporting
                </div>
                <div className="text-2xl font-bold text-red-600 mb-2">
                  40 hours
                </div>
                <div className="text-sm text-gray-600">
                  Monthly client reports
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-sm text-gray-500 mb-2">With Trilio</div>
                <div className="text-2xl font-bold text-green-600 mb-2">
                  5 minutes
                </div>
                <div className="text-sm text-gray-600">Automated delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Scale Your Agency Without the Chaos
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Professional client management tools that impress clients and save
            time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-form?type=agency-demo">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Book Agency Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            {/* <Button
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Enable Agency Mode
              <Shield className="ml-2 w-5 h-5" />
            </Button> */}
          </div>
        </div>
      </section>

      <LegacyFooter/>
    </div>
  );
};

export default AgenciesConsultants;
