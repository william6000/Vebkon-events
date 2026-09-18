import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Target,
  Sparkles,
  Layers,
  Wrench,
  Users,
  Compass,
  CheckCircle2,
  ArrowUpRight,
  Award
} from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StatementCTA } from "@/components/home/StatementCTA";

export const metadata: Metadata = {
  title: "About Us | Vebkon Events - Creative Agency & Event Production",
  description:
    "Learn about Vebkon Events: a full-service event, activation, fabrication and experiential solutions company with hubs in Dehradun and Lucknow.",
};

export default function AboutPage() {
  const pillars = [
    {
      title: "Creative Spatial Design",
      desc: "Every event starts with architectural CAD modeling, custom lighting schematics, and thematic stage geometry that brings brand identity into physical dimension.",
      icon: <Compass className="w-6 h-6 text-brand-red" />
    },
    {
      title: "In-House Structural Fabrication",
      desc: "Our self-owned carpentry, metal fabrication, and acrylic finishing workshop guarantees structural safety, zero vendor markups, and rapid turnaround.",
      icon: <Wrench className="w-6 h-6 text-brand-red" />
    },
    {
      title: "Concert-Grade Production & AV",
      desc: "From line-array sound distribution and curved P2.6/P3.9 LED walls to intelligent moving beams, our technical inventory matches global concert standards.",
      icon: <Layers className="w-6 h-6 text-brand-red" />
    },
    {
      title: "Ground Direction & Manpower",
      desc: "Groomed bilingual ushers, seasoned stage managers, safety marshals, and backstage coordinators working in lockstep under seasoned show directors.",
      icon: <Users className="w-6 h-6 text-brand-red" />
    }
  ];

  const differences = [
    {
      title: "Single-Source Accountability",
      desc: "We eliminate the chaos of coordinating 10 fragmented vendors. Creative, fabrication, audio-visual, artist management, and hospitality are coordinated by one dedicated lead director."
    },
    {
      title: "Heavy Structural Safety Standards",
      desc: "All stage roofs, hanging trusses, and exhibition mezzanine floors undergo certified load-bearing and wind resistance calculations."
    },
    {
      title: "Dual Regional Operation Hubs",
      desc: "With established physical presence and warehouse facilities in both Dehradun and Lucknow, we command unmatched logistics across North and West India."
    },
    {
      title: "Enterprise Confidentiality & Rigor",
      desc: "We enforce strict non-disclosure agreements, private rehearsals, and secure green-room protocol for high-stakes corporate summits and unreleased product unveils."
    }
  ];

  return (
    <div className="bg-surface-offwhite">
      {/* Page Hero */}
      <section className="py-20 sm:py-28 bg-[#111111] text-white relative overflow-hidden border-b border-surface-borderDark">
        <div
          className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-red/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-brand-lightred border border-white/15 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-6">
              <Award className="w-3.5 h-3.5" />
              <span>Full-Service Production Agency</span>
            </div>

            <h1 className="hero-title font-heading font-black text-white tracking-tight uppercase mb-6">
              Engineering <span className="text-brand-red">Experiences.</span> <br />
              Delivering Scale.
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
              Vebkon Events is a full-service event, brand activation, custom fabrication, and
              experiential solutions agency serving leading corporate enterprises and private
              clients across multiple Indian states.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are & Narrative */}
      <section className="py-20 sm:py-28 bg-white border-b border-surface-borderLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-lightred text-brand-red px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider">
                Who We Are
              </div>

              <h2 className="section-title font-heading font-black text-typography-main uppercase tracking-tight">
                Where Visionary Creativity Meets <br />
                <span className="text-brand-red">Ground Execution.</span>
              </h2>

              <p className="text-typography-muted text-base leading-relaxed">
                Headquartered with major execution hubs in <strong>Dehradun</strong> and{" "}
                <strong>Lucknow</strong>, Vebkon Events bridges the gap between big-picture agency
                creativity and heavy-duty on-ground production. We understand that a great event is
                never just about decoration — it is about acoustic clarity, visual immersion, crowd
                psychology, and seamless timekeeping.
              </p>

              <p className="text-typography-muted text-base leading-relaxed">
                From high-security national corporate conventions and multi-city FMCG roadshows to
                bespoke exhibition pavilions and landmark product launches, our teams manage every
                variable with precision, discipline, and aesthetic finesse.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <div className="bg-[#F7F3EE] border border-surface-borderLight px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider text-typography-main">
                  Dehradun • Northern Hub
                </div>
                <div className="bg-[#F7F3EE] border border-surface-borderLight px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider text-typography-main">
                  Lucknow • Operations Hub
                </div>
                <div className="bg-[#F7F3EE] border border-surface-borderLight px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider text-brand-red">
                  7 Operational States
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#F7F3EE] rounded-3xl p-8 sm:p-10 border border-surface-borderLight shadow-sm space-y-6">
              <h3 className="font-heading font-extrabold text-xl text-typography-main uppercase tracking-wide border-b border-gray-200 pb-4">
                Our Operational Philosophy
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-red text-white flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    01
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-typography-main">
                      Design With Structural Rigor
                    </h4>
                    <p className="text-xs text-typography-muted mt-1 leading-relaxed">
                      We never design a concept in 3D that cannot be built safely, within budget, and on schedule.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-red text-white flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    02
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-typography-main">
                      Zero Tolerance for Technical Glitches
                    </h4>
                    <p className="text-xs text-typography-muted mt-1 leading-relaxed">
                      Redundant AV processors, backup generators, and rehearsed timecode show sequences ensure absolute reliability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-red text-white flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    03
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-typography-main">
                      Transparent Commercial Partnership
                    </h4>
                    <p className="text-xs text-typography-muted mt-1 leading-relaxed">
                      Itemized scope documents, clear deliverables, and proactive project communication from pitch to post-event signoff.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Execution */}
      <section className="py-20 sm:py-28 bg-[#F7F3EE] border-b border-surface-borderLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 bg-brand-lightred text-brand-red px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-3">
              Core Capabilities
            </div>
            <h2 className="section-title font-heading font-black text-typography-main uppercase tracking-tight">
              What Powers <span className="text-brand-red">Vebkon Events</span>
            </h2>
            <p className="text-typography-muted text-base mt-3">
              Our comprehensive capabilities cover every requirement of modern event production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-3xl p-7 border border-surface-borderLight shadow-sm hover:shadow-xl hover:border-brand-red/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-lightred group-hover:bg-brand-red group-hover:text-white flex items-center justify-center transition-colors mb-6">
                    {p.icon}
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-typography-main group-hover:text-brand-red transition-colors mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-typography-muted leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 sm:py-28 bg-white border-b border-surface-borderLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 bg-brand-lightred text-brand-red px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-3">
              Competitive Advantage
            </div>
            <h2 className="section-title font-heading font-black text-typography-main uppercase tracking-tight">
              What Makes Us <span className="text-brand-red">Different</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differences.map((item, i) => (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-[#F7F3EE] border border-surface-borderLight flex items-start gap-5 hover:border-brand-red/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-red text-white flex items-center justify-center shrink-0 font-heading font-bold text-sm">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-typography-main mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-typography-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <StatementCTA />
    </div>
  );
}

