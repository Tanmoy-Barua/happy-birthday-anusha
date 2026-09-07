"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Envelope({
  opened,
  onOpen,
  onRead,
}: {
  opened: boolean;
  onOpen: () => void;
  onRead: () => void;
}) {
  return (
    <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 py-16">
      <p className="mb-8 text-center text-sm tracking-[0.4em] text-primary uppercase">
        A letter for Ladu
      </p>
      <button
        type="button"
        onClick={opened ? undefined : onOpen}
        className="group relative h-48 w-[min(92vw,22rem)] sm:h-56"
        style={{ perspective: "900px" }}
        aria-label={opened ? "Letter opened" : "Open the envelope"}
      >
        <div className="absolute inset-x-0 bottom-0 h-[72%] rounded-md bg-[linear-gradient(180deg,oklch(0.62_0.14_25),oklch(0.42_0.1_20))] gold-edge" />
        <div
          className={cn(
            "absolute inset-x-0 top-0 z-20 origin-top rounded-t-md border-b border-[oklch(0.78_0.12_55_/_0.35)] bg-[linear-gradient(180deg,oklch(0.7_0.14_20),oklch(0.5_0.12_18))] transition-transform duration-700",
            opened ? "-translate-y-1" : ""
          )}
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            height: "58%",
            transform: opened ? "rotateX(-165deg)" : "rotateX(0deg)",
            transformStyle: "preserve-3d",
          }}
        />
        <div
          className={cn(
            "absolute left-1/2 top-[18%] z-10 h-[70%] w-[86%] -translate-x-1/2 rounded-sm paper p-4 text-left shadow-lg transition-transform duration-700",
            opened ? "-translate-y-16" : "translate-y-6"
          )}
        >
          <p className="font-[family-name:var(--font-script)] text-3xl text-[oklch(0.45_0.12_20)]">
            Anusha
          </p>
          <p className="mt-2 text-sm italic text-[oklch(0.4_0.06_30)]">
            Happy birthday, my Ladu.
          </p>
        </div>
        <div className="absolute left-1/2 top-[42%] z-30 flex size-12 -translate-x-1/2 items-center justify-center rounded-full bg-[oklch(0.42_0.14_20)] ring-2 ring-[oklch(0.78_0.12_55)]">
          <span className="font-[family-name:var(--font-script)] text-2xl text-primary">
            L
          </span>
        </div>
      </button>
      <div className="mt-10 flex flex-col items-center gap-3">
        {!opened ? (
          <Button
            size="lg"
            className="h-12 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            onClick={onOpen}
          >
            Break the seal
          </Button>
        ) : (
          <Button
            size="lg"
            className="h-12 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            onClick={onRead}
          >
            Read the letter
          </Button>
        )}
      </div>
    </div>
  );
}
