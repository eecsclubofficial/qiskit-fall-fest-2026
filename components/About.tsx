"use client";

import React from "react";
import Image from "next/image";
import { Terminal, Atom, Trophy } from "lucide-react";

export function About() {
  const stats = [
    {
      value: "150+",
      label: "Participants expected",
      sub: "Students & researchers",
      icon: UsersIcon,
      color: "text-qiskit-blue",
    },
    {
      value: "12+",
      label: "Sessions & workshops",
      sub: "From 101 to QPU runs",
      icon: Terminal,
      color: "text-qiskit-purple",
    },
    {
      value: "48h",
      label: "Hackathon sprint",
      sub: "Mentored project build",
      icon: Trophy,
      color: "text-qiskit-pink",
    },
    {
      value: "0",
      label: "Prior physics needed",
      sub: "Open to curious minds",
      icon: Atom,
      color: "text-qiskit-blue",
    },
  ];

  function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-foundation-bg border-t border-foundation-border/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
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
              <div className="aspect-[4/3] relative">
                <Image
                  src="/assets/photos/iiserb_quantum_lab.jpg"
                  alt="Quantum computing laboratory and collaboration session at IISER Bhopal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foundation-bg/90 via-transparent to-transparent" />
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

        {/* Stat Callouts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-foundation-surface border border-foundation-border rounded-lg p-5 sm:p-6 transition-all hover:border-foundation-muted"
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                  <span className="text-[10px] font-mono text-foundation-muted">
                    0{idx + 1}
                  </span>
                </div>
                <div className="flex items-baseline gap-0.5 mb-1">
                  <span className={`text-3xl sm:text-4xl font-mono font-semibold tracking-tight ${stat.color}`}>
                    {stat.value}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  {stat.label}
                </p>
                <p className="text-xs text-[#BDCDEF] mt-0.5">
                  {stat.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
