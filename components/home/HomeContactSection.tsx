"use client";

import React from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const HomeContactSection: React.FC = () => {
  return (
    <section id="enquire" className="py-20 sm:py-28 bg-[#F7F3EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Guarantees */}
          <AnimatedSection direction="up" className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-lightred text-brand-red px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-3">
                Event Brief Consultation
              </div>
              <h2 className="section-title font-heading font-black text-typography-main tracking-tight uppercase">
                Initiate Your <br />
                <span className="text-brand-red">Event Enquiry</span>
              </h2>
              <p className="text-typography-muted text-base mt-4 leading-relaxed">
                Whether you need turnkey production from scratch, custom stall fabrication, or
                urgent AV sound reinforcement, connect directly with our operational leadership.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3">
              <a
                href="tel:+919756666623"
                className="p-5 rounded-2xl bg-white border border-surface-borderLight shadow-xs hover:border-brand-red hover:shadow-md transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-lightred text-brand-red group-hover:bg-brand-red group-hover:text-white flex items-center justify-center transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-typography-muted uppercase tracking-wider font-bold">
                    Direct Phone Line
                  </p>
                  <p className="font-heading font-extrabold text-lg text-typography-main group-hover:text-brand-red transition-colors">
                    +91 97566 66623
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/919756666623"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-surface-borderLight shadow-xs hover:border-[#25D366] hover:shadow-md transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white flex items-center justify-center transition-colors">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-xs text-typography-muted uppercase tracking-wider font-bold">
                    WhatsApp Desk
                  </p>
                  <p className="font-heading font-extrabold text-lg text-typography-main group-hover:text-[#25D366] transition-colors">
                    Chat with Event Director
                  </p>
                </div>
              </a>
            </div>

            {/* Guarantees */}
            <div className="p-6 rounded-2xl bg-white/70 border border-surface-borderLight space-y-3">
              <div className="flex items-start gap-3 text-xs text-typography-main">
                <Clock className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>
                  <strong>2-Hour Response Time:</strong> Initial brief review and preliminary feasibility estimate.
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs text-typography-main">
                <ShieldCheck className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>
                  <strong>Commercial Confidentiality:</strong> Complete NDA protection for unreleased products &amp; proprietary brand launches.
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

