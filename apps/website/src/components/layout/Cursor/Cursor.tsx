"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function KyndleCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 650,
    damping: 38,
    mass: 0.18,
  });

  const y = useSpring(mouseY, {
    stiffness: 650,
    damping: 38,
    mass: 0.18,
  });

  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      setVisible(true);
    };

    const handleOver = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const element = target.closest(
        "a, button, [data-cursor='interactive']"
      );

      setInteractive(Boolean(element));
    };

    const handleDown = () => {
      setClicking(true);

      window.setTimeout(() => {
        setClicking(false);
      }, 450);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mousedown", handleDown);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* =====================================================
          NATIVE CURSOR
      ===================================================== */}

      <style>{`
        @media (pointer: fine) {
          html,
          body,
          * {
            cursor: none !important;
          }
        }

        @media (pointer: coarse) {
          .kyndle-cursor {
            display: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          KYNDLE CORE CURSOR
      ===================================================== */}

      <motion.div
        className="
          kyndle-cursor

          pointer-events-none
          fixed
          left-0
          top-0

          z-[9999]
        "
        style={{
          x,
          y,
          opacity: visible ? 1 : 0,
        }}
      >
        {/* ===================================================
            SOFT OUTER GLOW
        =================================================== */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-violet-500/15
            blur-xl
          "
          animate={{
            width: interactive ? 60 : 34,
            height: interactive ? 60 : 34,
            opacity: interactive ? 0.7 : 0.4,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
        />

        {/* ===================================================
            OUTER BROKEN RING
        =================================================== */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2

            h-[30px]
            w-[30px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            border-2
            border-transparent

            border-t-violet-300/80
            border-r-violet-300/30
          "
          animate={{
            rotate: 360,
            scale: interactive ? 1.35 : 1,
          }}
          transition={{
            rotate: {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 0.25,
              ease: "easeOut",
            },
          }}
        />

        {/* ===================================================
            SECOND CYAN ARC
        =================================================== */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2

            h-[22px]
            w-[22px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            border-2
            border-transparent

            border-b-cyan-300/80
            border-l-cyan-300/30
          "
          animate={{
            rotate: -360,
            scale: interactive ? 1.45 : 1,
          }}
          transition={{
            rotate: {
              duration: 3.5,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 0.25,
              ease: "easeOut",
            },
          }}
        />

        {/* ===================================================
            CORE
        =================================================== */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            h-[6px]
            w-[6px]

            rounded-full

            bg-cyan-100

            shadow-[0_0_12px_rgba(103,232,249,1)]
          "
          animate={{
            scale: interactive ? 1.35 : 1,
          }}
          transition={{
            duration: 0.2,
          }}
        />

        {/* ===================================================
            INNER VIOLET CORE
        =================================================== */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            h-[3px]
            w-[3px]

            rounded-full

            bg-violet-300
          "
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ===================================================
            INTERACTIVE EXPANSION RING
        =================================================== */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            border
            border-cyan-300/40
          "
          animate={{
            width: interactive ? 46 : 0,
            height: interactive ? 46 : 0,
            opacity: interactive ? 1 : 0,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
        />

        {/* ===================================================
            CLICK PULSE
        =================================================== */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            border
            border-violet-300/60
          "
          animate={
            clicking
              ? {
                  width: [22, 58],
                  height: [22, 58],
                  opacity: [0.8, 0],
                }
              : {
                  width: 22,
                  height: 22,
                  opacity: 0,
                }
          }
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
        />
      </motion.div>
    </>
  );
}