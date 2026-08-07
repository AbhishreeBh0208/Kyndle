import { navigation } from "@/config/navigation";

export default function NavbarLinks() {
  return (
    <div className="hidden items-center gap-10 md:flex">
      {navigation.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="text-sm text-zinc-300 transition-all duration-300 hover:text-violet-300"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
}