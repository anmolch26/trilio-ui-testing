import React, { Suspense, lazy } from "react";
import PageLayout from "@/components/theme/PageLayout";
import Navbar from "@/components/NavBar";
import LegacyFooter from "@/components/LegacyFooter";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import RouteCanonical from "@/components/RouteCanonical";

const AnimatedParticles = lazy(() => import("@/components/AnimatedParticles"));
const SpaceBackgroundAnimation = lazy(() => import("@/components/SpaceBackgroundAnimations"));

const formSchema = z.object({
  firstName: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  gmv: z.string().min(1, "Please select your GMV range"),
});

type FormData = z.infer<typeof formSchema>;

const WaitlistForm: React.FC = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [selectedGMV, setSelectedGMV] = React.useState("");
  const [dropdownDirection, setDropdownDirection] = React.useState<'down' | 'up'>('down');
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
      company: "",
      gmv: "",
    },
  });

  // Function to calculate dropdown direction
  const calculateDropdownDirection = () => {
    if (!buttonRef.current) return 'down';
    
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const dropdownHeight = 240; // Approximate height of dropdown with 6 options
    
    // Check if there's enough space below
    const spaceBelow = viewportHeight - buttonRect.bottom;
    
    // If not enough space below, open upward
    if (spaceBelow < dropdownHeight && buttonRect.top > dropdownHeight) {
      return 'up';
    }
    
    return 'down';
  };

  // Handle dropdown toggle with direction calculation
  const handleDropdownToggle = () => {
    if (!isDropdownOpen) {
      setDropdownDirection(calculateDropdownDirection());
    }
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const onSubmit = async (values: FormData) => {
    setIsLoading(true);
    try {
      const payload = {
        full_name: values.firstName,
        email: values.email,
        company_name: values.company,
        ecommerce_revenue: values.gmv,
        type: "waitlist",
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

      toast({
        title: "Welcome to the waitlist!",
        description: "We'll notify you when Trilio is ready for you.",
      });
      form.reset();
    } catch (error) {
      console.error("Waitlist submission error:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      <Navbar />
      
      <main className="flex-1 animated-teal-bg flex items-center justify-center px-4 relative overflow-hidden py-24 md:py-32">
        {/* Animated Particles and Space Background */}
        <Suspense fallback={null}>
          <SpaceBackgroundAnimation />
          <AnimatedParticles showAnimation={true} />
        </Suspense>
        
        {/* Animated background element */}
        <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] opacity-20 blur-3xl rounded-full animate-teal-shift" style={{
          background: 'linear-gradient(135deg, #3dccc7, #68d8d6, #9ceaef, #c4fff9)'
        }}></div>
        {/* Darken teal overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/55 via-teal-800/45 to-teal-900/65 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-teal-950/40 via-transparent to-teal-950/40 pointer-events-none"></div>
        
        <div className="max-w-6xl lg:max-w-7xl mx-auto text-center relative z-10 px-4 sm:px-6">
          {/* Badge */}
         

          <h1 className="section-title text-5xl md:text-7xl leading-tight opacity-0 animate-fade-in text-white pb-6" style={{ animationDelay: "0.3s" }}>
            The World's First<br />
            End-to-End E-commerce Analytics Platform
              </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl lg:max-w-5xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            Most analytics tools show you what happened. Trilio shows you what to do next. Get real-time insights that directly impact your bottom line - without drowning in dashboards.
          </p>

          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-3xl mx-auto mb-8 opacity-0 animate-fade-in space-y-4" style={{ animationDelay: "0.7s" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name"
                {...form.register("firstName")}
                className="px-6 py-4 text-lg rounded-2xl border border-white/30 bg-white/10 backdrop-blur-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                required
              />
              <input
                type="text"
                placeholder="Company"
                {...form.register("company")}
                className="px-6 py-4 text-lg rounded-2xl border border-white/30 bg-white/10 backdrop-blur-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                required
                    />
                  </div>

            <input
                            type="email"
              placeholder="Email address"
              {...form.register("email")}
              className="w-full px-6 py-4 text-lg rounded-2xl border border-white/30 bg-white/10 backdrop-blur-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
              required
            />
            
            <div className="relative" ref={dropdownRef}>
              {/* Custom Dropdown Button */}
              <button
                ref={buttonRef}
                type="button"
                onClick={handleDropdownToggle}
                className="w-full px-4 py-3 text-base rounded-xl border border-white/30 bg-white/10 backdrop-blur-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 text-left flex items-center justify-between"
              >
                <span className={selectedGMV ? "text-white" : "text-white/70"}>
                  {selectedGMV || "Select your GMV range"}
                </span>
                <svg 
                  className={`w-4 h-4 text-white/70 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Custom Dropdown Menu */}
              {isDropdownOpen && (
                <div className={`absolute left-0 right-0 bg-gray-900 border border-white/20 rounded-lg shadow-lg z-[9999] overflow-hidden ${
                  dropdownDirection === 'up' 
                    ? 'bottom-full mb-1' 
                    : 'top-full mt-1'
                }`}>
                  {[
                    { value: "0-100k", label: "$0 - $100K" },
                    { value: "100k-500k", label: "$100K - $500K" },
                    { value: "500k-1m", label: "$500K - $1M" },
                    { value: "1m-5m", label: "$1M - $5M" },
                    { value: "5m-10m", label: "$5M - $10M" },
                    { value: "10m+", label: "$10M+" }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setSelectedGMV(option.label);
                        form.setValue("gmv", option.value);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-3 py-1.5 text-left text-xs text-white hover:bg-white/10 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Hidden input for form validation */}
              <input
                type="hidden"
                {...form.register("gmv")}
                value={selectedGMV ? form.getValues("gmv") : ""}
              />
            </div>
            
            <button
                    type="submit"
                    disabled={isLoading}
              className="w-full px-8 py-4 bg-white text-teal-600 text-lg font-semibold rounded-2xl hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
              {isLoading ? "Joining..." : "Submit"}
            </button>
                </form>

         
        </div>
      </main>

      <LegacyFooter />
    </div>
  );
};

export default WaitlistForm;
