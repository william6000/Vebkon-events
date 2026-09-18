"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const active = testimonialsData[currentIndex];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-surface-borderLight relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-brand-red/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-lightred text-brand-red px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-3">
            Client Perspectives
          </div>
          <h2 className="section-title font-heading font-black text-typography-main tracking-tight uppercase">
            What Leaders Say About <br />
            <span className="text-brand-red">Our Event Production</span>
          </h2>
          <p className="text-typography-muted text-xs font-mono mt-2">
            {/* NOTE: DEMO / PLACEHOLDER TESTIMONIALS - Replace with verified client testimonials before production launch. */}
            Feedback from enterprise event coordinators, brand managers &amp; retail directors.
          </p>
        </AnimatedSection>

        {/* Testimonial Feature Showcase Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-[#F7F3EE] rounded-3xl p-8 sm:p-12 border border-surface-borderLight shadow-lg relative">
            <Quote className="w-12 h-12 text-brand-red/20 absolute top-8 right-8" />

            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-red text-brand-red" />
              ))}
            </div>

            {/* Quote Body */}
            <p className="font-heading font-medium text-lg sm:text-2xl text-typography-main leading-relaxed mb-8">
              &ldquo;{active.quote}&rdquo;
            </p>

            {/* Author Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-gray-200/80 gap-4">
              <div>
                <p className="font-heading font-extrabold text-lg text-typography-main">
                  {active.name}
                </p>
                <p className="text-xs text-typography-muted">
                  {active.role} • {active.industry}
                </p>
                <span className="inline-block mt-1 text-[11px] font-semibold text-brand-red bg-white px-2.5 py-0.5 rounded-full border border-brand-red/20">
                  {active.eventType} ({active.city})
                </span>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-white hover:bg-brand-red hover:text-white text-typography-main border border-surface-borderLight transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-typography-muted px-2">
                  {currentIndex + 1} / {testimonialsData.length}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-3 rounded-full bg-white hover:bg-brand-red hover:text-white text-typography-main border border-surface-borderLight transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

