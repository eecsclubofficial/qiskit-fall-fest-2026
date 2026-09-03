"use client";

import React, { useState } from "react";
import {
  MapPin,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Presentation,
  Terminal,
  Trophy,
  Users,
} from "lucide-react";

interface Session {
  id: string;
  day: number;
  title: string;
  speaker: string;
  format: "Keynote" | "Workshop" | "Lab" | "Hackathon" | "Panel" | "Talk" | "Ceremony";
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  location: string;
  status: "Scheduled [TBD]" | "Confirmed" | "Tentative";
  description: string;
  prerequisites?: string;
}

export function Schedule() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [expandedId, setExpandedId] = useState<string | null>("d1-s1");

  const sessions: Session[] = [
    // --- DAY 1 ---
    {
      id: "d1-s1",
      day: 1,
      title: "Intro to IBM Qiskit Fall Fest and ideathon announcement / problem statement release",
      speaker: "EECS Club & Physics Club Organizing Committee [TBD]",
      format: "Keynote",
      level: "All Levels",
      location: "LHC, IISER Bhopal",
      status: "Scheduled [TBD]",
      description:
        "Welcome address and opening ceremony for IBM Qiskit Fall Fest 2026. Introduction to the event roadmap, workshop tracks, and official release of ideathon problem statements.",
      prerequisites: "None. Open to all students, researchers, and faculty.",
    },

    // --- DAY 2 ---
    {
      id: "d2-s1",
      day: 2,
      title: "Elementary Qiskit workshop",
      speaker: "Workshop Technical Team [TBD]",
      format: "Workshop",
      level: "Beginner",
      location: "LHC, IISER Bhopal",
      status: "Scheduled [TBD]",
      description:
        "Hands-on coding lab in Python and Jupyter Notebooks covering Qiskit SDK fundamentals, circuit building, and executing jobs on quantum simulators and hardware.",
      prerequisites: "Laptop with Python 3.10+ and Jupyter Notebook installed.",
    },
    {
      id: "d2-s2",
      day: 2,
      title: "Student talk session",
      speaker: "IISER Bhopal Student Researchers [TBD]",
      format: "Talk",
      level: "Intermediate",
      location: "LHC, IISER Bhopal",
      status: "Scheduled [TBD]",
      description:
        "Research presentations by IISER Bhopal students showcasing ongoing undergraduate and graduate projects in quantum computing, information theory, and physics.",
      prerequisites: "General interest in quantum computing.",
    },

    // --- DAY 3 ---
    {
      id: "d3-s1",
      day: 3,
      title: "Advance Qiskit workshop",
      speaker: "Quantum Instructors [TBD]",
      format: "Workshop",
      level: "Advanced",
      location: "Multimedia Room, IISER Bhopal",
      status: "Scheduled [TBD]",
      description:
        "Specialized workshop covering advanced quantum algorithms, Variational Quantum Eigensolvers (VQE), error mitigation, and parameterized quantum circuits.",
      prerequisites: "Familiarity with elementary Qiskit concepts.",
    },
    {
      id: "d3-s2",
      day: 3,
      title: "Student talk session",
      speaker: "Student Researchers [TBD]",
      format: "Talk",
      level: "Intermediate",
      location: "LHC, IISER Bhopal",
      status: "Scheduled [TBD]",
      description:
        "Student-led research presentations on quantum simulation, algorithmic benchmarking, and applied quantum science.",
      prerequisites: "Open to all attendees.",
    },
    {
      id: "d3-s3",
      day: 3,
      title: "Guest talk and panel discussion",
      speaker: "Guest Speaker & Faculty Panel [TBD]",
      format: "Panel",
      level: "All Levels",
      location: "LHC, IISER Bhopal",
      status: "Scheduled [TBD]",
      description:
        "Keynote presentation by an invited guest expert followed by a moderated panel discussion with IISER Bhopal faculty on career frontiers and research directions.",
      prerequisites: "Open to all registered attendees.",
    },

    // --- DAY 4 ---
    {
      id: "d4-s1",
      day: 4,
      title: "Student talk session",
      speaker: "IISER Bhopal Student Presenters [TBD]",
      format: "Talk",
      level: "Intermediate",
      location: "LHC, IISER Bhopal",
      status: "Scheduled [TBD]",
      description:
        "Research session showcasing student implementations in quantum algorithms, noise modeling, and quantum information protocols.",
      prerequisites: "Open to all attendees.",
    },

    // --- DAY 5 ---
    {
      id: "d5-s1",
      day: 5,
      title: "Guest speaker talk",
      speaker: "Invited Guest Speaker [TBD]",
      format: "Keynote",
      level: "All Levels",
      location: "LHC, IISER Bhopal",
      status: "Scheduled [TBD]",
      description:
        "In-depth guest keynote exploring quantum software architectures, hardware scalability, and industry quantum advantage.",
      prerequisites: "Open to all registered attendees.",
    },
    {
      id: "d5-s2",
      day: 5,
      title: "Hackathon project presentation",
      speaker: "Hackathon Finalist Teams & Jury Panel [TBD]",
      format: "Hackathon",
      level: "All Levels",
      location: "LHC, IISER Bhopal",
      status: "Scheduled [TBD]",
      description:
        "Finalist teams present working Qiskit projects, explain circuit implementations, and pitch to faculty and peer judges.",
      prerequisites: "Hackathon submitted teams.",
    },
    {
      id: "d5-s3",
      day: 5,
      title: "Grand ending ceremony, hackathon prize awards and closing remarks",
      speaker: "EECS & Physics Club Leadership [TBD]",
      format: "Ceremony",
      level: "All Levels",
      location: "LHC, IISER Bhopal",
      status: "Scheduled [TBD]",
      description:
        "Announcement of hackathon winners, prize distribution, presentation of participation certificates, and official closing remarks.",
      prerequisites: "Open to all attendees.",
    },
  ];

  const days = [
    { id: 0, label: "All Days" },
    { id: 1, label: "Day 1: Kickoff and circuits" },
    { id: 2, label: "Day 2: Qiskit workshop" },
    { id: 3, label: "Day 3: Advanced & panel" },
    { id: 4, label: "Day 4: Student talks" },
    { id: 5, label: "Day 5: Finale & demos" },
  ];

  const filteredSessions = sessions.filter((s) => {
    return activeTab === 0 || s.day === activeTab;
  });

  const getFormatBadgeColor = (format: Session["format"]) => {
    switch (format) {
      case "Keynote":
        return "bg-qiskit-blue/20 text-qiskit-blue border-qiskit-blue/30";
      case "Workshop":
        return "bg-qiskit-purple/20 text-qiskit-purple-light border-qiskit-purple/30";
      case "Hackathon":
        return "bg-qiskit-magenta/20 text-[#FF7EB6] border-qiskit-magenta/30";
      case "Panel":
        return "bg-[#A46DFF]/20 text-[#BE95FF] border-[#A46DFF]/40";
      case "Talk":
        return "bg-emerald-400/15 text-emerald-300 border-emerald-400/30";
      case "Ceremony":
        return "bg-rose-400/20 text-rose-300 border-rose-400/40";
      default:
        return "bg-foundation-elevated text-[#BDCDEF] border-foundation-border";
    }
  };

  const getFormatIcon = (format: Session["format"]) => {
    switch (format) {
      case "Keynote":
        return Presentation;
      case "Workshop":
        return Terminal;
      case "Hackathon":
        return Trophy;
      case "Panel":
        return Users;
      case "Talk":
        return Presentation;
      case "Ceremony":
        return Trophy;
      default:
        return Presentation;
    }
  };

  return (
    <section
      id="schedule"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-foundation-bg border-t border-foundation-border/60"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Program schedule
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#BDCDEF] px-3.5 py-2 rounded bg-foundation-surface border border-foundation-border self-start md:self-auto">
            <AlertCircle className="w-4 h-4 text-qiskit-pink flex-shrink-0" />
            <span>Dates and exact timetable will be confirmed soon [TBD]</span>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-6 border-b border-foundation-border">
          {/* Day Tabs without sub-descriptions */}
          <div className="flex flex-wrap gap-2">
            {days.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveTab(d.id)}
                className={`px-4 py-2 rounded text-xs sm:text-sm font-medium transition-all ${
                  activeTab === d.id
                    ? "bg-foundation-elevated text-white border border-qiskit-blue shadow-md"
                    : "bg-foundation-surface text-[#BDCDEF] hover:text-white border border-foundation-border hover:border-foundation-muted"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Table / List */}
        <div className="space-y-3.5">
          {filteredSessions.map((session) => {
            const isExpanded = expandedId === session.id;
            const Icon = getFormatIcon(session.format);
            return (
              <div
                key={session.id}
                className="bg-foundation-surface border border-foundation-border hover:border-foundation-muted rounded-lg transition-all overflow-hidden"
              >
                <div
                  onClick={() => setExpandedId(isExpanded ? null : session.id)}
                  className="p-5 sm:p-6 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-4 select-none"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setExpandedId(isExpanded ? null : session.id);
                    }
                  }}
                  aria-expanded={isExpanded}
                >
                  {/* Left: Day Badge */}
                  <div className="lg:w-32 flex-shrink-0 flex items-center gap-3">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-foundation-elevated text-qiskit-purple-light border border-foundation-border font-medium">
                      Day 0{session.day}
                    </span>
                  </div>

                  {/* Center: Title & Speaker */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span
                        className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-2.5 py-0.5 rounded border ${getFormatBadgeColor(
                          session.format
                        )}`}
                      >
                        <Icon className="w-3 h-3" />
                        <span>{session.format}</span>
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-foundation-elevated border border-foundation-border text-[#E0E0E0]">
                        {session.level}
                      </span>
                      <span className="text-[11px] font-mono text-qiskit-pink">
                        {session.status}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">
                      {session.title}
                    </h3>
                    <p className="text-xs font-mono text-foundation-muted mt-1">
                      {session.speaker}
                    </p>
                  </div>

                  {/* Right: Location & Toggle */}
                  <div className="flex items-center justify-between lg:justify-end gap-4 lg:w-64 flex-shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-foundation-border/40">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#BDCDEF]">
                      <MapPin className="w-3.5 h-3.5 text-qiskit-blue flex-shrink-0" />
                      <span className="truncate">{session.location}</span>
                    </div>
                    <div className="p-1 rounded text-[#BDCDEF] hover:text-white">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-foundation-border/60 bg-foundation-elevated/40">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                      <div className="md:col-span-2">
                        <span className="text-[#BDCDEF] uppercase tracking-wider block mb-1">
                          Session Overview:
                        </span>
                        <p className="text-sm font-sans text-[#E0E0E0]/90 leading-relaxed">
                          {session.description}
                        </p>
                      </div>
                      <div>
                        <span className="text-[#BDCDEF] uppercase tracking-wider block mb-1">
                          Prerequisites &amp; Tools:
                        </span>
                        <p className="text-xs font-sans text-[#E0E0E0]/80 leading-relaxed">
                          {session.prerequisites || "No special prerequisites."}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
