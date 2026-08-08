"use client";

import Link from "next/link";
import Image from "next/image";

export default function NavbarLogo() {
  return (
    <Link
      href="#hero"
      aria-label="Go to Kyndle home"
      className="
        inline-flex
        items-center
        gap-4
        transition-opacity
        duration-300
        hover:opacity-80
      "
    >
      <Image
        src="/Kyndle Logo Gradient.svg"
        alt="Kyndle"
        width={42}
        height={52}
        priority
        className="h-[52px] w-[42px] object-contain"
      />

      <span
        className="
          text-xl
          font-semibold
          tracking-[0.15em]
          uppercase
          text-white
        "
      >
        KYNDLE
      </span>
    </Link>
  );
}