"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "Who can take part in IBM Qiskit Fall Fest 2026?",
      answer:
        "The fest is open to all enrolled undergraduate students, master's students, PhD scholars, postdoctoral researchers, and faculty members from IISER Bhopal as well as invited attendees from other universities and institutions. No prior affiliation with a quantum research group is required.",
    },
    {
      question: "Do I need prior experience in quantum mechanics or advanced physics?",
      answer:
        "No. The curriculum is structured with dedicated beginner and intermediate tracks. Day 1 starts from fundamental quantum principles, basic linear algebra concepts, and standard Python syntax before proceeding to circuit design and quantum algorithms.",
    },
    {
      question: "Is there any registration fee to attend the event?",
      answer:
        "No. Participation in IBM Qiskit Fall Fest 2026 is completely free of charge. Workshop materials, IBM Quantum cloud compute credits, event participation certificates, merchandise, and hackathon prizes are fully provided by IBM Quantum and the host clubs.",
    },
    {
      question: "Will attendees get access to real IBM Quantum hardware?",
      answer:
        "Yes. Hands-on lab tracks will guide participants on using the Qiskit Runtime service to transpile and submit jobs to real utility-scale IBM Quantum QPUs hosted in the cloud, as well as statevector and matrix product state simulators.",
    },
    {
      question: "Is travel and hostel accommodation provided for participants outside IISER Bhopal?",
      answer:
        "Details regarding guest house and hostel accommodation allocations for non-IISER Bhopal participants are currently under final administrative review [TBD]. Please register your interest in the form, and our hospitality team will share lodging options prior to the event.",
    },
    {
      question: "What software and hardware do I need to bring?",
      answer:
        "You only need a laptop with a modern web browser and Python 3.10+ installed. Detailed setup guides for configuring Jupyter Notebooks and installing Qiskit will be shared with all registered attendees in the pre-fest welcome packet.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0E1218]/70 backdrop-blur-sm border-t border-foundation-border/60">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-mono font-medium tracking-[0.2em] text-qiskit-blue uppercase mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
            Everything you need to know
          </h2>
          <p className="mt-4 text-base text-[#E0E0E0]/80">
            Have questions about eligibility, prerequisites, or anything else? Find quick answers below.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-foundation-surface border border-foundation-border rounded-lg transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-foundation-elevated transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white tracking-tight pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded bg-foundation-elevated border border-foundation-border text-[#BDCDEF] transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180 text-white" : ""
                      }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-foundation-border/40 text-sm sm:text-base text-[#E0E0E0]/85 leading-relaxed font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Card */}
        <div className="mt-10 p-6 rounded-lg bg-foundation-surface border border-foundation-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-foundation-elevated border border-foundation-border">
              <HelpCircle className="w-5 h-5 text-qiskit-purple" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Have a specific question not listed here?
              </h4>
              <p className="text-xs font-mono text-[#BDCDEF] mt-0.5">
                Contact the student organizing committee directly.
              </p>
            </div>
          </div>

          <a
            href="mailto:eecs.club.official@gmail.com?subject=Qiskit%20Fall%20Fest%202026%20Inquiry"
            className="px-4 py-2 rounded bg-foundation-elevated hover:bg-foundation-border border border-foundation-border text-xs font-mono text-white transition-colors"
          >
            Email Organizers
          </a>
        </div>
      </div>
    </section>
  );
}
