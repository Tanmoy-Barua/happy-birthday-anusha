"use client";

import { Button } from "@/components/ui/button";
import { letterParagraphs } from "@/lib/wish-copy";

export function Letter({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="relative z-10 flex min-h-dvh items-center justify-center px-4 py-16">
      <article className="paper gold-edge rise-in w-full max-w-2xl rounded-2xl px-6 py-10 sm:px-12 sm:py-14">
        <p className="text-center text-xs tracking-[0.4em] text-[oklch(0.5_0.1_40)] uppercase">
          Written for you
        </p>
        <h2 className="mt-3 text-center font-[family-name:var(--font-script)] text-5xl text-[oklch(0.42_0.12_20)] sm:text-6xl">
          My Ladu
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-8 text-[oklch(0.32_0.05_30)] sm:text-xl sm:leading-9">
          {letterParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-10 text-right font-[family-name:var(--font-script)] text-4xl text-[oklch(0.45_0.12_20)]">
          Always yours
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            className="h-12 rounded-full bg-[oklch(0.42_0.12_20)] px-8 text-[oklch(0.97_0.02_85)] hover:bg-[oklch(0.36_0.12_20)]"
            onClick={onContinue}
          >
            I have more for you
          </Button>
        </div>
      </article>
    </div>
  );
}
