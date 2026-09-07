"use client";

import { Cake } from "@/components/wish/cake";
import { Envelope } from "@/components/wish/envelope";
import { Finale } from "@/components/wish/finale";
import { Gate } from "@/components/wish/gate";
import { Letter } from "@/components/wish/letter";
import { Reasons } from "@/components/wish/reasons";
import confetti from "canvas-confetti";
import { useCallback, useState } from "react";

type Stage = "gate" | "envelope" | "letter" | "reasons" | "cake" | "finale";

const stages: Stage[] = ["gate", "envelope", "letter", "reasons", "cake", "finale"];

function celebrate() {
  const end = Date.now() + 1400;
  const colors = ["#e8c872", "#d46a6a", "#f4e4c1", "#fff7ea"];

  const frame = () => {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  };

  frame();
}

export function WishExperience() {
  const [stage, setStage] = useState<Stage>("gate");
  const [opened, setOpened] = useState(false);

  const go = useCallback((next: Stage) => {
    setStage(next);
    if (next === "finale") celebrate();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {stage === "gate" ? <Gate onOpen={() => go("envelope")} /> : null}
      {stage === "envelope" ? (
        <Envelope
          opened={opened}
          onOpen={() => setOpened(true)}
          onRead={() => go("letter")}
        />
      ) : null}
      {stage === "letter" ? <Letter onContinue={() => go("reasons")} /> : null}
      {stage === "reasons" ? <Reasons onContinue={() => go("cake")} /> : null}
      {stage === "cake" ? <Cake onContinue={() => go("finale")} /> : null}
      {stage === "finale" ? (
        <Finale
          onReplay={() => {
            setOpened(false);
            go("gate");
          }}
        />
      ) : null}
      <nav className="pointer-events-none fixed inset-x-0 bottom-5 z-20 flex justify-center gap-2">
        {stages.map((item) => (
          <span
            key={item}
            className={`h-1.5 w-6 rounded-full ${
              item === stage ? "bg-primary" : "bg-white/20"
            }`}
          />
        ))}
      </nav>
    </div>
  );
}
