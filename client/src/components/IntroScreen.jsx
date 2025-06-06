import { Button } from "@ui";
import { SlideInContent } from "@animations";

export default function IntroScreen({ name, instructions, onStart }) {
  return (
    <SlideInContent distance={300} reverse={true}>
      <div className="flex justify-center items-center text-center w-screen min-h-screen pb-96">
        <div className="w-1/2 h-auto p-4 rounded-md border-4 border-primary">
          <h1 className="text-3xl font-semibold mb-4">{name}</h1>
          <p className="text-xl mb-4">{instructions}</p>
          <Button onClick={onStart}>Play Game</Button>
        </div>
      </div>
    </SlideInContent>
  );
}
