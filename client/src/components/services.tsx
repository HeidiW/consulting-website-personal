import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { SiMeta, SiTiktok, SiReddit } from "react-icons/si";

export default function Services() {
  const services = [
    {
      icon: SiMeta,
      title: "Meta Ads",
      description: "Facebook & Instagram advertising optimization with advanced targeting and creative strategies.",
      features: [
        "Advanced Audience Targeting",
        "Creative Testing & Optimization",
        "Conversion API Setup"
      ],
      color: "text-primary",
      bgColor: "bg-neutral-50"
    },
    {
      icon: SiTiktok,
      title: "TikTok Ads",
      description: "Cutting-edge TikTok advertising with viral content strategies and performance optimization.",
      features: [
        "Viral Content Creation",
        "Generation Z Targeting",
        "Spark Ads Optimization"
      ],
      color: "text-accent",
      bgColor: "bg-neutral-100"
    },
    {
      icon: SiReddit,
      title: "Reddit Ads",
      description: "Strategic Reddit advertising that respects community culture while driving conversions.",
      features: [
        "Community-First Approach",
        "Subreddit Targeting",
        "Native Ad Formats"
      ],
      color: "text-neutral-600",
      bgColor: "bg-neutral-200"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Expertise Across Leading Platforms
        </h2>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          Specialized knowledge in the three most effective advertising platforms for performance marketing
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className={`${service.color} text-2xl`} />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">{service.title}</h3>
              <p className="text-neutral-600 mb-6">{service.description}</p>
              <ul className="space-y-2 text-sm text-neutral-600">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="text-green-500 h-4 w-4" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
