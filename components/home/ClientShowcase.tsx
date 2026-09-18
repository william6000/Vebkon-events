"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award } from "lucide-react";
import { clientsData } from "@/data/clients";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const ClientShowcase: React.FC = () => {
  // Duplicate for smooth infinite marquee
  const marqueeLogos = [...clientsData, ...clientsData];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-surface-borderLight overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand-lightred text-brand-red px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="section-title font-heading font-black text-typography-main tracking-tight uppercase">
            Brands We&apos;ve Worked With
          </h2>
          <p className="text-typography-muted text-base mt-3 max-w-xl mx-auto">
            Trusted by national enterprises and multinational leaders across consumer goods,
            technology, banking, media, and manufacturing.
          </p>
        </AnimatedSection>
      </div>

      {/* Part A: Infinite Smooth Marquee */}
      <div className="relative w-full overflow-hidden mask-marquee py-4 mb-16">
        <div className="flex w-max animate-marquee-infinite hover:[animation-play-state:paused]">
          {marqueeLogos.map((client, index) => (
            <div
              key={`${client.id}-marquee-${index}`}
              className="mx-4 sm:mx-6 flex items-center justify-center w-36 sm:w-44 h-20 bg-[#F7F3EE] rounded-2xl border border-surface-borderLight p-4 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-brand-red/30 group shrink-0"
              title={client.name}
            >
              <div className="relative w-full h-10 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Part B: Clean Responsive 21-Logo Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-typography-muted">
            Interactive Client Directory • 21 Featured Brands
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {clientsData.map((client, idx) => (
            <AnimatedSection
              key={client.id}
              delay={(idx % 6) * 0.05}
              direction="up"
              className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-white border border-surface-borderLight shadow-xs hover:shadow-lg hover:border-brand-red/40 transition-all duration-300 group text-center"
            >
              <div className="relative w-full h-11 sm:h-12 mb-2.5 filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[11px] font-semibold text-typography-muted group-hover:text-typography-main transition-colors">
                {client.name}
              </span>
            </AnimatedSection>
          ))}
        </div>

        {/* View All & Partnership CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-brand-red hover:text-brand-crimson hover:underline"
          >
            <span>Explore Full Brand Showcase &amp; Collaboration Details</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

