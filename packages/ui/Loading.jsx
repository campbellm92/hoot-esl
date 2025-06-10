import { RotatingText } from "@animations";

export default function Loading() {
  return (
    <RotatingText
      texts={["Loading...", "Thanks for waiting!"]}
      mainClassName="px-2 sm:px-2 md:px-3 bg-primary text-3xl text-text-secondary font-semibold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
      staggerFrom={"last"}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      rotationInterval={2000}
    />
  );
}
