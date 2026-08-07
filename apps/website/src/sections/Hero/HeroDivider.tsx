import { Sparkles } from "lucide-react";

export default function HeroDivider() {
  return (
    <div className="mt-12 flex items-center gap-8">

      <div className="h-px w-40 bg-white/10" />

      <Sparkles
        size={18}
        className="text-violet-400"
      />

      <div className="h-px w-40 bg-white/10" />

    </div>
  );
}