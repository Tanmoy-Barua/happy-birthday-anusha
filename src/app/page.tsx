import { Atmosphere } from "@/components/wish/atmosphere";
import { WishExperience } from "@/components/wish/experience";
import { SiteNav } from "@/components/wish/site-nav";

export default function Home() {
  return (
    <div className="relative min-h-dvh">
      <Atmosphere />
      <SiteNav current="home" />
      <WishExperience />
    </div>
  );
}
