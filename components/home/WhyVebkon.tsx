"use client";

import React from "react";
import {
  Globe,
  Layers,
  Sparkles,
  ShieldCheck,
  Wrench,
  Cpu
} from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

interface CapabilityMetric {
  title: string;
  badge: string;
  description: string;
  icon: React.ReactNode;
}

const capabilityMetrics: CapabilityMetric[] = [
  {
    title: "Pan-India Operations",
    badge: "Regional Agility",
    description: "Multi-state operational reach with established execution hubs in Dehradun and Lucknow, serving UP, Uttarakhand, Delhi NCR, Rajasthan, Punjab, Haryana & Gujarat.",
    icon: <Globe className="w-6 h-6 text-brand-red" />
  },
  {
    title: "End-to-End Execution",
    badge: "Zero Sub-Contract Gaps",
    description: "From initial 3D visualization and structural drafting to show-calling, live stage direction, and teardown, you deal with a single accountable leadership team.",
    icon: <Layers className="w-6 h-6 text-brand-red" />
  },
  {
    title: "Multiple Event Categories",
    badge: "Versatile Spectrum",
    description: "Seamlessly shifting from high-rigor corporate conventions and government forums to exuberant brand launches, trade expos, and royal destination celebrations.",
    icon: <Sparkles className="w-6 h-6 text-brand-red" />
  },
  {
    title: "In-House Fabrication",
    badge: "Dedicated Facility",
    description: "Self-owned carpentry and metal workshops ensure uncompromising structural safety, high-grade finishes, and fast overnight fabrication turnaround.",
    icon: <Wrench className="w-6 h-6 text-brand-red" />
  },
  {
    title: "High-Caliber AV & Tech",
    badge: "Concert Standard",
    description: "High-refresh LED walls, line array acoustics, intelligent DMX lighting systems, and live multi-camera broadcast units engineered for zero failures.",
    icon: <Cpu className="w-6 h-6 text-brand-red" />
  },
  {
    title: "On-Ground Crisis Control",
    badge: "Seasoned Directors",
    description: "Senior on-site show directors with rigorous SOPs, safety permits, emergency redundancy, and proactive contingency planning on every project.",
    icon: <ShieldCheck className="w-6 h-6 text-brand-red" />
  }
];

export const WhyVebkon: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F3EE] border-b border-surface-borderLight relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up" className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-lightred text-brand-red px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-3">
            Why Visionary Brands Choose Vebkon
          </div>
          <h2 className="section-title font-heading font-black text-typography-main tracking-tight uppercase">
            Engineered For Scale. <br />
            <span className="text-brand-red">Delivered With Precision.</span>
          </h2>
          <p className="text-typography-muted text-base mt-4 max-w-2xl leading-relaxed">
            We measure our capability through relentless execution quality, structural integrity,
            and flawless live show delivery across India’s most competitive business markets.
          </p>
        </AnimatedSection>

        {/* Qualitative Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilityMetrics.map((item, idx) => (
            <AnimatedSection
              key={item.title}
              delay={idx * 0.08}
              direction="up"
              className="bg-white rounded-3xl p-8 border border-surface-borderLight shadow-sm hover:shadow-xl hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-lightred group-hover:bg-brand-red group-hover:text-white flex items-center justify-center transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-brand-red bg-brand-lightred px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-xl text-typography-main group-hover:text-brand-red transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-typography-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-typography-muted uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-brand-red"></span>
                <span>Production Standard</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

