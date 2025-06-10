import { useEffect, useState } from "react";
import { shuffleArray } from "@utils";
import { fetchWordDefinition } from "./fetchWordDefinition";
import { useFetchWords } from "@globalhooks";

export function useWordCards(wordListPath) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { words } = useFetchWords(wordListPath);

  useEffect(() => {
    const MAX_PAIRS = 8;
    console.log(words);

    if (!words) return;

    async function loadAndPrepareCards() {
      // del after testing:
      // const wordResponse = await fetch(wordListPath);
      // const allWords = await wordResponse.json();

      const nouns = words.A1["n."];
      const verbs = words.A1["v."];
      const adjectives = words.A1["adj."];

      const allWords = nouns.concat(verbs, adjectives);
      console.log(allWords);

      const shuffledWords = shuffleArray(allWords);

      const validPairs = [];
      let index = 0;
      let matchId = 0;

      while (validPairs.length < MAX_PAIRS && index < shuffledWords.length) {
        const word = shuffledWords[index];
        const definition = await fetchWordDefinition(word);

        if (
          definition &&
          definition !== "No definition found." &&
          definition.trim() !== ""
        ) {
          validPairs.push([
            {
              id: `${matchId}-word`,
              type: "word",
              content: word,
              matchId: `${matchId}`,
            },
            {
              id: `${matchId}-def`,
              type: "definition",
              content: definition,
              matchId: `${matchId}`,
            },
          ]);
          matchId++;
        }

        index++;
      }

      const flatPairsArray = validPairs.flat();
      setCards(shuffleArray(flatPairsArray));
      setIsLoading(false);
    }
    loadAndPrepareCards();
  }, [wordListPath, words]);
  //pass this down to Game.jsx
  return { cards, setCards, isLoading };
}
