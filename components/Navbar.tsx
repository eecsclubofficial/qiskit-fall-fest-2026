"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";

export function Navbar() {
  const { mobileMenuOpen: isOpen, setMobileMenuOpen: setIsOpen } = useUIStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Highlights", href: "#highlights" },
    { label: "Programme", href: "#schedule" },
    { label: "Organizers", href: "#organizers" },
    { label: "Venue", href: "#venue" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled
          ? "bg-[#0B0E14]/90 backdrop-blur-md border-b border-foundation-border shadow-lg"
          : "bg-foundation-bg/70 backdrop-blur-sm border-b border-foundation-border/40"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Group */}
        <Link
          href="#"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-qiskit-blue rounded py-1"
          aria-label="IBM Qiskit Fall Fest 2026 IISER Bhopal Home"
        >
          {/* IISER Bhopal Logo */}
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0">
            <Image
              src="/assets/usefulGraphics/PNGgraphics/iiserb_logo.png"
              alt="IISER Bhopal Logo"
              width={36}
              height={36}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Qiskit Fall Fest Badge */}
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0">
            <Image
              src="/assets/usefulGraphics/SVGgraphics/badge-pink.svg"
              alt="Qiskit Fall Fest Badge"
              width={36}
              height={36}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* IBM Quantum text mark */}
          <div className="h-6 flex items-center">
            <Image
              src="/assets/brand/ibm-quantum-white.png"
              alt="IBM Quantum"
              width={110}
              height={22}
              className="h-5 w-auto object-contain"
              priority
            />
          </div>

          {/* Vertical divider */}
          <div className="hidden sm:block h-5 w-px bg-foundation-border" />

          {/* IISER Bhopal Club Tag */}
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-[11px] font-mono tracking-wider text-foundation-light font-semibold uppercase leading-tight">
              IISER Bhopal
            </span>
            <span className="text-[10px] font-mono text-qiskit-purple-light leading-tight">
              EECS × Physics Club
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#E0E0E0]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white relative py-1 focus-visible:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#register"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold tracking-wide text-white bg-qiskit-magenta hover:bg-[#d83f81] active:scale-[0.98] transition-all rounded focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-qiskit-magenta"
          >
            <span>Register Here</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#E0E0E0] hover:text-white hover:bg-foundation-elevated rounded border border-foundation-border focus:outline-none focus-visible:ring-2 focus-visible:ring-qiskit-blue"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-foundation-surface border-b border-foundation-border px-6 py-5 shadow-2xl">
          <nav className="flex flex-col gap-4 text-base font-medium text-foundation-light">
            <div className="pb-3 border-b border-foundation-border text-xs font-mono text-[#E0E0E0]/70 uppercase tracking-widest">
              IISER Bhopal · October 2026
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-1.5 text-[#E0E0E0] hover:text-white hover:translate-x-1 transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#register"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-qiskit-magenta rounded"
              >
                <span>Register Here</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
