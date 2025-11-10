import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const IntegrationRequestForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const payload = {
        name: data.name,
        email: data.email,
        message: data.message,
        type: "integration_request",
        recipient_email: "integrations@trilio.ai",
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
        title: "Request Submitted!",
        description:
          "Thank you for your integration request. Our team will get back to you at integrations@trilio.ai within 24 hours.",
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Name *
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
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
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Message *
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about the integration you need..."
                    className="border-gray-300 focus:border-pulse-500 focus:ring-pulse-500 min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            disabled={form.formState.isSubmitting || loading}
          >
            {loading ? "Submitting..." : "Submit Integration Request"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default IntegrationRequestForm;

