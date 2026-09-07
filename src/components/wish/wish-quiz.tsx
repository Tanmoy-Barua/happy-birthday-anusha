"use client";

import { Button } from "@/components/ui/button";
import { HeartLock } from "@/components/wish/heart-lock";
import { answersMatch, type Milestone } from "@/lib/milestones";
import { useState } from "react";

export function WishQuiz({
  milestone,
  onClose,
  onUnlock,
}: {
  milestone: Milestone;
  onClose: () => void;
  onUnlock: () => void;
}) {
  const [guess, setGuess] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const submit = () => {
    if (answersMatch(guess, milestone.answers)) {
      onUnlock();
      return;
    }
    setError(milestone.wrong);
    setShake(true);
    window.setTimeout(() => setShake(false), 450);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/65 p-4 sm:items-center"
      onClick={onClose}
    >
      <div
        className={`paper gold-edge w-full max-w-md rounded-3xl px-6 py-7 text-[oklch(0.28_0.05_30)] ${shake ? "quiz-shake" : ""}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex justify-center">
          <HeartLock className="h-16 w-14 heartbeat" />
        </div>
        <p className="mt-3 text-center text-xs tracking-[0.35em] text-[oklch(0.5_0.1_40)] uppercase">
          Heart passcode {String(milestone.id).padStart(2, "0")}
        </p>
        <h3 className="mt-3 text-center font-[family-name:var(--font-display)] text-2xl">
          {milestone.question}
        </h3>
        <p className="mt-2 text-center text-sm italic text-[oklch(0.42_0.06_30)]">
          Hint: {milestone.hint}
        </p>
        <input
          autoFocus
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value);
            setError("");
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") submit();
          }}
          placeholder="Type the secret…"
          className="mt-5 h-12 w-full rounded-full border border-[oklch(0.42_0.12_20_/_0.25)] bg-white/80 px-4 text-center text-base outline-none focus:ring-2 focus:ring-primary/50"
        />
        {error ? (
          <p className="mt-3 text-center text-sm text-[oklch(0.5_0.16_20)]">{error}</p>
        ) : null}
        <div className="mt-5 flex gap-2">
          <Button
            className="h-11 flex-1 rounded-full bg-[oklch(0.42_0.12_20)] text-[oklch(0.97_0.02_85)] hover:bg-[oklch(0.36_0.12_20)]"
            onClick={submit}
          >
            Unlock the heart
          </Button>
          <Button
            variant="outline"
            className="h-11 rounded-full px-4 text-[oklch(0.32_0.06_20)]"
            onClick={onClose}
          >
            Later
          </Button>
        </div>
      </div>
    </div>
  );
}
