"use client";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function Finale({ onReplay }: { onReplay: () => void }) {
  return (
    <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 py-16 text-center">
      <Heart className="heartbeat size-10 fill-accent text-accent" />
      <p className="mt-6 text-sm tracking-[0.45em] text-primary uppercase">
        September, and always
      </p>
      <h2 className="mt-4 font-[family-name:var(--font-script)] text-6xl leading-none text-[oklch(0.95_0.04_85)] sm:text-8xl">
        Happy Birthday
      </h2>
      <p className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">
        Anusha
      </p>
      <p className="mt-6 max-w-lg text-xl italic text-[oklch(0.9_0.04_80_/_0.9)]">
        My Ladu. My favorite person. I love you more than this little website can hold —
        but I wanted you to have a night that sparkles just for you.
      </p>
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
