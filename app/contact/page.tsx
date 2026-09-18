import React, { Suspense } from "react";
import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  Navigation,
  Clock,
  ShieldCheck,
  HelpCircle
} from "lucide-react";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { officeLocations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Contact Us & Plan Your Event | Vebkon Events",
  description:
    "Get in touch with Vebkon Events in Dehradun and Lucknow. Call +91 97566 66623, chat on WhatsApp, or send your event brief.",
};

const faqs = [
  {
    q: "How early should we initiate the event planning process?",
    a: "For large-scale corporate conventions, trade exhibition booths, and multi-city activations, we recommend initiating discussions 3 to 6 weeks in advance. However, for urgent fabrications and regional meetings, our fast-track team can mobilize within 5 to 7 days."
  },
  {
    q: "Does Vebkon handle both creative conceptualization and physical production?",
    a: "Yes. We are a turnkey agency. We provide 3D CAD visualization, stage structural blueprints, in-house carpentry/metal fabrication, line-array audio, intelligent lighting, artist management, and on-ground show-calling under single-source accountability."
  },
  {
    q: "Can you execute events outside Dehradun and Lucknow?",
    a: "Absolutely. We operate across 7 primary states: Uttar Pradesh, Uttarakhand, Delhi NCR, Rajasthan, Haryana, Punjab, and Gujarat. Our logistics fleet and ground directors deploy across India."
  },
  {
    q: "How are budgets structured for custom exhibition stalls?",
    a: "Our quotation is fully itemized, covering structural steel/timber fabrication, vinyl and paint finishes, furniture rentals, 3-phase electrical lines, lighting, audiovisual kiosks, and post-event dismantling."
  }
];

export default function ContactPage() {
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
              Connect With Leadership
            </div>

            <h1 className="hero-title font-heading font-black text-white tracking-tight uppercase mb-6">
              Start Planning <br />
              <span className="text-brand-red">Your Next Event</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Have an upcoming conference, product launch, exhibition booth, or royal celebration?
              Connect directly with our senior event directors via WhatsApp, phone, or our detailed enquiry brief.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Form + Office Details */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Action Hubs */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <a
                href="https://wa.me/919756666623"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-3xl bg-[#25D366] text-white shadow-lg hover:bg-[#20ba59] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs font-heading font-bold uppercase tracking-wider text-white/90">
                      Instant WhatsApp Chat
                    </p>
                    <p className="font-heading font-extrabold text-xl text-white">
                      +91 97566 66623
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                  Online
                </span>
              </a>

              <a
                href="tel:+919756666623"
                className="p-6 rounded-3xl bg-white border border-surface-borderLight shadow-sm hover:border-brand-red hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-lightred text-brand-red group-hover:bg-brand-red group-hover:text-white flex items-center justify-center transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-heading font-bold uppercase tracking-wider text-typography-muted">
                      Direct Executive Call
                    </p>
                    <p className="font-heading font-extrabold text-xl text-typography-main group-hover:text-brand-red transition-colors">
                      +91 97566 66623
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/vebkon_events"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-3xl bg-white border border-surface-borderLight shadow-sm hover:border-brand-red hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F7F3EE] text-brand-red group-hover:bg-brand-red group-hover:text-white flex items-center justify-center transition-colors">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-heading font-bold uppercase tracking-wider text-typography-muted">
                      Instagram Behind-The-Scenes
                    </p>
                    <p className="font-heading font-extrabold text-xl text-typography-main group-hover:text-brand-red transition-colors">
                      @vebkon_events
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Office Locations */}
            <div className="space-y-4 pt-4">
              <h3 className="font-heading font-extrabold text-lg text-typography-main uppercase tracking-wide">
                Physical Office Addresses
              </h3>

              {officeLocations.map((office) => (
                <div
                  key={office.id}
                  className="bg-white rounded-3xl p-6 border border-surface-borderLight shadow-xs"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-brand-red bg-brand-lightred px-2.5 py-0.5 rounded-full">
                      {office.city} Hub
                    </span>
                    <a
                      href={office.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1"
                    >
                      <span>Map</span>
                      <Navigation className="w-3 h-3" />
                    </a>
                  </div>

                  <h4 className="font-heading font-extrabold text-base text-typography-main mb-1">
                    {office.title}
                  </h4>

                  <p className="text-xs text-typography-muted leading-relaxed">
                    {office.fullAddress}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 text-center">Loading enquiry form...</div>}>
              <EnquiryForm />
            </Suspense>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-surface-borderLight">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-lightred text-brand-red px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="section-title font-heading font-black text-typography-main uppercase tracking-tight">
              Event Planning <span className="text-brand-red">FAQ</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#F7F3EE] rounded-2xl p-6 border border-surface-borderLight"
              >
                <h3 className="font-heading font-extrabold text-base text-typography-main mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-typography-muted leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

