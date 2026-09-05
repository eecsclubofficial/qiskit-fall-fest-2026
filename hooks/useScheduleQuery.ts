"use client";

import { useQuery } from "@tanstack/react-query";
import { scheduleEvents, ScheduleEvent } from "@/data/scheduleData";

async function fetchSchedule(): Promise<ScheduleEvent[]> {
  // Can connect to future API route or remote CMS
  return scheduleEvents;
}

export function useScheduleQuery() {
  return useQuery({
    queryKey: ["schedule", "events"],
    queryFn: fetchSchedule,
    initialData: scheduleEvents,
    staleTime: 5 * 60 * 1000,
  });
}
