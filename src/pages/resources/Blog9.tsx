import React from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog9 = () => {
  const navigate = useNavigate();

  const goToPrevious = () => {
    navigate("/resources/blog-insights/blog/8");
  };

  const goToNext = () => {
    navigate("/resources/blog-insights/blog/10");
  };

  const calculateROI = () => {
    const invested =
      parseFloat(
        (document.getElementById("amount-invested") as HTMLInputElement)?.value
      ) || 0;
    const returned =
      parseFloat(
        (document.getElementById("amount-returned") as HTMLInputElement)?.value
      ) || 0;
    const years =
      parseFloat(
        (document.getElementById("period-years") as HTMLInputElement)?.value
      ) || 1;

    // Get result elements
    const totalGainElement = document.getElementById(
      "total-gain"
    ) as HTMLElement;
    const roiElement = document.getElementById("roi-percentage") as HTMLElement;
    const simpleAnnualElement = document.getElementById(
      "simple-annual"
    ) as HTMLElement;
    const cagrElement = document.getElementById("cagr") as HTMLElement;

    if (invested > 0 && returned > 0 && years > 0) {
      const totalGain = returned - invested;
      const roi = (totalGain / invested) * 100;
      const simpleAnnual = roi / years;
      const cagr = (Math.pow(returned / invested, 1 / years) - 1) * 100;

      // Update results
      totalGainElement.textContent = `$${totalGain.toLocaleString()}`;
      roiElement.textContent = `${roi.toFixed(2)}%`;
      simpleAnnualElement.textContent = `${simpleAnnual.toFixed(2)}%`;
      cagrElement.textContent = `${cagr.toFixed(2)}%`;
    } else {
      // Show placeholder or empty values when inputs are invalid
      totalGainElement.textContent = "$0";
      roiElement.textContent = "0.00%";
      simpleAnnualElement.textContent = "0.00%";
      cagrElement.textContent = "0.00%";
    }
  };

  // Initialize calculator on component mount
  React.useEffect(() => {
    calculateROI();
  }, []);

  return (
    <PageLayout backgroundClass="bg-white">
      <ThemeSection background="white" padding="xl" className="pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Blog Post */}
          <article className="mb-16">
            {/* Blog Header */}
            <header className="mb-8">
              <div className="flex items-center mb-6">
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                    Cost-Benefit Analysis: Platform Investment ROI
                  </h1>
                </div>
                <div className="ml-6">
                  <img
                    src="https://assets.channeliq.ai/invictus-landing/Leadership/om.jpg"
                    alt="Om Rathod"
                    className="w-20 h-20 rounded-full object-cover mt-8"
                  />
                </div>
              </div>
            </header>

            {/* Blog Content */}
            <div
              className="text-lg text-gray-900 leading-relaxed space-y-6"
              style={{ fontFamily: "Antarctica, Arial, sans-serif" }}
            >
              <div className="mb-6">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span className="font-medium">by Om Rathod</span>
                  <span className="mx-2">•</span>
                  <span>August 9, 2025</span>
                </div>
              </div>

              <div className="mb-8">
                <img
                  src="https://assets.channeliq.ai/trilio-landing/Blogs/ROI.png"
                  alt="Cost-Benefit Analysis ROI"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Investing in an ecommerce analytics platform is a significant
                decision that requires careful consideration of costs, benefits,
                and expected returns.{" "}
                <strong>Trilio.ai's comprehensive analytics solution</strong>{" "}
                delivers measurable ROI through improved decision-making,
                operational efficiency, and revenue optimization.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                This detailed analysis explores the true cost of analytics
                platforms, quantifies the benefits, and provides a framework for
                calculating your specific ROI. We'll examine both direct and
                indirect returns, implementation costs, and long-term value
                creation.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Understanding the True Cost of Analytics</strong>
              </h2>

              <p className="text-lg leading-relaxed mb-4">
                Before calculating ROI, it's essential to understand all costs
                associated with implementing and maintaining an analytics
                platform.
              </p>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>Direct Costs:</strong>
                </h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>
                      <strong>Platform Subscription:</strong> Monthly/annual
                      fees based on GMV tiers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>
                      <strong>Implementation Services:</strong> Setup,
                      integration, and training costs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>
                      <strong>Data Integration:</strong> API connections and
                      third-party tool integrations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>
                      <strong>Custom Development:</strong> Tailored features and
                      custom dashboards
                    </span>
                  </li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>Indirect Costs:</strong>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>
                      <strong>Team Training:</strong> Time investment for staff
                      onboarding and skill development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>
                      <strong>Process Changes:</strong> Workflow adjustments and
                      operational modifications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>
                      <strong>Opportunity Cost:</strong> Time spent on
                      implementation vs. other business activities
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Quantifying the Benefits</strong>
              </h2>

              <p className="text-lg leading-relaxed mb-4">
                The benefits of implementing Trilio.ai extend far beyond simple
                cost savings. Here's how to measure the comprehensive value
                delivered:
              </p>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>Revenue Impact:</strong>
                </h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>
                      <strong>15-25% ROAS Improvement:</strong> Optimized ad
                      spend across channels
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>
                      <strong>20-40% Reduction in CAC:</strong> Better targeting
                      and attribution
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>
                      <strong>10-30% Increase in AOV:</strong> Improved
                      cross-selling and personalization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>
                      <strong>25-50% Higher Conversion Rates:</strong>{" "}
                      Data-driven optimization
                    </span>
                  </li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>Operational Efficiency:</strong>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>
                      <strong>80-90% Time Savings:</strong> Automated reporting
                      and insights
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>
                      <strong>60-70% Faster Decision Making:</strong> Real-time
                      data access
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>
                      <strong>50-75% Reduction in Manual Work:</strong>{" "}
                      AI-powered automation
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Real-World ROI Examples</strong>
              </h2>

              <p className="text-lg leading-relaxed mb-4">
                Here are actual ROI calculations from businesses using
                Trilio.ai:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Fashion Retailer ($2M GMV)</strong>
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Investment (Year 1):</span>
                      <span className="font-semibold">$8,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Revenue Increase:</span>
                      <span className="font-semibold text-green-600">
                        $45,000
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cost Savings:</span>
                      <span className="font-semibold text-green-600">
                        $28,000
                      </span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-bold">ROI:</span>
                      <span className="font-bold text-green-600">760%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Beauty Brand ($5M GMV)</strong>
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Investment (Year 1):</span>
                      <span className="font-semibold">$15,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Revenue Increase:</span>
                      <span className="font-semibold text-green-600">
                        $125,000
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cost Savings:</span>
                      <span className="font-semibold text-green-600">
                        $65,000
                      </span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-bold">ROI:</span>
                      <span className="font-bold text-green-600">1,150%</span>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Long-Term Value Creation</strong>
              </h2>

              <p className="text-lg leading-relaxed mb-4">
                Beyond immediate ROI, Trilio.ai creates long-term value through
                scalable insights and continuous optimization:
              </p>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>Year 1 Benefits:</strong>
                </h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Immediate operational efficiency gains</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Quick wins in ad optimization and attribution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Reduced manual reporting time</span>
                  </li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>Year 2+ Benefits:</strong>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Advanced AI insights and predictive analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Scalable growth with automated optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>
                      Competitive advantage through data-driven decisions
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Risk Mitigation and Cost Avoidance</strong>
              </h2>

              <p className="text-lg leading-relaxed mb-4">
                Investing in Trilio.ai also helps avoid significant costs
                associated with poor analytics and decision-making:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Costs Avoided:</strong>
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Poor ad spend decisions: $10,000-50,000/month</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Inventory mismanagement: $5,000-25,000/month</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Customer churn: $2,000-15,000/month</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Manual reporting errors: $1,000-8,000/month</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Risk Mitigation:</strong>
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Real-time monitoring prevents costly mistakes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Predictive analytics reduce uncertainty</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Automated alerts prevent revenue loss</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Data-driven decisions reduce guesswork</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Implementation Timeline and ROI</strong>
              </h2>

              <p className="text-lg leading-relaxed mb-4">
                Understanding the timeline for ROI realization helps set proper
                expectations and plan for success:
              </p>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6 mb-6">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-indigo-600 font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Week 1-2
                    </h4>
                    <p className="text-sm text-gray-600">Setup & Integration</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Initial investment phase
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-indigo-600 font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Week 3-4
                    </h4>
                    <p className="text-sm text-gray-600">Training & Adoption</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Team onboarding
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-indigo-600 font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Month 2-3
                    </h4>
                    <p className="text-sm text-gray-600">First Results</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Initial ROI visible
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-indigo-600 font-bold">4</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Month 4-6
                    </h4>
                    <p className="text-sm text-gray-600">Full Optimization</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Maximum ROI achieved
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Interactive ROI Calculator</strong>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Calculate your potential ROI from Trilio.ai using our
                comprehensive calculator. Input your investment details and see
                your projected returns.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8 mb-8">
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Input Section */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">
                        <strong>Investment Details</strong>
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Amount Invested ($)
                          </label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                              $
                            </span>
                            <input
                              type="number"
                              id="amount-invested"
                              placeholder="Enter amount invested"
                              className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                              onChange={calculateROI}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Amount Returned ($)
                          </label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                              $
                            </span>
                            <input
                              type="number"
                              id="amount-returned"
                              placeholder="Enter amount returned"
                              className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                              onChange={calculateROI}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Investment Period (Years)
                          </label>
                          <div className="flex items-center space-x-4">
                            <input
                              type="range"
                              id="investment-period"
                              min="1"
                              max="10"
                              defaultValue="1"
                              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                              onChange={(e) => {
                                const numberInput = document.getElementById(
                                  "period-years"
                                ) as HTMLInputElement;
                                numberInput.value = e.target.value;
                                calculateROI();
                              }}
                            />
                            <input
                              type="number"
                              id="period-years"
                              min="1"
                              max="10"
                              defaultValue="1"
                              className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
                              onChange={(e) => {
                                const slider = document.getElementById(
                                  "investment-period"
                                ) as HTMLInputElement;
                                const value = parseInt(e.target.value) || 1;
                                slider.value = value.toString();
                                calculateROI();
                              }}
                            />
                            <span className="text-sm text-gray-600">Years</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Results Section */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">
                        <strong>ROI Calculation Results</strong>
                      </h3>
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                            <span className="text-sm text-gray-600">
                              Total Gain on Investment:
                            </span>
                            <span
                              className="font-semibold text-blue-600"
                              id="total-gain"
                            >
                              $0
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                            <span className="text-sm text-gray-600">
                              Return on Investment (ROI):
                            </span>
                            <span
                              className="font-semibold text-blue-600"
                              id="roi-percentage"
                            >
                              0.00%
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                            <span className="text-sm text-gray-600">
                              Simple Annual (ROI):
                            </span>
                            <span
                              className="font-semibold text-blue-600"
                              id="simple-annual"
                            >
                              0.00%
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">
                              Compound Annual Growth Rate (CAGR):
                            </span>
                            <span
                              className="font-semibold text-blue-600"
                              id="cagr"
                            >
                              0.00%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <strong>Conclusion: The Investment Case</strong>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The cost-benefit analysis clearly demonstrates that Trilio.ai
                delivers exceptional ROI through a combination of revenue
                growth, cost savings, and operational efficiency. With typical
                returns of 300-800% in the first year, the investment pays for
                itself multiple times over.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The key to maximizing ROI is proper implementation, team
                adoption, and leveraging the platform's advanced features.
                Businesses that fully embrace Trilio.ai's capabilities see the
                highest returns and create sustainable competitive advantages.
              </p>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-teal-800 mb-4">
                  <strong>Ready to Calculate Your ROI?</strong>
                </h3>
                <p className="text-teal-700 mb-4">
                  Start with Trilio.ai's free tier to experience the platform's
                  capabilities firsthand. Our team will help you calculate your
                  specific ROI potential and create a customized implementation
                  plan.
                </p>
                <p className="text-teal-700 font-medium">
                  Join thousands of businesses already seeing 300%+ ROI from
                  their analytics investment.
                </p>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://staging.trilio.ai/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
                >
                  Start Your Free Trial
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={goToPrevious}
              className="flex items-center gap-2 text-black"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous: Industry-Specific Considerations
            </Button>
            <Button
              variant="outline"
              onClick={goToNext}
              className="flex items-center gap-2 text-black"
            >
              Next: Future Trends in Ecommerce Analytics
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default Blog9;
