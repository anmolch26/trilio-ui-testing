import React from "react";
import PageLayout from "@/components/theme/PageLayout";
import IntegrationRequestForm from "@/components/IntegrationRequestForm";
import RouteCanonical from "@/components/RouteCanonical";

const IntegrationRequest = () => {
  return (
    <PageLayout>
      <RouteCanonical path="/integration-request" />
      <main className="pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Request Integration
              </h1>
              <p className="text-lg text-gray-600">
                Need a specific integration? Let us know and our team will reach out to you at integrations@trilio.ai.
              </p>
            </div>
            <div className="text-black">
              <IntegrationRequestForm />
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default IntegrationRequest;

