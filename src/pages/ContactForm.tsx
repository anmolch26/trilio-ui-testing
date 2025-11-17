import React from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/NavBar";
import ContactFormComponent from "@/components/ContactFormComponent";
import Footer from "@/components/Footer";
import PageLayout from "@/components/theme/PageLayout";
import RouteCanonical from "@/components/RouteCanonical";

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
      case "custom-bi-demo":
        return {
          title: "Request a Custom BI Demo",
          description: "Let's discuss your unique KPIs and create a custom dashboard that drives real business decisions."
        };
      case "customer-success":
        return {
          title: "Talk to a Customer Success Expert",
          description: "Let's get your team onboarded and trained to maximize your Trilio investment."
        };
      case "attribution-lab":
        return {
          title: "Launch Attribution Lab",
          description: "Optimize every creative, every SKU, every dollar with granular attribution insights."
        };
      case "partner-program":
        return {
          title: "Apply for Partner Program",
          description: "Join our partner ecosystem and unlock new revenue opportunities with Trilio."
        };
      case "marketing-demo":
        return {
          title: "See Marketing Demo",
          description: "See which channels really drive revenue, not just clicks. Unify your ad and retail analytics."
        };
      case "agency-demo":
        return {
          title: "Book Agency Demo",
          description: "Scale your agency without the chaos. Discover professional client management tools that impress clients and save time."
        };
      case "book-demo":
        return {
          title: "Book a Demo",
          description: "Learn how Trilio can help you achieve similar results. We'll get back to you within 24 hours."
        };
      case "support":
        return {
          title: "Contact Support",
          description: "Our support team is here to help you succeed with Trilio. We'll get back to you within 24 hours."
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
