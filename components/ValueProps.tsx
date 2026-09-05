"use client";

import React from "react";
import { BookOpen, Cpu, Users } from "lucide-react";

export function ValueProps() {
  const cards = [
    {
      num: "01",
      title: "Learn",
      subtitle: "Foundations to quantum SDK",
      description:
        "Master quantum circuits, superposition, and entanglement through guided workshops led by researchers and student mentors from IISER Bhopal.",
      icon: BookOpen,
      accentBorder: "hover:border-qiskit-blue",
      numColor: "text-qiskit-blue",
    },
    {
      num: "02",
      title: "Build",
      subtitle: "Algorithms on real hardware",
      description:
        "Write algorithms using Qiskit, experiment with quantum applications and optimization, and execute circuits on IBM Quantum systems.",
      icon: Cpu,
      accentBorder: "hover:border-qiskit-purple",
      numColor: "text-qiskit-purple",
    },
    {
      num: "03",
      title: "Collaborate",
      subtitle: "Multidisciplinary hackathon",
      description:
        "Team up across multiple domains to solve open problems in quantum computing and compete for hackathon prizes.",
      icon: Users,
      accentBorder: "hover:border-qiskit-pink",
      numColor: "text-qiskit-pink",
    },
  ];

  return (
    <section id="highlights" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-foundation-border/60 bg-[#0E1218]/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono font-medium tracking-[0.2em] text-qiskit-purple-light uppercase mb-2">
            Why take part
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
            Learn, build, and collaborate on quantum technologies
          </h2>
        </div>

        {/* 3 Structured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className={`group relative bg-foundation-surface border border-foundation-border rounded-lg p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${card.accentBorder}`}
              >
                <div>
                  {/* Top Bar: Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-3xl font-mono font-semibold ${card.numColor}`}>
                      {card.num}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded bg-foundation-elevated border border-foundation-border">
                      <Icon className={`w-5 h-5 ${card.numColor}`} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white tracking-tight">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-sm font-medium text-[#BE95FF] mb-3">
                    {card.subtitle}
                  </p>

                  <p className="text-sm text-[#E0E0E0]/80 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
