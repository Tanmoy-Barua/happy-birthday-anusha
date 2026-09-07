import type { Metadata } from "next";
import { Atmosphere } from "@/components/wish/atmosphere";
import { Milestones } from "@/components/wish/milestones";
import { SiteNav } from "@/components/wish/site-nav";

export const metadata: Metadata = {
  title: "Ten wishes for Ladu — Anusha",
  description: "Ten photo milestones for Anusha. The first opens now; each next wish unlocks after one hour.",
};

export default function MilestonesPage() {
  return (
    <main className="relative min-h-dvh">
      <Atmosphere />
      <SiteNav current="milestones" />
      <Milestones />
    </main>
  );
}
