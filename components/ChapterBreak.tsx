"use client";

import React from "react";

interface ChapterBreakProps {
  number?: string;
  tag?: string;
  headline: string;
  description?: string;
}

export function ChapterBreak({
  number = "01",
  tag = "Programme",
  headline,
  description,
}: ChapterBreakProps) {
  return (
    <div className="w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#161616] border-y border-foundation-border relative overflow-hidden">
      {/* Subtle line motif */}
      <div className="absolute top-0 right-0 w-96 h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
          <line x1="0" y1="0" x2="400" y2="300" stroke="#4589FF" strokeWidth="2" />
          <line x1="100" y1="0" x2="400" y2="200" stroke="#A46DFF" strokeWidth="1.5" />
          <circle cx="200" cy="150" r="80" stroke="#FF7EB6" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-foundation-elevated border border-foundation-border text-qiskit-blue">
            Chapter {number}
          </span>
          <span className="text-xs font-mono text-[#BDCDEF]">
            {tag}
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] max-w-4xl">
          {headline}
        </h2>

        {description && (
          <p className="mt-6 text-base sm:text-xl text-[#E0E0E0]/80 max-w-2xl font-normal leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
