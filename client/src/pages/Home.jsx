import Hero from "../sections/home/Hero";
import GamesGrid from "../sections/home/GamesGrid";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <Hero />
      <GamesGrid />
    </div>
  );
}
