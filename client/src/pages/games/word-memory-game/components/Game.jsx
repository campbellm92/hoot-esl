import { useState } from "react";
import { IntroScreen } from "@localcomponents";
import WordMemoryGame from "./WordMemoryGame";

export default function Game() {
  const [gameHasStarted, setGameHasStarted] = useState(false);

  return (
    <>
      {gameHasStarted ? (
        <WordMemoryGame />
      ) : (
        <IntroScreen
          name="Word Memory Game"
          instructions="Find the definitions for all the words!"
          onStart={() => setGameHasStarted(true)}
        />
      )}
    </>
  );
}
