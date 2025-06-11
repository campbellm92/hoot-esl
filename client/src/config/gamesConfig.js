import testImg from "../assets/test.png";
import wordPuzzlePopperImg from "../assets/word-puzzle-popper.webp";

export const games = [
  {
    name: "Word Puzzle Popper",
    description:
      "Improve your knowledge of nouns, verbs and adjectives in this grouping game.",
    image: wordPuzzlePopperImg,
    languageFocus: "Parts of speech",
    path: "../pages/games/word-puzzle-popper",
    component: () =>
      import("../pages/games/word-puzzle-popper/components/Game"),
    link: "/games/word-puzzle-popper",
    config: {
      difficulty: {
        label: "Difficulty",
        type: "select",
        options: ["Easy", "Medium", "Hard"],
        default: "Medium",
      },
      level: {
        label: "Language Level",
        type: "select",
        options: ["A1", "A2", "B1", "B2", "C1"],
      },
    },
  },
  {
    name: "Word Memory Game",
    description:
      "Test your understanding of various words with this memory game",
    image: testImg,
    languageFocus: "Vocabulary",
    path: "../pages/games/word-memory-game",
    component: () => import("../pages/games/word-memory-game/components/Game"),
    link: "/games/word-memory-game",
    config: {
      difficulty: {
        label: "Difficulty",
        type: "select",
        options: ["Easy", "Medium", "Hard"],
        default: "Medium",
      },
      level: {
        label: "Language Level",
        type: "select",
        options: ["A1", "A2", "B1", "B2", "C1"],
      },
    },
  },
];
