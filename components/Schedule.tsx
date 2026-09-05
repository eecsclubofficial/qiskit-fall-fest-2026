"use client";

import React, { useMemo, useCallback } from "react";
import {
  MapPin,
  ChevronDown,
  ChevronUp,
  Calendar,
  AlertCircle,
} from "lucide-react";
import AnimatedList from "./AnimatedList";
import { useScheduleStore } from "@/store/useScheduleStore";
import { useScheduleQuery } from "@/hooks/useScheduleQuery";
import { dayTabs } from "@/data/scheduleData";

export function Schedule() {
  // TanStack Query for schedule events with caching & background updates
  const { data: events = [] } = useScheduleQuery();

  // Zustand atomic selectors to prevent unnecessary re-renders
  const activeTab = useScheduleStore((s) => s.activeTab);
  const setActiveTab = useScheduleStore((s) => s.setActiveTab);
  const expandedId = useScheduleStore((s) => s.expandedId);
  const setExpandedId = useScheduleStore((s) => s.setExpandedId);

  const filteredEvents = useMemo(() => {
    return events.filter((e) => {
      return activeTab === 0 || e.day === activeTab;
    });
  }, [events, activeTab]);

  const toggleEvent = useCallback(
    (id: string) => {
      setExpandedId(id);
    },
    [setExpandedId]
  );

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

        {/* Animated Schedule List (Single page flow, hardware-accelerated scroll animations) */}
        <AnimatedList
          key={activeTab}
          items={filteredEvents}
          showGradients={false}
          enableArrowNavigation={true}
          displayScrollbar={false}
          hasScroll={false}
          triggerOnce={false}
          onItemSelect={(event) => toggleEvent(event.id)}
          renderItem={(event, index, isSelected) => {
            const isExpanded = expandedId === event.id;

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
                {/* Event Row Header */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleEvent(event.id);
                  }}
                  className="p-5 sm:p-6 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-4 select-none"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleEvent(event.id);
                    }
                  }}
                  aria-expanded={isExpanded}
                >
                  {/* Left: Day & Date Badge */}
                  <div className="lg:w-44 flex-shrink-0 flex items-center gap-3">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-qiskit-purple/15 text-qiskit-purple-light border border-qiskit-purple/25">
                      Day 0{event.day}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5 text-qiskit-blue flex-shrink-0" />
                      <span className="text-qiskit-pink">{event.weekday}</span>
                    </div>
                  </div>

                  {/* Center: Title */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight text-white group-hover:text-qiskit-blue transition-colors">
                      {event.title}
                    </h3>
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

                {/* Animated Expanded Details Accordion */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-240 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pt-3 border-t border-foundation-border/60 bg-foundation-elevated/30">
                      <div className="space-y-3">
                        <span className="text-[#BDCDEF] uppercase tracking-wider block font-semibold text-xs font-mono">
                          Session Overview
                        </span>
                        <p className="text-sm text-[#E0E0E0]/90 leading-relaxed">
                          {event.description}
                        </p>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-qiskit-blue pt-1">
                          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{event.date} ({event.weekday})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>
    </section>
  );
}
