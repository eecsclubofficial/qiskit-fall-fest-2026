"use client";

import React from "react";
import Image from "next/image";
import { Mail, Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";

export function Footer() {
  const { setPrivacyOpen, setCodeOfConductOpen, setAccessibilityOpen } = useUIStore();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070A0F]/85 backdrop-blur-md border-t border-foundation-border/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-foundation-light">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-foundation-border/60">
          {/* Brand Info (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 relative flex-shrink-0">
                <Image
                  src="/assets/brand/qiskit-purple.svg"
                  alt="Qiskit Icon"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-6 flex items-center">
                <Image
                  src="/assets/brand/ibm-quantum-white.png"
                  alt="IBM Quantum"
                  width={110}
                  height={22}
                  className="h-5 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-[#E0E0E0]/80 max-w-sm leading-relaxed">
              IBM Qiskit Fall Fest 2026 is an official collegiate quantum computing festival hosted at the Indian Institute of Science Education and Research (IISER) Bhopal.
            </p>

            <div className="pt-2 text-xs font-mono text-qiskit-purple-light">
              EECS Club × Physics Club Collaboration
            </div>
          </div>

          {/* Navigation Links (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#BDCDEF]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About the Fest
                </a>
              </li>
              <li>
                <a href="#highlights" className="hover:text-white transition-colors">
                  Highlights
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-white transition-colors">
                  Programme Schedule
                </a>
              </li>
              <li>
                <a href="#organizers" className="hover:text-white transition-colors">
                  Organizing Committee
                </a>
              </li>
              <li>
                <a href="#venue" className="hover:text-white transition-colors">
                  IISER Bhopal Venue
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-white transition-colors text-qiskit-pink font-medium">
                  Register Interest
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Legal (Col 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Policies &amp; Contact
            </h4>
            <div className="space-y-2 text-sm text-[#BDCDEF]">
              <div>
                <button
                  type="button"
                  onClick={() => setPrivacyOpen(true)}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Notice
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => setCodeOfConductOpen(true)}
                  className="hover:text-white transition-colors text-left"
                >
                  Code of Conduct
                </button>
              </div>

              <div className="pt-2">
                <a
                  href="mailto:eecs.club.official@gmail.com?subject=Qiskit%20Fall%20Fest%202026"
                  className="inline-flex items-center gap-2 text-xs font-mono text-qiskit-blue hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>eecs.club.official@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 flex items-center gap-3 text-[#BDCDEF]">
              <a
                href="https://github.com/qiskit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded bg-foundation-surface hover:bg-foundation-elevated border border-foundation-border text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/school/iiser-bhopal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded bg-foundation-surface hover:bg-foundation-elevated border border-foundation-border text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/qiskit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="p-2 rounded bg-foundation-surface hover:bg-foundation-elevated border border-foundation-border text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-foundation-muted">
          <div className="text-center sm:text-left">
            <span>
              Made by EECS Club × Physics Club, IISER Bhopal. Powered by IBM Quantum.
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#BDCDEF] hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
