import { Button } from "@ui";
import scrambleWords from "../utils/scrambleWords";
import { useState } from "react";

export default function WordScrambler() {
  const [words, setWords] = useState("");
  const [scrambledWords, setScrambledWords] = useState([]);
  return (
    <div className="flex flex-col justify-center items-center w-10/12 mt-10">
      <div className="">
        <label htmlFor="words">
          Enter as many words as you like separated by commas or spaces
        </label>
        <textarea
          name="words"
          id="words"
          value={words}
          onChange={(e) => setWords(e.target.value)}
        ></textarea>
        <Button
          type="submit"
          onClick={() => setScrambledWords(scrambleWords(words))}
        >
          Scramble words
        </Button>
        <ul>
          {scrambledWords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
