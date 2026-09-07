"use client";

import { Button } from "@/components/ui/button";
import { useBengaliSpeech } from "@/hooks/use-bengali-speech";
import { letter, letterSpoken } from "@/lib/wish-copy";
import { Pause, Volume2 } from "lucide-react";

export function Letter({ onContinue }: { onContinue: () => void }) {
  const { speaking, supported, speak, stop } = useBengaliSpeech(letterSpoken);

  return (
    <div className="relative z-10 flex min-h-dvh items-center justify-center px-4 py-16">
      <article
        lang="bn"
        className="paper gold-edge rise-in w-full max-w-2xl rounded-2xl px-6 py-10 sm:px-12 sm:py-14"
      >
        <p className="text-center font-[family-name:var(--font-bengali)] text-sm tracking-[0.28em] text-[oklch(0.5_0.1_40)]">
          {letter.kicker}
        </p>
        <h2 className="mt-3 text-center font-[family-name:var(--font-bengali)] text-4xl font-semibold text-[oklch(0.42_0.12_20)] sm:text-5xl">
          {letter.title}
        </h2>
        <div className="mt-8 space-y-5 text-left font-[family-name:var(--font-bengali)] text-lg leading-9 text-[oklch(0.32_0.05_30)] sm:text-xl sm:leading-10">
          {letter.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-10 text-right font-[family-name:var(--font-bengali)] text-2xl font-semibold text-[oklch(0.45_0.12_20)] sm:text-3xl">
          {letter.signoff}
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          {supported ? (
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-[oklch(0.42_0.12_20_/_0.35)] bg-white/40 px-6 font-[family-name:var(--font-bengali)] text-[oklch(0.32_0.08_20)] hover:bg-white/70"
              onClick={speaking ? stop : speak}
            >
              {speaking ? <Pause /> : <Volume2 />}
              {speaking ? letter.stop : letter.listen}
            </Button>
          ) : (
            <p className="max-w-sm text-center font-[family-name:var(--font-bengali)] text-sm text-[oklch(0.42_0.08_30)]">
              {letter.unavailable}
            </p>
          )}
          <Button
            size="lg"
            className="h-12 rounded-full bg-[oklch(0.42_0.12_20)] px-8 font-[family-name:var(--font-bengali)] text-[oklch(0.97_0.02_85)] hover:bg-[oklch(0.36_0.12_20)]"
            onClick={() => {
              stop();
              onContinue();
            }}
          >
            {letter.continue}
          </Button>
        </div>
      </article>
    </div>
  );
}
