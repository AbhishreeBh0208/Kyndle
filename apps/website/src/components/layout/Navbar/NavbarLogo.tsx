import Image from "next/image";

export default function NavbarLogo() {
  return (
<div className="flex items-center gap-3">
  <Image
    src="/Kyndle Logo Gradient.svg"
    alt="Kyndle Logo"
    width={30}
    height={30}
    priority
  />

  <span
    className="
      text-xl
      pl-1
      font-semibold
      tracking-[0.15em]
      uppercase
      text-white
    "
  >
    KYNDLE
  </span>
</div>
  );
}