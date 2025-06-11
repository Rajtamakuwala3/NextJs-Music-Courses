import Link from "next/link";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";

function HeroSection() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden 
    mx-auto py-10 md:py-0"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Krupa Auto Gas
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          One-stop solution for all CNG-related problems in your vehicle. We
          specialize in diagnostics, repair, and maintenance of CNG systems. As
          an authorized Vanaz partner, we provide genuine CNG spare parts and
          expert service you can trust.
        </p>
        <div className="mt-4">
          <Link href="/courses">
            <Button>Explore courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
