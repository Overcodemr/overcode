
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Smartphone, Globe, Monitor, Rocket, Server, Mail } from "lucide-react";

const Services = () => {
  const [openService, setOpenService] = useState<number | null>(null);
  
  const services = [
    {
      title: "Mobile Apps Development",
      description: "Native iOS and Android applications built with cutting-edge technologies and optimized performance.",
      expandedDescription: "We develop high-performance native mobile applications for both iOS and Android platforms. Using Swift, Kotlin, React Native, and Flutter, we create user-friendly apps with seamless functionality. Our mobile solutions include e-commerce apps, social platforms, productivity tools, and enterprise applications with offline capabilities, push notifications, and third-party integrations.",
      icon: (
        <Smartphone size={24} className="text-primary" />
      )
    },
    {
      title: "Website Development",
      description: "Modern, responsive websites and web applications that deliver exceptional user experiences.",
      expandedDescription: "Create stunning, fast-loading websites using the latest web technologies including React, Next.js, Vue.js, and Angular. We build everything from corporate websites and e-commerce platforms to complex web applications with real-time features, payment integrations, and advanced analytics. All our websites are fully responsive, SEO-optimized, and accessibility compliant.",
      icon: (
        <Globe size={24} className="text-primary" />
      )
    },
    {
      title: "Desktop Applications",
      description: "Cross-platform desktop software solutions for Windows, macOS, and Linux operating systems.",
      expandedDescription: "Develop powerful desktop applications using Electron, .NET, Java, and native technologies. Our desktop solutions include business management software, creative tools, system utilities, and enterprise applications. We ensure optimal performance, intuitive user interfaces, and seamless integration with operating system features like file systems, notifications, and hardware access.",
      icon: (
        <Monitor size={24} className="text-primary" />
      )
    },
    {
      title: "App Publishing Services",
      description: "Complete app store optimization and publishing assistance for maximum visibility and downloads.",
      expandedDescription: "Navigate the complex app publishing process with our expert guidance. We handle App Store and Google Play submissions, create compelling app descriptions, design eye-catching screenshots and icons, implement ASO strategies, manage app reviews and updates, and provide ongoing marketing support to maximize your app's success in the marketplace.",
      icon: (
        <Rocket size={24} className="text-primary" />
      )
    },
    {
      title: "Web Hosting Solutions",
      description: "Reliable, scalable hosting infrastructure with 99.9% uptime guarantee and 24/7 support.",
      expandedDescription: "Professional hosting solutions including shared hosting, VPS, dedicated servers, and cloud hosting. We provide SSL certificates, automated backups, CDN integration, database management, and monitoring services. Our hosting packages include everything from personal websites to enterprise applications with load balancing, auto-scaling, and advanced security measures.",
      icon: (
        <Server size={24} className="text-primary" />
      )
    },
    {
      title: "Professional Email Provider",
      description: "Enterprise-grade email solutions with custom domains, advanced security, and collaboration tools.",
      expandedDescription: "Set up professional email systems with your custom domain, advanced spam filtering, encryption, and mobile sync. Our email solutions include calendar integration, file sharing, video conferencing, team collaboration tools, and administrative controls. Perfect for businesses of all sizes with scalable plans and enterprise-level security compliance.",
      icon: (
        <Mail size={24} className="text-primary" />
      )
    }
  ];
  
  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
  };
  
  return (
    <section id="services" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Everything your business needs
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive software development solutions to bring your digital vision to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Collapsible
              key={index}
              open={openService === index}
              onOpenChange={() => toggleService(index)}
              className={`rounded-xl border ${openService === index ? 'border-border' : 'border-border/50'} cosmic-gradient transition-all duration-300`}
            >
              <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-full bg-muted/50 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                      openService === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-border/20">
                  <p className="text-muted-foreground">{service.expandedDescription}</p>
                  <div className="mt-4 flex justify-end">
                    <button className="text-primary hover:text-primary/80 text-sm font-medium">
                      Learn more →
                    </button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
