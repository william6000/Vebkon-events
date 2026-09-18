"use client";

import React from "react";
import Image from "next/image";
import { Instagram, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const instagramPosts = [
  { id: 1, image: "/social/insta-1.svg", label: "Lighting console calibration for arena show" },
  { id: 2, image: "/social/insta-2.svg", label: "Late-night structural fabrication in workshop" },
  { id: 3, image: "/social/insta-3.svg", label: "Curved P3 LED display soundcheck & rehearse" },
  { id: 4, image: "/social/insta-4.svg", label: "Heritage mandap floral chandelier installation" },
  { id: 5, image: "/social/insta-5.svg", label: "Industrial trade fair booth final touchups" },
  { id: 6, image: "/social/insta-6.svg", label: "Pre-event safety briefing for ground stewards" }
];

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F3EE] border-b border-surface-borderLight relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <AnimatedSection direction="up" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-lightred text-brand-red px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-3">
              <Instagram className="w-3.5 h-3.5" />
              <span>@vebkon_events</span>
            </div>
            <h2 className="section-title font-heading font-black text-typography-main tracking-tight uppercase">
              Behind The <span className="text-brand-red">Events.</span>
            </h2>
            <p className="text-typography-muted text-base mt-2">
              Follow our latest setups, activations, launches and celebrations on Instagram.
            </p>
          </AnimatedSection>

          <div className="mt-6 md:mt-0">
            <a
              href="https://www.instagram.com/vebkon_events"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface-dark hover:bg-brand-red text-white px-6 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow @vebkon_events</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Instagram Post Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, idx) => (
            <AnimatedSection
              key={post.id}
              delay={idx * 0.05}
              direction="up"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-black border border-surface-borderLight shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={post.image}
                alt={post.label}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover overlay with Instagram icon and caption */}
              <a
                href="https://www.instagram.com/vebkon_events"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-brand-red/85 p-3 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white"
              >
                <Instagram className="w-6 h-6 mb-2" />
                <p className="text-[11px] font-semibold line-clamp-3 leading-tight">
                  {post.label}
                </p>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

