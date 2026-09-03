"use client";

import React, { useId } from "react";
import LiquidEther from "./LiquidEther";

export function QuantumBackground() {
  const patternId = useId();

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* Interactive Liquid Ether Canvas throughout the entire website */}
      <div className="absolute inset-0 w-full h-full">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B497CF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={true}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          backgroundColor="#000000"
          lightMode={false}
        />
      </div>

      {/* Subtle Quantum Grid Pattern Overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
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
              stroke="#5227FF"
              strokeWidth="0.75"
              strokeDasharray="2 4"
            />
            <circle cx="0" cy="0" r="1.5" fill="#B497CF" opacity="0.6" />
            <circle cx="64" cy="0" r="1.5" fill="#B497CF" opacity="0.6" />
            <circle cx="0" cy="64" r="1.5" fill="#B497CF" opacity="0.6" />
            <circle cx="64" cy="64" r="1.5" fill="#B497CF" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
