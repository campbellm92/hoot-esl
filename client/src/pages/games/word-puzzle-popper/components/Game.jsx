import { useState } from "react";
import { IntroScreen } from "@localcomponents";
import WordPuzzleGame from "./WordPuzzleGame";

export default function Game() {
  const [gameHasStarted, setGameHasStarted] = useState(false);

  return (
    <>
      {gameHasStarted ? (
        <WordPuzzleGame />
      ) : (
        <IntroScreen
          name="Word Puzzle Popper"
          instructions="Click on the five words that belong to either nouns, verbs or adjectives!"
          onStart={() => setGameHasStarted(true)}
        />
      )}
    </>
  );
}
