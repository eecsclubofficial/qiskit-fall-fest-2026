"use client";

import React, { useId, useMemo, useState, useEffect } from "react";
import LiquidEther from "./LiquidEther";

function useReducedMotionAndMobile() {
  const [shouldReduce, setShouldReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isMobile = navigator.maxTouchPoints > 0 && window.innerWidth < 768;
    setShouldReduce(mq.matches || isMobile);
    const handler = (e: MediaQueryListEvent) => setShouldReduce(e.matches || isMobile);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return shouldReduce;
}

export function QuantumBackground() {
  const patternId = useId();
  const shouldReduce = useReducedMotionAndMobile();

  const colors = useMemo(() => ["#5227FF", "#FF9FFC", "#B497CF"], []);
  const backgroundColor = useMemo(() => "#000000", []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {shouldReduce ? (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, #5227FF22 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, #FF9FFC18 0%, transparent 60%), #000000`,
          }}
        />
      ) : (
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
