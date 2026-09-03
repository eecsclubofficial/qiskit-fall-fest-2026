"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Calendar, MapPin } from "lucide-react";
import { QuantumBackground } from "./QuantumBackground";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] md:min-h-[96vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <QuantumBackground />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center pointer-events-none">
        {/* Fall Fest Official 2026 Badge Mark */}
        <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-foundation-surface/80 backdrop-blur-md border border-foundation-border/80 shadow-lg shadow-black/40 pointer-events-auto transition-transform hover:scale-105 duration-200">
          <div className="w-4 h-4 relative flex-shrink-0">
            <Image
              src="/assets/brand/qiskit-purple.svg"
              alt="Qiskit Icon"
              width={16}
              height={16}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xs font-mono font-medium tracking-wider text-qiskit-pink uppercase">
            Qiskit Fall Fest 2026
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-foundation-muted" />
          <span className="text-xs font-mono text-[#E0E0E0]/80">
            IISER Bhopal
          </span>
        </div>

        {/* Display Headline - Sentence case per deck guidelines */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white max-w-4xl leading-[1.08] mb-6 drop-shadow-sm">
          IBM Qiskit Fall Fest 2026
        </h1>

        {/* Subtitle / Tagline - Sentence case, concise under 20 words */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#E0E0E0] max-w-2xl mx-auto font-normal leading-relaxed mb-8 drop-shadow-sm">
          Quantum computing, built together at IISER Bhopal.
        </p>

        {/* Event Window & Host Info Strip */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono text-[#BDCDEF] pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-foundation-surface/75 backdrop-blur-md border border-foundation-border/80 shadow-md">
            <Calendar className="w-4 h-4 text-qiskit-blue" />
            <span>October 2026 · Date to be announced</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-foundation-surface/75 backdrop-blur-md border border-foundation-border/80 shadow-md">
            <MapPin className="w-4 h-4 text-qiskit-pink" />
            <span>IISER Bhopal Campus · In-person</span>
          </div>
        </div>

        {/* CTAs: 1 Primary + 1 Secondary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md pointer-events-auto">
          <a
            href="#register"
            className="w-full sm:w-auto min-w-[190px] px-7 py-3.5 text-sm font-semibold tracking-wide text-white bg-qiskit-magenta hover:bg-[#d83f81] active:scale-[0.98] transition-all rounded text-center shadow-lg shadow-qiskit-magenta/20 focus-visible:ring-2 focus-visible:ring-qiskit-magenta"
          >
            Register interest
          </a>
          <a
            href="#schedule"
            className="w-full sm:w-auto min-w-[190px] inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide text-foundation-light hover:text-white bg-foundation-surface/80 hover:bg-foundation-surface/95 backdrop-blur-md border border-foundation-border hover:border-foundation-muted active:scale-[0.98] transition-all rounded text-center shadow-md"
          >
            <span>Explore the schedule</span>
            <ArrowDown className="w-4 h-4 text-[#BDCDEF]" />
          </a>
        </div>
      </div>
    </section>
  );
}
