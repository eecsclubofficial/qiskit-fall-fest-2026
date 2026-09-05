"use client";

import React from "react";
import {
  MapPin,
  ChevronDown,
  ChevronUp,
  Calendar,
  AlertCircle,
  Terminal,
  Presentation,
  Trophy,
  Users,
  Award,
} from "lucide-react";
import AnimatedList from "./AnimatedList";
import { useScheduleStore } from "@/store/useScheduleStore";

export interface ScheduleEvent {
  id: string;
  day: number;
  date: string;
  weekday: string;
  title: string;
  venue: string;
  speaker?: string;
  format: "Keynote" | "Workshop" | "Hackathon" | "Panel" | "Talk" | "Ceremony";
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  description: string;
  prerequisites?: string;
}

const events: ScheduleEvent[] = [
  // Day 1
  {
    id: "d1-e1",
    day: 1,
    date: "October 9, 2026",
    weekday: "Friday",
    title: "Opening Ceremony & Hackathon Launch",
    venue: "LHC",
    speaker: "EECS & Physics Clubs Organizing Committee",
    format: "Ceremony",
    level: "All Levels",
    description:
      "Event introduction, quantum circuit simulator demo, and official hackathon problem statement release.",
    prerequisites: "Open to all students, researchers, and faculty.",
  },

  // Day 2
  {
    id: "d2-e1",
    day: 2,
    date: "October 10, 2026",
    weekday: "Saturday",
    title: "Elementary Qiskit Workshop",
    venue: "LHC",
    speaker: "Workshop Technical Instructors",
    format: "Workshop",
    level: "Beginner",
    description:
      "Hands-on workshop covering Qiskit fundamentals and quantum computing execution on simulators and real IBM Quantum hardware via cloud.",
    prerequisites: "Laptop with Python 3.10+ and Jupyter Notebook installed.",
  },
  {
    id: "d2-e2",
    day: 2,
    date: "October 10, 2026",
    weekday: "Saturday",
    title: "Student Talk I",
    venue: "LHC",
    speaker: "IISER Bhopal Student Presenters",
    format: "Talk",
    level: "Intermediate",
    description:
      "Technical presentations and research sharing by student presenters on quantum computing, algorithms, and quantum info.",
    prerequisites: "General interest in quantum computing.",
  },

  // Day 3
  {
    id: "d3-e1",
    day: 3,
    date: "October 11, 2026",
    weekday: "Sunday",
    title: "Advanced Qiskit Workshop",
    venue: "Multimedia Room",
    speaker: "Quantum Specialists",
    format: "Workshop",
    level: "Advanced",
    description:
      "In-depth technical workshop covering advanced quantum computing topics including VQE, error mitigation, and parameterized circuits.",
    prerequisites: "Familiarity with elementary Qiskit concepts.",
  },
  {
    id: "d3-e2",
    day: 3,
    date: "October 11, 2026",
    weekday: "Sunday",
    title: "Keynote & Panel Discussion",
    venue: "LHC",
    speaker: "Guest Speaker & Faculty Panel",
    format: "Panel",
    level: "All Levels",
    description:
      "Expert talk by an external guest speaker followed by an interactive panel discussion with faculty on quantum research frontiers.",
    prerequisites: "Open to all registered attendees.",
  },

  // Day 4
  {
    id: "d4-e1",
    day: 4,
    date: "October 17, 2026",
    weekday: "Saturday",
    title: "Student Talk II & Keynote",
    venue: "LHC",
    speaker: "Student Presenters & Guest Speaker",
    format: "Talk",
    level: "Intermediate",
    description:
      "Student research presentations followed by a session with an external guest speaker on quantum algorithms and noisy intermediate-scale systems.",
    prerequisites: "Open to all attendees.",
  },

  // Day 5
  {
    id: "d5-e1",
    day: 5,
    date: "October 18, 2026",
    weekday: "Sunday",
    title: "Guest Speaker Session",
    venue: "LHC",
    speaker: "Invited External Guest Speaker",
    format: "Keynote",
    level: "All Levels",
    description:
      "Expert lecture delivered by an external guest speaker on quantum software architectures and industry quantum advantage.",
    prerequisites: "Open to all registered attendees.",
  },
  {
    id: "d5-e2",
    day: 5,
    date: "October 18, 2026",
    weekday: "Sunday",
    title: "Hackathon Presentations & Closing Ceremony",
    venue: "LHC",
    speaker: "Finalist Teams, Jury Panel & Organizers",
    format: "Hackathon",
    level: "All Levels",
    description:
      "Final project presentations by hackathon participants, interactive quantum games, and the official closing ceremony with prize distribution.",
    prerequisites: "Hackathon participants and general attendees.",
  },
];

const dayTabs = [
  { id: 0, label: "All Days", date: "Oct 9 - 18" },
  { id: 1, label: "Day 1", date: "Oct 9" },
  { id: 2, label: "Day 2", date: "Oct 10" },
  { id: 3, label: "Day 3", date: "Oct 11" },
  { id: 4, label: "Day 4", date: "Oct 17" },
  { id: 5, label: "Day 5", date: "Oct 18" },
];

export function Schedule() {
  const { activeTab, setActiveTab, expandedId, setExpandedId } = useScheduleStore();

  const filteredEvents = events.filter((e) => {
    return activeTab === 0 || e.day === activeTab;
  });

  const getFormatBadgeStyle = (format: ScheduleEvent["format"]) => {
    switch (format) {
      case "Keynote":
        return "bg-qiskit-blue/20 text-qiskit-blue border-qiskit-blue/35";
      case "Workshop":
        return "bg-qiskit-purple/20 text-qiskit-purple-light border-qiskit-purple/35";
      case "Hackathon":
        return "bg-qiskit-magenta/20 text-[#FF7EB6] border-qiskit-magenta/35";
      case "Panel":
        return "bg-[#A46DFF]/20 text-[#BE95FF] border-[#A46DFF]/40";
      case "Talk":
        return "bg-emerald-400/15 text-emerald-300 border-emerald-400/35";
      case "Ceremony":
        return "bg-amber-400/20 text-amber-300 border-amber-400/35";
      default:
        return "bg-foundation-elevated text-[#BDCDEF] border-foundation-border";
    }
  };

  const getFormatIcon = (format: ScheduleEvent["format"]) => {
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
        return Award;
      default:
        return Presentation;
    }
  };

  return (
    <section
      id="schedule"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-foundation-bg/70 backdrop-blur-sm border-t border-foundation-border/60"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-qiskit-blue block mb-2 font-medium">
              Event Itinerary
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Program Schedule
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#BDCDEF] px-3.5 py-2 rounded bg-foundation-surface border border-foundation-border self-start md:self-auto">
            <AlertCircle className="w-4 h-4 text-qiskit-pink flex-shrink-0" />
            <span>Timings to be confirmed closer to the event</span>
          </div>
        </div>

        {/* Day Filter Tabs */}
        <div className="mb-10 pb-4 border-b border-foundation-border/60">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {dayTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const count =
                tab.id === 0
                  ? events.length
                  : events.filter((e) => e.day === tab.id).length;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 border ${
                    isActive
                      ? "bg-foundation-elevated text-white border-qiskit-blue shadow-lg shadow-qiskit-blue/10"
                      : "bg-foundation-surface/80 text-[#BDCDEF] hover:text-white border-foundation-border hover:border-foundation-muted"
                  }`}
                >
                  <span className="font-semibold">{tab.label}</span>
                  <span className="text-[11px] font-mono text-foundation-muted">
                    ({tab.date})
                  </span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-qiskit-blue/20 text-qiskit-blue"
                        : "bg-foundation-border/50 text-foundation-muted"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Schedule List (Single page flow, no nested scroll container) */}
        <AnimatedList
          key={activeTab}
          items={filteredEvents}
          showGradients={false}
          enableArrowNavigation={true}
          displayScrollbar={false}
          hasScroll={false}
          onItemSelect={(event) => {
            setExpandedId(expandedId === event.id ? null : event.id);
          }}
          renderItem={(event, index, isSelected) => {
            const isExpanded = expandedId === event.id;
            const Icon = getFormatIcon(event.format);

            return (
              <div
                className={`bg-foundation-surface/90 border rounded-xl transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? "border-qiskit-blue/60 shadow-xl shadow-qiskit-blue/5 ring-1 ring-qiskit-blue/30"
                    : isSelected
                    ? "border-qiskit-blue/40 hover:border-qiskit-blue"
                    : "border-foundation-border hover:border-foundation-muted"
                }`}
              >
                {/* Event Row */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : event.id)}
                  className="p-5 sm:p-6 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-4 select-none"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setExpandedId(isExpanded ? null : event.id);
                    }
                  }}
                  aria-expanded={isExpanded}
                >
                  {/* Left: Day & Date Badge */}
                  <div className="lg:w-44 flex-shrink-0 flex items-center gap-3">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-qiskit-purple/15 text-qiskit-purple-light border border-qiskit-purple/25">
                      Day 0{event.day}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-[#BDCDEF] font-mono">
                      <Calendar className="w-3.5 h-3.5 text-qiskit-blue flex-shrink-0" />
                      <span>{event.weekday}</span>
                    </div>
                  </div>

                  {/* Center: Title, Format Tag, Speaker */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${getFormatBadgeStyle(
                          event.format
                        )}`}
                      >
                        <Icon className="w-3 h-3" />
                        <span>{event.format}</span>
                      </span>

                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-foundation-elevated border border-foundation-border text-[#E0E0E0]">
                        {event.level}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight text-white group-hover:text-qiskit-blue transition-colors">
                      {event.title}
                    </h3>

                    {event.speaker && (
                      <p className="text-xs font-mono text-foundation-muted mt-1 truncate">
                        {event.speaker}
                      </p>
                    )}
                  </div>

                  {/* Right: Venue & Accordion Indicator */}
                  <div className="flex items-center justify-between lg:justify-end gap-4 lg:w-60 flex-shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-foundation-border/40">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#BDCDEF] bg-foundation-elevated/60 px-2.5 py-1 rounded border border-foundation-border/60">
                      <MapPin className="w-3.5 h-3.5 text-qiskit-blue flex-shrink-0" />
                      <span>{event.venue}</span>
                    </div>

                    <div
                      className={`p-1.5 rounded-full transition-transform duration-200 ${
                        isExpanded
                          ? "bg-qiskit-blue/20 text-qiskit-blue"
                          : "text-[#BDCDEF] hover:text-white"
                      }`}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Accordion */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-3 border-t border-foundation-border/60 bg-foundation-elevated/30">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs font-mono">
                      <div className="md:col-span-2 space-y-2">
                        <span className="text-[#BDCDEF] uppercase tracking-wider block font-semibold">
                          Session Overview
                        </span>
                        <p className="text-sm font-sans text-[#E0E0E0]/90 leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      <div className="space-y-3 bg-foundation-surface/50 p-3.5 rounded-lg border border-foundation-border/50">
                        <div>
                          <span className="text-[#BDCDEF] uppercase tracking-wider block font-semibold mb-1">
                            Date &amp; Venue
                          </span>
                          <p className="text-xs font-sans text-white">
                            {event.date} ({event.weekday})
                          </p>
                          <p className="text-xs font-sans text-qiskit-blue mt-0.5">
                            {event.venue}, IISER Bhopal
                          </p>
                        </div>

                        <div>
                          <span className="text-[#BDCDEF] uppercase tracking-wider block font-semibold mb-1">
                            Prerequisites
                          </span>
                          <p className="text-xs font-sans text-[#E0E0E0]/80 leading-relaxed">
                            {event.prerequisites || "Open to all participants."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          }}
        />
      </div>
    </section>
  );
}
