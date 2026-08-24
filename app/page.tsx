"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { About } from "@/components/About";
import { ChapterBreak } from "@/components/ChapterBreak";
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

export default function HomePage() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [codeOfConductOpen, setCodeOfConductOpen] = useState(false);
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-foundation-bg text-foundation-light selection:bg-qiskit-purple selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Learn / Build / Collaborate */}
        <ValueProps />

        {/* 3. About the Fest & Credibility Stats */}
        <About />

        {/* Chapter Break 1: Bridge to Technical Programme */}
        <ChapterBreak
          number="01"
          tag="Curriculum"
          headline="From quantum gates to real hardware. Zero barrier to entry."
          description="A structured learning track connecting theoretical physics foundations with practical algorithmic programming on IBM Quantum systems."
        />

        {/* 4. Programme / Schedule */}
        <Schedule />

        {/* 5. Organizers */}
        <Organizers />

        {/* 6. Venue & Campus */}
        <Venue />

        {/* 7. Open to Everyone Feature Strip */}
        <OpenToAll />

        {/* Chapter Break 2: Bridge to Registration */}
        <ChapterBreak
          number="02"
          tag="Community"
          headline="Build the future of computation with us at IISER Bhopal."
          description="Register your interest today to secure early access to tutorials, quantum compute credits, and hackathon problem statements."
        />

        {/* 8. Registration Form */}
        <Registration
          onOpenPrivacy={() => setPrivacyOpen(true)}
          onOpenCodeOfConduct={() => setCodeOfConductOpen(true)}
        />

        {/* 9. FAQ Accordion */}
        <Faq />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenCodeOfConduct={() => setCodeOfConductOpen(true)}
        onOpenAccessibility={() => setAccessibilityOpen(true)}
      />

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
