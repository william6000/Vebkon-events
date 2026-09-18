"use client";

import React from "react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import {
  FileText,
  Lightbulb,
  Compass,
  Hammer,
  PlayCircle,
  Trophy
} from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Brief",
    tagline: "Objectives & Constraints",
    description: "Deep dive into your audience, corporate goals, spatial constraints, brand tone, and target outcomes.",
    icon: <FileText className="w-5 h-5 text-brand-red" />
  },
  {
    number: "02",
    title: "Concept",
    tagline: "Experiential Narrative",
    description: "Formulating the creative theme, visitor journey flow, show pacing, and dramatic reveal mechanics.",
    icon: <Lightbulb className="w-5 h-5 text-brand-red" />
  },
  {
    number: "03",
    title: "Design",
    tagline: "Photorealistic 3D CAD",
    description: "Structural engineering blueprints, acoustic modeling, lighting schematics, and realistic 3D renderings.",
    icon: <Compass className="w-5 h-5 text-brand-red" />
  },
  {
    number: "04",
    title: "Production",
    tagline: "Workshop Fabrication",
    description: "Precision metal and timber fabrication in our workshops, AV prep, print production, and safety testing.",
    icon: <Hammer className="w-5 h-5 text-brand-red" />
  },
  {
    number: "05",
    title: "Execution",
    tagline: "Ground Direction",
    description: "Overnight rigging, soundchecks, talent cueing, timecoded show-calling, and live stage management.",
    icon: <PlayCircle className="w-5 h-5 text-brand-red" />
  },
  {
    number: "06",
    title: "Experience",
    tagline: "Measurable Impact",
    description: "Flawless guest immersion, post-event metrics review, prompt venue handover, and lasting brand loyalty.",
    icon: <Trophy className="w-5 h-5 text-brand-red" />
  }
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F3EE] border-b border-surface-borderLight relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up" className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-lightred text-brand-red px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-3">
            Execution Rigor
          </div>
          <h2 className="section-title font-heading font-black text-typography-main tracking-tight uppercase">
            Our 6-Step <span className="text-brand-red">Delivery Process</span>
          </h2>
          <p className="text-typography-muted text-base mt-3 max-w-2xl leading-relaxed">
            Every seamless moment on stage is protected by an ironclad operational methodology.
            Here is how we transition raw concepts into world-class spectacles.
          </p>
        </AnimatedSection>

        {/* Timeline Grid with Connecting Line */}
        <div className="relative">
          {/* Connecting Red Accent Line (desktop) */}
          <div
            className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-red/10 via-brand-red to-brand-red/10 -translate-y-12 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <AnimatedSection
                key={step.number}
                delay={idx * 0.1}
                direction="up"
                className="bg-white rounded-3xl p-6 border border-surface-borderLight shadow-sm hover:shadow-xl hover:border-brand-red transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-black text-2xl sm:text-3xl text-brand-red">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-lightred group-hover:bg-brand-red group-hover:text-white flex items-center justify-center transition-colors">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-typography-main group-hover:text-brand-red transition-colors mb-1">
                    {step.title}
                  </h3>

                  <p className="text-[11px] font-heading font-bold uppercase tracking-wider text-brand-red mb-3">
                    {step.tagline}
                  </p>

                  <p className="text-xs text-typography-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-[10px] font-bold text-typography-muted uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                  <span>Phase {step.number}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

