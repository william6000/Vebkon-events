"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Navigation, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { operationalStates } from "@/data/locations";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const OperationalPresence: React.FC = () => {
  const [selectedState, setSelectedState] = useState(operationalStates[0]);

  return (
    <section className="py-20 sm:py-28 bg-[#111111] text-white border-b border-surface-borderDark relative overflow-hidden">
      {/* Abstract geometric map silhouette / connection lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(#D71920_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up" className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 text-brand-lightred border border-brand-red/30 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-3">
            Regional Logistics Backbone
          </div>
          <h2 className="section-title font-heading font-black text-white tracking-tight uppercase">
            Execution Across <br />
            <span className="text-brand-red">North &amp; West India</span>
          </h2>
          <p className="text-gray-400 text-base mt-3 max-w-2xl leading-relaxed">
            From local activations to multi-city campaigns, our execution network enables events
            across key markets with centralized control and synchronized on-ground logistics.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* State Interactive Pills & List */}
          <div className="lg:col-span-6 space-y-3">
            <p className="text-xs font-heading font-bold uppercase tracking-widest text-gray-400 mb-4">
              Operational States &amp; Territories:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {operationalStates.map((state) => {
                const isSelected = selectedState.name === state.name;
                return (
                  <button
                    key={state.code}
                    onClick={() => setSelectedState(state)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between group ${
                      isSelected
                        ? "bg-brand-red border-brand-red text-white shadow-lg"
                        : "bg-surface-cardDark hover:bg-white/5 border-surface-borderDark text-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center ${
                          isSelected ? "bg-black/20 text-white" : "bg-white/10 text-brand-red"
                        }`}
                      >
                        {state.code}
                      </span>
                      <span className="font-heading font-bold text-sm tracking-wide">
                        {state.name}
                      </span>
                    </div>

                    <MapPin
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-white" : "text-gray-500 group-hover:text-brand-red"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-brand-lightred hover:text-white transition-colors"
              >
                <span>View Full Operational Coverage Details</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Regional Capability Details Card */}
          <div className="lg:col-span-6">
            <div className="bg-surface-cardDark border border-surface-borderDark rounded-3xl p-7 sm:p-9 shadow-2xl relative">
              <div className="flex items-center justify-between pb-6 border-b border-surface-borderDark mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-wider">
                    Territory Focus
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-white mt-1">
                    {selectedState.name}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
                  <Navigation className="w-6 h-6" />
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {selectedState.description}
              </p>

              <div>
                <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Frequent Execution Hubs:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedState.keyHubs.map((hub) => (
                    <span
                      key={hub}
                      className="bg-white/5 border border-white/10 text-gray-200 text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
                      <span>{hub}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-surface-borderDark flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-gray-400">Regional Deployment Speed</p>
                  <p className="font-heading font-bold text-sm text-white">Under 24-48 Hours</p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-crimson text-white px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  <span>Plan Event in {selectedState.name}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

