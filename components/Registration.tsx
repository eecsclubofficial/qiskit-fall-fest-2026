"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Check, Loader2, Send, ShieldCheck, AlertCircle, Sparkles } from "lucide-react";
import { useRegistrationMutation } from "@/hooks/useRegistrationMutation";
import { useUIStore } from "@/store/useUIStore";

interface RegistrationFormData {
  fullName: string;
  email: string;
  institution: string;
  role: string;
  experience: string;
  specialRequirements: string;
  consent: boolean;
}

export function Registration() {
  const setPrivacyOpen = useUIStore((s) => s.setPrivacyOpen);
  const setCodeOfConductOpen = useUIStore((s) => s.setCodeOfConductOpen);
  const registrationMutation = useRegistrationMutation();

  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: "",
    email: "",
    institution: "",
    role: "Student",
    experience: "Beginner",
    specialRequirements: "",
    consent: false,
  });

  const [validationError, setValidationError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    if (!formData.fullName.trim()) {
      setValidationError("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setValidationError("Please enter a valid email address.");
      return;
    }
    if (!formData.consent) {
      setValidationError("Please accept the event Code of Conduct and Privacy notice to proceed.");
      return;
    }

    try {
      await registrationMutation.mutateAsync(formData);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#A46DFF", "#FF7EB6", "#4589FF", "#EE5396", "#FFFFFF"],
        });
      } catch {
        // Fallback if canvas-confetti is restricted
      }
    } catch {
      // Error handled by mutation state
    }
  };

  const roles = [
    "Undergraduate Student",
    "Master's / Integrated PhD",
    "PhD Researcher",
    "Faculty / Postdoc",
    "Industry Professional / Developer",
    "Other",
  ];

  const experienceLevels = [
    {
      level: "Beginner",
      desc: "New to quantum or basic Python knowledge",
    },
    {
      level: "Intermediate",
      desc: "Built basic Qiskit circuits / familiar with linear algebra",
    },
    {
      level: "Advanced",
      desc: "Active researcher in quantum algorithms / Qiskit SDK workflows",
    },
  ];

  const isSubmitted = registrationMutation.isSuccess;
  const isLoading = registrationMutation.isPending;

  return (
    <section id="register" className="py-20 px-4 sm:px-6 lg:px-8 bg-foundation-bg/70 backdrop-blur-sm border-t border-foundation-border/60">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
            Register Here
          </h2>
          <p className="mt-4 text-base text-[#E0E0E0]/80">
            Secure your spot for IBM Qiskit Fall Fest 2026 at IISER Bhopal. We will notify you of further details and schedule announcements via email.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-foundation-surface border border-foundation-border rounded-xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-qiskit-purple/20 border border-qiskit-purple text-qiskit-purple-light flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-white">
                  Registration interest recorded
                </h3>
                <p className="text-sm text-[#E0E0E0]/90 max-w-md mx-auto">
                  Thank you, <span className="text-white font-medium">{formData.fullName}</span>. A confirmation has been registered for <span className="font-mono text-qiskit-blue">{formData.email}</span>.
                </p>
              </div>

              <div className="p-4 rounded bg-foundation-elevated border border-foundation-border max-w-md mx-auto text-left text-xs font-mono space-y-1.5 text-[#BDCDEF]">
                <div className="flex justify-between">
                  <span>Institution:</span>
                  <span className="text-white">{formData.institution}</span>
                </div>
                <div className="flex justify-between">
                  <span>Track:</span>
                  <span className="text-white">{formData.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="text-white">IISER Bhopal Campus</span>
                </div>
              </div>

              <p className="text-xs text-foundation-muted max-w-sm mx-auto">
                We look forward to welcoming you in October 2026. Pre-workshop tutorials and access keys will be dispatched prior to the fest kickoff.
              </p>

              <button
                type="button"
                onClick={() => {
                  registrationMutation.reset();
                  setFormData({
                    fullName: "",
                    email: "",
                    institution: "",
                    role: "Student",
                    experience: "Beginner",
                    specialRequirements: "",
                    consent: false,
                  });
                }}
                className="text-xs font-mono text-qiskit-blue hover:underline mt-2"
              >
                Submit another response
              </button>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {(validationError || registrationMutation.isError) && (
                <div className="p-3.5 rounded bg-red-950/40 border border-red-800/80 text-red-200 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
                  <span>{validationError || "Submission failed. Please try again."}</span>
                </div>
              )}

              {/* Full Name & Email (2 Cols) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-mono uppercase tracking-wider text-[#BDCDEF] mb-2"
                  >
                    Full Name <span className="text-qiskit-pink">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="e.g. Ada Lovelace"
                    className="w-full px-3.5 py-2.5 rounded bg-foundation-elevated border border-foundation-border text-white text-sm focus:border-qiskit-blue focus:ring-1 focus:ring-qiskit-blue placeholder:text-foundation-muted transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-[#BDCDEF] mb-2"
                  >
                    Email Address <span className="text-qiskit-pink">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. ada@iiserb.ac.in"
                    className="w-full px-3.5 py-2.5 rounded bg-foundation-elevated border border-foundation-border text-white text-sm focus:border-qiskit-blue focus:ring-1 focus:ring-qiskit-blue placeholder:text-foundation-muted transition-colors"
                  />
                </div>
              </div>

              {/* Institution & Academic Role (2 Cols) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="institution"
                    className="block text-xs font-mono uppercase tracking-wider text-[#BDCDEF] mb-2"
                  >
                    Institution / University <span className="text-qiskit-pink">*</span>
                  </label>
                  <input
                    id="institution"
                    type="text"
                    required
                    value={formData.institution}
                    onChange={(e) =>
                      setFormData({ ...formData, institution: e.target.value })
                    }
                    placeholder="e.g. IISER Bhopal"
                    className="w-full px-3.5 py-2.5 rounded bg-foundation-elevated border border-foundation-border text-white text-sm focus:border-qiskit-blue focus:ring-1 focus:ring-qiskit-blue placeholder:text-foundation-muted transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-xs font-mono uppercase tracking-wider text-[#BDCDEF] mb-2"
                  >
                    Current Role <span className="text-qiskit-pink">*</span>
                  </label>
                  <select
                    id="role"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded bg-foundation-elevated border border-foundation-border text-white text-sm focus:border-qiskit-blue focus:ring-1 focus:ring-qiskit-blue transition-colors cursor-pointer"
                  >
                    {roles.map((r) => (
                      <option key={r} value={r} className="bg-foundation-surface text-white">
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Quantum Experience Level */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#BDCDEF] mb-3">
                  Quantum Computing Experience Level <span className="text-qiskit-pink">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {experienceLevels.map((exp) => (
                    <div
                      key={exp.level}
                      onClick={() =>
                        setFormData({ ...formData, experience: exp.level })
                      }
                      className={`p-3.5 rounded border cursor-pointer transition-all ${
                        formData.experience === exp.level
                          ? "bg-foundation-elevated border-qiskit-magenta text-white shadow-sm"
                          : "bg-foundation-elevated/40 border-foundation-border text-[#E0E0E0]/80 hover:border-foundation-muted"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono font-semibold">
                          {exp.level}
                        </span>
                        <div
                          className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                            formData.experience === exp.level
                              ? "border-qiskit-magenta bg-qiskit-magenta"
                              : "border-foundation-muted"
                          }`}
                        >
                          {formData.experience === exp.level && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </div>
                      </div>
                      <p className="text-[11px] text-[#BDCDEF] leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  ))}
                </div>
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
                      onClick={() => setCodeOfConductOpen(true)}
                      className="text-qiskit-blue underline hover:text-white"
                    >
                      Code of Conduct
                    </button>{" "}
                    and consent to receiving updates regarding IBM Qiskit Fall Fest 2026 under the{" "}
                    <button
                      type="button"
                      onClick={() => setPrivacyOpen(true)}
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
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 rounded text-sm font-semibold tracking-wide text-white bg-qiskit-magenta hover:bg-[#d83f81] active:scale-[0.99] disabled:opacity-60 transition-all flex items-center justify-center gap-2 shadow-lg focus-visible:ring-2 focus-visible:ring-qiskit-magenta"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting interest...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit your Application</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
