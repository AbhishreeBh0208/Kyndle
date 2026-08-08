"use client";

import { motion } from "framer-motion";

export default function HeroWaves() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
      "
    >
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        className="
          absolute
          left-1/2
          top-1/2
          h-[125%]
          w-[125%]
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <defs>
          {/* =================================================
              PRIMARY NEON GRADIENT
          ================================================= */}

          <linearGradient
            id="heroNeon"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
            <stop offset="22%" stopColor="#8B5CF6" stopOpacity="0.7" />
            <stop offset="42%" stopColor="#A78BFA" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#67E8F9" stopOpacity="1" />
            <stop offset="70%" stopColor="#22D3EE" stopOpacity="0.85" />
            <stop offset="88%" stopColor="#8B5CF6" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </linearGradient>

          {/* =================================================
              CYAN CURRENT
          ================================================= */}

          <linearGradient
            id="cyanCurrent"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#67E8F9" stopOpacity="0" />
            <stop offset="35%" stopColor="#67E8F9" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#22D3EE" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#67E8F9" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#67E8F9" stopOpacity="0" />
          </linearGradient>

          {/* =================================================
              PURPLE CURRENT
          ================================================= */}

          <linearGradient
            id="purpleCurrent"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
            <stop offset="30%" stopColor="#8B5CF6" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#8B5CF6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>

          {/* =================================================
              STRONG NEON GLOW
          ================================================= */}

          <filter
            id="strongGlow"
            x="-50%"
            y="-200%"
            width="200%"
            height="500%"
          >
            <feGaussianBlur stdDeviation="14" />
          </filter>

          {/* =================================================
              WIDE ATMOSPHERIC GLOW
          ================================================= */}

          <filter
            id="wideGlow"
            x="-50%"
            y="-300%"
            width="200%"
            height="700%"
          >
            <feGaussianBlur stdDeviation="38" />
          </filter>
        </defs>

        {/* =====================================================
            MASSIVE PURPLE FIELD
        ===================================================== */}

        <motion.g
          animate={{
            x: [-100, 100, -100],
            y: [25, -25, 25],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Wide atmospheric bloom */}

          <path
            d="
              M -300 560
              C 80 150,
                420 170,
                720 430
              C 1020 690,
                1280 700,
                1900 250
            "
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="90"
            opacity="0.085"
            filter="url(#wideGlow)"
          />

          {/* Purple core */}

          <path
            d="
              M -300 560
              C 80 150,
                420 170,
                720 430
              C 1020 690,
                1280 700,
                1900 250
            "
            fill="none"
            stroke="url(#purpleCurrent)"
            strokeWidth="3"
            opacity="0.5"
          />
        </motion.g>

        {/* =====================================================
            MAIN CYAN / PURPLE CURRENT
        ===================================================== */}

        <motion.g
          animate={{
            x: [90, -90, 90],
            y: [-20, 30, -20],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Wide cyan atmospheric bloom */}

          <path
            d="
              M -300 350
              C 80 570,
                390 620,
                700 420
              C 1000 220,
                1270 210,
                1900 560
            "
            fill="none"
            stroke="#22D3EE"
            strokeWidth="75"
            opacity="0.075"
            filter="url(#wideGlow)"
          />

          {/* Additional main-current bloom */}

          <path
            d="
              M -300 350
              C 80 570,
                390 620,
                700 420
              C 1000 220,
                1270 210,
                1900 560
            "
            fill="none"
            stroke="url(#heroNeon)"
            strokeWidth="45"
            opacity="0.055"
            filter="url(#wideGlow)"
          />

          {/* Strong neon bloom */}

          <path
            d="
              M -300 350
              C 80 570,
                390 620,
                700 420
              C 1000 220,
                1270 210,
                1900 560
            "
            fill="none"
            stroke="url(#heroNeon)"
            strokeWidth="14"
            opacity="0.5"
            filter="url(#strongGlow)"
          />

          {/* Sharp neon core */}

          <path
            d="
              M -300 350
              C 80 570,
                390 620,
                700 420
              C 1000 220,
                1270 210,
                1900 560
            "
            fill="none"
            stroke="url(#heroNeon)"
            strokeWidth="2.5"
            opacity="0.85"
          />
        </motion.g>

        {/* =====================================================
            UPPER SWEEP
        ===================================================== */}

        <motion.path
          d="
            M -300 210
            C 100 30,
              400 70,
              700 260
            C 1000 450,
              1250 460,
              1900 120
          "
          fill="none"
          stroke="url(#cyanCurrent)"
          strokeWidth="2"
          opacity="0.45"
          animate={{
            x: [-60, 60, -60],
            y: [10, -20, 10],
          }}
          transition={{
            duration: 34,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            LOWER SWEEP
        ===================================================== */}

        <motion.path
          d="
            M -300 730
            C 100 500,
              400 500,
              700 650
            C 1000 800,
              1320 720,
              1900 430
          "
          fill="none"
          stroke="url(#purpleCurrent)"
          strokeWidth="2.5"
          opacity="0.4"
          animate={{
            x: [70, -70, 70],
            y: [-15, 25, -15],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            TRAVELING ENERGY — MAIN
        ===================================================== */}

        <path
          d="
            M -300 350
            C 80 570,
              390 620,
              700 420
            C 1000 220,
              1270 210,
              1900 560
          "
          fill="none"
          stroke="url(#heroNeon)"
          strokeWidth="8"
          strokeDasharray="200 1000"
          opacity="1"
          filter="url(#strongGlow)"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-1200"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>

        {/* =====================================================
            TRAVELING ENERGY — PURPLE
        ===================================================== */}

        <path
          d="
            M -300 560
            C 80 150,
              420 170,
              720 430
            C 1020 690,
              1280 700,
              1900 250
          "
          fill="none"
          stroke="url(#purpleCurrent)"
          strokeWidth="6"
          strokeDasharray="160 1150"
          opacity="0.9"
          filter="url(#strongGlow)"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-1310"
            dur="11s"
            repeatCount="indefinite"
          />
        </path>

        {/* =====================================================
            SMALLER FAST CURRENT
        ===================================================== */}

        <path
          d="
            M -200 640
            C 150 420,
              420 430,
              700 560
            C 980 690,
              1280 610,
              1800 350
          "
          fill="none"
          stroke="url(#cyanCurrent)"
          strokeWidth="4"
          strokeDasharray="80 900"
          opacity="0.75"
          filter="url(#strongGlow)"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-980"
            dur="7s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
}