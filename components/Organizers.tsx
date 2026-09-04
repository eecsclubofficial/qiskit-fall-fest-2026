"use client";

import React from "react";
import ProfileCard from "./ProfileCard";
import { Terminal, Atom } from "lucide-react";

export function Organizers() {
  const eecsOrganizers = [
    {
      name: "EECS Club Lead",
      title: "Co-Organizer & Technical Lead",
      handle: "eecs_lead",
      status: "Organizer",
      avatarUrl: "/assets/clubs/eecs-club-logo.svg",
      innerGradient:
        "linear-gradient(160deg, rgba(24, 32, 48, 0.95) 0%, rgba(14, 18, 26, 0.98) 100%)",
    },
    {
      name: "Workshop Coordinator",
      title: "Qiskit Labs & Infrastructure",
      handle: "eecs_workshop",
      status: "Organizer",
      avatarUrl: "/assets/clubs/eecs-club-logo.svg",
      innerGradient:
        "linear-gradient(160deg, rgba(28, 26, 48, 0.95) 0%, rgba(14, 18, 26, 0.98) 100%)",
    },
    {
      name: "Hackathon Lead",
      title: "Ideathon & Problem Statements",
      handle: "eecs_hackathon",
      status: "Organizer",
      avatarUrl: "/assets/clubs/eecs-club-logo.svg",
      innerGradient:
        "linear-gradient(160deg, rgba(24, 32, 48, 0.95) 0%, rgba(14, 18, 26, 0.98) 100%)",
    },
  ];

  const physicsOrganizers = [
    {
      name: "Physics Club Lead",
      title: "Co-Organizer & Theory Lead",
      handle: "physics_lead",
      status: "Organizer",
      avatarUrl: "/assets/clubs/physics-club-logo.svg",
      innerGradient:
        "linear-gradient(160deg, rgba(38, 24, 36, 0.95) 0%, rgba(14, 18, 26, 0.98) 100%)",
    },
    {
      name: "Quantum Theory Lead",
      title: "Keynotes & Student Talks",
      handle: "physics_theory",
      status: "Organizer",
      avatarUrl: "/assets/clubs/physics-club-logo.svg",
      innerGradient:
        "linear-gradient(160deg, rgba(32, 24, 44, 0.95) 0%, rgba(14, 18, 26, 0.98) 100%)",
    },
    {
      name: "Logistics Coordinator",
      title: "Venue & Guest Relations",
      handle: "physics_event",
      status: "Organizer",
      avatarUrl: "/assets/clubs/physics-club-logo.svg",
      innerGradient:
        "linear-gradient(160deg, rgba(38, 24, 36, 0.95) 0%, rgba(14, 18, 26, 0.98) 100%)",
    },
  ];

  return (
    <section
      id="organizers"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0E1218]/70 backdrop-blur-sm border-t border-foundation-border/60"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono font-medium tracking-[0.2em] text-qiskit-pink uppercase mb-2">
            Organizing Committee
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
            Co-organized by student clubs at IISER Bhopal.
          </h2>
        </div>

        {/* 1. EECS Club Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-foundation-border/60">
            <div className="p-2 rounded bg-foundation-elevated border border-foundation-border">
              <Terminal className="w-5 h-5 text-qiskit-blue" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                EECS Club
              </h3>
              <p className="text-xs font-mono text-[#BDCDEF]">
                Electrical Engineering &amp; Computer Science · IISER Bhopal
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {eecsOrganizers.map((org, index) => (
              <ProfileCard
                key={index}
                name={org.name}
                title={org.title}
                handle={org.handle}
                status={org.status}
                contactText="Profile"
                avatarUrl={org.avatarUrl}
                showUserInfo={true}
                innerGradient={org.innerGradient}
              />
            ))}
          </div>
        </div>

        {/* 2. Physics Club Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-foundation-border/60">
            <div className="p-2 rounded bg-foundation-elevated border border-foundation-border">
              <Atom className="w-5 h-5 text-qiskit-pink" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                Physics Club
              </h3>
              <p className="text-xs font-mono text-[#BDCDEF]">
                Department of Physics · IISER Bhopal
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {physicsOrganizers.map((org, index) => (
              <ProfileCard
                key={index}
                name={org.name}
                title={org.title}
                handle={org.handle}
                status={org.status}
                contactText="Profile"
                avatarUrl={org.avatarUrl}
                showUserInfo={true}
                innerGradient={org.innerGradient}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
