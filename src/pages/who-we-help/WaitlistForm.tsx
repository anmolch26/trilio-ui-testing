import React from "react";
import PageLayout from "@/components/theme/PageLayout";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  website: z.string().trim().optional().or(z.literal("")),
  phone: z.string().trim().optional().or(z.literal("")),
  gmv: z.string().min(1, "Please select GMV"),
});

type FormData = z.infer<typeof formSchema>;

const gmvOptions = [
  { value: "less-than-1m", label: "Less than $1M" },
  { value: "1m-10m", label: "$1M-$10M" },
  { value: "10m-25m", label: "$10M-$25M" },
  { value: "25m-50m", label: "$25M-$50M" },
  { value: "50m-plus", label: "$50M+" },
];

const WaitlistForm: React.FC = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      website: "",
      phone: "",
      gmv: "",
    },
  });

  const onSubmit = async (values: FormData) => {
    setIsLoading(true);
    try {
      const payload = {
        full_name: `${values.firstName} ${values.lastName}`,
        email: values.email,
        company_name: values.company,
        phone_number: values.phone || undefined,
        website: values.website || undefined,
        ecommerce_revenue: values.gmv || undefined,
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
        title: "Form Submitted!",
        description: "Thanks! We'll reach out within 24 hours.",
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
    <PageLayout>
      <main className="pt-14 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Join the Waitlist
              </h1>
              <p className="text-gray-600">
                Tell us a bit about you. We’ll get back within 24 hours.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-black">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">
                            First name <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter first name"
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
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">
                            Last name <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter last name"
                              className="border-gray-300 focus:border-pulse-500 focus:ring-pulse-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">
                          Email <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter email address"
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
                          Company <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter company name"
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
                          Website <span className="text-red-500">*</span>
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
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">
                          Phone number
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="e.g. +1 555 123 4567"
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
                    name="gmv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">
                          GMV <span className="text-red-500">*</span>
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="border-gray-300 focus:border-pulse-500 focus:ring-pulse-500">
                              <SelectValue placeholder="Select GMV range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {gmvOptions.map((opt) => (
                              <SelectItem key={opt.value} value={opt.value}>
                                {opt.label}
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
                    disabled={isLoading}
                    className="w-full bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-2.5 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default WaitlistForm;
