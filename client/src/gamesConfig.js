import testImg from "./assets/test.png";
import wordPuzzlePopperImg from "./assets/word-puzzle-popper.webp";

export const games = [
  {
    name: "Word Puzzle Popper",
    description:
      "Improve your knowledge of nouns, verbs and adjectives in this grouping game.",
    image: wordPuzzlePopperImg,
    languageFocus: "Parts of speech",
    path: "./pages/games/word-puzzle-popper",
    component: () => import("./pages/games/word-puzzle-popper/components/Game"),
    link: "/games/word-puzzle-popper",
  },
  {
    name: "Word Memory Game",
    description:
      "Test your understanding of various words with this memory game",
    image: testImg,
    languageFocus: "Vocabulary",
    path: "./pages/games/word-memory-game",
    component: () => import("./pages/games/word-memory-game/components/Game"),
    link: "/games/word-memory-game",
  },
];
