"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, Navigation, CheckCircle2 } from "lucide-react";
import { officeLocations } from "@/data/locations";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const OfficesSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F3EE] border-b border-surface-borderLight relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up" className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-lightred text-brand-red px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-3">
            Physical Infrastructure
          </div>
          <h2 className="section-title font-heading font-black text-typography-main tracking-tight uppercase">
            Our Headquarters &amp; <br />
            <span className="text-brand-red">Operational Hubs</span>
          </h2>
          <p className="text-typography-muted text-base mt-3 max-w-2xl leading-relaxed">
            Strategically located in Dehradun and Lucknow to command rapid event mobilization,
            workshop fabrication, and on-ground deployment across northern and western states.
          </p>
        </AnimatedSection>

        {/* Two Premium Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {officeLocations.map((office, idx) => (
            <AnimatedSection
              key={office.id}
              delay={idx * 0.15}
              direction="up"
              className="bg-white rounded-3xl p-8 sm:p-10 border border-surface-borderLight shadow-sm hover:shadow-xl hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
                  <div>
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-brand-red bg-brand-lightred px-3 py-1 rounded-full">
                      {office.badge}
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-typography-main mt-3">
                      {office.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F7F3EE] border border-surface-borderLight flex items-center justify-center text-brand-red">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>

                {/* Address Lines */}
                <div className="space-y-1 text-sm text-typography-main font-medium mb-6">
                  {office.addressLines.map((line, i) => (
                    <p key={i} className={i === 0 ? "text-base font-bold text-typography-main" : "text-typography-muted"}>
                      {line}
                    </p>
                  ))}
                </div>

                {/* Hub Capabilities */}
                <div className="space-y-2 mb-8">
                  <p className="text-xs font-heading font-bold uppercase tracking-wider text-typography-muted mb-2">
                    Stationed Capabilities:
                  </p>
                  {office.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2 text-xs text-typography-main">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={office.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-crimson text-white py-3.5 px-6 rounded-xl font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F7F3EE] hover:bg-white text-typography-main border border-surface-borderLight py-3.5 px-6 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-red" />
                  <span>Call Office</span>
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

