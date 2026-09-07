"use client";

import { Button } from "@/components/ui/button";
import { reasons } from "@/lib/wish-copy";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Reasons({ onContinue }: { onContinue: () => void }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-5xl flex-col justify-center px-4 py-16">
      <div className="text-center">
        <p className="text-sm tracking-[0.4em] text-primary uppercase">Six little truths</p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl sm:text-5xl">
          Why I love you, Anusha
        </h2>
        <p className="mt-3 text-lg italic text-muted-foreground">
          Tap a card. Let it open slowly.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, index) => {
          const isOpen = open === index;
          return (
            <button
              key={reason.title}
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              className={cn(
                "rounded-2xl border px-5 py-6 text-left transition-all duration-300 gold-edge",
                isOpen
                  ? "border-primary/50 bg-[oklch(0.28_0.06_20)]"
                  : "border-white/10 bg-[oklch(0.22_0.04_20_/_0.72)] hover:border-primary/30"
              )}
            >
              <p className="text-xs tracking-[0.3em] text-primary uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
                {reason.title}
              </h3>
              <p
                className={cn(
                  "mt-3 text-base leading-7 text-[oklch(0.9_0.03_80_/_0.88)] transition-all",
                  isOpen ? "max-h-40 opacity-100" : "max-h-12 opacity-80 line-clamp-2"
                )}
              >
                {reason.body}
              </p>
            </button>
          );
        })}
      </div>
      <div className="mt-10 flex justify-center">
        <Button
          size="lg"
          className="h-12 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
          onClick={onContinue}
        >
          Open your ten wishes
        </Button>
      </div>
    </div>
  );
}
