
import React, { useState } from 'react';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, CheckCircle, TrendingUp, Users, BookOpen, Calendar } from 'lucide-react';
import LegacyFooter from '@/components/LegacyFooter';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [company, setCompany] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);

  const interestOptions = [
    'E-commerce Analytics',
    'Performance Marketing',
    'Data Integration',
    'AI & Machine Learning',
    'Customer Journey',
    'Attribution Modeling'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubscribed(true);
  };

  const toggleInterest = (interest: string) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Industry Insights",
      description: "Latest trends and benchmarks in e-commerce analytics"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Expert Content",
      description: "In-depth guides and case studies from our team"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Success Stories",
      description: "Real results from brands using Trilio"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Event Updates",
      description: "Early access to webinars and exclusive events"
    }
  ];

  const pastNewsletters = [
    {
      title: "December 2024: Year-End Analytics Wrap-Up",
      topics: ["2024 E-commerce Benchmarks", "Attribution Trends Report", "Customer Success Spotlight"],
      date: "Dec 15, 2024"
    },
    {
      title: "November 2024: Black Friday Insights",
      topics: ["BFCM Performance Analysis", "Holiday Campaign Strategies", "Peak Season Planning"],
      date: "Nov 20, 2024"
    },
    {
      title: "October 2024: AI in Commerce",
      topics: ["AI-Powered Analytics", "Predictive Modeling Guide", "Automation Best Practices"],
      date: "Oct 18, 2024"
    }
  ];

  if (isSubscribed) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <div className="container mx-auto px-6 py-32 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to the Trilio Community!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for subscribing. You'll receive your first newsletter within the next few days.
            </p>
            <Button onClick={() => window.location.href = '/'}>
              Return to Homepage
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Stay in the Loop
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Subscribe to the Trilio Monthly for trends, insights, and case studies.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Signup Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Subscribe Now</CardTitle>
                  <CardDescription>
                    Join thousands of commerce professionals getting actionable insights delivered monthly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        What interests you most? (Optional)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {interestOptions.map((interest) => (
                          <button
                            key={interest}
                            type="button"
                            onClick={() => toggleInterest(interest)}
                            className={`px-3 py-2 text-sm rounded-full border transition-all duration-200 ${
                              interests.includes(interest)
                                ? 'bg-purple-100 border-purple-300 text-purple-700'
                                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        className="mt-1 mr-3"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        I agree to receive marketing communications from Trilio. I can unsubscribe at any time. 
                        View our <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>.
                      </label>
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-3">
                      Subscribe Now
                      <Mail className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* What to Expect */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Monthly delivery - no spam</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Industry trends & benchmarks</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Trilio updates & case studies</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Early access to content & events</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Unsubscribe anytime with one click</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center p-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <div className="text-purple-600">{benefit.icon}</div>
                    </div>
                    <h3 className="font-semibold text-sm mb-2">{benefit.title}</h3>
                    <p className="text-xs text-gray-600">{benefit.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Past Newsletters */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Newsletters</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pastNewsletters.map((newsletter, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">{newsletter.date}</Badge>
                    <CardTitle className="text-lg">{newsletter.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {newsletter.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                          {topic}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>

      <LegacyFooter />
    </div>
  );
};

export default NewsletterSignup;
