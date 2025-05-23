import { Button } from "@ui";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center text-center w-10/12 h-auto p-4 border-4 border-text-primary rounded-lg [&>h2]:font-semibold [&>h2]:text-text-primary [&>h2]:mb-10">
      <h2>Improve your English vocabulary with fun games!</h2>
      <Button variant="primary">Discover games</Button>
    </div>
  );
}
