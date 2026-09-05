import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ScheduleState {
  activeTab: number;
  expandedId: string | null;
  bookmarkedSessionIds: string[];
  setActiveTab: (tab: number) => void;
  setExpandedId: (id: string | null) => void;
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

export const useScheduleStore = create<ScheduleState>()(
  persist(
    (set, get) => ({
      activeTab: 0,
      expandedId: null,
      bookmarkedSessionIds: [],

      setActiveTab: (tab: number) => set({ activeTab: tab }),
      setExpandedId: (id: string | null) =>
        set((state) => ({
          expandedId: id === null ? null : state.expandedId === id ? null : id,
        })),
      toggleBookmark: (id: string) =>
        set((state) => {
          const exists = state.bookmarkedSessionIds.includes(id);
          return {
            bookmarkedSessionIds: exists
              ? state.bookmarkedSessionIds.filter((sessionId) => sessionId !== id)
              : [...state.bookmarkedSessionIds, id],
          };
        }),
      isBookmarked: (id: string) => get().bookmarkedSessionIds.includes(id),
    }),
    {
      name: "qiskit-fallfest-schedule-store",
      partialize: (state) => ({ bookmarkedSessionIds: state.bookmarkedSessionIds }),
    }
  )
);
