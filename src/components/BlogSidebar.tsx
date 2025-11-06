import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

interface BlogSidebarProps {
  blogTitle?: string;
  blogUrl?: string;
}

export const BlogSidebar: React.FC<BlogSidebarProps> = ({ blogTitle = "", blogUrl = "" }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
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
    <div className="space-y-6">
      {/* Share with your community */}
      <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-6 text-white shadow-xl border border-teal-400/20">
        <h3 className="text-xl font-semibold mb-5 text-center whitespace-nowrap">Follow us</h3>
        <div className="flex gap-4 justify-center">
          <a
            href="https://www.linkedin.com/company/trilio-ai/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200 hover:scale-110"
            aria-label="LinkedIn"
          >
            <img
              src="https://assets.channeliq.ai/sidebar/icons8-linkedin-50.png"
              alt="LinkedIn"
              className="w-8 h-8 object-contain"
              loading="lazy"
            />
          </a>
          <a
            href="https://x.com/trilioai"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200 hover:scale-110"
            aria-label="X (Twitter)"
          >
            <img
              src="https://assets.channeliq.ai/sidebar/Twitter(X).png"
              alt="X (Twitter)"
              className="w-8 h-8 object-contain"
              loading="lazy"
            />
          </a>
          <a
            href="https://www.youtube.com/@user-trilio"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200 hover:scale-110"
            aria-label="YouTube"
          >
            <img
              src="https://assets.channeliq.ai/sidebar/youtube-logo-2431.png"
              alt="YouTube"
              className="w-8 h-8 object-contain"
              loading="lazy"
            />
          </a>
        </div>
      </div>

      {/* Subscribe to newsletter */}
      <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-6 text-white shadow-xl border border-teal-400/20">
        <h3 className="text-xl font-semibold mb-5">Subscribe to our newsletter</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white text-gray-900 placeholder:text-gray-500 border-0 focus-visible:ring-2 focus-visible:ring-white h-12 rounded-lg"
          />
          <Button
            type="submit"
            disabled={isSubmitting || submitted}
            className="w-full bg-white text-teal-600 hover:bg-white/95 font-bold h-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
          >
            {submitted ? "Subscribed! ✓" : isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </div>
  );
};

