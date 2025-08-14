import React from "react";
import Navbar from "@/components/NavBar";
import ContactFormComponent from "@/components/ContactFormComponent";
import Footer from "@/components/Footer";
import PageLayout from "@/components/theme/PageLayout";

const ContactForm = () => {
  return (
    <PageLayout>
      <main className="pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Get Your Demo
              </h1>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you within 24
                hours.
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
