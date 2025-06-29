import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Rocket, Users, TrendingUp, GraduationCap } from "lucide-react";

export default function About() {
  const stats = [
    { value: "$50M+", label: "Ad Spend Managed" },
    { value: "200+", label: "Clients Helped" },
    { value: "250%", label: "Avg ROI Increase" },
  ];

  const expertise = [
    "Performance Marketing Strategy",
    "Cross-Platform Attribution",
    "Creative Testing & Optimization",
    "Audience Development",
    "Conversion Rate Optimization",
    "Marketing Analytics & Reporting",
  ];

  const timeline = [
    {
      year: "2024 - Present",
      title: "Independent Performance Ads Consultant",
      description: "Helping businesses scale with strategic advertising across Meta, TikTok, and Reddit platforms.",
      icon: Rocket,
      color: "bg-primary"
    },
    {
      year: "2020 - 2024",
      title: "Senior Growth Marketing Manager at TechCorp",
      description: "Led performance marketing for a $100M+ SaaS company, managing $2M+ monthly ad spend.",
      icon: Users,
      color: "bg-secondary"
    },
    {
      year: "2018 - 2020",
      title: "Digital Marketing Specialist at GrowthAgency",
      description: "Managed multi-platform campaigns for 50+ e-commerce and B2B clients.",
      icon: TrendingUp,
      color: "bg-accent"
    },
    {
      year: "2016 - 2018",
      title: "Started in Digital Marketing",
      description: "Began journey in performance marketing with small business campaigns and continuous learning.",
      icon: GraduationCap,
      color: "bg-neutral-400"
    }
  ];

  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              About Your Performance Ads Expert
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              With 8+ years in performance marketing, I've managed over $50M in ad spend across Meta, TikTok, and Reddit, helping businesses scale from startup to enterprise level.
            </p>
            <p className="text-lg text-neutral-600 mb-8">
              My approach combines data-driven strategy with creative excellence, ensuring every dollar spent contributes to meaningful business growth. I specialize in navigating the complexities of modern digital advertising while maintaining profitability at scale.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Expertise Areas */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-900">Core Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {expertise.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <span className="text-neutral-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
              alt="Professional headshot of performance ads consultant"
              className="rounded-2xl shadow-2xl w-full"
            />
            
            {/* Certification badges */}
            <Card className="absolute -bottom-6 -right-6 shadow-lg">
              <CardContent className="p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="font-medium">Meta Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="font-medium">Google Ads Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span className="font-medium">TikTok Marketing Partner</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-neutral-900 mb-12 text-center">Professional Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`flex-shrink-0 w-12 h-12 ${item.color} rounded-full flex items-center justify-center`}>
                    <item.icon className="text-white h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <div className="text-sm text-neutral-500">{item.year}</div>
                    <div className="text-lg font-semibold text-neutral-900">{item.title}</div>
                    <div className="text-neutral-600">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
