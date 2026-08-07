"use client";


import Container from "@/components/layout/Container";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarCTA from "./NavbarCTA";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-5 z-50">
      <Container>
        <nav className="flex h-[72px] items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 backdrop-blur-xl">
          <NavbarLogo />
          <NavbarLinks />
          <NavbarCTA />
        </nav>
      </Container>
    </header>
  );
}