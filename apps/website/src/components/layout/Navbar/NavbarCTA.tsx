import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function NavbarCTA() {
  return (
    <Button variant="primary" className="group rounded-full">
      Download
      <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
    </Button>
  );
}