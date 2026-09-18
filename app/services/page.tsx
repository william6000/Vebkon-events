import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Hammer,
  LayoutGrid,
  Users,
  Maximize,
  Sparkles,
  Store,
  Volume2,
  Tv,
  UserCheck,
  User,
  Heart,
  Crown,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";
import { StatementCTA } from "@/components/home/StatementCTA";

export const metadata: Metadata = {
  title: "Services Directory | Vebkon Events - 13 Production Disciplines",
  description:
    "Explore Vebkon Events' complete service directory: corporate events, custom fabrication, exhibition stalls, audio-visual, product launches, weddings, and celebrity management.",
};

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case "Briefcase":
      return <Briefcase className="w-6 h-6" />;
    case "Hammer":
      return <Hammer className="w-6 h-6" />;
    case "LayoutGrid":
      return <LayoutGrid className="w-6 h-6" />;
    case "Users":
      return <Users className="w-6 h-6" />;
    case "Maximize":
      return <Maximize className="w-6 h-6" />;
    case "Sparkles":
      return <Sparkles className="w-6 h-6" />;
    case "Store":
      return <Store className="w-6 h-6" />;
    case "Volume2":
      return <Volume2 className="w-6 h-6" />;
    case "Tv":
      return <Tv className="w-6 h-6" />;
    case "UserCheck":
      return <UserCheck className="w-6 h-6" />;
    case "User":
      return <User className="w-6 h-6" />;
    case "Heart":
      return <Heart className="w-6 h-6" />;
    case "Crown":
      return <Crown className="w-6 h-6" />;
    default:
      return <Sparkles className="w-6 h-6" />;
  }
};

export default function ServicesPage() {
  return (
    <div className="bg-surface-offwhite">
      {/* Services Hero */}
      <section className="py-20 sm:py-28 bg-[#111111] text-white relative overflow-hidden border-b border-surface-borderDark">
        <div
          className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-red/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-brand-lightred border border-white/15 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-6">
              Complete Capabilities Catalog
            </div>

            <h1 className="hero-title font-heading font-black text-white tracking-tight uppercase mb-6">
              13 Production <span className="text-brand-red">Disciplines.</span> <br />
              One Accountable Agency.
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Explore our full spectrum of event management, in-house fabrication, exhibition
              engineering, advanced audio-visual, and talent coordination capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Services Fast-Jump Bar */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-surface-borderLight py-3 overflow-x-auto shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 whitespace-nowrap">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-typography-muted mr-2 shrink-0">
            Quick Jump:
          </span>
          {servicesData.map((s) => (
            <a
              key={s.id}
              href={`#${s.slug}`}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#F7F3EE] hover:bg-brand-red hover:text-white text-typography-main transition-colors shrink-0 border border-surface-borderLight"
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Deep-Dive Service Cards */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {servicesData.map((service, index) => (
          <article
            key={service.id}
            id={service.slug}
            className="scroll-mt-36 bg-white rounded-3xl p-8 sm:p-12 border border-surface-borderLight shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-lightred text-brand-red flex items-center justify-center">
                    {getServiceIcon(service.icon)}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-wider">
                      Discipline 0{index + 1} • {service.category}
                    </span>
                    <h2 className="font-heading font-black text-2xl sm:text-3xl text-typography-main">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="font-heading font-bold text-base text-brand-crimson">
                  {service.tagline}
                </p>

                <p className="text-typography-muted text-sm sm:text-base leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* Scope */}
                <div className="p-4 bg-[#F7F3EE] rounded-2xl border border-surface-borderLight">
                  <p className="text-xs font-heading font-bold uppercase tracking-wider text-typography-muted mb-1">
                    Operational Scope
                  </p>
                  <p className="text-xs text-typography-main leading-relaxed font-medium">
                    {service.scope}
                  </p>
                </div>
              </div>

              {/* Right Deliverables Checklist */}
              <div className="lg:col-span-5 bg-[#F7F3EE] rounded-2xl p-6 sm:p-8 border border-surface-borderLight flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider text-typography-main mb-4 pb-2 border-b border-gray-200">
                    Key Deliverables Included:
                  </h3>
                  <div className="space-y-3">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-typography-main">
                        <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider text-typography-main mt-6 mb-3 pb-2 border-b border-gray-200">
                    Execution Highlights:
                  </h3>
                  <div className="space-y-2">
                    {service.keyFeatures.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-typography-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                <div className="pt-6 mt-6 border-t border-gray-200 flex items-center justify-between">
                  <Link
                    href={`/contact?eventType=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-crimson text-white px-5 py-3 rounded-full text-xs font-heading font-bold uppercase tracking-wider shadow-md transition-colors w-full justify-center sm:w-auto"
                  >
                    <span>Request {service.title} Quote</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA Section */}
      <StatementCTA />
    </div>
  );
}

