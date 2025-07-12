import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Rocket, Users, TrendingUp, GraduationCap } from "lucide-react";
import profilePhoto from "@assets/profile-photo.jpg";

export default function About() {
  const stats = [
    { value: "$33M+", label: "Revenue Generated" },
    { value: "25%", label: "Q2 Goal Increase" },
    { value: "$2.3M+", label: "Major Client Wins" },
  ];

  const expertise = [
    "Technical Solutions & Implementation",
    "Revenue Generation & Client Success",
    "Cross-Functional Team Leadership",
    "Data Analysis & Dashboard Building",
    "API Integration & Backend Solutions",
    "Campaign Management & Optimization",
  ];

  const timeline = [
    {
      year: "2023 - Present",
      title: "Technical Solutions Consultant at TikTok",
      description: "Delivered $32M in revenue for Apparel vertical in Q1. Led data cleaning and dashboard initiatives achieving best-in-class metrics.",
      icon: Rocket,
      color: "bg-primary"
    },
    {
      year: "2021 - 2023",
      title: "Customer Success Engineer II at Reddit",
      description: "Led technical implementation of Reddit pixel and ads API. Launched high-profile campaigns for Samsung and Disney+ generating $825k in premiere weekend revenue.",
      icon: Users,
      color: "bg-secondary"
    },
    {
      year: "2019 - 2020",
      title: "Senior Technical Account Manager at Applicaster",
      description: "Managed enterprise client engagements for mobile app migrations. Launched SportsMax streaming app with 200k+ installs and 120k average MAU.",
      icon: TrendingUp,
      color: "bg-accent"
    },
    {
      year: "2015 - 2019",
      title: "Sales Engineer at JW Player",
      description: "Collaborated with sales teams securing six-figure deals from Walmart, Cisco Systems, MongoDB, Hearst, and Fox Sports. Drove revenue expansion up to 20x.",
      icon: GraduationCap,
      color: "bg-neutral-400"
    }
  ];

  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <img 
                src={profilePhoto} 
                alt="Heidi Williams-Foy - Performance Advertising Consultant" 
                className="w-64 h-64 rounded-lg object-cover shadow-lg mx-auto lg:mx-0"
              />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              About Heidi Williams-Foy
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              Highly competent technical solutions leader and web developer with a track record of driving client success, technical implementation, and revenue generation. Adept at managing complex projects and collaborating with cross-functional teams.
            </p>
            <p className="text-lg text-neutral-600 mb-8">
              I bring energy and a positive attitude to everything I do, using strong communication skills to bridge the gap between technical and non-technical stakeholders. Committed to helping clients succeed by leveraging a strong technical background and considerable problem-solving abilities.
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

          <div className="relative flex justify-center">
            {/* Certification badges - now standalone */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Certifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="font-medium text-neutral-700">Meta Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <span className="font-medium text-neutral-700">Google Ads Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
                    <span className="font-medium text-neutral-700">TikTok Marketing Partner</span>
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
