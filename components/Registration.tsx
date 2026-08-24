"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Check, Loader2, Send, ShieldCheck, AlertCircle, Sparkles } from "lucide-react";

interface RegistrationFormData {
  fullName: string;
  email: string;
  institution: string;
  role: string;
  experience: string;
  specialRequirements: string;
  consent: boolean;
}

interface RegistrationProps {
  onOpenPrivacy: () => void;
  onOpenCodeOfConduct: () => void;
}

export function Registration({ onOpenPrivacy, onOpenCodeOfConduct }: RegistrationProps) {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: "",
    email: "",
    institution: "IISER Bhopal",
    role: "Student",
    experience: "Beginner",
    specialRequirements: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.fullName.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!formData.consent) {
      setErrorMsg("Please accept the event Code of Conduct and Privacy notice to proceed.");
      return;
    }

    setLoading(true);

    /*
     * [INTEGRATION NEEDED]
     * // TODO: Connect this handler to the real production backend endpoint.
     * Examples:
     * - Google Form submission endpoint via fetch
     * - Formspree or Formkeep webhook
     * - Next.js API Route (/api/register) connected to Supabase / PostgreSQL / MongoDB
     * - IBM Quantum collegiate event registration portal webhook
     */
    console.log("[INTEGRATION NEEDED] Submitting registration payload:", formData);

    // Simulate network submission latency
    await new Promise((resolve) => setTimeout(resolve, 900));

    setLoading(false);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#A46DFF", "#FF7EB6", "#4589FF", "#EE5396", "#FFFFFF"],
      });
    } catch {
      // Fallback gracefully if canvas-confetti is restricted
    }
  };

  return (
    <section id="register" className="py-20 px-4 sm:px-6 lg:px-8 bg-foundation-bg border-t border-foundation-border/60">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-mono font-medium tracking-[0.2em] text-qiskit-magenta uppercase mb-2">
            Priority Access
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
            Register your interest.
          </h2>
          <p className="mt-4 text-base text-[#E0E0E0]/80">
            Secure your spot for IBM Qiskit Fall Fest 2026 at IISER Bhopal. We will notify you as soon as exact October dates and schedule slots are finalized.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-foundation-surface border border-foundation-border rounded-xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {submitted ? (
            /* Success State */
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-qiskit-purple/20 border border-qiskit-purple text-qiskit-purple-light flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-white">
                  Registration interest recorded.
                </h3>
                <p className="text-sm text-[#E0E0E0]/90 max-w-md mx-auto">
                  Thank you, <span className="text-white font-medium">{formData.fullName}</span>. A confirmation has been registered for <span className="font-mono text-qiskit-blue">{formData.email}</span>.
                </p>
              </div>

              <div className="p-4 rounded bg-foundation-elevated border border-foundation-border max-w-md mx-auto text-left text-xs font-mono space-y-1.5 text-[#BDCDEF]">
                <div className="flex justify-between">
                  <span className="text-foundation-muted">Institution:</span>
                  <span className="text-white font-medium">{formData.institution}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foundation-muted">Role:</span>
                  <span className="text-white font-medium">{formData.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foundation-muted">Track Level:</span>
                  <span className="text-white font-medium">{formData.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foundation-muted">Status:</span>
                  <span className="text-qiskit-pink font-semibold">Priority Queued [TBD Dates]</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      institution: "IISER Bhopal",
                      role: "Student",
                      experience: "Beginner",
                      specialRequirements: "",
                      consent: false,
                    });
                  }}
                  className="text-xs font-mono text-[#BDCDEF] hover:text-white underline"
                >
                  Register another attendee
                </button>
                <a
                  href="#schedule"
                  className="px-5 py-2.5 rounded bg-foundation-elevated hover:bg-foundation-border border border-foundation-border text-xs font-semibold text-white"
                >
                  Review Programme Schedule
                </a>
              </div>
            </div>
          ) : (
            /* Active Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3 rounded bg-red-950/60 border border-red-800/80 text-red-200 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-mono font-medium text-white mb-2"
                  >
                    Full Name <span className="text-qiskit-pink">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="e.g. Aditi Sharma"
                    className="w-full px-3.5 py-2.5 rounded bg-foundation-elevated border border-foundation-border text-white text-sm focus:border-qiskit-blue focus:ring-1 focus:ring-qiskit-blue placeholder:text-foundation-muted transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono font-medium text-white mb-2"
                  >
                    Email Address <span className="text-qiskit-pink">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. student@iiserb.ac.in"
                    className="w-full px-3.5 py-2.5 rounded bg-foundation-elevated border border-foundation-border text-white text-sm focus:border-qiskit-blue focus:ring-1 focus:ring-qiskit-blue placeholder:text-foundation-muted transition-colors"
                  />
                </div>
              </div>

              {/* Institution & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="institution"
                    className="block text-xs font-mono font-medium text-white mb-2"
                  >
                    Institution / University <span className="text-qiskit-pink">*</span>
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    required
                    value={formData.institution}
                    onChange={(e) =>
                      setFormData({ ...formData, institution: e.target.value })
                    }
                    placeholder="e.g. IISER Bhopal, MANIT, IIT"
                    className="w-full px-3.5 py-2.5 rounded bg-foundation-elevated border border-foundation-border text-white text-sm focus:border-qiskit-blue focus:ring-1 focus:ring-qiskit-blue placeholder:text-foundation-muted transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-xs font-mono font-medium text-white mb-2"
                  >
                    Current Role <span className="text-qiskit-pink">*</span>
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded bg-foundation-elevated border border-foundation-border text-white text-sm focus:border-qiskit-blue focus:ring-1 focus:ring-qiskit-blue transition-colors cursor-pointer"
                  >
                    <option value="Undergraduate Student">Undergraduate Student (BS-MS / B.Tech)</option>
                    <option value="Master's Student">Master&apos;s Student (M.Sc / M.Tech)</option>
                    <option value="PhD Researcher">PhD Researcher / Scholar</option>
                    <option value="Recent Graduate">Recent Graduate</option>
                    <option value="Faculty or Staff">Faculty or Staff Member</option>
                    <option value="Industry Professional">Industry Professional</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-xs font-mono font-medium text-white mb-2">
                  Experience Level in Quantum / Python <span className="text-qiskit-pink">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: "Beginner",
                      label: "Complete Beginner",
                      sub: "New to quantum & Qiskit",
                    },
                    {
                      id: "Intermediate",
                      label: "Some Experience",
                      sub: "Know basic linear algebra/Python",
                    },
                    {
                      id: "Advanced",
                      label: "Quantum Builder",
                      sub: "Have run circuits or algorithms",
                    },
                  ].map((exp) => (
                    <label
                      key={exp.id}
                      className={`flex flex-col p-3 rounded border cursor-pointer transition-all ${
                        formData.experience === exp.id
                          ? "bg-foundation-elevated border-qiskit-purple ring-1 ring-qiskit-purple"
                          : "bg-foundation-surface border-foundation-border hover:border-foundation-muted"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-white">
                          {exp.label}
                        </span>
                        <input
                          type="radio"
                          name="experience"
                          value={exp.id}
                          checked={formData.experience === exp.id}
                          onChange={(e) =>
                            setFormData({ ...formData, experience: e.target.value })
                          }
                          className="text-qiskit-purple focus:ring-qiskit-purple"
                        />
                      </div>
                      <span className="text-[11px] text-foundation-muted">
                        {exp.sub}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Accessibility / Dietary Requirements (Optional) */}
              <div>
                <label
                  htmlFor="specialRequirements"
                  className="block text-xs font-mono font-medium text-white mb-2"
                >
                  Accessibility &amp; Special Requirements (Optional)
                </label>
                <input
                  type="text"
                  id="specialRequirements"
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      specialRequirements: e.target.value,
                    })
                  }
                  placeholder="e.g. Wheelchair access, dietary preferences, captioning"
                  className="w-full px-3.5 py-2.5 rounded bg-foundation-elevated border border-foundation-border text-white text-sm focus:border-qiskit-blue focus:ring-1 focus:ring-qiskit-blue placeholder:text-foundation-muted transition-colors"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) =>
                      setFormData({ ...formData, consent: e.target.checked })
                    }
                    className="mt-1 rounded border-foundation-border text-qiskit-magenta focus:ring-qiskit-magenta h-4 w-4 bg-foundation-elevated"
                  />
                  <span className="text-xs text-[#E0E0E0]/80 leading-normal">
                    I agree to the{" "}
                    <button
                      type="button"
                      onClick={onOpenCodeOfConduct}
                      className="text-qiskit-blue underline hover:text-white"
                    >
                      Code of Conduct
                    </button>{" "}
                    and consent to receiving updates regarding IBM Qiskit Fall Fest 2026 under the{" "}
                    <button
                      type="button"
                      onClick={onOpenPrivacy}
                      className="text-qiskit-blue underline hover:text-white"
                    >
                      Privacy Notice
                    </button>
                    .
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded text-sm font-semibold tracking-wide text-white bg-qiskit-magenta hover:bg-[#d83f81] active:scale-[0.99] disabled:opacity-60 transition-all flex items-center justify-center gap-2 shadow-lg focus-visible:ring-2 focus-visible:ring-qiskit-magenta"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting interest...</span>
                    </>
                  ) : (
                    <>
                      <span>Register interest for Fall Fest 2026</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 text-center">
                <p className="text-[11px] font-mono text-foundation-muted">
                  [INTEGRATION READY] Free registration · Certificate &amp; hardware compute credits included
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
