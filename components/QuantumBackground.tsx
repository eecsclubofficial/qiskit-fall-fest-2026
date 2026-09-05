"use client";

import React, { useId, useMemo, useState, useEffect } from "react";
import LiquidEther from "./LiquidEther";

function useReducedMotionAndMobile() {
  const [mode, setMode] = useState<"full" | "mobile" | "reduced">("full");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isMobile = navigator.maxTouchPoints > 0 && window.innerWidth < 768;

    if (mq.matches) {
      setMode("reduced");
    } else if (isMobile) {
      setMode("mobile");
    } else {
      setMode("full");
    }

    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setMode("reduced");
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return mode;
}

export function QuantumBackground() {
  const patternId = useId();
  const mode = useReducedMotionAndMobile();

  const colors = useMemo(() => ["#5227FF", "#FF9FFC", "#B497CF"], []);
  const backgroundColor = useMemo(() => "#000000", []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {mode === "reduced" ? (
        // Reduced motion: static gradient
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, #5227FF22 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, #FF9FFC18 0%, transparent 60%), #000000`,
          }}
        />
      ) : mode === "mobile" ? (
        // Mobile: lightweight LiquidEther with reduced GPU load
        <div className="absolute inset-0 w-full h-full">
          <LiquidEther
            colors={colors}
            mouseForce={0}
            cursorSize={0}
            isViscous={true}
            viscous={50}
            iterationsViscous={4}
            iterationsPoisson={6}
            resolution={0.15}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.3}
            autoIntensity={1.5}
            takeoverDuration={0.5}
            autoResumeDelay={5000}
            autoRampDuration={1.0}
            backgroundColor={backgroundColor}
            lightMode={false}
          />
        </div>
      ) : (
        // Desktop: full LiquidEther
        <div className="absolute inset-0 w-full h-full">
          <LiquidEther
            colors={colors}
            mouseForce={20}
            cursorSize={100}
            isViscous={true}
            viscous={30}
            iterationsViscous={12}
            iterationsPoisson={16}
            resolution={0.35}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
            backgroundColor={backgroundColor}
            lightMode={false}
          />
        </div>
      )}

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
