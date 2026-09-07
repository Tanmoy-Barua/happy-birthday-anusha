"use client";

import { Button } from "@/components/ui/button";
import { VinylPlayer } from "@/components/wish/vinyl-player";
import { Heart } from "lucide-react";

export function Finale({ onReplay }: { onReplay: () => void }) {
  return (
    <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 pb-24 pt-12 text-center">
      <Heart className="heartbeat size-8 fill-accent text-accent" />
      <h2 className="mt-4 font-[family-name:var(--font-script)] text-5xl leading-none text-[oklch(0.95_0.04_85)] sm:text-7xl">
        Happy birthday to my love
      </h2>
      <p className="mt-3 font-[family-name:var(--font-display)] text-2xl text-[oklch(0.92_0.04_80)] sm:text-3xl">
        Anusha · Ladu
      </p>
      <VinylPlayer />
      <Button
        size="lg"
        variant="outline"
        className="mt-10 h-12 rounded-full border-primary/40 bg-transparent px-8 text-foreground hover:bg-white/5"
        onClick={onReplay}
      >
        Open it again
      </Button>
    </div>
  );
}
