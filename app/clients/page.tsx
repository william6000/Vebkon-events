import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { clientsData } from "@/data/clients";
import { StatementCTA } from "@/components/home/StatementCTA";

export const metadata: Metadata = {
  title: "Clients & Partners | Brands Vebkon Events Has Worked With",
  description:
    "Explore the brands Vebkon Events has worked with: Nestlé, Google, Samsung, Swiggy, Axis Bank, ICICI Bank, Maruti Suzuki, Tanishq, Asian Paints, Mahindra, and more.",
};

export default function ClientsPage() {
  const industries = [
    "All Sectors",
    "FMCG & Consumer",
    "Banking & Financial",
    "Technology & Telecom",
    "Automotive & Industrial",
    "Media & Lifestyle"
  ];

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
              <Award className="w-3.5 h-3.5" />
              <span>Enterprise &amp; Brand Collaborations</span>
            </div>

            <h1 className="hero-title font-heading font-black text-white tracking-tight uppercase mb-6">
              Brands Vebkon Events <br />
              <span className="text-brand-red">Has Worked With</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              From Fortune 500 tech leaders and commercial banking giants to household FMCG icons
              and automotive manufacturers, our turnkey production powers high-stakes events.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of all 21 Client Logos */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-borderLight">
          <div>
            <h2 className="font-heading font-black text-2xl text-typography-main uppercase">
              Brand Directory (21 Featured Clients)
            </h2>
            <p className="text-xs text-typography-muted mt-1">
              Hover to view authentic brand identity and engagement focus.
            </p>
          </div>

          <div className="text-xs text-typography-muted italic bg-white border border-surface-borderLight px-4 py-2 rounded-xl">
            Client/brand names are presented as supplied by Vebkon Events.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clientsData.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-3xl p-6 border border-surface-borderLight shadow-sm hover:shadow-xl hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-brand-red bg-brand-lightred px-2.5 py-0.5 rounded-full">
                    {client.category}
                  </span>
                </div>

                <div className="relative w-full h-16 mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="font-heading font-extrabold text-lg text-typography-main group-hover:text-brand-red transition-colors mb-2 text-center">
                  {client.name}
                </h3>

                <p className="text-xs text-typography-muted leading-relaxed text-center">
                  {client.highlight}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center gap-1 text-[11px] font-semibold text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Production Partner</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section className="py-16 bg-white border-y border-surface-borderLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#F7F3EE] border border-surface-borderLight">
              <ShieldCheck className="w-8 h-8 text-brand-red mb-3" />
              <h3 className="font-heading font-bold text-base text-typography-main mb-2">
                Brand Guideline Fidelity
              </h3>
              <p className="text-xs text-typography-muted leading-relaxed">
                Strict adherence to corporate identity manuals, Pantone exactness, safety codes, and signage clear-space rules.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F3EE] border border-surface-borderLight">
              <CheckCircle2 className="w-8 h-8 text-brand-red mb-3" />
              <h3 className="font-heading font-bold text-base text-typography-main mb-2">
                Multi-State Logistics Sync
              </h3>
              <p className="text-xs text-typography-muted leading-relaxed">
                Seamless multi-city roadshow deployment ensuring identical experiential quality in tier-1 metros and tier-2 markets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F3EE] border border-surface-borderLight">
              <Award className="w-8 h-8 text-brand-red mb-3" />
              <h3 className="font-heading font-bold text-base text-typography-main mb-2">
                Single Point Accountability
              </h3>
              <p className="text-xs text-typography-muted leading-relaxed">
                A dedicated senior account director coordinates technical riders, billing, fabrication, and on-ground safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <StatementCTA />
    </div>
  );
}

