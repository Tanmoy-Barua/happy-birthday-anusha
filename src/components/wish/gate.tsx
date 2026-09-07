"use client";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function Gate({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 py-16 text-center">
      <p className="rise-in text-sm tracking-[0.45em] text-primary uppercase">
        A private wish
      </p>
      <h1
        className="rise-in mt-6 font-[family-name:var(--font-script)] text-7xl leading-none text-[oklch(0.93_0.05_85)] sm:text-8xl"
        style={{ animationDelay: "120ms" }}
      >
        Anusha
      </h1>
      <p
        className="rise-in mt-4 max-w-md font-serif text-xl italic text-[oklch(0.9_0.04_80_/_0.88)] sm:text-2xl"
        style={{ animationDelay: "220ms" }}
      >
        For my Ladu, on your birthday.
      </p>
      <div
        className="rise-in mt-10 flex flex-col items-center gap-4"
        style={{ animationDelay: "360ms" }}
      >
        <Heart className="heartbeat size-8 fill-accent text-accent" />
        <Button
          size="lg"
          className="glow-pulse h-12 rounded-full border border-primary/40 bg-primary px-8 text-base font-medium tracking-wide text-primary-foreground hover:bg-primary/90"
          onClick={onOpen}
        >
          Open your gift
        </Button>
        <p className="text-sm text-muted-foreground">Made to open together.</p>
      </div>
    </div>
  );
}
