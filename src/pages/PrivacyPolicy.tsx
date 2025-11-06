import React from "react";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import RouteCanonical from "@/components/RouteCanonical";

const PrivacyPolicy = () => {
  return (
    <PageLayout backgroundClass="bg-white">
      <RouteCanonical path="/privacy-policy" />

      <ThemeSection background="white" padding="xl" className="pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms & Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg mb-8">
              Trilio.ai ("we", "our", or "us") is committed to protecting your
              privacy and providing a secure, reliable analytics platform. By
              using Trilio.ai, you agree to these Terms & Privacy Policy. If
              you do not agree, please do not use our services.
            </p>

            <div className="space-y-8">
              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Information We Collect
                </h2>
                <div className="space-y-3">
                  <p>
                    <strong>Account Registration:</strong> Name, email, password, and other details
                    you provide.
                  </p>
                  <p>
                    <strong>Integrations:</strong> Data from connected platforms (e.g., Amazon,
                    Google, Shopify) as authorized by you.
                  </p>
                  <p>
                    <strong>Usage Data:</strong> IP address, browser type, device info, pages
                    visited, and actions taken within the platform.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, maintain, and improve Trilio.ai services.</li>
                  <li>To generate analytics and reports for your business.</li>
                  <li>To communicate with you about your account, updates, or support.</li>
                  <li>To comply with legal obligations.</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Data Security
                </h2>
                <p>
                  We use industry-standard security measures to protect your
                  data. However, no method of transmission over the internet is
                  100% secure.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Sharing Your Information
                </h2>
                <p className="mb-3">
                  We do not sell your data. We may share your information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With trusted service providers who help operate Trilio.ai.</li>
                  <li>To comply with legal requirements.</li>
                  <li>With your explicit consent.</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Your Rights
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access, update, or delete your account information.</li>
                  <li>Disconnect integrations at any time.</li>
                  <li>Opt out of marketing communications.</li>
                  <li>Contact us at <a href="mailto:support@trilio.ai" className="text-teal-600 hover:text-teal-700 underline">support@trilio.ai</a> to exercise your rights.</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Cookies
                </h2>
                <p>
                  Trilio.ai uses cookies to enhance your experience and analyze
                  usage. You can manage cookies in your browser settings.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Third-Party Links
                </h2>
                <p>
                  Our platform may link to third-party sites. We are not
                  responsible for their privacy practices or content.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Changes to This Policy
                </h2>
                <p>
                  We may update this policy as needed. Updates will be posted
                  here with a revised effective date.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Contact Us
                </h2>
                <p className="mb-3">
                  For questions or concerns, contact:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Trilio.ai</p>
                  <p className="text-gray-700">
                    Email: <a href="mailto:support@trilio.ai" className="text-teal-600 hover:text-teal-700 underline">support@trilio.ai</a>
                  </p>
                </div>
              </section>

              {/* Footer */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-center text-gray-600 font-medium">
                  By continuing, you agree to these Terms & Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default PrivacyPolicy;

