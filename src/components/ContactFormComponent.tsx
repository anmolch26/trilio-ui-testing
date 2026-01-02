import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  website: z.string().trim().optional().or(z.literal("")),
  monthlyRevenue: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormComponentProps {
  formType?: string;
  formTitle?: string;
}

const revenueOptions = [
  { value: "less-than-1m", label: "Less than $1M" },
  { value: "1m-10m", label: "$1M-$10M" },
  { value: "10m-25m", label: "$10M-$25M" },
  { value: "25m-50m", label: "$25M-$50M" },
  { value: "50m-plus", label: "$50M+" },
];

const ContactFormComponent = ({ formType, formTitle }: ContactFormComponentProps = {}) => {
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      website: "",
      monthlyRevenue: "",
    },
  });

  const revenueMap: Record<string, string> = {
    "less-than-1m": "Less than $1M",
    "1m-10m": "$1M-$10M",
    "10m-25m": "$10M-$25M",
    "25m-50m": "$25M-$50M",
    "50m-plus": "$50M+",
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      // Capture current page URL
      const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

      const payload = {
        full_name: data.fullName,
        email: data.email,
        company_name: data.company,
        ecommerce_revenue: data.monthlyRevenue
          ? revenueMap[data.monthlyRevenue]
          : undefined,
        website: data.website || undefined,
        form_name: formType || 'default',
        page_url: pageUrl,
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
        title: "Form Submitted!",
        description:
          "Thank you for your interest. We'll get back to you within 24 hours.",
      });
      form.reset();
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Full Name *
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    className="border-gray-300 focus:border-pulse-500 focus:ring-pulse-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Email Address *
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="border-gray-300 focus:border-pulse-500 focus:ring-pulse-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Company Name *
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your company name"
                    className="border-gray-300 focus:border-pulse-500 focus:ring-pulse-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Website
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="https://yourcompany.com"
                    className="border-gray-300 focus:border-pulse-500 focus:ring-pulse-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="monthlyRevenue"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Monthly E-Commerce Revenue
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="border-gray-300 focus:border-pulse-500 focus:ring-pulse-500">
                      <SelectValue placeholder="Select revenue range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {revenueOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            disabled={form.formState.isSubmitting || loading}
          >
            {loading ? "Submitting..." : "Submit Demo Request"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactFormComponent;
