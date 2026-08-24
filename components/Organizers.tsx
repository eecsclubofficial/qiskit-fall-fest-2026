"use client";

import React from "react";
import Image from "next/image";
import { Terminal, Atom, Globe, ExternalLink } from "lucide-react";

export function Organizers() {
  const clubs = [
    {
      name: "EECS Club",
      institution: "IISER Bhopal",
      role: "Co-organizing Department Club",
      badgeText: "Electrical Engineering & Computer Science",
      description:
        "The EECS Club is the student-led hub for computing, algorithms, hardware architectures, and AI at IISER Bhopal. For Fall Fest, the club leads technical workshops on Qiskit SDK workflows, quantum algorithms, and hackathon infrastructure.",
      color: "border-qiskit-purple/60 hover:border-qiskit-purple",
      tagColor: "text-qiskit-purple-light",
      icon: Terminal,
      logoSrc: "/assets/clubs/eecs-club-logo.svg",
      contactPlaceholder: "eecs.club@iiserb.ac.in",
    },
    {
      name: "Physics Club",
      institution: "IISER Bhopal",
      role: "Co-organizing Department Club",
      badgeText: "Department of Physics",
      description:
        "The Physics Club at IISER Bhopal fosters deep scientific inquiry across theoretical and experimental physics. In this Fall Fest, the club conducts foundational sessions on quantum mechanics, state vectors, superposition, and quantum optics.",
      color: "border-qiskit-pink/60 hover:border-qiskit-pink",
      tagColor: "text-qiskit-pink",
      icon: Atom,
      logoSrc: "/assets/clubs/physics-club-logo.svg",
      contactPlaceholder: "physics.club@iiserb.ac.in",
    },
  ];

  return (
    <section id="organizers" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0E1218] border-t border-foundation-border/60">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono font-medium tracking-[0.2em] text-qiskit-pink uppercase mb-2">
            Organizing Committee
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
            Co-organized by student clubs at IISER Bhopal.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#E0E0E0]/80">
            A collaborative initiative bridging foundational physics with computer science and engineering to accelerate quantum discovery.
          </p>
        </div>

        {/* Co-Organizers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {clubs.map((club) => {
            const Icon = club.icon;
            return (
              <div
                key={club.name}
                className={`bg-foundation-surface border ${club.color} rounded-lg p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 shadow-lg`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded bg-foundation-elevated border border-foundation-border">
                        <Icon className={`w-6 h-6 ${club.tagColor}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white tracking-tight">
                          {club.name}
                        </h3>
                        <p className="text-xs font-mono text-[#BDCDEF]">
                          {club.institution}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-foundation-elevated border border-foundation-border text-[#E0E0E0]">
                      {club.role}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-foundation-muted uppercase tracking-wider mb-3">
                    {club.badgeText}
                  </p>

                  <p className="text-sm text-[#E0E0E0]/85 leading-relaxed">
                    {club.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-foundation-border/60 flex items-center justify-between text-xs font-mono text-[#BDCDEF]">
                  <span>Contact: {club.contactPlaceholder}</span>
                  <span className="text-foundation-muted">IISERB Chapter</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Presenting Partner Strip */}
        <div className="bg-foundation-surface border border-foundation-border rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4 bg-foundation-elevated px-5 py-3 rounded border border-foundation-border">
              <div className="w-8 h-8 relative flex-shrink-0">
                <Image
                  src="/assets/brand/qiskit-purple.svg"
                  alt="Qiskit Icon"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-6 flex items-center">
                <Image
                  src="/assets/brand/ibm-quantum-white.png"
                  alt="IBM Quantum"
                  width={120}
                  height={24}
                  className="h-5 w-auto object-contain"
                />
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-qiskit-blue uppercase tracking-wider block mb-1">
                Global Presenting Partner
              </span>
              <h4 className="text-base sm:text-lg font-semibold text-white">
                IBM Quantum & Qiskit
              </h4>
              <p className="text-xs text-[#E0E0E0]/80 mt-0.5 max-w-xl">
                Providing official Fall Fest curriculum, open-source quantum tooling, hardware access credits, and event sponsorship.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-foundation-muted px-3 py-1.5 rounded bg-foundation-elevated border border-foundation-border">
              qiskit.org
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
