"use client";

import React, { useState } from "react";
import {
  Clock,
  MapPin,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Sparkles,
  Coffee,
  Trophy,
  Gamepad2,
  Users,
  Presentation,
  Terminal,
} from "lucide-react";

// TODO: Replace with finalized event schedule when speaker names and timings are locked
interface Session {
  id: string;
  day: number;
  time: string;
  title: string;
  speaker: string; // TODO: Replace placeholder speaker names
  format:
    | "Keynote"
    | "Workshop"
    | "Lab"
    | "Hackathon"
    | "Panel"
    | "Talk"
    | "Break"
    | "Games"
    | "Ceremony";
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  location: string;
  status: "Scheduled [TBD]" | "Confirmed" | "Tentative";
  description: string;
  prerequisites?: string;
  isSnack?: boolean;
}

export function Schedule() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [filterLevel, setFilterLevel] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>("d1-s1");

  // Comprehensive 5-day event schedule
  const sessions: Session[] = [
    // --- DAY 1 ---
    {
      id: "d1-s1",
      day: 1,
      time: "09:30 - 10:30 [TBD]",
      title: "Introduction to IBM Qiskit Fall Fest 2026",
      speaker: "EECS Club & Physics Club Organizing Committee [TBD]",
      format: "Keynote",
      level: "All Levels",
      location: "LHC Main Auditorium, IISER Bhopal [TBD]",
      status: "Scheduled [TBD]",
      description:
        "Welcome address and opening ceremony for IBM Qiskit Fall Fest 2026. Introduction to the event roadmap, hackathon structure, workshop tracks, and mentoring resources available throughout the fest.",
      prerequisites: "None. Open to all students, researchers, and faculty.",
    },
    {
      id: "d1-s2",
      day: 1,
      time: "10:45 - 12:15 [TBD]",
      title: "Applications of quantum computing in science and industry",
      speaker: "Faculty & Quantum Domain Specialist [TBD]",
      format: "Keynote",
      level: "All Levels",
      location: "LHC Main Auditorium, IISER Bhopal [TBD]",
      status: "Scheduled [TBD]",
      description:
        "A foundational exploration of real-world quantum computing applications: molecular simulation for drug discovery, material design, portfolio optimization, quantum chemistry, and quantum machine learning.",
      prerequisites: "General curiosity about computing and physics.",
    },
    {
      id: "d1-s3",
      day: 1,
      time: "12:15 - 13:15 [TBD]",
      title: "Schrodinger's snacks: Quantum refreshments and peer networking",
      speaker: "Hospitality & Student Volunteer Team [TBD]",
      format: "Break",
      level: "All Levels",
      location: "LHC Central Foyer, IISER Bhopal [TBD]",
      status: "Scheduled [TBD]",
      description:
        "Take a quantum superposition break with hot chai, coffee, and refreshments. Connect with fellow attendees, meet mentors, and discuss initial project ideas.",
      prerequisites: "Open to all registered attendees.",
      isSnack: true,
    },
    {
      id: "d1-s4",
      day: 1,
      time: "13:30 - 15:45 [TBD]",
      title: "Hands-on: Basic quantum circuits on drag-and-drop simulator",
      speaker: "Student Mentors & Lab Leads [TBD]",
      format: "Lab",
      level: "Beginner",
      location: "Computer Lab 1 & 2, LHC [TBD]",
      status: "Scheduled [TBD]",
      description:
        "Interactive visual laboratory introducing quantum state representation using visual drag-and-drop circuit builders. Build single-qubit gates (X, Y, Z, H), understand Phase changes, and create two-qubit Bell states on the simulator.",
      prerequisites: "No coding background needed. Accessible via modern web browser.",
    },
    {
      id: "d1-s5",
      day: 1,
      time: "16:00 - 17:15 [TBD]",
      title: "Hackathon release and problem statement briefing",
      speaker: "Hackathon Organizing Team [TBD]",
      format: "Hackathon",
      level: "All Levels",
      location: "LHC Main Auditorium, IISER Bhopal [TBD]",
      status: "Scheduled [TBD]",
      description:
        "Official announcement of hackathon problem statements across multiple tracks. Submissions will remain open until Thursday 23:59. Overview of judging criteria, repository templates, and Qiskit SDK requirements.",
      prerequisites: "Registered team or individual participant seeking team matching.",
    },
    {
      id: "d1-s6",
      day: 1,
      time: "17:15 - 18:30 [TBD]",
      title: "Participant registration check-in and QR verification",
      speaker: "Registration & Logistics Helpdesk [TBD]",
      format: "Talk",
      level: "All Levels",
      location: "LHC Registration Foyer [TBD]",
      status: "Scheduled [TBD]",
      description:
        "QR code verification for all attendees, distribution of official Fall Fest badges and welcome stickers, Discord channel onboarding, and team matchmaking assistance for the hackathon.",
      prerequisites: "Registration confirmation on this portal.",
    },

    // --- DAY 2 ---
    {
      id: "d2-s1",
      day: 2,
      time: "09:30 - 13:00 [TBD]",
      title: "Elementary Qiskit workshop: Jupyter notebook on simulator and hardware",
      speaker: "Qiskit Advocate & Workshop Technical Team [TBD]",
      format: "Workshop",
      level: "Beginner",
      location: "Computer Lab 1 & 2, LHC [TBD]",
      status: "Scheduled [TBD]",
      description:
        "Morning-half comprehensive coding lab in Python and Jupyter Notebooks. Learn circuit construction with QuantumCircuit, transpiling for target hardware topologies, running jobs via Sampler and Estimator primitives, and executing code on real IBM Quantum QPUs.",
      prerequisites: "Laptop with Python 3.10+ and Jupyter Notebook installed.",
    },
    {
      id: "d2-s2",
      day: 2,
      time: "13:00 - 14:15 [TBD]",
      title: "Schrodinger's snacks: Afternoon refreshments and notebook clinic",
      speaker: "Hospitality & Mentoring Team [TBD]",
      format: "Break",
      level: "All Levels",
      location: "LHC Central Foyer [TBD]",
      status: "Scheduled [TBD]",
      description:
        "Mid-day quantum snack break with tea, snacks, and a dedicated notebook helpdesk for attendees looking to debug their local Qiskit environment.",
      prerequisites: "Open to all attendees.",
      isSnack: true,
    },
    {
      id: "d2-s3",
      day: 2,
      time: "14:30 - 17:30 [TBD]",
      title: "Student talk session I: Undergraduate & graduate research showcase",
      speaker: "IISER Bhopal Student Researchers [TBD]",
      format: "Talk",
      level: "Intermediate",
      location: "LHC Hall A, IISER Bhopal [TBD]",
      status: "Scheduled [TBD]",
      description:
        "Second-half research presentation series by IISER Bhopal students. Topics include foundational quantum mechanics experiments, quantum simulation projects, and algorithmic benchmarking with Qiskit.",
      prerequisites: "Basic familiarity with quantum concepts.",
    },

    // --- DAY 3 ---
    {
      id: "d3-s1",
      day: 3,
      time: "09:30 - 13:00 [TBD]",
      title: "Advanced quantum workshop: Deep dive into 3 specialized topics",
      speaker: "Advanced Quantum Research Instructors [TBD]",
      format: "Workshop",
      level: "Advanced",
      location: "Multimedia Room, IISER Bhopal [TBD]",
      status: "Scheduled [TBD]",
      description:
        "Morning-half intensive workshop covering maximum 3 advanced topics: (1) Variational Quantum Eigensolver (VQE) for chemistry simulations, (2) Error suppression and Zero-Noise Extrapolation (ZNE), and (3) Parameterized quantum circuits for machine learning.",
      prerequisites: "Familiarity with Day 2 Qiskit fundamentals or prior quantum linear algebra.",
    },
    {
      id: "d3-s2",
      day: 3,
      time: "13:00 - 14:15 [TBD]",
      title: "Schrodinger's snacks: Speaker meet and high tea",
      speaker: "Hospitality Team [TBD]",
      format: "Break",
      level: "All Levels",
      location: "LHC Foyer / Multimedia Room Lounge [TBD]",
      status: "Scheduled [TBD]",
      description:
        "High tea and refreshments with visiting keynote speakers, workshop leads, and faculty organizers.",
      prerequisites: "Open to all attendees.",
      isSnack: true,
    },
    {
      id: "d3-s3",
      day: 3,
      time: "14:30 - 17:30 [TBD]",
      title: "External speaker keynote followed by panel discussion",
      speaker: "External Quantum Leader & Faculty Panel [TBD]",
      format: "Panel",
      level: "All Levels",
      location: "Lecture Hall L5, IISER Bhopal [TBD]",
      status: "Scheduled [TBD]",
      description:
        "Second-half keynote presentation by an invited external quantum computing scholar, followed by a moderated panel discussion with EECS and Physics faculty on career opportunities and research frontiers in quantum science.",
      prerequisites: "Open to all registered attendees.",
    },

    // --- DAY 4 (NEXT WEEK SATURDAY) ---
    {
      id: "d4-s1",
      day: 4,
      time: "10:00 - 12:30 [TBD]",
      title: "Student talk session II: Advanced projects and quantum simulations",
      speaker: "IISER Bhopal Student Presenters [TBD]",
      format: "Talk",
      level: "Intermediate",
      location: "LHC Hall B, IISER Bhopal [TBD]",
      status: "Scheduled [TBD]",
      description:
        "Next-week Saturday morning session showcasing student implementations in quantum cryptography, Grover search variants, and condensed matter simulations.",
      prerequisites: "Open to all attendees.",
    },
    {
      id: "d4-s2",
      day: 4,
      time: "12:30 - 13:45 [TBD]",
      title: "Schrodinger's snacks: Hackathon checkpoint and refreshments",
      speaker: "Hackathon Mentorship Team [TBD]",
      format: "Break",
      level: "All Levels",
      location: "LHC Central Foyer [TBD]",
      status: "Scheduled [TBD]",
      description:
        "Refreshment break with a dedicated hackathon mentor helpdesk where teams can get feedback on project architecture and polish code before Sunday presentations.",
      prerequisites: "Open to all attendees.",
      isSnack: true,
    },
    {
      id: "d4-s3",
      day: 4,
      time: "14:00 - 16:30 [TBD]",
      title: "External speaker keynote: The journey from research to industry",
      speaker: "Invited External Quantum Specialist [TBD]",
      format: "Keynote",
      level: "All Levels",
      location: "LHC Main Auditorium, IISER Bhopal [TBD]",
      status: "Scheduled [TBD]",
      description:
        "Second-half keynote on industrial quantum computing, quantum advantage milestones, and emerging applications in quantum communications and sensing.",
      prerequisites: "Open to all registered attendees.",
    },

    // --- DAY 5 (FINALE) ---
    {
      id: "d5-s1",
      day: 5,
      time: "09:30 - 11:30 [TBD]",
      title: "External speaker keynote: Quantum software and error mitigation",
      speaker: "Invited Quantum Computing Scholar [TBD]",
      format: "Keynote",
      level: "All Levels",
      location: "LHC Main Auditorium, IISER Bhopal [TBD]",
      status: "Scheduled [TBD]",
      description:
        "Final-day morning keynote on cutting-edge techniques for mitigating device noise and mapping algorithms onto utility-scale quantum processors.",
      prerequisites: "Open to all registered attendees.",
    },
    {
      id: "d5-s2",
      day: 5,
      time: "11:30 - 12:45 [TBD]",
      title: "Schrodinger's snacks: Pre-demo energy refreshments",
      speaker: "Hospitality Team [TBD]",
      format: "Break",
      level: "All Levels",
      location: "LHC Central Foyer [TBD]",
      status: "Scheduled [TBD]",
      description:
        "Pre-demo snacks and refreshments while hackathon finalist teams prepare slides and live demo terminals.",
      prerequisites: "Open to all attendees.",
      isSnack: true,
    },
    {
      id: "d5-s3",
      day: 5,
      time: "13:30 - 15:30 [TBD]",
      title: "Hackathon project presentations, live demos and judging",
      speaker: "Hackathon Finalist Teams & Judging Jury [TBD]",
      format: "Hackathon",
      level: "All Levels",
      location: "LHC Main Auditorium & Exhibition Foyer [TBD]",
      status: "Scheduled [TBD]",
      description:
        "Second-half live project demos where teams present their Qiskit code repositories, explain quantum circuits, and answer questions from the jury.",
      prerequisites: "Hackathon submitted teams.",
    },
    {
      id: "d5-s4",
      day: 5,
      time: "15:45 - 17:00 [TBD]",
      title: "Quantum games and interactive challenges",
      speaker: "Community & Gaming Leads [TBD]",
      format: "Games",
      level: "All Levels",
      location: "LHC Main Foyer, IISER Bhopal [TBD]",
      status: "Scheduled [TBD]",
      description:
        "Interactive quantum game arena featuring Quantum Battleship, Bloch Sphere Maze, and quantum logic puzzles. Win exclusive Qiskit merchandise, stickers, and badges.",
      prerequisites: "Open to all participants and visitors.",
    },
    {
      id: "d5-s5",
      day: 5,
      time: "17:15 - 18:45 [TBD]",
      title: "Grand ending ceremony, hackathon prize awards and closing remarks",
      speaker: "EECS & Physics Club Leadership and IBM Quantum Leads [TBD]",
      format: "Ceremony",
      level: "All Levels",
      location: "LHC Main Auditorium, IISER Bhopal [TBD]",
      status: "Scheduled [TBD]",
      description:
        "Announcement of hackathon winners, prize distribution, presentation of participation certificates, recognition of student mentors and volunteers, and official closing remarks.",
      prerequisites: "Open to all attendees.",
    },
  ];

  const days = [
    { id: 0, label: "All Days", date: "Full Overview" },
    { id: 1, label: "Day 1: Kickoff & Circuits", date: "Intro, Circuits & Hackathon Launch" },
    { id: 2, label: "Day 2: Qiskit Workshop", date: "Hardware Lab & Student Talk I" },
    { id: 3, label: "Day 3: Advanced & Panel", date: "Multimedia Room & L5 Discussion" },
    { id: 4, label: "Day 4: Keynotes & Talks", date: "Next Week Saturday" },
    { id: 5, label: "Day 5: Finale & Demos", date: "Demos, Quantum Games & Awards" },
  ];

  const filteredSessions = sessions.filter((s) => {
    const matchesDay = activeTab === 0 || s.day === activeTab;
    const matchesLevel =
      filterLevel === "All" ||
      s.level === filterLevel ||
      s.level === "All Levels";
    return matchesDay && matchesLevel;
  });

  const getFormatBadgeColor = (format: Session["format"], isSnack?: boolean) => {
    if (isSnack) {
      return "bg-amber-400/15 text-amber-300 border-amber-400/30";
    }
    switch (format) {
      case "Keynote":
        return "bg-qiskit-blue/20 text-qiskit-blue border-qiskit-blue/30";
      case "Workshop":
        return "bg-qiskit-purple/20 text-qiskit-purple-light border-qiskit-purple/30";
      case "Lab":
        return "bg-qiskit-pink/20 text-qiskit-pink border-qiskit-pink/30";
      case "Hackathon":
        return "bg-qiskit-magenta/20 text-[#FF7EB6] border-qiskit-magenta/30";
      case "Panel":
        return "bg-[#A46DFF]/20 text-[#BE95FF] border-[#A46DFF]/40";
      case "Talk":
        return "bg-emerald-400/15 text-emerald-300 border-emerald-400/30";
      case "Break":
        return "bg-amber-400/15 text-amber-300 border-amber-400/30";
      case "Games":
        return "bg-cyan-400/15 text-cyan-300 border-cyan-400/30";
      case "Ceremony":
        return "bg-rose-400/20 text-rose-300 border-rose-400/40";
      default:
        return "bg-foundation-elevated text-[#BDCDEF] border-foundation-border";
    }
  };

  const getFormatIcon = (format: Session["format"], isSnack?: boolean) => {
    if (isSnack) return Coffee;
    switch (format) {
      case "Keynote":
        return Presentation;
      case "Workshop":
        return Terminal;
      case "Lab":
        return Sparkles;
      case "Hackathon":
        return Trophy;
      case "Panel":
        return Users;
      case "Talk":
        return Presentation;
      case "Break":
        return Coffee;
      case "Games":
        return Gamepad2;
      case "Ceremony":
        return Trophy;
      default:
        return Sparkles;
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
            <p className="text-xs font-mono font-medium tracking-[0.2em] text-qiskit-blue uppercase mb-2">
              Programme Schedule
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Five days of quantum learning, workshops, and building.
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#BDCDEF] px-3 py-2 rounded bg-foundation-surface border border-foundation-border self-start md:self-auto">
            <AlertCircle className="w-4 h-4 text-qiskit-pink flex-shrink-0" />
            <span>Dates and exact timetable will be confirmed soon [TBD]</span>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-foundation-border">
          {/* Day Tabs */}
          <div className="flex flex-wrap gap-2">
            {days.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveTab(d.id)}
                className={`px-3.5 py-2 rounded text-xs sm:text-sm font-medium transition-all text-left flex flex-col sm:flex-row sm:items-center sm:gap-2 ${
                  activeTab === d.id
                    ? "bg-foundation-elevated text-white border border-qiskit-blue shadow-md"
                    : "bg-foundation-surface text-[#BDCDEF] hover:text-white border border-foundation-border hover:border-foundation-muted"
                }`}
              >
                <span>{d.label}</span>
                <span className="text-[10px] font-mono text-[#BE95FF]/80">
                  {d.date}
                </span>
              </button>
            ))}
          </div>

          {/* Level Filter Dropdown / Pills */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-foundation-muted">Level:</span>
            <div className="flex flex-wrap gap-1.5">
              {["All", "Beginner", "Intermediate", "Advanced"].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setFilterLevel(lvl)}
                  className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                    filterLevel === lvl
                      ? "bg-foundation-light text-foundation-bg font-semibold"
                      : "bg-foundation-surface text-[#E0E0E0] border border-foundation-border hover:border-foundation-muted"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule Table / List */}
        <div className="space-y-3.5">
          {filteredSessions.map((session) => {
            const isExpanded = expandedId === session.id;
            const Icon = getFormatIcon(session.format, session.isSnack);
            return (
              <div
                key={session.id}
                className={`border rounded-lg transition-all overflow-hidden ${
                  session.isSnack
                    ? "bg-[#181B15] border-amber-500/30 hover:border-amber-400/60"
                    : "bg-foundation-surface border-foundation-border hover:border-foundation-muted"
                }`}
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
                  {/* Left: Time & Day */}
                  <div className="lg:w-48 flex-shrink-0 flex items-center gap-3">
                    <span
                      className={`text-xs font-mono px-2 py-1 rounded border ${
                        session.isSnack
                          ? "bg-amber-950/50 text-amber-300 border-amber-500/40 font-semibold"
                          : "bg-foundation-elevated text-qiskit-purple-light border-foundation-border"
                      }`}
                    >
                      Day 0{session.day}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#BDCDEF]">
                      <Clock className="w-3.5 h-3.5 text-foundation-muted" />
                      <span>{session.time}</span>
                    </div>
                  </div>

                  {/* Center: Title & Speaker */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span
                        className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-2.5 py-0.5 rounded border ${getFormatBadgeColor(
                          session.format,
                          session.isSnack
                        )}`}
                      >
                        <Icon className="w-3 h-3" />
                        <span>
                          {session.isSnack
                            ? "Schrodinger's Snacks"
                            : session.format}
                        </span>
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-foundation-elevated border border-foundation-border text-[#E0E0E0]">
                        {session.level}
                      </span>
                      <span className="text-[11px] font-mono text-qiskit-pink">
                        {session.status}
                      </span>
                    </div>
                    <h3
                      className={`text-base sm:text-lg font-semibold tracking-tight ${
                        session.isSnack ? "text-amber-200" : "text-white"
                      }`}
                    >
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

        {/* Footer Note for Speakers & Organizers */}
        <div className="mt-8 p-4 rounded bg-foundation-surface border border-dashed border-foundation-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#BDCDEF]">
          <span>
            // TODO: Call for session mentors and volunteer speakers is currently open.
          </span>
          <a
            href="#register"
            className="text-qiskit-purple-light hover:underline font-semibold"
          >
            Register as Volunteer / Participant →
          </a>
        </div>
      </div>
    </section>
  );
}
