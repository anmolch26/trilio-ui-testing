import React from "react";
import PageLayout from "@/components/theme/PageLayout";
import ThemeSection from "@/components/theme/ThemeSection";
import Seo from "@/components/Seo";

const TermsOfUse = () => {
  return (
    <PageLayout backgroundClass="bg-white">
      <Seo
        title="Terms of Use | Trilio.ai"
        description="Read Trilio's Terms of Use. Understand the rules and regulations for using our AI-powered ecommerce analytics platform."
        canonical="/terms-of-use"
      />
      <ThemeSection background="white" padding="xl" className="pt-36">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of Use
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Terms Content */}
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg mb-8">
              Welcome to Trilio.ai. By accessing or using our platform, you agree to be bound by these Terms of Use.
              Please read them carefully before using our services.
            </p>

            <div className="space-y-8">
              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing and using Trilio.ai, you accept and agree to be bound by the terms and provision of this agreement.
                  If you do not agree to these Terms of Use, please do not use our services.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Use of Service
                </h2>
                <p className="mb-3">You agree to use Trilio.ai only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the service in any way that violates any applicable federal, state, local, or international law or regulation.</li>
                  <li>Attempt to gain unauthorized access to any portion of the service or any systems or networks connected to the service.</li>
                  <li>Use the service to transmit any viruses, malware, or other malicious code.</li>
                  <li>Interfere with or disrupt the service or servers or networks connected to the service.</li>
                  <li>Reverse engineer, decompile, or disassemble any part of the service.</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Account Registration
                </h2>
                <p>
                  To access certain features of Trilio.ai, you may be required to create an account. You agree to provide accurate,
                  current, and complete information during the registration process and to update such information to keep it accurate,
                  current, and complete. You are responsible for safeguarding your account credentials and for any activities or actions
                  under your account.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Intellectual Property Rights
                </h2>
                <p>
                  The service and its original content, features, and functionality are and will remain the exclusive property of Trilio.ai
                  and its licensors. The service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
                  Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Trilio.ai.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Data and Analytics
                </h2>
                <p>
                  Trilio.ai provides analytics and insights based on data you connect from your ecommerce platforms and other sources.
                  You retain all rights to your data. By using our service, you grant us permission to process and analyze your data
                  to provide you with insights and recommendations. We will not sell or share your data with third parties except as
                  described in our Privacy Policy.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Subscription and Billing
                </h2>
                <p className="mb-3">
                  Certain features of Trilio.ai may require a paid subscription. By subscribing, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pay all applicable fees as described at the time of purchase.</li>
                  <li>Provide current, complete, and accurate billing information.</li>
                  <li>Authorize us to charge your payment method on a recurring basis according to your subscription plan.</li>
                  <li>Subscription fees are non-refundable except as required by law or as explicitly stated in our refund policy.</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Termination
                </h2>
                <p>
                  We may terminate or suspend your account and access to the service immediately, without prior notice or liability,
                  for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use
                  the service will immediately cease. All provisions of the Terms which by their nature should survive termination shall
                  survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Disclaimer of Warranties
                </h2>
                <p>
                  The service is provided on an "AS IS" and "AS AVAILABLE" basis. Trilio.ai makes no warranties, expressed or implied,
                  and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions
                  of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Limitation of Liability
                </h2>
                <p>
                  In no event shall Trilio.ai, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any
                  indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use,
                  goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
                </p>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Changes to Terms
                </h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material,
                  we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change
                  will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective,
                  you agree to be bound by the revised terms.
                </p>
              </section>

              {/* Section 11 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  11. Governing Law
                </h2>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its
                  conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver
                  of those rights.
                </p>
              </section>

              {/* Section 12 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  12. Contact Information
                </h2>
                <p className="mb-3">
                  If you have any questions about these Terms of Use, please contact us:
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
                  By using Trilio.ai, you acknowledge that you have read and understood these Terms of Use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ThemeSection>
    </PageLayout>
  );
};

export default TermsOfUse;

