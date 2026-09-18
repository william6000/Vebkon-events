"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

interface ExperienceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  stats: { label: string; value: string };
  deliverables: string[];
  link: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "corporate",
    title: "Corporate Events",
    tagline: "Large-scale summits, leadership meets & award galas",
    description: "Architectural stage design, multi-camera broadcasting, custom keynote visual graphics, and impeccable VIP delegate hospitality.",
    image: "/projects/corporate-annual-conclave.svg",
    stats: { label: "Execution Standard", value: "Fortune 500 Ready" },
    deliverables: [
      "40ft+ panoramic LED stage walls",
      "Seamless speaker presentation switching",
      "Live digital polling & translation suites",
      "Gala award dinner styling"
    ],
    link: "/services#corporate-events"
  },
  {
    id: "exhibitions",
    title: "Exhibitions & Stalls",
    tagline: "High-ROI 3-side open & mezzanine expo booths",
    description: "Command attention in crowded convention centers. We engineer structurally certified mezzanine floors, high-illumination fascias, and interactive product demo counters.",
    image: "/projects/custom-exhibition-stall.svg",
    stats: { label: "Design Turnaround", value: "48h 3D CAD" },
    deliverables: [
      "Turnkey 3-phase electrical installation",
      "Acoustic executive negotiation lounges",
      "Rotating overhead brand totems",
      "Display vitrines & brochure counters"
    ],
    link: "/services#customised-stalls"
  },
  {
    id: "fabrication",
    title: "Custom Fabrication",
    tagline: "In-house metalwork, CNC routing & dimensional structures",
    description: "We don't outsource critical carpentry. Our dedicated fabrication facility crafts experiential entry tunnels, geometric stage facades, and sculpted 3D brand installations.",
    image: "/projects/fmcg-brand-activation.svg",
    stats: { label: "Fabrication Facility", value: "Dedicated Workshops" },
    deliverables: [
      "Engineered structural load testing",
      "High-gloss spray painted & vinyl finishes",
      "Overnight on-site setup protocols",
      "Custom acrylic & backlit lightboxes"
    ],
    link: "/services#fabrication-setups"
  },
  {
    id: "activations",
    title: "Brand Activations",
    tagline: "High-energy consumer touchpoints & multi-city roadshows",
    description: "Translate marketing objectives into memorable physical interactions. We build interactive kiosks, gamified sampling domes, and street buzz campaigns across 7 states.",
    image: "/projects/fmcg-brand-activation.svg",
    stats: { label: "Footfall Capability", value: "50,000+ Daily" },
    deliverables: [
      "Mall atrium brand dome takeovers",
      "Trained promoter & model deployment",
      "Live digital lead capture integration",
      "Multi-city synchronized rollouts"
    ],
    link: "/services#branding-signage"
  },
  {
    id: "launches",
    title: "Launch Events",
    tagline: "Theatrical reveal mechanics & high-octane media unveilings",
    description: "Make the first impression historic. We synchronize high-speed kabuki drops, motorized vehicle turntables, cryogenic smoke jets, and timecode lasers.",
    image: "/projects/automotive-launch-event.svg",
    stats: { label: "Reveal Mechanics", value: "Timecode Sync" },
    deliverables: [
      "Motorized rotating product turntables",
      "Kabuki solenoid drop curtains",
      "Synchronized cold spark & CO2 jets",
      "National media & influencer step-and-repeat"
    ],
    link: "/services#product-launch-events"
  },
  {
    id: "weddings",
    title: "Weddings & Celebrations",
    tagline: "Royal palace transformations & heritage mandap artistry",
    description: "Merging monumental Indian cultural grandeur with contemporary production discipline. From palace courtyards to mountain valleys, we curate once-in-a-lifetime milestones.",
    image: "/projects/luxury-destination-wedding.svg",
    stats: { label: "Curation Level", value: "Bespoke Royal" },
    deliverables: [
      "Pillarless architectural mandap decor",
      "Thematic Sangeet concert stage setups",
      "Baraat vintage motorcade coordination",
      "24/7 dedicated family concierge teams"
    ],
    link: "/services#weddings"
  }
];

export const FeaturedExperience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExp = experiences[activeIndex];

  return (
    <section className="py-20 sm:py-28 bg-surface-dark text-white border-b border-surface-borderDark relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-brand-red/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up" className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 text-brand-lightred border border-white/15 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-3">
            Core Production Disciplines
          </div>
          <h2 className="section-title font-heading font-black text-white tracking-tight uppercase">
            Signature <span className="text-brand-red">Experiences</span> We Craft
          </h2>
          <p className="text-gray-400 text-base mt-3 max-w-2xl">
            Select a discipline below to explore how Vebkon merges structural fabrication,
            advanced AV engineering, and show direction.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Category Navigation List */}
          <div className="lg:col-span-5 space-y-2.5">
            {experiences.map((item, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 border flex items-center justify-between group ${
                    isCurrent
                      ? "bg-white/10 border-brand-red text-white shadow-lg translate-x-1"
                      : "bg-white/[0.02] hover:bg-white/[0.05] border-white/5 text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isCurrent ? "bg-brand-red text-white" : "bg-white/10 text-gray-400"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <div>
                      <h3
                        className={`font-heading font-extrabold text-lg sm:text-xl tracking-wide transition-colors ${
                          isCurrent ? "text-white" : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">{item.tagline}</p>
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`w-5 h-5 transition-transform ${
                      isCurrent
                        ? "text-brand-red scale-110"
                        : "text-gray-500 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Interactive Showcase Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="bg-surface-cardDark border border-surface-borderDark rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
              >
                {/* Visual Graphic Banner */}
                <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 mb-6 bg-black">
                  <Image
                    src={activeExp.image}
                    alt={activeExp.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-heading font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-brand-red" />
                    <span>{activeExp.stats.label}: {activeExp.stats.value}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-heading font-extrabold text-2xl text-white">
                      {activeExp.title}
                    </h4>
                    <p className="text-brand-red text-sm font-semibold mt-1">
                      {activeExp.tagline}
                    </p>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {activeExp.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-white/10">
                    {activeExp.deliverables.map((d) => (
                      <div key={d} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div className="pt-4 flex items-center justify-between">
                    <Link
                      href={activeExp.link}
                      className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-brand-lightred hover:text-white transition-colors"
                    >
                      <span>Explore {activeExp.title} Scope</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-crimson text-white px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-colors shadow-md"
                    >
                      <span>Enquire Now</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

