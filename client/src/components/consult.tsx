import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertConsultationSchema, insertNewsletterSchema } from "@shared/schema";
import { useMutation, queryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Mail, Linkedin, Twitter } from "lucide-react";
import CalendarBooking from "./calendar-booking";

const consultationFormSchema = insertConsultationSchema.extend({
  platforms: z.array(z.string()).min(1, "Please select at least one platform"),
});

const newsletterFormSchema = insertNewsletterSchema.extend({
  interests: z.array(z.string()).min(1, "Please select at least one interest"),
});

type ConsultationFormData = z.infer<typeof consultationFormSchema>;
type NewsletterFormData = z.infer<typeof newsletterFormSchema>;

export default function Consult() {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const consultationForm = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      currentSpend: "",
      platforms: [],
      goals: "",
      selectedDate: "",
      selectedTime: "",
    },
  });

  const newsletterForm = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
      interests: [],
    },
  });

  const consultationMutation = useMutation({
    mutationFn: (data: ConsultationFormData) => apiRequest("POST", "/api/consultations", data),
    onSuccess: () => {
      toast({
        title: "Consultation Booked!",
        description: "I'll send you a confirmation email with the meeting details.",
      });
      consultationForm.reset();
      setSelectedDate("");
      setSelectedTime("");
    },
    onError: (error: Error) => {
      toast({
        title: "Booking Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const newsletterMutation = useMutation({
    mutationFn: (data: NewsletterFormData) => apiRequest("POST", "/api/newsletters", data),
    onSuccess: () => {
      toast({
        title: "Successfully Subscribed!",
        description: "You'll receive weekly insights on performance advertising.",
      });
      newsletterForm.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Subscription Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onConsultationSubmit = (data: ConsultationFormData) => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Missing Information",
        description: "Please select a date and time for your consultation.",
        variant: "destructive",
      });
      return;
    }
    
    consultationMutation.mutate({
      ...data,
      selectedDate,
      selectedTime,
    });
  };

  const onNewsletterSubmit = (data: NewsletterFormData) => {
    newsletterMutation.mutate(data);
  };

  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Ready to Scale Your Advertising?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Get a personalized consultation to discuss your advertising goals and create a winning strategy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Consultation Booking */}
          <Card>
            <CardHeader>
              <CardTitle>Book Your Free Consultation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <CalendarBooking
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onDateSelect={setSelectedDate}
                onTimeSelect={setSelectedTime}
              />

              <Form {...consultationForm}>
                <form onSubmit={consultationForm.handleSubmit(onConsultationSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={consultationForm.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={consultationForm.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={consultationForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={consultationForm.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={consultationForm.control}
                    name="currentSpend"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Monthly Ad Spend</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="under-5k">Under $5,000</SelectItem>
                            <SelectItem value="5k-25k">$5,000 - $25,000</SelectItem>
                            <SelectItem value="25k-100k">$25,000 - $100,000</SelectItem>
                            <SelectItem value="over-100k">Over $100,000</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={consultationForm.control}
                    name="platforms"
                    render={() => (
                      <FormItem>
                        <FormLabel>Platforms of Interest</FormLabel>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {[
                            { id: "meta", label: "Meta (FB/IG)" },
                            { id: "tiktok", label: "TikTok" },
                            { id: "reddit", label: "Reddit" },
                          ].map((platform) => (
                            <FormField
                              key={platform.id}
                              control={consultationForm.control}
                              name="platforms"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(platform.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, platform.id])
                                          : field.onChange(
                                              field.value?.filter((value) => value !== platform.id)
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal">
                                    {platform.label}
                                  </FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={consultationForm.control}
                    name="goals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What are your main advertising goals?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your business goals and challenges..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={consultationMutation.isPending}
                  >
                    {consultationMutation.isPending ? "Booking..." : "Book Free Consultation"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Newsletter Signup */}
          <Card>
            <CardHeader>
              <CardTitle>Get Weekly Insights</CardTitle>
              <p className="text-neutral-600">
                Subscribe to my newsletter for the latest performance advertising strategies, platform updates, and case studies.
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <Form {...newsletterForm}>
                <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="space-y-6">
                  <FormField
                    control={newsletterForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={newsletterForm.control}
                    name="interests"
                    render={() => (
                      <FormItem>
                        <FormLabel>What interests you most?</FormLabel>
                        <div className="space-y-2">
                          {[
                            { id: "meta", label: "Meta Ads Strategies" },
                            { id: "tiktok", label: "TikTok Marketing Trends" },
                            { id: "reddit", label: "Reddit Advertising Tips" },
                            { id: "general", label: "General Performance Marketing" },
                          ].map((interest) => (
                            <FormField
                              key={interest.id}
                              control={newsletterForm.control}
                              name="interests"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(interest.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, interest.id])
                                          : field.onChange(
                                              field.value?.filter((value) => value !== interest.id)
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal">
                                    {interest.label}
                                  </FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white"
                    size="lg"
                    disabled={newsletterMutation.isPending}
                  >
                    {newsletterMutation.isPending ? "Subscribing..." : "Subscribe to Newsletter"}
                  </Button>
                </form>
              </Form>

              {/* Contact Information */}
              <div className="pt-8 border-t border-neutral-200">
                <h4 className="font-semibold text-neutral-900 mb-4">Other Ways to Connect</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary h-5 w-5" />
                    <span className="text-neutral-700">heidi67west@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-primary h-5 w-5 flex items-center justify-center font-bold text-sm">S</div>
                    <span className="text-neutral-700">Signal: heidiwilliamsfoy.67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-primary h-5 w-5 flex items-center justify-center font-bold text-sm">📍</div>
                    <span className="text-neutral-700">Brooklyn, NY</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
