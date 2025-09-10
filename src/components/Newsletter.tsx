import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        email: email,
        type: "newsletter",
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
        throw new Error("Failed to subscribe. Please try again later.");
      }

      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive updates about Trilio.ai soon.",
      });
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="newsletter" className="py-8">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
          <div className="inline-flex items-center px-8 py-2 rounded-full text-base font-bold text-white border border-white/30 backdrop-blur-xl bg-white/5 shadow-lg shadow-white/10 hover:bg-white/10 transition-all duration-300">
            <span className="font-display tracking-wide">
            Newsletter
            </span>
          </div>
          </div>

          <h2 className="text-5xl font-display font-bold mb-4 text-left">
            Join leading Brands on Trilio.ai
          </h2>
          <p className="text-xl mb-10 text-left text-teal-100">
            Get product updates, case studies & industry reports delivered to
            your inbox
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 items-start md:items-center"
          >
            <div className="relative flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700 text-xs sm:text-sm lg:text-base"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm lg:text-base font-medium transition-colors cursor-pointer hover:opacity-90 active:scale-95 md:ml-4"
              style={{ backgroundColor: "#01b5af" }}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
