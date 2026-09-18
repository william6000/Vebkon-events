"use client";

import React from "react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { VebkonWatermark } from "@/components/ui/VebkonWatermark";

export const BrandStatement: React.FC = () => {
  const kineticWords = [
    { word: "IDEATE", desc: "Creative vision & strategy" },
    { word: "DESIGN", desc: "3D CAD & spatial aesthetics" },
    { word: "BUILD", desc: "Precision in-house fabrication" },
    { word: "EXECUTE", desc: "Rigorous ground direction" },
    { word: "DELIVER", desc: "Lasting emotional impact" }
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-white border-b border-surface-borderLight overflow-hidden">
      {/* Background Watermark */}
      <VebkonWatermark text="VEBKON EXPERIENCES" variant="outline" direction="left" className="-top-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up" className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-brand-lightred text-brand-red px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-6">
            The Vebkon Ethos
          </div>

          <h2 className="statement-title font-heading font-black text-typography-main tracking-tight uppercase leading-tight mb-8">
            We don’t just organise events. <br />
            <span className="text-brand-red">We design experiences</span> that redefine your brand.
          </h2>

          <p className="text-base sm:text-lg text-typography-muted leading-relaxed max-w-2xl mb-12">
            Every memorable event is the culmination of strategic planning, architectural design,
            robust fabrication, and seamless on-ground showmanship. Headquartered with execution
            depots in Dehradun and Lucknow, Vebkon Events serves as the trusted production backbone
            for India’s most demanding enterprises.
          </p>
        </AnimatedSection>

        {/* Kinetic Execution Sequence */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 pt-6 border-t border-gray-100">
          {kineticWords.map((item, idx) => (
            <AnimatedSection
              key={item.word}
              delay={idx * 0.1}
              direction="up"
              className="p-5 rounded-2xl bg-[#F7F3EE] hover:bg-brand-red hover:text-white group transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-xs font-mono font-bold text-brand-red group-hover:text-white/80 mb-2">
                0{idx + 1}
              </div>
              <p className="font-heading font-extrabold text-lg sm:text-xl text-typography-main group-hover:text-white tracking-wider mb-1">
                {item.word}
              </p>
              <p className="text-xs text-typography-muted group-hover:text-white/80 transition-colors">
                {item.desc}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

