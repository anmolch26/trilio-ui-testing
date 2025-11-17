import React from "react";
import Navbar from "@/components/NavBar";
import LegacyFooter from "@/components/LegacyFooter";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import RouteCanonical from "@/components/RouteCanonical";

const Faqs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <RouteCanonical path="/about/faqs" />
      <Navbar />

      {/* Hero */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              FAQs
            </h1>
            <p className="text-xl text-gray-700">
              Trilio: Unifying E‑commerce Data for Actionable Insights
            </p>
          </div>
        </div>
      </section>

      {/* FAQ content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-5xl mx-auto space-y-4"
          >
            <AccordionItem
              value="q1"
              className="rounded-2xl border border-gray-200 bg-white/70"
            >
              <AccordionTrigger className="px-6 py-5 text-left text-xl font-semibold text-black hover:no-underline">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-purple-600" />
                  <span>
                    What problem does Trilio aim to solve for e-commerce
                    businesses?
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                E-commerce businesses struggle with fragmented data spread
                across retailers, ad networks, and campaign platforms. This
                leads to data silos and inconsistent KPIs, making it difficult
                to extract actionable insights. Trilio solves this by
                standardising and unifying data into a single source of truth,
                eliminating complex ETL projects and enabling faster, smarter
                decisions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="q2"
              className="rounded-2xl border border-gray-200 bg-white/70"
            >
              <AccordionTrigger className="px-6 py-5 text-left text-xl font-semibold text-black hover:no-underline">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-purple-600" />
                  <span>
                    How does Trilio provide a 'unified source of truth' for
                    e-commerce data?
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-700">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Integrates seamlessly with multiple e-commerce platforms, ad
                    networks, and operational tools.
                  </li>
                  <li>
                    Standardises data across all channels to ensure consistent
                    performance metrics.
                  </li>
                  <li>
                    Breaks down silos and provides a single, trusted view of
                    KPIs.
                  </li>
                  <li>
                    Eliminates discrepancies, ensuring teams can make aligned
                    and data-backed decisions.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="q3"
              className="rounded-2xl border border-gray-200 bg-white/70"
            >
              <AccordionTrigger className="px-6 py-5 text-left text-xl font-semibold text-black hover:no-underline">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-purple-600" />
                  <span>
                    What is the 'AI Wingman' feature, and how does it enhance
                    data analysis?
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-700">
                <p className="mb-2">
                  Trilio’s AI Wingman empowers businesses to query and interpret
                  data effortlessly.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">
                      Intelligent Data Orchestration:
                    </span>{" "}
                    Turns plain English queries into actionable insights.
                  </li>
                  <li>
                    <span className="font-medium">
                      Multi-Model AI Flexibility:
                    </span>{" "}
                    Supports Gemini, GPT, Claude, and more.
                  </li>
                  <li>
                    <span className="font-medium">
                      Automated Workflow Intelligence:
                    </span>{" "}
                    YAML-driven workflows for detection, summarisation, and
                    trend analysis.
                  </li>
                </ul>
                <p className="mt-2">
                  Outcome: Users can simply ask questions and receive charts,
                  explanations, and contextual insights without risk of
                  hallucination.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="q4"
              className="rounded-2xl border border-gray-200 bg-white/70"
            >
              <AccordionTrigger className="px-6 py-5 text-left text-xl font-semibold text-black hover:no-underline">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-purple-600" />
                  <span>
                    How does Trilio ensure that insights are actionable and
                    reliable?
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-700">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Agentic Insights:</span>{" "}
                    Real-time, contextual, and paired with clear
                    recommendations.
                  </li>
                  <li>
                    <span className="font-medium">
                      No Hallucination Guarantee:
                    </span>{" "}
                    Insights are based only on verified, unified data.
                  </li>
                  <li>
                    <span className="font-medium">Action-First Design:</span>{" "}
                    Every output includes a recommendation for next steps,
                    making insights directly usable.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="q5"
              className="rounded-2xl border border-gray-200 bg-white/70"
            >
              <AccordionTrigger className="px-6 py-5 text-left text-xl font-semibold text-black hover:no-underline">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-purple-600" />
                  <span>
                    What role does the 'Personal Concierge' play in Trilio's
                    service offering?
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-700">
                <p className="mb-2">
                  The Personal Concierge is a dedicated analyst integrated into
                  a company’s workflows:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Works directly in platforms like Slack.</li>
                  <li>Provides personalised insights and answers.</li>
                  <li>
                    Acts as an extension of the business team to ensure
                    data-backed decision-making.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="q6"
              className="rounded-2xl border border-gray-200 bg-white/70"
            >
              <AccordionTrigger className="px-6 py-5 text-left text-xl font-semibold text-black hover:no-underline">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-purple-600" />
                  <span>
                    How does Trilio help businesses track and achieve their
                    performance targets?
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-700">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Businesses can set and monitor performance goals in real
                    time.
                  </li>
                  <li>
                    Links outcomes directly to key drivers (e.g., promotions,
                    campaigns, or product changes).
                  </li>
                  <li>
                    Provides precision tracking of KPIs and highlights areas
                    that need attention.
                  </li>
                  <li>Keeps businesses on track to meet or exceed goals.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="q7"
              className="rounded-2xl border border-gray-200 bg-white/70"
            >
              <AccordionTrigger className="px-6 py-5 text-left text-xl font-semibold text-black hover:no-underline">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-purple-600" />
                  <span>
                    What are 'Impact Events' and 'Promo Analysis,' and how do
                    they benefit businesses?
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-700">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Impact Events:</span> Capture
                    the context behind performance changes (campaign launches,
                    promotions, or external market events). This helps
                    businesses learn from past shifts and plan smarter
                    strategies.
                  </li>
                  <li>
                    <span className="font-medium">Promo Analysis:</span>{" "}
                    Measures the true effectiveness of promotions, including
                    incrementality and duration effects, helping businesses
                    identify profitable offers and avoid margin erosion.
                  </li>
                </ul>
                <p className="mt-2">
                  Value: Increases campaign effectiveness, improves ROI, and
                  maximises profitability.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="q8"
              className="rounded-2xl border border-gray-200 bg-white/70"
            >
              <AccordionTrigger className="px-6 py-5 text-left text-xl font-semibold text-black hover:no-underline">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-purple-600" />
                  <span>
                    What is the scope of Trilio's 'Content Analysis' feature?
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-700">
                <p className="mb-2">
                  The Content Analysis feature focuses on email campaigns:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tracks opens, clicks, and conversions.</li>
                  <li>
                    Provides actionable recommendations to improve engagement.
                  </li>
                  <li>Helps teams understand what works and why.</li>
                  <li>
                    Optimises messaging for maximum conversion impact and ROI.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="q9"
              className="rounded-2xl border border-gray-200 bg-white/70"
            >
              <AccordionTrigger className="px-6 py-5 text-left text-xl font-semibold text-black hover:no-underline">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-purple-600" />
                  <span>
                    In summary, how does Trilio transform e-commerce data into
                    business value?
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-700">
                <p>
                  Trilio delivers a unified source of truth, AI-driven insights,
                  and human concierge support. By turning fragmented data into
                  actionable intelligence, it helps businesses:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Make faster, more confident decisions.</li>
                  <li>Run smarter campaigns.</li>
                  <li>Improve ROI with precision insights.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <LegacyFooter />
    </div>
  );
};

export default Faqs;
