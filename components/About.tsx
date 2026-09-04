"use client";

import React from "react";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-foundation-bg/70 backdrop-blur-sm border-t border-foundation-border/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Story (Col 7) */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-6">
              A premier collegiate quantum computing fest at IISER Bhopal.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#E0E0E0]/85 leading-relaxed font-normal">
              <p>
                IBM Qiskit Fall Fest is a global series of collegiate quantum events hosted at leading universities worldwide. Each Fall Fest provides students with exclusive access to world-class quantum learning materials, technical mentorship, and real quantum computing systems.
              </p>
              <p>
                The 2026 IISER Bhopal edition is co-organized as an interdisciplinary collaboration between the <span className="text-white font-medium">Electrical Engineering & Computer Science (EECS) Club</span> and the <span className="text-white font-medium">Physics Club</span>. Together, we bring quantum computing from theoretical physics equations into hands-on code and tangible algorithmic execution.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono px-3 py-1.5 rounded bg-foundation-surface border border-foundation-border text-qiskit-purple-light">
                IISERB EECS Club
              </span>
              <span className="text-xs font-mono px-3 py-1.5 rounded bg-foundation-surface border border-foundation-border text-qiskit-pink">
                IISERB Physics Club
              </span>
            </div>
          </div>

          {/* Photo & Sticker Visual (Col 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-foundation-border shadow-2xl bg-foundation-surface">
              <div className="aspect-[4/3] relative bg-gradient-to-b from-[#161B26] to-[#0D1117] flex items-center justify-center p-6">
                <Image
                  src="/assets/images/iiserb_Drone.svg"
                  alt="Aerial drone view of IISER Bhopal campus"
                  fill
                  className="object-contain p-4 drop-shadow-[0_0_20px_rgba(69,137,255,0.25)]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Caption */}
              <div className="p-4 border-t border-foundation-border/80 bg-foundation-surface/90 flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono font-medium text-white">
                    Quantum Lab & Collaboration Space
                  </p>
                  <p className="text-[11px] font-mono text-[#BDCDEF]">
                    IISER Bhopal Campus
                  </p>
                </div>
                <div className="w-8 h-8 relative flex-shrink-0">
                  <Image
                    src="/assets/brand/qiskit-purple.svg"
                    alt="Qiskit Icon"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
