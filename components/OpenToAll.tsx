"use client";

import React from "react";
import { Sparkles, MapPin, Gift, CheckCircle2 } from "lucide-react";

export function OpenToAll() {
  const features = [
    {
      icon: Sparkles,
      title: "Beginner friendly",
      subtitle: "No quantum background needed",
      description:
        "Whether you are in your first year of undergraduate studies or an experienced software engineer, our curriculum starts with fundamental intuition and progressive coding labs.",
      points: [
        "Step-by-step Qiskit tutorials",
        "Dedicated student lab mentors",
        "Foundational linear algebra review",
      ],
      tag: "All backgrounds",
      tagColor: "text-qiskit-blue",
      borderColor: "hover:border-qiskit-blue",
    },
    {
      icon: MapPin,
      title: "In-person at IISER Bhopal",
      subtitle: "Collaborative campus experience",
      description:
        "Experience an immersive five-day fest across two weekends on the IISER Bhopal campus with dedicated compute lab spaces, lecture hall discussions, and face-to-face team hackathons.",
      points: [
        "Interactive lecture hall keynotes",
        "High-speed campus network access",
        "Peer study groups & team matchmaking",
      ],
      tag: "Hands-on labs",
      tagColor: "text-qiskit-purple-light",
      borderColor: "hover:border-qiskit-purple",
    },
    {
      icon: Gift,
      title: "Free to attend",
      subtitle: "Zero registration cost",
      description:
        "Qiskit Fall Fest 2026 is fully supported by IBM Quantum and IISER Bhopal. Registration, lab materials, cloud QPU compute credits, and swag are completely free.",
      points: [
        "IBM Quantum compute credits",
        "Official certificate of participation",
        "Qiskit merchandise & hackathon prizes",
      ],
      tag: "100% sponsored",
      tagColor: "text-qiskit-pink",
      borderColor: "hover:border-qiskit-pink",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#12161E] border-t border-foundation-border/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-mono font-medium tracking-[0.2em] text-qiskit-purple-light uppercase mb-2">
            Inclusive Community
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
            Open to all curious minds.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#E0E0E0]/80">
            Quantum computing is for everyone. Join a diverse cohort of physicists, computer scientists, mathematicians, and engineers.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`bg-foundation-surface border border-foundation-border rounded-lg p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 ${item.borderColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-2.5 rounded bg-foundation-elevated border border-foundation-border">
                      <Icon className={`w-5 h-5 ${item.tagColor}`} />
                    </div>
                    <span className={`text-xs font-mono px-2.5 py-1 rounded bg-foundation-elevated border border-foundation-border ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#BDCDEF] mb-4">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-[#E0E0E0]/85 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-foundation-border/60 space-y-2.5">
                  {item.points.map((pt, pidx) => (
                    <div key={pidx} className="flex items-center gap-2 text-xs font-mono text-[#BDCDEF]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-qiskit-blue flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
