import HeroOrb from "./HeroOrb";
import HeroWaves from "@/components/Hero/HeroWaves";
import HeroActions from "./HeroActions";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
      "
    >
      {/* =====================================================
          BACKGROUND WAVES
      ===================================================== */}

      <div className="absolute inset-0 z-0">
        <HeroWaves />
      </div>

      {/* =====================================================
          ORB / KYNDLE VISUAL
      ===================================================== */}

      <div className="absolute inset-0 z-[1] pointer-events-none">
        <HeroOrb />
      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          flex
          min-h-screen
          w-full
          max-w-6xl
          flex-col
          items-center

          px-5
          pb-16
          pt-32

          text-center

          sm:px-6
          sm:pt-36

          lg:px-8
          lg:pt-40
        "
      >
        {/* =================================================
            EYEBROW
        ================================================= */}

        <p
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.38em]

            text-cyan-300

            sm:text-xs
            sm:tracking-[0.42em]

            drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]
          "
        >
          THE GAMING IDENTITY PLATFORM
        </p>

        {/* =================================================
            HEADLINE
        ================================================= */}

        <h1
          className="
            mt-5

            max-w-4xl

            text-4xl
            font-extralight
            leading-[0.98]
            tracking-[-0.04em]

            text-white

            sm:mt-6
            sm:text-5xl

            md:text-6xl

            lg:text-7xl
            xl:text-8xl
          "
        >
          <span className="block">
            Every Game.
          </span>

          <span
            className="
              block

              bg-gradient-to-r
                from-cyan-200
                via-violet-200
                to-purple-300
                bg-clip-text
                text-transparent

              drop-shadow-[0_0_30px_rgba(139,92,246,0.12)]
            "
          >
            One Identity.
          </span>
        </h1>

        {/* =================================================
            PRODUCT DESCRIPTION
        ================================================= */}

        <p
          className="
            mt-6

            max-w-2xl

            text-sm
            font-light
            leading-7

            text-zinc-200

            sm:mt-7
            sm:text-base
            sm:leading-8

            md:text-lg
          "
        >
          Kyndle brings your gaming progress, achievements, friends and XP
          together across platforms, giving you one identity for everything
          you play, with XP that creates real-world impact.
        </p>

        {/* =================================================
            ACTIONS
        ================================================= */}

        <div className="mt-8 sm:mt-10">
          <HeroActions />
        </div>
      </div>
    </section>
  );
}