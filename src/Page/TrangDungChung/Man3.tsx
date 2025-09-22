import { useState, useEffect, useRef } from "react";
import WinAlert from "../../Utilities/Components/WinAlert";
import { useSound } from "../../Utilities/Constants/useSound";

const generateCards = () => {
  const icons = ["🍎", "🍌"];
  const cards = [...icons, ...icons]
    .sort(() => Math.random() - 0.5)
    .map((icon, index) => ({
      id: index,
      icon,
      flipped: false,
      matched: false,
    }));
  return cards;
};

export default function Man3() {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [win, setWin] = useState(false);
  const [moves, setMoves] = useState(0);
  const { speakFruit, speakWrong } = useSound();
  const speakRef = useRef({ speakFruit, speakWrong });

  useEffect(() => {
    speakRef.current = { speakFruit, speakWrong };
  }, [speakFruit, speakWrong]);

  const handleFlip = (id: number) => {
    if (flippedCards.length === 2 || win) return;
    setCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, flipped: true } : card))
    );
    setFlippedCards((prev) => [...prev, id]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setMoves((prev) => prev + 1);
      const [first, second] = flippedCards;
      const firstCard = cards.find((c) => c.id === first);
      const secondCard = cards.find((c) => c.id === second);

      if (firstCard && secondCard && firstCard.icon === secondCard.icon) {
        // ✅ đúng
        speakRef.current.speakFruit(firstCard.icon);
        setCards((prev) =>
          prev.map((card) =>
            card.id === first || card.id === second
              ? { ...card, matched: true }
              : card
          )
        );
      } else {
        // ❌ sai
        speakRef.current.speakWrong();
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === first || card.id === second
                ? { ...card, flipped: false }
                : card
            )
          );
        }, 1000);
      }

      setTimeout(() => setFlippedCards([]), 1000);
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    if (cards.every((c) => c.matched)) {
      setWin(true);
    }
  }, [cards]);

  const resetGame = () => {
    setCards(generateCards());
    setFlippedCards([]);
    setWin(false);
    setMoves(0);
  };

  return (
    <div className="container text-center mt-4">
      <h2 className="mb-3">🎮 Trò chơi Lật Thẻ</h2>

      <div className="mb-3">
        <span className="badge bg-info fs-6 me-2">Số lượt: {moves}</span>
      </div>

      {win && (
        <WinAlert
          moves={moves}
          onReplay={resetGame}
          show={win}
          onClose={() => setWin(false)}
        />
      )}

      <div
        className="d-grid gap-2"
        style={{
          gridTemplateColumns: "repeat(4, 90px)",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {cards.map((card) => (
          <button
            key={card.id}
            className={`btn border fw-bold d-flex align-items-center justify-content-center ${
              card.flipped || card.matched ? "btn-light" : "btn-primary"
            }`}
            style={{
              width: "90px",
              height: "90px",
              fontSize: "2rem",
              borderRadius: "10px",
            }}
            onClick={() =>
              !card.flipped && !card.matched && handleFlip(card.id)
            }
          >
            {card.flipped || card.matched ? card.icon : "❓"}
          </button>
        ))}
      </div>
    </div>
  );
}
