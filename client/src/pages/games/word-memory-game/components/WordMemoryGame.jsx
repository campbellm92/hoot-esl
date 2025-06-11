// import { useState } from "react";
import { useEffect, useState } from "react";
import { useWordCards } from "../hooks/useWordCards.js";
import MemoryCard from "./MemoryCard.jsx";
import { Loading } from "@ui";
import { Button } from "@ui";

export default function WordMemoryGame() {
  const wordsPath = "/data/a1-words-POS.json";
  const [turns, setTurns] = useState(0);
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showGameCompleted, setShowGameCompleted] = useState(false);
  const [resetGame, setResetGame] = useState(0);
  const { cards, setCards, isLoading } = useWordCards(wordsPath, resetGame); // contains card info from the hook, incl id, type, content, matchId

  function handleChoice(card) {
    if (disabled) return;
    if (cardOne && card.id === cardOne.id) return;
    cardOne ? setCardTwo(card) : setCardOne(card);
  }

  function handleResetTurn() {
    setCardOne(null);
    setCardTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  }

  function handleResetGame() {
    setCards([]);
    setDisabled(false);
    setGameCompleted(false);
    setTurns(0);
    setCards([]);
    setResetGame((prev) => prev + 1);
  }

  useEffect(() => {
    if (cardOne && cardTwo) {
      setDisabled(true);
      if (cardOne.matchId === cardTwo.matchId) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.matchId === cardOne.matchId) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        handleResetTurn();
      } else {
        setTimeout(() => {
          handleResetTurn();
        }, 2000);
      }
    }
  }, [cardOne, cardTwo]);
  console.log(cards);

  useEffect(() => {
    if (cards.length > 0) {
      const allMatched = cards.every((card) => card.matched);
      if (allMatched && !gameCompleted) {
        setGameCompleted(true);
      }
    }
  }, [cards, gameCompleted]);

  useEffect(() => {
    if (gameCompleted && !showGameCompleted) {
      setTimeout(() => {
        setShowGameCompleted(true);
      }, 1500);
    }
  }, [gameCompleted, showGameCompleted]);

  if (gameCompleted && showGameCompleted) {
    return (
      <div className="flex flex-col justify-center items-center w-screen min-h-screen pb-96">
        <h1 className="text-3xl text-text-primary font-semibold mb-6">
          Game Completed!
        </h1>
        <p className="text-xl text-text-primary mb-8">Nice work!</p>
        <p className="text-xl text-text-primary mb-8">Turns taken: {turns}</p>
        <Button onClick={handleResetGame}>Play Again</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {isLoading ? (
        <div className="pb-96">
          <Loading />
        </div>
      ) : (
        <>
          <p className="text-2xl text-text-primary font-medium mb-5">
            Turns taken: {turns}
          </p>
          <div className="grid grid-cols-3 grid-rows-3 md:grid-cols-4 md:grid-rows-4 gap-2">
            {cards.map((card) => (
              <MemoryCard
                key={card.id}
                card={card}
                content={card.content}
                type={card.type}
                handleChoice={handleChoice}
                isFlipped={card === cardOne || card === cardTwo || card.matched}
                disabled={disabled}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
