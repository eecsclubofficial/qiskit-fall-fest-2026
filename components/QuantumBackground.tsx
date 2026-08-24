"use client";

import React, { useId } from "react";

export function QuantumBackground() {
  const patternId = useId();

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* Subtle Quantum Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.14]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={patternId}
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 64 0 L 0 0 0 64"
              fill="none"
              stroke="#4589FF"
              strokeWidth="0.75"
              strokeDasharray="2 4"
            />
            <circle cx="0" cy="0" r="1.5" fill="#A46DFF" opacity="0.6" />
            <circle cx="64" cy="0" r="1.5" fill="#A46DFF" opacity="0.6" />
            <circle cx="0" cy="64" r="1.5" fill="#A46DFF" opacity="0.6" />
            <circle cx="64" cy="64" r="1.5" fill="#A46DFF" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      {/* Restrained single accent glow */}
      <div
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[130px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(ellipse at center, #4589FF 0%, #A46DFF 50%, transparent 75%)",
        }}
      />

      {/* Subtle circuit line decoration */}
      <svg
        className="absolute top-12 right-6 md:right-16 w-72 md:w-96 h-72 opacity-25"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M 20 80 H 140 L 180 120 H 320 L 360 160 H 390"
          stroke="#4589FF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 80 20 V 100 L 120 140 V 260 L 160 300 V 380"
          stroke="#A46DFF"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <circle cx="140" cy="80" r="4" fill="#FF7EB6" />
        <circle cx="320" cy="120" r="4" fill="#4589FF" />
        <circle cx="120" cy="140" r="3" fill="#BE95FF" />
        <circle cx="160" cy="300" r="4" fill="#EE5396" />
        <rect
          x="195"
          y="105"
          width="30"
          height="30"
          rx="4"
          fill="#161616"
          stroke="#4589FF"
          strokeWidth="1"
        />
        <text
          x="210"
          y="125"
          fill="#DAE5FC"
          fontSize="11"
          fontFamily="monospace"
          textAnchor="middle"
        >
          H
        </text>
      </svg>
    </div>
  );
}
