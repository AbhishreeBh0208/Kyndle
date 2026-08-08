"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import Container from "@/components/layout/Container";

const particles = [
  { left: "5%", top: "18%", delay: 0, duration: 5.5 },
  { left: "13%", top: "72%", delay: 1.2, duration: 6 },
  { left: "23%", top: "32%", delay: 2, duration: 5.5 },
  { left: "34%", top: "82%", delay: 0.7, duration: 7 },
  { left: "47%", top: "16%", delay: 1.8, duration: 5 },
  { left: "58%", top: "74%", delay: 2.5, duration: 6.5 },
  { left: "69%", top: "26%", delay: 0.4, duration: 5.5 },
  { left: "79%", top: "66%", delay: 1.5, duration: 7 },
  { left: "90%", top: "30%", delay: 2.2, duration: 6 },
  { left: "96%", top: "78%", delay: 0.8, duration: 5.8 },
];

export default function CTA() {
  return (
    <section
      id="cta"
      className="
        relative
        z-10
        isolate
        overflow-visible
        py-32
        lg:py-44
      "
    >
      {/* =====================================================
          DEEP AMBIENT FIELD
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0

          h-[800px]
          w-[1200px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-gradient-to-r
          from-violet-600/[0.10]
          via-cyan-400/[0.07]
          to-violet-500/[0.10]

          blur-[160px]
        "
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.45, 0.8, 0.45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          SECONDARY MOVING LIGHT
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0

          h-[420px]
          w-[900px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-cyan-400/[0.06]

          blur-[120px]
        "
        animate={{
          x: [-140, 140, -140],
          y: [50, -50, 50],
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.65, 0.25],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          SOFT VIOLET LIGHT
          
          Replaces the old orbital geometry.
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-[15%]
          z-0

          h-[360px]
          w-[360px]

          rounded-full

          bg-violet-500/[0.055]

          blur-[120px]
        "
        animate={{
          x: [-40, 50, -40],
          y: [20, -30, 20],
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.65, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          SOFT CYAN LIGHT
          
          Gives the background depth without creating
          circular / orbital shapes.
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[10%]
          bottom-[10%]
          z-0

          h-[420px]
          w-[420px]

          rounded-full

          bg-cyan-400/[0.045]

          blur-[140px]
        "
        animate={{
          x: [40, -45, 40],
          y: [-20, 35, -20],
          scale: [1, 1.12, 1],
          opacity: [0.25, 0.6, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          DIAGONAL ENERGY PATHS

          These are intentionally subtle and non-orbital.
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          overflow-hidden
        "
      >
        {/* Violet energy line */}

        <motion.div
          className="
            absolute
            left-[-15%]
            top-[38%]

            h-px
            w-[130%]

            rotate-[8deg]

            bg-gradient-to-r
            from-transparent
            via-violet-400/25
            to-transparent

            shadow-[0_0_20px_rgba(139,92,246,0.25)]
          "
          animate={{
            x: ["-6%", "6%", "-6%"],
            opacity: [0.1, 0.55, 0.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cyan energy line */}

        <motion.div
          className="
            absolute
            left-[-15%]
            top-[63%]

            h-px
            w-[130%]

            -rotate-[6deg]

            bg-gradient-to-r
            from-transparent
            via-cyan-400/25
            to-transparent

            shadow-[0_0_20px_rgba(34,211,238,0.28)]
          "
          animate={{
            x: ["6%", "-6%", "6%"],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Fast light streak */}

        <motion.div
          className="
            absolute
            left-[-15%]
            top-[51%]

            h-[2px]
            w-[22%]

            rounded-full

            bg-gradient-to-r
            from-transparent
            via-white/30
            to-cyan-300/60

            blur-[1px]
          "
          animate={{
            x: ["0%", "520%"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* =====================================================
          ENERGY PARTICLES
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute

          -left-[5vw]
          -right-[5vw]
          -top-[15vh]
          -bottom-[15vh]

          z-0
        "
      >
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="
              absolute

              h-[3px]
              w-[3px]

              rounded-full

              bg-cyan-300

              shadow-[0_0_14px_rgba(103,232,249,0.8)]
            "
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-12, 12, -12],
              opacity: [0.08, 0.75, 0.08],
              scale: [0.5, 1.4, 0.5],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-20

            mx-auto
            max-w-5xl

            text-center
          "
        >
          {/* =================================================
              EYEBROW
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.15,
              duration: 0.6,
            }}
            className="
              mb-8
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <motion.span
              className="
                h-px
                w-10

                bg-gradient-to-r
                from-transparent
                to-cyan-400/60
              "
              animate={{
                width: [40, 70, 40],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.4em]
                text-cyan-300
              "
            >
              GAMING, REIMAGINED
            </span>

            <motion.span
              className="
                h-px
                w-10

                bg-gradient-to-r
                from-cyan-400/60
                to-transparent
              "
              animate={{
                width: [40, 70, 40],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* =================================================
              HEADLINE
          ================================================= */}

          <div
            className="
              relative
              mx-auto
              max-w-5xl
            "
          >
            {/* Soft glow behind heading */}

            <motion.div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2

                h-[220px]
                w-[700px]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-gradient-to-r
                from-violet-500/[0.10]
                via-cyan-400/[0.07]
                to-violet-500/[0.10]

                blur-[110px]
              "
              animate={{
                scale: [0.85, 1.2, 0.85],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.25,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative

                text-6xl
                font-extralight
                leading-[0.98]
                tracking-tight

                md:text-7xl
                lg:text-8xl
              "
            >
              <span className="text-white">
                Your games.
              </span>

              <br />

              <motion.span
                className="
                  inline-block

                  bg-gradient-to-r
                  from-cyan-200
                  via-violet-200
                  to-purple-300

                  bg-clip-text
                  text-transparent
                "
                animate={{
                  backgroundPosition: [
                    "0% 50%",
                    "100% 50%",
                    "0% 50%",
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Your identity.
              </motion.span>
            </motion.h2>
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.45,
              duration: 0.7,
            }}
            className="
              mx-auto
              mt-9
              max-w-2xl

              text-lg
              leading-8

              text-zinc-400

              md:text-xl
            "
          >
            Bring your gaming world together and make
            every bit of XP count beyond the screen.
          </motion.p>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.6,
              duration: 0.7,
            }}
            className="
              mt-12

              flex
              flex-col
              items-center
              justify-center
              gap-4

              sm:flex-row
            "
          >
            {/* DOWNLOAD */}

            <motion.button
              whileHover={{
                scale: 1.06,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                relative

                inline-flex
                h-14

                items-center
                gap-3

                overflow-hidden

                rounded-full

                bg-gradient-to-r
                from-violet-500
                via-purple-500
                to-cyan-400

                px-8

                text-sm
                font-medium
                text-white

                shadow-[0_0_35px_rgba(124,58,237,0.28)]

                transition-shadow
                duration-300

                hover:shadow-[0_0_65px_rgba(124,58,237,0.55)]
              "
            >
              {/* Moving highlight */}

              <motion.span
                className="
                  absolute
                  inset-y-0
                  -left-1/2
                  w-1/3

                  skew-x-[-20deg]

                  bg-white/25

                  blur-md
                "
                animate={{
                  left: ["-50%", "150%"],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut",
                }}
              />

              {/* Outer pulse */}

              <motion.span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-full

                  ring-1
                  ring-white/20
                "
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <span className="relative z-10">
                Download Kyndle
              </span>

              <motion.span
                className="relative z-10"
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>

            {/* DISCORD */}

            <motion.button
              whileHover={{
                scale: 1.04,
                borderColor: "rgba(255,255,255,0.22)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group

                inline-flex
                h-14

                items-center
                gap-2

                rounded-full

                border
                border-white/[0.10]

                bg-white/[0.025]

                px-8

                text-sm
                font-medium

                text-zinc-300

                backdrop-blur-xl

                transition-all
                duration-300

                hover:bg-white/[0.06]
                hover:text-white
              "
            >
              <motion.span
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles
                  size={16}
                  className="text-violet-300"
                />
              </motion.span>

              Join Discord
            </motion.button>
          </motion.div>

          {/* =================================================
              BOTTOM ENERGY MARK
          ================================================= */}

          <motion.div
            className="
              mx-auto
              mt-16

              flex
              items-center
              justify-center
              gap-5
            "
            animate={{
              opacity: [0.3, 0.85, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="
                h-px
                w-20

                bg-gradient-to-r
                from-transparent
                to-violet-400/40
              "
              animate={{
                width: [60, 100, 60],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              animate={{
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Sparkles
                size={17}
                className="text-violet-300"
              />
            </motion.div>

            <motion.div
              className="
                h-px
                w-20

                bg-gradient-to-l
                from-transparent
                to-cyan-400/40
              "
              animate={{
                width: [60, 100, 60],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}