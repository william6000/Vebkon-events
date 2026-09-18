import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  CheckCircle2,
  ArrowUpRight,
  Globe,
  Truck
} from "lucide-react";
import { officeLocations, operationalStates } from "@/data/locations";
import { StatementCTA } from "@/components/home/StatementCTA";

export const metadata: Metadata = {
  title: "Locations & Hubs | Vebkon Events - Dehradun & Lucknow Offices",
  description:
    "Find Vebkon Events offices in Dehradun and Lucknow, along with our pan-India operational network across UP, Uttarakhand, Delhi NCR, Rajasthan, Haryana, Punjab, and Gujarat.",
};

export default function LocationsPage() {
  return (
    <div className="bg-surface-offwhite min-h-screen">
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-[#111111] text-white relative overflow-hidden border-b border-surface-borderDark">
        <div
          className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-red/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-brand-lightred border border-white/15 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-6">
              <Globe className="w-3.5 h-3.5" />
              <span>Regional Operational Network</span>
            </div>

            <h1 className="hero-title font-heading font-black text-white tracking-tight uppercase mb-6">
              Our Hubs &amp; <br />
              <span className="text-brand-red">Operational States</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              With executive headquarters in Dehradun, a heavy fabrication depot in Lucknow,
              and active deployment teams across 7 Indian states, Vebkon delivers scale with speed.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Office Cards */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="section-title font-heading font-black text-typography-main uppercase tracking-tight">
            Corporate <span className="text-brand-red">Offices</span>
          </h2>
          <p className="text-typography-muted text-base mt-2">
            Visit our creative planning studios or reach our regional directors directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {officeLocations.map((office) => (
            <div
              key={office.id}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-surface-borderLight shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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

                <div className="space-y-1 text-sm text-typography-main mb-6">
                  {office.addressLines.map((line, idx) => (
                    <p key={idx} className={idx === 0 ? "text-base font-bold text-typography-main" : "text-typography-muted"}>
                      {line}
                    </p>
                  ))}
                </div>

                <div className="space-y-2 mb-8">
                  <p className="text-xs font-heading font-bold uppercase tracking-wider text-typography-muted mb-2">
                    Stationed Logistics:
                  </p>
                  {office.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2 text-xs text-typography-main">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

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
            </div>
          ))}
        </div>
      </section>

      {/* Operational States Grid */}
      <section className="py-16 sm:py-24 bg-white border-y border-surface-borderLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-lightred text-brand-red px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-3">
              <Truck className="w-3.5 h-3.5" />
              <span>Multi-State Reach</span>
            </div>
            <h2 className="section-title font-heading font-black text-typography-main uppercase tracking-tight">
              7 Operational <span className="text-brand-red">Territories</span>
            </h2>
            <p className="text-typography-muted text-base mt-2">
              Our regional transport fleet and on-ground production crews enable rapid turnaround.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationalStates.map((state) => (
              <div
                key={state.code}
                className="bg-[#F7F3EE] rounded-3xl p-7 border border-surface-borderLight hover:border-brand-red/40 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-extrabold text-xl text-typography-main">
                    {state.name}
                  </h3>
                  <span className="text-xs font-mono font-bold bg-white px-2.5 py-1 rounded-lg border border-surface-borderLight text-brand-red">
                    {state.code}
                  </span>
                </div>

                <p className="text-xs text-typography-muted leading-relaxed mb-4">
                  {state.description}
                </p>

                <div className="pt-4 border-t border-gray-200/80">
                  <p className="text-[10px] font-heading font-bold uppercase tracking-wider text-typography-muted mb-2">
                    Key Execution Cities:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {state.keyHubs.map((hub) => (
                      <span
                        key={hub}
                        className="text-[11px] bg-white px-2.5 py-1 rounded-md text-typography-main border border-surface-borderLight font-medium"
                      >
                        {hub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <StatementCTA />
    </div>
  );
}

