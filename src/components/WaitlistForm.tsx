import React, { useState } from 'react';
import { Check } from 'lucide-react';

const WaitlistForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    monthlyRevenue: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apiError, setApiError] = useState('');
  
  // Updated revenue ranges
  const revenueRanges = [
    "Less than $100K",
    "$100K to $500K",
    "$500K to $1M",
    "$1M to $5M",
    "$5M+"
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formState.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    setApiError('');
    
    try {
      // Format data according to API requirements
      const waitlistData = {
        full_name: formState.name,
        email: formState.email,
        company_name: formState.company,
        website: formState.website || "Not specified",
        ecommerce_revenue: formState.monthlyRevenue || "Not specified"
      };
      
      const response = await fetch('https://staging.channeliq.ai/api/auth/v1/create_waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(waitlistData),
      });
      
      const responseData = await response.json();
      
      if (!response.ok) {
        // Check for REGISTERED_USER status code
        if (responseData.status_code === "REGISTERED_USER") {
          throw new Error('This email is already registered. Please use a different email address or try logging in.');
        }
        
        // Check if the error is due to email already being registered (previous check)
        if (responseData.detail && 
            Array.isArray(responseData.detail) && 
            responseData.detail.some((error: any) => 
              error.msg && error.msg.toLowerCase().includes('email already registered'))) {
          throw new Error('This email is already registered on our waitlist. Please use a different email address.');
        }
        
        throw new Error(responseData.message || 'Failed to join waitlist');
      }
      
      console.log('Waitlist submission successful');
      setIsSubmitted(true);
      
      setFormState({
        name: '',
        email: '',
        company: '',
        website: '',
        monthlyRevenue: ''
      });
    } catch (error) {
      console.error('Error submitting waitlist form:', error);
      setApiError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-96 h-96 bg-channeliq-lightblue/20 rounded-full -z-10 blur-3xl"></div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in-up">
          <div className="inline-block bg-channeliq-blue/10 px-3 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-channeliq-blue">Exclusive Access</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Beta Waitlist
          </h2>
          <p className="text-lg text-foreground/80">
            Launching soon for selected brands — be among the first to experience AI-driven e-commerce optimization.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="glass-card rounded-2xl p-10 text-center opacity-0 animate-fade-in-up border border-channeliq-blue/20 shadow-lg shadow-channeliq-blue/5">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mx-auto flex items-center justify-center mb-6">
                <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Thank You for Joining!</h3>
              <p className="text-foreground/80 mb-6">
                You've been added to our exclusive beta waitlist. We'll be in touch soon with more details about early access to Channel IQ.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)} 
                className="btn-secondary"
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 shadow-xl opacity-0 animate-fade-in-up border border-channeliq-blue/20">
              {apiError && (
                <div className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 p-3 rounded-lg mb-4">
                  {apiError}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/90">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`input-field bg-card/50 dark:bg-card/30 border-input/50 focus:border-channeliq-blue ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/90">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`input-field bg-card/50 dark:bg-card/30 border-input/50 focus:border-channeliq-blue ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium text-foreground/90">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className={`input-field bg-card/50 dark:bg-card/30 border-input/50 focus:border-channeliq-blue ${errors.company ? 'border-red-500' : ''}`}
                    placeholder="Your Company"
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="website" className="block text-sm font-medium text-foreground/90">
                    Website (Optional)
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formState.website}
                    onChange={handleChange}
                    className="input-field bg-card/50 dark:bg-card/30 border-input/50 focus:border-channeliq-blue"
                    placeholder="https://example.com"
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="monthlyRevenue" className="block text-sm font-medium text-foreground/90">
                    Monthly E-Commerce Revenue (Optional)
                  </label>
                  <select
                    id="monthlyRevenue"
                    name="monthlyRevenue"
                    value={formState.monthlyRevenue}
                    onChange={handleChange}
                    className="input-field bg-card/50 dark:bg-card/30 border-input/50 focus:border-channeliq-blue"
                    style={{ color: "inherit" }} // Ensures text is visible in both themes
                  >
                    <option value="" disabled className="text-foreground">Select a range</option>
                    {revenueRanges.map((range) => (
                      <option key={range} value={range} className="text-foreground">{range}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Join Waitlist'
                  )}
                </button>
              </div>
              
              <p className="text-sm text-foreground/70 mt-4 text-center">
                We respect your privacy and will never share your information.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
