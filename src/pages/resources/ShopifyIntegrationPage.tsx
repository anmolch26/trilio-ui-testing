import React from "react";
import Navbar from "@/components/NavBar";
import LegacyFooter from "@/components/LegacyFooter";
import ShopifyIntegration from "@/components/integrations/ShopifyIntegration";

const ShopifyIntegrationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <ShopifyIntegration />
        </div>
      </div>
      <LegacyFooter />
    </div>
  );
};

export default ShopifyIntegrationPage;
