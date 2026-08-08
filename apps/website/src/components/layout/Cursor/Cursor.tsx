"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  /* =====================================================
     RAW MOUSE POSITION
  ===================================================== */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /* =====================================================
     SMOOTH FOLLOWING POSITION
  ===================================================== */

  const smoothX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.35,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.35,
  });

  /* =====================================================
     OUTER RING — EVEN MORE INERTIA
  ===================================================== */

  const ringX = useSpring(mouseX, {
    stiffness: 180,
    damping: 22,
    mass: 0.7,
  });

  const ringY = useSpring(mouseY, {
    stiffness: 180,
    damping: 22,
    mass: 0.7,
  });

  /* =====================================================
     DETECT DESKTOP
  ===================================================== */

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");

    const update = () => {
      setIsDesktop(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  /* =====================================================
     MOUSE TRACKING
  ===================================================== */

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, [isDesktop, mouseX, mouseY]);

  /* =====================================================
     INTERACTIVE ELEMENT DETECTION
  ===================================================== */

  useEffect(() => {
    if (!isDesktop) return;

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement;

      if (
        target.closest(
          "a, button, [role='button'], input, textarea, select, [data-cursor='hover']"
        )
      ) {
        setIsHovering(true);
      }
    };

    const handlePointerOut = (event: PointerEvent) => {
      const target = event.target as HTMLElement;

      if (
        target.closest(
          "a, button, [role='button'], input, textarea, select, [data-cursor='hover']"
        )
      ) {
        setIsHovering(false);
      }
    };

    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    return () => {
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* =====================================================
          AMBIENT GLOW
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          h-20
          w-20
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[22px]
        "
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isVisible ? 0.28 : 0,
          background:
            "radial-gradient(circle, rgba(139,92,246,.55), rgba(103,232,249,.28), transparent 70%)",
        }}
        transition={{
          opacity: {
            duration: 0.2,
          },
        }}
      />

      {/* =====================================================
          OUTER INTERACTION RING
      ===================================================== */}

      <motion.div
  className="
    pointer-events-none
    fixed
    left-0
    top-0
    z-[10000]
    flex
    items-center
    justify-center
    rounded-full
    border
    -translate-x-1/2
    -translate-y-1/2
  "
  style={{
    x: ringX,
    y: ringY,
    opacity: isVisible ? 1 : 0,
  }}
  animate={{
    width: isHovering ? 54 : 34,
    height: isHovering ? 54 : 34,
    borderColor: isHovering
      ? "rgba(103,232,249,.45)"
      : "rgba(255,255,255,.22)",
    boxShadow: isHovering
      ? "0 0 24px rgba(103,232,249,.18), inset 0 0 18px rgba(139,92,246,.08)"
      : "0 0 12px rgba(139,92,246,.08)",
  }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 22,
  }}
  initial={{
    width: 34,
    height: 34,
  }}
/>

      {/* =====================================================
          CENTER DOT
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[10001]
          h-[5px]
          w-[5px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white
        "
        style={{
          x: mouseX,
          y: mouseY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 0.7 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
      />
    </>
  );
}