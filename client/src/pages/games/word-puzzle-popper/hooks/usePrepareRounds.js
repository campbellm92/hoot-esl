import { useEffect, useState } from "react";
import useFetchWords from "./useFetchWords";
import { shuffleArray } from "@utils";

export default function usePrepareRounds(wordListPath, round) {
  const { words, isLoading } = useFetchWords(wordListPath);
  const [gameWords, setGameWords] = useState([]);
  const [correctWords, setCorrectWords] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    if (!words) return;

    try {
      const shuffledNouns = shuffleArray(words.A1["n."]);
      const shuffledVerbs = shuffleArray(words.A1["v."]);
      const shuffledAdjectives = shuffleArray(words.A1["adj."]);

      const categories = [
        { name: "nouns", words: shuffledNouns },
        { name: "verbs", words: shuffledVerbs },
        { name: "adjectives", words: shuffledAdjectives },
      ];

      const correctCategory =
        categories[Math.floor(Math.random() * categories.length)];

      const correctWords = correctCategory.words.slice(0, 5);

      const remainingCategories = categories.filter(
        (category) => category.name !== correctCategory.name
      );

      const incorrectCategory =
        remainingCategories[
          Math.floor(Math.random() * remainingCategories.length)
        ];

      const incorrectWord = incorrectCategory.words[0];

      const gameWordsArray = [...correctWords, incorrectWord];

      const shuffledGameWordsArray = shuffleArray(gameWordsArray);

      setGameWords(shuffledGameWordsArray);
      setCategoryName(correctCategory.name);
      setCorrectWords(correctWords);
    } catch (error) {
      console.log(error);
    }
  }, [words, round]);

  return { gameWords, correctWords, categoryName, isLoading };
}
