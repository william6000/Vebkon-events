"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles, MapPin } from "lucide-react";
import { EventMotionBackground } from "@/components/animations/EventMotionBackground";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-surface-offwhite py-16 sm:py-24 border-b border-surface-borderLight">
      {/* Background Particle Motion Canvas */}
      <EventMotionBackground intensity="medium" variant="light" />

      {/* Subtle Geometric Stage Rigging Lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#191919_1px,transparent_1px),linear-gradient(to_bottom,#191919_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* Faint Red Ambient Glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full bg-brand-red/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Hubs Badge Pill */}
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-sm border border-surface-borderLight shadow-sm px-4 py-1.5 rounded-full mb-6 sm:mb-8 transform hover:scale-[1.02] transition-transform">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
          </span>
          <div className="flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-typography-main">
            <span>Dehradun</span>
            <span className="text-brand-red">•</span>
            <span>Lucknow</span>
            <span className="text-brand-red">•</span>
            <span className="text-brand-red">Pan-India Execution</span>
          </div>
        </div>

        {/* Hero Main Headline */}
        <h1 className="hero-title font-heading font-black text-typography-main max-w-5xl tracking-tight mb-6 sm:mb-8 uppercase">
          We Create <span className="text-brand-red">Events</span> People{" "}
          <span className="relative inline-block">
            Remember.
            <svg
              className="absolute -bottom-2 left-0 w-full text-brand-red/30 h-2.5"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <path d="M0,10 Q50,0 100,10" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-typography-muted max-w-3xl mb-8 sm:mb-10 leading-relaxed font-normal">
          From corporate summits and brand activations to exhibitions, bespoke fabrication,
          high-profile product launches, and royal weddings — Vebkon Events transforms visionary
          concepts into unforgettable experiential realities.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-red hover:bg-brand-crimson text-white px-8 py-4 rounded-full font-heading font-bold text-sm tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Plan Your Event</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-surface-warmcream text-typography-main border border-surface-borderLight px-7 py-4 rounded-full font-heading font-bold text-sm tracking-wider uppercase shadow-sm hover:shadow transition-colors duration-200"
          >
            <span>Explore Our Work</span>
            <Sparkles className="w-4 h-4 text-brand-red" />
          </Link>
        </div>

        {/* Key Capability Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-4xl pt-6 border-t border-surface-borderLight/80">
          <div className="bg-white/60 backdrop-blur-sm border border-surface-borderLight p-3.5 rounded-2xl">
            <p className="font-heading font-extrabold text-brand-red text-base sm:text-lg">Corporate</p>
            <p className="text-xs text-typography-muted">Conclaves &amp; Dealer Meets</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-surface-borderLight p-3.5 rounded-2xl">
            <p className="font-heading font-extrabold text-brand-red text-base sm:text-lg">Fabrication</p>
            <p className="text-xs text-typography-muted">Custom Stalls &amp; Stages</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-surface-borderLight p-3.5 rounded-2xl">
            <p className="font-heading font-extrabold text-brand-red text-base sm:text-lg">Activation</p>
            <p className="text-xs text-typography-muted">Multi-City Roadshows</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-surface-borderLight p-3.5 rounded-2xl">
            <p className="font-heading font-extrabold text-brand-red text-base sm:text-lg">Production</p>
            <p className="text-xs text-typography-muted">Audio, Lighting &amp; LED</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center gap-2 text-typography-muted text-xs font-semibold tracking-widest uppercase animate-bounce">
          <span>Scroll to Discover</span>
          <ArrowDown className="w-3.5 h-3.5 text-brand-red" />
        </div>
      </div>
    </section>
  );
};

