import React, { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ChevronRight, ChevronLeft, Check, Brain } from 'lucide-react';

const Survey: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    platforms: '',
    mediaCount: '',
    expansion: '',
    challenges: '',
    timeTasks: [] as string[],
    insightsEase: '3',
    desiredFeatures: [] as string[]
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const platformOptions = ["1–2", "3–5", "6–10", "More than 10"];
  const expansionOptions = ["1–3 months", "3–6 months", "6–9 months", "No current resources"];
  const timeTaskOptions = [
    "Reporting", 
    "Inventory", 
    "Ad performance", 
    "Data consolidation", 
    "Forecasting", 
    "All of the above", 
    "Other"
  ];
  const featureOptions = [
    "Real-time visualization", 
    "AI recommendations", 
    "Inventory forecasting", 
    "Ad spend optimization", 
    "Cross-channel tracking", 
    "Competitor benchmarking", 
    "Other"
  ];
  
  // Define the steps for the survey
  const steps = [
    {
      title: "Basic Information",
      fields: ["name", "email", "role", "platforms"]
    },
    {
      title: "Platform Details",
      fields: ["mediaCount", "expansion"]
    },
    {
      title: "Challenges",
      fields: ["challenges"]
    },
    {
      title: "Time Allocation",
      fields: ["timeTasks"]
    },
    {
      title: "Current Tools",
      fields: ["insightsEase"]
    },
    {
      title: "Desired Features",
      fields: ["desiredFeatures"]
    }
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, arrayName: 'timeTasks' | 'desiredFeatures') => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormData(prev => ({
        ...prev,
        [arrayName]: [...prev[arrayName], value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [arrayName]: prev[arrayName].filter(item => item !== value)
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Only allow submission on the last step
    if (currentStep !== steps.length - 1) {
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // Format data according to API requirements
      const surveyData = {
        full_name: formData.name || "Anonymous",
        email: formData.email,
        current_role: formData.role || "Not specified",
        platforms_managed: formData.platforms,
        media_platforms_managed: parseInt(formData.mediaCount) || 0,
        looking_to_expand: formData.expansion,
        biggest_challenges: formData.challenges,
        time_consuming_tasks: formData.timeTasks,
        extract_insights: parseInt(formData.insightsEase),
        desired_features: formData.desiredFeatures,
        functionalities: formData.desiredFeatures,
        // Sending placeholder values for required fields that aren't in the form
        company_name: "Not specified",
        website: "Not specified",
        ecommerce_revenue: "Not specified"
      };
      
      const response = await fetch('https://staging.channeliq.ai/api/auth/v1/create_survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(surveyData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail ? JSON.stringify(errorData.detail) : 'Failed to submit survey');
      }
      
      console.log('Survey submitted successfully');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting survey:', error);
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const validateCurrentStep = () => {
    const currentFields = steps[currentStep].fields;
    
    // Only email is required
    if (currentFields.includes('email') && !formData.email) {
      return false;
    }
    
    return true;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-channeliq-gray-50 to-background dark:from-background/30 dark:to-background/10 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-channeliq-blue/5 rounded-full -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-channeliq-lightblue/5 rounded-full -z-10 blur-3xl"></div>
      
      {/* Grid pattern overlay for futuristic feel */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 opacity-0 animate-fade-in-up">
          {/* AI-themed badge */}
          <div className="inline-flex items-center bg-channeliq-blue/10 dark:bg-channeliq-blue/20 px-4 py-2 rounded-full mb-4 gap-2">
            <Brain className="w-4 h-4 text-channeliq-blue" />
            <span className="text-sm font-medium text-channeliq-blue">AI-Powered Analytics</span>
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-channeliq-blue to-channeliq-lightblue">
            Help Us Shape the Future of E-Commerce Analytics
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg text-foreground/80 mb-6">
            Your feedback helps us build the tools that address your specific e-commerce challenges.
          </p>
          
          {/* Removed duplicate link from here */}
        </div>
        
        <div className="max-w-2xl mx-auto opacity-0 animate-fade-in-up animate-delay-200">
          {isSubmitted ? (
            <div className="glass-card rounded-2xl p-8 text-center border border-channeliq-blue/20 shadow-lg shadow-channeliq-blue/5">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-channeliq-blue/10 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-channeliq-blue" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
              <p className="text-foreground/80 mb-6">
                Your feedback is invaluable and will help us build a better product for your needs.
              </p>
              <a href="#waitlist" className="btn-primary">
                Join Our Waitlist
              </a>
            </div>
          ) : (
            <div className="glass-card rounded-2xl p-8 border border-channeliq-blue/20 shadow-lg shadow-channeliq-blue/5">
              {/* Progress indicator with glowing effect */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{steps[currentStep].title}</h3>
                  <div className="text-sm text-foreground/70">Step {currentStep + 1} of {steps.length}</div>
                </div>
                <div className="w-full bg-background/50 dark:bg-white/5 rounded-full h-2.5 p-0.5 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-channeliq-blue to-channeliq-lightblue h-1.5 rounded-full shadow-glow" 
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%`, transition: 'width 0.3s ease-in-out' }}
                  ></div>
                </div>
              </div>
              
              {error && (
                <div className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 p-3 rounded-lg mb-4">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Basic Info */}
                {currentStep === 0 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <Label htmlFor="name" className="font-medium">Name (Optional)</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        placeholder="Your name" 
                        className="mt-1 bg-card/50 dark:bg-card/30 border-input/50 focus:border-channeliq-blue"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="font-medium">Business Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        placeholder="your@business.com" 
                        required
                        className="mt-1 bg-card/50 dark:bg-card/30 border-input/50 focus:border-channeliq-blue"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="role" className="font-medium">Current Role</Label>
                      <Input 
                        id="role" 
                        name="role" 
                        value={formData.role} 
                        onChange={handleInputChange} 
                        placeholder="e.g., E-commerce Manager" 
                        className="mt-1 bg-card/50 dark:bg-card/30 border-input/50 focus:border-channeliq-blue"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="platforms" className="font-medium">How many platforms do you manage?</Label>
                      <select 
                        id="platforms" 
                        name="platforms" 
                        value={formData.platforms} 
                        onChange={handleInputChange}
                        className="mt-1 input-field bg-card/50 dark:bg-card/30 border-input/50 focus:border-channeliq-blue"
                      >
                        <option value="" disabled>Select option</option>
                        {platformOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Platform Details */}
                {currentStep === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <Label htmlFor="mediaCount" className="font-medium">How many media platforms do you manage?</Label>
                      <Input 
                        id="mediaCount" 
                        name="mediaCount" 
                        value={formData.mediaCount} 
                        onChange={handleInputChange} 
                        placeholder="e.g., 3" 
                        className="mt-1 bg-card/50 dark:bg-card/30 border-input/50 focus:border-channeliq-blue"
                      />
                      <p className="text-xs text-foreground/70 mt-1">e.g., Meta, Google Ads, Amazon Ads, etc.</p>
                    </div>
                    
                    <div>
                      <Label htmlFor="expansion" className="font-medium">Looking to expand? Expected timeframe?</Label>
                      <select 
                        id="expansion" 
                        name="expansion" 
                        value={formData.expansion} 
                        onChange={handleInputChange}
                        className="mt-1 input-field bg-card/50 dark:bg-card/30 border-input/50 focus:border-channeliq-blue"
                      >
                        <option value="" disabled>Select timeframe</option>
                        {expansionOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Challenges */}
                {currentStep === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <Label htmlFor="challenges" className="font-medium">Biggest daily challenges in your role?</Label>
                      <textarea 
                        id="challenges" 
                        name="challenges" 
                        value={formData.challenges} 
                        onChange={handleInputChange} 
                        placeholder="Tell us about your challenges..."
                        className="mt-1 input-field min-h-[120px] bg-card/50 dark:bg-card/30 border-input/50 focus:border-channeliq-blue"
                      />
                    </div>
                  </div>
                )}
                
                {/* Step 4: Time Tasks */}
                {currentStep === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <Label className="font-medium mb-2 block">Which tasks consume the most time? (Select all that apply)</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                        {timeTaskOptions.map(option => (
                          <div key={option} className="flex items-center space-x-2 bg-card/30 dark:bg-card/20 p-2 rounded-lg hover:bg-card/50 transition-colors">
                            <input 
                              type="checkbox" 
                              id={`task-${option}`}
                              name="timeTasks" 
                              value={option}
                              checked={formData.timeTasks.includes(option)}
                              onChange={(e) => handleCheckboxChange(e, 'timeTasks')}
                              className="rounded border-input/50 text-channeliq-blue focus:ring-channeliq-blue/20"
                            />
                            <Label htmlFor={`task-${option}`} className="cursor-pointer">{option}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Step 5: Insights Ease */}
                {currentStep === 4 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-card/30 dark:bg-card/20 p-4 rounded-lg">
                      <Label htmlFor="insightsEase" className="font-medium mb-4 block">How easily do you extract insights from current tools?</Label>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-foreground/70">Very Difficult</span>
                        <input 
                          type="range" 
                          id="insightsEase" 
                          name="insightsEase" 
                          min="1" 
                          max="5" 
                          value={formData.insightsEase} 
                          onChange={handleInputChange}
                          className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-channeliq-blue"
                        />
                        <span className="text-sm text-foreground/70">Very Easy</span>
                      </div>
                      {/* Visual indicator for the range value */}
                      <div className="flex justify-between mt-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <div 
                            key={num} 
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                              Number(formData.insightsEase) === num 
                                ? 'bg-channeliq-blue text-white' 
                                : 'bg-muted/50 text-foreground/60'
                            }`}
                          >
                            {num}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Step 6: Desired Features */}
                {currentStep === 5 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <Label className="font-medium mb-2 block">What functionalities would you like in your tools? (Select all that apply)</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                        {featureOptions.map(option => (
                          <div key={option} className="flex items-center space-x-2 bg-card/30 dark:bg-card/20 p-2 rounded-lg hover:bg-card/50 transition-colors">
                            <input 
                              type="checkbox" 
                              id={`feature-${option}`}
                              name="desiredFeatures" 
                              value={option}
                              checked={formData.desiredFeatures.includes(option)}
                              onChange={(e) => handleCheckboxChange(e, 'desiredFeatures')}
                              className="rounded border-input/50 text-channeliq-blue focus:ring-channeliq-blue/20"
                            />
                            <Label htmlFor={`feature-${option}`} className="cursor-pointer">{option}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </form>

              {/* Navigation buttons moved outside the form */}
              <div className="flex justify-between pt-4 mt-6">
                {currentStep > 0 && (
                  <button 
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-1 px-4 py-2 border border-input/50 rounded-lg text-foreground/80 bg-card/30 hover:bg-card/50 transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </button>
                )}
                
                <div className="ml-auto">
                  {currentStep < steps.length - 1 ? (
                    <button 
                      type="button"
                      onClick={nextStep}
                      disabled={!validateCurrentStep()}
                      className="flex items-center gap-1 px-6 py-2 bg-gradient-to-r from-channeliq-blue to-channeliq-lightblue text-white rounded-lg hover:opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button 
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="flex items-center gap-1 px-6 py-2 bg-gradient-to-r from-channeliq-blue to-channeliq-lightblue text-white rounded-lg hover:opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit
                          <Check className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
          
          <div className="text-center mt-6">
            <a 
              href="https://forms.google.com/channel-iq-survey" 
              className="text-channeliq-blue hover:underline text-sm flex items-center justify-center gap-1"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Take our full survey on Google Forms
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Survey;

