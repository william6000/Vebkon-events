"use client";

import React from "react";
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
  ArrowUpRight
} from "lucide-react";
import { servicesData } from "@/data/services";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

// Icon mapping helper
const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case "Briefcase":
      return <Briefcase className="w-5 h-5" />;
    case "Hammer":
      return <Hammer className="w-5 h-5" />;
    case "LayoutGrid":
      return <LayoutGrid className="w-5 h-5" />;
    case "Users":
      return <Users className="w-5 h-5" />;
    case "Maximize":
      return <Maximize className="w-5 h-5" />;
    case "Sparkles":
      return <Sparkles className="w-5 h-5" />;
    case "Store":
      return <Store className="w-5 h-5" />;
    case "Volume2":
      return <Volume2 className="w-5 h-5" />;
    case "Tv":
      return <Tv className="w-5 h-5" />;
    case "UserCheck":
      return <UserCheck className="w-5 h-5" />;
    case "User":
      return <User className="w-5 h-5" />;
    case "Heart":
      return <Heart className="w-5 h-5" />;
    case "Crown":
      return <Crown className="w-5 h-5" />;
    default:
      return <Sparkles className="w-5 h-5" />;
  }
};

export const ServicesIntro: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F3EE] border-b border-surface-borderLight relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up" className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-lightred text-brand-red px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-3">
            Full-Spectrum Production Capabilities
          </div>
          <h2 className="section-title font-heading font-black text-typography-main tracking-tight uppercase">
            Everything Your Event Needs. <br />
            <span className="text-brand-red">Under One Roof.</span>
          </h2>
          <p className="text-typography-muted text-base mt-4 max-w-2xl leading-relaxed">
            Eliminate fragmented vendors. From initial spatial CAD designs and in-house fabrication
            to concert-grade sound, lighting, and VIP celebrity coordination, Vebkon handles the
            entire lifecycle under unified creative direction.
          </p>
        </AnimatedSection>

        {/* Dynamic Modular Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const isFeatured = idx === 0 || idx === 1 || idx === 7;

            return (
              <AnimatedSection
                key={service.id}
                delay={(idx % 3) * 0.1}
                direction="up"
                className={`flex flex-col justify-between rounded-3xl p-7 transition-all duration-300 group border ${
                  isFeatured
                    ? "bg-white border-brand-red/30 shadow-md hover:shadow-xl hover:border-brand-red"
                    : "bg-white/80 hover:bg-white border-surface-borderLight shadow-sm hover:shadow-lg hover:border-brand-red/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        isFeatured
                          ? "bg-brand-red text-white"
                          : "bg-brand-lightred text-brand-red group-hover:bg-brand-red group-hover:text-white"
                      }`}
                    >
                      {getServiceIcon(service.icon)}
                    </div>

                    <span className="text-xs font-mono font-bold text-typography-muted uppercase tracking-wider bg-gray-100 px-2.5 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-typography-main group-hover:text-brand-red transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-sm text-typography-muted line-clamp-2 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-typography-main group-hover:text-brand-red transition-colors"
                  >
                    <span>Explore Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>

                  <span className="text-xs text-brand-red font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                  </span>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom Directory Link */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 bg-surface-dark hover:bg-black text-white px-8 py-4 rounded-full font-heading font-bold text-sm tracking-wider uppercase shadow-lg hover:shadow-xl transition-all"
          >
            <span>View Complete Service Directory (13 Categories)</span>
            <ArrowUpRight className="w-4 h-4 text-brand-red" />
          </Link>
        </div>
      </div>
    </section>
  );
};

