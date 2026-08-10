"use client";

import { motion } from "framer-motion";

export default function HeroOrb() {
  return (
    <div
      className="
        absolute
        left-1/2
        top-1/2
        z-10
        h-[500px]
        w-[500px]
        -translate-x-1/2
        -translate-y-[48%]
      "
    >

      {/* =====================================================
    SUBTLE NEON OUTER ATMOSPHERE

    No hard border — only a soft purple/cyan bloom
    around the circumference.
===================================================== */}

<div
  className="
    pointer-events-none
    absolute
    -inset-[18px]
    rounded-full
    blur-[5px]
  "
  style={{
    background: `
      conic-gradient(
        from 215deg,
        rgba(124,58,237,0.00) 0deg,
        rgba(139,92,246,0.16) 70deg,
        rgba(167,139,250,0.13) 120deg,
        rgba(103,232,249,0.18) 180deg,
        rgba(34,211,238,0.12) 240deg,
        rgba(139,92,246,0.10) 310deg,
        rgba(124,58,237,0.00) 360deg
      )
    `,
    WebkitMask:
      "radial-gradient(farthest-side, transparent 72%, #000 88%, transparent 100%)",
    mask:
      "radial-gradient(farthest-side, transparent 72%, #000 88%, transparent 100%)",
  }}
/>

      {/* =====================================================
          SOFT ATMOSPHERIC BLUR

          No border.
          No visible sphere.
          Just a subtle diffusion of the background.
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          overflow-hidden
          rounded-full
        "
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",

          background: `
            radial-gradient(
              circle at 32% 40%,
              rgba(139,92,246,0.045),
              transparent 48%
            ),

            radial-gradient(
              circle at 68% 48%,
              rgba(103,232,249,0.045),
              transparent 50%
            ),

            rgba(8,8,18,0.018)
          `,
        }}
      />

      {/* =====================================================
          VERY SOFT INNER DEPTH

          Barely visible — prevents the orb from feeling like
          a hard circular boundary while retaining the glass
          effect.
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
        "
        style={{
          background: `
            radial-gradient(
              circle at 50% 50%,
              rgba(255,255,255,0.012),
              transparent 62%
            )
          `,
        }}
      />
    </div>
  );
}