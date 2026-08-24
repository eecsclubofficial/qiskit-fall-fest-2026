"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Navigation, Plane, Train, Compass, ExternalLink } from "lucide-react";

export function Venue() {
  return (
    <section id="venue" className="py-20 px-4 sm:px-6 lg:px-8 bg-foundation-bg border-t border-foundation-border/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono font-medium tracking-[0.2em] text-qiskit-blue uppercase mb-2">
            Host Campus
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
            IISER Bhopal, an institute of national importance.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#E0E0E0]/80">
            Set across 200 acres in Bhauri, IISER Bhopal provides state-of-the-art computational infrastructure, lecture auditoriums, and cutting-edge experimental physics research facilities.
          </p>
        </div>

        {/* Main Grid: Campus Photography + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Photo & Badge (Col 7) */}
          <div className="lg:col-span-7 relative rounded-lg overflow-hidden border border-foundation-border bg-foundation-surface flex flex-col justify-between shadow-xl">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/assets/photos/iiserb_campus_venue.jpg"
                alt="IISER Bhopal Lecture Hall Complex Campus Venue"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foundation-bg/90 via-transparent to-transparent" />

              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foundation-surface/90 backdrop-blur-md border border-foundation-border text-xs font-mono text-white">
                <MapPin className="w-3.5 h-3.5 text-qiskit-pink" />
                <span>Lecture Hall Complex (LHC)</span>
              </div>
            </div>

            <div className="p-6 bg-foundation-surface/95 border-t border-foundation-border">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    IISER Bhopal Main Campus
                  </h4>
                  <p className="text-xs font-mono text-[#BDCDEF] mt-0.5">
                    Bhopal Bypass Road, Bhauri, Bhopal, Madhya Pradesh 462066
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=IISER+Bhopal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-foundation-elevated hover:bg-foundation-border border border-foundation-border text-xs font-mono text-white transition-colors self-start sm:self-auto"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#BDCDEF]" />
                </a>
              </div>
            </div>
          </div>

          {/* Transit and Directions Cards (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-foundation-surface border border-foundation-border rounded-lg p-6 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded bg-foundation-elevated border border-foundation-border">
                  <Plane className="w-5 h-5 text-qiskit-blue" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">
                    By Air
                  </h4>
                  <p className="text-xs font-mono text-[#BDCDEF]">
                    Raja Bhoj Airport (BHO)
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#E0E0E0]/80 leading-relaxed font-sans">
                Located approximately 12 km from the IISER Bhopal campus. Pre-paid taxis and app cabs (Ola/Uber) are readily available from the airport terminal (approx. 20-25 min drive).
              </p>
            </div>

            <div className="bg-foundation-surface border border-foundation-border rounded-lg p-6 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded bg-foundation-elevated border border-foundation-border">
                  <Train className="w-5 h-5 text-qiskit-purple" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">
                    By Rail
                  </h4>
                  <p className="text-xs font-mono text-[#BDCDEF]">
                    Bhopal Junction &amp; Rani Kamlapati
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#E0E0E0]/80 leading-relaxed font-sans">
                Bhopal Junction (BPL) is 18 km away; Rani Kamlapati Station (RKMP) is 22 km away. Both major junctions are well connected to all metro cities with direct taxi connections to the campus.
              </p>
            </div>

            <div className="bg-foundation-surface border border-foundation-border rounded-lg p-6 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded bg-foundation-elevated border border-foundation-border">
                  <Navigation className="w-5 h-5 text-qiskit-pink" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">
                    Campus Entry &amp; Security
                  </h4>
                  <p className="text-xs font-mono text-[#BDCDEF]">
                    Gate 1 (Main Gate)
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#E0E0E0]/80 leading-relaxed font-sans">
                Registered participants will present their Fall Fest registration confirmation badge at Gate 1 security for campus entry and guest registration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
