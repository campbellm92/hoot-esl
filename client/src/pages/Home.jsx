import Hero from "../sections/home/Hero";
import GamesGrid from "../sections/home/GamesGrid";
import Tools from "../sections/home/Tools";
import ToolsGrid from "../sections/home/ToolsGrid";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <Hero />
      <GamesGrid />
      <Tools />
      <ToolsGrid />
    </div>
  );
}
