//import an img

export const tools = [
  {
    name: "Word Scrambler",
    description:
      "Scramble words for your next vocabulary activity or revision game.",
    // image: wordPuzzlePopperImg,
    path: "../pages/teacher-tools/word-scrambler",
    component: () =>
      import("../pages/teacher-tools/word-scrambler/components/WordScrambler"),
    link: "/teacher-tools/word-scrambler",
  },
];
