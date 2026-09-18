"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const StatementCTA: React.FC = () => {
  const whatsappUrl =
    "https://wa.me/919756666623?text=Hello%20Vebkon%20Events%2C%20I%20have%20an%20event%20in%20mind%20and%20would%20like%20to%20discuss%20with%20your%20team.";

  return (
    <section className="py-20 sm:py-28 bg-brand-red text-white relative overflow-hidden">
      {/* Abstract dark curves in background */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-[36rem] h-[36rem] rounded-full bg-brand-crimson/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 w-[36rem] h-[36rem] rounded-full bg-brand-darkred/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <AnimatedSection direction="up" className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-widest text-white mb-6 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turn Ambition Into Reality</span>
          </div>

          <p className="font-heading font-extrabold text-sm sm:text-base uppercase tracking-widest text-white/80 mb-3">
            Have An Event In Mind?
          </p>

          <h2 className="statement-title font-heading font-black tracking-tight uppercase text-white mb-8">
            Let&apos;s Build Something <br className="hidden sm:block" />
            People Will Remember.
          </h2>

          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Whether you are planning an executive conclave, a multi-city activation tour,
            an exhibition pavilion, or a flagship launch, our directors are ready to discuss your brief.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-brand-red hover:bg-[#F7F3EE] px-8 py-4 rounded-full font-heading font-bold text-sm tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-full font-heading font-bold text-sm tracking-wider uppercase shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Us Now</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-heading font-semibold text-white/80 tracking-wider uppercase">
            <span>Direct Call: +91 97566 66623</span>
            <span>•</span>
            <span>Dehradun Hub</span>
            <span>•</span>
            <span>Lucknow Hub</span>
            <span>•</span>
            <span>Pan-India Turnkey</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

