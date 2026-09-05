"use client";

import React, { useEffect } from "react";
import { X, Shield, BookOpen, Eye } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

function BaseModal({
  isOpen,
  onClose,
  title,
  subtitle,
  icon: Icon,
  children,
}: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-foundation-surface border border-foundation-border rounded-xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-foundation-border flex items-center justify-between bg-foundation-elevated/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-foundation-surface border border-foundation-border">
              <Icon className="w-5 h-5 text-qiskit-blue" />
            </div>
            <div>
              <h3 id="modal-title" className="text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="text-xs font-mono text-[#BDCDEF]">
                {subtitle}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded text-foundation-muted hover:text-white hover:bg-foundation-surface border border-transparent hover:border-foundation-border transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#E0E0E0]/85 leading-relaxed font-sans">
          {children}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-foundation-border bg-foundation-elevated/40 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded bg-foundation-elevated hover:bg-foundation-border border border-foundation-border text-xs font-semibold text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function PrivacyModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Privacy Notice"
      subtitle="IBM Qiskit Fall Fest 2026 · IISER Bhopal"
      icon={Shield}
    >
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-white">1. Data Collection & Purpose</h4>
        <p>
          Information submitted through the registration portal (name, institutional email, university affiliation, and role) is used solely by the EECS Club and Physics Club organizing committee to administer event participation, allocate workshop compute seats, issue participation credentials, and verify campus access at IISER Bhopal.
        </p>

        <h4 className="text-sm font-semibold text-white">2. Communication & Updates</h4>
        <p>
          We will send you necessary event notifications, including schedule releases, venue directions, and post-event hackathon certificates. Your contact details are never shared with unauthorized third parties or commercial entities.
        </p>

        <h4 className="text-sm font-semibold text-white">3. Platform Integration [TBD]</h4>
        <p>
          Participant accounts on the IBM Quantum Platform are governed by IBM&apos;s standard terms of service. No additional proprietary data is collected through this promotional website.
        </p>
      </div>
    </BaseModal>
  );
}

export function CodeOfConductModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Code of Conduct"
      subtitle="Fostering an open, welcoming scientific community"
      icon={BookOpen}
    >
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-white">1. Our Commitment</h4>
        <p>
          The IBM Qiskit Fall Fest at IISER Bhopal is dedicated to providing a harassment-free, welcoming, and inclusive learning experience for everyone, regardless of gender identity, sexual orientation, disability, physical appearance, race, ethnicity, or level of academic experience.
        </p>

        <h4 className="text-sm font-semibold text-white">2. Expected Behavior</h4>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
          <li>Be respectful, collaborative, and constructive during discussions, labs, and hackathons.</li>
          <li>Foster an open environment for learners of all backgrounds and skill levels.</li>
          <li>Give and gracefully accept constructive technical critique.</li>
          <li>Respect campus regulations, lecture hall facilities, and computational hardware resources.</li>
        </ul>

        <h4 className="text-sm font-semibold text-white">3. Reporting & Enforcement</h4>
        <p>
          Unacceptable behavior will not be tolerated. Participants asked to stop any harassing behavior are expected to comply immediately. Violations can be reported to the student lead organizers at <span className="font-mono text-qiskit-blue">eecs.club.official@gmail.com</span>.
        </p>
      </div>
    </BaseModal>
  );
}

export function AccessibilityModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Accessibility Statement"
      subtitle="Ensuring an inclusive learning environment"
      icon={Eye}
    >
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-white">1. Physical Campus Accessibility</h4>
        <p>
          The IISER Bhopal Lecture Hall Complex (LHC) is equipped with ramps, elevators, and accessible seating arrangements in all main auditoriums and computer labs.
        </p>

        <h4 className="text-sm font-semibold text-white">2. Digital Materials & Code Notebooks</h4>
        <p>
          All presentation decks, tutorial Jupyter notebooks, and workshop recordings will be distributed in high-contrast formats with clear code comments and documentation.
        </p>

        <h4 className="text-sm font-semibold text-white">3. Special Accommodations</h4>
        <p>
          If you require specific accommodations (such as sign language interpretation, reserved front seating, or dietary accommodations for meals), please indicate this in the registration form or contact our team directly.
        </p>
      </div>
    </BaseModal>
  );
}
