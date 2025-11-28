import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/NavBar";
import LegacyFooter from "@/components/LegacyFooter";
import {
  Database,
  Download,
  Code,
  ArrowRight,
  Search,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const DataAnalysts = () => {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Self-Service Ecommerce Data Analytics | Trilio"
        description="Explore data without complex queries. SQL-lite interface, point-and-click explorer, and instant exports for data analysts."
        canonical="/who-we-help/data-analysts"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Explore Data Without{" "}
                <span className="text-blue-600">Complex Queries</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Self‑serve data explorer, SQL‑lite interface, and exportable
                datasets for analysts who need answers fast.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Access Data Explorer
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Query Builder</span>
                  <Search className="w-5 h-5 text-blue-500" />
                </div>
                <div className="bg-gray-100 p-3 rounded font-mono text-sm text-black">
                  SELECT * FROM orders
                  <br />
                  WHERE date {">="} '2024-01-01'
                  <br />
                  AND status = 'completed'
                </div>
                <div className="text-sm text-gray-500">
                  Results: 15,847 rows
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-black"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
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
              Data Access Bottlenecks
            </h2>
            <p className="text-xl text-gray-600">
              Slow data access kills analytical momentum
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Clock className="w-12 h-12 text-red-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Waiting on Engineering
              </h3>
              <p className="text-gray-600">
                Need to request data exports through tickets that take days to
                fulfill.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <AlertTriangle className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                No Direct BI Tool Integration
              </h3>
              <p className="text-gray-600">
                Can't connect Tableau or Power BI directly to clean, unified
                datasets.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Database className="w-12 h-12 text-yellow-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Limited API Access
              </h3>
              <p className="text-gray-600">
                Restricted access to raw data makes custom analysis difficult.
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
              Self-Service Analytics
            </h2>
            <p className="text-xl text-gray-600">
              Get the data you need, when you need it, how you need it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Point‑&‑Click Explorer
              </h3>
              <p className="text-gray-600">
                Build custom queries visually with drag-and-drop interface, no
                SQL required.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                SQL‑Lite Prompt
              </h3>
              <p className="text-gray-600">
                Write ad‑hoc SQL queries for advanced analysis with
                auto-complete and validation.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Download className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                One‑Click Exports
              </h3>
              <p className="text-gray-600">
                CSV/Excel download of any table or chart, plus API endpoints for
                BI tools.
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
              Real-World Example
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              "Pull last 90 days' Shopify orders by state in 2 seconds,
              including tax calculations and shipping costs."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-sm text-gray-500 mb-2">
                  Traditional Method
                </div>
                <div className="text-2xl font-bold text-red-600 mb-2">
                  3-5 days
                </div>
                <div className="text-sm text-gray-600">
                  Engineering ticket turnaround
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-sm text-gray-500 mb-2">With Trilio</div>
                <div className="text-2xl font-bold text-green-600 mb-2">
                  2 seconds
                </div>
                <div className="text-sm text-gray-600">
                  Self-service query time
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
            Stop Waiting for Data Access
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get instant access to clean, queryable datasets from all your
            sources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-form">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Access Data Explorer
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Start Free Data Access
              <Database className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <LegacyFooter />
    </div>
  );
};

export default DataAnalysts;
