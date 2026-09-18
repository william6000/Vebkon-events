"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Sparkles,
  ArrowUpRight,
  X,
  CheckCircle2,
  Calendar,
  Filter
} from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";
import { StatementCTA } from "@/components/home/StatementCTA";

const categories = [
  { label: "All Works", value: "All" },
  { label: "Corporate Events", value: "Corporate" },
  { label: "Brand Activations", value: "Activation" },
  { label: "Exhibition Stalls", value: "Exhibition" },
  { label: "Launch Events", value: "Launch" },
  { label: "Weddings", value: "Wedding" },
  { label: "Stage & Production", value: "Production" },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-surface-offwhite min-h-screen">
      {/* Portfolio Hero */}
      <section className="py-20 sm:py-28 bg-[#111111] text-white relative overflow-hidden border-b border-surface-borderDark">
        <div
          className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-red/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-brand-lightred border border-white/15 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-6">
              Production Portfolio
            </div>

            <h1 className="hero-title font-heading font-black text-white tracking-tight uppercase mb-6">
              Execution In <br />
              <span className="text-brand-red">Every Dimension.</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Explore key project blueprints, stage architecture, custom stalls, and theatrical
              unveilings crafted for premier brands and private gatherings across India.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-surface-borderLight py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-brand-red mr-1 shrink-0" />
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setActiveCategory(c.value)}
                className={`px-4 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeCategory === c.value
                    ? "bg-brand-red text-white shadow-sm"
                    : "bg-[#F7F3EE] text-typography-main hover:bg-gray-200"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-typography-muted font-mono hidden md:block shrink-0">
            Showing {filteredProjects.length} Projects
          </span>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden border border-surface-borderLight shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full h-64 bg-black overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-typography-main text-[11px] font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {project.categoryLabel}
                  </div>
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-white text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-brand-red" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-extrabold text-xl text-typography-main group-hover:text-brand-red transition-colors mb-2 line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-typography-muted leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="text-center bg-[#F7F3EE] p-2 rounded-xl">
                        <p className="text-[10px] text-typography-muted uppercase tracking-wider">
                          {m.label}
                        </p>
                        <strong className="text-xs font-heading font-bold text-typography-main">
                          {m.value}
                        </strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 px-4 rounded-xl bg-[#F7F3EE] hover:bg-brand-red hover:text-white border border-surface-borderLight text-xs font-heading font-bold uppercase tracking-wider text-typography-main transition-colors flex items-center justify-between"
                >
                  <span>View Project Specs</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Preview */}
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
                <span>Year: {selectedProject.year}</span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-typography-main">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-typography-muted leading-relaxed">
                {selectedProject.description}
              </p>

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
                  <span>Enquire For Similar Project</span>
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

      {/* CTA */}
      <StatementCTA />
    </div>
  );
}

