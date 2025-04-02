import React from 'react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-semibold text-black">Privacy Policy</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              InvictusData Inc., ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard the personal information you provide through our website, particularly when applying for jobs or submitting job postings. By using our website, you agree to the terms outlined in this policy. If you do not agree with this Privacy Policy, please do not use our services or submit any personal information.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-black">1. Information We Collect</h3>
            <p className="text-gray-600 mb-4">We collect the following types of personal information through our website:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="text-gray-600 mb-2">Job Applications: When you apply for a job with us, we may collect personal details such as your name, email address, phone number, resume/CV, educational background, work experience, and any other information you provide during the application process.</li>
              <li className="text-gray-600 mb-2">Job Postings: If you submit a job posting or create a job listing, we may collect details about your company, position details, contact information, and other relevant data necessary for posting or managing job openings.</li>
              <li className="text-gray-600 mb-2">Website Interaction: We may also collect non-personal information related to your visit, including IP address, browser type, pages viewed, and time spent on the site, for the purpose of improving our website and services.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-black">2. How We Use Your Information</h3>
            <p className="text-gray-600 mb-4">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="text-gray-600 mb-2">Job Applications: To assess your qualifications and suitability for the job you have applied for.</li>
              <li className="text-gray-600 mb-2">Job Postings: To facilitate the creation and management of job postings submitted through our website.</li>
              <li className="text-gray-600 mb-2">Communication: To contact you regarding job applications, job postings, or other inquiries you may have.</li>
              <li className="text-gray-600 mb-2">Website Improvement: To enhance the user experience and functionality of our website.</li>
              <li className="text-gray-600 mb-2">Legal and Compliance: To comply with legal obligations and resolve any disputes.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-black">3. How We Protect Your Information</h3>
            <p className="text-gray-600 mb-4">
              We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. This includes implementing industry-standard security measures to protect the data you provide on our website.
            </p>
            <p className="text-gray-600 mb-4">
              However, please note that no method of data transmission over the internet is 100% secure, and we cannot guarantee the absolute security of your information.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-black">4. Sharing Your Information</h3>
            <p className="text-gray-600 mb-4">We will not share your personal information with third parties unless:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="text-gray-600 mb-2">With Service Providers: We may share your information with trusted third-party service providers who assist in the operation of our website or job application process.</li>
              <li className="text-gray-600 mb-2">Legal Requirements: We may disclose your information if required by law, such as complying with a subpoena, legal process, or government investigation.</li>
              <li className="text-gray-600 mb-2">With Your Consent: We may share your information with others only if you have explicitly consented to it.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-black">5. Your Rights</h3>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="text-gray-600 mb-2">Access: Request access to the personal information we hold about you.</li>
              <li className="text-gray-600 mb-2">Correction: Request correction of any inaccurate or incomplete personal information.</li>
              <li className="text-gray-600 mb-2">Deletion: Request deletion of your personal information, subject to applicable legal obligations.</li>
              <li className="text-gray-600 mb-2">Opt-out: You may choose to opt-out of marketing communications by following the unsubscribe instructions in the emails we send or contacting us directly.</li>
            </ul>
            <p className="text-gray-600 mb-4">
              If you wish to exercise any of these rights, please contact us at careers@invictusdata.ai.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-black">6. Cookies</h3>
            <p className="text-gray-600 mb-4">
              Our website uses cookies to improve your experience. Cookies are small data files placed on your device that help us analyze website traffic and personalize content. You can manage or disable cookies through your browser settings, but this may impact your ability to use some features of the website.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-black">7. Third-Party Links</h3>
            <p className="text-gray-600 mb-4">
              Our website may contain links to third-party sites. These external websites are not under our control, and we are not responsible for their privacy practices or content. We encourage you to review the privacy policies of those third-party websites.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-black">8. Changes to This Privacy Policy</h3>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. Any updates will be posted on this page, and the "Effective Date" at the top of the policy will be revised. We encourage you to periodically review this page for the latest information.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-black">9. Contact Us</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions or concerns regarding this Privacy Policy, or if you would like to exercise your rights regarding your personal data, please contact us at:
            </p>
            <p className="text-gray-600">
              InvictusData Inc.,<br />
              Email: info@invictusdata.ai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
