import React from "react";
import Navbar from "@/components/NavBar";
import LegacyFooter from "@/components/LegacyFooter";
import ShopifyIntegration from "@/components/integrations/ShopifyIntegration";
import RouteCanonical from "@/components/RouteCanonical";

const ShopifyIntegrationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <RouteCanonical path="/resources/shopify-integration" />
      <Navbar />
      <div className="pt-36 pb-16">
        <div className="container mx-auto px-6">
          <ShopifyIntegration />
        </div>
      </div>
      <LegacyFooter />
    </div>
  );
};

export default ShopifyIntegrationPage;
