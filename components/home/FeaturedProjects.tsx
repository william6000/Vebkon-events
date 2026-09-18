"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Sparkles, X, CheckCircle2 } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-surface-borderLight relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <AnimatedSection direction="up" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-lightred text-brand-red px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-3">
              Portfolio &amp; Case Studies
            </div>
            <h2 className="section-title font-heading font-black text-typography-main tracking-tight uppercase">
              Featured <span className="text-brand-red">Productions</span>
            </h2>
            <p className="text-typography-muted text-base mt-3 leading-relaxed">
              Explore key setups spanning corporate summits, commercial brand activations,
              trade exhibition stalls, theatrical unveilings, and royal destination decor.
            </p>
          </AnimatedSection>

          <div className="mt-6 md:mt-0">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-surface-dark hover:bg-black text-white px-6 py-3.5 rounded-full font-heading font-bold text-xs tracking-wider uppercase shadow-md transition-colors"
            >
              <span>Explore All Projects</span>
              <ArrowUpRight className="w-4 h-4 text-brand-red" />
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <AnimatedSection
              key={project.id}
              delay={idx * 0.1}
              direction="up"
              className="group bg-[#F7F3EE] rounded-3xl overflow-hidden border border-surface-borderLight hover:border-brand-red/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative w-full h-56 bg-black overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-typography-main text-[11px] font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Location Badge */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-1 text-white text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-brand-red" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-extrabold text-xl text-typography-main group-hover:text-brand-red transition-colors mb-2 line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-typography-muted leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {/* Metrics snippet */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-200/80">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="text-[11px]">
                        <span className="text-typography-muted block">{m.label}:</span>
                        <strong className="text-typography-main font-bold text-xs">{m.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl bg-white border border-surface-borderLight text-xs font-heading font-bold uppercase tracking-wider text-typography-main group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all"
                >
                  <span>View Project Specs</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Project Quick View Modal Drawer */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-surface-borderLight p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-brand-red hover:text-white transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6 bg-black">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-brand-red text-white text-xs font-heading font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {selectedProject.categoryLabel}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-medium text-typography-muted">
                <MapPin className="w-3.5 h-3.5 text-brand-red" />
                <span>{selectedProject.location}</span>
                <span>•</span>
                <span>Production Year: {selectedProject.year}</span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-typography-main">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-typography-muted leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Metrics Highlights */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-[#F7F3EE] rounded-2xl border border-surface-borderLight">
                {selectedProject.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="text-[11px] text-typography-muted uppercase tracking-wider">
                      {m.label}
                    </p>
                    <p className="font-heading font-extrabold text-brand-red text-base sm:text-lg">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Deliverables */}
              <div>
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-typography-main mb-3">
                  Scope of Deliverables
                </h4>
                <div className="space-y-2">
                  {selectedProject.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-typography-main">
                      <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-crimson text-white px-6 py-3 rounded-full text-xs font-heading font-bold uppercase tracking-wider shadow-md transition-colors"
                >
                  <span>Request Similar Event Quote</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-semibold text-typography-muted hover:text-brand-red"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

