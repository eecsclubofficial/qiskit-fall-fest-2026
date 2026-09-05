"use client";

import React from "react";
import { MapPin, ChevronDown, ChevronUp, Calendar, AlertCircle } from "lucide-react";
import { useScheduleStore } from "@/store/useScheduleStore";

interface ScheduleEvent {
  id: string;
  title: string;
  venue: string;
  description: string;
}

interface ScheduleDay {
  day: number;
  date: string;       // e.g. "October 9, 2026"
  weekday: string;    // e.g. "Thursday"
  events: ScheduleEvent[];
}

const schedule: ScheduleDay[] = [
  {
    day: 1,
    date: "October 9, 2026",
    weekday: "Friday",
    events: [
      {
        id: "d1-e1",
        title: "Opening Ceremony & Hackathon Launch",
        venue: "LHC",
        description:
          "Event introduction, quantum circuit simulator demo, and official hackathon problem statement release.",
      },
    ],
  },
  {
    day: 2,
    date: "October 10, 2026",
    weekday: "Saturday",
    events: [
      {
        id: "d2-e1",
        title: "Elementary Qiskit Workshop",
        venue: "LHC",
        description:
          "Hands-on workshop covering Qiskit fundamentals and quantum computing execution on simulators and real IBM Quantum hardware via cloud.",
      },
      {
        id: "d2-e2",
        title: "Student Talk I",
        venue: "LHC",
        description:
          "Technical presentations and research sharing by student presenters.",
      },
    ],
  },
  {
    day: 3,
    date: "October 11, 2026",
    weekday: "Sunday",
    events: [
      {
        id: "d3-e1",
        title: "Advanced Qiskit Workshop",
        venue: "Multimedia Room",
        description:
          "In-depth technical workshop covering advanced quantum computing topics including VQE, error mitigation, and parameterized circuits.",
      },
      {
        id: "d3-e2",
        title: "Keynote & Panel Discussion",
        venue: "LHC",
        description:
          "Expert talk by an external guest speaker followed by an interactive panel discussion with faculty.",
      },
    ],
  },
  {
    day: 4,
    date: "October 17, 2026",
    weekday: "Saturday",
    events: [
      {
        id: "d4-e1",
        title: "Student Talk II & Keynote",
        venue: "LHC",
        description:
          "Student research presentations followed by a session with an external guest speaker.",
      },
    ],
  },
  {
    day: 5,
    date: "October 18, 2026",
    weekday: "Sunday",
    events: [
      {
        id: "d5-e1",
        title: "Guest Speaker Session",
        venue: "LHC",
        description:
          "Expert lecture delivered by an external guest speaker on quantum software architectures and industry quantum advantage.",
      },
      {
        id: "d5-e2",
        title: "Hackathon Presentations & Closing Ceremony",
        venue: "LHC",
        description:
          "Final project presentations by hackathon participants, interactive quantum games, and the official closing ceremony with prize distribution.",
      },
    ],
  },
];

export function Schedule() {
  const { expandedId, setExpandedId } = useScheduleStore();

  return (
    <section
      id="schedule"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-foundation-bg/70 backdrop-blur-sm border-t border-foundation-border/60"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Program Schedule
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#BDCDEF] px-3.5 py-2 rounded bg-foundation-surface border border-foundation-border self-start md:self-auto">
            <AlertCircle className="w-4 h-4 text-qiskit-pink flex-shrink-0" />
            <span>Timings to be confirmed closer to the event</span>
          </div>
        </div>

        {/* Day Sections */}
        <div className="space-y-12">
          {schedule.map((dayBlock) => (
            <div key={dayBlock.day}>
              {/* Day Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded bg-qiskit-purple/15 text-qiskit-purple-light border border-qiskit-purple/25 tracking-wide">
                    Day {dayBlock.day}
                  </span>
                  <div className="flex items-center gap-1.5 text-sm text-white font-medium">
                    <Calendar className="w-3.5 h-3.5 text-qiskit-blue" />
                    <span>{dayBlock.date}</span>
                    <span className="text-foundation-muted ml-0.5">· {dayBlock.weekday}</span>
                  </div>
                </div>
                <div className="flex-1 h-px bg-foundation-border/60" />
              </div>

              {/* Events for this Day */}
              <div className="space-y-3 pl-1">
                {dayBlock.events.map((event) => {
                  const isExpanded = expandedId === event.id;
                  return (
                    <div
                      key={event.id}
                      className={`bg-foundation-surface border rounded-lg transition-all overflow-hidden ${isExpanded
                          ? "border-qiskit-blue/50 shadow-lg shadow-qiskit-blue/5"
                          : "border-foundation-border hover:border-foundation-muted"
                        }`}
                    >
                      {/* Event Row */}
                      <div
                        onClick={() => setExpandedId(isExpanded ? null : event.id)}
                        className="px-5 py-4 sm:px-6 sm:py-5 cursor-pointer flex items-center justify-between gap-4 select-none"
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
                        {/* Title */}
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight text-white flex-1">
                          {event.title}
                        </h3>

                        {/* Venue + Toggle */}
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-[#BDCDEF]">
                            <MapPin className="w-3.5 h-3.5 text-qiskit-blue flex-shrink-0" />
                            <span>{event.venue}</span>
                          </div>
                          <div className="p-1 rounded text-[#BDCDEF] hover:text-white transition-colors">
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
                        <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-foundation-border/60 bg-foundation-elevated/30">
                          {/* Mobile venue (visible only on small screens) */}
                          <div className="flex sm:hidden items-center gap-1.5 text-xs font-mono text-[#BDCDEF] mb-3">
                            <MapPin className="w-3.5 h-3.5 text-qiskit-blue flex-shrink-0" />
                            <span>{event.venue}</span>
                          </div>
                          <p className="text-sm text-[#E0E0E0]/85 leading-relaxed max-w-2xl">
                            {event.description}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
