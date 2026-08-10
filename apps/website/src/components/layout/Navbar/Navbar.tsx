"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Container from "@/components/layout/Container";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarCTA from "./NavbarCTA";

const mobileLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "Impact",
    href: "#impact",
  },
  {
    label: "Roadmap",
    href: "#roadmap",
  },
  {
    label: "Ranks",
    href: "#ranks",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-3 z-50 sm:top-5">
      <Container>
        <nav
          className="
            relative

            flex
            min-h-[64px]
            items-center
            justify-between

            rounded-full
            border
            border-white/10

            bg-white/[0.05]
            backdrop-blur-xl

            px-4
            sm:h-[72px]
            sm:px-6
          "
        >
          {/* =====================================================
              LOGO
          ===================================================== */}

          <NavbarLogo />

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <div className="hidden items-center md:flex">
            <NavbarLinks />
          </div>

          <div className="hidden md:block">
            <NavbarCTA />
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="
              inline-flex
              h-11
              w-11
              items-center
              justify-center

              rounded-full
              border
              border-white/10

              bg-white/[0.04]

              text-white

              transition-all
              duration-300

              hover:border-white/20
              hover:bg-white/[0.08]

              md:hidden
            "
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1.8} />
            ) : (
              <Menu size={20} strokeWidth={1.8} />
            )}
          </button>

          {/* =====================================================
              MOBILE NAVIGATION
          ===================================================== */}

          <div
            className={`
              absolute
              left-0
              right-0
              top-[calc(100%+10px)]

              overflow-hidden

              rounded-[1.75rem]
              border
              border-white/10

              bg-[#09090d]/95
              backdrop-blur-2xl

              shadow-[0_20px_80px_rgba(0,0,0,0.45)]

              transition-all
              duration-300
              ease-out

              md:hidden

              ${
                menuOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-3 opacity-0"
              }
            `}
          >
            <div className="p-3">
              {/* Links */}

              <div className="flex flex-col">
                {mobileLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="
                      group
                      flex
                      items-center
                      justify-between

                      rounded-2xl
                      px-5
                      py-3.5

                      text-sm
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-zinc-400

                      transition-all
                      duration-300

                      hover:bg-white/[0.05]
                      hover:text-white
                    "
                  >
                    <span>{link.label}</span>

                    <span
                      className="
                        text-violet-300
                        opacity-0
                        transition-all
                        duration-300

                        group-hover:translate-x-1
                        group-hover:opacity-100
                      "
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>

              {/* Divider */}

              <div className="my-2 h-px bg-white/[0.06]" />

              {/* Mobile CTA */}

              <Link
  href="#cta"
  onClick={closeMenu}
  className="
    mr-auto
    flex
    h-10
    w-fit
    items-center
    justify-center
    gap-2

    rounded-full

    bg-gradient-to-r
    from-violet-500
    to-cyan-400

    px-5

    text-xs
    font-medium
    text-white

    shadow-[0_0_20px_rgba(124,58,237,0.18)]

    transition-all
    duration-300

    hover:scale-[1.02]
  "
>
  Download Kyndle
</Link>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
} 