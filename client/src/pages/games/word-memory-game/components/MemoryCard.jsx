import { cleanDefinitions } from "@utils";
import styles from "./MemoryCard.module.css";

export default function MemoryCard({
  card,
  content,
  type,
  handleChoice,
  isFlipped,
  disabled,
}) {
  function handleClick() {
    if (!disabled) {
      handleChoice(card);
    }
  }

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={`${styles.cardInner} ${isFlipped ? styles.flipped : ""}`}>
        <div className={styles.cardFront}></div>
        <div
          className={`${styles.cardBack} ${
            type === "definition" ? styles.definition : styles.word
          }`}
        >
          {cleanDefinitions(content)}
        </div>
      </div>
    </div>
  );
}
