
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface GMVRange {
  range: string;
  gmvMin: number;
  gmvMax: number;
  free: string;
  pro: string;
  premium: string;
  popular?: boolean;
}

const GMVRangeCards = () => {
  const [selectedRange, setSelectedRange] = useState<number>(1);

  const gmvRanges: GMVRange[] = [
    { range: "$0 - $1M", gmvMin: 0, gmvMax: 1, free: "$0", pro: "$199", premium: "$499", popular: true },
    { range: "$1M - $5M", gmvMin: 1, gmvMax: 5, free: "N/A", pro: "$299", premium: "$699" },
    { range: "$5M - $20M", gmvMin: 5, gmvMax: 20, free: "N/A", pro: "$599", premium: "$999" },
    { range: "$20M - $50M", gmvMin: 20, gmvMax: 50, free: "N/A", pro: "$999", premium: "$1,499" },
    { range: "$50M - $100M", gmvMin: 50, gmvMax: 100, free: "N/A", pro: "$1,499", premium: "$1,999" },
    { range: "$100M+", gmvMin: 100, gmvMax: Infinity, free: "N/A", pro: "Custom", premium: "Custom" }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Range Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {gmvRanges.map((range, index) => (
          <button
            key={index}
            onClick={() => setSelectedRange(index)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              selectedRange === index
                ? "bg-orange-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            {range.range}
          </button>
        ))}
      </div>

      {/* Selected Range Details */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-50 to-purple-50 p-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Monthly GMV: {gmvRanges[selectedRange].range}
          </h3>
          {gmvRanges[selectedRange].popular && (
            <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Most Popular Range
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {/* Free Plan */}
          <div className="p-6 text-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Free</h4>
            <div className="mb-4">
              {gmvRanges[selectedRange].free === "N/A" ? (
                <span className="text-2xl text-gray-400">Not Available</span>
              ) : (
                <span className="text-3xl font-bold text-gray-900">
                  {gmvRanges[selectedRange].free}
                </span>
              )}
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div>• Basic analytics</div>
              <div>• Community support</div>
              <div>• Standard integrations</div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className={cn(
            "p-6 text-center relative",
            gmvRanges[selectedRange].popular && "bg-orange-50"
          )}>
            {gmvRanges[selectedRange].popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Recommended
                </span>
              </div>
            )}
            <h4 className="text-lg font-semibold text-orange-600 mb-4">Pro</h4>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-900">
                {gmvRanges[selectedRange].pro}
              </span>
              {gmvRanges[selectedRange].pro !== "Custom" && (
                <span className="text-gray-600">/month</span>
              )}
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div>• Advanced analytics</div>
              <div>• Priority support</div>
              <div>• 2 AI Agents</div>
              <div>• SQL Navigator</div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="p-6 text-center">
            <h4 className="text-lg font-semibold text-purple-600 mb-4">Premium</h4>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-900">
                {gmvRanges[selectedRange].premium}
              </span>
              {gmvRanges[selectedRange].premium !== "Custom" && (
                <span className="text-gray-600">/month</span>
              )}
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div>• Premium analytics</div>
              <div>• Dedicated success manager</div>
              <div>• 4 AI Agents</div>
              <div>• Full feature suite</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GMVRangeCards;
