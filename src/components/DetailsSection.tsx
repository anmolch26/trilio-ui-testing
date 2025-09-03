import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const DetailsSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.company) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        full_name: formData.fullName,
        email: formData.email,
        company_name: formData.company,
        phone_number: formData.phoneNumber || undefined,
      };
      const response = await fetch(
        "https://staging.trilio.ai/api/auth/v1/create_waitlist",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to submit. Please try again later.");
      }
      toast.success("Demo request submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phoneNumber: "",
      });
    } catch (error: unknown) {
      let message = "An error occurred. Please try again.";
      if (error instanceof Error) {
        message = error.message;
      }
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="how-it-works" className="w-full  py-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
          {/* Left Card - How It Works */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-white">
            <div
              className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end"
              style={{
                background:
                  "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="inline-block px-4 sm:px-6 py-2 border border-white text-white rounded-full text-xs mb-4 absolute top-6 left-6">
                Join waitlist
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold">
                How it works
              </h2>
            </div>

            <div className="bg-white p-6 sm:p-8 min-h-[400px] flex flex-col">
              <div className="space-y-5 flex-1">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <span className="font-semibold text-sm block mb-2 text-gray-900">
                        Connect Your Data
                      </span>
                      <p className="text-xs text-gray-600">
                        Link Shopify, Amazon, ad platforms, Klaviyo, and more in
                        minutes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <span className="font-semibold text-sm block mb-2 text-gray-900">
                        Generate AI Reports
                      </span>
                      <p className="text-xs text-gray-600">
                        Our AI analyzes your data and creates custom insights
                        automatically
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <span className="font-semibold text-sm block mb-2 text-gray-900">
                        Optimize & Scale
                      </span>
                      <p className="text-xs text-gray-600">
                        Act on actionable insights to improve ROAS and grow
                        revenue
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  className="inline-block px-6 py-3 text-white font-semibold rounded-xl shadow-lg cursor-pointer text-center"
                  style={{ backgroundColor: "#06beb8" }}
                  onClick={() => {
                    navigate("/resources/getting-started");
                    window.scrollTo(0, 0);
                  }}
                >
                  Three simple steps to ecommerce intelligence
                </button>
              </div>
            </div>
          </div>

          {/* Right Card - Demo Request Form */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-white">
            <div
              className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start"
              style={{
                background:
                  "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="inline-block px-4 sm:px-6 py-2 border border-white text-white rounded-full text-xs mb-4 absolute top-6 left-6">
                Get your demo
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                See Trilio in action
              </h2>
            </div>

            <div className="bg-white p-6 sm:p-8 min-h-[400px] flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full name *"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address *"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company *"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone number (optional)"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  />
                </div>

                <div className="pt-2 flex justify-center">
                  <button
                    type="submit"
                    className="inline-block px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-xl transition-colors duration-300"
                    style={{ minWidth: "430px" }}
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Get My Demo"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
