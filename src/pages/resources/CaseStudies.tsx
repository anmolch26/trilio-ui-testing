
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/NavBar';
import LegacyFooter from "@/components/LegacyFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudies = () => {
  const trilioLogo = "https://assets.channeliq.ai/trilio-landing/Hero_Images/Remove background project (4).webp";
  
  const caseStudies = [
    {
      id: 1,
      company: "StyleCo Fashion",
      logo: trilioLogo,
      industry: "Fashion & Apparel",
      result: "35% increase in ROAS within 90 days",
      metrics: {
        roas: "+35%",
        revenue: "+$2.4M",
        efficiency: "+60%"
      },
      challenge: "Struggling with attribution across multiple channels",
      solution: "Unified dashboard with real-time attribution modeling"
    },
    {
      id: 2,
      company: "TechGear Plus",
      logo: trilioLogo,
      industry: "Electronics",
      result: "50% reduction in data preparation time",
      metrics: {
        time: "-50%",
        accuracy: "+40%",
        decisions: "3x faster"
      },
      challenge: "Manual data consolidation taking 20+ hours weekly",
      solution: "Automated data pipelines with AI-powered insights"
    },
    {
      id: 3,
      company: "FreshMarket Organics",
      logo: trilioLogo,
      industry: "Food & Beverage",
      result: "28% improvement in customer acquisition cost",
      metrics: {
        cac: "-28%",
        ltv: "+45%",
        retention: "+32%"
      },
      challenge: "High customer acquisition costs across paid channels",
      solution: "Predictive analytics for optimal channel allocation"
    },
    {
      id: 4,
      company: "HomeDecor Studio",
      logo: trilioLogo,
      industry: "Home & Garden",
      result: "2.5x faster reporting and decision-making",
      metrics: {
        reporting: "2.5x faster",
        insights: "+90%",
        satisfaction: "95%"
      },
      challenge: "Fragmented data sources causing delayed insights",
      solution: "Centralized analytics platform with automated reporting"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Real Brands. Real Results.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            How top DTC and retail brands scale efficiently using Trilio.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <img
                      src={study.logo}
                      alt={study.company}
                      className="h-12 w-12 rounded-lg object-cover"
                     loading="lazy" decoding="async" />
                    <Badge variant="outline">{study.industry}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors duration-200">
                    {study.company}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-green-600">
                    {study.result}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-red-500" />
                        Challenge
                      </h4>
                      <p className="text-sm text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Users className="h-4 w-4 mr-2 text-green-500" />
                        Solution
                      </h4>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>
                  </div>

                  <Button className="w-full group-hover:bg-purple-600 transition-colors duration-200">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proven Results Across Industries</h2>
            <p className="text-xl opacity-90">Join hundreds of brands already scaling with Trilio</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="opacity-90">Brands Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$2.5B+</div>
              <div className="opacity-90">Revenue Tracked</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="opacity-90">Avg ROAS Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="opacity-90">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a demo to learn how Trilio can help you achieve similar results.
          </p>
          <Link to="/contact-form?type=book-demo">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <LegacyFooter />
    </div>
  );
};

export default CaseStudies;
