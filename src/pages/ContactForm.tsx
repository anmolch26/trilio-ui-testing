import React from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/NavBar";
import ContactFormComponent from "@/components/ContactFormComponent";
import Footer from "@/components/Footer";
import PageLayout from "@/components/theme/PageLayout";

const ContactForm = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  // Define different form configurations based on type
  const getFormConfig = () => {
    switch (type) {
      case "ceo-demo":
        return {
          title: "Request CEO Demo",
          description: "Schedule a personalized demo with our CEO to explore how Trilio can transform your business."
        };
      case "demo":
        return {
          title: "Request a Demo",
          description: "See Trilio in action. Fill out the form below and we'll get back to you within 24 hours."
        };
      case "contact":
        return {
          title: "Contact Us",
          description: "Have questions? We're here to help. Fill out the form below and we'll get back to you within 24 hours."
        };
      default:
        return {
          title: "Get Your Demo",
          description: "Fill out the form below and we'll get back to you within 24 hours."
        };
    }
  };

  const config = getFormConfig();

  return (
    <PageLayout>
      <main className="pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                {config.title}
              </h1>
              <p className="text-lg text-gray-600">
                {config.description}
              </p>
            </div>
            <div className="text-black">
              <ContactFormComponent />
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default ContactForm;
