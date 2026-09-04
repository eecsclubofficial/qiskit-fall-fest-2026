import { create } from "zustand";

interface UIState {
  privacyOpen: boolean;
  codeOfConductOpen: boolean;
  accessibilityOpen: boolean;
  mobileMenuOpen: boolean;
  setPrivacyOpen: (open: boolean) => void;
  setCodeOfConductOpen: (open: boolean) => void;
  setAccessibilityOpen: (open: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  closeAllModals: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  privacyOpen: false,
  codeOfConductOpen: false,
  accessibilityOpen: false,
  mobileMenuOpen: false,

  setPrivacyOpen: (open) => set({ privacyOpen: open }),
  setCodeOfConductOpen: (open) => set({ codeOfConductOpen: open }),
  setAccessibilityOpen: (open) => set({ accessibilityOpen: open }),
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  closeAllModals: () =>
    set({
      privacyOpen: false,
      codeOfConductOpen: false,
      accessibilityOpen: false,
    }),
}));
