import React from "react";
import { Hero } from "@/components/home/Hero";
import { BrandStatement } from "@/components/home/BrandStatement";
import { ServicesIntro } from "@/components/home/ServicesIntro";
import { FeaturedExperience } from "@/components/home/FeaturedExperience";
import { WhyVebkon } from "@/components/home/WhyVebkon";
import { ClientShowcase } from "@/components/home/ClientShowcase";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { OperationalPresence } from "@/components/home/OperationalPresence";
import { OfficesSection } from "@/components/home/OfficesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InstagramSection } from "@/components/home/InstagramSection";
import { StatementCTA } from "@/components/home/StatementCTA";
import { HomeContactSection } from "@/components/home/HomeContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Brand Statement */}
      <BrandStatement />

      {/* 3. Services Intro (13 Services) */}
      <ServicesIntro />

      {/* 4. Featured Service Experience (Interactive Split Scroll) */}
      <FeaturedExperience />

      {/* 5. Why Vebkon */}
      <WhyVebkon />

      {/* 6. Clients Showcase (Infinite Marquee + 21-Logo Responsive Grid) */}
      <ClientShowcase />

      {/* 7. Our Process (6-Step Timeline) */}
      <ProcessTimeline />

      {/* 8. Featured Projects / Portfolio */}
      <FeaturedProjects />

      {/* 9. Operational Presence (7 States Network) */}
      <OperationalPresence />

      {/* 10. Offices (Dehradun & Lucknow Hubs) */}
      <OfficesSection />

      {/* 11. Testimonials */}
      <TestimonialsSection />

      {/* 12. Instagram Behind-the-Scenes */}
      <InstagramSection />

      {/* 13. Statement Red CTA */}
      <StatementCTA />

      {/* 14. Direct Contact & WhatsApp Enquiry Form */}
      <HomeContactSection />
    </>
  );
}

