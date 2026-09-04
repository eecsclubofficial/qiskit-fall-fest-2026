"use client";

import React from "react";
import Image from "next/image";
import { MapPin, ExternalLink, Sparkles, Building, Layers } from "lucide-react";

export function Venue() {
  const highlights = [
    {
      icon: Building,
      title: "Lecture Hall Complex (LHC)",
      desc: "Tiered multimedia lecture halls equipped for hybrid keynotes, panel discussions, and student lightning talks.",
    },
    {
      icon: Layers,
      title: "Advanced Compute & Labs",
      desc: "Dedicated lab spaces with high-speed network connections for cloud QPU transpilation and Jupyter workflows.",
    },
    {
      icon: Sparkles,
      title: "200-Acre Green Campus",
      desc: "An inspiring research ecosystem located in Bhauri, Bhopal, fostering interdisciplinary science and technology.",
    },
  ];

  return (
    <section
      id="venue"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-foundation-bg/70 backdrop-blur-sm border-t border-foundation-border/60"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Host Campus Information (Col 6) */}
          <div className="lg:col-span-6 flex flex-col">
            <p className="text-xs font-mono font-medium tracking-[0.2em] text-qiskit-blue uppercase mb-2">
              Host Campus
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-6">
              IISER Bhopal, an institute of national importance.
            </h2>

            <div className="space-y-4 text-base text-[#E0E0E0]/85 leading-relaxed font-normal mb-8">
              <p>
                Set across 200 acres in Bhauri, the Indian Institute of Science Education and Research (IISER) Bhopal provides state-of-the-art computational infrastructure, lecture auditoriums, and cutting-edge experimental physics research facilities.
              </p>
              <p>
                Established by the Ministry of Education, Government of India, IISER Bhopal is a premier research institute dedicated to scientific inquiry, advanced computing, and interdisciplinary innovation.
              </p>
            </div>

            {/* Key Campus Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-foundation-surface border border-foundation-border flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded bg-foundation-elevated border border-foundation-border text-qiskit-blue flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#BDCDEF] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Address & Google Maps link */}
            <div className="p-4 rounded-lg bg-foundation-surface border border-foundation-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono font-medium text-white">
                  IISER Bhopal Main Campus
                </p>
                <p className="text-[11px] font-mono text-[#BDCDEF] mt-0.5">
                  Bhopal Bypass Road, Bhauri, Bhopal, MP 462066
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=IISER+Bhopal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-foundation-elevated hover:bg-foundation-border border border-foundation-border text-xs font-mono text-white transition-colors self-start sm:self-auto"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#BDCDEF]" />
              </a>
            </div>
          </div>

          {/* Right Column: Campus Image Visual (Col 6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-foundation-border shadow-2xl bg-foundation-surface">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/assets/images/iiserb.jpeg"
                  alt="IISER Bhopal Campus Architecture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foundation-surface/90 backdrop-blur-md border border-foundation-border text-xs font-mono text-white shadow-lg">
                  <MapPin className="w-3.5 h-3.5 text-qiskit-pink" />
                  <span>Lecture Hall Complex (LHC)</span>
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="p-5 bg-foundation-surface/95 border-t border-foundation-border flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Main Event Venue
                  </h4>
                  <p className="text-xs font-mono text-[#BDCDEF] mt-0.5">
                    Lecture Hall Complex &amp; Multimedia Rooms · IISER Bhopal
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-foundation-elevated border border-foundation-border text-qiskit-blue">
                  In-Person
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
