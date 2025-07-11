import React from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  color: string;
  bgGradient: string;
  price: number;
  isCustom?: boolean;
}

interface GMVPricingCalculatorProps {
  gmv: number;
  setGMV: (value: number) => void;
}

const GMVPricingCalculator = ({ gmv, setGMV }: GMVPricingCalculatorProps) => {
  const gmvRanges = [
    { value: 0.5, label: "$500K", display: "$0.5M" },
    { value: 1, label: "$1M", display: "$1M" },
    { value: 2.5, label: "$2.5M", display: "$2.5M" },
    { value: 5, label: "$5M", display: "$5M" },
    { value: 10, label: "$10M", display: "$10M" },
    { value: 25, label: "$25M", display: "$25M" },
    { value: 50, label: "$50M", display: "$50M" },
    { value: 75, label: "$75M", display: "$75M" },
    { value: 100, label: "$100M", display: "$100M" },
    { value: 150, label: "$150M+", display: "$150M+" },
  ];

  const calculatePricing = (
    gmv: number
  ): { free: PricingTier; pro: PricingTier; premium: PricingTier } => {
    let proPricing, premiumPricing;

    if (gmv <= 1) {
      proPricing = { base: 199, additional: 0 };
      premiumPricing = { base: 499, additional: 0 };
    } else if (gmv <= 5) {
      proPricing = { base: 299, additional: 0 };
      premiumPricing = { base: 699, additional: 0 };
    } else if (gmv <= 20) {
      proPricing = { base: 599, additional: 0 };
      premiumPricing = { base: 999, additional: 0 };
    } else if (gmv <= 50) {
      proPricing = { base: 999, additional: 0 };
      premiumPricing = { base: 1499, additional: 0 };
    } else if (gmv <= 100) {
      proPricing = { base: 1499, additional: 0 };
      premiumPricing = { base: 1999, additional: 0 };
    } else {
      return {
        free: {
          name: "Free",
          color: "text-gray-600",
          bgGradient: "from-gray-50 to-gray-100",
          price: 0,
        },
        pro: {
          name: "Pro",
          color: "text-orange-600",
          bgGradient: "from-orange-50 to-orange-100",
          price: 0,
          isCustom: true,
        },
        premium: {
          name: "Premium",
          color: "text-purple-600",
          bgGradient: "from-purple-50 to-purple-100",
          price: 0,
          isCustom: true,
        },
      };
    }

    return {
      free: {
        name: "Free",
        color: "text-gray-600",
        bgGradient: "from-gray-50 to-gray-100",
        price: gmv <= 1 ? 0 : -1,
      },
      pro: {
        name: "Pro",
        color: "text-orange-600",
        bgGradient: "from-orange-50 to-orange-100",
        price: proPricing.base,
      },
      premium: {
        name: "Premium",
        color: "text-purple-600",
        bgGradient: "from-purple-50 to-purple-100",
        price: premiumPricing.base,
      },
    };
  };

  const currentGMV = gmv;
  const currentRange =
    gmvRanges.find((range) => range.value >= currentGMV) ||
    gmvRanges[gmvRanges.length - 1];

  return (
    <div className="w-full max-w-6xl mx-auto pb-0 pt-0">
      {/* GMV Selector */}
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Calculate Your Pricing
        </h3>
        <p className="text-gray-600 mb-6">
          Adjust your monthly GMV to see pricing for each plan
        </p>

        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Your Monthly GMV:{" "}
              <span className="text-2xl font-bold text-orange-600">
                {currentRange.display}
              </span>
            </label>
            <div className="px-4">
              <Slider
                value={[gmv]}
                onValueChange={([val]) => setGMV(val)}
                max={150}
                min={0.5}
                step={0.5}
                className="w-full"
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2 px-4">
              <span>$500K</span>
              <span>$150M+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Savings Indicator */}
    </div>
  );
};

export default GMVPricingCalculator;
