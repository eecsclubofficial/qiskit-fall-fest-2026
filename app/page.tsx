"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { QuantumBackground } from "@/components/QuantumBackground";
import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { About } from "@/components/About";
import { Schedule } from "@/components/Schedule";
import { Organizers } from "@/components/Organizers";
import { Venue } from "@/components/Venue";
import { OpenToAll } from "@/components/OpenToAll";
import { Registration } from "@/components/Registration";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import {
  PrivacyModal,
  CodeOfConductModal,
  AccessibilityModal,
} from "@/components/Modals";
import { useUIStore } from "@/store/useUIStore";

export default function HomePage() {
  const {
    privacyOpen,
    codeOfConductOpen,
    accessibilityOpen,
    setPrivacyOpen,
    setCodeOfConductOpen,
    setAccessibilityOpen,
  } = useUIStore();

  return (
    <div className="min-h-screen flex flex-col bg-foundation-bg text-foundation-light selection:bg-qiskit-purple selection:text-white relative">
      {/* Global Fluid LiquidEther Background across the entire website */}
      <QuantumBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 relative z-10">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Learn / Build / Collaborate */}
        <ValueProps />

        {/* 3. About the Fest & Credibility Stats */}
        <About />

        {/* 4. Programme / Schedule */}
        <Schedule />

        {/* 5. Organizers */}
        <Organizers />

        {/* 6. Venue & Campus */}
        <Venue />

        {/* 7. Open to Everyone Feature Strip */}
        <OpenToAll />

        {/* 8. Registration Form */}
        <Registration />

        {/* 9. FAQ Accordion */}
        <Faq />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Interactive Modal Dialogs */}
      <PrivacyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
      <CodeOfConductModal
        isOpen={codeOfConductOpen}
        onClose={() => setCodeOfConductOpen(false)}
      />
      <AccessibilityModal
        isOpen={accessibilityOpen}
        onClose={() => setAccessibilityOpen(false)}
      />
    </div>
  );
}
