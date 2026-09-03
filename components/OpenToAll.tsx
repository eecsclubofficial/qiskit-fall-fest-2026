"use client";

import React from "react";

export function OpenToAll() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#12161E] border-t border-foundation-border/60">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs font-mono font-medium tracking-[0.2em] text-qiskit-purple-light uppercase mb-3">
          Inclusive Community
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
          Open to all curious minds.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#E0E0E0]/85 leading-relaxed font-normal max-w-2xl mx-auto">
          Quantum computing is for everyone. Join a diverse cohort of physicists, computer scientists, mathematicians, and engineers.
        </p>
      </div>
    </section>
  );
}
