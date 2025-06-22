import { shuffleArray } from "@utils";

export default function scrambleWords(words) {
  const wordList = words
    .split(/[\s,]+/) // split on spaces or commas
    .filter(Boolean); // remove any empty strings
  return wordList.map((word) =>
    shuffleArray(word.split("")).join("").toLowerCase()
  );
}
