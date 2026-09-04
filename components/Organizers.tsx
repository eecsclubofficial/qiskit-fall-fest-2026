"use client";

import React from "react";
import Image from "next/image";
import ProfileCard from "./ProfileCard";
import { Users, Building2, Terminal, Atom, Mail } from "lucide-react";

export function Organizers() {
  const organizers = [
    {
      name: "Harshit Sen",
      title: "Lead Organizer",
      handle: "harshits24",
      status: "Dept of Chemistry",
      email: "harshits24@iiserb.ac.in",
      linkedinUrl: "https://www.linkedin.com/in/sen-harshit",
      githubUrl: undefined,
      avatarUrl: "/assets/images/harshit.jpg",
      innerGradient:
        "linear-gradient(160deg, rgba(28, 36, 56, 0.95) 0%, rgba(14, 18, 26, 0.98) 100%)",
    },
    {
      name: "Kushagra Agarwal",
      title: "Student Advisor",
      handle: "kushagra23",
      status: "Data Science & Engg",
      email: "kushagra23@iiserb.ac.in",
      linkedinUrl: "https://www.linkedin.com/in/kushagra-agarwal525/",
      githubUrl: "https://github.com/KushagraAgarwal525",
      avatarUrl: "/assets/images/kushagra.jpg",
      innerGradient:
        "linear-gradient(160deg, rgba(32, 26, 52, 0.95) 0%, rgba(14, 18, 26, 0.98) 100%)",
    },
    {
      name: "Vatsal Agarwal",
      title: "Co-Organizer",
      handle: "vatsal24",
      status: "Electrical & CS",
      email: "vatsal24@iiserb.ac.in",
      linkedinUrl: "https://www.linkedin.com/in/vatsal-agarwal-1710s",
      githubUrl: "https://github.com/Vatsal324",
      avatarUrl: "/assets/images/vatsal.jpg",
      innerGradient:
        "linear-gradient(160deg, rgba(24, 32, 48, 0.95) 0%, rgba(14, 18, 26, 0.98) 100%)",
    },
    {
      name: "Nikhil Vashisht",
      title: "Co-Organizer",
      handle: "nikhilv24",
      status: "Electrical & CS",
      email: "nikhilv24@iiserb.ac.in",
      linkedinUrl: "https://nikhilv.dev/linkedin",
      githubUrl: "https://nikhilv.dev/github",
      avatarUrl: "/assets/images/Nikhil.webp",
      innerGradient:
        "linear-gradient(160deg, rgba(24, 32, 48, 0.95) 0%, rgba(14, 18, 26, 0.98) 100%)",
    },
    {
      name: "B. Sai Chaitanya",
      title: "Coordinator, Physics Club",
      handle: "bavandla24",
      status: "Dept of Physics",
      email: "bavandla24@iiserb.ac.in",
      linkedinUrl: undefined,
      githubUrl: undefined,
      avatarUrl: "/assets/images/sai.jpg",
      innerGradient:
        "linear-gradient(160deg, rgba(38, 24, 36, 0.95) 0%, rgba(14, 18, 26, 0.98) 100%)",
    },
    {
      name: "Mohammad Ruvaifa",
      title: "Coordinator, EECS Club",
      handle: "mohammad24",
      status: "Electrical & CS",
      email: "mohammad24@iiserb.ac.in",
      linkedinUrl: "https://www.linkedin.com/in/ruvaifa-mohammad-a5648a300",
      githubUrl: "https://github.com/Ruvaifa",
      websiteUrl: "https://ruvaifa.site/",
      avatarUrl: "/assets/images/ruvaifa.png",
      innerGradient:
        "linear-gradient(160deg, rgba(28, 30, 48, 0.95) 0%, rgba(14, 18, 26, 0.98) 100%)",
    },
  ];

  const clubs = [
    {
      name: "EECS Club",
      fullName: "Electrical Engineering & Computer Science Club",
      institution: "IISER Bhopal",
      description:
        "Fostering computational systems research, quantum algorithm workshops, and hands-on coding labs using the IBM Qiskit SDK.",
      icon: Terminal,
      logoUrl: "/assets/clubs/eecs-club-logo.svg",
      tag: "Computing & Software",
      tagColor: "text-qiskit-blue border-qiskit-blue/40 bg-qiskit-blue/10",
      accentBorder: "hover:border-qiskit-blue",
      email: "eecs.club@iiserb.ac.in",
    },
    {
      name: "Physics Club",
      fullName: "Department of Physics Student Club",
      institution: "IISER Bhopal",
      description:
        "Bridging fundamental quantum physics foundations with modern quantum information science, theoretical keynotes, and student research seminars.",
      icon: Atom,
      logoUrl: "/assets/clubs/physics-club-logo.svg",
      tag: "Quantum Physics & Theory",
      tagColor: "text-qiskit-pink border-qiskit-pink/40 bg-qiskit-pink/10",
      accentBorder: "hover:border-qiskit-pink",
      email: "physics.club@iiserb.ac.in",
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

        {/* 1. Organizers Subsection */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-foundation-border/60">
            <div className="p-2 rounded bg-foundation-elevated border border-foundation-border">
              <Users className="w-5 h-5 text-qiskit-purple-light" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                Organizers
              </h3>
              <p className="text-xs font-mono text-[#BDCDEF]">
                Core student organizing team · IISER Bhopal
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {organizers.map((org, index) => (
              <ProfileCard
                key={index}
                name={org.name}
                title={org.title}
                handle={org.handle}
                status={org.status}
                email={org.email}
                linkedinUrl={org.linkedinUrl}
                githubUrl={org.githubUrl}
                websiteUrl={(org as any).websiteUrl}
                avatarUrl={org.avatarUrl}
                showUserInfo={true}
                innerGradient={org.innerGradient}
              />
            ))}
          </div>
        </div>

        {/* 2. Organizing Clubs Subsection */}
        <div>
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-foundation-border/60">
            <div className="p-2 rounded bg-foundation-elevated border border-foundation-border">
              <Building2 className="w-5 h-5 text-qiskit-blue" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                Organizing clubs
              </h3>
              <p className="text-xs font-mono text-[#BDCDEF]">
                Student technical societies leading the quantum computing initiative
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {clubs.map((club, idx) => {
              const Icon = club.icon;
              return (
                <div
                  key={idx}
                  className={`bg-foundation-surface border border-foundation-border rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${club.accentBorder}`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-foundation-elevated border border-foundation-border p-2 flex items-center justify-center flex-shrink-0">
                          <Image
                            src={club.logoUrl}
                            alt={`${club.name} logo`}
                            width={32}
                            height={32}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white tracking-tight">
                            {club.name}
                          </h4>
                          <p className="text-xs font-mono text-[#BDCDEF]">
                            {club.fullName}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`text-[11px] font-mono px-2.5 py-1 rounded border whitespace-nowrap ${club.tagColor}`}
                      >
                        {club.tag}
                      </span>
                    </div>

                    <p className="text-sm text-[#E0E0E0]/85 leading-relaxed mb-6 font-normal">
                      {club.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-foundation-border/60 flex items-center justify-between text-xs font-mono text-[#BDCDEF]">
                    <span>{club.institution}</span>
                    <a
                      href={`mailto:${club.email}`}
                      className="inline-flex items-center gap-1.5 text-qiskit-blue hover:text-white transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{club.email}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
